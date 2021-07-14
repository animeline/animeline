import 'styled-componets';

import {TColors} from '../config/colors';

declare module 'styled-components' {
  export interface DefaultTheme extends TColors {}
}
