"use client";

import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import { useEffect, useState } from "react";

interface CheckboxItem {
  id: number;
  label: string;
  checked: boolean;
}
const CheckboxList = ({
  listItems,
  selectAllTitle = "Select All",
}: {
  listItems: CheckboxItem[];
  selectAllTitle?: string;
}) => {
  const [items, setItems] = useState<CheckboxItem[]>(listItems);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const allChecked = items.every((item) => item.checked);
    setSelectAll(allChecked);
  }, [items]);

  const handleSelectAll = () => {
    const newCheckedState = !selectAll;
    setSelectAll(newCheckedState);
    setItems(items.map((item) => ({ ...item, checked: newCheckedState })));
  };

  const handleItemChange = (id: number) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newItems);
  };

  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <div className="max-w-[370px] w-full shadow-md flex flex-col rounded-md bg-primary-foreground text-primary border border-[#EEEEEE] py-[10px] px-5">
        <label className="flex items-center justify-between py-2">
          <span className="font-normal text-sm leading-[18.2px] text-[#1F2128]">
           {selectAllTitle}
          </span>
          <Checkbox checked={selectAll} onCheckedChange={handleSelectAll} />
        </label>
        <div className="max-w-[340px] w-full border-b-[0.7px] border-[#CDCDCD] my-[10px]" />
        {items.map((item) => (
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
        <div className="w-full">
          <Button className="w-full rounded-[4px]">
            <p className="font-normal text-[#1F2128]">Done</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckboxList;
