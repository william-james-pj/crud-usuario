<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header width-height-max ">
                        <p>Edit user</p>
                    </div>
                    <div class="modal-body width-height-max ">
                        <form action="">
                            <label class="modal-label" for="modal-input-name">
                                Name
                            </label>
                            <div class="modal-container-input">
                                <input
                                    class="modal-input"
                                    type="text"
                                    name="modal-input-name"
                                    placeholder="Name"
                                    v-model="nameInput"
                                />
                            </div>
                            <label class="modal-label" for="modal-input-email">
                                email
                            </label>
                            <div class="modal-container-input">
                                <input
                                    class="modal-input"
                                    type="email"
                                    name="modal-input-email"
                                    placeholder="Email"
                                    v-model="emailInput"
                                />
                            </div>
                            <div class=" modal-edit-container-input-role">
                                <label
                                    class="modal-label"
                                    for="modal-input-role"
                                >
                                    role
                                </label>
                                <div class="modal-container-input">
                                    <input
                                        class="modal-input"
                                        type="number"
                                        name="modal-input-role"
                                        placeholder="Role"
                                        v-model="roleInput"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer width-height-max display-flex">
                        <div
                            class="modal-button modal-button-save display-flex"
                            @click="editUser()"
                        >
                            <p>Update</p>
                        </div>
                        <div
                            class="modal-button modal-button-cancel display-flex"
                            @click="$emit('close')"
                        >
                            <p>Cancel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import axios from "axios";
import ReqHeaders from "../constant/ReqHeaders";

export default {
    name: "ModalEdit",
    props: {
        idProps: Number
    },
    data() {
        return {
            nameInput: "",
            emailInput: "",
            roleInput: ""
        };
    },
    methods: {
        editUser: function() {
            axios
                .put(
                    "http://localhost:9000/user ",
                    {
                        name: this.nameInput,
                        email: this.emailInput,
                        role: this.roleInput,
                        id: this.idProps
                    },
                    ReqHeaders
                )
                .then(() => {
                    this.$emit("loader");
                    this.$emit("close");
                })
                .catch(error => {
                    console.log(error.response);
                    this.$emit("close");
                });
        }
    },
    mounted() {
        axios
            .get("http://localhost:9000/user/ " + this.idProps, ReqHeaders)
            .then(res => {
                this.nameInput = res.data.res.name;
                this.emailInput = res.data.res.email;
                this.roleInput = res.data.res.role;
            })
            .catch(error => {
                console.log(error);
                this.$emit("close");
            });
    }
};
</script>

<style>
.modal-edit-container-input-role {
    width: 30%;
}
</style>
