import axios from 'axios';

export async function getUsersApi() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data;
}

export async function getUserApi(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return response.data;
}