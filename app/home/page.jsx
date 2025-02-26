"use client";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import BodyBackground from "../component/body-background/BodyBackgroundSection";
import Typed from "typed.js";
import Link from "next/link";
import ResultPage from "../result/page";
import Image from "next/image";
// import required modules for swiper js
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules for swiper js

import "../../styles/headerSelect.css";
import { LiaGreaterThanSolid } from "react-icons/lia";
// ======== for my unscroll animation page =============//
import AOS from "aos";
import "aos/dist/aos.css";
// ======== for my unscroll animation page =============//

const HomePage = () => {
	const [error, setError] = useState("");
	const [inputValue, setInputValue] = useState("");
	const [showResult, setShowResult] = useState(false);
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [
				"Welcome to Sambe",
				"Save Post Ideas",
				"Download Content Ideas",
				"Generate Ideas on the Go",
				"Unlimited Access to Premuim Content",
			],
			startDelay: 300,
			typeSpeed: 150,
			backDelay: 150,
			backSpeed: 10,
			smartBackspace: true,
			showCursor: false,
			loop: true,
		});

		return () => {
			typed.destroy();
		};
	}, []);

	// ======== for my unscroll animation page =============//
	useEffect(() => {
		AOS.init();
	}, []);
	// ======== for my unscroll animation page =============//

	const handleClick = () => {
		if (!inputValue) {
			setError("Please Type and Select Category");
		} else {
			console.log("working");
			return setShowResult(true);
		}
	};

	return (
		<>
			<BodyBackground />

			<div className=" m-auto w-[80%] h-auto">
				<section className=" w-6/12 absolute top-60 z-20">
					<div className="typed_text text-5xl font-bold text-white mb-20 relative">
						<h1 className="absolute " ref={el}></h1>
						<div className="h-3 w-full"></div>
					</div>
					<div>
						<div className="input_select_button flex  w-auto pt-20">
							<div className="input_text_select w-full  bg-stone-600 rounded-xl ">
								<input
									type="text"
									value={inputValue}
									onChange={(e) => {
										setInputValue(e.target.value);
										setError(false);
									}}
									placeholder="Enter a noun to get Started"
									className="w-8/12 border-none outline-none py-4 px-4 text-lg font-semibold font-sans text-white bg-stone-600 rounded-xl"
								/>
								<select
									name=""
									className="w-1/3 border-none outline-none py-4 px-4 text-lg font-semibold font-sans text-white bg-stone-600 rounded-xl cursor-pointer select-hidden-arrow"
								>
									<option value="">All Category</option>
									<option value="">Banking</option>
									<option value="">Farming</option>
									<option value="">Social Media</option>
								</select>
							</div>

							<div className="button w-4/12 flex justify-center text-white">
								<button
									type="button"
									onClick={handleClick}
									className="py-4 px-7 rounded-xl bg-red-600 hover:bg-red-700 hover:border"
								>
									GENERATE
								</button>
							</div>
						</div>
						{error}
						<div className="links_text flex text-xl font-semibold mt-5">
							<p className=" text-red-600">Dont have a Word ?</p>
							<a href="#" className="text-white  ml-2 underline">
								Generate Random Content
							</a>
						</div>
					</div>
				</section>
				{showResult && <ResultPage valueProps={inputValue} />}
			</div>
			<section className="w-[100%]  h-auto">
				<div className=" w-[100%] h-auto flex items-center justify-center m-auto">
					<div className=" w-[100%] h-{90%}">
						<Image
							src="/asset/macbook.svg"
							alt=""
							width={100}
							height={100}
							className="w-[100%] h-[100%] object-cover"
						/>
					</div>
				</div>
			</section>

			<section className="w-[100%]  h-auto relative">
				<div className="">
					<Image
						src="/asset/background2Image.svg"
						alt=""
						width={100}
						height={100}
						className="w-[100%] h-[10%] object-contain"
					/>
				</div>
				<div className="absolute top-0 w-full h-full flex justify-center items-center m-auto">
					<div className="grid text-center gap-[2rem]">
						<div className="grid grid-cols-3 gap-[2rem] max-w-[100] flex-wrap text-center">
							<div data-aos="fade-right" data-aos-delay="100">
								<Link href="/">
									<p className="flex justify-center items-center py-4 px-5 rounded-[100px] text-black bg-[#d7d9ff] hover: border-[0.1rem] hover:border-black hover:pl-[2px] ">
										<LiaGreaterThanSolid className="text-red-800 mr-[0.5rem]" />
										Generate a list of possible phrases
									</p>
								</Link>
							</div>
							<div data-aos="fade-down" data-aos-delay="200">
								<Link href="/">
									<p className="flex justify-center items-center py-4 px-5 rounded-[100px] text-black bg-[#d7d9ff] hover: border-[0.1rem] hover:border-black hover:pl-[2px] ">
										<LiaGreaterThanSolid className="text-red-800 mr-[0.5rem]" />
										Write a word
									</p>{" "}
								</Link>
							</div>
							<div data-aos="fade-left" data-aos-delay="300">
								<Link href="/">
									<p className="flex justify-center items-center py-4 px-5 rounded-[100px] text-black bg-[#d7d9ff] hover: border-[0.1rem] hover:border-black hover:r-[3px] ">
										<LiaGreaterThanSolid className="text-red-800 mr-[0.5rem]" />
										Copy the content that best suits you.
									</p>
								</Link>
							</div>
							<div data-aos="fade-right" data-aos-delay="400">
								<Link href="/">
									<p className="flex justify-center items-center py-4 px-5 rounded-[100px] text-black bg-[#d7d9ff] hover: border-[0.1rem] hover:border-black hover:pl-[2px] ">
										<LiaGreaterThanSolid className="text-red-800 mr-[0.5rem]" />
										Use content at your will!
										<span className="ml-[0.5rem]">👑</span>
									</p>{" "}
								</Link>
							</div>
							<div data-aos="fade-up" data-aos-delay="500">
								<Link href="/">
									<p className="flex justify-center items-center py-4 px-5 rounded-[100px] text-black bg-[#d7d9ff] hover: border-[0.1rem] hover:border-black hover:pl-[2px] ">
										<LiaGreaterThanSolid className="text-red-800 mr-[0.5rem]" />
										Save for later
										<span className="ml-[0.5rem]">👑</span>
									</p>{" "}
								</Link>
							</div>
							<div data-aos="fade-left" data-aos-delay="600">
								<Link href="/">
									<p className=" flex justify-center items-center py-4 px-5 rounded-[100px] text-black bg-[#d7d9ff] hover: border-[0.1rem] hover:border-black hover:pr-[3px] ">
										<LiaGreaterThanSolid className="text-red-800 mr-[0.5rem]" />
										Download result as PDF
										<span className="ml-[0.5rem]">👑</span>
									</p>{" "}
								</Link>
							</div>
						</div>
						<div>
							<button
								type="button"
								className="bg-[red] py-3 px-[1.7rem] text-white font-sans text-[20px] font-bold rounded-[10px] "
							>
								TRY FOR FREE
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="w-[100%]  h-auto relative">
				<div className="w-[100%] h-auto bg-[#0d0f36] grid grid-cols-2 p-[2rem] gap-4">
					<div className=" w-[90%] h-[80%] flex item-center justify-middle m-auto">
						<Image
							src="/asset/teamsImage.svg"
							alt=""
							width={100}
							height={100}
							className="w-[100%] h-[100%] object-cover"
							data-aos="fade-right"
							data-aos-delay="100"
						/>
					</div>
					<div className="bg-transparent flex items-center m-auto ">
						<div className="text-white">
							<h2
								className="text-3xl font-sans mb-[1rem]"
								data-aos="fade-left"
								data-aos-delay="100"
							>
								Teams are using sambé
							</h2>
							<p
								className="text-xl font-sans mb-[2rem]"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								Say Goodbye to Spending Precious Hours Creating your Social
								Media Content... Save Time and Get Researched Content Ideas on
								the Go
							</p>

							<ul className="ul_list">
								<li
									className="pb-[0.7rem]"
									data-aos="zoom-in"
									data-aos-delay="300"
								>
									One-Click Content Ideas Auto generator
								</li>
								<li
									className="pb-[0.7rem]"
									data-aos="zoom-in-up"
									data-aos-delay="400"
								>
									Search Engine Optimized Keywords and Phrases
								</li>
								<li
									className="pb-[0.7rem]"
									data-aos="zoom-in-down"
									data-aos-delay="500"
								>
									Post Ideas On the Go (with reminders)
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="w-[90%] h-[100vh] justify-center items-center mt-auto ml-auto mr-auto mb-[4rem]">
				<h1
					className="text-center text-4xl font-bold font-sans my-[4rem]"
					data-aos="zoom-in-up"
					data-aos-delay="100"
				>
					Download the App.
				</h1>
				<div className="flex justify-between mb-11">
					<div className="w-[50%] h-[80vh]">
						<Image
							src="/asset/mobile-app1.svg"
							alt="mobile1"
							width={100}
							height={100}
							className="w-full h-full object-contain"
							data-aos="fade-right"
						/>
					</div>
					<div className="w-[50%] h-[80vh]">
						<Image
							src="/asset/mobile-app2.svg"
							alt="mobile2"
							width={100}
							height={100}
							className="w-full h-full object-contain"
							data-aos="fade-down"
						/>
					</div>
					<div className="w-[50%] h-[80vh]">
						<Image
							src="/asset/mobile-app3.svg"
							alt="mobile3"
							width={100}
							height={100}
							className="w-full h-full object-contain"
							data-aos="fade-left"
						/>
					</div>
				</div>
				<div className="flex justify-center items-center m-auto gap-[2rem]">
					<div className="w-[13%] " data-aos="fade-right">
						<Image
							src="/asset/btn-app-store 1.svg"
							alt="appStore"
							width={100}
							height={100}
							className="w-[100%]"
						/>
					</div>
					<div className="w-[13%] " data-aos="fade-left">
						<Image
							src="/asset/btn-google-play 1.svg"
							alt="playStore"
							width={100}
							height={100}
							className="w-[100%]"
						/>
					</div>
				</div>
			</section>

			<section className="bg-[#ef3b24] pb-[2rem]">
				<div className="py-[2rem]">
					<div className=" w-[100%] items-center justify-center flex flex-col m-auto">
						<h1 className="text-white text-2xl font-sans font-bold  text-center max-w-[600px]">
							{" "}
							{/**border-[1rem] border-[#fff] */}
							Experience the full power of an AI content generator that delivers
							premium results in seconds.
						</h1>
						<h2 className="text-3xl font-sans font-bold pt-[1rem]">
							Testimonials
						</h2>
					</div>
				</div>

				<div className="w-[100%] h-[40%]">
					<Swiper
						effect={"coverflow"}
						grabCursor={true}
						centeredSlides={true}
						loop={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						slidesPerView={"auto"}
						coverflowEffect={{
							rotate: 20,
							stretch: 0,
							depth: 200,
							modifier: 2,
							slideShadows: true,
						}}
						pagination={true}
						modules={[EffectCoverflow, Pagination, Autoplay]}
						className="mySwiper"
					>
						<div className="w-[80%] h-[30%] flex justify-center items-center m-auto border-[1rem] border-[white]">
							<SwiperSlide className="set">
								<div className="Container_div bg-[#fff] rounded-[10px] p-[2rem]">
									<div className="sub_wrapper">
										<h1 className="text-[red]">Loveth Chineye</h1>
										<small className="">Data Analyst</small>
										<p className="pt-[1rem]">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Aperiam repudiandae necessitatibus aut libero suscipit ex
											ea, accusamus culpa iste blanditiis? Quae distinctio
											soluta eaque aliquam obcaecati qui sint sit quam.
										</p>
									</div>
								</div>
								{/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
							</SwiperSlide>
							<SwiperSlide className="set">
								<div className="Container_div  bg-[#fff] rounded-[10px] p-[2rem]">
									<div className="sub_wrapper">
										<h1 className="text-[red]">Loveth Chineye</h1>
										<small className="">Data Analyst</small>
										<p className="pt-[1rem]">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Aperiam repudiandae necessitatibus aut libero suscipit ex
											ea, accusamus culpa iste blanditiis? Quae distinctio
											soluta eaque aliquam obcaecati qui sint sit quam.
										</p>
									</div>
								</div>
								{/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
							</SwiperSlide>
							<SwiperSlide className="set">
								<div className="Container_div  bg-[#fff] rounded-[10px] p-[2rem]">
									<div className="sub_wrapper">
										<h1 className="text-[red]">Loveth Chineye</h1>
										<small className="">Data Analyst</small>
										<p className="pt-[1rem]">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Aperiam repudiandae necessitatibus aut libero suscipit ex
											ea, accusamus culpa iste blanditiis? Quae distinctio
											soluta eaque aliquam obcaecati qui sint sit quam.
										</p>
									</div>
								</div>
								{/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
							</SwiperSlide>
							<SwiperSlide className="set">
								<div className="Container_div  bg-[#fff] rounded-[10px] p-[2rem]">
									<div className="sub_wrapper">
										<h1 className="text-[red]">Loveth Chineye</h1>
										<small className="">Data Analyst</small>
										<p className="pt-[1rem]">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Aperiam repudiandae necessitatibus aut libero suscipit ex
											ea, accusamus culpa iste blanditiis? Quae distinctio
											soluta eaque aliquam obcaecati qui sint sit quam.
										</p>
									</div>
								</div>
								{/* <img src="https://swiperjs.com/demos/images/nature-4.jpg" /> */}
							</SwiperSlide>
							<SwiperSlide className="set">
								<div className="Container_div  bg-[#fff] rounded-[10px] p-[2rem]">
									<div className="sub_wrapper">
										<h1 className="text-[red]">Loveth Chineye</h1>
										<small className="">Data Analyst</small>
										<p className="pt-[1rem]">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Aperiam repudiandae necessitatibus aut libero suscipit ex
											ea, accusamus culpa iste blanditiis? Quae distinctio
											soluta eaque aliquam obcaecati qui sint sit quam.
										</p>
									</div>
								</div>
								{/* <img src="https://swiperjs.com/demos/images/nature-5.jpg" /> */}
							</SwiperSlide>
							<SwiperSlide className="set">
								<div className="Container_div  bg-[#fff] rounded-[10px] p-[2rem]">
									<div className="sub_wrapper">
										<h1 className="text-[red]">Loveth Chineye</h1>
										<small className="">Data Analyst</small>
										<p className="pt-[1rem]">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Aperiam repudiandae necessitatibus aut libero suscipit ex
											ea, accusamus culpa iste blanditiis? Quae distinctio
											soluta eaque aliquam obcaecati qui sint sit quam.
										</p>
									</div>
								</div>
								{/* <img src="https://swiperjs.com/demos/images/nature-6.jpg" /> */}
							</SwiperSlide>
							<SwiperSlide className="set">
								<div className="Container_div  bg-[#fff] rounded-[10px] p-[2rem]">
									<div className="sub_wrapper">
										<h1 className="text-[red]">Loveth Chineye</h1>
										<small className="">Data Analyst</small>
										<p className="pt-[1rem]">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Aperiam repudiandae necessitatibus aut libero suscipit ex
											ea, accusamus culpa iste blanditiis? Quae distinctio
											soluta eaque aliquam obcaecati qui sint sit quam.
										</p>
									</div>
								</div>
								{/* <img src="https://swiperjs.com/demos/images/nature-7.jpg" /> */}
							</SwiperSlide>
							<SwiperSlide className="set">
								<div className="Container_div  bg-[#fff] rounded-[10px] p-[2rem]">
									<div className="sub_wrapper">
										<h1 className="text-[red]">Loveth Chineye</h1>
										<small className="">Data Analyst</small>
										<p className="pt-[1rem]">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Aperiam repudiandae necessitatibus aut libero suscipit ex
											ea, accusamus culpa iste blanditiis? Quae distinctio
											soluta eaque aliquam obcaecati qui sint sit quam.
										</p>
									</div>
								</div>
								{/* <img src="https://swiperjs.com/demos/images/nature-8.jpg" /> */}
							</SwiperSlide>
							<SwiperSlide className="set">
								<div className="Container_div  bg-[#fff] rounded-[10px] p-[2rem]">
									<div className="sub_wrapper">
										<h1 className="text-[red]">Loveth Chineye</h1>
										<small className="">Data Analyst</small>
										<p className="pt-[1rem]">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Aperiam repudiandae necessitatibus aut libero suscipit ex
											ea, accusamus culpa iste blanditiis? Quae distinctio
											soluta eaque aliquam obcaecati qui sint sit quam.
										</p>
									</div>
								</div>
								{/* <img src="https://swiperjs.com/demos/images/nature-9.jpg" /> */}
							</SwiperSlide>
						</div>
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default HomePage;
