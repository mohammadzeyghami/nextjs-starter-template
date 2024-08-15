import { cn } from '@/lib/utils';
import React from 'react';
const H6 = ({ children, className }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => {
  return <h6 className={cn('text-sm text-black dark:text-white  font-normal', className)}>{children}</h6>;
};

export default H6;
