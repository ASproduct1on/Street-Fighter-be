import { post } from "../requestHelper";
const entity = 'users'

export const createUser = async (body) => {
    return await post(entity, body);
}