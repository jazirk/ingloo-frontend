import { useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import logo from '../../public/assets/images/logo.svg';
import signInBg from '../../public/assets/images/signin-bg.svg';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import LoginCard from '../login/LoginCard';
import LoginTitle from '../login/LoginTitle';
import SignUpCard from '../login/SignUpCard';
import SignUpTitle from '../login/SignUpTitle';
import { Navbar } from '../navigation/Navbar';

const style = {
  backgroundImage: `url(${signInBg.src})`,
  backGroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Login = () => {
  const router = useRouter();
  const [routerPath] = useState(router.pathname);

  const isLogin = useMemo(() => routerPath === '/login', [routerPath]);
  return (
    <Background color="bg-white">
      <Section yPadding="py-0" xPadding="px-0" height="h-screen">
        <Navbar logo={logo}>{/* <SignUpTitle /> */}</Navbar>
        <div className="border-t-2 border-t-[#E0E0E0]"></div>
        <main
          style={style}
          className="flex items-center justify-center flex-col gap-5 h-100 lg:h-screen mt-6 lg:mt-0"
        >
          {isLogin ? <LoginCard /> : <SignUpCard />}
          {isLogin ? <SignUpTitle /> : <LoginTitle />}
          {/* <div className="lg:hidden md:hidden text-black">
            <span>Dont have an account?</span>{' '}
            <a onClick={() => router.push('signup')} className="underline ml-3">
              Sign up
            </a>
          </div> */}
          <footer className="flex flex-col items-center justify-center text-black px-4 mb-12 lg:mb-0">
            <p>&copy; 2023 Inglo Capital</p>
            <p className="text-center">
              By processing futher, I agree to Inglo{' '}
              <a className="underline">Privacy policy</a> and{' '}
              <a className="underline">Terms of service</a>
            </p>
          </footer>
        </main>
      </Section>
    </Background>
  );
};

export default Login;
