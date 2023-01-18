import Image from 'next/image';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Card } from '../ui-components/Card';
import { Carousel } from '../ui-components/Carousel';

const styles = {
  backgroundImage: `url(${'/assets/images/initiatives.svg'})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const initiatives = [
  {
    id: 1,
    initiative: 'inVite',
    initiativeLogo: '/assets/images/invite.svg',
    mainImage: '/assets/images/initiative-figure.svg',
    title: 'Explore healthcare investment opportunities',
    description:
      'Navigating the Healthcare Market for Investment Opportunities with Favorable Risk-Return Profiles',
    action: 'Join Hub',
    actionLink: '#',
    bgColor: '#4056F4',
  },
  {
    id: 2,
    initiative: 'smarGlo',
    initiativeLogo: '/assets/images/invite.svg',
    mainImage: '/assets/images/initiative-figure.svg',
    title: 'Explore healthcare investment opportunities',
    description:
      'Navigating the Healthcare Market for Investment Opportunities with Favorable Risk-Return Profiles',
    action: 'Join Hub',
    actionLink: '#',
    bgColor: '#F85C3A',
  },
  {
    id: 3,
    initiative: 'smarGlo',
    initiativeLogo: '/assets/images/invite.svg',
    mainImage: '/assets/images/initiative-figure.svg',
    title: 'Explore healthcare investment opportunities',
    description:
      'Navigating the Healthcare Market for Investment Opportunities with Favorable Risk-Return Profiles',
    action: 'Join Hub',
    actionLink: '#',
    bgColor: '#FFAE03',
  },
];

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
          <Carousel itemWidth="w-1/2">
            {initiatives.map((initiative) => (
              <Card
                clasName={`p-6 bg-[${initiative.bgColor}] lg:flex`}
                key={initiative.id}
              >
                <figure>
                  <Image
                    width="600px"
                    height="600px"
                    src={initiative.mainImage}
                    alt="Initiative"
                    objectFit="cover"
                  />
                </figure>
                <div className="card-body text-white">
                  <div className="flex items-center">
                    <Image
                      src={initiative.initiativeLogo}
                      alt={initiative.initiative}
                      width="40px"
                      height="40px"
                    />
                    <span className="text-2xl">{initiative.initiative}</span>
                  </div>

                  <h2 className="font-bold text-2xl">{initiative.title}</h2>
                  <p>{initiative.description}</p>
                  <div className="card-actions  flex justify-start items-center cursor-pointer">
                    <div className="font-bold">Join Hub</div>
                    <Image
                      src={'/assets/images/arrow-right-line.svg'}
                      alt="arrow-right"
                      width="20px"
                      height="20px"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </Carousel>
        </div>
      </Section>
    </Background>
  );
};

export { Initiatives };
