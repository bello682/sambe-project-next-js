"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

const page = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("", {
				email: email.data,
				password: password.data,
			});
			console.log(response);
		} catch (err) {
			console.error(err);
		}
	};

	console.log(email, password);
	return (
		<section className="w-full h-screen relative">
			<div>
				{/* Use Next.js Image component */}
				<Image src="/asset/avatar.jpg" sizes="100vw" fill alt="Sign-in image" />
			</div>
			<div className="w-[100%] flex border-10 border-red-500 absolute h-[100vh]">
				<div className="form bg-white w-[50%] pl-[4rem] pr-[4rem] pb-[2rem] pt-[2rem] rounded-lg mx-auto  justify-center items-center ml-auto mr-auto mt-[12rem] mb-auto  ">
					<form className="grid" onSubmit={handleSubmit}>
						<h2 className="text-2xl font-bold mb-4">Sign In</h2>

						<input
							type="email"
							name="email"
							placeholder="Email"
							className="mb-6 p-3 border-2 border-slate-500 rounded"
							// value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							name="password"
							placeholder="Password"
							className="mb-6 p-3 border-2 border-slate-500 rounded"
							// value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<button
							type="submit"
							className="mt-2 w-full border-2 bg-red-500 p-[1rem] rounded-[0.5rem] text-white"
						>
							Sign Up
						</button>
						<div className="flex justify-between items-center mt-2">
							<p className="">
								<Link href="/terms" className=" text-[15px] font-bold">
									Sign Up
								</Link>
							</p>
							<p className="text-center mt-2">
								<Link href="/" className="text-black font-bold">
									Forget Password
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</section>
		// </div>
	);
};

export default page;
