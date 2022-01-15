import Axios from 'axios';
import { apiConfig } from './apiConfig';
import { User } from '../types'

Axios.defaults.baseURL = apiConfig.baseUrl;

async function fetchUsers(): Promise<User[]> {
    const response = await Axios.get('/?results=20&inc=id,name,picture,dob,gender,location,phone,registered/');
    console.log(response.data);
    const { data }: { data: User[] } = response.data;

    return data;
}

export const userApi = {
    fetchUsers
};