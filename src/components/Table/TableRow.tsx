import { BuildingComponentType } from "../../types/BuildingComponentType";

import { Button } from "../Button/Button";

interface TableRowProps {
  tableRowContent: BuildingComponentType;
}

export const TableRow = ({ tableRowContent }: TableRowProps) => {
  return (
    <tr>
      {Object.entries(tableRowContent).map(([key, value]) => {
        return (
          <td key={key} className="border border-green-300">
            {value}
          </td>
        );
      })}
      <td className="border border-green-300">
        <div className="flex justify-around">
          <Button styleType="primary">Bearbeiten</Button>
          <Button styleType="warning">Löschen</Button>
        </div>
      </td>
    </tr>
  );
};
