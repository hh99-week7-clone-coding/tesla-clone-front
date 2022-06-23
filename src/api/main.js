import api from "./core/index";

const apis = {
    getVehicleInfos : (id) => api.get(`/api/vehicle/${id}`),
    postUser : (data) => api.post('/api/user/signup', data),
    login : (data) => api.post('/api/user/login', data),
    getCategoryInfo : (id) => api.get(`/api/shop/category/${id}`),
    getChargingOntheRoad : (id) => api.get(`/api/shop/category/${id}`),
    getChargingParts : (id) => api.get(`/api/shop/category/${id}`),
    getModelsBest : (id) => api.get(`/api/shop/category/${id}`),
    getModelsInterior : (id) => api.get(`/api/shop/category/${id}`),
    getModelsExterior : (id) => api.get(`/api/shop/category/${id}`),
    getModel3Best : (id) => api.get(`/api/shop/category/${id}`),
    getModel3Interior : (id) => api.get(`/api/shop/category/${id}`),
    getModel3Exterior : (id) => api.get(`/api/shop/category/${id}`),
    getModelXBest : (id) => api.get(`/api/shop/category/${id}`),
    getModelXInterior : (id) => api.get(`/api/shop/category/${id}`),
    getModelXExterior : (id) => api.get(`/api/shop/category/${id}`),
    getModelYBest : (id) => api.get(`/api/shop/category/${id}`),
    getModelYInterior : (id) => api.get(`/api/shop/category/${id}`),
    getModelYExterior : (id) => api.get(`/api/shop/category/${id}`),
    getMenBest : (id) => api.get(`/api/shop/category/${id}`),
    getWomenBest : (id) => api.get(`/api/shop/category/${id}`),
    getKidsBest : (id) => api.get(`/api/shop/category/${id}`),
    getLifeBest : (id) => api.get(`/api/shop/category/${id}`),
    getLifeMini : (id) => api.get(`/api/shop/category/${id}`),
    getLifeDrink : (id) => api.get(`/api/shop/category/${id}`),
    getLifeOutDoor : (id) => api.get(`/api/shop/category/${id}`),
    getLifeGiftCard : (id) => api.get(`/api/shop/category/${id}`)
}

export default apis;