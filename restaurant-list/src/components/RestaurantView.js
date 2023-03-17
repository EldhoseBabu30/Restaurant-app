import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestReviews from './RestReviews';
import { useSelector,useDispatch} from 'react-redux';
import { RestaurantsList } from '../actions/homeAction';


function RestaurantView() {
  const params = useParams()
  console.log(params.id);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(RestaurantsList())

  },[])


  const {restaurants} = useSelector (state=>state.restaurantReducer)
  console.log(restaurants);

  const restaurant = restaurants.find(item =>
    item.id == params.id
  )
  console.log(restaurant);

  return (
    <>
      {
        restaurant ? (<Row className='p-3'>
          <Col md={3}>
            <Image className='rounded border p-1' src={restaurant.photograph} alt={restaurant.name} fluid></Image>
          </Col>
          <Col md={8}>
            <ListGroup>
              <ListGroup.Item><h2>{restaurant.name}</h2>
                <p>{restaurant.neighborhood}</p></ListGroup.Item>
              <ListGroup.Item><p>Cuisine : {restaurant.cuisine_type}</p></ListGroup.Item>
              <ListGroup.Item><p className='my-2'>Address : {restaurant.address}</p></ListGroup.Item>
              <ListGroup.Item>
                <Button className='ps-0 my-3' variant='dark' onClick={handleShow}>
                  Click here to see Restaurant Operating Hours
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>


                    <ListGroup>
                      <ListGroup.Item>Monday: {restaurant.operating_hours.Monday}</ListGroup.Item>
                      <ListGroup.Item>Tuesday: {restaurant.operating_hours.Tuesday}</ListGroup.Item>
                      <ListGroup.Item>Wednesday: {restaurant.operating_hours.Wednesday}</ListGroup.Item>
                      <ListGroup.Item>Thursday: {restaurant.operating_hours.Thursday}</ListGroup.Item>
                      <ListGroup.Item>Friday: {restaurant.operating_hours.Friday}</ListGroup.Item>
                      <ListGroup.Item>Saturday: {restaurant.operating_hours.Saturday}</ListGroup.Item>
                      <ListGroup.Item>Sunday: {restaurant.operating_hours.Sunday}</ListGroup.Item>
                    </ListGroup>
                  </Modal.Body>
                </Modal>


              </ListGroup.Item>

              <ListGroup.Item><p className='my-2'>
                <RestReviews reviews={restaurant.reviews}/>
                </p></ListGroup.Item>

            </ListGroup>
          </Col>
        </Row>) : 'Nothing to display '
      }
    </>

  )
}

export default RestaurantView