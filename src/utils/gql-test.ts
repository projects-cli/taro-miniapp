import { gql } from '@apollo/client'

/**
 * 调用方式一
  client.query({
    query: LOGIN_INPUT,
    variables: {
      loginInput: {
        type: 'phone',
        phoneNumber: "17620332255",
        countryCode: "CN",
        password: "1!qQww"
      }
    }
  })
 */
export const LOGIN_INPUT = gql`
  query login ($loginInput: LoginInput) {
    login(
      loginInput: $loginInput
    ) {
      token
    }
  }
`

/**
 * 调用方式二
 client.query({
    query: LOGIN, 
    variables: {
      type: 'phone',
      phoneNumber: "17620332255",
      countryCode: "CN",
      password: "1!qQww"
    }
  })
 */
export const LOGIN = gql`
  query login ($type: AccountType!, $password: String!, $phoneNumber: String, $countryCode: CountryCode) {
    login(
      loginInput: {
        type: $type,
        phoneNumber: $phoneNumber,
        countryCode: $countryCode,
        password: $password,
      }
    ) {
      token
    }
  }
`