import { MongoClient } from 'mongodb'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import { Fragment } from 'react'
import UserItem from '../../components/userItem/userItem'
const Home: NextPage = (props: any) => {
    return (
        <Fragment>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                    rel="stylesheet" />
            </Head>
            <Link href="/add-user">
            <h2>Create new User</h2>
            </Link>
            <div className="container mx-auto px-4 sm:px-8">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-5 border-b-2 border-blue-200 bg-blue-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</th>
                            <th className="px-5 py-5 border-b-2 border-blue-200 bg-blue-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                            <th className="px-5 py-5 border-b-2 border-blue-200 bg-blue-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Age</th>
                            <th className="px-5 py-5 border-b-2 border-blue-200 bg-blue-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">DELETE</th>
                            <th className="px-5 py-5 border-b-2 border-blue-200 bg-blue-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">UPDATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.users.map((users: any) => (
                                <tr key={users.id} className="px-5 py-5 border-b-2 border-black-200">
                                    <UserItem
                                        id={users.id}
                                        email={users.email}
                                        name={users.name}
                                        age={users.age} />
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
export async function getStaticProps(context: any) {
    const client = await MongoClient.connect("mongodb+srv://thienlm190355:tavip123@crudapi.elxr0vd.mongodb.net/?retryWrites=true&w=majority")
    const todoCollection = client.db().collection("users")
    const userArray = await todoCollection.find().toArray()
    client.close()
    return {
        props: {
            users: userArray.map(users => ({
                email: users.email,
                name: users.name,
                age: users.age,
                id: users._id.toString()
            }))
        },
        revalidate: 60
    }
}
export default Home