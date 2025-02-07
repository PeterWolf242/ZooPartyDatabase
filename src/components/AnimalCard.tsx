import { Animal } from "./data";

export default function AnimalCard(props: Animal) {
	return (
		<div className="animal_box bg-brown-creme flex flex-col rounded-2xl h-[58rem] overflow-hidden pt-10 cursor-pointer">
			<div className="w-[12rem] flex justify-center items-center h-[12rem] mx-auto">
				<img
					className="animal_picture block object-cover saturate-50"
					src={props.imgURL}
					alt=""
				/>
			</div>
			{/* <p className="flex justify-center items-center text-8xl text-center h-[10rem] border-red-600 border-5">
				{props.imgURL}
			</p> */}
			<article>
				{/* Animal-Name */}
				<h2 className="animal_name w-fit mx-auto text-brown-dark text-5xl text-center font-bold tracking-[5px] uppercase py-4 px-8">
					{props.name}
					{/* Lateinischer Name */}
				</h2>
				<p className="text-white text-center text-2xl flex justify-center items-center h-[3rem]">
					{props.species}
				</p>
				{/* Vorkommen */}
				<p className="text-rown-dark text-center text-3xl my-5 uppercase">
					{props.habitat}
				</p>
				{/* Ernährung */}
				<p className="text-obsidian-light text-center text-3xl my-5">
					{props.diet}
				</p>
				{/* Lebenserwartung */}
				<p className="text-obsidian-light text-center text-xl my-5">
					{props.lifespan} Years
				</p>
				{/* Beschreibung */}
				<div className="bg-yellow-creme text-center text-2xl h-[390px] flex items-start border-t-obsidian border-t-8">
					<p className="text-obsidian font-semibold leading-10 px-16 flex items-center h-100">
						{props.funFacts}
					</p>
				</div>
			</article>
		</div>
	);
}
