import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Sit quisque arcu hendrerit et nam. Vitae enim viverra quis aliqua",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title:
      "Egestas sollicitudin amet vivamus duis ornare. Magnis feugiat diam.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ac.",
  },
  {
    title:
      "In mauris nibh pellentesque tincidunt. Leo sed amet vel eu porttitor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet elit.",
  },
  {
    title: "Justo ac nibh etiam tincidunt massa tempus. Turpis purus nullam",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis morbi.",
  },
  {
    title: "Et volutpat in at magna in gravida ultricies proin suspendiss",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function FaqAccordion() {
  return (
    <div className="w-full max-w-2xl space-y-3">
      <Accordion type="single" collapsible className="space-y-6">
        {items.map(({ title, content }, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="group border-none rounded-xl backdrop-blur-[20px] shadow-[0_10px_10px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.05),0_1px_0_rgba(0,0,0,0.05)] bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))] px-6 py-3"
          >
            <AccordionTrigger className="text-left font-medium hover:no-underline pr-2 flex items-center justify-between [&>svg]:hidden">
              {title}

              {/* Custom + / – icon */}
              <span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-white/30 backdrop-blur-sm transition-all">
                {/* PLUS when closed */}
                <span className="block group-data-[state=open]:hidden text-xl leading-none">
                  +
                </span>

                {/* MINUS when open */}
                <span className="hidden group-data-[state=open]:block text-xl leading-none">
                  –
                </span>
              </span>
            </AccordionTrigger>

            <AccordionContent className="text-sm text-muted-foreground pb-4">
              {content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
