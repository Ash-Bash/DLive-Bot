import * as React from "react";
import { Alert } from 'reactstrap';

export interface FollowedBoxProps { avatar: string; displayname: string;}

export class FollowedBox extends React.Component<FollowedBoxProps, {}> {

    constructor(props: any){
        super(props);
    }

    render() {

        return <Alert className="messageContainer" color="success">
            <div className="message image_container">
                <img src={this.props.avatar} width={26} height={26} />
            </div>
            <div className="message message_content">
                <span>{this.props.displayname}</span>
                Has Just 👏 Followed 👏
            </div>
        </Alert>;
    }
}