import { authService } from "../../../components/auth";
import { RequestCookies } from '@edge-runtime/cookies'
async function handler(req: any, resp: any){
    const cookies = new RequestCookies(req.headers)
    const data = cookies.get(`currentUser`)?.value
    if(req.method !== 'post') return
    const fetch = authService.fetch(JSON.parse(data).accessToken)
    return fetch;
}
export default handler