import Image from "next/image";
import Wrapper from "./Wrapper";

export default function Footer() {
  return (
    <footer className="bg-[#0F1141]">
      <Wrapper>
        <div className="md:py-28 py-16">
          <h1 className="md:text-8xl text-4xl mb-5">Contact Us</h1>
          <div className="flex justify-between items-center">
            <div className="md:text-2xl text-lg">
              <p className="md:mb-7 mb-5">
                For any questions or inquiries, please don&apos;t hesitate {" "}
                <br className="hidden md:block" />
                to contact us through the following channels:
              </p>

              <p>
                Email:{" "}
                <a href="mailto:josephnssien@gmail.com">
                  josephnssien@gmail.com{" "}
                </a>
              </p>
              <p className="md:mb-7 mb-5">
                <a href="mailto:focosauniuyo@gmail.com">
                  focosauniuyo@gmail.com
                </a>
              </p>

              <p className="md:mb-7 mb-5">Contact</p>

              <p>WhatsApp: +2348134617507</p>
              <p>Telegram: @iMasterJoJo</p>
            </div>
            <div className="flex-1 hidden md:inline-flex">
              <Image
                src="/assets/icon.svg"
                alt="Icon"
                width={313}
                height={183}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
