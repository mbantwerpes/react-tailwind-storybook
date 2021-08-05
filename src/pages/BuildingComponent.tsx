import { useState } from "react";
import { BuildingComponentType } from "../types/BuildingComponentType";

import { Navbar } from "./../components/Navbar/Navbar";
import { Table } from "./../components/Table/Table";
import { Button } from "./../components/Button/Button";
import { ModalWrapper } from "./../components/Modal/ModalWrapper";
import { ModalCreateBuildingComponent } from "./../components/Modal/ModalCreateBuildingComponent";

export const BuildingComponent = () => {
  // BuildingComponent state handling
  const mockupStartValue: BuildingComponentType[] = [
    {
      name: "Widerstand",
      description: "Leistet Widerstand",
      articleNumber: "123456",
      amount: 10,
    },
    {
      name: "Spule",
      description: "Spult ab",
      articleNumber: "23054",
      amount: 35,
    },
    {
      name: "Mikrocontroller",
      description: "Macht Sachen",
      articleNumber: "54875",
      amount: 2,
    },
  ];

  const [buildingComponents, setbuildingComponents] = useState<
    BuildingComponentType[]
  >(mockupStartValue);

  const addBuildingComponent = () => {
    console.log("test");
  };

  // Modal state handling
  const [isOpen, setisOpen] = useState(false);

  const toggleModal = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <ModalWrapper
        onClickModalClose={toggleModal}
        isOpen={isOpen}
        title="MyExampleModal"
      >
        <ModalCreateBuildingComponent
          onClickCancel={toggleModal}
          onClickSaveBuildingComponent={addBuildingComponent}
        />
      </ModalWrapper>
      <Navbar />
      <div className="mt-20 h-4/5">
        <Button onClick={toggleModal} styleType="primary">
          Neues Bauteil
        </Button>
        <div className="grid h-full overflow-auto">
          <Table buildingComponents={buildingComponents} />
        </div>
      </div>
    </>
  );
};
