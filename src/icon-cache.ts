import {FC, SVGProps} from 'react';
import LogoLotemIcon from './assets/icons/logo-lotem.svg?react';
import LogoLotemDarkIcon from './assets/icons/logo-lotem-dark.svg?react';
import BulletIcon from './assets/icons/bullet.svg?react';
import CaptainCreditBanner from './assets/banners/captain-credit-banner.svg?react';
import ObliBanner from './assets/banners/obli-banner.svg?react';
import PunctBanner from './assets/banners/punct-banner.svg?react';
import SuperwiseBanner from './assets/banners/superwise-banner.svg?react';
import SuperwiseHero from './assets/pages/superwise/superwise-hero.svg?react';
import SuperwiseFigure1 from './assets/pages/superwise/superwise-figure1.svg?react';
import SuperwiseFigure2 from './assets/pages/superwise/superwise-figure2.svg?react';
import SuperwiseFigure3 from './assets/pages/superwise/superwise-figure3.svg?react';
import SuperwiseFigure4 from './assets/pages/superwise/superwise-figure4.svg?react';

/**
 * Type for icon names to ensure type-safety
 */
export type IconName =
  'logo-lotem'
  | 'logo-lotem-dark'
  | 'bullet'
  | 'captain-credit-banner'
  | 'obli-banner'
  | 'punct-banner'
  | 'superwise-banner'
  | 'superwise-hero'
  | 'superwise-figure1'
  | 'superwise-figure2'
  | 'superwise-figure3'
  | 'superwise-figure4'

/**
 * Icon cache mapping icon names to their React components
 */
export const iconCache: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  'logo-lotem': LogoLotemIcon,
  'logo-lotem-dark': LogoLotemDarkIcon,
  'bullet': BulletIcon,
  'captain-credit-banner': CaptainCreditBanner,
  'obli-banner': ObliBanner,
  'punct-banner': PunctBanner,
  'superwise-banner': SuperwiseBanner,
  'superwise-hero': SuperwiseHero,
  'superwise-figure1': SuperwiseFigure1,
  'superwise-figure2': SuperwiseFigure2,
  'superwise-figure3': SuperwiseFigure3,
  'superwise-figure4': SuperwiseFigure4,
};

/**
 * Utility function to get icon by name
 * @param name Icon name to retrieve
 * @returns React component for the SVG icon
 */
export const getIconByName = (name: IconName): FC<SVGProps<SVGSVGElement>> => {
  return iconCache[name];
};
