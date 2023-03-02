import { Fragment } from "react"
import { useRouter } from 'next/router'
import Link from "next/link"
import Cookies from "js-cookie";
function UserItem(props: any) {
    const { id, email, name, age } = props
    const router = useRouter()
    //delete todo:
    const deleteUser = async (userID: any) => {

        const resp = await fetch(`/api/delete/${userID}`, {
            method: 'DELETE'
        })
            .then(res => console.log("SUCCESS:: " + res.json()))
            .catch(e => console.log("ERROR:" + e))
        router.push("/users")
    }
    //togle todo:
    const updateUser = async (userID: any) => {
        router.push(`/update-user?id=${userID}`)
    }

    return (
        <Fragment>
            <td className="py-5 font-bold text-blue-600">{email}</td>
            <td className="py-5">{name}</td>
            <td className="py-5">{age}</td>
            <td className="px-4 py-2 my-1 font-semibold text-red-700 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent">
                <button className="id"
                    onClick={() => deleteUser(id)} >v</button>
            </td>
            <td className="px-4 py-2 my-1 font-semibold text-red-700 bg-transparent border border-red-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
                <button className="id"
                    onClick={() => updateUser(id)} >^</button>
            </td>
        </Fragment>
    )
}
export default UserItem