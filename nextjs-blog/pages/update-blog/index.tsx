import { useRouter } from "next/router"
import { Fragment } from "react"
import { MongoClient, ObjectId } from 'mongodb'
import { useEffect } from "react";
import BlogUpdateForm from "../../components/blogForm/blogUpdateForm"
import { data } from "autoprefixer"
const UpdateUser = (props: any) => {
    const router = useRouter()
    const updateBlogHandler = async (data: any) => {
        console.log("sending data::" + data)
        const response = await fetch("/api/update-blog", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-Type": "application/json"
            }
        })
        const res = await response.json()
        router.push("/blogs")
    }
    return (
        <Fragment>
            <BlogUpdateForm
                blogid={props.data.id}
                blogtitle={props.data.title}
                blogdescription={props.data.description}
                updateBlog={updateBlogHandler}
            />
        </Fragment>
    )
}

export async function getStaticProps(context: any) {
    const client = await MongoClient.connect("mongodb+srv://thienlm190355:tavip123@crudapi.elxr0vd.mongodb.net/?retryWrites=true&w=majority")
    const todoCollection = client.db().collection("todos")
    const userArray = await todoCollection.findOne({})
    const data = JSON.parse(JSON.stringify(userArray))
    client.close()
    return {
        props: {
            data: {
                id: data._id,
                title: data.heading,
                description: data.description
            }
        },
        revalidate: 60
    }
}
export default UpdateUser