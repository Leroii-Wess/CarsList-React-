import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeCost, changeName } from "./slices/formSlice";
import {
  carsReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slices/carsListSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeSearchTerm, addCar, removeCar, changeCost, changeName };
