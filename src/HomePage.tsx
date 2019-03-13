import React, { FormEvent, HTMLAttributes, useState } from "react"
import thorArm from "./thor.jpg"
import { RouteComponentProps } from "@reach/router"
import { CallToAction, HammerLoader, PageTitle, Spacer } from "./random"




export interface HomePageProps extends HTMLAttributes<HTMLDivElement>, RouteComponentProps
{

}


export function HomePage( { navigate, location, style = {}, className = "", children, ...props }: HomePageProps )
{
	const [ repoName, setRepoName ] = useState( "" ),
	      [ loading, setLoading ]   = useState( false )
	
	
	function handleSubmit( e: FormEvent<HTMLFormElement> )
	{
		e.preventDefault()
		setLoading( true )
		setTimeout( _ => {
			switch ( repoName ) {
				
				case "my-secret-free-repo":
					navigate!( "/success" )
					break;
				
				default:
					navigate!( "/fail" )
					break;
			}
		}, 3000 )
	}
	
	
	return (
		<div
			{...props}
			style={{ ...style }}
			className={`${className} HomePage `}
		>
			
			{
				loading ?
				<>
					<HammerLoader/>
				</> :
				<main
					className="w-full text-center px-4 "
					style={{ paddingBottom: "25vh" }}
				>
					<header>
						<img
							className="pb-2"
							src={thorArm}
							alt="Thor showing off his hammer as a godsend"
						/>
						<PageTitle>
							Are you worthy
						</PageTitle>
					</header>
					
					<Spacer className="pt-6"/>
					
					<form
						onSubmit={handleSubmit}
						className="max-w-lg mx-auto pt-6"
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
						
						<Spacer className="pt-10"/>
						
						<CallToAction
							disabled={!repoName}
						>
							Take the test
						</CallToAction>
					</form>
				</main>}
		</div>
	)
}