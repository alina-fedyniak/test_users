import axios from 'axios';
import { apiConfig } from './apiConfig';
import { User} from '../interfaces';

axios.defaults.baseURL = apiConfig.baseUrl;
axios.defaults.params = { ...apiConfig.params };

async function fetchUsers(options: string): Promise<User[]> {
    const response = await axios.get('/',{
        params: options,
    });
    const { results } = response.data;
    return results;
}

export const userApi = {
    fetchUsers,
};
