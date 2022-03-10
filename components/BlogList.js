import React, {useState, useEffect} from 'react'
import fire from '../config/fire-config'
import Link from 'next/link';

const BlogList = props => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fire.firestore()
            .collection('blog')
            .onSnapshot(snap => {
                const blogs = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setBlogs(blogs);
            });
    }, []);

    return (
        <div>
            <ul>
                {blogs.map(blog =>
                    <li key={blog.id}>
                        <Link href="/blog/[id]" as={'/blog/' + blog.id}>
                            <a itemProp="hello">{blog.title}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}


export default BlogList
