import Image from 'next/image';

import signinLogoWhite from '../../public/assets/images/signin_white.svg';
import { ButtonGroup } from '../button-group/ButtonGroup';
import { Button } from '../button/Button';

const LoginCard = () => {
  return (
    <div className="w-[90%] md:w-[60%] lg:w-[40%] h-fit p-10 bg-white border-2 border-gray-400 rounded-lg flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl text-black font-bold">Sign in</h1>
      <ButtonGroup selected="investor"></ButtonGroup>
      <div className="border-gray-400 border-b-2 w-full max-w-xl"></div>
      <div className="w-full flex justify-center items-center flex-col gap-2">
        <div className="form-control w-full max-w-xl">
          <label className="label">
            <span className="label-text text-black">Username</span>
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
        <Button secondary rounded classname="w-full md:max-w-xl mt-2">
          <Image src={signinLogoWhite} alt="Signin" />
          Sign in
        </Button>
        <p className="underline text-black">Forgot your password?</p>
      </div>
    </div>
  );
};

export default LoginCard;
