import Image from "next/image";
import React from "react";

export default function IntroCard() {
  return (
    <section className="mb-40">
      <div className="intro-card-bg rounded-3xl overflow-hidden">
        <div className="md:px-24 px-11 pt-11 md:pt-24">
          <p className="text-3xl md:text-5xl">
            Join us as we celebrate <br className="hidden md:block" />
            three decades of computer <br className="hidden md:block" />
            science excellence at the <br className="hidden md:block" />
            University of Uyo.
          </p>
        </div>
        <div className="">
          <Image
            src="/assets/bigjo.png"
            alt="Focosa President giving speech"
            width={1060}
            height={627}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
