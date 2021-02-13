<template>
    <LayoutLoginSignUp />
</template>

<script>
import LayoutLoginSignUp from "./views/LayoutLoginSignUp";

export default {
    name: "App",
    components: {
        LayoutLoginSignUp
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
