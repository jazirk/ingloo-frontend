import { useRouter } from 'next/router';

const SignUpTitle = () => {
  const router = useRouter();
  return (
    <div className="text-gray-600">
      <span>Dont have an account?</span>{' '}
      <a onClick={() => router.push('signup')} className="underline ml-3">
        Sign up
      </a>
    </div>
  );
};

export default SignUpTitle;
