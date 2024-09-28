import Feature from "@/components/feature";
import MainLayout from "@/components/layout/main-layout";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { featureData, faqData, buttonBase, dashboardFeatures } from "@/data";
import Roadmap from "@/components/roadmap";
import HowItWorks from "@/components/how-it-works";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
	const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

	useEffect(() => {
		AOS.init();
	}, []);



	const handleToggleAccordion = (accordionId: number) => {
		setSelectedFaq((prevOpen) => {
			if (prevOpen === accordionId) {
				return null;
			} else {
				return accordionId;
			}
		});
	};

	return (
		<MainLayout desc="Imperius delivers unparalleled decentralized computing solutions, prioritizing robust security and efficient scalability. Our platform empowers users to deploy sophisticated projects while maintaining complete control through advanced onion routing protocols.">
			<main className="bg-[#020C0C] pb-[104px]">
				<header className="hero-bg relative overflow-hidden" id="home">
					<img
						role="presentation"
						src="/imgs/light.png"
						className="mix-blend-color-dodge absolute top-0 right-0 z-0"
					/>
					<Navbar />
					<div className="relative z-[1]">
						<div className="relative pt-[211px]">
							<div className="flex flex-col pt-14 justify-between items-center">
								<div className="flex flex-col gap-6 px-[6%] max-w-unset text-center lg:max-w-[60%]">
									<h1 className="text-[24px] leading-[36px] tracking-[-0.5px] text-white font-medium lg:text-[48px] lg:leading-[72px] ">
										Imperius: Pioneering AI-Driven Blockchain Scalability
									</h1>
									<p className="text-base text-[rgba(255,255,255,0.8)] tracking-[-0.5px]">
										Imperius delivers unparalleled decentralized computing solutions, prioritizing
										robust security and efficient scalability. Our platform empowers users to deploy
										sophisticated projects while maintaining complete control through advanced onion
										routing protocols.
									</p>
									<a
										href="https://app.imperiusai.io"
										target="_blank"
										className={`${buttonBase} w-fit self-center`}
									>
										Explore Imperius
									</a>
								</div>
								<div className="relative max-w-[100%] mt-[128px]">
									<div className="absolute top-0 left-0 right-0 z-[3] w-full">
										<img src="/svgs/hero-hud-up.svg" />
									</div>
									<div className="relative">
										<div className="hero-video-container-overlay absolute top-0 w-full h-full z-[1]"></div>

										<video
											loop
											muted
											autoPlay
											playsInline
											width="100%"
											height="100%"
											controls={false}
										>
											<source src={"/videos/demo.mp4"} type="video/mp4" />
										</video>
										<div className="hero-video-overlay absolute top-0 w-full h-full z-[0]"></div>
									</div>
									<div className="absolute bottom-0 left-0 right-0 w-full">
										<img src="/svgs/hero-hud-down.svg" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
				<section id="key-features" className="px-[3%] pt-[56px] lg:px-[100px] relative">
					<div className="absolute h-28 left-0 feature-gradient-top top-0 w-[100%]"></div>
					<img
						role="presentation"
						src="/imgs/light.png"
						className="mix-blend-color-dodge absolute top-0 left-[-80px] z-0 max-w-[1100px]"
					/>
					<div className="pt-[100px] mb-6 relative z-[1]">
						<h5 className="text-base text-white mb-2">THE IMPERIUS ADVANTAGE</h5>
						<h1 className="text-[32px] leading-[48px] text-[#04B6B6] font-bold">
							Cutting-Edge Decentralized Architecture
						</h1>
					</div>

					<div className=" flex flex-col gap-[200px] relative z-[1]">
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
					<img
						role="presentation"
						src="/imgs/light.png"
						className="mix-blend-color-dodge absolute -bottom-56 left-0 z-0 max-w-[750px]"
					/>
				</section>
				<section className="px-[3%] py-[140px] lg:px-[100px] relative overflow-hidden">
					<div className="mb-12">
						<h3 className="uppercase text-base tracking-[-0.5px] mb-2 text-white">features</h3>
						<h1 className="capitalize text-[32px] leading-[48px] text-[#04B6B6] mb-6 font-bold">
							Intuitive DApp Management Hub
						</h1>
					</div>
					<div data-aos="fade-up">
						<img src="/imgs/dashboard.png" alt="dashboard" />
					</div>
					<div className="flex flex-wrap w-full gap-6 mt-10 mx-[3%]">
						{dashboardFeatures.map((feature, idx) => {
							return (
								<div
									key={idx}
									className="max-w-full px-6 py-4 border border-[rgba(255,255,255,0.23)] backdrop-blur-lg bg-[rgba(255,255,255,0.23)] w-full lg:max-w-[410px]"
								>
									<div className="mb-3">
										<img src="/svgs/feature-stars.svg" alt="stars" />
									</div>
									<div>
										<h4 className="text-base text-white mb-4">{feature.title}</h4>
										<p className="text-sm text-[#ffffff99]">{feature.desc}</p>
									</div>
								</div>
							);
						})}
					</div>
					<img
						src="/svgs/dashboard-circle.svg"
						alt="dashboard circle"
						className="absolute top-[100px] -right-[350px] w-full h-full"
					/>
				</section>
				<section className="relative py-[114px] how-it-works-container" id="how-it-works">
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
							<HowItWorks />
							{/* <HowItWorksSlider /> */}
						</div>
					</div>
					<div className="absolute bottom-0 left-0 right-0 w-full">
						<img src="/svgs/hero-hud-down.svg" />
					</div>
				</section>
				<section id="use-cases" className="my-[200px] px-[3%] lg:px-[100px]">
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
							<div className="flex flex-col gap-5 lg:flex-row">
								<div data-aos="zoom-in" className="usecase-one-container backdrop-blur-lg group cursor-pointer hover:usecase-hover">
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
								<div data-aos="zoom-in" className="usecase-two-container backdrop-blur-lg group cursor-pointer hover:usecase-hover">
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
								<div data-aos="zoom-in" className="usecase-three-container backdrop-blur-lg group cursor-pointer hover:usecase-hover">
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

								<div data-aos="zoom-in" className="usecase-four-container backdrop-blur-lg group cursor-pointer hover:usecase-hover">
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

								<div data-aos="zoom-in" className="usecase-five-container backdrop-blur-lg group cursor-pointer hover:usecase-hover">
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
				</section>
				<section id="roadmap" className="w-full mt-[140px] mb-[200px] px-[3%] lg:px-[79px]">
					<div className="mb-[80px]">
						<h5 className="text-base text-white mb-2">IMPERIUS</h5>
						<h1 className="text-[32px] leading-[48px] text-[#04B6B6] font-bold">Roadmap</h1>
					</div>
					<div className="mb-[121px]">
						<Roadmap />
					</div>
					<div className="mx-auto w-full">
						<img src="/svgs/globe.svg" alt="Globe" className="animate-pulse w-full" />
					</div>
				</section>
				<section id="faq" className="flex flex-col justify-between px-[3%] lg:px-[100px] lg:flex-row">
					<div data-aos="fade-right" className="max-w-full lg:max-w-[427px]">
						<div className="mb-12">
							<h2 className="text-[32px] leading-[48px] text-[#04B6B6] mb-4 font-medium">
								Frequently Asked Questions
							</h2>
							<p className="text-white text-base leading-[150%]">
								If you can{"'"}t find the answers you{"'"}re looking for here we{"'"}re always
								available. Try reaching us!
							</p>
						</div>
						<a href="" target="_blank" className={`${buttonBase} flex w-fit items-center`}>
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
					<div data-aos="fade-left" className="max-w-full mt-16 lg:mt-0 lg:max-w-[557px]">
						{faqData.map((faq, idx) => {
							return (
								<div key={idx} className="mb-12">
									<button
										onClick={() => handleToggleAccordion(faq.id)}
										className="mb-4 w-full items-center flex justify-between !text-left"
									>
										<h3 className="text-white !text-left">{faq.question}</h3>
										<div
											className={`duration-150 ${
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
										className={`duration-150 ${
											selectedFaq === faq.id
												? "overflow-auto h-full opacity-100"
												: "overflow-hidden h-0 opacity-0"
										}`}
									>
										<p
											className={`text-[rgba(255,255,255,0.6)] duration-150 ${
												selectedFaq === faq.id
													? "overflow-auto h-full opacity-100"
													: "overflow-hidden h-0 opacity-0"
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
