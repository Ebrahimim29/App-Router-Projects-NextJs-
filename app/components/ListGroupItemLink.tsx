'use client'

import Link from "next/link";
import { ListGroupItem } from "react-bootstrap"

const ListGroupItemLink = ({href, title} : any) => {
    return(
        <ListGroupItem action>
            <Link className="w-100 d-block text-decoration-none" href={href}>
                {title}
            </Link>
        </ListGroupItem>
    )
};

export default ListGroupItemLink;