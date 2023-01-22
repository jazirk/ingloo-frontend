import { useEffect, useState } from 'react';

import Image from 'next/image';

import companyLogo from '../../public/assets/images/company.svg';
import companyLogoWhite from '../../public/assets/images/company_white.svg';
import investorLogo from '../../public/assets/images/investor.svg';
import investorLogoWhite from '../../public/assets/images/investor_white.svg';

type IButtonGroupProps = {
  selected?: 'investor' | 'company';
  updateSelected?: (userType: 'investor' | 'company' | undefined) => void;
};

// eslint-disable-next-line unused-imports/no-unused-vars
const ButtonGroup = ({ selected }: IButtonGroupProps) => {
  const [selectedUserType, setSelectedUserType] = useState(selected);
  const [investorImageSrc, setInvestorImageSrc] = useState(
    selected === 'investor' ? investorLogoWhite : investorLogo
  );
  const [companyImageSrc, setCompanyImageSrc] = useState(
    selected === 'company' ? companyLogoWhite : companyLogo
  );

  const onUserTypeChange = (userType: 'investor' | 'company' | undefined) => {
    setSelectedUserType(userType);
    // if (updateSelected) {
    //   updateSelected(userType);
    // }

    if (userType === 'investor') {
      setInvestorImageSrc(investorLogoWhite);
      setCompanyImageSrc(companyLogo);
    } else {
      setInvestorImageSrc(investorLogo);
      setCompanyImageSrc(companyLogoWhite);
    }
  };

  useEffect(() => {
    onUserTypeChange(selected);
  }, [selected]);

  return (
    <div className={`flex text-black`}>
      <a onClick={() => onUserTypeChange('investor')}>
        <div
          className={`text-white flex gap-2 font-normal border border-[#979DAF] border-r-0 rounded-l-full py-4 px-8 ${
            selectedUserType === 'investor'
              ? 'bg-[#F85C3A] text-white'
              : 'text-black'
          }}`}
        >
          <Image src={investorImageSrc} alt="Investor" />
          Investor
        </div>
      </a>
      <div className="border border-[#979DAF] mt-2 mb-2" />
      <a onClick={() => onUserTypeChange('company')}>
        <div
          className={`flex gap-2 font-normal border border-[#979DAF] border-l-0 rounded-r-full py-4 px-8 ${
            selectedUserType === 'company'
              ? 'bg-[#F85C3A] text-white'
              : 'text-black'
          }`}
        >
          <Image src={companyImageSrc} alt="Company" />
          Company
        </div>
      </a>
    </div>
  );
};

export { ButtonGroup };
