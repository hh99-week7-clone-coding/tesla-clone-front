const COST_BTN_CLICKED = 'vehicleDetail/COST_BTN_CLICKED'

export const costBtnClick = (payload) => ({
    type: COST_BTN_CLICKED, payload
})

const initialState = {
    costBtnClicked : false
}

export default function vehicleDetail (state = initialState, action) {
    switch (action.type){
      case COST_BTN_CLICKED : {
        return {costBtnClicked : action.payload}
      }
      default: {
        return state;
      }
    }
  }