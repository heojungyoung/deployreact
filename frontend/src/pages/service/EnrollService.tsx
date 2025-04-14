import axios from 'axios';

export function enrollUser(data: any) {
    return axios.post('/api/enroll', data);
}