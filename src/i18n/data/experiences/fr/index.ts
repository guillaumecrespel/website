import type { ExperienceCollection } from '../types';
import { experience as cgi } from './20100501_20120401_CGI';
import { experience as ministereSante } from './20150701_20160301_MinistereSante';
import { experience as cmc } from './20160301_20160601_CMC';
import { experience as santeclair } from './20161001_20180101_SANTECLAIR';
// Import all experiences
import { experience as uniRakun } from './20180201_20241201_UniRakun';
import { experience as metroscopeConsultant } from './20180301_20180601_MetroscopeConsultant';
import { experience as metroscopeFrontend } from './20180701_20190301_Metroscope';
import { experience as darvaFormateur } from './20181001_20181001_DARVAFormateur';
import { experience as darva } from './20190301_20220101_DARVA';
import { experience as societeGenerale } from './20220201_20240301_SocieteGenerale';
import { experience as decathlon } from './20240401_20250601_Decathlon';
import { experience as cockpitAgriculture } from './20250101_20250701_CockpitAgriculture';
import { experience as kojimo } from './20250801_Kojimo';
import { experience as acolad } from './20260601_Acolad';

// Export all experiences in chronological order (newest first)
export const experiences: ExperienceCollection = [
  acolad,
  kojimo,
  cockpitAgriculture,
  decathlon,
  societeGenerale,
  darva,
  metroscopeFrontend,
  metroscopeConsultant,
  darvaFormateur,
  santeclair,
  cmc,
  ministereSante,
  cgi,
  uniRakun, // This is ongoing, so it's included but not in chronological order
];

// Export individual experiences for specific use cases
export {
  acolad,
  cgi,
  cmc,
  cockpitAgriculture,
  darva,
  darvaFormateur,
  decathlon,
  kojimo,
  metroscopeConsultant,
  metroscopeFrontend,
  ministereSante,
  santeclair,
  societeGenerale,
  uniRakun,
};
