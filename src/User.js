import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

let fakeJsonData = "https://randomuser.me/api/?page=1&results=1&seed=abc";

const User = () => {
  const fetchDataFromAPI = async () => {
    const response = await axios.get(fakeJsonData);

    setUser(response.data.results[0]);
  };

  const [user, setUser] = useState(0);

  // console.log(user);

  const { gender, name, phone, picture } = user;

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    <>
      <Container>
        <Row className="containerRow">
          <Col>
            <Card style={{}} className="card">
              <Card.Body className="cardBody">
                <Card.Img variant="" src={picture?.large} className="cardImg" />
                <div className="layerDiv"></div>

                <div className="cardText">
                  <div className="otherDetails">
                    <p>{`${name?.first} ${name?.last}`}</p>
                    <p>{gender}</p>
                    <p>{phone}</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default User;
