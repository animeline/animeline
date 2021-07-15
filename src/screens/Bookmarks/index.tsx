import React from 'react';

import {ServiceUnavailable} from '../../components/ServiceUnavailable';

import {Default} from '../../layout/Default';

import {Content} from './styles';

export function Bookmarks() {
  return (
    <Default>
      <Content>
        <ServiceUnavailable />
      </Content>
    </Default>
  );
}
