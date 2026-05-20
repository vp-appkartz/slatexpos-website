import React, { createContext, useContext, useState } from "react";
import DemoModal from "../components/Common/DemoModal";

interface DemoModalContextType {
  openDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType>({
  openDemoModal: () => {},
});

export const useDemoModal = () => useContext(DemoModalContext);

export const DemoModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DemoModalContext.Provider value={{ openDemoModal: () => setIsOpen(true) }}>
      {children}
      <DemoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </DemoModalContext.Provider>
  );
};
