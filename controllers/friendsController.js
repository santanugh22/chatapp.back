const findFriend= async (req, res) => {
    try {
        res.send("Friends Route");
    } catch (error) {
        console.log(error);
    }
}

export { findFriend };