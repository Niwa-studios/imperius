import React, { ReactNode } from "react";

interface SectionLinkProps {
	href: string;
	children: ReactNode;
	className?: string;
}

function SectionLink({ href, children, className }: SectionLinkProps) {
	function scrollToSection(sectionId: string) {
		const section = document.getElementById(sectionId);

		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	}

	return (
		<button className={className} onClick={() => scrollToSection(href)}>
			{children}
		</button>
	);
}

export default SectionLink;
