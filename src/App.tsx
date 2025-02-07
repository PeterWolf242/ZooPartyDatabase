import "./App.css";
import { animals } from "./components/data";
import AnimalCard from "./components/AnimalCard";

function App() {
	return (
		<div className="w-full h-full bg-creme pb-24">
			<h1 className="text-yellow-creme text-6xl uppercase tracking-[10px] font-bold text-center pt-10 [text-shadow:_0_4px_14px_rgb(0_0_0_/_0.8)]">
				ZooPartyPlus
			</h1>
			<div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-12 mx-auto px-4">
				{animals.map((animal) => (
					<AnimalCard
						key={animal.name}
						name={animal.name}
						species={animal.species}
						habitat={animal.habitat}
						lifespan={animal.lifespan}
						diet={animal.diet}
						funFacts={animal.funFacts}
						imgURL={animal.imgURL}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
