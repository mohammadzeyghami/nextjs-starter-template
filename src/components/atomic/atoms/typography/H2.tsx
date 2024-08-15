import { cn } from '@/lib/utils';
import React from 'react';
const H2 = ({ children, className }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => {
  return <h2 className={cn('text-sm text-black dark:text-white  font-normal', className)}>{children}</h2>;
};

export default H2;
