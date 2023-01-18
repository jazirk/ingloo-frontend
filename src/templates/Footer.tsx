import Image from 'next/image';

import Logo from '../../public/assets/images/logo-white.svg';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { headerLinks } from '../utils/HeadeLink';

const Footer = () => (
  <Background color="bg-[#16181D]">
    <Section yPadding="p-10" xPadding="p-10">
      <div>
        <div className="flex border-b-2 justify-between items-start border-gray-800">
          <div className="flex flex-col items-start gap-5 w-1/2 text-white pb-10">
            <Image src={Logo} alt="Logo" className="w-[200px]" />
            <h2 className="font-bold">Address :</h2>
            <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
            <h2 className="font-bold">Contact :</h2>
            <p>
              <a href="tel:18001234567">1800 123 4567</a>
            </p>
            <p>
              <a href="mailto:info@inglo.com">info@inglo.com</a>
            </p>
            <div className="flex gap-4">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-linkedin"></i>
            </div>
          </div>
          <div className="w-1/2">
            <ul className="flex flex-col gap-3 text-white">
              {headerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    onClick={() =>
                      document.querySelector(link.href)?.scrollIntoView({
                        behavior: 'smooth',
                      })
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10 text-[#979DAF] pb-10">
          <div>2022 InGlo Capital. All right reserved.</div>
          <div className="flex gap-10">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </Section>
  </Background>
);

export { Footer };
