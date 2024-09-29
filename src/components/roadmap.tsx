import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const phases = [
	{
		id: 1,
		title: "Foundation and Infrastructure",
		description: [
			"Seed Raise: Initiate a seed raise to onboard key opinion leaders and early investors.",
			"$IMPR Token Launch: Launch the $IMPR token on Uniswap, establishing the native currency for the Imprius ecosystem.",
			"DePIN Hardware & Cloud Solutions: Introduce decentralized computing hardware like GPUs and RDPs, offering powerful cloud resources with a focus on privacy and accessibility.",
		],
	},
	{
		id: 2,
		title: "AI Integration and Ecosystem Expansion",
		description: [
			"AI-Powered Scalability: Implement AI to optimize network scalability, boosting performance and operational efficiency.",
			"Imperius Ecosystem: Expand the product range to include validators, mining opportunities, and advanced computational protocols for decentralized operations.",
			"One-Click Node Deployment: Enable easy node deployment with a single-click setup, supporting blockchain and decentralized applications.",
		],
	},
	{
		id: 3,
		title: "Multi-Chain and Global Adoption",
		description: [
			"Multi-Chain Interoperability: Support interaction between different blockchain ecosystems, increasing the flexibility and reach of Imperius.",
			"Global Network Expansion: Build a decentralized mesh network for self-healing, ensuring continuous uptime.",
		],
	},
];

const Roadmap = () => {
	const [currentPhase, setCurrentPhase] = useState(0);
	const [progress, setProgress] = useState(0);
	const totalPhases = phases.length;
	const phaseDuration = 15000; // Total duration for all phases

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => {
				const newProgress = prevProgress + 100 / (phaseDuration / 1000) / totalPhases;
				if (newProgress >= (currentPhase + 1) * (100 / totalPhases)) {
					setCurrentPhase((prevPhase) => prevPhase + 1);
				}
				if (newProgress >= 100) {
					setProgress(0);
					setCurrentPhase(0);
					clearInterval(timer);
				}
				return newProgress;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [currentPhase, totalPhases]);

	return (
		<AnimatePresence>
			<div className="flex flex-col">
				<div className="absolute hidden -mb-[65px] w-full bg-[#555555] h-2 rounded-[32px] max-w-[1240px] self-center lg:block lg:relative">
					<motion.div
						className="absolute top-0 flex justify-items-end left-0 h-2 bg-[#04B6B6] roadmap-drop-shadow rounded-[32px] "
						initial={{ width: 0 }}
						animate={{ width: `${progress}%` }}
						transition={{ duration: 1, ease: "linear" }}
					/>
				</div>
				<div className="flex justify-between items-center flex-col lg:flex-row lg:items-start">
					{phases.map((phase, index) => (
						<div
							key={index}
							className="flex flex-col items-center max-w-[392px] lg:first:items-start lg:last:items-end"
						>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: currentPhase >= index ? 1 : 0.9 }}
								transition={{ duration: 0.5 }}
							>
								<h2
									className={`mb-3 ${
										index === 0 ? "text-center lg:text-right" : "text-center lg:text-left"
									} ${currentPhase >= index ? "text-[#04B6B6]" : "text-[#888888]"}`}
								>
									{`Phase ${phase.id}`}
								</h2>
								<div className="flex flex-col items-center">
									<div
										className={`-mb-7 z-[2] duration-100 bg-black rounded-full ${
											currentPhase >= index ? "rotate-90" : "rotate-0"
										}`}
									>
										<img src="/svgs/roadmap-arrow.svg" alt="Arrow" />
									</div>
									<div>
										<img src="/svgs/roadmap-box.svg" alt="Box" />
									</div>
								</div>
							</motion.div>
							<h2 className="text-white mb-4">{phase.title}</h2>
							<ul className={`list-disc pl-5 text-left space-y-2 mb-5 text-base duration-300 ${currentPhase >= index ? "opacity-100 text-white" : "opacity-5 text-[#ffffff44]"}`}>
								{phase.description.map((desc, idx) => (
									<li key={idx}>{desc}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</AnimatePresence>
	);
};

export default Roadmap;
