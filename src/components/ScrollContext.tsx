import React, { createContext, useState, ReactNode } from 'react';

interface ScrollContextType {
  targetSection: string | null;
  setTargetSection: (section: string | null) => void;
}

export const ScrollContext = createContext<ScrollContextType>({
  targetSection: null,
  setTargetSection: () => {},
});

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [targetSection, setTargetSection] = useState<string | null>(null);

  return (
    <ScrollContext.Provider value={{ targetSection, setTargetSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
