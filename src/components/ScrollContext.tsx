import React, { createContext, useState, ReactNode } from 'react';

// Définit le type pour le contexte
interface ScrollContextType {
  scrollToSection: string | null;
  setScrollToSection: (section: string | null) => void;
}

// Définit le contexte avec une valeur par défaut
export const ScrollContext = createContext<ScrollContextType>({
  scrollToSection: null,
  setScrollToSection: () => {},
});

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [scrollToSection, setScrollToSection] = useState<string | null>(null);

  return (
    <ScrollContext.Provider value={{ scrollToSection, setScrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};