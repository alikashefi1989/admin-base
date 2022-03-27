import React from 'react';
import { Formik, FormikProps } from 'formik';

interface FormWrapperProps<FormInitialValueModel> {
    formInitialValue: FormInitialValueModel;
    formValidation: any;
    renderProps: (formikProps: FormikProps<FormInitialValueModel>) => JSX.Element;
}

export function FormWrapper<FormInitialValueModel>(props: FormWrapperProps<FormInitialValueModel>): JSX.Element {
    return (
        <Formik
            initialValues={props.formInitialValue}
            validate={props.formValidation}
            onSubmit={() => { }}
            enableReinitialize
        >
            {
                (formikProps: FormikProps<FormInitialValueModel>) => props.renderProps(formikProps)
            }
        </Formik>
    )
}