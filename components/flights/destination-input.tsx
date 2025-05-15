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
import { destinations, Destination } from "@/lib/constants/destinations";

interface DestinationInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export function DestinationInput({ value, onChange, placeholder }: DestinationInputProps) {
  const [open, setOpen] = React.useState(false);

  const selectedDestination = destinations.find(
    (destination) => destination.code === value
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full h-12 justify-between"
        >
          {value
            ? `${selectedDestination?.city} (${selectedDestination?.code})`
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder={`Search ${placeholder.toLowerCase()}...`} />
          <CommandList>
            <CommandEmpty>No destination found.</CommandEmpty>
            <CommandGroup>
              {destinations.map((destination) => (
                <CommandItem
                  key={destination.code}
                  value={destination.code}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === destination.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {destination.city} ({destination.code})
                  <span className="ml-2 text-sm text-muted-foreground">
                    {destination.airport}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
} 