export interface User {
    registered: {
        date: string;
    };
    login: {
        uuid: string;
    };
    dob: {
        date: string;
    };
    gender: string;
    id: {
        name: string;
        value: string;
    };
    location: {
        city: string;
        };
    name: {
        first: string;
        last: string;
    };
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

export interface State {
    usersReducer: {
        users: User[];
        isLoading: boolean;
        isLogin: boolean;
    };

    localeReducer: {
        lang: string;
    };

    authReducer: {
        isLoading: boolean;
        isLogin: boolean;
        error: null;
    };
}

export interface Action<P> {
    type: string;
    payload: P;
}
