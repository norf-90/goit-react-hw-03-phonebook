import { Formik } from 'formik';
import { Field } from './FilterForm.styled';

const FilterForm = ({ onChange }) => {
  return (
    <Formik>
      <Field name="filter" onChange={onChange} />
    </Formik>
  );
};

export default FilterForm;
