<template>
    <div id="bar-top-container">
        <p>CRUD</p>
    </div>
</template>

<script>
export default {
    name: "BarTop"
};
</script>

<style scoped>
#bar-top-container {
    width: 100%;
    height: 100%;
    box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
    padding-left: 20px;

    display: flex;
    align-items: center;
    justify-content: left;
}
#bar-top-container p {
    font-weight: bold;
    font-size: 22px;
    color: #36628d;
}
</style>
