import Image from "next/image";
import React from "react";
import Wrapper from "./Wrapper";

export default function Header() {
  return (
    <Wrapper>
      <header>
        <div className="flex justify-between py-14">
          <div className="">
            <Image
              src="/assets/logo.svg"
              alt="Decoding the future logo"
              width={127}
              height={42}
              className="md:hidden"
            />
            <Image
              src="/assets/logo.svg"
              alt="Decoding the future logo"
              width={157}
              height={42}
              className="hidden md:block"
            />
          </div>
          <div className="">
            <button className="text-[#0057FF] text-sm md:text-2xl bg-white rounded-full py-3 px-4 md:py-5 md:px-6">
              Register for Event
            </button>
          </div>
        </div>
      </header>
    </Wrapper>
  );
}
