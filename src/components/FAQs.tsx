import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { frequentQuestions } from "@/lib/constants";

export default function FAQs() {
  return (
    <section className="md:mb-40 mb-20">
      <div className="p-[1px] info-card-border overflow-hidden">
        <div className="bg-[#191D6C] rounded-[21.5px] overflow-hidden">
          <div className="card-bg pt-10 md:pt-28 w-full rounded-3xl overflow-hidden">
            <h1 className="md:mb-10 px-8 md:px-20 mb-2 text-4xl md:text-7xl">FAQ</h1>
            <Accordion type="single" collapsible className="w-full">
              {frequentQuestions.map((question, index) => {
                return (
                  <AccordionItem key={index} className="md:py-16 py-8" value={question.value}>
                    <AccordionTrigger className="md:text-4xl text-xl px-8 text-left md:pl-20 md:pr-32">
                      {question.trigger}
                    </AccordionTrigger>
                    <AccordionContent className="md:text-xl text-sm md:py-7 py-3 px-8 md:pl-20 md:pr-32">{question.content}</AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
