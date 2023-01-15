import formedByLogo from '../../public/assets/images/formed-by.svg';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const WhatWeDo = () => (
  <Background color="bg-white border border-[#E0E0E0]">
    <Section yPadding="py-4">
      <div className="flex flex-col lg:flex-row text-black">
        <div className="w-full lg:w-1/2 mx-2 lg:m-auto pr-0 sm:pr-16 lg:pr-20">
          <div className="font-semibold text-base text-[#F85C3A] mt-16 lg:mt-0 ">
            Who are we?
          </div>
          <div className="font-bold text-5xl leading-none mt-4 mb-6 pr-4">
            Lorem ipsum dolor sit amet consectetur.
          </div>
          <div className="font-normal text-xl">
            We work closely with our portfolio companies to provide not just
            financial support, but also strategic guidance and resources to help
            them succeed.
          </div>
          <div className="flex items-center gap-2 mt-10">
            <img src={formedByLogo.src} alt="Formed By" />
            <span>Formed by Alumina of INSEAD & IIMs</span>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-[#F85C3A1A] h-[32rem] my-28 rounded-3xl" />
        </div>
      </div>
    </Section>
  </Background>
);

export { WhatWeDo };
