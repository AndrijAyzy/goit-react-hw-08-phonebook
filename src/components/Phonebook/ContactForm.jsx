import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContactThunk } from 'redux/thunks';
import toast, { Toaster } from 'react-hot-toast';
import { Formik, Field, Form } from 'formik';
import { Button, FormLabel } from '@chakra-ui/react';
import { StyledForm } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);

  const notify = useCallback(() => {
    toast.success('Contact was successfully added to your phonebook list.');
  }, []);

  const submitForm = useCallback(
    ({ name, number }, { resetForm }) => {
      const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

      const contactExists = items.some(contact => contact.name === capitalizedName);

      if (contactExists) {
        alert(`${capitalizedName} is already in contacts`);
        return;
      } else {
        dispatch(addContactThunk({ name: capitalizedName, number }))
          .unwrap()
          .then(() => {
            notify();
            resetForm();
          })
          .catch(error => {
            console.error('Error adding contact:', error);
          });
      }
    },
    [dispatch, items, notify]
  );

  return (
    <>
      <Toaster />
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={submitForm}
      >
        {props => (
          <StyledForm as={Form}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Field
              id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <FormLabel htmlFor="number">Number</FormLabel>
            <Field
              id="number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <Button colorScheme="green" size="sm" type="submit" ml={5} width={400} mt={10} mb={10}>
              Add contact
            </Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
