import React from 'react';
import {useWindowDimensions} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {Button} from '../../../components/Button';

import {Container, Title, ImageContainer, Description} from './styles';

interface Slide {
  id: number;
  title: string;
  description: string;
  withButton?: boolean;
  image: (props: SvgProps) => JSX.Element;
}

interface ItemProps {
  item: Slide;
  onPress: () => void;
}

export function Item({
  item: {title, description, withButton = false, image: Image},
  onPress,
}: ItemProps) {
  const {width} = useWindowDimensions();

  return (
    <Container style={{width}}>
      <Title>{title}</Title>

      <ImageContainer>
        <Image width={240} height={200} />
      </ImageContainer>

      <Description>{description}</Description>

      {withButton && (
        <Button size="lg" style={{marginTop: 30}} onPress={onPress}>
          Continuar
        </Button>
      )}
    </Container>
  );
}
