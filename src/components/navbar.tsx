import React, { useEffect } from "react";
import SectionLink from "./section-link";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<nav data-aos="fade-down" className="py-[21px] px-[5.5%] nav-bg w-full fixed z-[5] backdrop-blur-lg">
			<div className="flex items-center justify-between w-full">
				<div>
					<img src="/logo.svg" alt="Imperius" />
				</div>
				<ul className="hidden gap-6 px-8 py-3 bg-submenuBg rounded-[100px] border border-[rgba(255,255,255,0.1)] lg:flex">
					<li className="text-white text-base tracking-[-0.5px] duration-75 hover:text-[#04B6B6]">
						<SectionLink href="home">Home</SectionLink>
					</li>
					<li className="text-white text-base tracking-[-0.5px] duration-75 hover:text-[#04B6B6]">
						<SectionLink href="key-features">Key Features</SectionLink>
					</li>
					<li className="text-white text-base tracking-[-0.5px] duration-75 hover:text-[#04B6B6]">
						<SectionLink href="how-it-works">How it Works</SectionLink>
					</li>
					<li className="text-white text-base tracking-[-0.5px] duration-75 hover:text-[#04B6B6]">
						<SectionLink href="roadmap">Roadmap</SectionLink>
					</li>
					<li className="text-white text-base tracking-[-0.5px] duration-75 hover:text-[#04B6B6]">
						<SectionLink href="use-cases">Use Cases</SectionLink>
					</li>
					<li className="text-white text-base tracking-[-0.5px] duration-75 hover:text-[#04B6B6]">
						<SectionLink href="faq">FAQ</SectionLink>
					</li>
					
				</ul>
				<a
					href="https://app.imperiusai.io"
					target="_blank"
					className="bg-[#04B6B6] text-white text-base tracking-[-0.5px] font-bold py-3 px-6 rounded-[100px] duration-100 border border-[rgba(255,255,255,0.2)] button-hover"
				>
					Imperius
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
