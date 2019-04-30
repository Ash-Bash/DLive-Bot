import * as React from "react";

// Custom Components
import { NavigationBar } from "./components/items/navigationbar";
import { SplitView } from "./components/splitview";
import { Popup } from "./components/popup/index";

export class App extends React.Component {
    render() {
        return <div>
            <NavigationBar />
            <SplitView />
            <Popup isOpen={true} component={null} />
        </div>;
    }
}