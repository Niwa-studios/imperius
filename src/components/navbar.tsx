import React from "react";
import SectionLink from "./section-link";

function Navbar() {
	return (
		<nav className="flex items-center justify-between py-[18px] px-[5.5%] nav-bg">
			<div>
				<img src="/logo.svg" alt="Imperius" />
			</div>
			<ul className="hidden gap-6 px-8 py-3 bg-submenuBg rounded-[100px] border border-[rgba(255,255,255,0.1)] lg:flex">
				<li className="text-white text-base tracking-[-0.5px]">
					<SectionLink href="home">Home</SectionLink>
				</li>
				<li className="text-white text-base tracking-[-0.5px]">
					<SectionLink href="key-features">Key Features</SectionLink>
				</li>
				<li className="text-white text-base tracking-[-0.5px]">
					<SectionLink href="how-it-works">How it Works</SectionLink>
				</li>
				<li className="text-white text-base tracking-[-0.5px]">
					<SectionLink href="use-cases">Use Cases</SectionLink>
				</li>
				<li className="text-white text-base tracking-[-0.5px]">
					<SectionLink href="faq">FAQ</SectionLink>
				</li>
			</ul>
			<a href="https://app.imperiusai.io" target="_blank" className="bg-[#04B6B6] text-white text-base tracking-[-0.5px] font-bold py-3 px-6 rounded-[100px]">
				Imperius
			</a>
		</nav>
	);
}

export default Navbar;
