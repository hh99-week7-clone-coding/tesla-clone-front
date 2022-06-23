import apis from '../../api/main';


// initial state

const initialState = {
    shopdetail: [],    
    isLoading: false,
    
}


// action
const LOAD_DETAIL_REQ = "LOAD_DETAIL_REQ";
const LOAD_DETAIL_SUCCESS = "LOAD_DETAIL_SUCCESS";
const LOAD_DETAIL_ERROR = "LOAD_DETAIL_ERROR";


// action creator


const loadDetailReq = () => ({ type : LOAD_DETAIL_REQ });
const loadDetailSuccess = (payload) => ({type: LOAD_DETAIL_SUCCESS, payload});
const loadDetailError = (error) => ({type: LOAD_DETAIL_ERROR, error});


// 가져오기

export const __loadDetail = () => async(dispatch, getState) => {
    console.log(apis);
    
    try {
        dispatch(loadDetailReq());
        const { data } = await apis.getShopDetail()
        console.log(data);        
        dispatch(loadDetailSuccess(data));
    } catch(error){
        dispatch(loadDetailError(error))
        // alert("에러가 발생했습니다.")
        console.log(error);
    } 
}





// reducer

const shopdetail = (state = initialState, action ) => {   
    
    switch (action.type) {
        case LOAD_DETAIL_REQ:
            return {
                ...state, 
                isLoading: true,
            };
        case LOAD_DETAIL_SUCCESS:
            return {
                ...state,
                shopdetail: action.payload,
                isLoading: false,
            };
        case LOAD_DETAIL_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default shopdetail;