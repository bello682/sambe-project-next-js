"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import NavBar from "../component/navbar/NavBar";

const page = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const isClient = typeof window !== "undefined";
	const navBar =
		isClient && window.location.pathname === "/?" ? (
			<NavBar className={<nav className="bg-white text-black"></nav>} />
		) : (
			<NavBar />
		);

	// useEffect((next) => {
	// 	const fetchDATA = async () => {
	// 		try {
	// 			const response = await axios.get(`/users/login`);
	// 			console.log(response);
	// 		} catch (error) {
	// 			new Error(`Error fetching your data ${error}`);
	// 		}
	// 	};

	// 	fetchDATA();
	// }, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("/users/login", {
				firstName,
				lastName,
				email,
				password,
				confirmPassword,
			});
			console.log(response);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<section className="w-full h-screen relative">
			<div>
				{/* Use Next.js Image component */}
				<Image src="/asset/avatar.jpg" sizes="100vw" fill alt="Sign-up image" />
			</div>
			<div className="w-[100%] flex border-10 border-red-500 absolute h-[100vh]">
				<div className="form bg-white w-[50%] pl-[4rem] pr-[4rem] pb-[2rem] pt-[2rem] rounded-lg mx-auto  justify-center items-center ml-auto mr-auto mt-[8rem] mb-auto  ">
					<form className="grid" onSubmit={handleSubmit}>
						<h2 className="text-2xl font-bold mb-4">Sign Up</h2>
						<input
							type="text"
							name="firstName"
							placeholder="First Name"
							className="mb-6 p-3 border-2 border-slate-500 rounded"
							// value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<input
							type="text"
							name="lastName"
							placeholder="Last Name"
							className="mb-6 p-3 border-2 border-slate-500 rounded"
							// value={lastName}
							onChange={(e) => setlastName(e.target.value)}
						/>
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
						<input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
							className="mb-6 p-3 border-2 border-slate-500 rounded"
							// value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						<p className="">
							By continuing, you agree to our{" "}
							<Link href="/terms" className="underline text-[15px] font-bold">
								terms and conditions
							</Link>
						</p>
						<button
							type="submit"
							className="mt-4 w-full bg-red-500 p-[0.7rem] rounded text-white"
						>
							Sign Up
						</button>
						<p className="text-center mt-2">
							<Link href="/login" className="text-black font-bold">
								Login Instead?
							</Link>
						</p>
					</form>
				</div>
			</div>
		</section>
	);
};

export default page;
