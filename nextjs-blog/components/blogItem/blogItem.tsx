import { Fragment } from "react"
import { useRouter } from 'next/router'

function BlogItem(props: any) {
    const { id, title, description } = props
    const router = useRouter()
    const deleteBlog = async (blogID: any) => {
        console.log(blogID) 
        const resp = await fetch(`/api/delete-blog/${blogID}`, {
            method: 'DELETE'
        })
            .then(res => console.log("SUCCESS:: " + res.json()))
            .catch(e => console.log("ERROR:" + e))
        router.push("/blogs")
    }
    const updateBlog = async (blogID: any) => {
        router.push(`/update-blog?id=${blogID}`)
    }

    return (
        <Fragment>
            <td className="py-5 font-bold text-blue-600">{title}</td>
            <td className="py-5">{description}</td>
            <td className="px-4 py-2 my-1 font-semibold text-red-700 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent">
                <button className="id"
                    onClick={() => deleteBlog(id)} >v</button>
            </td>
            <td className="px-4 py-2 my-1 font-semibold text-red-700 bg-transparent border border-red-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
                <button className="id"
                    onClick={() => updateBlog(id)} >^</button>
            </td>
        </Fragment>
    )
}
export default BlogItem