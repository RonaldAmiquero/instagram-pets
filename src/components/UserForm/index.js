import React, { useEffect } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { ToastsStore } from 'react-toasts';
import { Form, Input, Title } from './styles';
import { SubmitButton } from '../SubmitButton';
/* import { toast, ToastContainer } from 'react-toastify'; */

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue('');
  const password = useInputValue('');
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  useEffect(() => {
    if (error) ToastsStore.error(error);
  }, [error]);

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder="Email" {...email} />
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
    </>
  );
};
