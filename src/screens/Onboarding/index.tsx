// https://reactnative.dev/docs/asyncstorage
// https://www.youtube.com/watch?v=NiCUTklDwSA

import React, {useRef} from 'react';
import {Animated, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {slides} from '@assets/data/slides';

import {Default} from '@layout/Default';

import {Item} from './Item';
import {Paginator} from './Paginator';

import {Content, ListContainer} from './styles';

export function Onboarding() {
  const naviagtion = useNavigation();

  const scrollX = useRef(new Animated.Value(0)).current;

  function handleNavigateToHome() {
    naviagtion.navigate('Home');
  }

  return (
    <Default
      statusBar={{
        backgroundColor: 'white',
        barStyle: 'dark-content',
      }}>
      <Content>
        <ListContainer>
          <FlatList
            data={slides}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Item item={item} onPress={handleNavigateToHome} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {
                useNativeDriver: false,
              },
            )}
          />
        </ListContainer>

        <Paginator data={slides} scrollX={scrollX} />
      </Content>
    </Default>
  );
}
