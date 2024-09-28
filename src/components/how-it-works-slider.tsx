import { AnimatePresence, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

const sliderData = [
	{
		title: "Efficient Initialization",
		desc: "",
	},
	{
		title: "AI-Driven Network Analysis",
		desc: "",
	},
	{
		title: "Distributed Compute Infrastructure",
		desc: "",
	},
	{
		title: "Flexible Integration Framework",
		desc: "",
	},
	{
		title: "Persistent Security Measures",
		desc: "",
	},
];

function HowItWorksSlider() {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [progress, setProgress] = useState<number>(0);

	const controls = useAnimation();
	const slideDuration = 15000;

	const handleSlideChange = (index: number) => {
		setCurrentIndex(index);
		setProgress(0);
		controls.start({ opacity: 0, transition: { duration: 0.5 } }).then(() => {
			controls.start({ opacity: 1, transition: { duration: 0.5 } });
		});
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
			setProgress(0);
		}, slideDuration);

		const progressInterval = setInterval(() => {
			setProgress((prevProgress) => (prevProgress + 1) % 101);
		}, 150);

		return () => {
			clearInterval(interval);
			clearInterval(progressInterval);
		};
	}, []);

	useEffect(() => {
		controls.start({ opacity: 1, transition: { duration: 0.5 } });
	}, [currentIndex, controls]);

	return (
		<AnimatePresence>
			<div className="flex flex-col gap-5 lg:flex-row">
				{sliderData.map((slide, idx) => (
					<div key={idx} className="flex flex-col">
						<div onClick={() => handleSlideChange(idx)}>
							<progress
								value={idx === currentIndex ? progress : 0}
								max={100}
								className="rounded-[32px] mb-6 ease-in-out"
							/>
							<h4
								className={`text-base mt-6 ml-3 ${
									idx === currentIndex ? "text-[#04B6B6]" : "text-[rgba(255,255,255,0.7)]"
								}`}
							>
								{idx + 1}
							</h4>
							<h3
								className={`text-xl ml-3 ${
									idx === currentIndex ? "text-[#04B6B6]" : "text-[rgba(255,255,255,0.7)]"
								}`}
							>
								{slide.title}
							</h3>
						</div>
					</div>
				))}
			</div>
		</AnimatePresence>
	);
}

export default HowItWorksSlider;
