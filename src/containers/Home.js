import React, { useState, useEffect } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);

    // // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    },[count]);

    return (
        <div>
            <h1>Home</h1>

            <h3>Test staate</h3>
            <div onClick={() => setCount(count + 1)}>increment</div>
            <div>count {count}</div>
        </div>
    )
};

export default Home;
