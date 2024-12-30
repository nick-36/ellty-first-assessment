'use client'

import * as React from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

type CheckedState = boolean

interface CheckboxProps {
  checked?: CheckedState
  defaultChecked?: CheckedState
  required?: boolean
  onCheckedChange?(checked: CheckedState): void
  className?: string
}

const Checkbox = ({ className, ...props }: CheckboxProps) => (
  <div className="inline-flex items-center">
    <label className="flex items-center cursor-pointer relative">
      <input
        type="checkbox"
        checked={props.checked}
        className={cn(
          'peer h-[23px] w-[23px] cursor-pointer transition-all appearance-none rounded-md border border-[#CDCDCD] hover:border-[#BDBDBD] checked:bg-[#2469F6] checked:hover:bg-[#5087F8] checked:border-none focus:outline-none active:ring-4 active:ring-blue-50'
        )}
        id="check"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.onCheckedChange?.(e.target.checked)
        }}
      />
      <span
        className={cn(`
              text-[#E3E3E3]
              peer-checked:text-white
              peer-active:text-[#878787]
              absolute opacity-0 transition-opacity 
              peer-checked:opacity-100 
              peer-hover:opacity-100 
             peer-hover:text-[#E3E3E3]
              top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none
            `)}
      >
        <Check size={21} strokeWidth={2} absoluteStrokeWidth />
      </span>
    </label>
  </div>
)

export { Checkbox }
