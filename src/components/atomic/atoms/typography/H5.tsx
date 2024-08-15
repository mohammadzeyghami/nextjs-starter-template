import { cn } from '@/lib/utils';
import React from 'react';
const H5 = ({ children, className }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => {
  return <h5 className={cn(' text-black dark:text-white  font-normal', className)}>{children}</h5>;
};

export default H5;
