'use client';

import React, { createContext, useContext, useState } from 'react';

interface ServiceModalContextProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ServiceModalContext = createContext<ServiceModalContextProps | undefined>(undefined);

export function ServiceModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ServiceModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ServiceModalContext.Provider>
  );
}

export function useServiceModal() {
  const context = useContext(ServiceModalContext);
  if (!context) {
    throw new Error('useServiceModal must be used within a ServiceModalProvider');
  }
  return context;
}
