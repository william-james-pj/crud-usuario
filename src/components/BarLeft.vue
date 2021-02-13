<template>
    <div id="bar-left-container" class="width-height-max">
        <div class="barLeft-button-link width-height-max display-flex">
            <router-link to="/">
                <font-awesome-icon
                    class="barleft-icons barleft-icon-link"
                    icon="home"
                    size="2x"
                />
            </router-link>
            <router-link to="/Users">
                <font-awesome-icon
                    class="barleft-icons barleft-icon-link"
                    icon="users-cog"
                    size="2x"
                />
            </router-link>
        </div>
        <div class="barLeft-button-logoff width-height-max display-flex">
            <router-link to="/">
                <font-awesome-icon
                    class="barleft-icons barleft-icon-logoff"
                    icon="sign-out-alt"
                    size="2x"
                />
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "BarLeft"
};
</script>

<style>
#bar-left-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.6fr 0.4fr;
    gap: 0px 0px;
    grid-template-areas:
        "barLeft-button-link"
        "barLeft-button-logoff";

    background: #fafbfd;
    box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.25);

    padding-top: 80px;
}
.barleft-icon-link {
    margin-bottom: 40px;
    color: #36628d;
}
.barleft-icons:hover {
    color: rgba(54, 98, 141, 0.2);
}
.barLeft-button-link {
    grid-area: barLeft-button-link;
    flex-direction: column;
}
.barLeft-button-logoff {
    grid-area: barLeft-button-logoff;
    justify-content: center;
}
.barleft-icon-logoff {
    color: #36628d;
}
</style>
