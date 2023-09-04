import { ComponentProps } from "react";
type ButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"a">;

export interface Props extends ButtonOrLinkProps {}

/* This is a base component that will render either a button or a link,
depending on the props that are passed to it. The link rendered CAN also correctly
get wrapped in a react-router link component to ensure ideal page-to-page transition.

*/

export const ButtonOrLink = ({ href, ...props }: Props) => {
	const isLink = typeof href !== "undefined";
	const ButtonOrLink = isLink ? "a" : "button";

	let content = <ButtonOrLink {...props} />;

	// if using react-router change the "a" tag to the "Link" tag
	if (isLink) {
		return <a href={href}>{content}</a>;
	}
	return content;
};
