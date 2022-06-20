import api from "./core/index";

const apis = {
    getVehicleInfos : (id) => api.get(`/api/vehicle/${id}`),
    postUser : (data) => api.post('/api/user/signup', data)
}

export default apis;