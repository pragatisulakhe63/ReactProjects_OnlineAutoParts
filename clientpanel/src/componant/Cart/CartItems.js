
import { useDispatch } from 'react-redux'
import { removeItem, increase, decrease } from '../Redux/CartSlice'
import { Col, Container, Row,Image, Button} from 'react-bootstrap';

import {AiFillDelete} from 'react-icons/ai'
import {BsPlusSquare} from 'react-icons/bs'
import {FiMinusSquare} from 'react-icons/fi'
const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch();
    return (
        <div>
            
            <Container>
             <article>
                <Row className='br'><br/>
                    <Col>
                        <Image src={img} style={{width:"120px",}}/>
                    </Col>
                    <Col className='margin-id-price-title'>
                        <h5>{id}</h5>
                        <h4>{title}</h4>
                        <h4 className="item-price">Rs .{price}</h4>
                        
                    </Col>
                    <Row>
                       <Col> 
                       <div className='right-br'>
                         <Button className='h1-border' 
                          onClick={()=>{
                              dispatch(increase({id}));
                          }}
                         >
                           <BsPlusSquare/>
                         </Button>
                         <p className='amount'>{amount}</p>
                         <Button className='amount-btn h2-br'
                            onClick={()=>{
                                if (amount === 1) {
                                dispatch(removeItem(id));
                                return;
                            }
                             dispatch(decrease({ id }));
                            }}>
                            <FiMinusSquare/>
                         </Button>
                        </div>
                        </Col>
                        <Col>
                            <Button className='remove-btn'
                            onClick={() => {
                            dispatch(removeItem(id));
                        }}>
                            <AiFillDelete/>
                            </Button>
                        </Col>
                    </Row>
                </Row>
                </article>
            </Container>
        </div>
    )
}


export default CartItem
