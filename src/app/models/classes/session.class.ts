import { Users } from "./users.class";

export class Session {
    authenticated: boolean = false;
    user?: Users;
    accessToken?: string;
    // refreshToken?: RefreshToken;

    constructor(access_token: string, user?: Users) {
        this.accessToken = access_token;
        this.user = user;
        // this.refreshToken = refreshToken;
    }
}

// export class RefreshToken {
//     tokenString?: string;
//     expireAt?: Date;
// }