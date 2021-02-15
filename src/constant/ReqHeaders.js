let req = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
    }
};

export default req;
