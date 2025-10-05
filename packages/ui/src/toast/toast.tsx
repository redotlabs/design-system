import { cn } from '@redotlabs/utils';
import { CircleCheck, CircleX, TriangleAlert } from 'lucide-react';
import { Toaster as Sonner, ToasterProps } from 'sonner';
import { toast } from 'sonner';
import { createPortal } from 'react-dom';

const Toaster = ({ className, ...props }: ToasterProps) => {
  return createPortal(
    <Sonner
      className={cn('toaster group flex items-center gap-2!', className)}
      position="bottom-right"
      toastOptions={{
        classNames: {
          success: 'bg-green-100! text-green-800!',
          warning: 'bg-yellow-100! text-yellow-800!',
          error: 'bg-red-100! text-red-800!',
        },
      }}
      icons={{
        success: <CircleCheck className="size-5 text-green-500" />,
        warning: <TriangleAlert className="size-5 text-yellow-500" />,
        error: <CircleX className="size-5 text-red-500" />,
      }}
      {...props}
    />,
    document.body
  );
};

export { Toaster, toast };
