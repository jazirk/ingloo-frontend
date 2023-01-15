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
    <Section yPadding="py-20" xPadding="px-20">
      <div className="grid grid-cols-2 w-full relative">
        <div className="flex flex-col gap-5 justify-start items-start text-black">
          <h1 className="font-bold ">Investment Philosophy</h1>

          <h2 className="font-bold text-4xl">
            How do we choose <br />
            whom to fund?
          </h2>
          <p className="text-black">
            We look for Grit of the team and your ability to <br />
            withstand adversity. We recommend at least one <br />
            of the co-founders to show background <br />
            in Healthcare since we believe that it’s a unique <br />
            market and with its own regulatory and process challenges.
          </p>
          <Button secondary rounded>
            <img src={pitch.src} alt="Pitch" />
            Pitch Now
          </Button>
        </div>
        <div className="text-base text-black mt-16 lg:mt-0 ">
          <div className="flex gap-5">
            <img src={timelineStar.src} alt="Timeline Star" />
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
            <img src={timelineBusiness.src} alt="Timeline Business" />
            <div>
              <h1 className="font-semibold">Market Evaluation</h1>
              <p className="max-w-prose">
                TAM, Product fit, Competition, Maturity of the market and
                Technological barriers (1 to 6 points for each item)
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <img src={timelineDollar.src} alt="Timeline Dollar" />
            <div>
              <h1 className="font-semibold">Initial Rating</h1>
              <p className="max-w-prose">
                CAC, Growth Potential, Cash flow potential, WC +ve/-ve and Scale
                Margins (1 to 6 points for each item)
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <img src={timelineCheck.src} alt="Timeline Check" />
            <div>
              <h1 className="font-semibold">Company Auditing</h1>
              <p className="max-w-prose">
                TAM, Product fit, Competition, Maturity of the market and
                Technological barriers (1 to 6 points for each item)
              </p>
            </div>
          </div>
        </div>
        <img
          src={semiCirle.src}
          alt="Semi Circle"
          className="absolute -bottom-20 left-10"
        />
      </div>
    </Section>
  </Background>
);

export { Philiosophy };
