import React, { FormEvent, useState } from "react";
// import logo from './logo.svg';
import thorArm from "./thor.jpg"
import hammer from "./hammer.jpg"




function App()
{
	const [ repoName, setRepoName ] = useState( "" ),
	      [ loading, setLoading ]   = useState( false )
	
	
	function handleSubmit( e: FormEvent<HTMLFormElement> )
	{
		e.preventDefault()
		setLoading( true )
		setTimeout( _ => setLoading( false ), 3000 )
		
	}
	
	
	return (
		<div className="App min-h-screen flex justify-center items-center">
			
			{
				loading ?
				<>
					<img
						width={100}
						className="hammer-loader"
						src={hammer}
						alt="Thor's Hammer"
					/>
				</> :
				<main
					className="w-full text-center px-4 "
					style={{ paddingBottom: "25vh" }}
				>
					<img
						className="pb-2"
						src={thorArm}
						alt="THor's hammer"
					/>
					<h1 className="_brand uppercase text-5xl">Are you worthy</h1>
					<div className="pt-6"/>
					<form
						onSubmit={handleSubmit}
						className="max-w-lg mx-auto"
					>
						<label className="block relative">
							<style>
								{`
								.lkjhg:focus {
									border-color: purple;
								}
								
								.lkjhg:focus + i {
									color: purple !important;
								}
								`}
							</style>
							<input
								className="lkjhg shadow-md rounded-lg w-full px-4 border-4 border-grey text-3xl focus:shadow-purple-outline outline-none "
								style={{ height: "80px" }}
								type="text"
								placeholder="my-git-repo-name"
								onChange={e => setRepoName( e.target.value )}
							/>
							<i
								className="fab fa-github absolute pin-r pin-t block text-5xl text-grey-light h-full flex items-center px-4"
								title="Github icon"
							/>
						</label>
						<div className="pt-10"/>
						<button
							className={`_brand py-5 px-6  rounded-lg text-lg text-white uppercase`}
							disabled={!repoName}
							style={{
								background: repoName ?
								            "purple" :
								            "#b8c2cc",
							}}
						>
							Take the test
						</button>
					</form>
				</main>}
		</div>
	);
}


export default App;
