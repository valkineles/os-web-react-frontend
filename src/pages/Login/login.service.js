import apiClient from '../../assets/js/axios.factory';

export default function InsertNewUser() {
  apiClient()
    .post('/users')
    .then(resp => {
      console.log(resp);
    });
}
