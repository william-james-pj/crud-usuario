<template>
    <Layout />
</template>

<script>
import Layout from "./views/Layout";

export default {
    name: "App",
    components: {
        Layout
    },
    date() {
        return {
            loginActive: true
        };
    },
    methods: {
        loginAccept: function() {
            this.loginActive = !this.loginActive;
        }
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap");
* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}
body {
    width: 100%;
    height: 100%;
}

.display-flex {
    display: flex;
    align-items: center;
}
.width-height-max {
    width: 100%;
    height: 100%;
}
</style>
