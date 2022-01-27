import axios from 'axios';
import { apiConfig } from './apiConfig';
import { User } from '../interfaces';

axios.defaults.baseURL = apiConfig.baseUrl;

async function fetchUsers(): Promise<User[]> {
    const response = await axios.get('/?results=20&inc=registered,login,id,name,picture,dob,gender,location,phone');
    const { results } = response.data;
    return results;
}

export const userApi = {
    fetchUsers,
};
