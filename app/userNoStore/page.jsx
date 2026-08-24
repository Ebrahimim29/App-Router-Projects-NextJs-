import BackButton from "@/components/BackButton";
import ListGroupItemLink from "@/components/ListGroupItemLink";
import { revalidatePath } from "next/cache";
import { Container, ListGroup, Row } from "react-bootstrap";

const getUsersService = async () => {
    const res = await fetch('http://localhost:4000/users?_sort=id&_order=desc', 
        // {cache: "no-store"}
    )
    const users = await res.json()
    return users
}

// اگر از fetch استفاده نمی کنیم این روش بهتره:
// export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

const Users = async () => {
    const users = await getUsersService()

    const createUserAction = async (formData) => {
        'use server'
        const name = formData.get("name")
        const email = formData.get("email")
        const res = await fetch('http://localhost:4000/users', {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                name,
                email
            })
        })

        console.log(res.status);

        revalidatePath('/users')
        
    }
    return(
        <Container className="d-flex justify-content-center align-items-center flex-column">

            <BackButton/>

            <form className="text-right w-50" action={createUserAction}>
                <h3>Create User</h3>
                <input type="text" className="form-control mt-2" name="name" placeholder='Name'/>
                <input type="email" className="form-control mt-2" name="email" placeholder='Email'/>
                <button className="btn btn-primary mt-2">Confirm</button>
            </form>

            <Row className="mt-3 w-100">
                <ListGroup>
                    {users.map(p => (
                        <ListGroupItemLink key={p.id} href={`/users/${p.id}`} title={p.name}/>
                    ))}
                </ListGroup>
            </Row>
        </Container>
    )
};

export default Users;