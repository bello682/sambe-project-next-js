"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import LogoImage from "../../logo/LogoImage";

const NavBar = () => {
	const [click, setClick] = useState(false);
	const [changeNavColor, setChangeNavColor] = useState(false);
	const [isActive, setIsActive] = useState(null);

	//
	const handleNavColorChange = () => {
		if (window.scrollY >= 150) {
			setChangeNavColor(true);
		} else {
			setChangeNavColor(false);
		}
	};

	// window.addEventListener("scroll", handleNavColorChange);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", handleNavColorChange);
			return () => {
				window.removeEventListener("scroll", handleNavColorChange);
			};
		}
	}, []);
	//

	//
	const handleActiveClick = (e) => {
		// e.preventDefault();
		const clickedItem = e.target.getAttribute("href");
		setIsActive(clickedItem);
	};
	//

	//
	const toggleNavBar = () => {
		setClick(!click);
	};
	//

	return (
		<>
			<nav
				className={`${changeNavColor ? "navbar color_white" : "navbar"} 
				}  z-50 fixed w-[100%] py-4`}
			>
				<div className="max-w-[82%] max-auto px-4 sm:px-6 lg:px-8 m-auto ">
					<div className=" flex items-center justify-between h-16">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<Link href="/" className="">
									<LogoImage />
								</Link>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-4 flex items-center space-x-4">
								<Link
									href="/"
									className={`text-white hover:bg-white  hover:text-red-800  font-sans font-bold text-[18px] rounded-lg p-2 ${
										isActive === "/home" ? `active ` : ""
									}`}
									onClick={handleActiveClick}
								>
									Home
								</Link>

								<Link
									href="/about"
									className={`text-white hover:bg-white hover:text-red-800 font-sans font-bold text-[18px] rounded-lg p-2 ${
										isActive === "/about" ? `active ` : ""
									}`}
									onClick={handleActiveClick}
								>
									About Us
								</Link>

								<Link
									href="/mobile"
									className={`text-white hover:bg-white hover:text-red-800 font-sans font-bold text-[18px] rounded-lg p-2 ${
										isActive === "/mobile" ? `active ` : ""
									}`}
									onClick={handleActiveClick}
								>
									Mobile App
								</Link>

								<Link
									href="/academy"
									className={`text-white hover:bg-white hover:text-red-800 font-sans font-bold text-[18px] rounded-lg p-2 ${
										isActive === "/academy" ? `active ` : ""
									}`}
									onClick={handleActiveClick}
								>
									Academy
								</Link>

								<Link
									href="/pricing"
									className={`text-white hover:bg-white hover:text-red-800 font-sans font-bold text-[18px] rounded-lg p-2 ${
										isActive === "/pricing" ? `active ` : ""
									}`}
									onClick={handleActiveClick}
								>
									Pricing
								</Link>
							</div>
						</div>
						<div className="hidden md:block">
							<Link href="/signIn">
								<button
									typeof="button"
									className="signin  py-3 px-7 bg-transparent font-bold text-lg rounded-lg text-white hover:text-red-600"
								>
									Sign In
								</button>
							</Link>
							<Link href="/signUp">
								<button
									type="button"
									className="join  py-2 px-7 bg-red-600 font-bold text-lg rounded-lg text-white hover:bg-red-700"
								>
									JOIN
								</button>
							</Link>
						</div>

						{/* Toggle button Line */}
						<div className="md:hidden flex items-center">
							<button
								className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								onClick={toggleNavBar}
							>
								{!click ? <FaBars /> : <AiOutlineClose />}
							</button>
						</div>
					</div>
				</div>

				{/* Line for the responsive screen sizes toggle */}
				{click && (
					<div className="md:hidden bg-black h-[100vh]">
						{/* <div className="ml-4 flex flex-col items-start space-x-4"> */}
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
							<ul className="">
								<li>
									<Link
										href="/"
										className={`text-black block hover:bg-white hover:text-black rounded-lg p-2 ${
											isActive ? `active` : ""
										}`}
										onClick={handleActiveClick}
									>
										Home
									</Link>
								</li>

								<li>
									<Link
										href="/"
										className={`text-black block hover:bg-white hover:text-black rounded-lg p-2 ${
											isActive ? `active` : ""
										}`}
										onClick={handleActiveClick}
									>
										About Us
									</Link>
								</li>

								<li>
									<Link
										href="/"
										className={`text-black block hover:bg-white hover:text-black rounded-lg p-2 ${
											isActive ? `active` : ""
										}`}
										onClick={handleActiveClick}
									>
										Mobile App
									</Link>
								</li>

								<li>
									<Link
										href="/"
										className={`text-black block hover:bg-white hover:text-black rounded-lg p-2 ${
											isActive ? `active` : ""
										}`}
										onClick={handleActiveClick}
									>
										Academy
									</Link>
								</li>

								<li>
									<Link
										href="/"
										className={`text-black block hover:bg-white hover:text-black rounded-lg p-2 ${
											isActive ? `active` : ""
										}`}
										onClick={handleActiveClick}
									>
										Pricing
									</Link>
								</li>

								{/* <li>
									<button
										typeof="button"
										className="w-fit border-none py-3 px-7 bg-transparent font-bold text-lg rounded-lg text-white hover:text-red-600"
									>
										Sign In
									</button>
								</li>

								<li>
									<button
										type="button"
										className="border py-3 px-7 bg-red-600 font-bold text-lg rounded-lg text-white hover:bg-red-700"
									>
										JOIN
									</button>
								</li> */}
							</ul>
						</div>

						<div className="md:hidden">
							<div className="flex flex-col">
								<button
									typeof="button"
									className="w-fit border-none py-2 px-5 mb-3 bg-transparent font-bold text-lg rounded-lg text-white hover:text-red-600"
								>
									Sign In
								</button>
								<button
									type="button"
									className=" w-fit border py-2 px-32 bg-red-600 font-bold text-lg rounded-lg text-white hover:bg-red-700"
								>
									JOIN
								</button>
							</div>
						</div>
					</div>
				)}
			</nav>
		</>
	);
};

