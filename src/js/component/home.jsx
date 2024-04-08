import React from "react";
import NavBar from "./navbar";
import Card from "./card";
import Footer from "./footer";
import Jumbotron from "./jumbotron";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		
		<div className="text-center">
			
			<NavBar />
			<Jumbotron />
			<div className="sm:flex-col d-flex  flex-row"> 
			<Card />
			<Card />
			<Card />
			<Card />
			</div>
			<Footer />
	</div>
	);
};

export default Home;
