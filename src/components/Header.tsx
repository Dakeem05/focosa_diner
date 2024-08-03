import Image from "next/image";
import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";

export default function Header() {
  return (
    <Wrapper>
      <header>
        <div className="flex justify-between py-8 md:py-14">
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
            <Link href="https://lu.ma/vpwxwhrz" target="_blank" rel="noreferrer">
              <button className="text-[#0057FF] text-sm md:text-2xl bg-white rounded-full py-3 px-4 md:py-5 md:px-6">
                Register for Event
              </button>
            </Link>
          </div>
        </div>
      </header>
    </Wrapper>
  );
}
