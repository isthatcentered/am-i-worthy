import { CallToAction, PageTitle, Spacer } from "./random"
import thorSuccessImage from "./thor-success.jpg"
import React, { HTMLAttributes } from "react"
import { RouteComponentProps } from "@reach/router"




export interface SuccessPageProps extends HTMLAttributes<HTMLDivElement>, RouteComponentProps
{

}


export function SuccessPage( { navigate, location, style = {}, className = "", children, ...props }: SuccessPageProps )
{
	
	return (
		<div
			{...props}
			style={{ ...style }}
			className={`${className} SuccessPage text-center`}
		>
			<div className="text-center pb-2">Dude,</div>
			<PageTitle className="text-center">You are worthy</PageTitle>
			
			<Spacer className="pt-4"/>
			
			<img
				className="rounded"
				src={thorSuccessImage}
				alt="Thor is happy"
			/>
			
			<Spacer className="pt-6"/>
			
			<CallToAction>
				Add me to <span className="strikeout">valhalla</span> innersource
			</CallToAction>
		
		</div>
	)
}