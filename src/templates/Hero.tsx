import Link from 'next/link';

import companyLogo from '../../public/assets/images/company.svg';
import heroImage from '../../public/assets/images/hero.svg';
import investorLogo from '../../public/assets/images/investor.svg';
import logo from '../../public/assets/images/logo.svg';
import signinLogo from '../../public/assets/images/signin.svg';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarThreeColumns } from '../navigation/NavbarThreeColumns';

const Hero = () => (
  <Background color="bg-white">
    <Section yPadding="py-4" border="border-b border-b-[#E0E0E0]">
      <NavbarThreeColumns
        logo={logo.src}
        button={
          <Button rounded>
            <img src={signinLogo.src} alt="Signin" />
            Signin
          </Button>
        }
      >
        <li>
          <Link href="/">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Offerings</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Investors</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Resources</a>
          </Link>
        </li>
      </NavbarThreeColumns>
    </Section>

    <Section yPadding="pt-8 lg:pt-20 pb-8 lg:pb-32">
      <HeroOneButton
        title={
          <>
            {'Grow with\n'}
            <span className="text-[#F85C3A]">inGlo</span>
          </>
        }
        description="Leading the Way in Healthcare Investing: We Offer Exceptional Returns for Investors and Companies"
        button={
          <div className="">
            <div className="text-2xl font-bold mb-6">Choose your journey</div>
            <div className="flex">
              <Link href="/">
                <a>
                  <div className="flex font-normal border border-[#979DAF] border-r-0 rounded-l-full py-4 px-8">
                    <img src={investorLogo.src} alt="Signin" className="h-6" />
                    Investor
                  </div>
                </a>
              </Link>
              <div className="border border-[#979DAF] mt-2 mb-2" />
              <Link href="/">
                <a>
                  <div className="flex font-normal border border-[#979DAF] border-l-0 rounded-r-full py-4 px-8">
                    <img src={companyLogo.src} alt="Signin" />
                    Company
                  </div>
                </a>
              </Link>
            </div>
          </div>
        }
        image={
          <img src={heroImage.src} alt="Hero Image" className="mx-auto mt-16" />
        }
      />
    </Section>
  </Background>
);

export { Hero };
