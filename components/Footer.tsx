 

import Image from 'next/image';
import { footerLinks } from "@/constant";

 

const Footer = () => (

  <section className={`flexCenter mx-5  sm:mx-10 md:mx-14 sm:my-16 my-6 flex-col`}>
    <div className={ `flexStart md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col sm:justify-start justify-center sm:mr-10 ">
        <Image
          src="/vishnulogo.png"
          alt="hoobank"
          width={166}
          height={72.14}
          objectFit="contain"
        />
        <p className={`text-[20px] md:text-[24px] font-normal md:font-bold leading-[30.8px] text-orange-500 mt-4 max-w-[342px]`}>
           Share Inspire Get Hired....!
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-violet-600">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-violet-200 hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col py-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
         VishnuShares Ⓒ 2023. All Rights Reserved.
      </p>

       
    </div>
  </section>
);

export default Footer;
