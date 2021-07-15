import React from 'react';

import {ServiceUnavailable} from '@components/ServiceUnavailable';

import {Default} from '@layout/Default';

import {Content} from './styles';

export function Search() {
  return (
    <Default header={{type: 'back'}}>
      <Content>
        <ServiceUnavailable />
      </Content>
    </Default>
  );
}
