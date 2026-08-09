import Link from "next/link";
import { Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import ListGroupItemLink from "./components/ListGroupItemLink";

export default function Home() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="mt-5 w-100">
        <ListGroup>
          <ListGroupItemLink href={"/posts"} title="Posts"/>
          <ListGroupItemLink href={"/users"} title="Users"/>
          <ListGroupItemLink href={"/admin"} title="Admin"/>
          <ListGroupItemLink href={"/admin/panel"} title="Admin-Panel"/>
          <ListGroupItemLink href={"/fPosts"} title="Filtered Posts"/>
        </ListGroup>
      </Row>
    </Container>
  );
}
