import { ContactForm } from '../../Phonebook/ContactForm';
import { Filter } from '../../Filter/Filter';
import { ContactList } from '../../ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Box, Container, Text } from '@chakra-ui/react';

const PhonebookPage = () => {
  const { isLoading, error } = useSelector(getContacts);
  return (
    <Container>
      <Box bgColor='#0fd3ff' borderRadius={4}>
      <Text as='n' fontSize='4xl' ml={150} fontWeight='700'>Phonebook</Text>
      <ContactForm />
      </Box>
      <Box bgColor='#ffffff' borderRadius={4}>
      <Text as='n' fontSize='4xl' ml={170} fontWeight='600'>Contacts</Text>
      {isLoading && <div style={{marginLeft: '30px'}}>Loading...</div>}
      {error && <div>{error.message}</div>}
      <Filter />
      <ContactList />
      </Box>
    </Container>
  );
};

export default PhonebookPage