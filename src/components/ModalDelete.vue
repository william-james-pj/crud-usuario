<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header width-height-max ">
                        <p>Delete user</p>
                    </div>
                    <div
                        class="modal-body modal-body-delete width-height-max display-flex"
                    >
                        <p class="modal-delete-title">Are you sure?</p>
                        <p class="modal-delete-p">
                            Do you really want to delete these user? This
                            process cannot be undone.
                        </p>
                    </div>
                    <div class="modal-footer width-height-max display-flex">
                        <div
                            class="modal-button modal-button-delete display-flex"
                        >
                            <p>Delete</p>
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
    name: "ModalDelete"
};
</script>

<style>
.modal-body-delete {
    flex-direction: column;
    justify-content: center;
}
.modal-delete-title {
    text-align: center;
    font-size: 22px;
    margin-bottom: 30px;
    color: #525151;
}
.modal-delete-p {
    margin: 0 20px;
    text-align: center;
    color: #817e85;
}
</style>
