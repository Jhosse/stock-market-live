import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { Row, Col } from 'react-flexbox-grid'
import { login as loginMutation } from '../../graphql/mutations'
import { setItemInLocalStorage } from '../../utils'

interface AdminFormState {
  username: string
  password: string
  email: string
  login: boolean
}

export const AdminForm = () => {
  const history = useHistory()
  const initialState: AdminFormState = {
    username: '',
    email: '',
    password: '',
    login: true
  }

  const [adminFormState, SetAdminFormState] = useState(initialState)
  const [login] = useMutation(loginMutation, {
    variables: {
      email: adminFormState.email,
      username: adminFormState.username,
      password: adminFormState.password
    },
    onCompleted: (data) => {
      const token = data.login.token
      if (token) {
        setItemInLocalStorage(token)
        history.push('/')
      }
    }
  })

  const handleOnChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    SetAdminFormState({ ...adminFormState, username: e.target.value })

  const handleOnChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    SetAdminFormState({ ...adminFormState, email: e.target.value })

  const handleOnChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    SetAdminFormState({ ...adminFormState, password: e.target.value })

  const handleOnClickSwitchState = (e: MouseEvent<HTMLButtonElement>) =>
    SetAdminFormState({ ...adminFormState, login: !adminFormState.login })

  const handleOnClickSubmitLogin = async (e: MouseEvent<HTMLButtonElement>) => login()

  return (
    <Row>
      <Col xs={12}>
        <section className={'adminForm'}>
          <h1>
            {adminFormState.login
              ? 'Log in'
              : 'Sign up'
            }
          </h1>

          <div className={'adminForm__body'}>
            {!adminFormState.login
              && <input
                className={'adminForm__input'}
                type={'text'}
                placeholder={'name'}
                onChange={handleOnChangeName}
                value={adminFormState.username} />
            }

            <input
              className={'adminForm__input'}
              type={'text'}
              placeholder={'email'}
              onChange={handleOnChangeEmail}
              value={adminFormState.email} />

            <input
              className={'adminForm__input'}
              type={'text'}
              placeholder={'password'}
              onChange={handleOnChangePassword}
              value={adminFormState.password} />

            <button
              className={'adminForm__button adminForm__button--submit'}
              onClick={handleOnClickSubmitLogin} // handle signUp too
            >
              {adminFormState.login
                ? 'log in'
                : 'sign up'
              }
            </button>

            <div className={'adminForm__footer'}>
              <p>{adminFormState.login
                ? 'create an account instead'
                : 'already have an account'
              }</p>
              <button
                className={'adminForm__button adminForm__button--switch-state'}
                onClick={handleOnClickSwitchState}>
                here
              </button>
            </div>
          </div>
        </section>
      </Col>
    </Row>
  )
}
