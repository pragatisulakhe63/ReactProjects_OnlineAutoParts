
import { useDispatch } from 'react-redux'
import { removeItem} from '../Redux/CartSlice'
import { Col, Container, Row,Image, Button} from 'react-bootstrap';

import {AiFillDelete} from 'react-icons/ai'


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
