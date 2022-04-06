import { Pet } from "../../types/enums";

const initialState = {
    step: 1,
    name: '',
    age: '',
    petName: '',
    petType: Pet.Cat,
    agreenment: false
  }
  
  export const userReducer = (state = initialState, action: any)  => {
      const {type, payload} = action;
    switch (type) {
        case 'updateFields': 
        const {key, value} = payload;
          return {
            ...state,
            [key]: value 
          }
        case 'nextStep':
            return {
                ...state,
                step: state.step + 1
            };
        case 'finish':
          return {
            ...state
          }
      default:
        return state
    };
  }