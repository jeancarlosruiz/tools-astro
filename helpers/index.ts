export type ConvertionFunc = (value: number, root: number) => number;

export const uniqueID = (): string => {
  const id = crypto.randomUUID();

  return id;
};

const convertPxToRem: ConvertionFunc = (px: number, root: number) => {
  const value = px / root;

  if (isNaN(value) || value === Infinity) return 0;

  return value;
};

const convertRemToPx: ConvertionFunc = (rem: number, root: number) => {
  const value = rem * root;

  if (isNaN(value) || value === Infinity) return 0;

  return value;
};

const convertPxToEm: ConvertionFunc = (px: number, root: number) => {
  const value = px / root;

  if (isNaN(value) || value === Infinity) return 0;

  return value;
};

const convertEmToPx: ConvertionFunc = (em: number, root: number) => {
  const value = em * root;

  if (isNaN(value) || value === Infinity) return 0;

  return value;
};

const convertPxToPerc: ConvertionFunc = (px: number, root: number) => {
  const value = (px / root) * 100;

  if (isNaN(value) || value === Infinity) return 0;

  return value;
};

const convertPercToPx: ConvertionFunc = (perc: number, root: number) => {
  const value = (perc / 100) * root;

  if (isNaN(value) || value === Infinity) return 0;

  return value;
};
const convertRemToEm: ConvertionFunc = (rem: number, root: number) => {
  const value = rem;

  if (isNaN(value) || value === Infinity) return 0;

  return value;
};
const convertEmToRem: ConvertionFunc = (em: number, root: number) => {
  const value = em;

  if (isNaN(value) || value === Infinity) return 0;

  return value;
};

const convertRemToPerc: ConvertionFunc = (rem: number, root: number) => {
  const value = ((rem * root) / root) * 100;

  if (isNaN(value) || value === Infinity) return 0;

  return value;
};
const convertPercToRem: ConvertionFunc = (perc: number, root: number) => {
  const value = (perc / 100) * 1;

  if (isNaN(value) || value === Infinity) return 0;

  return value;
};

const convertEmToPerc: ConvertionFunc = (em: number, root: number) => {
  const value = ((em * root) / root) * 100;
  if (isNaN(value) || value === Infinity) return 0;

  return value;
};

const convertPercToEm: ConvertionFunc = (perc: number, root: number) => {
  const value = (perc / 100) * 1;
  if (isNaN(value) || value === Infinity) return 0;

  return value;
};
const convertPercToPerc: ConvertionFunc = (perc: number, root: number) => {
  const value = perc;
  if (isNaN(value) || value === Infinity) return 0;

  return value;
};

const convertPxToPx: ConvertionFunc = (px: number, root: number) => {
  const value = px;

  if (isNaN(value) || value === Infinity) return 0;

  return value;
};
const convertRemToRem: ConvertionFunc = (rem: number, root: number) => {
  const value = rem;

  if (isNaN(value) || value === Infinity) return 0;

  return value;
};
const convertEmToEm: ConvertionFunc = (em: number, root: number) => {
  const value = em;

  if (isNaN(value) || value === Infinity) return 0;

  return value;
};

export const convertionFunctions: { [key: string]: ConvertionFunc } = {
  "px:rem": convertPxToRem,
  "rem:px": convertRemToPx,
  "px:em": convertPxToEm,
  "em:px": convertEmToPx,
  "px:%": convertPxToPerc,
  "%:px": convertPercToPx,
  "rem:em": convertRemToEm,
  "em:rem": convertEmToRem,
  "rem:%": convertRemToPerc,
  "%:rem": convertPercToRem,
  "em:%": convertEmToPerc,
  "%:em": convertPercToEm,
  "%:%": convertPercToPerc,
  "px:px": convertPxToPx,
  "rem:rem": convertRemToRem,
  "em:em": convertEmToEm,
};
