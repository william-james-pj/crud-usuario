<template>
    <div id="layout-container">
        <div class="context-layout">
            <router-view></router-view>
        </div>
        <div class="bar-left-layout" v-if="test()">
            <BarLeft />
        </div>
        <div class="bar-top-layout" v-if="test()">
            <BarTop />
        </div>
    </div>
</template>

<script>
import BarLeft from "../components/BarLeft";
import BarTop from "../components/BarTop";
export default {
    name: "Layout",
    components: {
        BarLeft,
        BarTop
    },
    methods: {
        test: function() {
            if (this.$route.name == "SignUp" || this.$route.name == "Login") {
                return false;
            }
            return true;
        }
    }
};
</script>

<style scoped>
#layout-container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 0.13fr 1.87fr;
    grid-template-rows: 0.2fr 1.8fr;
    gap: 0px 0px;
    grid-template-areas:
        "bar-left-layout bar-top-layout"
        "bar-left-layout context-layout";
}

.context-layout {
    grid-area: context-layout;
}

.bar-left-layout {
    grid-area: bar-left-layout;
}

.bar-top-layout {
    grid-area: bar-top-layout;
}
</style>
