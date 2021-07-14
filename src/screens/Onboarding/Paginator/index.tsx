import React from 'react';
import {Animated, useWindowDimensions} from 'react-native';

import {Container, Dot} from './styles';

interface Slide {
  id: number;
}

interface PaginatorProps {
  data: Slide[];
  scrollX: Animated.Value;
}

export function Paginator({data, scrollX}: PaginatorProps) {
  const {width} = useWindowDimensions();

  return (
    <Container>
      {data.map((slide, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        // const dotWidth = scrollX.interpolate({
        //   inputRange,
        //   outputRange: [10, 20, 10],
        //   extrapolate: 'clamp',
        // });

        const dotOpacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Dot
            key={slide.id.toString()}
            style={{
              // width: dotWidth
              opacity: dotOpacity,
            }}
          />
        );
      })}
    </Container>
  );
}
