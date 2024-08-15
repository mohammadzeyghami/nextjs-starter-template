'use client';
import React, { createContext, useContext, ReactNode } from 'react';
import { useParams } from 'next/navigation';

interface DirectionContextProps {
  dir: 'ltr' | 'rtl';
}

const DirectionContext = createContext<DirectionContextProps>({ dir: 'ltr' });

export const DirectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { locale } = useParams();
  const dir = locale === 'fa' ? 'rtl' : 'ltr';

  return (
    <DirectionContext.Provider value={{ dir }}>
      <div dir={dir}>{children}</div>
    </DirectionContext.Provider>
  );
};

export const useDirection = () => useContext(DirectionContext);
