import { gql } from '@apollo/client'

export const login = gql`
  mutation Login($email: String!, $password:String!) {
    login(email:$email, password:$password) {
      user {
        username
      }
      token
    }
  }
`
