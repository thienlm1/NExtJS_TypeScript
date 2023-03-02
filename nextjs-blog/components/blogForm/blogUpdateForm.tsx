import { useState } from 'react'
function UserUpdateForm(props: any) {
    const {blogid, blogtitle, blogdescription, updateBlog} = props
    const [title, setTitle] = useState(blogtitle)
    const [description, setDescription] = useState(blogdescription)
    const formSubmitHandler = (e: any) => {
        console.log("Update")
        e.preventDefault()
        const formData = {
            id: "63fdca4f01b3160e789dabef",
            title: title,
            description: description
        }
        updateBlog(formData)
    }
    return (
        <form className="max-w-lg w-full mx-auto" onSubmit={formSubmitHandler}>
            <div className="flex flex-wrap mb-6 -mx-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Title
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type='text'
                    placeholder="2 con vit"
                    value={title} 
                    onChange={e => setTitle(e.target.value)}
                    />
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Description
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type='text'
                    placeholder="Thien"
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
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