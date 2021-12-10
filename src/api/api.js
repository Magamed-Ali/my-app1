import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "84f47dfa-1d31-4766-a661-7a231b07388c"
    }
})

export const usersAPI = {
    getUser(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    getUser2(currentPage = 1, pageSize = 10) {
        return instance.get(`follow?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data);
    }

}
