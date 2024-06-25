



const login = async (req, res) => {
    try {
        res.send("Login Route");
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res) => {
    try {
        res.send("Register Route");
    } catch (error) {
        console.log(error);
    }
}

export { login, register };