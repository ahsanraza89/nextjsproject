"use client";

import { Provider, useSelector } from 'react-redux';
import './cart.css';
import { meraStore } from '@/store/store';

export default()=>{
    return <Provider store={meraStore}>
        <Cart></Cart>
    </Provider>
  }

function Cart(){

    let cartItems = useSelector((store)=>{
        return store.productSlice.cart
    })

    let total = 0;
    cartItems.forEach((item)=>{
          total += item.price;
    })

   return <div className='bod'>
    
    <table className='container1'>
    <h3 style={{textAlign: 'center', color: '#4CAF50'}}> Shopping Cart</h3>
      {
        cartItems.map((item)=>{
          return <tr>
            <td><img width= "100" src ={item.src}/></td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            
          </tr>
        })
      }

      <tr>
        <th colspan="3" >Total Bill</th>
        <th>{total}</th>
      </tr>
    </table>
   </div>

}
