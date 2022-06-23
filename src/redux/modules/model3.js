import apis from '../../api/main';


// initial state

const initialState = {
    bestseller: [],
    interior:[],
    exterior:[],
    isLoading: false,
    
}

// action
// model 3 best-seller
const LOAD_BEST_REQ = "models/LOAD_BEST_REQ";
const LOAD_BEST_SUCCESS = "models/LOAD_BEST_SUCCESS";
const LOAD_BEST_ERROR = "models/LOAD_BEST_ERROR";

// model 3 interior
const LOAD_INTERIOR = "models/LOAD_INTERIOR";
const LOAD_INTERIOR_SUCCESS = "models/LOAD_INTERIOR_SUCCESS";
const LOAD_INTERIOR_ERROR = "models/LOAD_INTERIOR_ERROR";

// model 3 exterior
const LOAD_EXTERIOR = "models/LOAD_EXTERIOR";
const LOAD_EXTERIOR_SUCCESS = "models/LOAD_EXTERIOR_SUCCESS";
const LOAD_EXTERIOR_ERROR = "models/LOAD_EXTERIOR_ERROR";


// action creator

// model 3 BestSellor
const loadBestSellerReq = () => ({ type : LOAD_BEST_REQ });
const loadBestSellerSuccess = (payload) => ({type: LOAD_BEST_SUCCESS, payload});
const loadBestSellerError = (error) => ({type: LOAD_BEST_ERROR, error});

// Model 3 Interior
const loadInteriorReq = () => ({type : LOAD_INTERIOR});
const loadInteriorSuccess = (payload) => ({type : LOAD_INTERIOR_SUCCESS, payload});
const loadInteriorError = (error) => ({type : LOAD_INTERIOR_ERROR, error});

// Model 3 Exterior
const loadExteriorReq = () => ({type : LOAD_EXTERIOR});
const loadExteriorSuccess = (payload) => ({type : LOAD_EXTERIOR_SUCCESS, payload});
const loadExteriorError = (error) => ({type :LOAD_EXTERIOR_ERROR, error});


// 가져오기
// Model 3 Best Sellor
export const __loadBestSellor = (Model3ID1) => async(dispatch, getState) => {
    
    try {
        dispatch(loadBestSellerReq());
        const { data } = await apis.getModel3Best(Model3ID1)
        console.log(data);        
        dispatch(loadBestSellerSuccess(data));
    } catch(error){
        dispatch(loadBestSellerError(error))
        // alert("에러가 발생했습니다.")
        console.log(error);
    } 
}
// Model 3 Interior

export const __loadInterior = (Model3ID2) => async(dispatch, getState) => {
    
    try {
        dispatch(loadInteriorReq());
        const { data } = await apis.getModel3Interior(Model3ID2)
        console.log(data);        
        dispatch(loadInteriorSuccess(data));
    } catch(error){
        dispatch(loadInteriorError(error))
        // alert("에러가 발생했습니다.")
        console.log(error);
    } 
}

// Model 3 Exterior
export const __loadExterior = (Model3ID3) => async(dispatch, getState) => {
    
    try {
        dispatch(loadExteriorReq());
        const { data } = await apis.getModel3Exterior(Model3ID3)
        console.log(data);        
        dispatch(loadExteriorSuccess(data));
    } catch(error){
        dispatch(loadExteriorError(error))
        // alert("에러가 발생했습니다.")
        console.log(error);
    } 
}



// reducer

const modelslist = (state = initialState, action ) => {   
    
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
        case LOAD_INTERIOR:
            return {
                ...state,
                isLoading: true,
            };
        case LOAD_INTERIOR_SUCCESS:
            return {
                ...state,
                interior: action.payload,
                isLoading: false,
            };
        case LOAD_INTERIOR_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case LOAD_EXTERIOR:
            return {
                ...state,
                isLoading: true,
            };
        case LOAD_EXTERIOR_SUCCESS:
            return {
                ...state,
                exterior: action.payload,
                isLoading: false,
            };
        case LOAD_EXTERIOR_ERROR:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
};

export default modelslist;