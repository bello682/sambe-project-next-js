"use client";
import React, { useState } from "react";

const page = ({ valueProps }) => {
	const [isVisible, setIsVisible] = useState(valueProps ? true : false);

	return (
		<>
			<div
				className={` ${
					!isVisible ? "hidden" : "vissible"
				} w-full h-screen bg-white p-4 rounded-lg shadow-md text-cente justify-center flex items-center z-20 absolute left-0 font-sans`}
			>
				<h1 className="font-bold text-4xl text-red-800">
					No Result For:{" "}
					{<span className="italic text-5xl text-red-900">{valueProps}</span>}
				</h1>
			</div>
		</>
	);
};

export default page;
