"use client";
import React from "react";
// import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../logo/LogoImage";

const Footer = () => {
	const linking = { active: String | Number }; // just testing my typescript knowledge
	return (
		<footer className=" w-[100%] bg-[#0d0f36] py-[3rem] px-[2rem]  ">
			<div className="w-[82%] flex justify-start items-start  m-auto text-white  gap-[8rem]">
				<div className="border-[1px] rounded-lg p-[0.5rem] bg-[#ccc]">
					{/* <Image src="/asset/logo.svg" /> */}
					<LogoImage />
				</div>

				<div className={`flex flex-wrap gap-[3rem] leading-[3]`}>
					<div className="flex flex-col">
						<h1 className="text-3xl font-sans font-bold">Generate</h1>
						<Link
							href="/"
							className={
								linking ? "text-[white] hover:underline" : alert("Just clicked")
							}
						>
							Search
						</Link>
						<Link href="/" className="hover:underline">
							Use Questionnaire
						</Link>
					</div>
					<div className="flex flex-col">
						<h1 className="text-3xl font-sans font-bold">Company</h1>
						<Link href="/pricing" className="hover:underline">
							Pricing
						</Link>
						<Link href="/academy" className="hover:underline">
							Sambé Academy
						</Link>
						<Link href="/about" className="hover:underline">
							About Us
						</Link>
						<Link href="/" className="hover:underline">
							Terms & Conditions
						</Link>
					</div>
					<div className="flex flex-col">
						<h1 className="text-3xl font-sans font-bold">Social</h1>
						<Link
							href="https://www.instagram.com/sambeapp/"
							className="hover:underline"
						>
							Instagram | @sambeapp
						</Link>
						<Link
							href="https://web.facebook.com/sambeapp?_rdc=1&_rdr"
							className="hover:underline"
						>
							Facebook | @sambeapp
						</Link>
						<Link
							href="https://twitter.com/sambeapp"
							className="hover:underline"
						>
							Twitter | @sambeapp
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
