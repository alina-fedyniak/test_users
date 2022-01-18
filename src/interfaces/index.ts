interface Status {
    title: string;
    code: string;
}

interface User {
    id: string;
    gender: string;
    last_name: string;
    date_created: number;
    date_birth: string;
    status: Status;
}

interface State {
    usersReducer: {
        users: User[];
        statuses: Status[];
        isLoading: boolean;
    };
}

interface Action<P> {
    type: string;
    payload: P;
}

type InfoUpdate = string | number | Status;

export type { Status, User, Action, InfoUpdate, State };
