import React from "react";
import Image from "next/image";

const page = () => {
	return (
		<div className="w-[100%] h-auto bg-[#f1f1f1] pt-[10rem]">
			<div className="bg-[#fff] py-[2rem] px-[2rem] w-[80%] justify-center items-center m-auto shadow-2xl rounded ">
				<h1 className="text-black text-3xl text-center mt-3">ABOUT US</h1>
				<div className="w-[100%] mt-[2rem]">
					<p className="flex justify-center items-center m-auto max-w-[570px] text-center text-[20px] font-bold text-[#5695cd] font-sans">
						Say Goodbye to Spending Precious Hours Creating your Social Media
						Content... Save Time and Get Research Content Ideas on the Go
					</p>
				</div>

				<h5 className="text-red-600 my-[1rem] text-xl">
					Who Are Those Using Sambe
				</h5>
				<h6 className="text-red-600 mt-[1rem] mb-[0.5rem] text-xl py-1 ">
					Corporate Organisations
				</h6>
				<p className="font-sans text-[18px] font-[500] text-[#757373]">
					Corporate organisation Teams are using Sambe to write corporate and
					business writings that are precise and accurate.
				</p>

				<h6 className="text-red-600 my-[1rem] text-xl">Business Owners</h6>
				<p className="font-sans text-[18px] font-[500] text-[#757373]">
					Business owners use Sambe to create content for their business. Either
					product or service based content, Sambe can help you create content
					that converts to sales or visibility.
				</p>

				<h6 className="text-red-600 my-[1rem] text-xl">Freelancers</h6>
				<p className="font-sans text-[18px] font-[500] text-[#757373]">
					It gets easier to earn money by writing content for clients in
					different niches and industries. As a freelancer, you can use Sambe,
					an AI content generator tool to create catchy and precise copies and
					content for your clients. It saves you time, resources and research
					while ensuring you have a satisfied client.
				</p>
			</div>

			<div className="mt-[1rem]">
				<div className="grid justify-center items-center py-[10rem] mx-auto">
					<h1 className="text-center text-4xl mb-1">
						Search a word to get started!
					</h1>
					<Image
						src="/asset/company-logo-potrait.svg"
						alt=""
						width={300}
						height={300}
						// in tailwind css i use "object-contain" to bypass the "absolute" which was already given to the svg image in css i use "style={{ position: 'relative', maxWidth: '100%', maxHeight: '100%' }}" to remove the "absolute"
						className="object-contain justify-center items-center m-auto "
					/>
				</div>
			</div>
		</div>
	);
};

export default page;
