import api from "./core/index";

const apis = {
    getVehicleDetails : (vehicleId) => api.get(`/api/vehicle/${vehicleId}`),
    getVehicleDetailsByName : (vehicleName) => api.get(`/api/vehicle/byName/${vehicleName}`),
    postUser : (data) => api.post('/api/user/signup', data),
    login : (data) => api.post('/api/user/login', data)
}

export default apis;