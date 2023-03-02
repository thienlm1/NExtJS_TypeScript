import { authService } from "../auth";
import Cookies from "js-cookie";
import { User } from "../types/user";

export const useLogin = () => {
    const login = async (username: string, password: string) => {
        console.log("Loging in..............");
        const user = await authService.login(username, password);
        if (user) {
            console.log("Get data form server>>>>>>>"+JSON.stringify(user));
            Cookies.set("currentUser", JSON.stringify(user));
        }
        return user as User;
    };

    return { login };
}