import React from "react";
import BugForm from "./components/BugForm";
import BugList from "./components/BugList";

const App = () => (
    <div>
        <h1>Bug Tracker</h1>
        <BugForm />
        <BugList />
    </div>
);

export default App;
