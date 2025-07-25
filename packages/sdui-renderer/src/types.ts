import type { HTMLElementType } from 'react';

export interface ContentBlock {
  id: string;
  component: HTMLElementType;
  props?: {
    className?: string;
    [key: string]: unknown;
  };
  children?: string | ContentBlock[];
}

export interface PageSchema {
  href: string;
  title: string;
  description: string;
  contents: ContentBlock[];
}
