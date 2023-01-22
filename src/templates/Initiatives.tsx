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
    initiativeLogo: '../../public/assets/images/invite.svg',
    mainImage: '../../public/assets/images/initiative-figure.svg',
    title: 'Explore healthcare investment opportunities',
    description:
      'Navigating the Healthcare Market for Investment Opportunities with Favorable Risk-Return Profiles',
    action: 'Join Hub',
    actionLink: '#',
    bgColor: 'bg-primary-blue',
  },
  {
    id: 2,
    initiative: 'smarGlo',
    initiativeLogo: '../../public/assets/images/invite.svg',
    mainImage: '../../public/assets/images/initiative-figure.svg',
    title: 'Explore healthcare investment opportunities',
    description:
      'Navigating the Healthcare Market for Investment Opportunities with Favorable Risk-Return Profiles',
    action: 'Join Hub',
    actionLink: '#',
    bgColor: 'bg-primary-orange',
  },
  {
    id: 3,
    initiative: 'smarGlo',
    initiativeLogo: '../../public/assets/images/invite.svg',
    mainImage: '../../public/assets/images/initiative-figure.svg',
    title: 'Explore healthcare investment opportunities',
    description:
      'Navigating the Healthcare Market for Investment Opportunities with Favorable Risk-Return Profiles',
    action: 'Join Hub',
    actionLink: '#',
    bgColor: 'bg-primary-yellow',
  },
];

const Initiatives = () => {
  return (
    <Background color="bg-white">
      <Section yPadding="py-0" xPadding="px-0" id="initiatives">
        <div
          style={styles}
          className="flex flex-col gap-5 pl-10 pr-10 lg:pr-0 lg:pt-20 pb-20"
        >
          <h1 className="font-semibold text-5xl text-white mt-16 lg:mt-0 ">
            Our Initiatives
          </h1>
          <p className="text-white lg:w-1/3 w-full pr-10">
            Lorem ipsum dolor sit amet consectetur. Mollis volutpat elit
            tristique tellus. Arcu lacinia tempus massa non. Faucibus semper
            mattis amet amet mauris est condimentum dignissim.
          </p>
          <Carousel itemWidth="basis-1/2 grow">
            {initiatives.map((initiative) => (
              <Card
                clasName={`${initiative.bgColor} p-6 lg:flex`}
                key={initiative.id}
              >
                <figure>
                  <Image
                    src={initiative.mainImage}
                    alt="Initiative"
                    width="400px"
                    height="400px"
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
