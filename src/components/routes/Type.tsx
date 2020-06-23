import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ItemInfo } from '../../models/detail.interface';
import { useDispatch } from 'react-redux';
import { pizzaSize } from '../../store/actions/actions';
interface TypeProps extends RouteComponentProps<any> {}


const Type: React.FC<TypeProps> = (
    props: TypeProps
    ): React.ReactElement => {
    const dispatch = useDispatch();

    const sizeDetails: ItemInfo[] = [
        {price: 2, display: 'Thin', index : 0, isSelected: false},
        {price: 4, display: 'Thick', index: 1, isSelected: false},
    ];
 
    const addOn = (res: ItemInfo) => {
        res.isSelected = true;
        dispatch(pizzaSize(res));
        props.history.push("/toppings");
    }
    const cardUI = (res: any, i: number) => {
        return (
                <div className='card'
                onClick={() => addOn(res)} key={i} >
                    <h4><b>{res.display}(${res.price})</b></h4> 
                </div>
            )
    }
    // if(!type.price) {
    //     props.history.push("/type");
    //     return <div></div>
    // } 
    return (
        <React.Fragment>
            <div className="df-jc">
                <h1>Choose Pizza Type</h1>
            </div>
            <div className="card-container space-evenly">
                { sizeDetails.map((res, i) => cardUI(res, i))}
            </div>
        </React.Fragment>
        )
}



export default withRouter(Type);
