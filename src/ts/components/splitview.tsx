import * as React from "react";
var classNames = require('classnames');
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faSpeakap } from '@fortawesome/free-brands-svg-icons';
import { faCog, faHome, faUser, faUsers, faCommentAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge  } from 'reactstrap';

// custom components
import { Chat } from './Chat/index';


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

interface IState {
    selectedIndex: number;
}

export class SplitView extends React.Component<any, IState> {

    constructor(props: any){
        super(props);

        this.state = {
            selectedIndex: 0
        }
        this.selectedListItem.bind(this);
    }

    selectedListItem(index: any) {
        this.setState({selectedIndex: index});
    }

    itemIsActive(index: any) {
        var isActive : boolean = false;
        if (this.state.selectedIndex == index) {
            isActive = true;
        } else if (this.state.selectedIndex == index) {
            isActive = true;
        }  else if (this.state.selectedIndex == index) {
            isActive = true;
        }  else if (this.state.selectedIndex == index) {
            isActive = true;
        }  else if (this.state.selectedIndex == index) {
            isActive = true;
        } 
        
        return isActive;
    }

    render() {

        var views = [
            <div />,
            <Chat title="Test 2" />,
            <div />,
            <div />,
            <div />,
        ];

        return (
        <Container style={ containerStyle }>
            <Row className="absolute fullHeightExcludeBar" style={ rowStyle }>
                <Col xs="3" className="bg-sidebar" style={ sidebarStyle }>
                <ListGroup flush>
                    <ListGroupItem key="0" className={classNames({ 'bg-sidebar': true, 'active': this.itemIsActive(0) })} tag="button" action onClick={ () => this.selectedListItem(0) }><FontAwesomeIcon icon={ faHome } />   Home</ListGroupItem>
                    <ListGroupItem key="1" className={classNames({ 'bg-sidebar': true, 'active': this.itemIsActive(1) })} tag="button" action onClick={ () => this.selectedListItem(1) }><FontAwesomeIcon icon={ faCommentAlt } /> Chat <Badge className="right" pill>99+</Badge></ListGroupItem>
                    <ListGroupItem key="2" className={classNames({ 'bg-sidebar': true, 'active': this.itemIsActive(2) })} tag="button" action onClick={ () => this.selectedListItem(2) }><FontAwesomeIcon icon={ faUsers } />  Users <Badge className="right" pill>14</Badge></ListGroupItem>
                    <ListGroupItem key="3" className={classNames({ 'bg-sidebar': true, 'active': this.itemIsActive(3) })} tag="button" action onClick={ () => this.selectedListItem(3) }><FontAwesomeIcon icon={ faCode } />  Commands</ListGroupItem>
                    <ListGroupItem key="4" className={classNames({ 'bg-sidebar': true, 'active': this.itemIsActive(4) })} tag="button" action onClick={ () => this.selectedListItem(4) }><FontAwesomeIcon icon={ faCog } />  Settings</ListGroupItem>
                </ListGroup>
                <span></span>
                <ListGroup flush>
                    
                </ListGroup>
                </Col>
                <Col className="contentView">
                    { views[this.state.selectedIndex] }
                </Col>
            </Row>
        </Container>
      );
    }
  }