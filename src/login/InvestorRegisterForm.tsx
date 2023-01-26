import { useEffect } from 'react';

import { useFormik } from 'formik';
import Image from 'next/image';

import tickMark from '../../public/assets/images/tickmark.svg';
import { Button } from '../button/Button';
import { ErrorLabel } from '../error-label';
import { SignUpInvestorValidationSchema } from '../validation-schemas/signup-validation.schema';

const InvestorRegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      mobileNumber: '',
      founderName: '',
      companyName: '',
      phoneNumber: '',
      signinType: 'investor',
    },
    validationSchema: SignUpInvestorValidationSchema,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  useEffect(() => {
    formik.resetForm();
  }, []);

  return (
    <form onSubmit={(event) => event.preventDefault()} className="w-full">
      <div className="w-full flex justify-center items-center flex-col gap-2">
        <div className="form-control w-full max-w-xl">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="ex-johndoe"
            className="input input-bordered w-full max-w-xl bg-white  border-gray-500"
          />
          {formik.errors.email && formik.touched.email ? (
            <ErrorLabel>{formik.errors.email}</ErrorLabel>
          ) : null}
        </div>
        <div className="form-control w-full max-w-xl">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="********"
            className="input input-bordered w-fullmax-w-xl bg-white border-gray-500"
          />
          {formik.errors.password && formik.touched.password ? (
            <ErrorLabel>{formik.errors.password}</ErrorLabel>
          ) : null}
        </div>
        <div className="form-control w-full max-w-xl">
          <label className="label">
            <span className="label-text text-black">Confirm Password</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            placeholder="********"
            className="input input-bordered w-fullmax-w-xl bg-white border-gray-500"
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <ErrorLabel>{formik.errors.confirmPassword}</ErrorLabel>
          ) : null}
        </div>
        <div className="form-control w-full max-w-xl">
          <label className="label">
            <span className="label-text text-black">Mobile Number</span>
          </label>
          <input
            type="tel"
            name="mobileNumber"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
            minLength={10}
            maxLength={10}
            placeholder="ex-9876543210"
            className="input input-bordered w-fullmax-w-xl bg-white border-gray-500"
          />
          {formik.errors.mobileNumber && formik.touched.mobileNumber ? (
            <ErrorLabel>{formik.errors.mobileNumber}</ErrorLabel>
          ) : null}
        </div>
        <Button
          secondary
          rounded
          classname="w-full md:max-w-xl mt-2"
          onClick={() => formik.handleSubmit()}
        >
          <Image src={tickMark} alt="Register" />
          Register
        </Button>
      </div>
    </form>
  );
};

export default InvestorRegisterForm;
