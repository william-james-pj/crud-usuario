<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header width-height-max ">
                        <p>Add user</p>
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
                            <div class="display-flex">
                                <div class="modal-add-container-input-password">
                                    <label
                                        class="modal-label"
                                        for="modal-input-password"
                                    >
                                        password
                                    </label>
                                    <div class="modal-container-input">
                                        <input
                                            class="modal-input"
                                            type="password"
                                            name="modal-input-password"
                                            placeholder="Password"
                                            v-model="passwordInput"
                                        />
                                    </div>
                                </div>

                                <div class="modal-add-container-input-role">
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
                            </div>
                            <div
                                v-if="mensError !== ''"
                                class="modal-error-container display-flex"
                            >
                                <p>{{ mensError }}</p>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer width-height-max display-flex">
                        <div
                            class="modal-button modal-button-save display-flex"
                            @click="addUsers()"
                        >
                            <p>Save</p>
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

export default {
    name: "ModalAdd",
    data() {
        return {
            nameInput: "",
            emailInput: "",
            passwordInput: "",
            roleInput: 0,
            mensError: ""
        };
    },
    methods: {
        addUsers: function() {
            axios
                .post("http://localhost:9000/user", {
                    name: this.nameInput,
                    email: this.emailInput,
                    password: this.passwordInput,
                    role: this.roleInput
                })
                .then(res => {
                    console.log(res);
                    this.$emit("close");
                })
                .catch(err => {
                    let teste = err.response.data.res;
                    if (typeof teste === "object")
                        this.mensError = err.response.data.res[0];
                    else this.mensError = err.response.data.res;
                });
        }
    }
};
</script>

<style>
.modal-add-container-input-role {
    margin-left: 20px;
    width: 30%;
}
.modal-add-container-input-password {
    width: 70%;
}
</style>
