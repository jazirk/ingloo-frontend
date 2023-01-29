import { useMemo } from 'react';

import { useRouter } from 'next/router';

import { ButtonGroup } from '../button-group/ButtonGroup';
import CompanyRegisterForm from './CompanyRegisterForm';
import InvestorRegisterForm from './InvestorRegisterForm';

const SignUpCard = () => {
  const router = useRouter();
  const userType = useMemo(() => {
    const routerQuery = router.query.user as 'investor' | 'company' | undefined;
    if (routerQuery) {
      return routerQuery;
    }
    return 'investor';
  }, [router.query]);

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
        }}
      />
      <div className="border-gray-400 border-b-2 w-full max-w-xl mt-4"></div>
      {userType === 'investor' ? (
        <InvestorRegisterForm />
      ) : (
        <CompanyRegisterForm />
      )}
    </div>
  );
};

export default SignUpCard;
