import Link from "next/link"
import { Fragment } from "react"
const Navigation = () => {
    return (
        <Fragment>
            <div>
            <ul className="flex bg-red-300">
                <li className="mr-6 px-4 my-5 font-bold hover:text-white">
                    <Link href="/">Dasboard</Link>
                </li>
                <li className="mr-6 px-4 my-5 font-bold hover:text-white">
                    <Link href="/users">UserPage</Link>
                </li>
                <li className="mr-6 px-4 my-5 font-bold hover:text-white">
                    <Link href="/blogs">BlogPage</Link>
                </li>
                <li className="mr-6 px-4 my-5 font-bold hover:text-white">
                    <Link href="/logout">logOut</Link>
                </li>
            </ul>
            <hr>
            </hr>
            </div>
            
        </Fragment>
    )
}
export default Navigation