import { useFormikContext } from "formik";
import React from "react";
import Button, { props as buttonProps } from "components/global/Button";

export default function FormSubmit(props: buttonProps) {
  const { handleSubmit } = useFormikContext();
  return <Button {...props} onPress={handleSubmit} />;
}
