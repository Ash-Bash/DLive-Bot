import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faSpeakap } from '@fortawesome/free-brands-svg-icons';
import { faCog, faHome, faUser, faUsers, faCommentAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge  } from 'reactstrap';


const containerStyle = {
    margin: '0px',
    padding: '0px',
    minWidth: '100%',
}

const rowStyle = {
    padding: '0px',
    margin: '0px',
    minWidth: '100%'
}

const sidebarStyle = {
    padding: '0px',
    margin: '0px'
}

export class SplitView extends React.Component {

    render() {
      return (
        <Container style={ containerStyle }>
            <Row className="absolute fullHeightExcludeBar" style={ rowStyle }>
                <Col xs="3" className="bg-sidebar" style={ sidebarStyle }>
                <ListGroup flush>
                    <ListGroupItem className="bg-sidebar" active tag="button" action><FontAwesomeIcon icon={ faHome } />   Home</ListGroupItem>
                    <ListGroupItem className="bg-sidebar" tag="button" action><FontAwesomeIcon icon={ faCommentAlt } /> Chat <Badge className="right" pill>99+</Badge></ListGroupItem>
                    <ListGroupItem className="bg-sidebar" tag="button" action><FontAwesomeIcon icon={ faUsers } />  Users <Badge className="right" pill>14</Badge></ListGroupItem>
                    <ListGroupItem className="bg-sidebar" tag="button" action><FontAwesomeIcon icon={ faCode } />  Commands</ListGroupItem>
                    <ListGroupItem className="bg-sidebar" tag="button" action><FontAwesomeIcon icon={ faCog } />  Settings</ListGroupItem>
                </ListGroup>
                <span></span>
                <ListGroup flush>
                    
                </ListGroup>
                </Col>
                <Col> Content View</Col>
            </Row>
        </Container>
      );
    }
  }