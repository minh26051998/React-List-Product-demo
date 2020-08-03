import React, { Component } from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Col, Row
  } from 'reactstrap';

export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [{
                "id": "8fe297e7-2e13-4f2d-ab95-85ad2c044ef7",
                "name": "Fish - Soup Base, Bouillon",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "descreption": "odio cras mi pede malesuada"
              }, {
                "id": "8e28eada-7de0-4621-9bf5-024231c0aa80",
                "name": "Oil - Cooking Spray",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff",
                "descreption": "ac tellus semper interdum mauris"
              }, {
                "id": "7e3c73f6-ff1a-4f20-9f72-dd80065b31fd",
                "name": "Milk - Chocolate 250 Ml",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff",
                "descreption": "id luctus nec molestie sed"
              }, {
                "id": "a4659774-cbd9-4bbc-b9d4-3cd4e3b02bf9",
                "name": "Tea - Mint",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff",
                "descreption": "ligula in lacus curabitur at"
              }, {
                "id": "e031a27b-e982-429b-a73e-a12452713bd3",
                "name": "Juice - Tomato, 48 Oz",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff",
                "descreption": "odio justo sollicitudin ut suscipit"
              }, {
                "id": "934a7b69-fb6b-43c1-bd18-aa93e5bbfd49",
                "name": "Dry Ice",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000",
                "descreption": "sociis natoque penatibus et magnis"
              }, {
                "id": "2cb01073-ac8a-42eb-b77a-71197c164a2f",
                "name": "Bread Roll Foccacia",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff",
                "descreption": "phasellus in felis donec semper"
              }, {
                "id": "afa75cec-23c2-487a-8029-e19229adf544",
                "name": "Water Chestnut - Canned",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "descreption": "ultrices posuere cubilia curae nulla"
              }, {
                "id": "b16032f6-e9aa-4c7a-997e-89e5abb3ae3c",
                "name": "Truffle Cups Green",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff",
                "descreption": "vestibulum proin eu mi nulla"
              }, {
                "id": "bdc1bf69-5a9d-4277-af09-20b8c69bbc25",
                "name": "Pepper - Paprika, Hungarian",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "descreption": "sapien cursus vestibulum proin eu"
              }, {
                "id": "126e599f-7382-48e7-a6ae-5e3ac87fe521",
                "name": "Zucchini - Green",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff",
                "descreption": "aliquet ultrices erat tortor sollicitudin"
              }, {
                "id": "4b00ceca-d702-413b-a453-1b0c451c4475",
                "name": "Bread - Onion Focaccia",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff",
                "descreption": "consectetuer adipiscing elit proin interdum"
              }, {
                "id": "74b8fadb-62bb-44ed-b620-f1601c67e851",
                "name": "Wine - Alsace Gewurztraminer",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff",
                "descreption": "eget eleifend luctus ultricies eu"
              }, {
                "id": "5f39c856-8528-406a-818f-db1a26f3add5",
                "name": "Rice Wine - Aji Mirin",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff",
                "descreption": "neque sapien placerat ante nulla"
              }, {
                "id": "abf008d4-21b9-4a69-b2db-47458b0a0465",
                "name": "Pastry - Cheese Baked Scones",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "descreption": "lacinia nisi venenatis tristique fusce"
              }, {
                "id": "c5eb1703-5e45-4109-8250-ca054c95c3b0",
                "name": "Cheese - Ricotta",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff",
                "descreption": "quisque ut erat curabitur gravida"
              }, {
                "id": "25977302-1471-4b0f-a79e-e1a2391277c3",
                "name": "Cakes Assorted",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff",
                "descreption": "nunc viverra dapibus nulla suscipit"
              }, {
                "id": "89f33e23-1484-4f35-9102-fe27a0e6a587",
                "name": "Potatoes - Parissienne",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff",
                "descreption": "suscipit ligula in lacus curabitur"
              }, {
                "id": "0d0de986-9e31-470b-80da-3de3c0741f2f",
                "name": "Ginger - Ground",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000",
                "descreption": "nunc viverra dapibus nulla suscipit"
              }, {
                "id": "e61167d1-4a52-443e-897b-d7d9b9e39ed6",
                "name": "Bread - Triangle White",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff",
                "descreption": "odio justo sollicitudin ut suscipit"
              }]
        }
    }
    render() {
        const { products } = this.state;
        return (
            <Container>
                <h2>Products</h2>
                <Row> 
                    { products.map(product => (
                        <Col sm="3">
                        <Card>
                            <CardImg top width="100%" src={product.imageUrl} />
                            <CardBody>
                            <CardTitle>{product.name}</CardTitle>
                            <CardText>{product.descreption}</CardText>
                            <Button>Add to Cart</Button>
                            </CardBody>
                        </Card>
                        </Col>
                        ))}
                </Row>
            </Container>
          );
    }
}