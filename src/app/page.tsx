import CheckboxList from "@/components/checkboxList";

export default function Home() {
  const listItems = [
    { id: 1, label: "Page 1", checked: false },
    { id: 2, label: "Page 2", checked: false },
    { id: 3, label: "Page 3", checked: false },
    { id: 4, label: "Page 4", checked: false },
  ];
  return <CheckboxList listItems={listItems} selectAllTitle={"All Pages"} />;
}
