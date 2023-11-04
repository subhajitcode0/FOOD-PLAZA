import React from 'react'
import Signup from "../Components/Signup"
import { Container, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function SignupPage() {
    return (
        <div>
            <Container >
                < Box
                    roundedEnd={"4px"}
                    roundedStart={"4px"}
                    d='flex'
                    justifyContent={"center"}
                    p={3}
                    bg={"blue.200"}
                    w={"100%"}
                    m={"40px 0 15px 0"}
                    borderRadius={"1g"}
                    borderWidth={"1px"} >
                    <Signup/>
                    
                </Box>

            </Container >

        </div >
    )
}
