import { useState } from 'react';

import Link from 'next/link';

import companyLogo from '../../public/assets/images/company.svg';
import companyLogoWhite from '../../public/assets/images/company_white.svg';
import heroImage from '../../public/assets/images/hero.svg';
import investorLogo from '../../public/assets/images/investor.svg';
import investorLogoWhite from '../../public/assets/images/investor_white.svg';
import logo from '../../public/assets/images/logo.svg';
import signinLogo from '../../public/assets/images/signin.svg';
import signinLogoWhite from '../../public/assets/images/signin_white.svg';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { Navbar } from '../navigation/Navbar';

const Hero = () => {
  const [signinImageSrc, setSigninImageSrc] = useState(signinLogo);
  const [investorImageSrc, setInvestorImageSrc] = useState(investorLogo);
  const [companyImageSrc, setCompanyImageSrc] = useState(companyLogo);

  return (
    <Background color="bg-white">
      <Section yPadding="py-4" border="border-b border-b-[#E0E0E0]">
        <Navbar
          logo={logo.src}
          button={
            <Button
              rounded
              onMouseOver={() => setSigninImageSrc(signinLogoWhite)}
              onMouseLeave={() => setSigninImageSrc(signinLogo)}
            >
              <img src={signinImageSrc.src} alt="Signin" />
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
        </Navbar>
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
                    <div
                      onMouseOver={() => setInvestorImageSrc(investorLogoWhite)}
                      onMouseLeave={() => setInvestorImageSrc(investorLogo)}
                      className="flex gap-2 font-normal border border-[#979DAF] border-r-0 rounded-l-full py-4 px-8 hover:bg-[#F85C3A] hover:text-white"
                    >
                      <img
                        src={investorImageSrc.src}
                        alt="Signin"
                        className="h-6"
                      />
                      Investor
                    </div>
                  </a>
                </Link>
                <div className="border border-[#979DAF] mt-2 mb-2" />
                <Link href="/">
                  <a>
                    <div
                      onMouseOver={() => setCompanyImageSrc(companyLogoWhite)}
                      onMouseLeave={() => setCompanyImageSrc(companyLogo)}
                      className="flex gap-2 font-normal border border-[#979DAF] border-l-0 rounded-r-full py-4 px-8 hover:bg-[#F85C3A] hover:text-white"
                    >
                      <img src={companyImageSrc.src} alt="Signin" />
                      Company
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          }
          image={
            <img
              src={heroImage.src}
              alt="Hero Image"
              className="mx-auto mt-16"
            />
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
