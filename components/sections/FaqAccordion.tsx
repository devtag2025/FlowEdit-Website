"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PortableText } from "@portabletext/react";

interface FaqItem {
  _id: string;
  question: string;
  answer: any; // Portable text array
}

interface FaqAccordionProps {
  faqs?: FaqItem[];
}

export default function FaqAccordion({ faqs = [] }: FaqAccordionProps) {
  // Use FAQs from Sanity if available, otherwise use fallback
  const items =
    faqs.length > 0
      ? faqs.map((faq) => ({
          id: faq._id,
          title: faq.question,
          content: faq.answer,
        }))
      : [];

  return (
    <div className="w-full max-w-xl sm:max-w-2xl space-y-4 sm:px-0">
      <Accordion type="single" collapsible className="space-y-4">
        {items.map(({ id, title, content }, index) => (
          <AccordionItem
            key={id || index}
            value={`item-${index}`}
            className="
              group 
              border-none 
              rounded-xl 
              px-4 sm:px-6 py-4 
              backdrop-blur-[20px] 
              shadow-[0_10px_10px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.05)] 
              bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))]
            "
          >
            <AccordionTrigger
              className="
                text-left 
                text-sm sm:text-base 
                font-medium 
                pr-2 
                flex items-center justify-between 
                hover:no-underline 
                [&>svg]:hidden
              "
            >
              {title}

              {/* Custom + / – icon */}
              <div>
                <span
                  className="
                  ml-4 flex h-7 w-7 items-center justify-center 
                  rounded-full border border-white/40 
                   backdrop-blur-sm 
                  transition-all bg-white/30
                "
                >
                  <span className="block group-data-[state=open]:hidden text-xl leading-none">
                    +
                  </span>
                  <span className="hidden group-data-[state=open]:block text-xl leading-none">
                    –
                  </span>
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent
              className="
                text-sm sm:text-base 
                text-[rgba(0,0,0,0.7)] 
                leading-[150%] 
                pt-2 pb-4 text-left
              "
            >
              {Array.isArray(content) ? (
                <PortableText value={content} />
              ) : (
                content
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
