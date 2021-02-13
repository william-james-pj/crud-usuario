<template>
    <div class="form-header">
        <router-link to="/">
            <p class="p-active">Login</p>
        </router-link>
        <p class="separator">/</p>
        <router-link to="/signup">
            <p class="form-header-p">Sign Up</p>
        </router-link>
    </div>
    <div class="form-body">
        <label class="label" for="input-email">
            Email
        </label>
        <div class="container-input">
            <input
                class="input"
                type="email"
                name="input-email"
                placeholder="Email"
            />
        </div>
        <label class="label" for="input-password">
            Password
        </label>
        <div class="container-input">
            <input
                class="input"
                type="password"
                name="input-password"
                placeholder="Password"
            />
        </div>
    </div>
    <div class="form-footer">
        <div class="button display-flex">
            <p>Login</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            typeProps: "Login"
        };
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
