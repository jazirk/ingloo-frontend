import Image from 'next/image';

import contactUsBg from '../../public/assets/images/contact-us-bg.svg';
import contactUsIcon from '../../public/assets/images/contact-us-icon.svg';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const styles = {
  backgroundImage: `url(${contactUsBg.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const ContactUs = () => (
  <Background color="bg-white">
    <Section yPadding="py-0" xPadding="px-0">
      <div
        style={styles}
        className="flex flex-col gap-8 justify-center items-start pl-10 text-white h-[600px] lg:h-[600px]"
      >
        <p className="text-white font-bold w-full pr-10 lg:w-1/3 text-4xl">
          Let’s Work towards better healthcare for a billion people
        </p>
        <p className="text-white w-full pr-10 lg:w-1/2 ">
          Healthcare is a fundamental human right, and we are committed to
          supporting companies that are working towards improving healthcare for
          all. We are dedicated to this cause.
        </p>
        <Button rounded transparent>
          <Image src={contactUsIcon} alt="Contact" />
          Contact us
        </Button>
      </div>
    </Section>
  </Background>
);

export { ContactUs };
