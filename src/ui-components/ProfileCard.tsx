import className from 'classnames';
import Image from 'next/image';

interface ProfileCardProps {
  user: Record<string, any>;
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  const profileClass = className({
    card: true,
  });

  return (
    <div
      className={`card w-full md:basis-[25rem] grow lg:grow-0 bg-white shadow-xl p-10 ${profileClass}`}
    >
      <figure>
        <Image src={user.image} alt="Profile Pic" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user.name}</h2>
        <p>{user.description}</p>
        <div className="card-actions justify-start">
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-facebook"></i>
        </div>
      </div>

      <style jsx>
        {`
          .card {
            @apply text-black;
            @apply cursor-pointer;
          }

          .card:hover {
            @apply bg-[#272A33];
            @apply text-white;
          }
        `}
      </style>
    </div>
  );
};

export { ProfileCard };
