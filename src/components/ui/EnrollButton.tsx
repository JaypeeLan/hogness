'use client';

import React from 'react';
import Button from './Button';
import { useServiceModal } from '@/contexts/ServiceModalContext';

interface EnrollButtonProps {
  className?: string;
  variant?: "primary" | "white" | "outline";
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function EnrollButton({ className, variant = "primary", size = "lg", style, children }: EnrollButtonProps) {
  const { openModal } = useServiceModal();

  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className} 
      style={style}
      onClick={openModal}
    >
      {children}
    </Button>
  );
}
