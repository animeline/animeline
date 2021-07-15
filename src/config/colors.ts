export const colors = {
  primary: '#F04747',

  'gray.300': '#C4C4C4',
  'gray.500': '#737373',

  black: '#000000',
  white: '#FFFFFF',
};

export function getColors() {
  return colors;
}

export type TColors = ReturnType<typeof getColors>;
