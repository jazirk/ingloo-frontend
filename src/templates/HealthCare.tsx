import healthCareSvg from '../../public/assets/images/healthcare.svg';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { HealthCareChart } from '../ui-components/HealthCareChart';

const styles = {
  backgroundImage: `url(${healthCareSvg.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '800px',
};

const HealthCare = () => (
  <Background color="bg-white">
    <Section yPadding="py-0" xPadding="px-0">
      <div style={styles} className="flex flex-col justify-center items-center">
        <h3 className="text-white font-bold text-5xl leading-none mt-4 mb-6 pr-4 text-center">
          Healthcare market oppurtinities
        </h3>
        <p className="text-white px-10 text-center lg:text-left">
          We work closely with our portfolio companies to provide not just
          financial <br /> support, but also strategic guidance and resources to
          help them succeed.
        </p>
        <div className="relative flex">
          <HealthCareChart />
        </div>
      </div>
    </Section>
  </Background>
);

export { HealthCare };
