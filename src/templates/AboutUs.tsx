import Image from 'next/image';

import aboutUsBox from '../../public/assets/images/about-us-box.svg';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const AboutUs = () => (
  <div id="aboutUs">
    <Background color="bg-white border border-[#E0E0E0]">
      <Section yPadding="py-20" id="#aboutUs">
        <div className="grid grid-cols-2 w-full h-[50rem]">
          <div className="flex flex-col gap-5 justify-start items-start text-black">
            <h1 className="font-bold">About Us</h1>
            <h2 className="font-bold text-4xl">
              Describe what makes your <br />
              company different to competitors
            </h2>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <Image src={aboutUsBox} alt="about-us-list" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="flex gap-3">
                <Image src={aboutUsBox} alt="about-us-list" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="flex gap-3">
                <Image src={aboutUsBox} alt="about-us-list" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-[#8c8c8c1a] h-full rounded-3xl" />
          </div>
        </div>
      </Section>
    </Background>
  </div>
);

export { AboutUs };
