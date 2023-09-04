import React, { lazy, Suspense } from "react";
import "./styles.css";

const Test = lazy(() => import("remote_app_react/test"));
// const HelloWorld = lazy(() => import("remote_app_vue/HelloWorld"));

export default function App({ onChange }) {
    return (
        <div className="MicroApp">
            <h1>React Micro Host</h1>
            <input onChange={onChange} type="text" placeholder="Enter your name" />
            <div>
                <Suspense fallback={<span>Loading...</span>}>
                    <Test />
                </Suspense>
            </div>
        </div>
    );
}