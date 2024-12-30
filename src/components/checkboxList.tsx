'use client'

import { Button } from '@/components/button'
import { Checkbox } from '@/components/checkbox'
import { useCallback, useEffect, useReducer, useState } from 'react'

interface CheckboxItem {
  id: number
  label: string
  checked: boolean
}
interface CheckboxListProps {
  listItems: CheckboxItem[]
  selectAllTitle: string
}

interface CheckboxState {
  items: CheckboxItem[]
  selectAll: boolean
}

type CheckboxAction =
  | { type: 'TOGGLE_ALL'; payload: boolean }
  | { type: 'TOGGLE_ITEM'; payload: number }

function checkboxReducer(
  state: CheckboxState,
  action: CheckboxAction
): CheckboxState {
  switch (action.type) {
    case 'TOGGLE_ALL':
      return {
        selectAll: action.payload,
        items: state.items.map((item) => ({
          ...item,
          checked: action.payload,
        })),
      }
    case 'TOGGLE_ITEM':
      const newItems = state.items.map((item) =>
        item.id === action.payload ? { ...item, checked: !item.checked } : item
      )
      return {
        items: newItems,
        selectAll: newItems.every((item) => item.checked),
      }
    default:
      return state
  }
}

const CheckboxList = ({
  listItems,
  selectAllTitle = 'Select All',
}: CheckboxListProps) => {
  const [state, dispatch] = useReducer(checkboxReducer, {
    items: listItems,
    selectAll: false,
  })
  const handleSelectAll = useCallback(() => {
    dispatch({ type: 'TOGGLE_ALL', payload: !state.selectAll })
  }, [state.selectAll])

  const handleItemChange = useCallback((id: number) => {
    dispatch({ type: 'TOGGLE_ITEM', payload: id })
  }, [])

  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <div className="max-w-[370px] w-full shadow-md flex flex-col rounded-md bg-primary-foreground text-primary border border-[#EEEEEE] py-[10px] px-5">
        <label className="flex items-center justify-between py-2">
          <span className="font-normal text-sm leading-[18.2px] text-[#1F2128]">
            {selectAllTitle}
          </span>
          <Checkbox
            checked={state.selectAll}
            onCheckedChange={handleSelectAll}
          />
        </label>
        <div className="max-w-[340px] w-full border-b-[0.7px] border-[#CDCDCD] my-[10px]" />
        {state.items.map((item) => (
          <label
            key={item.id}
            className="flex items-center justify-between py-2"
          >
            <span className="font-normal text-[#1F2128] text-sm leading-[18.2px]">
              {item.label}
            </span>
            <Checkbox
              checked={item.checked}
              onCheckedChange={() => handleItemChange(item.id)}
            />
          </label>
        ))}
        <div className="max-w-[340px] w-full border-b-[0.7px] border-[#CDCDCD] my-[10px]" />
        <div className="w-full py-[10px]">
          <Button className="w-full rounded-[4px]">
            <p className="font-normal text-[#1F2128]">Done</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CheckboxList
