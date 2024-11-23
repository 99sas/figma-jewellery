import React from 'react';

import Image from 'next/image';

function Home() {
  return (
    <div className="h-screen">
    
      <section className="flex h-[189px]">
        {/* Left Section */}
        <section className="w-1/2 flex flex-col items-start m-12">
          <h1 className="text-[40px] w-[496px] font-bold">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="h-[147px] w-[902px] text-yellow-800 mt-4 leading-relaxed">
            An example of intricate workmanship and detail, elegant <br /> necklaces and long and
            short chains form a part of our <br /> desirable collection.
          </p>
          <button
            className="h-[58px] w-[288px] rounded-full mt-6 text-white font-semibold"
            style={{ backgroundColor: 'rgb(162, 152, 117)' }}
          >
            Explore Now
          </button>
        </section>

        {/* Right Section */}
        <section className="absolute right-0 p-5">
          <Image
            className="border-r-yellow-700"
            src={"/task2.svg"}
            alt="Jewelry Image"
            width={300}
            height={647}
            priority
          />
        </section>
      </section>
    </div>
  );
}

export default Home;
