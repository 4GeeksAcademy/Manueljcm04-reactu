import React from "react";
import NavBar from "./navbar";
import Card from "./card";
import Footer from "./footer";
import Jumbotron from "./jumbotron";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<div className="mt-4 container">
				<Jumbotron />
				<div className="mt-4 d-flex">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
