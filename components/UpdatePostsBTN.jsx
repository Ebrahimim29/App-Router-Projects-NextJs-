'use client'

import { handleUpdateTag } from "@/actions/posts";
import { Button } from "react-bootstrap"

const UpdatePostsBTN = ({tag}) => {
    return(
        <Button className="mt-2" onClick={()=>handleUpdateTag(tag)}>
            Update: ({tag})
        </Button>
    )
};

export default UpdatePostsBTN;