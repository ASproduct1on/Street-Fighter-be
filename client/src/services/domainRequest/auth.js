import { post } from "../requestHelper"

export const login = async (body) => {
    return await post('auth/login', body);
}