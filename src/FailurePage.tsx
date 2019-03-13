import React, { HTMLAttributes } from "react"
import { Link, RouteComponentProps } from "@reach/router"
import unhappyThorImage from "./thor-fail.jpg"
import { CallToAction, Spacer } from "./random"




export interface FailurePageProps extends HTMLAttributes<HTMLDivElement>, RouteComponentProps
{

}


export function FailurePage( { navigate, location, style = {}, className = "", children, ...props }: FailurePageProps )
{
	
	return (
		<div
			{...props}
			style={{ ...style }}
			className={`${className} FailurePage text-center`}
		>
			<img
				className="rounded"
				src={unhappyThorImage}
				alt="Thor is not happy with your results"
			/>
			<Spacer className="pt-4"/>
			
			<div className="text-center text-xl">Dude... you got like... 3 secrets...</div>
			
			<Spacer className="pt-6"/>
			
			<Link to="/">
				<CallToAction>Fix it and try again</CallToAction>
			</Link>
		</div>
	)
}