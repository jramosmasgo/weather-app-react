import { ActionTypes } from "./actions";
import { ILocationWeather } from "./currentLocation";

export type SetLocation = {
  type: ActionTypes.SET_LOCATION;
  payload: ILocationWeather;
};

export type AddLocation = {
  type: ActionTypes.ADD_LOCATION;
  payload: ILocationWeather;
};

export type Login = {
  type: ActionTypes.LOGIN;
  payload: any;
};

export type LogOut = {
  type: ActionTypes.LOGOUT;
  payload: any;
};

export type dispatchActions = SetLocation | AddLocation | Login | LogOut;
