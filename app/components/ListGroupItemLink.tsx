'use client'

import Link from "next/link";
import { ListGroupItem } from "react-bootstrap"

interface ListGroupItemLinkProps {
  href?: string;
  title: string;
}

const ListGroupItemLink = ({ href = "#", title }: ListGroupItemLinkProps) => {
  return (
    <ListGroupItem action>
      <Link className="w-100 d-block text-decoration-none" href={href}>
        {title}
      </Link>
    </ListGroupItem>
  );
};

export default ListGroupItemLink;