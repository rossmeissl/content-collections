"use client";

import * as RadioGroup from "@radix-ui/react-radio-group";

type Sample = {
  name: string;
  description: string;
};

type Props = {
  samples: Array<Sample>;
  value: string;
  onValueChange: (value: string) => void;
};

export function SampleChooser({ value, onValueChange, samples }: Props) {
  return (
    <RadioGroup.Root
      className="flex gap-2 w-full md:w-fit md:flex-col justify-center flex-wrap items-center"
      value={value}
      onValueChange={onValueChange}
    >
      {samples.map((sample, idx) => (
        <RadioGroup.Item
          key={idx}
          value={String(idx)}
          title={sample.description}
          className="px-4 md:w-full py-2 hover:border-orange-300 shadow-md inline-flex gap-2 items-center text-xl rounded-md border-2 border-slate-300 aria-checked:border-primary"
        >
          <div className="size-4 rounded-full bg-slate-200 shadow-inner flex items-center justify-center">
            <RadioGroup.Indicator className="rounded-full size-3 bg-primary block" />
          </div>
          <span className="font-bold text-nowrap">{sample.name}</span>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
