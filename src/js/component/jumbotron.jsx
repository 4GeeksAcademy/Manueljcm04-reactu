import React from "react";
const Jumbotron = () => {

    return (
        <div className="jumbotron bg-secondary border rounded mb-4 p-4" style={{minHeight:"300px"}}>
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse accusantium enim. Natus, nulla assumenda, eius aperiam officia nobis cumque doloribus, quis laborum labore debitis ipsum deserunt eum. Voluptate, provident.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
        </div>
    );
};

export default Jumbotron;