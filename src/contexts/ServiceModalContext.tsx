'use client';

import React, { createContext, useContext, useState } from 'react';

interface ServiceModalContextProps {
  isOpen: boolean;
  selectedService: string;
  openModal: (service?: string) => void;
  closeModal: () => void;
}

const ServiceModalContext = createContext<ServiceModalContextProps | undefined>(undefined);

export function ServiceModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openModal = (service?: string) => {
    if (service) setSelectedService(service);
    setIsOpen(true);
  };
  
  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedService(''), 300); // Clear after animation
  };

  return (
    <ServiceModalContext.Provider value={{ isOpen, selectedService, openModal, closeModal }}>
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
