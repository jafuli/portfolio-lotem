import {FC, SVGProps} from 'react';
import LogoLotemIcon from './assets/icons/logo-lotem.svg?react';
import LogoLotemDarkIcon from './assets/icons/logo-lotem-dark.svg?react';
import CaptainCreditBanner from './assets/banners/captain-credit-banner.svg?react';
import ObliBanner from './assets/banners/obli-banner.svg?react';
import PunctBanner from './assets/banners/punct-banner.svg?react';
import SuperwiseBanner from './assets/banners/superwise-banner.svg?react';

/**
 * Type for icon names to ensure type-safety
 */
export type IconName =
  'logo-lotem'
  | 'logo-lotem-dark'
  | 'captain-credit-banner'
  | 'obli-banner'
  | 'punct-banner'
  | 'superwise-banner';

/**
 * Icon cache mapping icon names to their React components
 */
export const iconCache: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  'logo-lotem': LogoLotemIcon,
  'logo-lotem-dark': LogoLotemDarkIcon,
  'captain-credit-banner': CaptainCreditBanner,
  'obli-banner': ObliBanner,
  'punct-banner': PunctBanner,
  'superwise-banner': SuperwiseBanner,
};

/**
 * Utility function to get icon by name
 * @param name Icon name to retrieve
 * @returns React component for the SVG icon
 */
export const getIconByName = (name: IconName): FC<SVGProps<SVGSVGElement>> => {
  return iconCache[name];
};
