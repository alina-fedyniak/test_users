import Method from 'axios';

export const apiConfig = {
    url: '/',
    method: Method,
    baseUrl: 'https://randomuser.me/api/',
    params: {
        results: '20',
        inc: 'registered,login,id,name,picture,dob,gender,location,phone',
    },
};
