import React, { useState } from 'react';
import fire from '../config/fire-config';
import { Container } from '@chakra-ui/react';
import NavBar from '../components/NavBar';


const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [cost, setCost] = useState('');
    const [time, setTime] = useState(Date.now())
    const [notification, setNotification] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fire.firestore()
            .collection('blog')
            .add({
                title: title,
                content: content,
                category: category,
                cost: cost,
                time: time,
            });
        setTitle('');
        setContent('');
        setCategory('');
        setCost('');
        setTime('');
        setNotification('Blogpost created');
        setTimeout(() => {
            setNotification('')
        }, 2000)
    }
    return (
        <>
            <NavBar />
            <Container centerContent>
                <h2>Create a post</h2>
                {notification}
                <form onSubmit={handleSubmit}>
                    <div>
                        Select category<br />
                        <select name="category" id="category" onChange={({ target }) => setCategory(target.value)}>
                            <option value="Tech">Tech</option>
                            <option value="Jobs">Jobs</option>
                            <option value="Business">Business</option>
                        </select>
                    </div>

                    <div>
                        Title<br />
                        <input type="text" value={title}
                            onChange={({ target }) => setTitle(target.value)} />
                    </div>
                    <div>
                        Content<br />
                        <textarea value={content}
                            onChange={({ target }) => setContent(target.value)} />
                    </div><br />
                    <div>
                        Price / Cost<br />
                        <input type="text" value={cost}
                            onChange={({ target }) => setCost(target.value)} />
                    </div>
                    <button type="submit">Save post</button>
                </form>
            </Container>
        </>
    )
}
export default CreatePost;