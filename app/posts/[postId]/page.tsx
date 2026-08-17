import { Container, ListGroup, Row } from "react-bootstrap";
import BackButton from "@/app/components/BackButton";
import ListGroupItemLink from "@/app/components/ListGroupItemLink";

export async function generateStaticParams() {
    return [
        {postId: "1"},
        {postId: "2"},
        {postId: "3"}
    ]
}

const getPostsService = async (postId : number) => {
    const res = await fetch(`http://localhost:4000/posts/${postId}`)
    const post = await res.json()
    return post
}

const Page = async ({ params } : any) => {

    const { postId } = await params; 

    const post = await getPostsService(postId)

    return (
        <Container className="d-flex justify-content-center align-items-center flex-column">

            <BackButton/>

            <Row className="mt-2 w-100">
                <ListGroup>
                    <ListGroupItemLink title={post.id} />
                    <ListGroupItemLink title={post.title} />
                </ListGroup>
            </Row>
        </Container>
    )
};

export default Page;