export interface IUsers {
    id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
    dni: string;
    carts: [];
    password: string;
    isAdmin: boolean;
    deleted: boolean;
}