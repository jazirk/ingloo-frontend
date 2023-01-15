import className from 'classnames';

interface ProfileCardProps {
  user: Record<string, any>;
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  const profileClass = className({
    card: true,
  });

  return (
    <div className={`card w-96 bg-white shadow-xl ${profileClass}`}>
      <figure>
        <img src={user.image} alt="Profile Pic" />
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
