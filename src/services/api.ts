import axios from 'axios';

import {X_API_URL} from '@env';

export const api = axios.create({baseURL: X_API_URL});
