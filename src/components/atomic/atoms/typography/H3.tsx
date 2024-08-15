import { cn } from '@/lib/utils';
import React from 'react';
const H3 = ({ children, className }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => {
  return <h3 className={cn('text-sm text-black dark:text-white  font-normal', className)}>{children}</h3>;
};

export default H3;
