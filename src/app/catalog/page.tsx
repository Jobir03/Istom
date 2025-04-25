"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ProductCard } from "@/components/common";
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const Catalog = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <div className="py-6 container min-h-[250px] md:min-h-[450px]">
      <div className="flex items-center justify-between md:mb-6 mb-3">
        <div className="flex items-start gap-3">
          <h2 className="text-[19px] md:text-[30px] font-bold  font-cygre">
            Адгезивы и Бондинги
          </h2>
          <span className="text-[#A7A7B2] text-[15px] font-aeonic font-semibold">
            20 товаров
          </span>
        </div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between bg-[#F6F6F6]"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "Select framework..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] bg-[#F6F6F6] p-0">
            <Command>
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === framework.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div className="">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full  gap-2 md:gap-4">
          {[1, 2]?.map((product: any, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
