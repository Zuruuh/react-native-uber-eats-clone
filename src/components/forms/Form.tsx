import React from "react";
import { Formik, FormikValues } from "formik";

interface props {
  children: JSX.Element[];
  validationSchema: any;
  onSubmit: Function;
  initialValues: FormikValues;
}

export default function Form({
  children,
  validationSchema,
  onSubmit,
  initialValues,
}: props) {
  return (
    <Formik
      // @ts-ignore
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      {() => <>{children}</>}
    </Formik>
  );
}
