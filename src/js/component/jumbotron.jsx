import React from "react";
const Jumbotron = () => {

    return (
        <div className="jumbotron bg-secondary border rounded mx-5 py-2" style={{minHeight:"300px"}}>
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ratione nobis ducimus nemo. Enim quos possimus vero, id magnam necessitatibus facilis ipsum perfer.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
        </div>
    );
};

export default Jumbotron;