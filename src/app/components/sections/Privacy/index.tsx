import Image from "next/image";
import React from "react";
import guy from "../../../../../public/guy.svg";
import encryption from "../../../../../public/ic_encryption.svg";
import privacy from "../../../../../public/ic_privacy.svg";
import incognito from "../../../../../public/ic_incognito.svg";

const Privacy = () => {
  return (
    <section className="min-h-[950px] md:min-h-[800px] flex justify-center bg-white items-center container mx-auto max-w-none md:max-w-[90%]">
      <div className="pt-20 md:pt-10 bg-[#FFF3E1] md:rounded-3xl h-fit">
        <div className="max-w-[85%] flex flex-col md:flex-row items-center mx-auto ">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold leading-relaxed">
              Prioritizing your privacy.
            </h3>
            <p className="font-light lg:text-xl leading-relaxed max-w-[90%]">
              Gleephoria has amazing features that enhances your privacy and
              tailors the best experience for you.
            </p>
            <ul className="mt-6 lg:text-xl grid gap-3.5 md:gap-1 lg:gap-3.5">
              <li className="flex items-center gap-2">
                <Image src={encryption} alt="End to end-encryption" />
                <span>End to end-encryption</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src={incognito} alt="Icognito mode" />
                <span>Icognito mode</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src={privacy} alt="Travel mode" />
                <span>Travel mode</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <Image src={guy} alt="guy" height={400} width={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
