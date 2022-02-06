import React from 'react';
import styled from 'styled-components';
/* ------------------ Types ------------------ */
import { AltIconProps, IconProps } from '../images/types';
/* ------------------ Simple Icons ------------------ */
import D3 from '../images/icons/simple/d3';
import Dev from '../images/icons/simple/dev';
import Discord from '../images/icons/simple/discord';
import Gmail from '../images/icons/simple/gmail';
import TypeScript from '../images/icons/simple/typescript';
import Redux from '../images/icons/simple/redux';
import JavaScript from '../images/icons/simple/javascript';
import CSS from '../images/icons/simple/css';
import Gatsby from '../images/icons/simple/gatsby';
import Java from '../images/icons/simple/java';
/* ------------------ Alt Icons ------------------ */
import NodeJS from '../images/icons/alt/nodejs';
import ReactIcon from '../images/icons/alt/react';
import Github from '../images/icons/alt/github';

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export type AltIconType = 'github' | 'nodejs' | 'react';

export type SimpleIconType = 'css' | 'd3' | 'dev' | 'discord' | 'gatsby' | 'gmail' | 'java' | 'javascript' | 'typescript' | 'redux';

export type IconType = AltIconType | SimpleIconType;

export interface Icon {
  type: IconType;
  color?: string;
}

export interface SimpleIcon extends Icon {
  type: SimpleIconType,
}

export interface AltIcon extends Icon{
  type: AltIconType;
  useAlt?: boolean;
}

export interface IconListProps {
  icons: (AltIcon | SimpleIcon)[]
}

const SIMPLE_ICON_MAP: Record<SimpleIconType, (props:IconProps) => JSX.Element> = {
  'css': CSS,
  'd3' : D3,
  'dev': Dev,
  'discord': Discord,
  'gatsby': Gatsby,
  'gmail': Gmail,
  'java': Java,
  'javascript' : JavaScript,
  'typescript': TypeScript,
  'redux': Redux
}

const ALT_ICON_MAP: Record<AltIconType, (props:AltIconProps) => JSX.Element> = {
  'github': Github,
  'nodejs': NodeJS,
  'react': ReactIcon,
}

const IconList = (props: IconListProps) => {
  const { icons } = props;
  return (
    <Container>
      {icons.map(icon => {
        let IconComponent = SIMPLE_ICON_MAP[icon.type];
        if( Object.keys(ALT_ICON_MAP).includes(icon.type) ) {
          IconComponent = ALT_ICON_MAP[icon.type]
        }
        return (
          <IconComponent key={icon.type} {...icon} type='dev' />
        )
      })}
    </Container>
  )
}

export default IconList;