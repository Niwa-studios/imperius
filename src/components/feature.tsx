import { buttonBase } from "@/data";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface FeatureProps {
	title: string;
	subtitle: string;
	description: string;
	mediaLink: string;
	extLink: string;
	reverseOrder: boolean;
}

function Feature({ title, subtitle, description, extLink, mediaLink, reverseOrder }: FeatureProps) {
	
	useEffect(() => {
		AOS.init();
	}, []);


	return (
		<div
			className={`flex justify-between items-center ${
				reverseOrder ? "flex-col-reverse lg:flex-row-reverse" : "flex-col-reverse lg:flex-row"
			}`}
		>
			<div data-aos="fade-left" className="max-w-full mt-9 lg:mt-0 lg:max-w-[505px]">
				<h2 className="text-[24px] leading-[38px] text-[#04B6B6] mb-[48px] font-bold">{title}</h2>
				<div>
					<h5 className="mb-4 text-white">{subtitle}</h5>
					<p className="text-[rgba(255,255,255,0.7)] text-base mb-8">{description}</p>
					<a href={extLink} target="_blank" className={`w-fit flex items-center gap-[17px] ${buttonBase}`}>
						<span>Learn More</span>
						<span>
							<svg
								width="20"
								height="21"
								viewBox="0 0 20 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M5.21967 14.8926C5.51256 15.1855 5.98744 15.1855 6.28033 14.8926L13.5 7.67296V13.3623C13.5 13.7765 13.8358 14.1123 14.25 14.1123C14.6642 14.1123 15 13.7765 15 13.3623V5.8623C15 5.44809 14.6642 5.1123 14.25 5.1123H6.75C6.33579 5.1123 6 5.44809 6 5.8623C6 6.27652 6.33579 6.6123 6.75 6.6123H12.4393L5.21967 13.832C4.92678 14.1249 4.92678 14.5997 5.21967 14.8926Z"
									fill="white"
								/>
							</svg>
						</span>
					</a>
				</div>
			</div>
			<div
				data-aos="fade-right"
				className={`relative max-w-[683px] py-[38px] ${reverseOrder ? "feature-bg-reverse" : "feature-bg"}`}
			>
				<div className={`w-[90%] relative z-[2] ${reverseOrder ? "ml-[28px]" : "mr-[28px]"}`}>
					{/* {mediaLink ? (
						<img src={mediaLink} alt={title} />
					) : (
						<video loop muted autoPlay playsInline width="100%" height="100%" controls={false}>
							<source src={"/videos/feature.mp4"} type="video/mp4" />
						</video>
					)} */}
					<video loop muted autoPlay playsInline width="100%" height="100%" className="rounded-2xl" controls={false}>
						<source src={mediaLink} type="video/mp4" />
					</video>
				</div>
			</div>
		</div>
	);
}

export default Feature;
