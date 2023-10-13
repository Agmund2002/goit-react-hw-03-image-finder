import { Formik, Field, Form } from 'formik';

export const Searchbar = ({handlerSubmit}) => {
  return (
    <header>
      <Formik
        initialValues={{
          keyword: '',
        }}
        onSubmit={values => handlerSubmit(values.keyword)}
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
        </Form>
      </Formik>
    </header>
  );
};
