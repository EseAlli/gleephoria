import React from "react";

const Features = () => {
  return (
    <section className="min-h-[700px]">
      <h4 className="text-center font-light text-2xl">Our Features</h4>
      <p className="text-center leading-relaxed lg:text-3xl font-bold">
        We are more than just a
        <br />
        <span className="from-[#ed7020] to-[#bc0a0a] bg-clip-text bg-gradient-to-r text-transparent">
          dating site
        </span>
      </p>
      <div className="my-8">
        <ul className="">
          <li className="from-[#ed7020] to-[#bc0a0a] bg-gradient-to-r text-white py-7">
            <div className="container mx-auto">
              <h5 className="text-2xl mb-0.5">Glee Stories</h5>
              <p>
                {
                  "That's why we've created a dating platform that is designed to help you connect with individuals"
                }
              </p>
            </div>
          </li>
          <li className="container mx-auto py-4 border-y border-y-grey">
            <p className="text-2xl">Global reach</p>
          </li>
          <li className="py-4 border-y border-y-gray-200">
            <div className="container mx-auto">
              <p className="text-2xl">Easy Compatibility</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
