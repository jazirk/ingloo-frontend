import Image from 'next/image';

import pitch from '../../public/assets/images/pitch.svg';
import semiCirle from '../../public/assets/images/semi-circle.svg';
import timelineBusiness from '../../public/assets/images/timeline-business.svg';
import timelineCheck from '../../public/assets/images/timeline-checkmark.svg';
import timelineDollar from '../../public/assets/images/timeline-dollar.svg';
import timelineStar from '../../public/assets/images/timeline-star.svg';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Philiosophy = () => (
  <Background color="bg-white border border-[#E0E0E0]">
    <Section yPadding="pt-4 lg:pt-16" xPadding="px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-10 w-full relative">
        <div className="flex flex-col gap-5 justify-start items-start text-black">
          <h1 className="font-bold ">Investment Philosophy</h1>

          <h2 className="font-bold text-4xl w-full lg:max-w-md">
            How do we choose whom to fund?
          </h2>
          <p className="text-black lg:max-w-md">
            We look for Grit of the team and your ability to withstand
            adversity. We recommend at least one of the co-founders to show
            background in Healthcare since we believe that it’s a unique market
            and with its own regulatory and process challenges.
          </p>
          <Button secondary rounded>
            <Image src={pitch} alt="Pitch" />
            Pitch Now
          </Button>
        </div>
        <div className="text-base text-black lg:mt-0 flex flex-col gap-10">
          <div className="flex gap-5 items-start">
            <Image src={timelineStar} alt="Timeline Star" />
            <div>
              <h1 className="font-semibold">Initial Rating</h1>
              <p className="max-w-prose">
                Rate the Founding team members on Cohesiveness, disagreement
                handling, Grit, Attitude with money handling and Background (1
                to 6 points for each item)
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <Image src={timelineBusiness} alt="Timeline Business" />
            <div>
              <h1 className="font-semibold">Market Evaluation</h1>
              <p className="max-w-prose">
                TAM, Product fit, Competition, Maturity of the market and
                Technological barriers (1 to 6 points for each item)
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <Image src={timelineDollar} alt="Timeline Dollar" />
            <div>
              <h1 className="font-semibold">Initial Rating</h1>
              <p className="max-w-prose">
                CAC, Growth Potential, Cash flow potential, WC +ve/-ve and Scale
                Margins (1 to 6 points for each item)
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <Image
              style={{ alignSelf: 'flex-start' }}
              src={timelineCheck}
              alt="Timeline Check"
            />
            <div>
              <h1 className="font-semibold">Company Auditing</h1>
              <p className="max-w-prose">
                TAM, Product fit, Competition, Maturity of the market and
                Technological barriers (1 to 6 points for each item)
              </p>
            </div>
          </div>
        </div>
        <Image
          src={semiCirle}
          alt="Semi Circle"
          className="absolute -bottom-20 left-10"
        />
      </div>
    </Section>
  </Background>
);

export { Philiosophy };
