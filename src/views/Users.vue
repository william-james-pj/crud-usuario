<template>
    <div id="users-container">
        <p id="users-title">Users</p>
        <div id="users-buttons-container" class="display-flex">
            <div
                id="users-button-add"
                class="display-flex"
                @click="modalAddClick()"
            >
                <font-awesome-icon
                    id="users-button-icon"
                    icon="user-plus"
                    size="lg"
                />
                <p>Add</p>
            </div>
            <div id="users-search">
                <input
                    id="users-search-input"
                    type="text"
                    name="users-search-input"
                    placeholder="Seach..."
                />
            </div>
        </div>
        <div id="users-table">
            <div id="users-table-header">
                <TableColum
                    nameProps="Name"
                    emailProps="Email"
                    roleProps="Role"
                    :iconsProps="false"
                />
            </div>
            <div id="users-table-columns">
                <div v-for="date in response" :key="date.email">
                    <TableColum
                        :nameProps="date.name"
                        :emailProps="date.email"
                        :roleProps="date.role"
                        :iconsProps="true"
                        @openEdit="modalEditClick(date.id)"
                        @openDelete="modalDeleteClick(date.id)"
                    />
                </div>
            </div>
        </div>
        <ModalAdd
            v-if="!modalAddClose"
            @close="modalAddClick()"
            @loader="loaderUser()"
        />
        <ModalEdit
            v-if="!modalEditClose"
            :idProps="editUserId"
            @close="modalEditClick()"
            @loader="loaderUser()"
        />
        <ModalDelete
            v-if="!modalDeleteClose"
            @close="modalDeleteClick()"
            @delete="deleteUser()"
        />
    </div>
</template>

<script>
import axios from "axios";

import TableColum from "../components/TableColum";
import ModalAdd from "../components/ModalAdd";
import ModalEdit from "../components/ModalEdit";
import ModalDelete from "../components/ModalDelete";

export default {
    name: "Users",
    data() {
        return {
            modalAddClose: true,
            modalEditClose: true,
            modalDeleteClose: true,
            deleteUserId: -1,
            editUserId: -1,
            response: []
        };
    },
    components: {
        TableColum,
        ModalAdd,
        ModalEdit,
        ModalDelete
    },
    methods: {
        modalAddClick: function() {
            this.modalAddClose = !this.modalAddClose;
        },
        modalEditClick: function(id) {
            this.editUserId = id;
            this.modalEditClose = !this.modalEditClose;
        },
        modalDeleteClick: function(id) {
            this.deleteUserId = id;
            this.modalDeleteClose = !this.modalDeleteClose;
        },
        deleteUser: function() {
            let reqHeader = {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            };
            axios
                .delete(
                    "http://localhost:9000/user/" + this.deleteUserId,
                    reqHeader
                )
                .then(res => {
                    this.response = res.data.res;
                    this.loaderUser();
                    this.modalDeleteClose = !this.modalDeleteClose;
                })
                .catch(error => {
                    console.log(error);
                    this.modalDeleteClose = !this.modalDeleteClose;
                });
        },
        loaderUser: function() {
            let reqHeader = {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            };
            axios
                .get("http://localhost:9000/user", reqHeader)
                .then(res => {
                    this.response = res.data.res;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.loaderUser();
    }
};
</script>

<style>
#users-container {
    width: 100%;
    height: 100%;
    padding: 20px 40px;
}
#users-title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
}
#users-buttons-container {
    margin-bottom: 20px;
}
#users-button-add {
    width: 110px;
    height: 40px;
    padding: 0 10px;
    margin-right: 30px;

    justify-content: center;

    border-radius: 10px;
    background: #36628d;
    cursor: pointer;
}
#users-button-icon {
    color: #fff;
    margin-right: 20px;
}
#users-button-add p {
    color: #fff;
    font-size: 18px;
}
#users-search {
    width: 370px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #36628d;
    border-radius: 10px;
    overflow: hidden;
}
#users-search-input {
    width: 100%;
    height: 100%;
    border: 0px;
    padding: 0 10px;
    font-size: 18px;
}
#users-table {
    width: 100%;
}
#users-table-header {
    width: 100%;
    background: rgba(54, 98, 141, 0.2);
}
#users-table-columns {
    width: 100%;
}
</style>
