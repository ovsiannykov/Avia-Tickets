import { createStore } from "redux";
import { tikets } from "../components/Tikets/Tikets.js";

export const actionSortTiket = () => ({
  type: "SORT",
});

export const actionChangePrise = (coof, priseName) => ({
  type: "CHANGE_PRISE",
  coof: coof,
  priseName: priseName,
});

export const trasferSort = (number) => ({
  type: "TRANSFER_SORT",
  value: number,
});

const tiketsReducer = (state = tikets, action) => {
  if (action.type === "SORT") {
    let x = state.tiket.sort((a, b) => {
      return a.price - b.price;
    });
    return { tiket: x };
  }

  if (action.type === "CHANGE_PRISE") {
    let x = tikets.tiket.map((num) => {
      let y = {
        ...num,
        price: Math.round(num.price / action.coof),
        priseName: action.priseName,
      };
      return y;
    });
    return { tiket: x };
  }

  if (action.type === "TRANSFER_SORT") {
    const x = tikets.tiket.filter((el) => {
      return el.stops === action.value;
    });
    return { tiket: x };
  }

  return state;
};

export const store = createStore(tiketsReducer);
