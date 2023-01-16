import Image from 'next/image';

import arrowRight from '../../public/assets/images/arrow-right-line.svg';
import initiatives from '../../public/assets/images/initiatives.svg';
import inVite from '../../public/assets/images/invite.svg';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Card } from '../ui-components/Card';
import { Carousel } from '../ui-components/Carousel';

const styles = {
  backgroundImage: `url(${initiatives})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const Initiatives = () => {
  return (
    <Background color="bg-white">
      <Section yPadding="py-0" xPadding="px-0" id="initiatives">
        <div style={styles} className="flex flex-col gap-5 pl-10 pt-20 pb-20">
          <h1 className="font-semibold text-5xl text-white mt-16 lg:mt-0 ">
            Our Initiatives
          </h1>
          <p className="text-white w-1/3">
            Lorem ipsum dolor sit amet consectetur. Mollis volutpat elit
            tristique tellus. Arcu lacinia tempus massa non. Faucibus semper
            mattis amet amet mauris est condimentum dignissim.
          </p>
          <Carousel itemWidth="w-3/4">
            <Card clasName="p-6 bg-[#4056F4]">
              <figure className="h-full w-full">
                <Image
                  className="object-contain"
                  src={'/assets/images/initiative-figure.svg'}
                  alt="Initiative"
                />
              </figure>
              <div className="card-body text-white">
                <div className="flex items-center">
                  <Image src={inVite} alt="InVite" />
                  <span>inVite</span>
                </div>

                <h2 className="font-bold">
                  Explore healthcare investment opportunities{' '}
                </h2>
                <p>
                  Navigating the Healthcare Market for Investment Opportunities
                  with Favorable Risk-Return Profiles
                </p>
                <div className="card-actions justify-start cursor-pointer">
                  <div className="font-bold">Join Hub</div>
                  <Image src={arrowRight} alt="arrow-right" />
                </div>
              </div>
            </Card>
            <Card clasName="p-6 bg-[#F85C3A]">
              <figure className="h-full w-full">
                <Image
                  className="object-contain"
                  src={'/assets/images/initiative-figure.svg'}
                  alt="Initiative"
                />
              </figure>
              <div className="card-body text-white">
                <div className="flex items-center">
                  <Image src={inVite} alt="InVite" />
                  <span>smartGlo</span>
                </div>

                <h2 className="font-bold">
                  Explore healthcare investment opportunities{' '}
                </h2>
                <p>
                  Navigating the Healthcare Market for Investment Opportunities
                  with Favorable Risk-Return Profiles
                </p>
                <div className="card-actions justify-start cursor-pointer">
                  <div className="font-bold">Join Hub</div>
                  <Image src={arrowRight} alt="arrow-right" />
                </div>
              </div>
            </Card>
            <Card clasName="p-6 bg-[#FFAE03]">
              <figure className="h-full w-full">
                <Image
                  className="object-contain"
                  src={'/assets/images/initiative-figure.svg'}
                  alt="Initiative"
                />
              </figure>
              <div className="card-body text-white">
                <div className="flex items-center">
                  <Image src={inVite} alt="InVite" />
                  <span>smartGlo</span>
                </div>

                <h2 className="font-bold">
                  Explore healthcare investment opportunities{' '}
                </h2>
                <p>
                  Navigating the Healthcare Market for Investment Opportunities
                  with Favorable Risk-Return Profiles
                </p>
                <div className="card-actions justify-start cursor-pointer">
                  <div className="font-bold">Join Hub</div>
                  <Image src={arrowRight} alt="arrow-right" />
                </div>
              </div>
            </Card>
          </Carousel>
        </div>
      </Section>
    </Background>
  );
};

export { Initiatives };
