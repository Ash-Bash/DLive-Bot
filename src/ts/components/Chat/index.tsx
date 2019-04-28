import * as React from "react";
import { Button } from 'reactstrap';

// Custom Components
import { MessageBox } from './message';

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
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                    <MessageBox alertType="secondary" avatar="http://alanbetts.com/image/1/1200/0/uploads/earth-1278686566.jpg" displayname="TestUser" content="Hello, World!!" />
                </div>
                <div className="chatInput">
                    <textarea className="chatInputItem" value="Test Input"/>
                    <Button className="chatInputItem button" color="secondary">Send</Button>
                </div>
            </div>
        </div>;
    }
}