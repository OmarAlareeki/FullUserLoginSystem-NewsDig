import React, { useState, useEffect } from 'react'
import fire from '../config/fire-config'
import Link from 'next/link';
import { Container } from '@chakra-ui/react'

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
        <Container centerContent style={{marginTop: '20px'}}>
            <ul>
                {blogs.map(blog =>
                    <li key={blog.id}>
                        <Link href="/blog/[id]" as={'/blog/' + blog.id}>
                            <a itemProp="hello">{blog.title}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </Container>
    )
}


export default BlogList
