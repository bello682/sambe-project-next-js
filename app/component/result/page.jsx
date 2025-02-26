// "use client";
// import React, { useState } from "react";

// const ResultPage = ({ valueProps }) => {
// 	const [isVisible, setIsVisible] = useState(valueProps ? true : false);

// 	return (
// 		<>
// 			<div
// 				className={` ${
// 					!isVisible ? "hidden" : "vissible"
// 				} w-full h-screen bg-white p-4 rounded-lg shadow-md text-cente justify-center flex items-center z-20 absolute left-0 font-sans`}
// 			>
// 				<h1 className="font-bold text-4xl text-red-800">
// 					No Result For:{" "}
// 					{<span className="italic text-5xl text-red-900">{valueProps}</span>}
// 				</h1>
// 			</div>
// 		</>
// 	);
// };

// export default ResultPage;

"use client";
import React from "react";

const ResultPage = ({ valueProps, onClose }) => {
	return (
		<div className="w-full h-screen bg-white p-4 rounded-lg shadow-md flex items-center justify-center absolute left-0 top-0 font-sans z-20">
			<div className="text-center">
				<h1 className="font-bold text-4xl text-red-800">
					No Result For:{" "}
					<span className="italic text-5xl text-red-900">{valueProps}</span>
				</h1>
				<button
					onClick={onClose}
					className="mt-4 px-6 py-2 bg-gray-600 text-white rounded-lg shadow-md"
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default ResultPage;
