import * as React from "react";
import { Button } from 'reactstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCog, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// Custom Components
import { MessageBox } from './message';
import { DonationBox } from './donation';
import { FollowedBox } from './followed';
import { SubscribedBox } from './subscribed';

export interface ChatProps { title: string; }

export class Chat extends React.Component<ChatProps, {}> {

    constructor(props: any){
        super(props);
    }

    render() {
        return <div className="view chat">
            <div className="chatContainer">
                <div className="scrollview chatContent">
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <DonationBox avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" donationType="lemon" numbOf={1} /> 
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <DonationBox avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" donationType="lemon" numbOf={1} /> 
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <DonationBox avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" donationType="ice_cream" numbOf={1} /> 
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <DonationBox avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" donationType="diamond" numbOf={1} /> 
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <DonationBox avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" donationType="ninjaghini" numbOf={1} /> 
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <DonationBox avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" donationType="ninjet" numbOf={1} /> 
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <FollowedBox avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser"/>
                    <FollowedBox avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser"/>
                    <FollowedBox avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser"/>
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <SubscribedBox avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser"/>
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                </div>
                <div className="chatInput">
                    <textarea className="chatInputItem" value="Test Input"/>
                    <Button className="chatInputItem button" color="secondary"><FontAwesomeIcon icon={ faPaperPlane } /></Button>
                </div>
            </div>
        </div>;
    }
}