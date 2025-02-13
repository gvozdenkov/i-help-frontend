type TIconColor = 'blue' | 'white' | 'orange' | '#9798C9';

export const getColor = (color: TIconColor) => {
  switch (color) {
    case 'blue':
      return '#2E3192';
    case 'white':
      return '#ffffff';
    case 'orange':
      return '#F37920';
    case '#9798C9':
      return '#9798C9';
    default:
      return '#212226';
  }
};

export interface IIconProps<T = '24'> {
  color: TIconColor;
  size?: T | '14' | '24' | '32' | '46' | '54' | '101' | '196';
  className?: string;
  onClick?:
    | (() => void)
    | ((e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void);
  height?: string;
}
