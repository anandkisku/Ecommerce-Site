import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
const axios = require('axios').default;

function Subtotal() {
    function callingAxios(){
        console.log(basket)
        axios.post('https://janam.free.beeceptor.com/',basket).then(
            response=>{
                console.log(response);
                console.log(basket)
            }
        ).catch(error=>{
            console.log(error);
        })
    }
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
            
            <CurrencyFormat
            rebdeText={(value)=>(
                <>
                <p>Subtotal ({basket.length} items):<strong>
                   {`${value}`}
                </strong>
                
                </p>
                
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousansSeparator={true}
            prefix={"₹"}
            />
            <br></br>
            <button style={{"backgroundColor":"#21a007","height":"35px","fontWeight":"bold","borderRadius":"4px"}} onClick={callingAxios}>Proceed & Checkout</button>
            
        </div>
    )
}

export default Subtotal
