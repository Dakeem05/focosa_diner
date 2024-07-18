import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mb-40">
      <div className="flex gap-[60px] md:gap-0 flex-col md:flex-row items-center justify-between">
        <div className="">
          <h1 className="text-5xl md:text-7xl mb-3">
            A Night to <br className="md:hidden" />
            Decode
            <br />
            the Future!
          </h1>
          <p className="md:text-xl text-sm ">
            Welcome to Decoding the Future, the largest gathering{" "}
            <br className="hidden md:block" />
            of computer science students <br className="hidden md:block" />
            in Africa!
          </p>
        </div>

        <div className="flx-1">
          <Image
            src="/assets/hero.png"
            alt="Girl with VR glasses"
            width={411}
            height={435}
            className="hidden md:block ml-auto"
          />
          <Image
            src="/assets/hero.png"
            alt="Girl with VR glasses"
            width={383}
            height={405}
            className="md:hidden"
          />
        </div>
      </div>
    </section>
  );
}
