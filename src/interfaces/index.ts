interface User {
    dob: {
        date: string;
    };
    gender: string;
    id: {};
    location: {
        city: string;
        };
    name: {
        first: string;
        last: string;
    };
    registered: {
        date: string;
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
    };
}

interface Action<P> {
    type: string;
    payload: P;
}

export type { User, Action, State };
