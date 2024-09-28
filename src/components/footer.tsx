import React from "react";
import SectionLink from "./section-link";

function Footer() {
	return (
		<footer className="bg-[#0C1518] max-w-screen-2xl mx-auto">
			<div className="w-full">
				<svg width="100%" height="9" viewBox="0 0 1440 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M1440 3.375V5.06515H0V3.375H1440Z"
						fill="#00FAFF"
						fill-opacity="0.568627"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M58.0851 1.69141C58.4377 1.69141 58.7234 1.88058 58.7234 2.11394V8.02947C58.7234 8.26283 58.4377 8.45201 58.0851 8.45201H0.638323C0.285748 8.45201 0 8.26283 0 8.02947V2.11394C0 1.88058 0.285748 1.69141 0.638323 1.69141H58.0851Z"
						fill="#09FACD"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M1439.36 0C1439.71 0 1440 0.189175 1440 0.422538V6.33806C1440 6.57143 1439.71 6.7606 1439.36 6.7606H1397.23C1396.88 6.7606 1396.59 6.57143 1396.59 6.33806V0.422538C1396.59 0.189175 1396.88 0 1397.23 0H1439.36Z"
						fill="#09FACD"
					/>
				</svg>
			</div>
			<div className="flex flex-col-reverse justify-between py-[56px] px-[3%] lg:flex-row lg:px-[100px]">
				<div className="w-full lg:w-[55%]">
					<div className="mb-14 lg:mb-[250px]">
						<div className="mb-8">
							<img src="/logo.svg" alt="Imperius" />
						</div>
						<div className="max-w-[60%]">
							<p className="text-[#04B6B6] text-[16px] leading-[140%] font-normal mb-4">
								Pioneering AI-driven blockchain scalability with uncompromising security. Empowering
								decentralized innovation.
							</p>
							<div className="flex gap-4 items-center">
								<span className="text-[12px] leading-[150%] font-normal text-[#FFFFFF]">
									More about us
								</span>
								<div className="w-[10px] h-[10px] bg-[#FFFFFF] block rounded-full"></div>
							</div>
						</div>
					</div>
					<div className="flex items-end justify-between">
						<div className="flex gap-2">
							<a href="#" target="_blank">
								<img src="/svgs/footer/telegram.svg" />
							</a>
							<a href="#" target="_blank">
								<img src="/svgs/footer/ok.svg" />
							</a>
							<a href="#" target="_blank">
								<img src="/svgs/footer/vk.svg" />
							</a>
						</div>
						<div className="text-[#8F9FA3] text-[14px] leading-[160%] text-right">
							<h3>© 2024 — Copyright</h3>
							<h4>All Rights reserved</h4>
						</div>
					</div>
				</div>
				<div className=" mb-10 lg:mb-0">
					<ul className="flex flex-col gap-4 text-white mb-8 lg:flex-row lg:mb-[254px] lg:gap-[41px]">
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
					<div>
						<div className="h-[267px] w-full bg-[rgba(249,250,251,0.2)]"></div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
