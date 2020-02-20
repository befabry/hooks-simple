import React, { useState } from "react";

const App = () => {
    const [resource, setResource] = useState("posts");
    /*
    const [currentValue, setCurrentValue] = useState(initialValue);
    currentValue => Same as this.state.resource
    setCurrentValue => Same as this.setState({resource: "posts"})
    initialValue => Same as state = { resource: "posts" }
    */
    return (
        <div>
            <div>
                <button onClick={() => setResource("posts")}>Posts</button>
                <button onClick={() => setResource("todos")}>Todos</button>
            </div>
            {resource}
        </div>
    );
};

export default App;
