import { Formik } from 'formik';
import {
  Form,
  Label,
  InputTitle,
  Field,
  SubmitBtn,
} from './ContactForm.styled';

const ContactForm = ({ handleSubmit }) => {
  const initialValues = { number: '', name: '' };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Label htmlFor="">
          <InputTitle>Name</InputTitle>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Brendan Eich"
            required
          />
        </Label>
        <Label htmlFor="">
          <InputTitle>Number</InputTitle>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="063-111-22-33"
          />
        </Label>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
