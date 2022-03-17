import fire from '../../config/fire-config';
import Link from 'next/link';
import { Container } from '@chakra-ui/react';
import NavBar from '../../components/NavBar'

const Blog = (props) => {
    const unixTime = props.time;
    const date = new Date(unixTime);

    return (
        <>
            <NavBar />
            <Container centerContent>
                <span>{props.category}</span>
                <h2>{props.title}</h2>
                <h4>$ {props.cost}</h4>
                <p>{props.content}</p>
                <span>{date.toLocaleDateString("en-US")}</span>
                <Link href="/"><a>Back</a></Link>
            </Container>
        </>
    )
}
export const getServerSideProps = async ({ query }) => {
    const content = {}
    await fire.firestore()
        .collection('blog')
        .doc(query.id)
        .get()
        .then(result => {
            content['title'] = result.data().title;
            content['content'] = result.data().content;
            content['category'] = result.data().category;
            content['cost'] = result.data().cost;
            content['time'] = result.data().time;
        });
    return {
        props: {
            title: content.title,
            content: content.content,
            category: content.category,
            cost: content.cost,
            time: content.time,
        }
    }
}
export default Blog