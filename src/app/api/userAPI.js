import instance from "./instance"

export default {
    getUser(id) {
        return instance({
            url: `users/${id}`,
            method: "GET",
            timeout: 1000
        });
    }
}