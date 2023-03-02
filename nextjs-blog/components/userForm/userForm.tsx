import { useRef } from 'react'
function UserForm(props: any) {
    const {addUser} = props
    const EmailRef = useRef()
    const NameRef = useRef()
    const AgeRef = useRef()
    const formSubmitHandler = (e: any) => {
        e.preventDefault()
        const formData = {
            email: EmailRef.current.value,
            name: NameRef.current.value,
            age: AgeRef.current.value
        }
        addUser(formData)
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
                    ref={EmailRef} />
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type='text'
                    placeholder="Thien"
                    ref={NameRef} />
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Age
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type='text'
                    placeholder="22"
                    ref={AgeRef} />
            </div>
            <button
                className="px-4 py-2 my-1 font-semibold text-red-700 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent"
                type="submit">
                Add
            </button>
        </form>
    )
}
export default UserForm