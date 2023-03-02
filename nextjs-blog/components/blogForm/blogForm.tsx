import { useRef } from 'react'
function BlogForm(props: any) {
    const {addBlog} = props
    const TitleRef = useRef()
    const DescriptionRef = useRef()
    const formSubmitHandler = (e: any) => {
        e.preventDefault()
        const formData = {
            title: TitleRef.current.value,
            description: DescriptionRef.current.value,
        }
        addBlog(formData)
    }
    return (
        <form className="max-w-lg w-full mx-auto" onSubmit={formSubmitHandler}>
            <div className="flex flex-wrap mb-6 -mx-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Title
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type='text'
                    placeholder="example@gameil.com"
                    ref={TitleRef} />
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Description
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type='text'
                    placeholder="Thien"
                    ref={DescriptionRef} />
            </div>
            <button
                className="px-4 py-2 my-1 font-semibold text-red-700 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent"
                type="submit">
                Add
            </button>
        </form>
    )
}
export default BlogForm