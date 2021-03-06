import React from 'react';

import {ServiceUnavailable} from '@components/ServiceUnavailable';

import {Default} from '@layout/Default';

import {Content} from './styles';

export function Categories() {
  return (
    <Default>
      <Content>
        <ServiceUnavailable />
      </Content>
    </Default>
  );
}
