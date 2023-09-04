import React, { lazy, Suspense } from "react";
import "./styles.css";

const FirstApp = lazy(() => import("host_app_react/app"));

const App = () => {
    const [name, setName] = React.useState(null);

    return (
        <div className="App">
            <h1>React Micro Client</h1>
            <h2>Micro host app is integrated here</h2>
            { name ? <p>Your name is: {name}</p> : null }
            <div>
                <Suspense fallback={<span>Loading...</span>}>
                    <FirstApp onChange={(e) => setName(e.target.value)} />
                </Suspense>
            </div>
        </div>
    );
};

export default App;