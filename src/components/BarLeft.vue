<template>
    <div id="bar-left-container">
        <font-awesome-icon id="icon" icon="home" size="2x" />
        <font-awesome-icon id="icon" icon="users-cog" size="2x" />
    </div>
</template>

<script>
export default {
    name: "BarLeft"
};
</script>

<style>
#bar-left-container {
    width: 100%;
    height: 100%;
    background: #fafbfd;
    box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.25);

    padding-top: 80px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
#icon {
    margin-bottom: 40px;
    color: #36628d;
}
</style>
