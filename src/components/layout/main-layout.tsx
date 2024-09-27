import React, { ReactNode } from "react";
import { SeoHead } from "../seo-head";
import Footer from "../footer";

interface MainLayoutProps {
	title?: string;
	desc: string;
	ogImage?: string;
	children: ReactNode;
}

function MainLayout({ title, desc, ogImage, children }: MainLayoutProps) {
	return (
		<>
			<SeoHead title={title} description={desc} ogImage={ogImage} />
			<div className="max-w-screen-2xl mx-auto">{children}</div>
			<Footer />
		</>
	);
}

export default MainLayout;
