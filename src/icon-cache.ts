import {FC, SVGProps} from 'react';
import LogoLotemIcon from './assets/icons/logo-lotem.svg?react';

/**
 * Type for icon names to ensure type-safety
 */
export type IconName = 'logo-lotem';

/**
 * Icon cache mapping icon names to their React components
 */
export const iconCache: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  'logo-lotem': LogoLotemIcon,
};

/**
 * Utility function to get icon by name
 * @param name Icon name to retrieve
 * @returns React component for the SVG icon
 */
export const getIconByName = (name: IconName): FC<SVGProps<SVGSVGElement>> => {
  return iconCache[name];
};
