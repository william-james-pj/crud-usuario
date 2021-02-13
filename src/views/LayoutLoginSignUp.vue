<template>
    <div id="container">
        <div class="box-container">
            <div class="msg-container">Welcome</div>
            <div class="from-container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LayoutLoginSignUp",
    components: {}
};
</script>

<style scoped>
#container {
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
}
.box-container {
    width: 80%;
    height: 70%;

    max-width: 820px;
    max-height: 470px;

    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 20px -10px #000000;
    overflow: hidden;

    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "msg-container from-container";
}
.msg-container {
    grid-area: msg-container;

    background: #36628d;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 22px;
    color: #fff;
}
.from-container {
    grid-area: from-container;

    padding: 40px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.3fr 2fr 0.7fr;
    gap: 0px 0px;
    grid-template-areas:
        "header"
        "context"
        "footer";
}
</style>
