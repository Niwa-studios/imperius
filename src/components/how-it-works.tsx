import { AnimatePresence, motion } from "framer-motion";
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

const HowItWorks = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [progress, setProgress] = useState(0);
	const totalPhases = sliderData.length;
	const phaseDuration = 15000; // Total duration for all phases

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => {
				const newProgress = prevProgress + 100 / (phaseDuration / 1000) / totalPhases;
				if (newProgress >= (currentIndex + 1) * (100 / totalPhases)) {
					setCurrentIndex((prevPhase) => prevPhase + 1);
				}
				if (newProgress >= 100) {
					setProgress(0);
					setCurrentIndex(0);
					clearInterval(timer);
				}
				return newProgress;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [currentIndex, totalPhases]);

	return (
		<AnimatePresence>
			<div className=" flex flex-col">
				<div className="relative mb-10 w-full bg-[#555555] h-2 rounded-[32px] self-center">
					<motion.div
						className="absolute top-0 flex justify-items-end left-0 h-2 bg-[#04B6B6] roadmap-drop-shadow rounded-[32px] "
						initial={{ width: 0 }}
						animate={{ width: `${progress}%` }}
						transition={{ duration: 1, ease: "linear" }}
					/>
				</div>
				<div className="flex justify-between gap-5 items-start">
					{sliderData.map((slide, index) => (
						<div
							key={index}
							className="flex flex-col items-center max-w-[232px]"
						>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: currentIndex >= index ? 1 : 0.9 }}
								transition={{ duration: 0.5 }}
							>
								<h2
									className={`mb-3 text-left ${
										currentIndex >= index ? "text-[#04B6B6]" : "text-[rgba(255,255,255,0.7)]"
									}`}
								>
									{`${index + 1}`}
								</h2>
								<h3
									className={`text-xl  ${
										currentIndex >= index  ? "text-[#04B6B6]" : "text-[rgba(255,255,255,0.7)]"
									}`}
								>
									{slide.title}
								</h3>
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</AnimatePresence>
	);
};

export default HowItWorks;
