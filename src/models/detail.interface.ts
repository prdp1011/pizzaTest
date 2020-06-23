
export interface PizzaDetailsState {
    Size: ItemInfo;
    Type: ItemInfo;
    Toppings: ItemInfo[];
}




export interface PizzDetails {
    pizzaSizes: ItemInfo;
    pizzaTypes: ItemInfo;
    toppings: string[];
}

export interface OrderDetailState {
    detail: PizzDetails;
    isLoading: boolean;
    hasError: boolean;
  }
 
export interface PizzaSize {
    sizeList: ItemInfo;
    hasError: boolean;
    isLoading: boolean
}
export interface ItemInfo{
    price: number;
    display: string;
    isSelected: boolean;
    index: number;
}