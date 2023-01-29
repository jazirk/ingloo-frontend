import { useRef, useState, useEffect } from 'react';

import { useFormik } from 'formik';
import Image from 'next/image';

import tickMark from '../../public/assets/images/tickmark.svg';
import { Button } from '../button/Button';
import { ErrorLabel } from '../error-label';
import { SignUpCompanyValidationSchema } from '../validation-schemas/signup-validation.schema';

const CompanyRegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      founderName: '',
      companyName: '',
      phoneNumber: '',
      signinType: 'company',
    },
    validationSchema: SignUpCompanyValidationSchema,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  useEffect(() => {
    formik.resetForm();
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState(null as File | null);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    setFile(selectedFiles?.[0] || null);
  };

  return (
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
          {file ? <div>{file?.name}</div> : <button>Upload pitch deck</button>}

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
  );
};

export default CompanyRegisterForm;
