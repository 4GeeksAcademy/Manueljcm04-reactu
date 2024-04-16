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
				<div className="row mt-4 justify-content-between mb-5">
					<Card title="Card 1" description="Card 1 description" button="Button 1"/>
					<Card title="Card 2" description="Card 2 description" button="Button 2"/>
					<Card title="Card 3" description="Card 3 description" button="Button 3"/>
					<Card title="Card 4" description="Card 4 description" button="Button 4"/>
				</div>
				
			</div>
			<Footer />
		</div>
	);
};

export default Home;
