import React from 'react'
import './cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { cartRemoveAction, quantityUpdateAction } from '../redux/action/cartData';

const Cart = () => {
    const dispatch = useDispatch();
    const temp_data = useSelector((state) => state.cartReducer.cart_product);
    // console.log(temp_data, "prachi jhcgjnfmh")

    const handleRemove = (id) => {
        dispatch(cartRemoveAction(id))

    }
    const quantityUpdate = (id, quantity) => {
        dispatch(quantityUpdateAction(id, quantity))
    }

    let price = 0;
    temp_data?.map((item) => {
        price = (price + (item?.price - 2) * item?.quantity)
    })


    return (
        <div>


            <div class="container">

                <div class="cart-items">
                    <h2>My Cart (1 item)</h2>

                    {
                        temp_data?.map((item) =>
                            <div class="cart-card" key={item?.id}>
                                <img src={item?.thumbnail} alt="product" />

                                <div class="product-info">
                                    <h3>{item?.title}</h3>
                                    <p>Description: {item?.description.slice(1, 50)} ...</p>
                                    <p class="seller">Seller: RetailNet</p>

                                    <div class="price">
                                        <span class="new-price">₹{item?.price - 2}</span>
                                        <span class="old-price">₹{item?.price}</span>
                                        <span class="discount">14% off</span>
                                    </div>

                                    <div class="actions">
                                        <button>Save for later</button>
                                        <button onClick={() => handleRemove(item?.id)}>Remove</button>
                                        <div className='quantity'>
                                            <button onClick={() => quantityUpdate(item?.id, "decr")}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => quantityUpdate(item?.id, "incer")}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div class="price-box">
                    <h3>PRICE DETAILS</h3>

                    <div class="row">
                        <span>Price</span>
                        <span>{price.toFixed(2)}</span>
                        {/* {temp_data.map((item) =>
                            <span>{item?.price - 2}</span>
                        )} */}
                    </div>

                    <div class="row">
                        <span>Delivery Charges</span>
                        <span class="free">FREE</span>
                    </div>

                    <hr />

                    <div class="row total">
                        <span>Total Amount</span>

                        <span>₹{price.toFixed(2)}</span>

                    </div>

                    <button class="order-btn">PLACE ORDER</button>
                </div>

            </div>

        </div>
    )
}

export default Cart
