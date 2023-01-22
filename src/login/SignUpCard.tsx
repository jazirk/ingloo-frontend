import { useMemo, useRef, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import tickMark from '../../public/assets/images/tickmark.svg';
import { ButtonGroup } from '../button-group/ButtonGroup';
import { Button } from '../button/Button';

const SignUpCard = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const userType = useMemo(() => {
    return router.query.user as 'investor' | 'company' | undefined;
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
        // updateSelected="updateSelectedUser"
      ></ButtonGroup>
      <div className="border-gray-400 border-b-2 w-full max-w-xl"></div>
      {userType === 'investor' ? (
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-black">Email</span>
            </label>
            <input
              type="text"
              placeholder="ex-johndoe"
              className="input input-bordered w-full max-w-xl bg-white  border-gray-500"
            />
          </div>
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-black">Password</span>
            </label>
            <input
              type="password"
              placeholder="********"
              className="input input-bordered w-fullmax-w-xl bg-white border-gray-500"
            />
          </div>
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-black">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="********"
              className="input input-bordered w-fullmax-w-xl bg-white border-gray-500"
            />
          </div>
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-black">Confirm Password</span>
            </label>
            <input
              type="tel"
              placeholder="ex-9876543210"
              className="input input-bordered w-fullmax-w-xl bg-white border-gray-500"
            />
          </div>
          <Button secondary rounded classname="w-full md:max-w-xl mt-2">
            <Image src={tickMark} alt="Register" />
            Register
          </Button>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-black">Founder Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xl bg-white  border-gray-500"
            />
          </div>
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-black">Company Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-fullmax-w-xl bg-white border-gray-500"
            />
          </div>
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-black">Phone Number</span>
            </label>
            <input
              type="tel"
              placeholder="ex-9876543210"
              className="input input-bordered w-fullmax-w-xl bg-white border-gray-500"
            />
          </div>
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-black">Email Id</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-fullmax-w-xl bg-white border-gray-500"
            />
          </div>
          {/* <div className="form-control w-full max-w-xl h-[20px] bg-gray-600">
            <input
              type="email"
              className="input input-bordered w-fullmax-w-xl bg-white border-gray-500"
            />
          </div> */}
          <div
            onClick={() => inputRef?.current?.click()}
            className="cursor-pointer input input-bordered w-full max-w-xl bg-gray-200 border-dashed border-4 flex items-center justify-center mt-2 text-black h-[100px]"
          >
            {file ? (
              <div>{file?.name}</div>
            ) : (
              <button>Upload pitch deck</button>
            )}

            {/* Hide the crappy looking default HTML input */}
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
          <Button secondary rounded classname="w-full md:max-w-xl mt-2">
            <Image src={tickMark} alt="Register" />
            Register
          </Button>
        </div>
      )}
    </div>
  );
};

export default SignUpCard;
