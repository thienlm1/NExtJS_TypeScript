import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";
export class AuthService {
    protected readonly instance: AxiosInstance;
    public constructor(url: string) {
        this.instance = axios.create({
            baseURL: url,
            timeout: 30000,
            timeoutErrorMessage: "Time out!",
        });
    }

    login = (username: string, password: string) => {
        console.log("Into login")
        return this.instance
            .post("http://localhost:5791/login", {
                username,
                password,
            })
            .then((res) => {
                Cookies.set("currentUser", JSON.stringify({
                    username: res.data.username,
                    accessToken: res.data.accessToken,
                    expiredAt: res.data.expiredAt,}));
                return {
                    username: res.data.username,
                    accessToken: res.data.accessToken,
                    expiredAt: res.data.expiredAt,
                };
            });
    }

    fetch = (token) => {
        console.log("Into auth")
        return this.instance
            .post("http://localhost:5791/auth", {
                token
            })
            .then((res) => {
                if(res.data.access == false){
                    Cookies.set("currentUser", JSON.stringify({}));
                }
            });
    }
}