import Axios from 'axios';

import { authFirebase } from './auth';

export default function apiClient() {
  return Axios.create({
    baseURL: 'http://localhost:3300/api/v1',
    validateStatus: function(status) {
      return true;
    },
    headers: {
      Authorization: `Bearer ${authFirebase.token}`
    }
  });
}
