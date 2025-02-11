import { PrismaClient } from "@prisma/client";
import { IUser } from "../user/user.dto";
import { v4  as uuid4} from "uuid";
import bcrypt from 'bcrypt'
import passport from "passport";
const Client = new PrismaClient();

const hashPassword = async (password: string) => {
        const hash = await bcrypt.hash(password, 12);
        return hash;
};
export const createUser = async (data: IUser) => {
    // const  id = uuid4();
    data.password = await hashPassword(data.password)
    const result = await Client.user.create({
        data: { ...data, active: true, id:uuid4() }
    });
    return result;
}
export const updateUser = async (id: string, data: IUser) => {
    console.log(typeof(data.active));
    const result = await Client.user.update({
        where: { id: id }, 
        data:{
            ...data
        },
        });
        return result;
};
export const getUserById = async (id: string) => {
    const result = await Client.user.findUnique({where :{id},});
    return result;
};
export const getAllUser = async () => {
    const result = await Client.user.findMany();
    return result;
};
export const deleteUser = async (id: string) => {
    const result = await Client.user.delete({where:{ id: id },});
    return result;
};
export const getUserByEmail = async (email: string) => {
    const result = await Client.user.findUnique({where : { email }});
    return result;
}
