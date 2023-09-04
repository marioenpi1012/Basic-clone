import React from "react";
import {
	ButtonOrLink,
	Props as ButtonOrLinkProps,
} from "@/components/Elements/ButtonOrLink";
import { twMerge } from "tailwind-merge";

const variants = {
	primary:
		"uppercase uppercase bg-transparent button-animation border rounded-full",
	text: "uppercase",
};

const sizes = {
	sm: "py-2 px-4 text-sm ",
	md: "py-2 px-6 text-md",
	lg: "py-3 px-8 text-lg",
};
interface ButtonProps extends ButtonOrLinkProps {
	variant?: keyof typeof variants;
	size?: keyof typeof sizes;
}

export const Button: React.FC<ButtonProps> = ({
	variant = "primary",
	size = "md",
	className = "",
	...props
}) => {
	return (
		<ButtonOrLink
			className={twMerge(
				"text-current inline-flex items-center relative overflow-hidden font-semibold disabled:opacity-75 disabled:cursor-not-allowed ",
				variants[variant],
				sizes[size],
				className
			)}
			{...props}
		/>
	);
};
