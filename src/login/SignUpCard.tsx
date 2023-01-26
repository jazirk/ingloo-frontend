import { useMemo, useRef, useState } from 'react';

import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/router';

import tickMark from '../../public/assets/images/tickmark.svg';
import { ButtonGroup } from '../button-group/ButtonGroup';
import { Button } from '../button/Button';
import { ErrorLabel } from '../error-label';
import {
  SignUpInvestorValidationSchema,
  SignUpCompanyValidationSchema,
} from '../validation-schemas/signup-validation.schema';

const SignUpCard = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const userType = useMemo(() => {
    const routerQuery = router.query.user as 'investor' | 'company' | undefined;
    if (routerQuery) {
      return routerQuery;
    }
    return 'investor';
  }, [router.query]);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  // const updateSelectedUser = (userType: 'investor' | 'company' | undefined) => {
  //   router.query.user = userType;
  //   router.push(router);
  // };

  const [file, setFile] = useState(null as File | null);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    setFile(selectedFiles?.[0] || null);
  };

  const validationSchema = useMemo(() => {
    if (userType === 'investor') {
      return SignUpInvestorValidationSchema;
    }
    return SignUpCompanyValidationSchema;
  }, [userType]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      mobileNumber: '',
      founderName: '',
      companyName: '',
      phoneNumber: '',
      signinType: userType,
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // const url = 'http://localhost:3000/uploadFile';
  //   const formData = new FormData();
  //   formData.append('file', file as Blob);
  //   formData.append('fileName', file?.name as string);
  //   const config = {
  //     headers: {
  //       'content-type': 'multipart/form-data',
  //     },
  //   };
  // }
  return (
    <div className="w-[90%] md:w-[60%] lg:w-[40%] h-fit p-5 md:p-10 bg-white border-2 border-gray-400 rounded-lg flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl text-black font-bold">Sign up</h1>
      <ButtonGroup
        selected={userType || 'investor'}
        updateSelected={(value) => {
          router.replace(`/signup?user=${value}`);
          formik.resetForm();
        }}
      />
      <div className="border-gray-400 border-b-2 w-full max-w-xl mt-4"></div>
      {userType === 'investor' ? (
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
              {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
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
      ) : (
        <form onSubmit={(event) => event.preventDefault()} className="w-full">
          <div className="w-full flex justify-center items-center flex-col gap-2">
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text text-black">Founder Name</span>
              </label>
              <input
                type="text"
                name="founderName"
                value={formik.values.founderName}
                onChange={formik.handleChange}
                className="input input-bordered w-full max-w-xl bg-white  border-gray-500"
              />
              {formik.errors.founderName && formik.touched.founderName ? (
                <ErrorLabel>{formik.errors.founderName}</ErrorLabel>
              ) : null}
            </div>
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text text-black">Company Name</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                className="input input-bordered w-fullmax-w-xl bg-white border-gray-500"
              />
              {formik.errors.companyName && formik.touched.companyName ? (
                <ErrorLabel>{formik.errors.companyName}</ErrorLabel>
              ) : null}
            </div>
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text text-black">Phone Number</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                minLength={10}
                maxLength={10}
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                placeholder="ex-9876543210"
                className="input input-bordered w-fullmax-w-xl bg-white border-gray-500"
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                <ErrorLabel>{formik.errors.phoneNumber}</ErrorLabel>
              ) : null}
            </div>
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text text-black">Email Id</span>
              </label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="input input-bordered w-fullmax-w-xl bg-white border-gray-500"
              />
              {formik.errors.email && formik.touched.email ? (
                <ErrorLabel>{formik.errors.email}</ErrorLabel>
              ) : null}
            </div>
            <div
              onClick={() => inputRef?.current?.click()}
              className="cursor-pointer input input-bordered w-full max-w-xl bg-gray-200 border-dashed border-4 flex items-center justify-center mt-2 text-black h-[100px]"
            >
              {file ? (
                <div>{file?.name}</div>
              ) : (
                <button>Upload pitch deck</button>
              )}

              <input
                ref={inputRef}
                accept="application/pdf"
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  selectFile(e);
                }}
              />
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
      )}
    </div>
  );
};

export default SignUpCard;
