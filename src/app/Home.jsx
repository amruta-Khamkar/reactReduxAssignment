import React from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

export default function Home() {

    const change = useSelector(state => state.write);
    console.log(change);
    const dispatch = useDispatch()
    return (
        <>
            <h1 className="text-center">Como  on Shop Here!</h1>
            <button className='btn btn-dark my-2' onClick={() => { dispatch({ type: "write" }) }}>view discounts</button>
            {change.change == 1 && <ListGroup>
                <ListGroup.Item variant="primary">5% on goggles</ListGroup.Item>
                <ListGroup.Item action variant="secondary">
                    10% on tops
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                20% on shirts
                </ListGroup.Item>
                <ListGroup.Item action variant="danger">
                30% on jeans
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                40% on trousers
                </ListGroup.Item>
                <ListGroup.Item action variant="info">
                50% on traditionals
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                60% on swimming stuff
                </ListGroup.Item>
                <ListGroup.Item action variant="dark">
                70% on buying above 5000
                </ListGroup.Item>
            </ListGroup>}
            <img src="../IMGS/bg.webp" width="100%" height="500px" />
        </>
    )
}
