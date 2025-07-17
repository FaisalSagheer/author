import Link from 'next/link'
import React from 'react'

function Blogs() {
    const BlogDetails = [
        {
            id: 1,
            name: "Post-1",
        },
        {
            id: 2,
            name: "Post-2"
        },
        {
            id: 3,
            name: "Post-3"
        },
    ]
    return (
        <>
            Blog
            {
                BlogDetails.map((blog) =>
                    <li key={blog.id}>
                        <Link href={`blogs/${blog.id}`}>
                            {blog.name}
                        </Link>
                    </li>
                )}
        </>
    )
}

export default Blogs
