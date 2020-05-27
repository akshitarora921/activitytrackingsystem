import React, { Component, useState } from "react";
import userData from "../data/test.json";
import { Link } from "react-router-dom";
import image from "../img/user.png";
import "./users.css";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";

class Users extends Component {
  state = {
    users: userData.members,
    currentUser: null,
    show: false,
    calanderDate: new Date(),
  };
  componentDidMount() {
    this.setState({
      users: userData.members,
      currentUser: null,
      show: false,
    });
  }
  render() {
    const { users, currentUser, calanderDate } = this.state;
    var activityCount = 0;
    console.log(users);

    const handleClose = () => {
      this.setState({
        show: false,
        currentUser: null,
      });
    };
    const handleChange = (e) => {
      // console.log(Date.(e.target.value));
      this.setState({
        calanderDate: e.target.value,
      });
    };
    const handleShow = (user) => {
      {
        this.setState({
          show: true,
          currentUser: user,
        });
      }
    };
    return (
      <>
        {/* Modal starts */}
        <Modal show={this.state.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {currentUser == null ? "" : currentUser.real_name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Location: {currentUser == null ? "" : currentUser.tz}
            <br />
            <br />
            Filter:
            <input type="date" id="input_date" onChange={handleChange}></input>
            <br />
            <h4>
              {new Date(calanderDate).toString().slice(0, -39) ===
              new Date().toString().slice(0, -39)
                ? "Today Activities"
                : `${new Date(calanderDate)
                    .toString()
                    .slice(3, -39)} Activities`}
            </h4>
            {currentUser == null
              ? ""
              : currentUser.activity_periods.map((activity, id) => {
                  return (
                    <p key={id}>
                      {new Date(calanderDate).toString().slice(0, -39) ===
                      new Date(activity.start_time.slice(0, -2))
                        .toString()
                        .slice(0, -39)
                        ? activity.start_time.slice(-7) +
                          " - " +
                          activity.end_time.slice(-7)
                        : ""}
                    </p>
                  );
                })}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
        {/* Modal Ends */}
        <ul className="userlist">
          <h2 className="text-center mr-5">Users</h2>
          <Container className="mr-5">
            <Row>
              {users.map((user, id) => {
                return (
                  <Col key={user.id} className="user">
                    <Card
                      style={{ width: "20rem" }}
                      onClick={() => handleShow(user)}
                    >
                      <Card.Img
                        height="100px"
                        width="25px"
                        variant="top"
                        src={image}
                      />
                      <Card.Body>
                        <Card.Title>{user.real_name}</Card.Title>
                        <Card.Text>{user.tz}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </ul>
      </>
    );
  }
}

export default Users;
