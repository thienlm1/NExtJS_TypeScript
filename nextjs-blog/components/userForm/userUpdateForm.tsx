import { useState } from 'react'
import { useRouter } from "next/router"
function UserUpdateForm(props: any) {
    const {userid, useremail, username, userage, updateUser} = props
    const [email, setEmail] = useState(useremail)
    const [name, setName] = useState(username)
    const [age, setAge] = useState(userage)
    const router = useRouter()
    const formSubmitHandler = (e: any) => {
        console.log("Update")
        e.preventDefault()
        const formData = {
            id: userid,
            email: email,
            name: name,
            age: age
        }
        updateUser(formData)
    }
    return (
        <form className="max-w-lg w-full mx-auto" onSubmit={formSubmitHandler}>
            <div className="flex flex-wrap mb-6 -mx-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Email
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type='text'
                    placeholder="example@gameil.com"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    />
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type='text'
                    placeholder="Thien"
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    />
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Age
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type='text'
                    placeholder="22"
                    value={age} 
                    onChange={e => setAge(e.target.value)}
                    />
            </div>
            <button
                className="px-4 py-2 my-1 font-semibold text-red-700 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent"
                type="submit" >
                Update
            </button>
        </form>
    )
}
export default UserUpdateForm