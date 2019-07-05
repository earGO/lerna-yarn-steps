import {projectCard} from '@ursip-box-front/services';

const name = projectCard.name;

export const namespace = '@ursip-' + name;

export const PRESELECT_TAB = `${namespace}/PRESELECT_TAB`;

export const SELECT_TAB = `${namespace}/SELECT_TAB`;

export const PRESELECT_SECTION = `${namespace}/PRESELECT_SECTION`;

export const SELECT_SECTION = `${namespace}/SELECT_SECTION`;
