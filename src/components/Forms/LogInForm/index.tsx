import 'react-app-polyfill/ie11';
import * as React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import styles from './LogInForm.module.scss';

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

export const LogIn = () => {
    return (
        <div className={styles.formBlock}>
            <h1 className={styles.formBlock__title}>Log In</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>,
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <Form className={styles.form}>
                    <label htmlFor="firstName">First Name</label>
                    <Field
                        className={styles.form__field}
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                        className={styles.form__field}
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                    />
                    <label htmlFor="email">Email</label>
                    <Field
                        className={styles.form__field}
                        id="email"
                        name="email"
                        placeholder="john@acme.com"
                        type="email"
                    />
                    <button className={styles.form__btn} type="submit">
                        Log In
                    </button>
                </Form>
            </Formik>
        </div>
    );
};
