import Image from "next/image";

interface IInfoCards {
  imgUrl: string;
  title: string;
  paragraphOne: string;
  paragraphTwo?: string;
}

export default function InfoCards({
  imgUrl,
  title,
  paragraphOne,
  paragraphTwo,
}: IInfoCards) {
  return (
    <section className="md:mb-40 mb-20">
      <div className="p-[1px] info-card-border overflow-hidden">
        <div className="bg-[#191D6C] rounded-[21.5px] overflow-hidden">
          <div className="card-bg w-full rounded-3xl overflow-hidden">
            <div className="">
              <Image
                src={imgUrl}
                alt="Snippet from Socrates Inter-University debate"
                width={1060}
                height={627}
                className="w-full"
              />
            </div>
            <div className="md:px-16 px-8 -translate-y-16 md:-translate-y-24">
              <h1 className="md:text-7xl text-4xl mb-7">{title}</h1>
              <p className="md:text-xl text-sm">{paragraphOne}</p>
              {paragraphTwo && <p className="md:text-xl text-sm mt-6">{paragraphTwo}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
