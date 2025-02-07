export type Animal = {
    name: string;
    species: string;
    habitat: string;
    lifespan: number;
    diet: string;
    funFacts: string[];
    imgURL: string;

};

export const animals: Animal[] = [
    {
        name: "Lion",
        species: "Panthera leo",
        habitat: "Grasslands",
        lifespan: 12,
        diet: "Carnivore",
        funFacts: [
            "Lions are the only cats that live in groups.",
            "A group of lions is called a pride.",
            "Male lions usually sleep 20 hours a day.",
        ],
        imgURL: "/src/assets/img/loewe.png",
    },
    {
        name: "Panda",
        species: "Ailuropoda melanoleuca",
        habitat: "Bamboo Forests",
        lifespan: 20,
        diet: "Herbivore",
        funFacts: [
            "Pandas spend most of their day eating bamboo.",
            "They have a special thumb for gripping bamboo.",
            "Pandas are excellent climbers.",
        ],
        imgURL: "/src/assets/img/panda.png",
    },
    {
        name: "Elephant",
        species: "Loxodonta",
        habitat: "Savannah",
        lifespan: 60,
        diet: "Herbivore",
        funFacts: [
            "Elephants can recognize themselves in a mirror.",
            "They have the largest brains of any land animal.",
            "Elephants use their trunks for breathing, smelling, and grabbing objects.",
        ],
        imgURL: "/src/assets/img/elefant.png",
    },
    {
        name: "Dolphin",
        species: "Delphinidae",
        habitat: "Oceans",
        lifespan: 25,
        diet: "Carnivore",
        funFacts: [
            "Dolphins use a unique whistle to identify themselves.",
            "They are known for their playful behavior and high intelligence.",
            "Dolphins sleep with one eye open.",
        ],
        imgURL: "/src/assets/img/delfine.png",
    },
    {
        name: "Tiger",
        species: "Panthera tigris",
        habitat: "Jungles",
        lifespan: 15,
        diet: "Carnivore",
        funFacts: [
            "Tigers are excellent swimmers and enjoy being in the water.",
            "They have striped skin, not just striped fur.",
            "A group of tigers is called a streak or ambush.",
        ],
        imgURL: "/src/assets/img/tiger.png",
    },
    {
        name: "Gazelle",
        species: "Antilopinae",
        habitat: "Grasslands",
        lifespan: 12,
        diet: "Herbivore",
        funFacts: [
            "Gazelles are known for their incredible speed and agility.",
            "They have a keen sense of hearing and eyes positioned to detect predators.",
            "Gazelles are social animals and often form large herds for protection.",
        ],
        imgURL: "/src/assets/img/gazelle.png",
    },
    {
        name: "Giraffe",
        species: "Giraffa camelopardalis",
        habitat: "Savannah",
        lifespan: 25,
        diet: "Herbivore",
        funFacts: [
            "Giraffes have the same number of neck vertebrae as humans (7).",
            "A giraffe's tongue can be up to 45 cm long.",
            "They only need 5 to 30 minutes of sleep in a 24-hour period.",
        ],
        imgURL: "/src/assets/img/giraffe.png",
    },
    {
        name: "Kangaroo",
        species: "Macropus",
        habitat: "Australia",
        lifespan: 6,
        diet: "Herbivore",
        funFacts: [
            "Kangaroos are excellent jumpers and can cover large distances.",
            "Female kangaroos have three vaginas.",
            "They use their tails for balance and support while hopping.",
        ],
        imgURL: "/src/assets/img/kaengeruh.png",
    },
    {
        name: "Cheetah",
        species: "Acinonyx jubatus",
        habitat: "Savannah",
        lifespan: 12,
        diet: "Carnivore",
        funFacts: [
            "Cheetahs are the fastest land animals, reaching speeds up to 75 mph.",
            "They cannot roar like other big cats.",
            'Cheetahs have distinctive "tear stripes" on their faces.',
        ],
        imgURL: "/src/assets/img/gepard.png",
    },
    {
        name: "Penguin",
        species: "Spheniscidae",
        habitat: "Antarctica",
        lifespan: 20,
        diet: "Fish",
        funFacts: [
            "Penguins are excellent swimmers but are flightless birds.",
            "They mate for life and often engage in elaborate courtship rituals.",
            "The Emperor Penguin is the tallest and heaviest species of penguin.",
        ],
        imgURL: "/src/assets/img/pinguin.png",
    },
    {
        name: "Hippopotamus",
        species: "Hippopotamus amphibius",
        habitat: "Rivers",
        lifespan: 40,
        diet: "Herbivore",
        funFacts: [
            "Hippos are responsible for more human deaths in Africa than other large animals.",
            "They are excellent swimmers and can hold their breath for up to 5 minutes.",
            "Despite their appearance, hippos can run surprisingly fast on land.",
        ],
        imgURL: "/src/assets/img/nilpferd.png",
    },
    {
        name: "Polar Bear",
        species: "Ursus maritimus",
        habitat: "Arctic",
        lifespan: 25,
        diet: "Carnivore",
        funFacts: [
            "Polar bears are the largest land carnivores and are excellent swimmers.",
            "They have a thick layer of blubber to insulate them from the cold.",
            "Polar bears rely on sea ice to hunt seals, their main prey.",
        ],
        imgURL: "/src/assets/img/eisbaer.png",
    },
    {
        name: "Koala",
        species: "Phascolarctos cinereus",
        habitat: "Eucalyptus Forests",
        lifespan: 15,
        diet: "Herbivore",
        funFacts: [
            "Koalas are marsupials and carry their underdeveloped young in a pouch.",
            "They primarily eat eucalyptus leaves and are known for their sleepy demeanor.",
            "Koalas have a unique digestive system adapted to detoxify eucalyptus toxins.",
        ],
        imgURL: "/src/assets/img/koala-baer.png",
    },
    {
        name: "Gorilla",
        species: "Gorilla",
        habitat: "Rainforests",
        lifespan: 35,
        diet: "Herbivore",
        funFacts: [
            "Gorillas are the largest primates and share about 98% of their DNA with humans.",
            "They live in social groups called troops, led by a dominant silverback.",
            "Gorillas use a variety of vocalizations and facial expressions to communicate.",
        ],
        imgURL: "/src/assets/img/gorilla.png",
    },
    {
        name: "Arctic Fox",
        species: "Vulpes lagopus",
        habitat: "Arctic Tundra",
        lifespan: 14,
        diet: "Omnivore",
        funFacts: [
            "Arctic foxes have thick fur that changes color with the seasons.",
            "They are well-adapted to cold climates and can withstand frigid temperatures.",
            "Arctic foxes are known for their intelligence and resourcefulness.",
        ],
        imgURL: "/src/assets/img/polarfuchs.png",
    },
    {
        name: "Quokka",
        species: "Setonix brachyurus",
        habitat: "Australia",
        lifespan: 10,
        diet: "Herbivore",
        funFacts: [
            "Quokkas are known for their friendly and smiling appearance.",
            "They are herbivorous and primarily eat grasses and leaves.",
            "Quokkas are social animals and often gather in groups.",
        ],
        imgURL: "/src/assets/img/kurzschwanz-kaengeruh.png",
    }
];
