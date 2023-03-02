import { MongoClient } from 'mongodb'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import Link from 'next/link';
import BlogItem from '../../components/blogItem/blogItem'
const Home: NextPage = (props: any) => {
    return (
        <Fragment>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                    rel="stylesheet" />
            </Head>
            <Link href="/add-blog">
            <h2>Create new Blog</h2>
            </Link>
            <div className="container mx-auto px-4 sm:px-8">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-5 border-b-2 border-blue-200 bg-blue-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Title</th>
                            <th className="px-5 py-5 border-b-2 border-blue-200 bg-blue-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</th>
                            <th className="px-5 py-5 border-b-2 border-blue-200 bg-blue-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">DELETE</th>
                            <th className="px-5 py-5 border-b-2 border-blue-200 bg-blue-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">UPDATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map((data: any) => (
                                <tr key={data.id} className="px-5 py-5 border-b-2 border-black-200">
                                    <BlogItem
                                        id={data.id}
                                        title={data.title}
                                        description={data.description}/>
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
    const todoCollection = client.db().collection("todos")
    const userArray = await todoCollection.find().toArray()
    client.close()
    return {
        props: {
            data: userArray.map(data => ({
                title: data.heading,
                description: data.description,
                id: data._id.toString()
            }))
        },
        revalidate: 60
    }
}
export default Home