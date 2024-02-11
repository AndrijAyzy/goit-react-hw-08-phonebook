import { Box, Container } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { getAuth } from 'components/redux/selectors';

export default function HomePage() {
  const isAuth = useSelector(getAuth);
  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="calc(100vh - 50px)"
      >
        <section>
          <Heading as="h1" fontSize="6xl" fontWeight="500" textAlign="center">
            Welcome to Phonebook
          </Heading>
        </section>
      </Box>
    </Container>
  );
}