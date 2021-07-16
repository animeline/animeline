import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  InteractionManager,
} from 'react-native';
import {useTheme} from 'styled-components';

import {Default} from '@layout/Default';

import {Input as InputHeader} from '@components/Header/Types/Input';

import {Wrapper, Content} from './styles';

export function Search() {
  const navigation = useNavigation();

  const theme = useTheme();

  const inputRef = useRef<TextInput>(null);

  const [searchTextTimeout, setSearchTextTimeout] = useState<any>(null);

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const [items, setItems] = useState<string[]>([]);

  function handleNavigateGoBack() {
    navigation.goBack();
  }

  function handleApiCall(search: string) {
    const data = [
      'Boruto',
      'Naruto',
      'Tokyo Ghoul',
      'Seishun Buta Yarou',
      'Dragon Ball Super',
      'Dragon Ball Heroes',
      'Demon Slayer',
      'Goblin Slayer',
    ];

    const filterData = data.filter(
      item =>
        item === search ||
        item.toLowerCase() === search ||
        item.includes(search),
    );

    setItems(filterData);
  }

  function handleInputChange(value: string) {
    if (searchTextTimeout) {
      clearTimeout(searchTextTimeout);
    }

    if (value.trim() === '') {
      setLoading(false);
      setStatus('none');

      return;
    }

    // eslint-disable-next-line no-extra-boolean-cast
    if (!Boolean(value.length >= 4)) {
      setLoading(false);
      setStatus('error');

      return;
    }

    setLoading(true);
    setStatus('loading');

    setSearchTextTimeout(
      setTimeout(() => {
        setLoading(false);
        setStatus('successs');

        handleApiCall(value);
      }, 2500),
    );
  }

  useEffect(() => {
    return () => clearTimeout(searchTextTimeout);
  }, [searchTextTimeout]);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      inputRef.current?.focus();
    });
  }, []);

  return (
    <Default header={{hidden: true}}>
      <Wrapper behavior={'height'}>
        <InputHeader
          theme={theme}
          status={status}
          inputRef={inputRef}
          onInputChange={handleInputChange}
          onNavigateGoBack={handleNavigateGoBack}
        />

        <Content>
          {!loading && status !== 'successs' && (
            <Text>Digite o nome de um anime para procurar...</Text>
          )}

          {loading && <ActivityIndicator size={50} color={theme.primary} />}

          {status === 'successs' && (
            <View>
              <Text>{items.length} resultados para sua pesquisa.</Text>
            </View>
          )}
        </Content>
      </Wrapper>
    </Default>
  );
}
