import { useSelector } from "react-redux";
import { getAuth } from "redux/selectors";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Box, Link as ChakraLink, Container } from '@chakra-ui/react'

export const Header = () => {
    const isAuth = useSelector(getAuth)
    
    return (
        <Container maxW='100%'>
        <Box as="header" bg="#ff8f0f" boxShadow="2xl" p="5" rounded="sx" mb="30px">
                <Box
                    as="nav"
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    gap="15"
                >
                    <ChakraLink fontSize="21" as={ReactRouterLink} to="/">Home</ChakraLink>
                        {isAuth ? <>
                            <ChakraLink fontSize="20" as={ReactRouterLink} to="/contacts">Phonebook</ChakraLink>
                            <UserMenu />
                            
                        </>
                    : 
                        <Box display="flex" gap="10" ml="auto">
                            <ChakraLink as={ReactRouterLink} colorScheme="green"
                                variant="outline" to='/register'>Sign Up</ChakraLink>
                            <ChakraLink as={ReactRouterLink}  colorScheme="green"
                                variant="outline" to='/login'>Login</ChakraLink>
                        </Box>}
                </Box>
            </Box>
        </Container>
    )
}