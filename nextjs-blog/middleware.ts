import { NextResponse } from "next/server"
import type { NextFetchEvent, NextRequest } from 'next/server'
import { unauthRoutes, protectedRoutes } from "./router";
import { RequestCookies } from '@edge-runtime/cookies'
import { authService } from "./components/auth";

export function middleware(request: NextRequest) {
    const cookies = new RequestCookies(request.headers)
    const data = cookies.get(`currentUser`)?.value
    console.log(request.nextUrl.pathname)
    if(protectedRoutes.includes(request.nextUrl.pathname) && (!data )){
        request.cookies.delete("currentUser");
        console.log("Not auth => delete currentUser data")
        const response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.delete("currentUser");
        return response;
    }
    if (data) {
        authService.fetch(JSON.parse(data).accessToken)
        const exdate = new Date(JSON.parse(data).expiredAt)
        const exdateIns = exdate.getTime()
        if (protectedRoutes.includes(request.nextUrl.pathname) && (!data || Date.now() > exdateIns)) {
            console.log("Protected Router ")
            request.cookies.delete("currentUser");
            console.log("Not auth => delete currentUser data")
            const response = NextResponse.redirect(new URL("/login", request.url));
            response.cookies.delete("currentUser");
            return response;
        }
    }
    if (unauthRoutes.includes(request.nextUrl.pathname)) {
        const response = NextResponse.redirect(new URL("/", request.url));
        response.cookies.delete("currentUser")
        return response;
    }


    // if (authRoutes.includes(request.nextUrl.pathname) && currentUser) {
    //     console.log("Router not protected");
    //     return NextResponse.redirect(new URL("/login", request.url));
    // }
    //   console.log("Public router")
}
