import * as React from "react";
import { Alert } from 'reactstrap';

export interface DonationBoxProps { avatar: string; displayname: string; donationType: string; numbOf: Number }

export class DonationBox extends React.Component<DonationBoxProps, {}> {

    constructor(props: any){
        super(props);
    }

    render() {

        var donationMessages = [
            " Has Just Donated " + this.props.numbOf + " 🍋 LEMON 🍋",
            " Has Just Donated " + this.props.numbOf + " 🍦 ICE CREAM 🍦",
            " Has Just Donated " + this.props.numbOf + " 💎 DIAMOND 💎",
            " Has Just Donated " + this.props.numbOf + " 🚗 NINJAGHINI 🚗",
            " Has Just Donated " + this.props.numbOf + " ✈️ NINJET ✈️"
        ]

        var donationIndex = 0;

        if (this.props.donationType == "lemon") {
            donationIndex = 0;
        } else if (this.props.donationType == "ice_cream") {
            donationIndex = 1;
        }  else if (this.props.donationType == "diamond") {
            donationIndex = 2;
        }  else if (this.props.donationType == "ninjaghini") {
            donationIndex = 3;
        }  else if (this.props.donationType == "ninjet") {
            donationIndex = 4;
        } 

        return <Alert className="messageContainer" color="warning">
            <div className="message image_container">
                <img src={this.props.avatar} width={26} height={26} />
            </div>
            <div className="message message_content">
                <span>{this.props.displayname}</span>
                {donationMessages[donationIndex]}
            </div>
        </Alert>;
    }
}