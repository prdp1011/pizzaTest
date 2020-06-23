import React from 'react'
import  './Size.css'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { pizzaType } from '../../store/actions/actions';
import { ItemInfo } from '../../models/detail.interface';

interface SizeProps extends RouteComponentProps<any> {}

const Size: React.FC<SizeProps> = (
    props: SizeProps
    ): React.ReactElement => {
    const dispatch = useDispatch();
    const sizeDetails: ItemInfo[] = [
        {price: 8, display: 'Small', isSelected: false, index: 0},
        {price: 10, display: 'Medium', isSelected: false, index: 1},
        {price: 12, display: 'Large', isSelected: false, index: 2},
    ];
 
    const addSize = (res: ItemInfo) => {
        res.isSelected = true;
        dispatch(pizzaType(res));
        props.history.push("/type");
    }
    const cardUI = (res: ItemInfo, i: number) => {
    return (
            <div className="card" onClick={() => addSize(res)} key={i} >
                <h4><b>{res.display}(${res.price})</b></h4> 
            </div>
        )
    } 
  
    return (
        <React.Fragment>
            <div className="df-jc">
                <h1>Choose Pizza Size </h1>
            </div>
            <div className="card-container">
                { sizeDetails.map((res, i) => cardUI(res, i))}
            </div>
        </React.Fragment>
        )
};
export default withRouter(Size);
