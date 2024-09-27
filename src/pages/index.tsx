import Feature from "@/components/feature";
import HowItWorksSlider from "@/components/how-it-works-slider";
import MainLayout from "@/components/layout/main-layout";
import LogoSlider from "@/components/logo-slider";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Home() {
	const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

	const handleToggleAccordion = (accordionId: number) => {
		setSelectedFaq((prevOpen) => {
			if (prevOpen === accordionId) {
				return null;
			} else {
				return accordionId;
			}
		});
	};

	const featureData = [
		{
			title: "Decentralized Resilience",
			subtitle: "Self-Healing Mesh Architecture",
			description:
				"Imperius utilizes a decentralized mesh network, ensuring continuous operation through intelligent self-healing capabilities. This architecture maintains optimal performance even in the event of node failures.",
			mediaLink: "",
			extLink: "https://app.imperiusai.io",
			reverseOrder: false,
		},
		{
			title: "Cryptographic Privacy",
			subtitle: "Multi-Layered Encryption Protocol",
			description:
				"Our implementation of advanced onion routing technology encapsulates data in multiple encryption layers. This approach guarantees superior privacy and safeguards against sophisticated traffic analysis attempts.",
			mediaLink: "",
			extLink: "https://app.imperiusai.io",
			reverseOrder: true,
		},
		{
			title: "AI-Enhanced Scalability",
			subtitle: "Predictive Performance Optimization",
			description:
				"Imperius integrates cutting-edge AI algorithms to anticipate network demands and optimize resource allocation in real-time. This proactive approach ensures seamless scalability as your computational requirements evolve.",
			mediaLink: "",
			extLink: "https://app.imperiusai.io",
			reverseOrder: false,
		},
	];

	const faqData = [
		{
			id: 1,
			question: "What makes Imperius different from other blockchain platforms?",
			answer: "Imperius stands out through its unique combination of AI-driven scalability and advanced security measures. Our self-healing mesh architecture and onion routing protocol provide unparalleled resilience and privacy, while our AI constantly optimizes performance, ensuring efficient scaling as your needs grow.",
		},
		{
			id: 2,

			question: "How does Imperius ensure the privacy and security of my data?",
			answer: "Imperius employs a multi-layered approach to security. We use advanced onion routing technology, which encrypts data multiple times and sends it through various network nodes, making it extremely difficult to trace or intercept. Additionally, our decentralized architecture eliminates single points of failure, enhancing overall system security.",
		},
		{
			id: 3,

			question: "Can Imperius integrate with my existing blockchain projects?",
			answer: "Imperius is designed for seamless integration. Our platform supports various blockchain protocols and provides a comprehensive SDK, allowing developers to easily connect existing projects or build new ones within our ecosystem. Our flexible framework adapts to your specific requirements.",
		},
		{
			id: 4,

			question: "What kind of performance improvements can I expect with Imperius?",
			answer: "Performance improvements vary based on specific use cases, but our clients typically see significant enhancements in transaction speed, network resilience, and scalability. Our AI-driven optimization continuously fine-tunes the network, ensuring optimal performance even as demand fluctuates.",
		},
		{
			id: 5,

			question: "Is Imperius suitable for enterprise-level applications?",
			answer: "Absolutely. Imperius is built with enterprise needs in mind. Our platform offers the scalability, security, and reliability required for large-scale operations. We provide dedicated support for enterprise clients, including customized solutions and integration assistance to meet specific business requirements.",
		},
		{
			id: 6,

			question: "How does Imperius support developers?",
			answer: "We offer comprehensive support for developers, including detailed documentation, SDKs, and APIs. Our one-click deployment feature simplifies the process of setting up nodes and validators. Additionally, we provide a supportive community forum and direct technical assistance to help developers maximize the potential of our platform.",
		},
	];

	return (
		<MainLayout desc="Imperius delivers unparalleled decentralized computing solutions, prioritizing robust security and efficient scalability. Our platform empowers users to deploy sophisticated projects while maintaining complete control through advanced onion routing protocols.">
			<main className="bg-[#020C0C] pb-[104px]">
				<header className="hero-bg" id="home">
					<Navbar />
					<div className="relative">
						<div className="hidden absolute top-0 left-[22px] right-0 w-[95%] lg:block">
							<img src="/svgs/hero-hud-up.svg" />
						</div>
						<div className="flex flex-col-reverse px-[6%] py-14 justify-between items-center lg:flex-row">
							<div className="flex flex-col gap-6 max-w-unset lg:max-w-[35%]">
								<h1 className="text-[24px] leading-[36px] tracking-[-0.5px] text-white font-medium lg:text-[48px] lg:leading-[72px] ">
									Imperius: Pioneering AI-Driven Blockchain Scalability
								</h1>
								<p className="text-base text-[rgba(255,255,255,0.8)] tracking-[-0.5px]">
									Imperius delivers unparalleled decentralized computing solutions, prioritizing
									robust security and efficient scalability. Our platform empowers users to deploy
									sophisticated projects while maintaining complete control through advanced onion
									routing protocols.
								</p>
								<a href="https://app.imperiusai.io" target="_blank" className="bg-[#04B6B6] text-white text-base tracking-[-0.5px] font-bold py-3 px-6 rounded-[100px] w-fit">
									Explore Imperius
								</a>
							</div>
							<div className="relative max-w-[684px] my-14">
								<video loop muted autoPlay playsInline width="100%" height="100%" controls={false}>
									<source src={"/videos/Rtxfinal_2.mp4"} type="video/mp4" />
								</video>
								{/* <img src="/imgs/imperius-filter.png" alt="Imperius" /> */}
								<div className="bg-[#04B6B6] absolute top-0 left-0 right-0 z-[2]"></div>
							</div>
						</div>
						<div className="hidden absolute bottom-[-26px] left-0 right-0 w-full lg:block">
							<img src="/svgs/hero-hud-down.svg" />
						</div>
					</div>
					<div className="logo-slider-overlay flex flex-col w-full">
						<h3 className="text-base tracking-[-0.5px] text-white text-center w-fit self-center mr-20">
							Projects Integrated into the Imperius Ecosystem
						</h3>
						<div>
							<LogoSlider />
						</div>
					</div>
				</header>
				<section id="key-features" className="px-[3%] lg:px-[100px]">
					<h1 className="text-[32px] leading-[48px] text-[#04B6B6] font-bold mt-[100px] mb-6">
						Key Features
					</h1>
					<div className=" flex flex-col gap-[200px]">
						{featureData.map((feature, idx) => (
							<Feature
								key={idx}
								title={feature.title}
								subtitle={feature.subtitle}
								description={feature.description}
								mediaLink={feature.mediaLink}
								extLink={feature.extLink}
								reverseOrder={feature.reverseOrder}
							/>
						))}
					</div>
				</section>
				<section className="hero-bg relative py-[114px] mt-[250px]" id="how-it-works">
					<div className="absolute top-0 left-0 right-0 w-full">
						<img src="/svgs/hero-hud-up.svg" />
					</div>
					<div className="px-[3%] lg:px-[100px]">
						<div className="mb-[90px]">
							<h3 className="uppercase text-base tracking-[-0.5px] mb-2 text-white">how it works</h3>
							<h1 className="capitalize text-[32px] leading-[48px] text-[#04B6B6] mb-6 font-bold">
								Streamlined Decentralized Deployment
							</h1>
							<p className="text-xl leading-6 text-[rgba(255,255,255,0.7)]">
								Imperius transforms complex decentralized operations into streamlined processes:
							</p>
						</div>
						<div>
							<HowItWorksSlider />
						</div>
					</div>
					<div className="absolute bottom-0 left-0 right-0 w-full">
						<img src="/svgs/hero-hud-down.svg" />
					</div>
				</section>
				<section id="use-cases" className="my-[200px] usecases-container px-[3%] lg:px-[100px]">
					<div className="mb-[250px]">
						<div className="mb-[90px]">
							<h3 className="uppercase text-base tracking-[-0.5px] mb-2 text-white">use cases</h3>
							<h1 className="capitalize text-[32px] leading-[48px] text-[#04B6B6] mb-6 font-bold">
								Empowering Advanced Technological Solutions
							</h1>
							<p className="text-xl leading-6 text-[rgba(255,255,255,0.7)]">
								Discover how Imperius can revolutionize your operational paradigms:
							</p>
						</div>
						<div>
							{/* Grid */}
							<div className="flex flex-col gap-5 lg:flex-row">
								<div className="usecase-container backdrop-blur-lg group cursor-pointer hover:usecase-hover">
									<div className="w-full mx-auto duration-100 opacity-0 group-hover:opacity-100">
										<img src="/svgs/usecase-top-border.svg" alt="top border" className="w-full" />
									</div>
									<div>
										<div className="p-8 pt-[266px]">
											<h3 className="text-lg mb-4 text-white font-medium">
												Enterprise-Grade Solutions
											</h3>
											<p className="text-base tracking-[-0.5px] text-[rgba(255,255,255,0.7)]">
												Enhance data security and operational efficiency while reducing
												infrastructure costs. Ideal for large-scale data management and secure
												inter-departmental communications.
											</p>
										</div>
									</div>
								</div>
								<div className="usecase-container backdrop-blur-lg group cursor-pointer hover:usecase-hover">
									<div className="w-full duration-100 opacity-0 group-hover:opacity-100">
										<img src="/svgs/usecase-top-border.svg" alt="top border" className="w-full" />
									</div>
									<div>
										<div className="p-8 pt-[266px]">
											<h3 className="text-lg mb-4 text-white font-medium">
												Blockchain Development
											</h3>
											<p className="text-base tracking-[-0.5px] text-[rgba(255,255,255,0.7)]">
												Efficiently build, deploy, and scale blockchain applications. Provides
												robust infrastructure for cryptocurrencies, smart contracts, and
												decentralized applications (dApps).
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-5 mt-[31.5px] lg:flex-row">
								<div className="usecase-container backdrop-blur-lg group cursor-pointer hover:usecase-hover">
									<div className="w-full mx-auto duration-100 opacity-0 group-hover:opacity-100">
										<img src="/svgs/usecase-top-border.svg" alt="top border" className="w-full" />
									</div>
									<div>
										<div className="p-8 pt-[266px]">
											<h3 className="text-lg mb-4 text-white font-medium">
												Privacy-Centric Applications
											</h3>
											<p className="text-base tracking-[-0.5px] text-[rgba(255,255,255,0.7)]">
												Develop applications with uncompromising user privacy. Ensures data
												remains inviolable for all communication needs
											</p>
										</div>
									</div>
								</div>
								<div className="usecase-container backdrop-blur-lg group cursor-pointer hover:usecase-hover">
									<div className="w-full mx-auto duration-100 opacity-0 group-hover:opacity-100">
										<img src="/svgs/usecase-top-border.svg" alt="top border" className="w-full" />
									</div>
									<div>
										<div className="p-8 pt-[266px]">
											<h3 className="text-lg mb-4 text-white font-medium">
												High-Performance Compute Clusters
											</h3>
											<p className="text-base tracking-[-0.5px] text-[rgba(255,255,255,0.7)]">
												Access distributed GPU resources for AI, simulations, and rendering.
												Democratizes advanced computing securely.
											</p>
										</div>
									</div>
								</div>
								<div className="usecase-container backdrop-blur-lg group cursor-pointer hover:usecase-hover">
									<div className="w-full duration-100 opacity-0 group-hover:opacity-100">
										<img src="/svgs/usecase-top-border.svg" alt="top border" className="w-full" />
									</div>
									<div>
										<div className="p-8 pt-[266px]">
											<h3 className="text-lg mb-4 text-white font-medium">
												IoT Network Management
											</h3>
											<p className="text-base tracking-[-0.5px] text-[rgba(255,255,255,0.7)]">
												Establish resilient, secure networks for IoT ecosystems. Ensures data
												integrity across extensive device networks.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<img src="/svgs/globe.svg" alt="Globe" className="animate-pulse" />
					</div>
				</section>
				<section id="faq" className="flex flex-col justify-between px-[3%] lg:px-[100px] lg:flex-row">
					<div className="max-w-full lg:max-w-[427px]">
						<div className="mb-12">
							<h2 className="text-[32px] leading-[48px] text-[#04B6B6] mb-4 font-medium">
								Frequently Asked Questions
							</h2>
							<p className="text-white text-base leading-[150%]">
								If you can{"'"}t find the answers you{"'"}re looking for here we{"'"}re always
								available. Try reaching us!
							</p>
						</div>
						<a
							href=""
							target="_blank"
							className="bg-[#04B6B6] text-white text-base tracking-[-0.5px] font-bold py-3 px-6 rounded-[100px] w-fit flex items-center gap-[17px]"
						>
							<span>Contact us</span>
							<span>
								<svg
									width="20"
									height="21"
									viewBox="0 0 20 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M5.21967 14.8926C5.51256 15.1855 5.98744 15.1855 6.28033 14.8926L13.5 7.67296V13.3623C13.5 13.7765 13.8358 14.1123 14.25 14.1123C14.6642 14.1123 15 13.7765 15 13.3623V5.8623C15 5.44809 14.6642 5.1123 14.25 5.1123H6.75C6.33579 5.1123 6 5.44809 6 5.8623C6 6.27652 6.33579 6.6123 6.75 6.6123H12.4393L5.21967 13.832C4.92678 14.1249 4.92678 14.5997 5.21967 14.8926Z"
										fill="white"
									/>
								</svg>
							</span>
						</a>
					</div>
					<div className="max-w-full mt-16 lg:mt-0 lg:max-w-[557px]">
						{faqData.map((faq, idx) => {
							return (
								<div key={idx} className="mb-12">
									<button
										onClick={() => handleToggleAccordion(faq.id)}
										className="mb-4 w-full items-center flex justify-between"
									>
										<h3 className="text-white">{faq.question}</h3>
										<div
											className={` duration-75 ${
												selectedFaq === faq.id ? "rotate-180" : "rotate-0"
											}`}
										>
											<svg
												width="18"
												height="18"
												viewBox="0 0 18 18"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M3.30124 6.56915C3.30124 6.43404 3.35101 6.29893 3.45768 6.19226C3.6639 5.98604 4.00524 5.98604 4.21146 6.19226L8.8479 10.8287C9.18924 11.17 9.7439 11.17 10.0852 10.8287L14.7217 6.19226C14.9279 5.98604 15.2692 5.98604 15.4755 6.19226C15.6817 6.39849 15.6817 6.73982 15.4755 6.94604L10.839 11.5825C10.4763 11.9452 9.98568 12.1514 9.46657 12.1514C8.94746 12.1514 8.45679 11.9523 8.09413 11.5825L3.45768 6.94604C3.35813 6.83938 3.30124 6.70426 3.30124 6.56915Z"
													fill="white"
												/>
											</svg>
										</div>
									</button>
									<div
										className={`duration-75 ${
											selectedFaq === faq.id ? "overflow-auto h-full" : "overflow-hidden h-0"
										}`}
									>
										<p
											className={`text-[rgba(255,255,255,0.6)] duration-75 ${
												selectedFaq === faq.id ? "overflow-auto h-full" : "overflow-hidden h-0"
											}`}
										>
											{faq.answer}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</main>
		</MainLayout>
	);
}
