<template>
    <div class="form-header">
        <router-link to="/">
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
        <div v-if="mensSignUpError !== ''" class="error-container display-flex">
            <p>{{ mensSignUpError }}</p>
        </div>
    </div>
    <div class="form-footer">
        <div class="button display-flex" @click="createUser()">
            <p>Sign Up</p>
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
                .then(res => {
                    console.log(res);
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
