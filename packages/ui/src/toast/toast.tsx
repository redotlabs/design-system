import { cn } from '@redotlabs/utils';
import { CircleCheck, CircleX, TriangleAlert } from 'lucide-react';
import { Toaster as Sonner, ToasterProps as SonnerToasterProps } from 'sonner';
import { toast } from 'sonner';
import { createPortal } from 'react-dom';
import { useLayoutEffect, useState } from 'react';

interface ToasterProps extends SonnerToasterProps {
  container?: Element | DocumentFragment | null;
}

const Toaster = ({
  className,
  container: containerProp,
  ...props
}: ToasterProps) => {
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => setMounted(true), []);

  const container = containerProp || (mounted && globalThis?.document?.body);

  if (!container) return null;

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
    container
  );
};

export { Toaster, toast };
