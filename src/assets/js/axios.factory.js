import Axios from 'axios';

import { authFirebase } from './auth';

export default function apiClient() {
  return Axios.create({
    baseURL: process.env.REACT_APP_API_URL_BASE,
    validateStatus: function(status) {
      return true;
    },
    headers: {
      Authorization: `Bearer ${authFirebase.token}`
    }
  });
}
