import { BuildingComponentType } from "../../types/BuildingComponentType";

import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

interface TableProps {
  buildingComponents: BuildingComponentType[];
}

export const Table = ({ buildingComponents }: TableProps) => {
  const headerTitles = [
    "Name",
    "Beschreibung",
    "Artikelnummer",
    "Verfügbarkeit",
    "Aktionen",
  ];
  return (
    <table className="table-auto border-collapse border border-green-300 w-11/12 ml-auto mr-auto">
      <TableHeader headerTitles={headerTitles}></TableHeader>
      <tbody>
        {buildingComponents.map((buildingComponent, index) => {
          return (
            <TableRow
              key={index}
              tableRowContent={buildingComponent}
            ></TableRow>
          );
        })}
      </tbody>
    </table>
  );
};
