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
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer width-height-max display-flex">
                        <div
                            class="modal-button modal-button-save display-flex"
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
export default {
    name: "ModalAdd"
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
