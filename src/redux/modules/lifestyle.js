import apis from '../../api/main';


// initial state

const initialState = {
    bestseller: [],    
    miniteslas:[],
    drinkware:[],
    outdoor:[],
    giftcard:[],
    isLoading: false,
    
}

// action
// lifestyle best-seller
const LOAD_BEST_REQ = "lifestyle/LOAD_BEST_REQ";
const LOAD_BEST_SUCCESS = "lifestyle/LOAD_BEST_SUCCESS";
const LOAD_BEST_ERROR = "lifestyle/LOAD_BEST_ERROR";

// lifestyle mini-teslas
const LOAD_MINI_REQ = "lifestyle/LOAD_MINI_REQ";
const LOAD_MINI_SUCCESS = "lifestyle/LOAD_MINI_SUCCESS";
const LOAD_MINI_ERROR = "molifestyledels/LOAD_MINI_ERROR";

// lifestyle drinkware
const LOAD_DRINKWARE_REQ = "lifestyle/LOAD_DRINKWARE_REQ";
const LOAD_DRINKWARE_SUCCESS = "lifestyle/LOAD_DRINKWARE_SUCCESS";
const LOAD_DRINKWARE_ERROR = "lifestyle/LOAD_DRINKWARE_ERROR";

// lifestyle outdoor
const LOAD_OUTDOOR_REQ = "lifestyle/LOAD_OUTDOOR_REQ";
const LOAD_OUTDOOR_SUCCESS = "lifestyle/LOAD_OUTDOOR_SUCCESS";
const LOAD_OUTDOOR_ERROR = "lifestyle/LOAD_OUTDOOR_ERROR";

// lifestyle gift card
const LOAD_GIFTCARD_REQ = "lifestyle/LOAD_GIFTCARD_REQ";
const LOAD_GIFTCARD_SUCCESS = "lifestyle/LOAD_GIFTCARD_SUCCESS";
const LOAD_GIFTCARD_ERROR = "lifestyle/LOAD_GIFTCARD_ERROR";


// action creator


const loadBestSellerReq = () => ({ type : LOAD_BEST_REQ });
const loadBestSellerSuccess = (payload) => ({type: LOAD_BEST_SUCCESS, payload});
const loadBestSellerError = (error) => ({type: LOAD_BEST_ERROR, error});


const loadMiniReq = () => ({type : LOAD_MINI_REQ});
const loadMiniSuccess = (payload) => ({type : LOAD_MINI_SUCCESS, payload});
const loadMiniError = (error) => ({type : LOAD_MINI_ERROR, error});


const loadDrinkWareReq = () => ({type : LOAD_DRINKWARE_REQ});
const loadDrinkWareSuccess = (payload) => ({type : LOAD_DRINKWARE_SUCCESS, payload});
const loadDrinkWareError = (error) => ({type :LOAD_DRINKWARE_ERROR, error});

const loadOutDoorReq = () => ({type : LOAD_OUTDOOR_REQ});
const loadOutDoorSuccess = (payload) => ({type : LOAD_OUTDOOR_SUCCESS, payload});
const loadOutDoorError = (error) => ({type :LOAD_OUTDOOR_ERROR, error});

const loadGiftCardReq = () => ({type : LOAD_GIFTCARD_REQ});
const loadGiftCardSuccess = (payload) => ({type : LOAD_GIFTCARD_SUCCESS, payload});
const loadGiftCardError = (error) => ({type :LOAD_GIFTCARD_ERROR, error});


// 가져오기

export const __loadBestSellor = (LifeID1) => async(dispatch, getState) => {
    
    try {
        dispatch(loadBestSellerReq());
        const { data } = await apis.getLifeBest(LifeID1)
        console.log(data);        
        dispatch(loadBestSellerSuccess(data));
    } catch(error){
        dispatch(loadBestSellerError(error))
        // alert("에러가 발생했습니다.")
        console.log(error);
    } 
}


export const __loadMini = (LifeID2) => async(dispatch, getState) => {
    
    try {
        dispatch(loadMiniReq());
        const { data } = await apis.getLifeMini(LifeID2)
        console.log(data);        
        dispatch(loadMiniSuccess(data));
    } catch(error){
        dispatch(loadMiniError(error))
        // alert("에러가 발생했습니다.")
        console.log(error);
    } 
}


export const __loadDrinkWare = (LifeID3) => async(dispatch, getState) => {
    
    try {
        dispatch(loadDrinkWareReq());
        const { data } = await apis.getLifeDrink(LifeID3)
        console.log(data);        
        dispatch(loadDrinkWareSuccess(data));
    } catch(error){
        dispatch(loadDrinkWareError(error))
        // alert("에러가 발생했습니다.")
        console.log(error);
    } 
}

export const __loadOutDoor = (LifeID4) => async(dispatch, getState) => {
    
    try {
        dispatch(loadOutDoorReq());
        const { data } = await apis.getLifeOutDoor(LifeID4)
        console.log(data);        
        dispatch(loadOutDoorSuccess(data));
    } catch(error){
        dispatch(loadOutDoorError(error))
        // alert("에러가 발생했습니다.")
        console.log(error);
    } 
}

export const __loadGiftCard = (LifeID5) => async(dispatch, getState) => {
    
    try {
        dispatch(loadGiftCardReq());
        const { data } = await apis.getLifeGiftCard(LifeID5)
        console.log(data);        
        dispatch(loadGiftCardSuccess(data));
    } catch(error){
        dispatch(loadGiftCardError(error))
        // alert("에러가 발생했습니다.")
        console.log(error);
    } 
}


// reducer

const lifestylelist = (state = initialState, action ) => {   
    
    switch (action.type) {
        case LOAD_BEST_REQ:
            return {
                ...state, 
                isLoading: true,
            };
        case LOAD_BEST_SUCCESS:
            return {
                ...state,
                bestseller: action.payload,
                isLoading: false,
            };
        case LOAD_BEST_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case LOAD_MINI_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case LOAD_MINI_SUCCESS:
            return {
                ...state,
                miniteslas: action.payload,
                isLoading: false,
            };
        case LOAD_MINI_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case LOAD_DRINKWARE_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case LOAD_DRINKWARE_SUCCESS:
            return {
                ...state,
                drinkware: action.payload,
                isLoading: false,
            };
        case LOAD_DRINKWARE_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case LOAD_OUTDOOR_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case LOAD_OUTDOOR_SUCCESS:
            return {
                ...state,
                outdoor: action.payload,
                isLoading: false,
            };
        case LOAD_OUTDOOR_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case LOAD_GIFTCARD_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case LOAD_GIFTCARD_SUCCESS:
            return {
                ...state,
                giftcard: action.payload,
                isLoading: false,
            };
        case LOAD_GIFTCARD_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default lifestylelist;