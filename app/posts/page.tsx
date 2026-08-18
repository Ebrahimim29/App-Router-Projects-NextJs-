import { Container, ListGroup, Row } from "react-bootstrap"
import ListGroupItemLink from "../components/ListGroupItemLink";
import BackButton from "../components/BackButton";

interface Post {
    id: number;
    title: string;
}

const getPostsService = async () => {
    const res = await fetch('http://localhost:4000/posts', {
        next: {
            revalidate: 10
        }
    })
    const posts = await res.json()
    return posts
}

const Page =  async () => {

    const posts = await getPostsService()

    return (
        <Container className="d-flex justify-content-center align-items-center flex-column">
            
            <BackButton/>

            <Row className="mt-3 w-100">
                <ListGroup>
                    {posts.map((p : any) => (
                        <ListGroupItemLink key={p.id} href={`/posts/${p.id}`} title={p.title}/>
                    ))}
                </ListGroup>
            </Row>

        </Container>
    )
}

export default Page;