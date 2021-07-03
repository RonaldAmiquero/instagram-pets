import { useMutation, gql } from '@apollo/client';

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const useLoginMutation = () => {
  const [loginMutation, { dataLogin, loadingLogin, errorLogin }] =
    useMutation(LOGIN);
  return { loginMutation, dataLogin, loadingLogin, errorLogin };
};
