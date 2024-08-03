import Link from "next/link";
import React from "react";

export default function Discussions() {
  const topics = [
    {
      item: "Blockchain",
    },
    {
      item: "Artificial Intelligence",
    },
    {
      item: "Career and Finance",
    },
    {
      item: "Internet of Things",
    },
    {
      item: "Extended Reality",
    },
  ];
  return (
    <section className="mb-40">
      <div className="">
        <p className="md:text-3xl text-base text-center">
          This landmark event is designed to
          <br />
          empower future tech leaders through
          <br />
          discussions on:
        </p>

        <div className="flex gap-[10px] md:gap-[36px] w-max mx-auto mt-10">
          <div className="p-[1px] topic-border overflow-hidden">
            <div className="bg-[#191D6C] rounded-lg overflow-hidden">
              <div className="topic-bg h-full w-full md:py-5 py-2 px-3 md:px-10">
                <p className="md:text-3xl text-xs">Blockchain</p>
              </div>
            </div>
          </div>
          <div className="p-[1px] topic-border overflow-hidden">
            <div className="bg-[#191D6C] rounded-lg overflow-hidden">
              <div className="topic-bg h-full w-full md:py-5 py-2 px-3 md:px-10">
                <p className="md:text-3xl text-xs">Artificial Intelligence</p>
              </div>
            </div>
          </div>
          <div className="p-[1px] topic-border overflow-hidden">
            <div className="bg-[#191D6C] rounded-lg overflow-hidden">
              <div className="topic-bg h-full w-full md:py-5 py-2 px-3 md:px-7 lg:px-10">
                <p className="md:text-3xl text-xs">Career and Finance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[10px] md:gap-[36px] w-max mx-auto mt-6">
          <div className="p-[1px] topic-border overflow-hidden">
            <div className="bg-[#191D6C] rounded-lg overflow-hidden">
              <div className="topic-bg h-full w-full md:py-5 py-2 px-3 md:px-10">
                <p className="md:text-3xl text-xs">Internet of Things</p>
              </div>
            </div>
          </div>
          <div className="p-[1px] topic-border overflow-hidden">
            <div className="bg-[#191D6C] rounded-lg overflow-hidden">
              <div className="topic-bg h-full w-full md:py-5 py-2 px-3 md:px-10">
                <p className="md:text-3xl text-xs">Extended Reality</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-16 flex items-center justify-center">
        <Link href="https://lu.ma/vpwxwhrz" target="_blank" rel="noreferrer">
          <button className="text-[#0057FF] w-max mx-auto text-sm md:text-2xl bg-white rounded-full py-3 px-4 md:py-5 md:px-14">
            Register Now
          </button>
        </Link>
        </div>
      </div>
    </section>
  );
}
