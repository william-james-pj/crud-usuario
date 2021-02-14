<template>
    <div id="container">
        <div class="box-container">
            <div class="msg-container">Welcome</div>
            <div class="from-container">
                <div class="form-header">
                    <router-link to="/login">
                        <p class="form-header-p">Login</p>
                    </router-link>
                    <p class="separator">/</p>
                    <router-link to="/signup">
                        <p class="p-active">Sign Up</p>
                    </router-link>
                </div>
                <div class="form-body">
                    <label class="label" for="input-signup-name">
                        Name
                    </label>
                    <div class="container-input">
                        <input
                            class="input"
                            type="text"
                            name="input-signup-name"
                            placeholder="Name"
                            v-model="nameSignUpInput"
                        />
                    </div>
                    <label class="label" for="input-signup-email">
                        Email
                    </label>
                    <div class="container-input">
                        <input
                            class="input"
                            type="email"
                            name="input-signup-email"
                            placeholder="Email"
                            v-model="emailSignUpInput"
                        />
                    </div>
                    <label class="label" for="input-signup-password">
                        Password
                    </label>
                    <div class="container-input">
                        <input
                            class="input"
                            type="password"
                            name="input-signup-password"
                            placeholder="Password"
                            v-model="passwordSignUpInput"
                        />
                    </div>
                    <div
                        v-if="mensSignUpError !== ''"
                        class="error-container display-flex"
                    >
                        <p>{{ mensSignUpError }}</p>
                    </div>
                </div>
                <div class="form-footer">
                    <div class="button display-flex" @click="createUser()">
                        <p>Sign Up</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "SignUp",
    data() {
        return {
            nameSignUpInput: "",
            emailSignUpInput: "",
            passwordSignUpInput: "",
            mensSignUpError: ""
        };
    },
    methods: {
        createUser: function() {
            axios
                .post("http://localhost:9000/user", {
                    name: this.nameSignUpInput,
                    email: this.emailSignUpInput,
                    password: this.passwordSignUpInput
                })
                .then(() => {
                    this.$router.push({ name: "Home" });
                })
                .catch(err => {
                    console.log(err.response.data.res);
                    if (typeof err.response.data.res === "object")
                        this.mensSignUpError = err.response.data.res[0];
                    else this.mensSignUpError = err.response.data.res;
                });
        }
    }
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
.label {
    font-size: 16px;
    color: #817e85;
    text-transform: uppercase;
    letter-spacing: 2px;
}
.container-input {
    width: 100%;
    height: 40px;
    margin-top: 5px;
    margin-bottom: 20px;

    border-radius: 5px;
    overflow: hidden;
}
.input {
    width: 100%;
    height: 100%;
    border: 0px;
    padding: 0 10px;
    background: rgba(230, 230, 230, 255);
    font-size: 18px;
}
.error-container {
    justify-content: center;
    color: red;
}

.form-header {
    grid-area: header;
    display: flex;
}
.p-active {
    color: #36628d;
}
.form-header-p {
    color: #817e85;
}
.form-header p {
    display: inline-block;
    text-decoration: none;
}
.form-header .separator {
    margin: 0 10px;
    color: #817e85;
}
.form-body {
    grid-area: context;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
}
.form-footer {
    grid-area: footer;

    display: flex;
    align-items: center;
    justify-content: left;
}
.button {
    width: 120px;
    height: 40px;

    border-radius: 10px;
    cursor: pointer;
    justify-content: center;
    border: 1px solid #36628d;
}
.button p {
    color: #36628d;
}
.button:hover {
    opacity: 0.5;
}
</style>
