<template>
    <div v-bind:class="['users-table-grid', iconsProps ? 'table-active' : '']">
        <div class="table-name">
            <p>{{ nameProps }}</p>
        </div>
        <div class="table-email">
            <p>{{ emailProps }}</p>
        </div>
        <div class="table-role">
            <p>{{ roleProps }}</p>
        </div>
        <div class="table-icons">
            <font-awesome-icon
                v-if="iconsProps"
                id="table-icon"
                class="table-icon-edit"
                icon="user-edit"
                size="lg"
                @click="$emit('openEdit')"
            />
            <font-awesome-icon
                v-if="iconsProps"
                id="table-icon"
                class="table-icon-delete"
                icon="user-minus"
                size="lg"
                @click="$emit('openDelete')"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "TableColum",
    props: {
        nameProps: String,
        emailProps: String,
        roleProps: Number,
        iconsProps: Boolean
    }
};
</script>

<style scoped>
.users-table-grid {
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 1.1fr 1.6fr 0.5fr 0.8fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "table-name table-email table-role table-icons";

    border-bottom: 1px solid #000;
    font-size: 16px;
}
.table-name {
    grid-area: table-name;
    justify-self: start;
    align-self: center;
    padding: 0 20px;
}
.table-email {
    grid-area: table-email;
    justify-self: start;
    align-self: center;
    padding: 0 20px;
}
.table-role {
    grid-area: table-role;
    justify-self: center;
    align-self: center;
}
.table-icons {
    grid-area: table-icons;
    justify-self: center;
    align-self: center;
}
#table-icon {
    margin-right: 20px;
    cursor: pointer;
}
#table-icon:hover {
    color: rgba(54, 98, 141, 0.2);
}
.table-icon-edit {
    color: rgba(56, 141, 189, 255);
}
.table-icon-delete {
    color: rgba(216, 70, 44, 255);
}
.table-active {
    font-size: 14px;
    height: 40px;
}
</style>