export default NavBar;

// <section className="w-full z-50 fixed">
// 	{/* <nav className="w-[82%] flex items-center justify-between mx-auto  bg-transparent pt-4"> */}
// 	<nav className="w-[82%] flex items-center justify-between mx-auto  bg-black pt-4 pb-4 md:relative">
// 		<Link href="google.com">
// 			<LogoImage />
// 		</Link>

// 		<div className="  absolute md:bg-blue-300 lg:bg-white md:min-h-fit min-h-[100vh] left-0 top-[1%] md:w-auto w-full flex md:px-[5rem]">
// 			<ul className="lg:flex gap-[3vw]  md:gap-[3vw]">
// 				<li>
// 					<a
// 						href=""
// 						className="font-bold text-xl text-black font-sans hover:text-red-600"
// 					>
// 						Home
// 					</a>
// 				</li>
// 				<li>
// 					<a
// 						href=""
// 						className="font-bold text-xl text-black font-sans hover:text-red-600"
// 					>
// 						About Us
// 					</a>
// 				</li>
// 				<li>
// 					<a
// 						href=""
// 						className="font-bold text-xl text-black font-sans hover:text-red-600"
// 					>
// 						Mobile App
// 					</a>
// 				</li>
// 				<li>
// 					<a
// 						href=""
// 						className="font-bold text-xl text-black font-sans hover:text-red-600"
// 					>
// 						Academy
// 					</a>
// 				</li>
// 				<li>
// 					<a
// 						href=""
// 						className="font-bold text-xl text-black font-sans hover:text-red-600"
// 					>
// 						Pricing
// 					</a>
// 				</li>
// 			</ul>
// 		</div>
// 		<div className="flex ">
// 			{/* md:absolute md:grid md:top-40 */}
// 			<div>
// 				<button
// 					typeof="button"
// 					className="flex border-none py-3 px-7 bg-transparent font-bold text-lg rounded-lg text-white hover:text-red-600"
// 				>
// 					Sign In
// 				</button>
// 			</div>
// 			<div>
// 				<button
// 					type="button"
// 					className="flex border py-3 px-7 bg-red-600 font-bold text-lg rounded-lg text-white hover:bg-red-700"
// 				>
// 					JOIN
// 				</button>
// 			</div>
// 		</div>
// 		{/* </div> */}
// 		{/* <div className="flex ">
// 			<FaBars className="text-5xl text-white" />
// 			<AiOutlineClose className="text-5xl text-white" />
// 		</div> */}
// 	</nav>
// </section>
