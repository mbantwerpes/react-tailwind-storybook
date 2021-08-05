import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import React from "react";

interface ModalCreateBuildingComponentProps {
  onClickCancel: React.MouseEventHandler;
  onClickSaveBuildingComponent: React.MouseEventHandler;
}

export const ModalCreateBuildingComponent = ({
  onClickCancel,
  onClickSaveBuildingComponent,
}: ModalCreateBuildingComponentProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl">Bauteil anlegen</h3>
      <form className="grid gap-4 w-11/12 ml-auto mr-auto">
        <Input size="small" type="text" placeholder="Name.." />
        <Textarea size="small" placeholder="Beschreibung..." />
        <Input size="small" type="text" placeholder="Artikelnummer..." />
        <Input size="small" type="number" placeholder="Anzahl..." />
        <Button
          onClick={onClickSaveBuildingComponent}
          type="submit"
          styleType="primary"
        >
          Speichern
        </Button>
        <Button onClick={onClickCancel} type="button" styleType="warning">
          Abbrechen
        </Button>
      </form>
    </div>
  );
};
