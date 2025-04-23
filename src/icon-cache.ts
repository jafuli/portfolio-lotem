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
import CaptainCreditHero from './assets/pages/captain-credit/captain-credit-hero.svg?react';
import CaptainCreditFigure1 from './assets/pages/captain-credit/captain-credit-figure1.svg?react';
import CaptainCreditFigure2 from './assets/pages/captain-credit/captain-credit-figure2.svg?react';
import CaptainCreditFigure3 from './assets/pages/captain-credit/captain-credit-figure3.svg?react';
import CaptainCreditFigure4 from './assets/pages/captain-credit/captain-credit-figure4.svg?react';
import PunctHero from './assets/pages/punct/punct-hero.svg?react';
import PunctFigure1 from './assets/pages/punct/punct-figure1.svg?react';
import PunctFigure2 from './assets/pages/punct/punct-figure2.svg?react';
import PunctFigure3 from './assets/pages/punct/punct-figure3.svg?react';
import PunctFigure4 from './assets/pages/punct/punct-figure4.svg?react';
import ObliHero from './assets/pages/obli/obli-hero.svg?react';
import ObliFigure1 from './assets/pages/obli/obli-figure1.svg?react';
import ObliFigure2 from './assets/pages/obli/obli-figure2.svg?react';
import ObliFigure3 from './assets/pages/obli/obli-figure3.svg?react';
import ObliFigure4 from './assets/pages/obli/obli-figure4.svg?react';

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
  | 'captain-credit-hero'
  | 'captain-credit-figure1'
  | 'captain-credit-figure2'
  | 'captain-credit-figure3'
  | 'captain-credit-figure4'
  | 'punct-hero'
  | 'punct-figure1'
  | 'punct-figure2'
  | 'punct-figure3'
  | 'punct-figure4'
  | 'obli-hero'
  | 'obli-figure1'
  | 'obli-figure2'
  | 'obli-figure3'
  | 'obli-figure4'

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
  'captain-credit-hero': CaptainCreditHero,
  'captain-credit-figure1': CaptainCreditFigure1,
  'captain-credit-figure2': CaptainCreditFigure2,
  'captain-credit-figure3': CaptainCreditFigure3,
  'captain-credit-figure4': CaptainCreditFigure4,
  'punct-hero': PunctHero,
  'punct-figure1': PunctFigure1,
  'punct-figure2': PunctFigure2,
  'punct-figure3': PunctFigure3,
  'punct-figure4': PunctFigure4,
  'obli-hero': ObliHero,
  'obli-figure1': ObliFigure1,
  'obli-figure2': ObliFigure2,
  'obli-figure3': ObliFigure3,
  'obli-figure4': ObliFigure4,
};

/**
 * Utility function to get icon by name
 * @param name Icon name to retrieve
 * @returns React component for the SVG icon
 */
export const getIconByName = (name: IconName): FC<SVGProps<SVGSVGElement>> => {
  return iconCache[name];
};
