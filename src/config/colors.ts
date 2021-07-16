export const colors = {
  primary: '#F04747',
  'gray.300': '#C4C4C4',
  'gray.500': '#737373',
  'gold.300': '#fAA81A',
  'red-light.300': '#ED4245',
  'green-dark.500': '#3BA55D',
  black: '#000000',
  white: '#FFFFFF',
};

export function getColors() {
  return colors;
}

export type TColors = ReturnType<typeof getColors>;
