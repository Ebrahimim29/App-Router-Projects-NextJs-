'use client'

import { useRouter } from "next/navigation";
import { ButtonGroup } from "react-bootstrap";

const BackButton = () => {

    const router = useRouter()
    
    return (
        <ButtonGroup onClick={() => router.back()} className="mt-2">
            Back
        </ButtonGroup>
    )
};

export default BackButton;