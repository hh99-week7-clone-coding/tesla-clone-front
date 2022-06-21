import api from "./core/index";

const apis = {
    getVehicleInfos : (id) => api.get(`/api/vehicle/${id}`),
    postUser : (data) => api.post('/api/user/signup', data),
    login : (data) => api.post('/api/user/login', data)
}

export default apis;