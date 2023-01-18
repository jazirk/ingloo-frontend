import mission from '../../public/assets/images/mission.svg';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const styles = {
  backgroundImage: `url(${mission.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '400px',
};

const Mission = () => (
  <Background color="bg-white">
    <Section yPadding="py-0" xPadding="px-0">
      <div
        style={styles}
        className="flex flex-col gap-3 justify-center items-center"
      >
        <h1 className="font-semibold text-base text-[#F85C3A] mt-16 lg:mt-0">
          Our Mission
        </h1>
        <p className="text-white font-bold w-1/3">
          At InGlo, our mission is to support and empower Indian startups to
          tackle the healthcare challenges faced by a billion people, while also
          striving to improve the lives of people around the world through
          affordable healthcare solutions.
        </p>
      </div>
    </Section>
  </Background>
);

export { Mission };
