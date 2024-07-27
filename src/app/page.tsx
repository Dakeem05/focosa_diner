import Discussions from "@/components/Discussions";
import FAQs from "@/components/FAQs";
import Goals from "@/components/Goals";
import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";
import IntroCard from "@/components/IntroCard";
import Sponsorships from "@/components/Sponsorships";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-xeroda">
      <Wrapper>
        <HeroSection />

        <IntroCard />

        <Discussions />

        <InfoCards
          imgUrl="/assets/about-us.png"
          title="About Us"
          paragraphOne="The University of Uyo (UNIUYO) Faculty of Computing and the Nigeria
            Association of Computing Students (NACOS) UNIUYO chapter are proud
            to present a historic event: Decoding the Future – A Night of
            Innovation!"
          paragraphTwo="This event marks the 30th anniversary of the department and brings
            together the largest congregation of computer science students in
            Africa to celebrate alumni and explore the future of technology."
        />

        <InfoCards
          imgUrl="/assets/mission.png"
          title="Mission"
          paragraphOne="Our mission is to empower aspiring tech enthusiasts, foster connections between students and industry leaders, and ignite a passion for innovation in the next generation of African computer scientists."
        />

        <InfoCards
          imgUrl="/assets/vision.png"
          title="Vision"
          paragraphOne="The University of Uyo (UNIUYO) Faculty of Computing and the Nigeria Association of Computing Students (NACOS) UNIUYO chapter are proud to present a historic event: Decoding the Future – A Night of Innovation! "
          paragraphTwo="This event marks the 30th anniversary of the department and brings together the largest congregation of computer science students in Africa to celebrate alumni and explore the future of technology."
        />

        <Goals />

        <Sponsorships />

        <FAQs />
      </Wrapper>
    </div>
  );
}
