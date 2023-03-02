import { useRouter } from "next/router"
import { Fragment } from "react"
import UserForm from "../../components/userForm/userForm"
const AddUser = () => {
    const router = useRouter()
    const addUserHandler = async (data: any) => {
        console.log("sending data::"+data)
        const response = await fetch("/api/new-user", {
            method: "POST", 
            body: JSON.stringify(data),
            headers: {
                "content-Type" : "application/json"
            }
        }) 
        const res = await response.json()
        router.push("/")
    }
    return (
        <Fragment>
            <UserForm addUser={addUserHandler} />
        </Fragment>
    )
}
export default AddUser