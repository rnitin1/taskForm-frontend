import axios from 'axios'
const AxiosBase = axios.create({
    baseURL: 'http://3.131.143.14:8000/'
})


export default AxiosBase;