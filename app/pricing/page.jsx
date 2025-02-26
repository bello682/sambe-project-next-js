"use client";
import React from "react";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
// import required modules for swiper js
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules for swiper js
import { Switch } from "antd";

const PricingPage = () => {
	const onChange = (checked) => {
		console.log(`switch to ${checked}`);
	};
	return (
		<>
			<section>
				<div className="w-[100%] h-[100%] pt-[6rem]">
					<Image
						src="/asset/pricingBackground.svg"
						alt=""
						width={300}
						height={300}
						className="w-[100%] object-contain"
					/>
					<div className="border-[red] border-[5px] flex flex-col justify-center items-center m-auto max-w-[100%] w-[100%]">
						<h1>Choose Plan</h1>
						<p>Join over 1,000,000+ writing with Sambé</p>
						<div>
							Pay Monthly <Switch defaultChecked onChange={onChange} /> Pay
							Yearly
						</div>

						<div className="grid grid-cols-3 gap-[2rem] w-[85%] mt-[3rem]">
							<div className="rounded-lg cursor-pointer border-[2px] border-black">
								<div className="bg-[#0D0F3666] flex flex-col justify-center items-center m-auto py-[3rem]">
									<h1 className="text-[red] font-sans font-[500] text-xl mb-[2rem]">
										Free
									</h1>
									<p className="text-2xl text-[red]">
										$<span className="text-[40px] text-[red] font-bold">0</span>
									</p>
									<button className="text-[red] bg-[transparent] py-[10px] px-[30px] border-[red] border-[1px] rounded-lg">
										Sign up for free
									</button>
								</div>
								<div className="flex flex-col px-[2rem] py-[4rem]">
									<ul className="ul__list">
										<li>
											<FaCircleCheck />
											<p>One free daily search for content Ideas</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Save draft</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="rounded-lg cursor-pointer border-[2px] border-black">
								<div className="bg-[#0D0F3666] flex flex-col justify-center items-center m-auto py-[3rem]">
									<h1 className="text-[red] font-sans font-[500] text-xl mb-[2rem]">
										Gold
									</h1>
									<p className="text-2xl text-[red]">
										$
										<span className="text-[40px] text-[red] font-bold">15</span>
									</p>
									<button className="text-[white] bg-[red]  py-[10px] px-[60px] border-[red] border-[1px] rounded-lg">
										Sign up
									</button>
								</div>
								<div className="flex flex-col px-[2rem] py-[4rem]">
									<ul className="ul__list">
										<li>
											<FaCircleCheck />
											<p>One free daily search for content Ideas</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Save draft</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Questionnaire for customized ideas generation</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Access to Top Keywords/Hashtags per Industry</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Download as PDF</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Share post on Social Media</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Access to royalty free images</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Access to Premium Community</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Access to Sambé Book Club</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Access to live Masterclasses (no replay)</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="rounded-lg cursor-pointer border-[2px] border-black">
								<div className="bg-[#0D0F3666] flex flex-col justify-center items-center m-auto py-[3rem]">
									<h1 className="text-[red] font-sans font-[500] text-xl mb-[2rem]">
										Lifetime Plan
									</h1>
									<p className="text-2xl text-[red]">
										$
										<span className="text-[40px] text-[red] font-bold">65</span>
									</p>
									<button className="text-[red] bg-[transparent] py-[10px] px-[30px] border-[white] border-[1px] rounded-lg">
										Sign up for free
									</button>
								</div>
								<div className="flex flex-col px-[2rem] py-[4rem]">
									<ul className="ul__list">
										<li>
											<FaCircleCheck />
											<p>One free daily search for content Ideas</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Save draft</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Top Keywords/ Hashtags per Industry</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Download as PDF</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Share post on Social Media</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Access to royalty free images</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Access to Premium Community</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Access to live Masterclasses (Replay included)</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>Access to Sambé Book Club</p>
										</li>
										<li>
											<FaCircleCheck />
											<p>
												Exclusive Access to Sambé Monthly Group Coaching Call
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-[#ef3b24]">
				<div className="pt-[2rem]">
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

export default PricingPage;
