import React, { useEffect } from 'react'
import Wrapper from './components/Wrapper'
import styled from 'styled-components'
import Movie from './assets/movie.png'
import Input from '../../components/common/input'
import Button from '../../components/common/button'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useSignupMutation } from '../../store/auth/authenticationApi'

function SignUp() {
  const navigate = useNavigate()
  const [signup, { isLoading, isSuccess }] = useSignupMutation()
  const initialValues: { email: string; password: string; fullname: string } = {
    email: '',
    password: '',
    fullname: ''
  }
  const onSubmit = (values: any) => {
    const data = {
      fullname: values.fullname,
      userName: values.email,
      password: values.password
    }
    signup(data).then((res: any) => {
      // console.log(res)
      if (res?.data) {
        const user = res.data.userName
        localStorage.setItem('movixAuth', user)
      }
    })
  }
  const validate = (values: any) => {
    const errors: { [key: string]: string } = {}
    // var validRegex =
    //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!values.email) {
      errors.email = 'Please enter a valid email'
    }
    // else if (!validRegex.test(values.email)) {
    //   errors.email = 'Please enter a valid email'
    // }
    if (!values.password) {
      errors.password = 'Please enter a valid password'
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }
    return errors
  }
  const form = useFormik({
    initialValues,
    onSubmit,
    validate,
    validateOnChange: false
  })
  useEffect(() => {
    if (isSuccess) {
      navigate('/home')
    }
  }, [isSuccess])

  useEffect(() => {
    if (localStorage.getItem('movixAuth')) {
      navigate('/home')
    }
  }, [])

  return (
    <Wrapper>
      <Container>
        <img src={Movie} alt="logo" />
        <div className="inner-div">
          <h2 className="header">Hi, Welcome</h2>
          <p className="sub">
            Please sign-in to your account and start your experience
          </p>
          <div className="w-full h-[342px] mt-8 flex flex-col gap-4">
            <Input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full Name"
              onChange={form.handleChange}
              errorText={form?.errors?.fullname}
            />
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={form.handleChange}
              errorText={form?.errors?.email}
            />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={form.handleChange}
              errorText={form?.errors?.password}
              passwordToggle
            />
            <Button
              background="#000"
              text="Register"
              loading={isLoading}
              onAction={form.handleSubmit}
            />
            <div className="flex items-center justify-center">
              <div className="flex gap-2">
                <p className="text-[#747474]">Already have an acoount? </p>
                <Link to={'/login'} className="text-red-700 font-medium">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default SignUp

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 28px 36px;
  gap: 24px;
  position: absolute;
  width: 450px;
  height: 604px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  .inner-div {
    width: 394px;
    // height: 408px;
    margin: 0 auto;
    .header {
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;

      text-align: center;
      color: #000000;
    }
    .sub {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      color: #747474;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    // padding: 0 10px;
    .inner-div {
      width: 95%;
    }
  }
`
