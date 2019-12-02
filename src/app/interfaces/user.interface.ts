export interface IResult {
    result: IUser[];
}

export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    gender?: string;
    dob?: string;
    website?: string;
    email?: string;
    address?: string;
    phone?: string;
    status?: string;
    _links?: {
        avatar?: {
            href?: string;
        };
        edit?: {
            href?: string;
        };
        self?: {
            href?: string;
        };
    };
}
