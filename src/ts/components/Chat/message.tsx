import * as React from "react";
import { Alert } from 'reactstrap';

export interface MessageBoxProps { alertType: string; avatar: string; displayname: string; content: string; }

export class MessageBox extends React.Component<MessageBoxProps, {}> {

    constructor(props: any){
        super(props);
    }

    render() {
        return <Alert className="messageContainer" color={this.props.alertType}>
            <div className="message image_container">
                <img src={this.props.avatar} width={26} height={26} />
            </div>
            <div className="message message_content">
                <span>{this.props.displayname}</span>
                {': '}
                {this.props.content}
            </div>
        </Alert>;
    }
}