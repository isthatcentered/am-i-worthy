import React from "react";
// import logo from './logo.svg';
import { Link, Router } from "@reach/router"
import { HomePage } from "./HomePage"
import { SuccessPage } from "./SuccessPage"
import { FailurePage } from "./FailurePage"
import thorFaceImg from "./thor-face.jpg"




function App()
{
	
	return (
		<>
			<nav className="p-4 absolute pin-l pin-t w-full">
				<Link to="/">
					<img
						className="opacity-25"
						width={50}
						src={thorFaceImg}
						alt="Thor's face untastily used as a logo"
					/>
				</Link>
			</nav>
			<main className="p-4 min-h-screen flex justify-center items-center">
				<Router>
					<HomePage path="/"/>
					<SuccessPage path="/success"/>
					<FailurePage path="/fail"/>
				</Router>
			</main>
		</>
	);
}


export default App;
