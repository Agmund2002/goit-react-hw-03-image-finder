import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';

 const schema = Yup.object().shape({
   keyword: Yup.string()
     .max(50, 'Too Long!')
     .required('Required')
 });

export const Searchbar = ({handlerSubmit}) => {
  return (
    <header>
      <Formik
        initialValues={{
          keyword: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          handlerSubmit(values.keyword);
          actions.resetForm();
        }}
      >
        <Form>
          <button type="submit">Submit</button>

          <Field
            type="text"
            name="keyword"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="keyword" />
        </Form>
      </Formik>
    </header>
  );
};
