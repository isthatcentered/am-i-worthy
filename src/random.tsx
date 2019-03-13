import React, { ButtonHTMLAttributes, HTMLAttributes } from "react"
import hammer from "./hammer.jpg"




export interface CallToActionProps extends ButtonHTMLAttributes<HTMLButtonElement>
{
}


export function CallToAction( { disabled, style = {}, className = "", children, ...props }: CallToActionProps )
{
	
	return (
		<button
			{...props}
			className={`${className} ActionButton _brand py-5 px-6 rounded-lg text-lg text-white uppercase`}
			disabled={disabled}
			style={{
				...style,
				background: disabled ?
				            "#b8c2cc" :
				            "purple",
			}}
		>
			{children}
		</button>
	)
}


export interface PageTitleProps extends HTMLAttributes<HTMLDivElement>
{

}


export function PageTitle( { style = {}, className = "", children, ...props }: PageTitleProps )
{
	
	return (
		<h1
			{...props}
			style={{ ...style }}
			className={`${className} PageTitle _brand uppercase text-5xl`}
		>
			{children}
		</h1>
	)
}


export interface HammerLoaderProps extends HTMLAttributes<HTMLDivElement>
{

}


export function HammerLoader( { style = {}, className = "", children, ...props }: HammerLoaderProps )
{
	
	return (
		<div
			{...props}
			style={{ ...style }}
			className={`${className} HammerLoader`}
		>
			<img
				width={100}
				className="hammer-loader"
				src={hammer}
				alt="Thor's Hammer"
			/>
		</div>
	)
}


export interface SpacerProps extends HTMLAttributes<HTMLDivElement>
{

}


export function Spacer( { style = {}, className = "", children, ...props }: SpacerProps )
{
	return (
		<div
			{...props}
			style={{ ...style }}
			className={`${className} Spacer`}
		/>)
}
