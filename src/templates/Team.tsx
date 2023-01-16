import teamBg from '../../public/assets/images/team-bg.svg';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { ProfileCard } from '../ui-components/ProfileCard';
import { TeamMembers } from '../utils/Team';

const styles = {
  backgroundImage: `url(${teamBg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '800px',
};

const Team = () => (
  <Background color="bg-white border border-[#E0E0E0]">
    <Section yPadding="py-0" xPadding="px-0">
      <div style={styles} className="flex flex-col gap-10 p-10">
        <div className="mt-20 text-black">
          <h3 className="font-semibold mt-16 lg:mt-0">Tagline</h3>
          <h2 className="text-4xl font-bold">Our Team</h2>
          <p className="font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex gap-5 flex-wrap">
          {TeamMembers.map((member) => (
            <ProfileCard user={member} key={member.id} />
          ))}
        </div>
      </div>
    </Section>
  </Background>
);

export { Team };
