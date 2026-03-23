'use client';

import React from 'react';
import Button from './Button';
import { useServiceModal } from '@/contexts/ServiceModalContext';

interface EnrollButtonProps {
  className?: string;
  variant?: "primary" | "white" | "outline" | "white-outline";
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
  service?: string;
  children: React.ReactNode;
}

export default function EnrollButton({ className, variant = "primary", size = "lg", style, service, children }: EnrollButtonProps) {
  const { openModal } = useServiceModal();

  return (
    <Button 
      variant={variant as any} 
      size={size} 
      className={className} 
      style={style}
      onClick={() => openModal(service)}
    >
      {children}
    </Button>
  );
}
