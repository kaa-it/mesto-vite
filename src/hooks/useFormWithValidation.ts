import React, { ChangeEvent, useCallback } from "react";

type UseFormWithValidation<S> = {
	values: S,
	errors: S,
	handleChange: (evt: ChangeEvent<HTMLInputElement>) => void,
	resetFrom: (newValues?: S, newErrors?: S, newIsValid?: boolean) => void,
	isValid: boolean
}

export default function useFormWithValidation<T>(initialValues: T): UseFormWithValidation<T> {
  const [values, setValues] = React.useState<T>(initialValues);
  const [errors, setErrors] = React.useState<T>(initialValues);
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
	const form = input.closest("form");
    setIsValid(!!(form && form.checkValidity()));
  };

  const resetFrom = useCallback(
    (newValues = initialValues, newErrors = initialValues, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, resetFrom, errors, isValid };
}
