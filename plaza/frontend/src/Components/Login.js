
import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';
import { VStack, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';


const Login = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <VStack spacing={"5px"}>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    type='email'
                    placeholder='example@email.com' />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button>Login</Button>
        </VStack>
    )
}

export default Login
