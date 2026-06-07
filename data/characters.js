const characters = [
  {
    id: 1,
    name: "Mario",
    gameSeries: ["Super Mario", "Super Mario Bros.", "Super Mario World", "Super Mario 64", "Super Mario Odyssey"],
    powers: ["Fireball", "Mushroom", "Super Star", "Super Jump", "Fire Flower"],
    genre: "Platformer",
    role: "Protagonist",
    description:"Mario is a plumber who goes on adventures to resuce Pricess Peach of Mushroom Kingdom from Browerser. He has a little brother named Luigi and a pet dinosur named Yoshi.",
    image: "/images/mario.jpg"

  },

  {
    id: 2,
    name: "Link",
    gameSeries: ["The Legend of Zelda", "The Legend of Zelda: Ocarina of Time", "The Legend of Zelda: Twilight Princess", "The Legend of Zelda: Breath of the Wild"],
    powers: ["Master Sword", "Hylian Sheild", "Bow and Arrow", "Bombs", "Hookshot"],
    genre: "Action-Adventure",
    role: "Hero",
    description: "Link is a courageous hero who on adventures to save the land of Hyrule and rescue Princess Zelda from the Demon King Ganondorf.",
    image: "/images/link.png"
  },

  {
    id: 3,
    name: "Joker",
    gameSeries: ["Persona 5", "Persona 5 Royal", "Persona 5 Strikers", "Persona Q 2: New Cinema Labyrinth"],
    powers: ["Wild Card", "Dagger", "Gun", "Persona Summoning", "Fusion Summoning"],
    genre: "Japanese Role-Playing Game (JRPG)",
    role: "Protagonist",
    description: "Joker is the main protagonist of Persona 5. His true name is Ren Amamiya, but his code name is Joker. He is a high school student who becomes a Phantom Thief to fight against corruption in society and change the hearts of wrongdoers.",
    image: "/images/joker.png"
  },

  {
    id: 4,
    name: "Phoenix Wright",
    gameSeries: ["Phoenix Wright: Ace Attorney", "Phoenix Wright: Ace Attorney - Justice for All", "Phoenix Wright: Ace Attorney - Trials and Tribulations", "Phoenix Wright: Ace Attorney - Dual Destinies", "Phoenix Wright: Ace Attorney - Spirit of Justice", "Ulitmate Marvel vs. Capcom 3"],
    powers: ["Objection!", "Cross-Examination", "Evidence Presentation"],
    genre: "Adventure, Visual Novel",
    role: "Protagonist",
    description: "Phoenix Wright is a defense attorney who takes on varoius cases to defend his clients and uncover the truth. His catchphrase is 'Objection!' which he uses to challenge the prosecution's arguments in court." + "He has a partner named Maya Fey, who is a spirit medium and helps him with his cases.",
    image: "/images/phoenix.png"
  },

  {
    id: 5,
    name: "Jill Valentine",
    gameSeries: ["Resident Evil", "Resident Evil 3: Nemesis", "Resident Evil: 5", "Resident Evil: Revelations", "Marvel vs. Capcom 2: New Age of Heroes", " Ulitmate Marvel vs. Capcom 3: Fate of Two Worlds", "Resident Evil: Resistance"],
    powers: ["Combat skills", "Firearms proficiency", "Survival skills", "T-Virus Immunity", "S.T.A.R.S. Training", "Grenades", "First Aid", "Knife", "Hand Gun", "Shotgun", "Assault Rifle"],
    genre: "Survival Horror",
    role: "Protagonist",
    description: "Jill Valentime is a former member of the S.T.A.R.S. (Special Tactics and Rescue Service) team and one of the main protagonists in the Resident Evil series. She is known for her combat skills, firearms proficiency, and survival instincts. Jill has been involved in various biohazard outbreaks and has fought against numerous bioweapons and zombies throughout the series.",
    image: "/images/jill.jpg"
  },

  {
    id : 6,
    name: "Sora",
    gameSeries: ["Kindom Hearts", "Kingdom Hearts II", "Kingdom Hearts III", "Kingdom Hearts: Chain of Memories", "Kingdom Hearts: Birth by Sleep"],
    powers: ["Keyblade Mastery", "Magic Spells", "Drive Forms", "Summoning"],
    genre: "Action Role-Playing",
    role: "Hero",
    description: "Sora is the main protagonist of the Kingdom Hearts series. He goes on a joureny with his friends Donald Duck and Goofy to save various worlds from darkness and find his lost friends. Sora wields a magical weapon called the Keyblade, which allows him to fight against the forces of darkness and unlock new abilities. Sora and his friends travel to different Disney and Square Enix worlds, battling enemies and forging new friendships along the way.",
    image: "/images/sora.png"
  },

  {
    id: 7,
    name: "Ike",
    gameSeries: ["Fire Emblem: Path of Radiance", "Fire Emblem: Radiant Dawn", "Super Smash Bros. Brawl", "Super Smash Bros. for Nintendo 3DS and Wii U", "Super Smash Bros. Ultimate"],
    powers: ["Swordsmanship", "Ragnell (Two-Handed Sword)", "Aether (Special Move)", "Counterattack"],
    genre: "Tactical Role-Playing",
    role: "Protagonist",
    description: "Ike is a skilled swordsman and the main Hero of the Fire Emblem: Path of Radiance and Fire Emblem: Radiant Dawn games. He is known for his strength, courage, and loyalty. Ike wields a powerful two-handed sword called Ragnell and has a special move called Aether that allows him to strike multiple times in quick succession. He is a member of the Greil Mercenaries and fights to protect his friends and defeat the forces of evil.",
    image: "/images/ike.jpg"
  },

  {
    id: 8,
    name: "Lara Croft",
    gameSeries: ["Tomb Raider", "Tomb Raider: Anniversary", "Tomb Raider: Legend", "Tomb Raider: Underworld", "Tomb Raider (2013)", "Rise of the Tomb Raider", "Shadow of the Tomb Raider"],
    powers: ["Combat skills", "Marksmanship", "Acrobatics", "Survival skills", "Archaeological knowledge"],
    genre: "Action-Adventure",
    role: "Anti-Hero",
    description: "Lara Croft is a British archaeologist and adventurer who is the main protagonist of the Tomb Raider series. She is known for her intelligence, athleticism, and combat skills. Lara goes on various expeditions to uncover ancient artifacts and solve mysteries while facing dangerous enemies and overcoming challenging obstacles.",
    image: "/images/lara.jpg"
  },

  {
    id: 9,
    name: "Yuri Lowell",
    gameSeries: ["Tales of Vesperia", "Tales of Vesperia: Definitive Edition"],
    powers: ["Swordsmanship", "Artes (Special Abilities)", "Overlimit Mode"],
    genre: "Action Role-Playing",
    role: "Vigilante anti-hero",
    description: "Yuri Lowell is the main protagonist of the Tales of Vesperia series. She is a skilled swordsman and a member of the Vesperia resistance movement. Yuri wields a powerful sword and has the ability to enter Overlimit Mode, which enhances her combat abilities.",
    image: "/images/yuri.jpg"

  },

  {
    id: 10,
    name: "Sonic the Hedgehog",
    gameSeries: ["Sonic the Hedgehog", "Sonic the Hedgehog 2", "Sonic the Hedgehog 3", "Sonic & Knuckles", "Sonic Adventure", "Sonic Adventure 2", "Sonic Generations", "Sonic Forces", "Sonic Heroes", "Sonic Colors", "Super Smash Bros. Brawl", "Super Smash Bros. for Nintendo 3DS and Wii U", "Super Smash Bros. Ultimate"],
    powers: ["Super Speed", "Spin Attack", "Homing Attack", "Super Sonic Transformation"],
    genre: "Platformer",
    role: "Hero",
    description: "Sonic the Hedgehog is a blue anthropomorphic hedgehog known for his incredible speed and adventurous spirit. He is the main protagonist of the Sonic the Hedgehog series. Sonic's primary ability is his super speed, which allows him to run at supersonic speeds and perform various attacks, such as the Spin Attack and Homing Attack. He can also transform into Super Sonic when he collects all seven Chaos Emeralds, granting him invincibility and enhanced abilities.",
    image: "/images/sonic.jpg"
  }
]

export default characters;