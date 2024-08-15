'use client';
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface LayoutPrimaryProps {
  children: ReactNode;
  navbar?: ReactNode;
  footer?: ReactNode;
}

const LayoutPrimary: React.FC<LayoutPrimaryProps> = ({ children, navbar, footer }) => {
  return (
    <div className={cn('w-screen flex flex-col max-w-screen dark:bg-[#040D12]  overflow-x-hidden')}>
      {navbar && <div className="w-full">{navbar}</div>}
      <div className="w-full min-h-screen mx-auto overflow-x-hidden px-4 bg-white dark:bg-[#040D12]  flex flex-col lg:pt-24 max-w-[1440px]">{children}</div>
      {footer && <div className="w-full">{footer}</div>}
    </div>
  );
};

export default LayoutPrimary;
