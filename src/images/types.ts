type IconType = 'social' | 'dev'

export interface IconProps {
  color?: string;
  type: IconType
}

export interface AltIconProps extends IconProps {
  useAlt?: boolean
}