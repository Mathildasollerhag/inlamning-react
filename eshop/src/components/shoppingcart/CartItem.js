import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/actions/cartActions';

export default function CartItem({item}) {
    const dispatch = useDispatch()

    const add = (e) => {
        e.stopPropagation();
        dispatch(addToCart(item))
    }
    const remove = (e) => {
        e.stopPropagation();
        dispatch(removeFromCart(item._id))
    }

    return (
        <div>
            <div>
                <div><strong>{item.name}</strong></div>
                <img className="imgStyleSmall" src={item.image} alt=""/>
                <div className="text-muted">{item.quantity} x {item.price} :-</div>
            </div>
            <div>
                <button className="btn btn-sm white-text btn-dark" onClick={add}>+</button>
                <button className="btn btn-sm white-text btn-dark" onClick={remove}>-</button>
            </div>
            
        </div>
    )
}
