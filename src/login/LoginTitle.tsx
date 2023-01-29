import { useRouter } from 'next/router';

const LoginTitle = () => {
  const router = useRouter();

  return (
    <div className=" text-gray-600">
      <span>Already a user?</span>{' '}
      <a onClick={() => router.push('login')} className="underline ml-3">
        Login
      </a>
    </div>
  );
};

export default LoginTitle;
