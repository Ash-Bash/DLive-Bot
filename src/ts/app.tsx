import * as React from "react";

// Custom Components
import { NavigationBar } from "./components/items/navigationbar";
import { SplitView } from "./components/splitview";

export class App extends React.Component {
    render() {
        return <div>
            <NavigationBar />
            <SplitView />
        </div>;
    }
}