interface ModalWrapperProps {
  isOpen: boolean;
  title: string;
  children?: React.ReactNode;
  onClickModalClose?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ModalWrapper = ({
  isOpen,
  title,
  children,
  onClickModalClose,
}: ModalWrapperProps) => {
  return (
    <div className={`${isOpen ? "block" : "hidden"}`}>
      <div className="fixed inset-0 bg-gray-500 opacity-80"></div>
      <div className="fixed bg-white h-4/5 w-10/12 ml-auto mr-auto left-0 right-0 rounded overflow-scroll">
        <div className="flex flex-col gap-5 h-full">
          <div className="flex justify-between">
            <h3 className="self-center ml-4">{title}</h3>
            <button
              onClick={onClickModalClose}
              className="text-3xl mr-4 cursor-pointer"
            >
              x
            </button>
          </div>
          <div>{children}</div>
          {/* <div>
            <Button styleType="primary" onClick={handleModalClose}>
              Save
            </Button>
            <Button styleType="warning" onClick={handleModalClose}>
              Cancel
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
