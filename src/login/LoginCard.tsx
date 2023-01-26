import { useState } from 'react';

import { Form, Formik } from 'formik';
import Image from 'next/image';

import signinLogoWhite from '../../public/assets/images/signin_white.svg';
import { ButtonGroup } from '../button-group/ButtonGroup';
import { Button } from '../button/Button';
import { ErrorLabel } from '../error-label';
import SignInValidationSchema from '../validation-schemas/signin-validation.schema';

const LoginCard = () => {
  const [loginType, setLoginType] = useState<any>('investor');

  return (
    <div className="w-[90%] md:w-[60%] lg:w-[40%] h-fit p-6 lg:p-10 bg-white border-2 border-gray-400 rounded-lg flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl text-black font-bold">Sign in</h1>
      <Formik
        initialValues={{
          username: '',
          password: '',
          signinType: loginType,
        }}
        validationSchema={SignInValidationSchema}
        onSubmit={(values) => {
          console.log({ values });
        }}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form>
            <ButtonGroup
              selected={loginType}
              updateSelected={(value) => {
                setFieldValue('signinType', value);
                setLoginType(value);
              }}
            />
            <div className="border-gray-400 border-b-2 w-full max-w-xl mt-4"></div>
            <div className="w-full flex justify-center items-center flex-col gap-2">
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text text-black">Username</span>
                </label>
                <input
                  type="text"
                  name="username"
                  onChange={(e) => setFieldValue('username', e.target.value)}
                  placeholder="ex-johndoe"
                  className="input input-bordered w-full max-w-xl bg-white  border-gray-500"
                />
                {errors.username && touched.username ? (
                  <ErrorLabel>{errors.username}</ErrorLabel>
                ) : null}
              </div>
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setFieldValue('password', e.target.value)}
                  placeholder="********"
                  className="input input-bordered w-fullmax-w-xl bg-white border-gray-500"
                />
                {errors.password && touched.password ? (
                  <ErrorLabel>{errors.password}</ErrorLabel>
                ) : null}
              </div>
              <Button secondary rounded classname="w-full md:max-w-xl mt-2">
                <Image src={signinLogoWhite} alt="Signin" />
                Sign in
              </Button>
              <p className="underline text-black">Forgot your password?</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginCard;
