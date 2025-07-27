import type { HTMLElementType } from 'react';
import { COMPONENT_MAP } from './const';

export type ComponentType = keyof typeof COMPONENT_MAP | HTMLElementType;
export interface ContentBlock {
  id: string;
  component: ComponentType;
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
