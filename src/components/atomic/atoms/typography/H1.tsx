import { cn } from '@/lib/utils';
import React from 'react';
const H1 = ({ children, className }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => {
  return <h1 className={cn('text-sm text-black dark:text-white font-normal', className)}>{children}</h1>;
};

export default H1;
