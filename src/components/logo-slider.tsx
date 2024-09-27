import React from "react";

function LogoSlider() {
	const logos = [
		"/svgs/logos/base.svg",
		"/svgs/logos/celestia.svg",
		"/svgs/logos/shardeum.svg",
		"/svgs/logos/taiko.svg",
	];

	return (
		<div className="overflow-hidden w-full mx-auto relative py-8">
			<div className="w-[200%] flex gap-[64px] items-center logo-slider-animation ">
				{[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
					<div key={index}>
						<div className="flex justify-center items-center min-w-[124px]">
							<img src={logo} alt="logo" />
						</div>
					</div>
				))}
            </div>
            <div className="absolute top-0 left-0 logo-slider-overlay w-full h-full"></div>
		</div>
	);
}

export default LogoSlider;
