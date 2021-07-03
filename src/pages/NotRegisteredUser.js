import React, { useContext } from 'react';
import { UserForm } from '../components/UserForm';
import { useRegisterMutation } from '../container/RegisterMutation';
import { useLoginMutation } from '../container/LoginMutation';
import { Context } from '../Context';

export const NotRegisteredUser = () => {
  const { registerMutation, data, loading, error } = useRegisterMutation();
  const { loginMutation, dataLogin, loadingLogin, errorLogin } =
    useLoginMutation();
  const { activateAuth } = useContext(Context);

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables })
      .then(({ data }) => {
        const { signup } = data;
        activateAuth(signup);
      })
      .catch((error) => {
        console.log(error.graphQLErrors[0].message);
      });
  };
  const errorMsg = error && 'El usuario ya existe o hay algun problema.';
  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    loginMutation({ variables })
      .then(({ data }) => {
        const { login } = data;
        activateAuth(login);
      })
      .catch((error) => {
        console.log(error.graphQLErrors[0].message);
      });
  };
  const errorMsgLogin =
    errorLogin && 'La contraseña es incorrecta o el usuario no existe';
  console.log(errorLogin);
  return (
    <>
      <UserForm
        disabled={loading}
        error={errorMsg}
        title="Registrarse"
        onSubmit={onSubmit}
      />
      <UserForm
        disabled={loadingLogin}
        error={errorMsgLogin}
        title="Login"
        onSubmit={onSubmitLogin}
      />
    </>
  );
};
