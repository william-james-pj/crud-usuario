<template>
    <div id="users-container">
        <p id="users-title">Users</p>
        <div id="users-buttons-container" class="display-flex">
            <div id="users-button-add" class="display-flex">
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
                <div v-for="date in searchDates()" :key="date.email">
                    <TableColum
                        :nameProps="date.name"
                        :emailProps="date.email"
                        :roleProps="date.role"
                        :iconsProps="true"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TableColum from "../components/TableColum";

const teste = [
    {
        name: "William James",
        email: "williamjunior258@gmail.com",
        role: "0"
    },
    {
        name: "William James",
        email: "williamjunior258@gmail.com",
        role: "0"
    }
];

export default {
    name: "Users",
    components: {
        TableColum
    },
    methods: {
        searchDates: function() {
            return teste;
        }
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
