import { ActionTypes } from "@/types/actions";
import { WeatherState } from "@/types/context";
import { dispatchActions } from "@/types/dispatchActions";

const weatherReducer = (
  state: WeatherState,
  action: dispatchActions
): WeatherState => {
  switch (action.type) {
    case ActionTypes.SET_LOCATION:
      return {
        ...state,
        myPlace: action.payload,
      };

    case ActionTypes.ADD_LOCATION:
      return {
        ...state,
        savedPlaces: [...state.savedPlaces, action.payload],
      };

    default:
      return state;
  }
};

export default weatherReducer;
