import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatExcelDate(value: any) {
  if (!value) return 'NA';
  const d = new Date(value);
  return isNaN(+d)
    ? 'NA'
    : `${d.getDate().toString().padStart(2,'0')}-${(d.getMonth()+1)
        .toString()
        .padStart(2,'0')}-${d.getFullYear()}`;
}

export function cleanItemsData(items: any[]) {
  return items
    .map(i => ({
      ItemNo: Number(i['Item No'] || i.ItemNo),
      ItemName: i['Item Name'] || i.ItemName,
      Pieces: i.Pieces,
      Weight: i.Weight,
      MRP: i.MRP,
      USP: i.USP,
      MfgDate: i['Mfg Date'],
      UseBy: i['Use By'],
    }))
    .filter(i => !isNaN(i.ItemNo))
    .sort((a, b) => a.ItemNo - b.ItemNo);
}
