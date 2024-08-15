import { cn } from '@/lib/utils';
import React from 'react';
const H4 = ({ children, className }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => {
  return <h4 className={cn('text-sm text-black dark:text-white  font-normal', className)}>{children}</h4>;
};

export default H4;
