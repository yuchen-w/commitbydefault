import React, { useState } from "react";

import Nav0 from "./Nav0";
import Banner2 from "./Banner2";
import Content3 from "./Content3";
import Content9 from "./Content9";
import Teams2 from "./Teams2";
import Footer0 from "./Footer0";

import {
	Nav00DataSource,
	Banner20DataSource,
	Content30DataSource,
	Content90DataSource,
	Teams20DataSource,
	Footer00DataSource,
} from "./data.source";
import "./scss/antMotionStyle.scss";

// eslint-disable-next-line no-restricted-globals
const defaultIsMobile = screen.width <= 768;

export const Home = () => {
	const [isMobile, setIsMobile] = useState(defaultIsMobile);

	window.addEventListener("resize", () => {
		// eslint-disable-next-line no-restricted-globals
		if (screen.width <= 768 && !isMobile) {
			setIsMobile(true);
		}
		// eslint-disable-next-line no-restricted-globals
		if (screen.width > 768 && isMobile) {
			setIsMobile(false);
		}
	});

	const children = [
		<Nav0
			id="Nav0_0"
			key="Nav0_0"
			dataSource={Nav00DataSource}
			isMobile={isMobile}
		/>,
		<Banner2
			id="Banner2_0"
			key="Banner2_0"
			dataSource={Banner20DataSource}
			isMobile={isMobile}
		/>,
		<Content3
			id="Content3_0"
			key="Content3_0"
			dataSource={Content30DataSource}
			isMobile={isMobile}
		/>,
		<Content9
			id="Content9_0"
			key="Content9_0"
			dataSource={Content90DataSource}
			isMobile={isMobile}
		/>,
		<Teams2
			id="Teams2_0"
			key="Teams2_0"
			dataSource={Teams20DataSource}
			isMobile={isMobile}
		/>,
		<Footer0
			id="Footer0_0"
			key="Footer0_0"
			dataSource={Footer00DataSource}
			isMobile={isMobile}
		/>,
	];
	return <div className="templates-wrapper">{children}</div>;
};
