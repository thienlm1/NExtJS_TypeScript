import { useRouter } from "next/router"
import { Fragment } from "react"
import { MongoClient, ObjectId } from 'mongodb'
import { useEffect } from "react";
import UserUpdateForm from "../../components/userForm/userUpdateForm"
import { data } from "autoprefixer"
const UpdateUser = (props: any) => {
    const router = useRouter()
    const updateUserHandler = async (data: any) => {
        console.log("sending data::" + data)
        const response = await fetch("/api/update-user", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-Type": "application/json"
            }
        })
        const res = await response.json()
        router.push("/users")
    }
    return (
        <Fragment>
            <UserUpdateForm
                userid={props.data.id}
                useremail={props.data.email}
                username={props.data.name}
                userage={props.data.age}
                updateUser={updateUserHandler}
            />
        </Fragment>
    )
}

export async function getStaticProps({params}) {
    console.log("Test params"+params.postSlug)
    const client = await MongoClient.connect("mongodb+srv://thienlm190355:tavip123@crudapi.elxr0vd.mongodb.net/?retryWrites=true&w=majority")
    const todoCollection = client.db().collection("users")
    const userArray = await todoCollection.findOne({})
    const data = JSON.parse(JSON.stringify(userArray))
    client.close()
    return {
        props: {
            data: {
                id: data._id,
                email: data.email,
                name: data.name,
                age: data.age
            }
        },
        revalidate: 60
    }
}
export default UpdateUser