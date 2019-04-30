import * as React from "react";
import { Alert } from 'reactstrap';

export interface SubscribedBoxProps { avatar: string; displayname: string;}

export class SubscribedBox extends React.Component<SubscribedBoxProps, {}> {

    constructor(props: any){
        super(props);
    }

    render() {

        return <Alert className="messageContainer" color="primary">
            <div className="message image_container">
                <img src={this.props.avatar} width={26} height={26} />
            </div>
            <div className="message message_content">
                <span>{this.props.displayname}</span>
                Has Just  🎉 Subscribed 🎉
            </div>
        </Alert>;
    }
}