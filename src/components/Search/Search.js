import React from 'react'
import {Navbar, Container, Form} from "react-bootstrap"
import StarRatings from "react-star-ratings"

const Search = ({handleSearchName, handleRate}) => {
    
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="container">
            <Navbar.Brand href="#home" style={{color:"#D7BDCA"}}>Cat Shop</Navbar.Brand>
            </Container>

            <StarRatings
            className="star-ratings"
            changeRating={handleRate}
            numberOfStars={5}
            name='rating'
            starDimension="15px"
            starHoverColor="#6A515E"
        />

            <Form className="form">
                <Form.Group  >
                    <Form.Control type="text" placeholder="Search for your cat" id="input" onChange={(e) => handleSearchName(e)} />
                </Form.Group>
                
            </Form>
        </Navbar>
    )
}

export default Search
