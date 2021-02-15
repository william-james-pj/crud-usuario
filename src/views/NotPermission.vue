<template>
    <div id="notpermisson-container">
        <p class="title">Sorry!!</p>
        <p>You don't have permission to access</p>
    </div>
</template>

<script>
export default {
    name: "NotPermission"
};
</script>

<style scoped>
#notpermisson-container {
    width: 100%;
    height: 100%;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.title {
    font-size: 22px;
    margin-bottom: 40px;
}
</style>
