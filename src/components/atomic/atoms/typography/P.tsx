import { cn } from '@/lib/utils';
import React from 'react';
const P = ({ children, className }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => {
  return <p className={cn('text-sm text-black dark:text-white  font-normal', className)}>{children}</p>;
};

export default P;
