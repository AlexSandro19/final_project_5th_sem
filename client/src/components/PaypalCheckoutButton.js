import {useState} from "react"
import { PayPalButtons } from "@paypal/react-paypal-js"
const PaypalCheckoutButton = ({user}) => {
    
    const [paidForOrder, setPaidForOrder] = useState(false);
    const [error, setError] = useState(null);
    // const items = user.cart.map(item => ({description: item.name, amount: item.price, quantity:1 })) 
    // const item = user.cart[0];
    console.log("User in PaypalCheckoutButton", user)
    const cart = user.cart
    console.log("Cart in PaypalCheckoutButton", cart)
    const total = cart.reduce((sum, item) => {return sum + item.totalPerItem}, 0)
    console.log("Total", total)
    const itemsForPaypal = cart.map(item => ({name:item.itemName, quantity:item.quantityInCart, unit_amount:{currency_code:"DKK", value:item.itemPrice}})) 
    console.log("itemsForPaypal", itemsForPaypal)
    const handleApprove = (orderId) => {
        // save the order with orderID
        console.log("Paypal handleApprove called");
        setPaidForOrder(true);
        //update user.orders

        // setError("Your payment was was processed successfully. However, we are unable to fulfill your purchase. Please contact support")
        
        if (paidForOrder) {
            //Display success message or send to confirmation page
            alert("Thank you for your purchase!") 
        }

        if (error) {
           // display error alert or error page
           alert(error) 
        }
    }
    
    return (
        <>
        <PayPalButtons 
            createOrder={(data, actions) => {
                console.log("Paypal createOrder called");
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                currency_code: "DKK",
                                value: total,
                                breakdown: {
                                    item_total: {
                                        currency_code: "DKK",
                                        value: total
                                    }
                                }
                            },
                            items: itemsForPaypal,
                        }
                    ]
                })
            }}

            onApprove={ async(data, actions) => {
                const order = await actions.order.capture();
                console.log("order", order);
                console.log("Paypal onApprove called");
                handleApprove(data.orderID);
            }}

            onError={(err) => {
                setError(err); 
                console.log("error", err);
                console.log("Paypal onError called");
            }}

            onCancel={() => {
                //display cancel message, redirect to initial page
                console.log("Paypal onCancel called");
            }}

            onClick={(data, actions) => {
                //validate on button click, client or server side
               //if something is wrong, then call actions.reject()
               //if everything is fine, then call actions.resolve() which internally will call createOrder function
               console.log("Paypal onClick called");
            }}
        />
        </>
    )

}

export default PaypalCheckoutButton;