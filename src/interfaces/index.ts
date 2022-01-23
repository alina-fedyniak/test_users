interface User {
    registered: {
        date: string;
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

interface State {
    usersReducer: {
        users: User[];
        isLoading: boolean;
        isLogin: boolean;
    };
}

interface Action<P> {
    type: string;
    payload: P;
}

export type { User, Action, State };
