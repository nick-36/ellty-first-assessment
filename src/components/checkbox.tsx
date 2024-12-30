"use client";

import * as React from "react";
import { Check } from "lucide-react";

type CheckedState = boolean;

interface CheckboxProps {
  checked?: CheckedState;
  defaultChecked?: CheckedState;
  required?: boolean;
  onCheckedChange?(checked: CheckedState): void;
  className?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <>
      <div className="inline-flex items-center">
        <label className="flex items-center cursor-pointer relative group">
          <input
            ref={ref}
            type="checkbox"
            checked={props.checked}
            className="peer h-[23px] w-[23px] cursor-pointer transition-all appearance-none rounded-md 
    border border-[#CDCDCD] 
    checked:bg-[#2469F6] 
    checked:border-none 
    group-hover:border-[#BDBDBD]
    checked:hover:bg-[#5087F8]"
            id="check"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.onCheckedChange?.(e.target.checked);
            }}
          />
          <span
            className="absolute text-[#E3E3E3] opacity-0 transition-opacity 
    peer-checked:opacity-100 
    peer-checked:text-white
    peer-hover:opacity-100 
    top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none active:text-red-500"
          >
            <Check size={21} strokeWidth={1} absoluteStrokeWidth />
          </span>
        </label>
      </div>
    </>
  )
);

export { Checkbox };
