import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "./Toppings.css";
import { useDispatch, useSelector } from "react-redux";
import { pizzaToppings } from "../../store/actions/actions";
import { ItemInfo } from "../../models/detail.interface";
import { AppState } from "../../store";
interface ToppingsProps extends RouteComponentProps<any> {}
export interface Toppings {
  price?: number;
  display: string;
  isSelected: boolean;
  index: number;
}

const Toppings: React.FC<ToppingsProps> = (
  props: ToppingsProps
): React.ReactElement => {
  const dispatch = useDispatch();

  const toppingDetails: Toppings[] = [
    { display: "Pepperoni", isSelected: false, index: 0 },
    { display: "Mushrooms", isSelected: false, index: 1 },
    { display: "Onions", isSelected: false, index: 2 },
    { display: "Sausage", isSelected: false, index: 3 },
    { display: "Bacon", isSelected: false, index: 4 },
    { display: "Extra cheese", isSelected: false, index: 5 },
    { display: "Black olives", isSelected: false, index: 6 },
    { display: "Green peppers", isSelected: false, index: 7 },
    { display: "Pineapple", isSelected: false, index: 8 },
    { display: "Spinach", isSelected: false, index: 9 },
    { display: "Spinach1", isSelected: false, index: 10 },
    { display: "Spinach2", isSelected: false, index: 11 },
    { display: "Spinach3", isSelected: false, index: 12 },
    { display: "Spinach4", isSelected: false, index: 13 },
  ];
  const [toppings, setstate] = useState(toppingDetails);
  const addquatity = (i: number) => {
      let c =0;
    const arr = [...toppings];
    arr.forEach(lis => {
        if(lis.isSelected) { c +=1}})
    if(checkForAdd() < c && !arr[i].isSelected) {
        alert('Maximum Topping Seleted');
    } else {
        arr[i].isSelected = !arr[i].isSelected;
        setstate(arr);
    }
    
  };
  const size = useSelector((state: AppState) => state.Size);

  const checkForAdd = (): number => {
    switch(size.display) {
        case 'Small':
            return 5-1;
        case 'Medium':
            return 7-1;
        case 'Large':
            return 9-1;
    }
    return Number.MAX_VALUE;
  }
  const moveToDetails = () => {
    const arr: ItemInfo[] = [];
    let price = 0;
    let c = 0;
    toppings.forEach((ele) => {
      if (ele.isSelected) {
        c += 1;
        ele.price = c > 3 ? 0.5 : 0;
        arr.push(ele as ItemInfo);
      }
    });

    price = +0.5 * (c - 3);
    console.log(arr, price);
    dispatch(pizzaToppings(arr));
    props.history.push("/details");
  };
  const cardUI = (res: any, i: number) => {
    return (
      <div className="quant-container" key={i}>
        <div
          className={res.isSelected ? "card w-100 border-css" : "card w-100"}
          onClick={() => addquatity(i)}
        >
          <img src="toppings.jpg" className="img" alt={res.display} />
          <h4>
            <b>{res.display}</b>
          </h4>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="df-sb">
        <div></div>
        <h2>Choose Toppings </h2>
        <button onClick={() => moveToDetails()}>View Details</button>
      </div>

      <div className="card-container">
        {toppings.map((res, i) => cardUI(res, i))}
      </div>
    </React.Fragment>
  );
};

export default withRouter(Toppings);
