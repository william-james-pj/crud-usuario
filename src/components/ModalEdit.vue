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
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer width-height-max display-flex">
                        <div
                            class="modal-button modal-button-save display-flex"
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
export default {
    name: "ModalEdit"
};
</script>

<style>
.modal-edit-container-input-role {
    width: 30%;
}
</style>
