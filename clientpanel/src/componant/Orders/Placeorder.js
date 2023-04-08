import CartFinalItem from './CartFinalItem'
import { useDispatch, useSelector } from "react-redux";
import cart from './Image/cart.png'
import '../Cart/Cart.css';
import { CalculateTotals, clearCart } from '../Redux/CartSlice'
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { currCustData } from '../Redux/AuthSlice';


const Placeorder = () => {
    const dispatch = useDispatch();
    const { cartItems, totalAmt, noOfItems } = useSelector((store) => store.cart);
    const cust = useSelector(currCustData);
    const navi = useNavigate()
    function goHome() {
        navi('/')
    }
    function onClearCart() {
        dispatch(clearCart());
    }
    function makeOrder() {
        const orderData = {
            date: new Date(),
            amount: totalAmt,
            noofitems: noOfItems,
            customerid: cust._id,
            items: cartItems,
        }
        axios.post("http://Localhost:5000/addorder", orderData)
            .then((orderData) => {
                console.log("OrderData", orderData)
                goToHome()
            })
            .catch((err) => {
                console.log("Err", err)
            })
    }
    function goToHome() {
        navi("/")
    }
    function calTotal() {
        dispatch(CalculateTotals());
    }
    if (noOfItems < 1) {
        return (
            <section className="cart m-1">
                <header className="empty-cart border-cart">
                    <Image src={cart} />
                    <h2 style={{
                        color: "black", position: "relative", fontSize: "25px",
                        fontFamily: "'Courier New', Courier, monospace",
                        fontWeight: "600"
                    }}>Your cart is empty</h2>
                    <h4 style={{
                        color: "black", position: "relative", fontSize: "20px",
                        fontFamily: "'Courier New', Courier, monospace",
                        fontWeight: "500"
                    }}>Add Items to it now</h4>
                    <Button onClick={goHome}>Shop Now</Button>
                </header>
            </section>
        )
    }
    return (
        <section className="cart">
            <header>
                <h2 style={{ textAlign: "center", fontFamily: "'Courier New', Courier, monospace", fontWeight: "lighter", textDecoration: "underline" }}>My Cart</h2>
            </header>
            <div>
                {calTotal()}
                {cartItems.map((item) => {
                    return (
                        <CartFinalItem
                            key={item._id}
                            id={item._id}
                            amount={item.qty}
                            price={item.productPrize}
                            title={item.productCompany.concat(" ")
                                .concat(item.productTypes)
                                .concat(" ")
                                .concat(item.vehicleModel)}
                            img={"http://localhost:5000".concat(item.Image)}
                        />
                    );
                })};
            </div>
            <footer className='br1'>

                <div className="cart-total">
                    <h4>
                        Total <span>Rs.{totalAmt.toFixed(2)}</span>
                    </h4>
                </div>
                <Button className="btn clear-btn" onClick={onClearCart}>
                    Clear Cart
                </Button>
                {/* <Button onClick={calTotal}>Total</Button> */}
                <Button className="place-ord" onClick={makeOrder}>place order</Button>

            </footer>
        </section>
    )
}

export default Placeorder
