import { useRouter } from "next/router"
import { Fragment } from "react"
import UserForm from "../../components/blogForm/blogForm"
const AddBlog = () => {
    const router = useRouter()
    const addBlogHandler = async (data: any) => {
        console.log("sending data::"+data)
        const response = await fetch("/api/new-blog", {
            method: "POST", 
            body: JSON.stringify(data),
            headers: {
                "content-Type" : "application/json"
            }
        }) 
        const res = await response.json()
        router.push("/blogs")
    }
    return (
        <Fragment>
            <UserForm addBlog={addBlogHandler} />
        </Fragment>
    )
}
export default AddBlog