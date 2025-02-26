"use client";
import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import styles from "./BodyBackground.module.css"; // Import CSS module for styles

const BodyBackground = ({ children }) => {
	const [pageImage, setPageImage] = useState(1);

	useEffect(() => {
		let interval = setInterval(() => {
			setPageImage((prev) => (prev + 1 >= 5 ? 1 : prev + 1));
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			className={`relative flex h-screen w-screen overflow-hidden`} //  ${styles.body}
		>
			<div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div>
			<div
				className="bg-fixed absolute inset-0 overflow-y-auto"
				style={{
					backgroundImage: `url(/asset/bg${pageImage}.jpg)`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					width: "100%",
					height: "100vh",
				}}
			>
				<div className="smoothSCROLL">{children}</div>
			</div>
		</section>
	);
};

export default BodyBackground;

// "use client";
// import React from "react";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// // import { useClient } from "next/data-client"; // Import useClient from next/data-client

// const BodyBackground = ({ children }) => {
// 	// useClient(); // Mark the component as a Client Component
// 	const [pageImage, setPageImage] = useState(1);

// 	useEffect(() => {
// 		let interval = setInterval(() => {
// 			setPageImage((prev) => (prev + 1 >= 5 ? 1 : prev + 1));
// 		}, 5000);

// 		return () => clearInterval(interval);
// 	}, []);

// 	return (
// 		<>
// 			<section
// 				className="relative flex h-[calc(100vh-70px)] w-screen flex-col justify-center items-center overflow-x-hidden"
// 				style={{ height: "100vh" }}
// 			>
// 				<div
// 					className="overlay absolute w-screen inset-0 bg-black bg-opacity-70 shadow-custom z-10 overflow-x-hidden"
// 					style={{ height: "100vh" }}
// 				></div>
// 				<div className="absolute inset-0  " style={{ height: "100vh" }}>
// 					<Image
// 						className="w-screen h-full object-cover object-center"
// 						sizes="100vw"
// 						fill
// 						alt="Heroes image"
// 						src={`/asset/bg${pageImage}.jpg`}
// 					/>
// 					{children}
// 				</div>
// 			</section>
// 		</>
// 	);
// };

// export default BodyBackground;
