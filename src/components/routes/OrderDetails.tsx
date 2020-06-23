import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { AppState } from "../../store";
import { createorUpdateOrder } from "../../store/actions/actions";
interface StateProps {
  details: AppState;
}

interface DispatchProps {
  newOrder: (person: any) => Promise<void>;
}

interface Props extends RouteComponentProps {
  OrderDetails: string;
}

type PropsType = StateProps & DispatchProps & Props;
export class OrderDetails extends Component<PropsType> {
  toppings = "";
  total = 0;
  resetOrder() { 
    this.props.history.push("/");
  }
  createOrder(){
    if(this.props.details.CreateNewOrderReducer.hide) {
      return;
    }
    const {Size, Toppings, Type} = this.props.details;
    const toppings = Toppings.map(lis => lis.display).join();
    const obj = {size: Size.display, type: Type.display, toppings, total: this.getTotal()}
    this.props.newOrder(obj);
  }
  getTotal() {
    let s = 0;
    this.props.details.Toppings.forEach((lis) => (s += lis.price));
    return this.props.details.Size.price + this.props.details.Type.price + s;
  }
  getToppings(): string {
    const list = this.props.details.Toppings;
    let s = "";
    list.forEach((lis, i) => {
      s += lis.display + " ($" + lis.price + ")";
      s += i < list.length - 1 ? ", " : "";
    });
    return s;
  }

  render() {
    return (
      <React.Fragment>
        <div className="df-sb">
          <div></div>
          <h1>Order Details</h1>
          <button onClick={() => this.resetOrder()}>New Order</button>
        </div>
        <div className="df-jc">
          <div className="card h-100">
            <table className="t-a-l">
              <thead>
              </thead>
              <tbody>
                <tr>
                  <td><b>Pizza Size</b></td>
                  <td>{this.props.details.Size.display} (${this.props.details.Size.price})</td>
                </tr>
                <tr>
                  <td><b>Pizza Type</b></td>
                  <td>{this.props.details.Type.display} (${this.props.details.Type.price})</td>
                </tr>
                <tr>
                  <td><b>Toppings</b></td>
                  <td>{this.getToppings()}</td>
                </tr>
                
                <tr>
                
                  <td>
                    <b>Total</b>
                  </td>
                  <td>(${this.getTotal()})</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
          <div className="df-jc">
            <button onClick={() => this.createOrder()}>{this.props.details.CreateNewOrderReducer.state}</button>
          </div>

      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return { details: state };
};
const mapDispatchToProps = (dispatch: any) => ({
     newOrder: (lis: any) => dispatch(createorUpdateOrder(lis))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OrderDetails));
