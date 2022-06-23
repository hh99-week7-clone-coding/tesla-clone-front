import apis from '../../api/main';


// initial state

const initialState = {
    categorydata: [],
    ontheroad:[],
    parts:[],
    isLoading: false,
    
}

// action
// charging at-home
const LOAD_CATEGORY_REQ = "charging/LOAD_CATEGORY_REQ";
const LOAD_CATEGORY_SUCCESS = "charging/LOAD_CATEGORY_SUCCESS";
const LOAD_CATEGORY_ERROR = "charging/LOAD_CATEGORY_ERROR";

// charging on the road
const LOAD_ON_THE_ROAD = "charging/LOAD_ON_THE_ROAD";
const LOAD_ROAD_SUCCESS = "charging/LOAD_ROAD_SUCCESS";
const LOAD_ROAD_ERROR = "charging/LOAD_ROAD_ERROR";

// charging parts
const LOAD_PARTS = "charging/LOAD_PARTS";
const LOAD_PARTS_SUCCESS = "charging/LOAD_PARTS_SUCCESS";
const LOAD_PARTS_ERROR = "charging/LOAD_PARTS_ERROR";


// action creator

// Charging at-home
const loadCategoryReq = () => ({ type : LOAD_CATEGORY_REQ });
const loadCategorySuccess = (payload) => ({type: LOAD_CATEGORY_SUCCESS, payload});
const loadCategoryError = (error) => ({type: LOAD_CATEGORY_ERROR, error});

// Charging On-the-Road
const loadOnTheRoadReq = () => ({type : LOAD_ON_THE_ROAD});
const loadOnTheRoadSuccess = (payload) => ({type : LOAD_ROAD_SUCCESS, payload});
const loadOnTheRoadError = (error) => ({type : LOAD_ROAD_ERROR, error});

// charging parts
const loadPartsReq = () => ({type : LOAD_PARTS});
const loadPartsSuccess = (payload) => ({type : LOAD_PARTS_SUCCESS, payload});
const loadPartsError = (error) => ({type :LOAD_PARTS_ERROR, error});


// 가져오기
// Charging.at-home
export const __loadCategory = (ChargingID) => async(dispatch, getState) => {
    
    try {
        dispatch(loadCategoryReq());
        const { data } = await apis.getCategoryInfo(ChargingID)
        console.log(data);        
        dispatch(loadCategorySuccess(data));
    } catch(error){
        dispatch(loadCategoryError(error))
        // alert("에러가 발생했습니다.")
        console.log(error);
    } 
}
//charging.on-the-road

export const __loadOnTheRoad = (ChargingID2) => async(dispatch, getState) => {
    
    try {
        dispatch(loadOnTheRoadReq());
        const { data } = await apis.getChargingOntheRoad(ChargingID2)
        console.log(data);        
        dispatch(loadOnTheRoadSuccess(data));
    } catch(error){
        dispatch(loadOnTheRoadError(error))
        // alert("에러가 발생했습니다.")
        console.log(error);
    } 
}

// charging parts
export const __loadParts = (ChargingID3) => async(dispatch, getState) => {
    
    try {
        dispatch(loadPartsReq());
        const { data } = await apis.getChargingParts(ChargingID3)
        console.log(data);        
        dispatch(loadPartsSuccess(data));
    } catch(error){
        dispatch(loadPartsError(error))
        // alert("에러가 발생했습니다.")
        console.log(error);
    } 
}



// reducer

const categories = (state = initialState, action ) => {   
    
    switch (action.type) {
        case LOAD_CATEGORY_REQ:
            return {
                ...state, 
                isLoading: true,
            };
        case LOAD_CATEGORY_SUCCESS:
            return {
                ...state,
                categorydata: action.payload,
                isLoading: false,
            };
        case LOAD_CATEGORY_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case LOAD_ON_THE_ROAD:
            return {
                ...state,
                isLoading: true,
            };
        case LOAD_ROAD_SUCCESS:
            return {
                ...state,
                ontheroad: action.payload,
                isLoading: false,
            };
        case LOAD_ROAD_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case LOAD_PARTS:
            return {
                ...state,
                isLoading: true,
            };
        case LOAD_PARTS_SUCCESS:
            return {
                ...state,
                parts: action.payload,
                isLoading: false,
            };
        case LOAD_PARTS_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default categories;