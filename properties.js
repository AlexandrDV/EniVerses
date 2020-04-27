	//--- Name: EniVerses/Vesion: 0.1.5a/Author[nos: AlexanderDV/Description: Properties EniVerses .js. ---
var universesConfig	=	"",universes=[],tab="\t"
function add(adding){
	universesConfig+=adding.replace(/\t/g,tab)+"\n"
	universes.push(adding.split("\n")[0])
}
add(`My
	About
		Author[no
			Me
		Language[no
			Russian
	Artefact
		s0[no
		s1[no
		s2[no
		s3[no
		s4[no
		s5[no
			Wand
			Rod
			Staff
		s6[no
		s7[no
	Without//Entity without shell, how names
		-2	=	Unthing
		-1	=	Unbody, Spirit
		+0	=	Unlife
		+1	=	Undead
		+2	=	Unentity
		+3	=	Unperson
		+4	=	Unmind
		+5	=	Unmage	//not equal to muggle, nomage
		+6	=	Unimmortal, Mortal
		+7	=	Ungod
	Shell
		-5	=	Magical Body?
		-4	=	Informatic Body?
		-3	=	Feeling Body?
		-2	=	Ether Body
		-1	=	Matter Body
		+0	=	Core, lifing
		+1	=	Vital, living
		+2	=	Astral, spirital
		+3	=	Person, feeling
		+4	=	Mind, logical
		+5	=	Magical, creativity
		+6	=	Immortal, immortality function
		+7	=	God, Real-turning
		//Index of energy equals to index of shell that used this energy (not have, use)
	Energy
		-5	=	Mrana?
		-4	=	Psy?
		-3	=	Ema?
		-2	=	Spirita?
		-1	=	Prana
		+0	=	Force
		+1	=	Ki
		+2	=	Reatsu
		+3	=	Emana
		+4	=	Esperi
		+5	=	Mana
		+7	=	Ba-Hion
		+1+2	=	Ki+Reatsu
		+3+5	=	Emana+Mana
		em
			dm	=	Dark?
			lm	=	Light?
			ft	=	faith?
			md	=	Mind?
		ln	=	Lantern?
			pr	=	Pride of Gold?
			pf	=	Pathos of Gray?
	Level
		0.0	=	Nomage		//	G	Not	Demon
		0.3	=	...
		0.5	=	...
		0.7	=	...
		1.0	=	Weak			//	F	Lower	Demon
		1.3	=	...
		1.5	=	...
		1.7	=	...
		2.0	=	Simple		//	E	Low	Demon
		2.3	=	...
		2.5	=	...
		2.7	=	...
		3.0	=	Normal		//	D	Medium	Demon
		3.3	=	...
		3.5	=	...
		3.7	=	...
		4.0	=	High			//	C	High	Demon
		4.3	=	...
		4.5	=	...
		4.7	=	...
		5.0	=	Higher		//	B	Higher	Demon
		5.3	=	...
		5.5	=	...
		5.7	=	...
		6.0	=	Arch			//	A	Arch	demon
		6.3	=	...
		6.5	=	...
		6.7	=	...
		7.0	=	God				//	S	God	Demon
		7.3	=	...
		7.5	=	...
		7.7	=	...
		8.0	=	Demiurg				//	X	Demiurg
		8.3	=	...
		8.5	=	...
		8.7	=	...
	User
		s0[no
		s1[no
		s2[no
		s3[no
		s4[no
		s5[no
			e1	=	Kiuser
			e2	=	Reatser
			e3	=	Emotic
			e4	=	Psyhic
			e5	=	Mage
				dm	=	Black
				gm	=	Gray
				lm	=	White
			e1+e2	=	Shinobi
			e3+e5	=	Wizard
				dm	=	Black
				gm	=	Gray
				lm	=	White
		s6[no
		s7[no
			God_1
				Dark
				Neutral	=	Beastgod
				Light
	Direction
		//Type of actions for ability
		Language[no
			Word
			Number
			Gesture
			Spell
			Ritual
			Rune
			Construct
			Weaving
			Image
			Picture
			Will
			Schema
			Technique
			Fuin
			Seal
		//Type of ability using
		Type[no
			Straight
			Object
			Saving
		Form
			Atack
				GodHand
				Ball
				Lightning
				Lightnings tree
				Ray
				Hammer
				Flare
				Wave?
				Storm?
				Tornado?
				Explosion?
				Protuberanets?
			Protect
				Shield
				Cupola
				Cocoon
				Armor
				Aura
				Protection
			Weapon
				Lash
				Sword
				Blade
				Torch
				Arrow
				Spear
				Shuriken
				Bullet
				Ram
				Needle
				Screw
			Crate
				Crate
				Fetters
				Net
				Shackles
			Misc
				Chain
				Funnel
				Field
				Tentacle
				Mirror
				Thread
				Elemental
				Clone
				Thing
				Wings
				Limb
				Cloak
		Element
			Basic
				Fire
				Water
				Earth
				Air
				Ice
				Electrizity
			First
				Dark
				Light
				Chaos
				Order
				Death
				Life
			Add
				Tree
				Metal
				Rock
				Lava
				Heat
				Plasma
			Misc
				Blood
				Mirror
				Shadow
				Picture
				//
				Desecration
				Desintegration
				Unemboding
				Spirit
				Thirst
			Emotion
				Pain
			Material
			Other
				Tech
				Motion
				Time
					Tempoflucation
					Back
					Petlya
					Stop
					Prerivanye
					Vicherkivanye
					Jump
				Space
					Portal
						Dimension
						Linked
						World
						Domen
						Normal
					Zip
					Pocket
					Dense
					Bubble
		Misc[no
			Name
			Physical//Technomage of Rudazov
			Volt
				Voodoo
				Volt
			Estestvennaya
			Mental
				Protection
				Battle
				Work
				Control
				Penetration
				Create
				Remove
				Connect
				Merge
				Memory
			Soul
			Clairvoyance
				True prophecy
				Probability
				Vision
				Past
				Present
				Future
			Metamorph
				Totem
				Changing
				Turning
				Partial
			Yoga
			Health
		Creature[no
			Demon
			Immortal
			Angel_0
			Undead
			God_1
			Ghost
			Loa
			Vampire
			Holem
			Automate
			Marionette
			Animal
				Talk
				Control
			Bestia
			Flora
			Chimera
				Create
			Phantom
				Create
				Enter
			Doppel
				Material
				Plotniye
				Magical
				Full
				Energed
				Illusor
		Action[no
			Sealing
			Illusion
				Optic
				Holo
				Genjutsu
				Emo
				Mental
				Dense	//Not equals tactil
				Dimension
				Reality
			Materialization
				Creating
				Removing
			Flying
				Walking
				Planing
				Levitation
				Teleport
				Wings
				Reactive
				Gravity
				Archimeds law
				Magic
				Vector
			Invisible
				Illusion
				Delumionation
				Space
				Sokritiye
			Otvod glaz
				Standard
				Other think
				All ok
				this is not matter
				Slepoye pyatno
				Zabinaniye
			Otdeleniye
				Emotional
				Bakullumist
			Versusmagic
				Razveivaniye
				Finita
				Time
				Space
				Mirror
				Vector
				Shield
				Prisvoyeniye
				Razrusheniye
				Unenerging
				Eating
				Nonmaterial
				Otoyti
				zapechativaniye
				kletka
				stop
				neutalizing
				material
				teleport
				turning
				Razrivaniye
				Deactivation
				Kontrspell
				Antimagic
				Resist
				Impossible
				Derealising
				Razvoplosheniye
				Fire
				Ice
				Make to illusion
				Razdavit
				Magagasitel
				Magazakuporivatel
				Obolochka
				Gravitation
				Antimagic
				Telekinesis
				Levitation
				Shupaltsa
				Field
				Vector
			Teleport
				Hyper
				Time
				Space zip
				Space change
				Space cut
				Space connection
				Superspeed
				Apparation
				Photon
				Body select
				Nonmaterial
				Disintegration and assembling
				Obmen
				Twilight
				Vector
			Invincible
				Undead/Robot
				Bio
				Soul in body
				Regen
				Filactery
				Reincarnation
				Meta
				Soul/Mental copy
				Soul in world
				Mye
			Regen
				Bio
				Stvolovie kletki
				Konechnosti
				From pieces
				From kletok
				From chastits
				By Soul
				From universe
			Curse
			Vow
			Blessing
			//
			Warlock
			Apostol
			//
			Hooly
			Love
			Summon
			Music
			Domestic
			Meteo
				Weather
				Klimat
				Kataklism
			Battle
			Protection
			Artefact
			Elixir
				Potion
				Putting
			Alchemy
				Astral
				Physical
				Full
			Transformation
				Form
				Figure
				Material
				Structure
	Metaverse
		Rudazov
		...All
		Original
			Structure
				Multiverse
					Multispace
					Universe
						Space
						Content
							Reality
							Energy
							Form,Info, Structure
								Info
								Structure
								Type
									Full-Realized-Type		Matter=	222
										Matter=	312
										Energy=	231
										Ether	=	123
									Half-Realized-Type		Ether
										Chaos	=	120
										Limbo	=	110
										Ether	=	122
									Non-Realized-Type			Info
										Info	=	002
										Structure
										Type
						Time
					Multitime
				Chaos
				Limbo
	Dimension
		Core
		Hyper
		Normal
		Hypo
		Matteral
		Matteral-Etheral	=	Twilight-Shadow
			0	=	Normal
			1	=	x3
			2	=	x9, cold
			3	=	x27, full gray
			4	=	red oblako
			5	=	?
			6	=	Subnormal, Pseudo-Heaven, Hell for other
			7	=	Normal	//Can be backside
		Etheral
		Etheral-Mental	=	Dream
		Mental
		Limbo
		Chaos
	Feature
		s4[no
			Poltergeist
			Undead
				Ghoul
				Zombie
				Einherjar
				Draugr
				Lich
			Spirit
				Brownie
				Boggart
				Ghost
				Loa
				Embodied
		s5[no
			Vampire
				Weak	=	Madness
				Normal	=	Ordinary
				High	=	Energetic
			Werewolf
				Weak	=	Licantrop
				Normal	=	Ordinary
				High	=	Multiform
			Cubus
				Incubus
				Succubus
		s6[no
			Immortal
				Dark	=	Demon_0
				Neutral	=	Immortal
					Magic	=	Jinn
					Body	=	Titan_0
					Life	=	Arch
				Light	=	Angel_0`)
add(`Marvel
	About
		Language[no
			English
	Multiverse
		Original
	Race
		Human
		Zen-Hoberis
		Klyntar
		Kree
		Inhuman
		Chitauri
		Flora Koloss
		Titan_1
	Energy
		+5	=	Magical?
	Feature
		s5[no
			X-Man
	Material
		Metal
			Vibranium
			Adamantium
	Unique
		s7[no
			Infinity Gems
				Space
				Soul
				Reality
				Time
				Power
				Mind
		s6[no
			Loki's Sceptre
			Thor's Mjolnir
	Artefact
		s4[no
			Stark's
				Iron Man suits
				Reactor
			Cerebro`)
add(`Sword Art Online
	About
		Language[no
			Japanese
	Artefact
		s4[no
			Neurohelmet
			Amusphere`)
add(`Hellsing ultimate
	About
		Language[no
			Japanese
	Feature
		s5[no
			Vampire
		s4[no
			Undead`)
add(`Dark souls
	About
		Language[no
			English`)
add(`Devil may cry
	About
		Language[no
			English
	Person
		Dante`)
add(`Bio shock
	About
		Language[no
			English`)
add(`New horizonts
	About
		Author[no
			Shetel-Sorken
		Language[no
			Russian
		Mark[no
			AU
			Вымышленные существа
			Дарк
			Жестокость
			Магический реализм
			Мистика
			Мэри Сью (Марти Стью)
			ОЖП
			ОМП
			ООС
			Отклонения от канона
			Повествование от первого лица
			Подростки
			Попаданчество
			Психические расстройства
			Фантастика
			Фэнтези
		Spoiler[no
			Смерть второстепенных персонажей
			Смерть основных персонажей
	Multiverse
		Original
		Naruto
		Resident Evil
		Marvel
	Race
		Human
		Orc
		Elv
		Ilitishari
	Feature
		s6[no
			Shari
		s5[no
			Telepath
	Ability
		s5[no
			Biokinesis`)
add(`Voshozhdeniye geroya shita
	About
		Language[no
			Japanese`)
add(`Men in black
	About
		Language[no
			English`)
add(`Bad choice
	About
		Author[no
			N.B.
		Language[no
			Russian
		Mark[no
			AU
			Вымышленные существа
			Мэри Сью (Марти Стью)
			ОЖП
			ОМП
			ООС
			Пародия
			Повествование от первого лица
			Попаданчество
			Стёб
			Экшн
			Юмор
	Metaverse
		Original
			Worldtype
				Fire
				Water
				Air
				Earth
				Electrizity
				Ice
				Dark
				Light
				Void
		Voshozhdeniye geroya shita
		Naruto
		Toriko
		Marvel
		Hellsing ultimate
		Dark souls
		DC
		Warcraft
		Bleach
		To Love-Ru
		Dragonball
		Code Geass
		To Aru Majutsu no Index
		Sword Art Online
		Neon Genesis Evangelion
		Fullmetal Alchemist
		Potteriana
		The Gamer
		One Piece
		High School DxD
		Zero no Tsukaima
		Fairy Tale
		Star Wars
		Seilor Moon
	Race
		Human
		Elv
		Unknown Evil Crap
	Energy
		-5	=	Mrana?
		-4	=	Psy?
		-3	=	Ema?
		-2	=	Spirita?
		-1	=	Prana
		+0	=	Force
		+1	=	Ki
		+2	=	Reatsu
		+3	=	Emana
		+4	=	Esperi
		+5	=	Mana
		+7	=	Ba-Hion
		+1+2	=	Ki+Reatsu
		+3+5	=	Emana+Mana
	Spell
		l5	=	Higher circle
			Fire	=	Armageddon
			Water	=	Taifun
			Air	=	Tornado?
			Earth	=	?
	User
		s5[no
			e1	=	Kiuser
			e2	=	Reatsuuser
			e4	=	Psyonic
			e5	=	Mage
			e1+e2	=	Chakrauser
		s6[no
			dm	=	Demon_3
			lm	=	Angel_0
			gm	=	Gamer's System user
				Gamer
				Gamer+
				Gamer T3000
				Cheater
				Cheater+
				Hard
				The Gamer
		s7[no
			e7	=	God_3
		su[no
			e7	=	Unknown Crap
	Ability
		Pathos hurt ignoring
		Hapsiel mode
		Kick of Unknown Crap
	Feature
		Undead
		Entity
		s5[no
			Vampire
			Werewolf
	Artefact
		s5[no
			Entity Stone, ES
			Soul Stone, SS
		s7[no
			Skill-Copy Sphere//Gold
			Skill-Izvlecheniya Sphere
			Skill-Copy Sphere Dark
			Achievement-Copy Sphere
	Dimension
		Dark-Shadow
		Matteral
		Etheral	=	Astral
		Mental
	Person
		s7[no
			Unknown Crap
			Tizitsh
			Chronos
			Player
			Hel
			Hapsiel`)
add(`Orderly
	About
		Language
			Russian
		Author
			Nick Perumov`)
add(`of Azimov
	About
		Author[no
			Azik Azimov
		Language[no
			English
	Dimension
		Hyper`)
add(`of efremov
	About
		Author[no
			Eferemov
		Language[no
			Russian
	Dimension
		Hyper	=	zero-space`)
add(`of hainline
	About
		Author[no
			Robert Hainline
		Language[no
			English
	Dimension
		Hyper	=	Cherenkov drive`)
add(`Hyperion
	Dimension
		Hyper`)
add(`vavilon5
	Dimension
		Hyper`)
add(`Star Gate
	About
		Language[no
			English
	Dimension
		Hyper`)
add(`of Rudazov
	Metaverse
		Original
			Worldtype
				Fire
				Water
				Air
				Earth
				Electrizity
				Ice
				Dark
				Light
				Void
			World
				Rari
				Quetzol-Iin
				Eikr\n\t\t\t	Hvitachi\n\t\t\t	Worldtown
				Lang\n\t\t\t	Kaabar\n\t\t\t	Nine Heavens
				Hell\n\t\t\t	Our	=	Earth-2006\n\t\t\t	Heaven
				Golus	\n\t\t\t	Dotembria
				Pargoron\n\t\t\t	Parifat\n\t\t\t	Salvan
				Patala	\n\t\t\t	Dovos
				Jahannam	\n\t\t\t	Kaf	\n\t\t\t	Janna
				Shemussen	\n\t\t\t	Plonet	\n\t\t\t	N	\n\t\t\t	Labirint	\n\t\t\t	Svarog	\n\t\t\t	Deorg Academy
				X	\n\t\t\t	Z	\n\t\t\t	A	\n\t\t\t	Y	\n\t\t\t	O	\n\t\t\t	Caves Sheymullin
				M	\n\t\t\t	K	\n\t\t\t	H	\n\t\t\t	G	\n\t\t\t	F	\n\t\t\t	E	\n\t\t\t	D	\n\t\t\t	C	\n\t\t\t	B	\n\t\t\t	P	\n\t\t\t	Earth-7112
				Proxima Centaura	\n\t\t\t	Proxima Hell	\n\t\t\t	Proxima Heaven
				World of Yehudin =	Dodekaedr
	About
		Author[no
			Alexander Rudazov
		Language[no
			Russian
	Race
		Human
		Elv_2
		Sid
		Dev
		Devkatsi
		Eist
		Titan_0
		Jinn
		Kiig
	Shell
		-2	=	3	Body, Matter of
		-1	=	1	Physical body
		+0	=	4 Atman
		+1	=	2 Vital
		+2	=	3	Astral, aura
		+3	=	5 Person
		+4	=	6	Psyhic
		+5	=	7	Magic
		+6	=	8 Immortal
		+7	=	9	God
	Energy
		-1	=	2 Prana
		+5	=	7 Mana
		+7	=	9 Ba-Hion
	User
		s5[no
			e5	=	Mage
			e4	=	Mentat?
		s4[no
			e0+e2	=	Spiritual Weapon
	Level
			//Sumer
		0.0	=	Nomage
		1.0	=	Student
		2.0	=	Apprentice
		3.0	=	Master
		4.0	=	Pastmaster
		5.0	=	Archmage
		6.0	=	Higher
			//Gray land
		0.0	=	Grechka
		1.0	=	Student
		1.5	=	Purple
		2.0	=	Blue
		2.5	=	Light Blue
		3.0	=	Green
		3.5	=	Yellow
		4.0	=	Orange
		4.5	=	Red
		5.0	=	Gray
	School
		Gray land
		Sumer
		Kiig
		Mysteria
		Lka-Nandasi
		Deorg Academy
	Spell
		//Gray Land
		Protection
			Mirror	=	Mirror Shield
		Atack
			Clone of Chaos
		Sphere of Thirst
		l5	=	Spells A+
			Desecration =	Fog of Death
			Lightning	=	Lightning of the Gods
			Earth	=	Rumble of Hashiba
			Void	=	Total Zero
			Ethervoid	=	Fifth spell
		//Sumer
		Protection
			Absolute
			Universal
			Personal
		l5	=	GodHands
			Health	=	Inanna
			//Clear and health place Needs: soul of light
			Fire	=	Shamash
			//Needs: result is neuromagic overwork
			Antidemon	=	Marduk
			//Incarcered archdemon, higher mortal demonolog
			Getmye	=	Ea
			//Drop of ihor
			Teleport	=	Anu
			//Exhange of two places Needs: magical line around place, hited teeth of user
			Undeadmake	=	Nergal
			//3 masters nectromancers
			Air	=	Adad
			//Controlled klimat Needs: salt mud lake
			Earth	=	Enlil
			//Controlled earth
			Protect	=	Tammuz
			//Needs: egg of Phoenix
		//Kiig
		Antimagic-tatoo
	Dimension
		Chaos	=	non-embodied
		Limbo	=	gray world
		Mental	=	NooSphere
		Dream	=	World of dreams, astral-mental
		Etheral	=	Astral,	world of spirits
			Other
			World of the dead
		Twilight-Shadow	=	shadow/Twilight/Through the Looking Glass, astral-Normal
		Matteral
		Hyper	=	esher geometry
		Core	=	bhavachakra
			Other
			Blood Beach	//Place for demons
	Feature
		w+1	=	Undead
			s4[no
				Ghoul
				Zombie
			s5[no
				Einherjar
				Draugr
				Lich
			s6[no
				Undead-Immortal
			s7[no
				Undead-God
		s4[no
			Spirit
				Brownie
				Boggart
				Ghost
				Loa
				Embodied
		s5[no
			Mye
			Mage
				Black
				Gray
				White
			Vampire
				Weak	=	Madness
				Normal	=	Ordinary
				High	=	Energetic
			Werewolf
				Weak	=	Licantrop
				Normal	=	Ordinary
				High	=	Multiform
			Cubus
				Incubus
				Succubus
		s6[no
			Immortal
				Dark	=	Demon_0
				Neutral	=	Immortal
					Magic	=	Jinn
					Body	=	Titan_0
					Life	=	Arch
				Light	=	Angel_0
		s7[no
			God_1
				Dark
				Neutral	=	Beastgod
				Light
	Unique
		Grimoire
			Kreol's
		Rod
			Kreol's
		Staff
			Kreol's
		Amulet
			Kreol's
		Roaster
			Kreol's
		Valet Amulet
		Organization's
		Stone of Gate
	Artefact
		s5[no
			Staff
			Rod
			Plonet's Tech
	Direction
		Element
			Fire	=	Pyromancy
			Water	=	Hydromancy
			Earth	=	Geomancy
			Air	=	Airomancy
			Ice	=	Cryomancy
			Electrizity	=	Electromancy
			//
			Space
			Time
			Shadow
			Blood
			Mirror
		Language[no
			Word
			Rune
			Image
			Picture
			Seal
		Type[no
			Straight
			Saving
			Artefact
		Object[no
			Magic of Ghost
			Alchemy
			Elexir
				Potion
				...
			Artefact
		Creature[no
			Automate
			Doppel
			Holem
			Bestia
			Flora
			Vampire
		Action[no
			Vampire
			Curse
			Transformation
				Material
				Figure
				Form
				Structure
			Metamorph
				Turning
				Changing
				Totem	=	Felgi
				Partial
			Blessing
			Vow
			Mental
			Clairvoyance
				True prophecy
			Summon
			Absorption
			Sensor
			Illusion
			Flying
			Telekinesis
			Teleport
			Enchantment
	Material
		Metal
			Adamant		//Anti superreal
			Adamantium//Pseudo adamant, very sharp, very durable
			Koroniy		//Anti mage
			Coldiron	//Anti mage
			Copper		//Anti halfmaterialized
			Bloodiron	//Anti demon
			Silver		//Anti undead
			Mithrill
		Gas
			Flogiston
			Teporiy
		Bio
			Regenerin`)
add(`Siyatelniy
	About
		Author[no
			Pavel Kornev
		Language[no
			Russian
	Material
		Metal
			Coldiron	//Anti mage`)
add(`SCP Foundation
	About
		Language[no
			English
	Unique
		SCP's`)
add(`Naruto
	About
		Author[no
			Masasi Kisimoto
		Language[no
			Japanese
	Universe
		Original
			World
				Naruto's
					Satellites
	Race
		Human
		Frog
		Snake
		Monkey
		Cat
		Dog
		Raven
		Bijuu
			Enot
			Cat
			Turtle
			Monkey
			Slug
			zhuk
			Octopus
			Fox
	Energy
		+1+2	=	Chakra
	Feature
		s5[no
			Gen
				Uzumaki
				Uchiha
				Hyuga
				Senju
				Kurama
			Dojutsu
				Byaku tree
					Byakugan
					Tenseigan
				Sharin tree
					Sharingan
						1
						2
						3
						Mangeke
					Rinnegan
					Rinnesharingan
				Ranmaru's
			Element
				Explosion
				Crystall
				Heat
				Ice
				Tree
	Direction
		Element
			Fire
			Water
			Earth
			Air
			Electrizity
		Language[no
			Technique
			Fuin
		Creature[no
			Doppel
		Object[no
			Marionette
			Artefact
		Action[no
			Summon
			Sensor
			Absorption
			Displacement
			Arms
			Steel arms
			Flying
			Sealing in
			Illusion
				Genjutsu
	Spell
		Telescope
	Unique
		s5[no
			Swords of Fog`)
add(`Fate
	About
		Language[no
			Japanese
	Ability
		Magic
	Energy
		-1	=	Prana
		+5	=	Mana
	Artefact
		s6[no
			The Holy Grail
	Creature
		s6[no
			Servant
	Spell
		Blood Citadel?`)
add(`Claymore
	About
		Language[no
			Japanese
	Energy
		yo	=	Yoki
	Race
		Human
		Yoma
		Claymore`)
add(`of Argus Filchenkov
	Universe
		Potteriana
	About
		Language[no
			Russian
		Author[no
			Argus Filchenkov
	Artefact
		s6[no
			Time-Turner	=	Not limited hours, madness on incorrect
	Material
		Metal
			Coldiron`)
add(`of Kitsune Miyato
	About
		Language[no
			Russian
		Author[no
			Kitsune Miyato
	Metaverse
		Naruto
		Potteriana
		Dozory
	Artefact
		s6[no
			Time-Turner	=	Reality splitter, awful results of
	Person
		Harry Potter	=	Uzumaki Naruto
		Albus Dumbledore	=	Albus Persival Vulfric Brian Potter,Dumbledore`)
add(`Guren Lagan
	About
		Language[no
			Japanese`)
add(`HPMoR
	About
		Author[no
			Eliezer Yudkowsky
		Language[no
			English
	Universe
		Potteriana
	Unique
		s5[no
			Moody's Eye	=	[delete]
			Philosopher's Stone	=	[delete]
			Mirror of Erised	=	[delete]
		s6[no
			Moody's Eye	=	Eye of Vance
			Left Leg of Vance
			Philosopher's Stone
			Mirror of Erised
	Artefact
		s5[no
			Quotes Quill
		s6[no
			Time-Turner	=	6 hours max, with many turners too
	Spell
		Anti-Time-Turner
		Anti-Transgrassion
		Momental Sleep	=	"somnium-"	//Sleep, weak battle magic
		"mahasu"	//Sumer simple hit
		"lagan"	//Shield breaker
		"defendo"	//Weak shield
		"prizmatis"	//Prizmatic shield
		"stupofy"	//AutoAim stupefy
		"luminos"	//Lumination hex
		Ritual Blood Citadel?
	Complex
		27 spells for important topic talk
			Anti-Time-Turner
			Anti-Transgrassion
			...
	Person
		Harry Potter	=	Harry James Potter-Evans-Verres`)
add(`Warcraft
	About
		Language
			English
	Race
		Human
		Orc_2`)
add(`Life of Archmage Potter
	About
		Author[no
			Fil Bandileros
		Language[no
			Russian
	Metaverse
		Potteriana
		Original
			World
				Our	=	Earth-?
				Other?
		Naruto
	Person
		s5[no
			Harry Potter	=	Abraam
				Archmage
		s7[no
			Hel`)
add(`Boy Who Conquered Time
	About
		Author[no
			Fil Bandileros
		Language[no
			Russian
	Multiverse
		Potteriana
		Lord of Rings
		Zero no Tsukaima
		High School DxD
		Star Wars
		Naruto
	Person
		Harry Potter	=	Henry James Potter, The-Boy-Who-Conquered-The-Time
			tm	=	Time back user
	User
		s6[no
			Notime
			tm	=	Time back user
	Unique
		s6[no
			Chronos braslet
	Direction
		Language[no
			Schema
			Spell
	Energy
		-1	=	Prana
		+5	=	Mana
		+3+5	=	[delete]
		tm	=	Time`)
add(`Potteriana
	About
		Author[no
			Joanne Rowling
		Language[no
			English
	Person
		s5[no
			Albus Dumbledore	=	Albus Persival Vulfric Brian Dumbledore
			Harry Potter	=	Harry James Potter, Boy-Who-Lived
	Ability
		Wizarding
		Parseltongue
	Energy
		+3+5	=	Wirardy?
	Direction
		Object[no
			Elexir
				Potion
				Putting	//3
			Alchemy
		Action[no
			Transformation
				Form
				Figure
				Material
				Structure
			Summon	//4||1
		Language[no
			Rune
			Spell
			Ritual
		Hex
		Curse
		Blessing
		Vow
		Enchantment
		Arithmancy
		Lexomancy	//3
		Misc
			Mental
				Protection	=	occlumency
				Penetration	=	ligillimency
			Clairvoyance
				True prophecy
			Metamorph
				Totem
		Creature[no
			Bestia
			Flora
			Holem
	Unique
		s5[no
			Marauder's Map
			Diary of Tom Riddle
			Basicals?
				Ravenclaw's Diadem
				Gryffindor's Sword
				Hufflepuff's Cup
				Slytherin's Locket
			Sorting Hat
			Deluminator
			Room of Requirement
			Quick-Quotes Quill
			Mirror of Erised
			Mysteries Department's
			Weasley's Ford
			Knight Bus
			Philosopher's Stone
			Moody's Eye
		s6[no
			Deathly Hallows
				Cloak of Invisibility
				Resurrection Stone
				Elder Wand
	Artefact
		s5[no
			Broomstick
			Vanishing Cabinet
			Portkey
			Invisibility Cloak
			Mokeskin pouch
			Wand
			Golden Snitch
			Bludger
		s6[no
			Time-Turner
	Spell
		Protection
		Atack
			"Alarte askendare" //(1)	 — подбрасывает объекты вверх[6].
			"Arania exumi" //(1)	 — использовал Гарри для отпугивания акромантулов во втором фильме. Заклинание действует на одного паука[6].
			"Baubillius"	// — заклинание, которое выпускает из конца волшебной палочки яркую бело-жёлтую молнию[9].
			"Brahiabindo"	// — связывающее заклинание.[11]
			"Vaddivasi"	// — заставляет лететь предмет в противника.
		bitovie
			Opendoor	=	"aberto-"	// - отпирает дверь.
		Summon
			Bird	=	"avis-"	// - Заклятие призыва птиц. Создаёт стайку птиц.
		Transformation
			"Vermiculus" //(2)	 — превращает объект в червя[5].
			"Aviforce-"//(2)	 — противник превращается в птицу/стаю птиц/стаю летучих мышей.[4]
		Misc
			"Ascendio" //(1)	 — выталкивает человека из воды[8].
		Health
			"Brahiam emendo" //(1)	 — убирает кости. Это заклинание применял Златопуст Локонс, когда Гарри сломал руку во время матча по квиддичу[6].
		"Verdimilius" //(2)	 — выстреливает зелёными искрами во врага или освещает и делает видимыми и осязаемыми объекты скрытые темной магией. В игре «Гарри Поттер и Тайная комната» позволяет обнаружить невидимые объекты (как Люмос в других версиях игры)[4].
		"Garmonia necture pasus" //(1)	 — заклинание для активации Исчезательного шкафа. Использовалось Малфоем[13].
		"Herbivicus" //(2)	 — заклинание роста растений. Выращивает растения и оглушает тепличных врагов[5].
		«Гибель воров»	// — зачаровывает воду (в частности водопад в подземельях банка «Гринготтс»). Зачарованная вода смывает любые чары (Империус и Конфундус в том числе) и любую магическую маскировку.
		"Dacliforce" //(2)	 — превращает объект в резиновую утку[5][17].
		"Dantissimus"	// — заклинание быстрого роста передних зубов[3].
		заклинание Дезиллюминационное	// — заклинание, делающее объект неотличимым от окружающей среды.
		"Deletrius"	// — заклинание способно расщеплять или удалять объекты[3].
		неприметность (3)
		"Draconiforce" (2)	// — оживляет статую мини-дракончика в настоящего мини-дракончика или превращает в мини-дракончика предметы небольшой массы[15].
		"Incarciforce" (2)	// — превращает люстру в клетку[9].
		"Inflatus" (2)	// — заставляет объект надуваться, как воздушный шар[5].
		"Informus" (2)	// — показывает информацию о существе-цели в GBA версии игры «Гарри Поттер и узник Азкабана»[21].
		"Cave inimicum"	// — защитное заклинание. Делает защищаемый объект невидимым сверху.
		"Calvorio" (2)	// — заклинание выпадения волос[12].
		"Cantis" (2)	// — заклинание, которое заставляет поражённую им цель петь[12].
		"Carpe retractum" (2)	// — Чары Захвата и Притяжения. Притягивает человека к цели (или цель к человеку). В игре «Гарри Поттер и узник Азкабана» это заклинание использовал Рон на первых же занятиях по Защите от Тёмных Искусств[15].
		"Lapiforce" (2)	// — превращает предмет небольшой массы в кролика или оживляет его статуэтку[15].
		"Meloforce" (2)	// — тыквоголовое заклятие. Превращает голову объекта в тыкву[15].
		"Meteo recanto"	// — останавливает некоторые атмосферные осадки.
		"Mimbl vimbl" (2)	// — Заклинание Косноязычия. Мешает противнику правильно произнести заклинание тем, что связывает язык в узел[22].
		"Mucus ad nosem"	// — Проклятье Призраков. Вызывает сильный насморк[16].
		"Mutatio-"	// — мутация
		"Pointme"	// — заклинание-компас. Показывает направление на север.
		"Oppunio"	// — атакующее заклинание (приказ атаковать для вызванных волшебником существ).
		"Orbis" (2)	// — «закапывает живьём» противника под землю[5].
		"Orhideus"	// — создаёт букет орхидей или превращает объекты в лепестки орхидей.
		«Патентованные чары	// — грёзы наяву»	// — товар из магазина близнецов Уизли: «Одно простое заклинание, и вы погружаетесь в высококачественную, сверхреалистическую грезу наяву продолжительностью тридцать минут».
		"Periculum"	// — создаёт сноп красных искр. Использовал Гарри в лабиринте для сигнала о выбывании Флёр Делакур из поединка.
		"Portoberto"	// — заклинание, разбивающее висящий замок и оставляющее дымящуюся дыру на месте замочной скважины[19].
		чары Протеевы	// — позволяет группе предметов частично менять свою форму, при изменении формы одного из них.
		"Pullus" (2)	// — превращает объект в курицу[5].
		"Pack" (2)	// — заклинание, позволяющее быстро сложить вещи[7].
		"Relashio"	// — снятие оков, цепей, освобождение объекта или отброс оппонента (Боб Огден отбросил Марволо Мракса). На суше это сноп желтых искр, под водой	// — струя кипятка.
		"System aperio" (1)	// — этим заклинанием во втором фильме Том Реддл открыл сундук Хагрида, в котором сидел Арагог[6].
		"Skribbliforce" (2)	// — заклинание, превращающее объект в перо[9].
		"Skurge" (2)	// — заклинание, удаляющее эктоплазму[22].
		"Snaffliforce" (2)	// — заклинание, превращающее объекты в мышей[15].
		"Herbiforce" (2)	// — превращает волосы жертвы в цветы[12].
		"Ebublio" (2)	// — превращает объект в мыльные пузыри[5].
		"Everte Statum" (1)	// — отталкивает противника[6].
		"Expelliarmus"	// — заклинание разоружения, выбивает палочку или другое оружие из рук противника.
		"Expellimillius"	// — поджигающее заклинание.
		"Ectomatis" (2)	// — заклинание, которое позволяет выпустить из конца палочки небольшой кубик эктоплазмы[4].
		"Emacipare"	// — заклинание, освобождающее от пут.[11]
		"Entomorphium" (2)	// — ненадолго превращает в муравья[12].
			//
		Formula unknown
			чары Тормозящие Хортона-Кейтча	// — запатентованные чары, применяемые к мётлам фирмы «Комета».
			Трансмогрифианская Пытка
			Синие искры (2)
			заклинание Хватательное
			Чары Ябеда
			Чары горячего воздуха
			Чары заморозки огня
			Чары осушения
			Чары подчинения - не империо
			Чары зелёного дыма
			Чары рессорной подушки
			Веселящие чары
			Взрывающее заклятие
			Сезам откройся	// — заклятие, сносящее двери с петель[19].
			Гомункуловы чары (2)	// — неизвестное заклятие (или группа чар), следящие за людьми на определённой территории[16].
			Воющие сигнализационные чары
			Залинание Губрайтов огонь
			Заклинание вечного приклеивания
			Заклинание головного воздушного пузыря
			Заклинание для очистки картофеля
			Заклинание заметания следов
			Заклинание запечатывания комнаты
			Заклинание запечатывания пергамента
			Заклинание невидимого хлыста (2)
			Заклятие ненаносимости
			Заклятие Неразбиваемости
			Заклинание Обращения	// — оборотня в человека.
			Заклинание открывания дверей
			Заклинание пальцекусания
			Заклинание против списывания
			Заклинание роста ногтей на ногах
			Заклинание телепортации
			Заклятие Пылающей руки
			Проклятие воришки
			Парящие чары
			Облегчающие чары
			Летучемышиный сглаз
			Кишечно-опорожнительное заклятие
			Зелёные искры
			Зелёное специальное заклинание
			Заклинание Жалящее
			«Сито из котла» (2)
		Muggle Repelling	=	"Repello Muggletum"
		//Muggle Repelling charms
		Absolute Submission	=	"Imperio-"	// - подвластие
		Verbal Formula
			"Contra-" (3)	// - нарушение работы заклинаний
			"Spangify-" (2)	// — батут
			"Steelclaw-" (2)	// — steel claw
			"Tarantalegro-"	// — танцы
			"Titillando-"	// — щекотку и ослабление
			"Fenestram-"	// — разбивает стекло.[2]
			"Fera Verto" (1)	// — живых в сосуды
			"Ferula-"	// — шина
			"Fianto duri" (1)	// — мощное защитное заклинание, укрепляющее действие сопутствующих защитных чар[27].
			"Fulgari-"	// — связывающее заклинание.[11]
			"Furunculus-"	// — появление на теле противника нарывов.
			"Impedimenta-"	// — Помехи движению
			"Vomitare viridis" (2)	// — рвотное заклинание[12].
			"Erecto-"	// — раскрывает раздвижные предметы (например, палатку).
			"Vulnera Sanentur" (1)	// — лечивания магических ран
			"Glacius-" (2)	// — замораживает, тушит пожары[15].
			"Inanimatus Conjurus"	// — заклинание созидания.
			"Reparifargo-"	// — заклинание, которое придаёт объекту, подвергнутому неполной трансфигурации, первоначальный вид[16].
			Otvod glaz	=	"repello-"	//Repelling hex
			"-Inimicum"	// — чары, защищающие какое-либо место от врагов.
			"Ridiculus-"	// — против боггарта
			"Rictusempra-"	// — щекотка
			"Salvio Hexia"	// — защитное заклинание, делает местность невидимой.
			"Sectumsempra-"	// — темный меч
			"Serpensortia-" (1)	// — призыва змеи[6].
			"Anapneo-"	// — прочищает дыхательные пути.
			"Appareo-"	// — проявление невидимого
			"Scripto--" (3)	// - чары письма
			"Inebriat-" (3)	// - чары впитывания жидкости в предмет
			"Formalucis-" (3)	// - свет в форму
			"Calori-" (4)	// - нагреть
			"Frigido-" (4)	// - охладить
			"Finita-"	// - закончить
			"Priore-"	// - предыдущий
			"Eructo-"	// - выплевывать\выкидывать
			"Accio-"	// - призывать
			"Revelare-"	// - выявлять
			"Abrupto-" (3)	// - отвергать
			"Confundito-"	// - сбивать с толку
			"Expecto-"	// - отправлять вызов
			"Creatio-"	// - создавать
			"Reparo-"	// - чинить
			"Protego-"	// - защищать
			"Episkey-"	// - исцелять
			"Reducto-"	// - разрушение
			"Reducio-"	// - уменьшение
			"Engorgio-"	// - увеличение
			"Tergeo-"	// - мелкое ощищение
			"Excuro-"	// - большое очищение от грязи
			"Pulso-" (3)	// - мелкого толчка
			"Flippendo-"	// - большого толчка
			"Expulso-"	// - отбрасывающего мелкого взрыва
			"Confringo-"	// - огненный взрыв
			"Petrificus-"	// - паралич
			"Silencio-"	// - беззвучие
			"Quietus-"	// - тишина, отмена соноруса
			"Sonorus-"	// - громкость, отмена квиетуса
			"Evanesco-"	// - удаление сотворенного
			"Flagreit-"	// - светящаяся метка
			Sleep	=	"sopporo-"	// - усыпление
			"Partis-"	// - проход
			"Stupefy-"	// - оглушение
			"Muffliato-"	// - оглохни
			"Obliviate-"	// - забвение
			"Rennerveit-"	// - оживи
			"Obskuro-"	// - ослепление
			"Conjuctivitus-"	// - боль в глазах
			"Nox-"	// - нокс
			"Lumos-"	// - люмос
			"Langlock-"	// - обезъяз
			"Crucio-"	// - пыточное
			"Avadakedavra-"	// - убивающее
			"Depulso-"	// - отбрасывающее
			"Immobilus-"	// - остановка действия
			"Impervius-"	// - непроницаемость
			"Arresto-" (1)	// — задержание
			"Alohomora-"	// — Отпирающее магию
			"Incarcero-"	// — связывает верёвками.
			"Insendio-"	// — огонь
			"Collosho-"	// — приклеивает обувь противника к полу[16].
			"Colloportus-"	// — запирающее заклинание.
			"Lacarnum Inflamare" (1)	// — создание небольшого огня в фильме «Гарри Поттер и Философский камень». В книге есть похожее заклинание, но оно не произносится[14].
			"Levi-"	// — подвешивание в воздухе
			"Levioso-"	// — левитация
			"Legillimenso-"	// — чтение мыслей
			"Libera-"	// - освобождает от действия
			"Locomotor-"	// — передвижение предметов
			"-Wibbly" (2)	// — заклинание ватных ног. Ноги придётся волочить[16].
			"-Mortis"	// — заклинание обезноживания. Склеивает обе ноги.
			"Extremis-" (2)	// — расширяет
			"Mobili-"	// — движение
			"Morsmordre-"	// — Запускает в небо Черную метку.
			"Glisseo-"	// — скольжение
			"Deprimo-"	// — убирает препятствие[18].
			"Descendo-"	// — заклинание, опускающее объекты.
			"Geminio-"— копирование
			"Diminuendo-" (1)	// — уменьшает
			"Dissendo-"	// — открывает механизмы
			"Diffindo-"	// - разрезание
			"Duro-"	// — затвердевание
			"Colorum-"	// — цвет неживого (в тч волос и ногтей)
			"Defodio-" (2)	// — долото
		Object
			"-Subiecti-"	// - subject
			"-Obiecti-"	// - object
			"--Corpus-"	// — body
			"--Atramentum-"	// — чернила
			"--Hominem-"	// - human
			"--Hominum-"	// - people
			"--Animagis-"	// - animagus
			"--Fumos-" (2)	// - дым
			"--Vipera-" (1)	// — змея
			"--Portus-"	// - порт-ключ
			"--Cross-"	// - cross
			"--Patronum-"	// - patronus
			"--Arbus-"	// — деревянное
			"--Incantationem-"	// - spell
			"--Slagus-"	// - слизень
			"--Ignis-"	// - fire
			"--Aqua-"	// - water
			"--Bombardo-"	// - bomb
			"--Piertotum-"	// — движение големов
			"--Capacius-"	// — емкость
			"--Magicus-"	// - magical
		Type
			"-Wingardi"	// - крылообразная
			"-Inferni"	// - hell, cursed
			"-Diabolica"	// - огненный щит
			"-Horribilis"	// - антитемный щит
		Area
			"-Totalis"	// - полный
			"-Directum" (3)	// - направленное действие
			"-Skullus" (2)	// - действует на голову
		Time
			"-Momentum"	// - моментальное действие
			"-Postea"	// - спустя
			"-Temporus"	// - временное действие
			"--Minutum" (3)	// - заклинание длительностью в минуту
			"--Horum" (3)	// - Заклинание длительностью в час
			"--Diesum" (3)	// - заклинание длительностью в сутки
			"--Prolonga" (3)	// - заклинание с более долгим эффектом
			"--Aeternum" (3)	// - заклинание с "вечным" эффектом
		Power
			"-Potentio"	// - мощность
			"--Tertium"	// - заклинание в треть силы
			"--Dimidium"	// - заклинание в половину силы
			"--Duo"	// - заклинание удвоенной силы
			"--Tria"	// - заклинание утроенной силы
			"--Maxima"	// - максимально сильное для вас заклинание
			//Общая формула заклинания: [modum] [subject] [object] [adjectivum (optionem/scopus/tempus/potentium)]
			//Общая формула зачарования: [subject] [object] [modum-ing] [adjectivum (optionem/scopus/tempus/potentium)]
	Complex
		Finding
			Accio
			Revelare
				Animagis
				Hominum
				Specialis
			Aparekium
		Protecting
			Silencio	// - обеззвчиние
			Impervius	// - непроницаемость
			Muffliato	// - заглушающий шум
			Protego
				Maxima	// - щит максимум
				Totalis	// - щит вокруг
				Horribilis	// - защита от темного
			Cave Inimicum	// - невидимость сверху
			Fianto Duri	// - усиление защиты
			Salvio Hexia	// - невидимость сбоку
			""воздушый пузырь	// - удаление запахов
			Repello Inimicum	// - защита от врагов
			""дизиллюминация	// - камуфляж
			""неприметность -
			Glisseo	// - отключение трения
			Fidelius	// - заклятие доверия
			Revelare	// - выявление / гомунгуловы чары?
			Colloportus	// - запирание
			""запечатывание комнаты
			""ненаносимость
			""неразбиваемость
			Expecto Patronum
		Binding
			Confundus	// - confusion of mind
			Stupefy	// - оглушение
			Sopporo	// - усыпление
			Incarcero	// - связывание
			Petrificus Totalis	// - полное обездвиживание
			Silencio	// - немота
			Impedimenta	// - помеха
			Arresto Momentum	// - остановка
			Immobilus	// - отключение действия
			Obskuro	// - ослепление
			Conjuctivitus	// - нарушение зрения, боль в глазах
			Colloshu	// - приклеивание обуви к полу
			Lokomotor
				Vibbli	// - ватноножие
				Mortis	// - обезноживание
			Mimbl Vimbl	// - косноязычие
			Langlock	// - оьбезъяз
			Expelliarmus	// - обезоружение
			Fulgari	// - связывание
	Creature
		s4[no
			Salamander
			Manticore
			Mandrake
			Fire Crab
			Cerber
		s5[no
			Wyvern
			Acromantula
			Unicorn
		s6[no
			Basilisk
			Dementor
			Phoenix
	Race
		Human
		Giant
		Goblin
		Troll
		Centaur
		Gnome_2)
		Merpeople
	Feature
		s4[no
			Muggle
			Squib
			Spirit
				Ghost
				Boggart
				Brownie Elv
			Poltergeist
		s5[no
			Eye of Basilisk
			Wizard
				Dark
				Normal
				Light
			Metamorph
				Partial
				Totem
			Parselmouth
			Werewolf
			Vampire`)
add(`Witcher
	About
		Author[no
			Andrzej Sapkowski
		Language[no
			Polish
	Creature
		s5[no
			Cockatrice
			Basilisk
	Feature
		s5[no
			Witcher
			Mage?
	Spell
		Air	=	Aard
		Water	=	Aksiy
		Earth	=	Kven
		Fire	=	Igni
		Protection	=	Heliotrop
		Pomehi	=	Irden
	Person
		Geralt`)
add(`Pokemon
	About
		Language[no
			Japanese
	Creature
		s4[no
			Pokemon
	Artefact
		s5[no
			Pokeball`)
add(`Ghost Busters
	About
		Language[no
			English
	Artefact
		s4[no
			Ghost trap
	Creature
		s4[no
			Ghost`)
add(`UQ Holder
	About
		Language[no
			Japanese`)
add(`Rave Master
	About
		Language[no
			Japanese`)
add(`Rosario to Vampire
	About
		Language[no
			Japanese
	Feature
		s5[no
			Vampire`)
add(`The Law of Ueki
	About
		Language[no
			Japanese`)
add(`Hunter x Hunter
	About
		Language[no
			Japanese`)
add(`Tenjou Tenge
	About
		Language[no
			Japanese`)
add(`My hero academy
	About
		Language[no
			Japanese
	Feature
		s5[no
			Quirk`)
add(`Berserk
	About
		Language[no
			Japanese`)
add(`Toriko
	About
		Language[no
			Japanese`)
add(`Magic Adacademy
	About
		Language[no
			Japanese
	User
		s5[no
			e5	=	Mage`)
add(`High School DxD
	About
		Language[no
			Japanese
	Race
		Human
		Dragon
	Artefact
		s6[no
			Evil Pieces
			Sacred Gear
			Holy Swords
	User
		s5[no
			e5	=	Mage?
		s6[no
			dm	=	Demon
			lm	=	Angel_0
			fm	=	Fallen
		s7[no
			e7	=	God_?`)
add(`Startrack
	About
		Language[no
			English
	Race
		Human
	Energy
		+4	=	Psy?
	User
		s5[no
			e4	=	Psyonic`)
add(`Seilor Moon
	About
		Language[no
			Japanese
	Race
		Human
		Reptiloid
	Unique
		Moon Diadema`)
add(`Dragonball
	About
		Language[no
			Japanese
	Energy
		+1	=	Ki?
	Artefact
		s6[no
			Dragon Ball`)
add(`Lord of Rings
	About
		Author[no
			John Ronald Reuel Tolkien
		Language[no
			English
	Universe
		Original
			World
				Arda
	Energy
		+5	=	Mana?
	Feature
		s7[no
			God_1
			Valar
		s6[no
			Ainur
		s5[no
			Mage
			Nazgul
	Race
		Human
		Elv
		Gnome
		Orc_3
		Troll
		Dragon
		Balrog
	Unique
		One Ring
	Artefact
		s6[no
			Rings
			Silmarils
	Material
		Metal
			Mithrill`)
add(`Nick
	About
		Language[no
			Russian
		Author[no
			Andrzej	Yasinski
	Race
		Human
		Elv
		Gnome
		Orc_0
		Demon_0
	Energy
		-1	=	Prana
		+4	=	Psy
		+5	=	Mana
		if	=	Infomana
		+3	=	Emana
	User
		s5[no
			e5	=	Mage
			if	= Infomage
			e3	=	Sorcerer
			e4	=	Psyonic
	Artefact
		s5[no
			Rod
				Adeptnesser's
	Direction
		Language[no
			Construct
			Weaving
			Infostructure
			Image	//Only gods
		Creature[no
			Holem
			Automate
		Element
			Fire
			Water
			Air
			Earth
			Ice
			Electrizity
		Info
		Action[no
			Materialization
				Creating
				Removing
			Health
			Mental
			Atack
			Protection
		Misc[no
			Clairvoyance
				Probability
		Object[no
			Alchemy
			Illusion
				Dense
	Multiverse
		Original
			World
				Our	=	Earth-2150?
				Lungria
	Dimension
		Matteral
		Matteral-Etheral-Mental	=	Astral?, ?-net
		Etheral	=	infofield?, zero-net
	School
		Adeptness
		Sorcery
		Magic
		Atl
		Atlant
	Feature
		s5[no
			Cleverness
		s6[no
			God_2`)
add(`Skyrim
	About
		Language[no
			English
	Race
		Human
		Dragon
	Feature
		Mage`)
add(`Star Wars
	About
		Language[no
			English
	Race
		Human
	Energy
		gf	=	Great Force?
	User
		s5[no
			gf	=	Forceuser
				lm	=	Light
				dm	=	Darl
	School
		Jedi
		Sith
	Dimension
		Hyper
	Artefact
		s5[no
			Lightsaber
			Galaxy's Tech`)
add(`Warhammer
	About
		Language[no
			English
	Race
		Human
	Ability
		Psyker
	Material
		Noktilit
		Metal
			Adamantium
	Energy
		+4	=	Psy?
	User
		s5[no
			e4	=	Psyker
	Feature
		Psyker`)
add(`Zero no Tsukaima
	About
		Language[no
			Japanese
	Energy
		+3+5	=	Wizardy?
	Direction
		Element
			Fire
			Water
			Air
			Earth
			Void?
		Language[no
			Spell
			Rune
			Ritual
		Action[no
			Summon
		Object[no
			Alchemy
			Elexir
				Potion
		Creature[no
			Animal
				Familiar
	Artefact
		s5[no
			Wand
			Flying Ships
			Ring of Water
			Ring of Air
	Feature
		s5[no
			Wizard
			Gandalf
			Lifrasir
			Sidalf
	Multiverse
		Original
			Our	=	Earth-2007?
			Other?
	Race
		Human
		Elv
		Changeling
	Feature
		Loa?
	Creature
		s5[no
			Wyvern
			Salamander
			Beholder`)
add(`To Aru Majutsu no Index
	About
		Language[no
			Japanese
	Metaverse
		Original
			World
				Our	=	Earth-2052?
	Energy
		+5	=	Mana
		tl	=	Telesma?
	Shell
		aimf	=	AIM-field
	Level
		0.0	=	Zero-esper	//, don't have ability
		1.0	=	Weak	// esper, can destroy 1 cube meter
		2.0	=	Simple	// esper, can destroy room
		3.0	=	Normal	// esper, can destroy house
		4.0	=	Strong	// esper, can destroy town
		5.0	=	Very strong	// esper, can destroy country
		6.0	=	Insane	// power of esper, can destroy planet's surface; not exist
	Direction
		Language[no
			Ritual
			Rune
			Spell
		Action[no
			Enchantment
	Feature
		s5[no
			Esper
			Mage
		s6[no
			Angel_0
			Imagine Breaker
		s7[no
			God_?
	Unique
		Grimoire
			Forbidden index's
		Cross?
		Sword of space?
	Person
		Accelerator
			Feature
				Esper
					Level	=	5.0
					Rank	=	1
			Ability=Vector control
			Needs=Touch
		Dark matter
			Feature
				Esper
					Level	=	5.0
					Rank	=	2
			Ability=Dark matter control
		Railgun
			Feature
				Esper
					Level	=	5.0
					Rank	=	3
			Ability=Electromagtism control
		Plasma
			Feature
				Esper
					Level	=	5.0
					Rank	=	4
			Ability=Plasma control
		Psyhotron
			Feature
				Esper
					Level	=	5.0
					Rank	=	5
			Ability=Mental control
		?
			Feature
				Esper
					Level	=	5.0
					Rank	=	6
			Ability=Super strong
		?
			Feature
				Esper
					Level	=	5.0
					Rank	=	7
		Sirai Kuroku
			Feature
				Esper
					Level	=	4.0
					Rank	=	?
			Ability=Teleport
			Needs=Touch
		?
			Feature
				Esper
					Level	=	4.0
					Rank	=	?
			Ability=Teleport
			Needs=In sight
		Kongo Mitsuko
			Feature
				Esper
					Level	=	?.0
					Rank	=	?
			Ability=Air hit
		Kamijo Touma
			Feature
				Esper
					Level	=	0.0
				Imagine Breaker
			Needs=Touch
		Steil Magnus
			Ability=Mage
		Index
			Ability=Index
		Alister Crowley`)
add(`Bleach
	About
		Language[no
			Japanese
	User
		s5[no
			e2	=	Reatsu
	Energy
		+2	=	Reatsu
	Feature
		Hollow
		Quincy
		Shinigami
		Sword of Soul`)
add(`One Piece
	About
		Language[no
			Japanese
	Feature
		Fruits`)
add(`Mass Effect
	About
		Language[no
			English
	Race
		Human
	User
		s5[no
			e4	=	Biotic
	Energy
		+4	=	Psy?`)
add(`Terminator
	About
		Language[no
			English
	Artefact
		s5[no
			Skynet's Tech
				AI
				Drone
				Terminator
					1
					800
					850
					1000
					Ex
				Time-Machine
				Cyborg`)
add(`Resident Evil
	About
		Language[no
			English
	Creature
		s4[no
			Virused Zombie
	Feature
		s5[no
			Superabilities`)
add(`Noragami
	About
		Language[no
			Japanese
	User
		s4[no
			e0+e2	=	Sword-Soul
	Feature
		Spirit
			Ghost
			God_0`)
add(`Slayers
	About
		Language[no
			Japanese
	User
		s5[no
			e5	=	Mage
	Energy
		+5	=	Magical?`)
add(`Fairy Tale
	About
		Language[no
			Japanese
	Universe
		Original
			World
				Other?
	User
		s5[no
			e5	=	Mage?
	Energy
		+5	=	Magical?`)
add(`DC
	About
		Language[no
			English
	Multiverse
		Original
			World
				Our	=	Earth?
	Race
		Human
	Energy
		+5	=	Magical?
		ln	=	Lantern's
			wt	=	Life of White
			rd	=	Anger of Red, Atrocitus
			gr	=	Greed of Orange
			yl	=	Fear of Yellow, Sinestro
			wl	=	Will of Green
			lb	=	Hope of Light Blue
			bl	=	Compassion of Blue, Indigo
			pl	=	Love of Purple, Sapphire
			bk	=	Death of Black
		sf	=	Speedforce
	User
		s5[no
			Metahuman
			sf =	Speedforceuser
			e5	=	Mage
	Artefact
		s4[no
			Batman's Tech
			Luthor's Tech
		s5[no
			Crypton's Tech`)
add(`Avatar
	About
		Language[no
			Japanese
	Energy
		+5	=	Mana?
	Direction
		Element
			Fire
			Water
			Earth
			Air
	Feature
		s5[no
			Mage
				Fire
				Water
				Earth
				Air
			Avatar`)
add(`Fullmetal Alchemist
	About
		Language[no
			Japanese
	Feature
		s5[no
			Alchemist
	Feature
		Gate of Truth
	Energy
		al	=	Alchemycal?`)
add(`Dozory
	About
		Language[no
			Russian
		Author[no
			Sergey Lukyanenko
	Level
		0.0	=	No
		1.0	=	Potential
		2.0	=	7
		2.5	=	6
		3.0	=	5
		3.3	=	4
		3.7	=	3
		4.0	=	2
		4.5	=	1
		5.0	=	Not in categories
	Energy
		em
			dm	=	dark
			lm	=	light
		-1	=	prana?
		+5	=	mana?
	Feature
		Undead
		s5[no
			Other
				Dark
				Light
			Vampire
			Werewolf
			Cubus
				Incubus
				Succubus
			Mage
			Witch
			Mirror
	Spell
		Absolute lock	//наглухо запирает любые двери
		Absolute constipation	//вызывает абсолютный запор у того, к кому оно применяется.
		Health
			Avicenna	// — заклинание исцеления.
		Agape	// — знак любви.
		Aspirin	// − тёмное заклинание, понижает температуру цели до температуры окружающей среды, может использоваться в бою.
		Aura
			vzor serdsta	// — похожие заклинания, позволяют видеть невидимое. С помощью последних двух можно смотреть даже на первый слой Сумрака.
			Instinnoe zrenie
			yasniy vzglyad
		gremlin	// — заклинание, порождающее сущность, которая медленно разрушает технику. Например, в «Дневном Дозоре» Алиса применила это заклинание, чтобы испортить автомобиль нагрубившего ей водителя.
		Absolute Submission	=	Доминанта	// — заклинание абсолютного подчинения.
		Ивовая Кора	// — Светлый вариант Аспирина.
		Sleep	=	Morphey	// — заклинание, усыпляющее людей на определённой площади: благодаря постепенному действию (несколько секунд, примерно пять) позволяет избежать лишних жертв, например связанных с потерей управления автомобилями на ходу и т. п. По этой простой причине предпочитается Светлыми.
		Momental Sleep =	Opium	// — менее гуманный аналог Морфея, в отличие от последнего усыпляет резко, без промедления, что может вызвать аварии и жертвы среди людей, так как не даёт жертве время остановиться или прекратить занятия.
		Illusion
			Паранджа	// — заклинание, как правило, накладываемое Тёмными женщинами. Аналог магической косметики.
		Прометей	// — безопасный розжиг костра.
		Light	// — зажигает огонь на ладони.
		Search
			Снежная паутина	// — поисковое заклинание с большим радиусом действия, и требующее больших затрат Силы.
			Око мага	// — что-то вроде магического радара в Сумраке и реальном мире. имеет Форму большого шара, напоминающее глаз.
		Спайдерфлэйм	// — заклинание, вызывающее возгорание объекта пламенем характерного тускло-синеватого цвета.
		Muggle Repelling	=	Сфера Невнимания	// — заклинание, предохраняющее от излишнего любопытства людей. Не действует на Иных и чувствительных к магии людей.
		Тройной ключ	// — заклинание, порождающее любовь, веру и понимание. К тому же разбивает ментальную защиту противника.
		Тройное лезвие	// — заклинание, материализующее 3 кинжалоподобных лезвия, с большой скоростью летящих в указанном магом направлении.
		Fireball	// — широко распространённое как у Светлых, так и у Тёмных заклинание. Во врага пускается сгусток огня. Существует также «групповой файербол» и какая-то особая версия последнего у Инквизиторов.
		Element
			Space
				Portal	=	// — заклинание позволяющее почти мгновенно переносится на большие расстояния при помощи врат, без наводки используется только высшими иными (или зеркалом). При помощи мага в пункте назначения создавать портал проще.
			Time
				Stop	=	Freeze	// — локальная остановка времени, применяется для иммобилизации противника без причинения ему вреда.
		Ход	// — заклинание, позволяющее бежать с очень высокой скоростью. При попадании под воздействие заклинания сердечной мышцы (миокарда) может вызвать остановку последнего.
		Mental
			Петров	// — заклинание, накладываемое для мгновенного обучения 15 распростаненных языков (среди них упоминается польский).
			Skolko let, skolko zim
			Schastye
			Long tongue	// — Слабое и легко скрытое заклинание делает противника разговорчивым, заставляя разбалтывать информацию.
			Реморализация	// — заклинание, заставляющее субъекта строго соблюдать заданную, либо собственную мораль.
			Protection
				Barrier of will	// — заклинание защиты разума.
				Сфера Спокойствия	// — заклинание ментальной защиты.
				Ледяная Кора	// — ментальная защита.
		Action
			Protection
				Кольцо Шааба	// — охранное заклинание, завязанное на определённое слово.
				Хрустальный щит	// — очень мощная защита от физического воздействия на объект. Побочным эффектом дает слабую магическую защиту. Мнение что Щит невозможно продавить подтвердилось после применения Щита Эдгаром против вампира Кости, не сумевшего продавить его, даже будучи Абсолютным Иным ("Сумеречный дозор").
				Хрустальный шар	// — создает вокруг мага шар из «хрусталя», защищающий его от любого физического воздействия.
				Сфера отрицания	// — заклинание, используемое как защита против вражеских заклинаний, при сильной подкачке может надёжно защитить даже против заклинаний высших магов. Пропускает физические атаки.
				Mana	=	Mage shield	// — универсальная защита, мощность зависит от вкладываемой силы.
				Universal	=	Rainbow sphere	// — достаточно сильная универсальная защита.
				Тайга	// — очень мощное заклинание, имеющее форму огненной сети, опутывающей противника. Упоминается в «Новом Дозоре» и было использовано чтобы замедлить Тигра, правда воздействие было минимальное, так что настоящий эффект неизвестен.
			Atack
				White kopiyo — боевое заклинание Светлых. Магическое копье, действует соответственно названию. Упоминается в романе «Последний дозор». В шестом дозоре было использовано Антоном Городецким против Двуединого. "Я видел, ... как загорелось пальто Темного, пробитое "белым копьем"..."
				Марево Трансильвании 	// — заклинание, магическим способом причиняющее физические увечья путём всестороннего сдавливания объекта заклинания. Применяется только Тёмными Иными. Было применено Зеркалом Виталием Рогозой для отражения атаки Тигренка в «Дневном дозоре».
				Pressure	=	Press	// — заклинание чистой Силы. Сгущает Силу до осязаемого состояния, используется чтобы давить противника.
				White Sword	// — светлое заклинание, преобразующее Силу в белый клинок. Использует Светлана в бою против ведьмы Арины(«Сумеречный дозор»). Также Светлана использовала "защиту Лужина", вероятно с помощью меча. В теории заклинание поражает лишь Тёмных и склонившихся ко Злу людей. На практике человек становится уязвим к Мечу при появлении у него агрессии, страха, злобы.
				Vacuum
				Плеть Шааба	// — боевое заклинание Тёмных: огненная струя, принимающая облик огромной змеи с некоторыми зачатками разума, изменяющая направление в полёте. Любимое заклинание Завулона. В книге <<Новый Дозор>> упоминается похожее заклинание, использумое Завулоном в битве с Тигром. Пламя было синего цвета, так что не установлено являлось ли оно Плетью Шааба, либо каким-то другим заклинанием.
				Anti-Undead	=	Серый молебен	// — заклинание против нежити: вампиров, зомби и т. п. Ослабляет и замедляет вампиров, на большей мощности упокаивает. Скелетов, замби, то есть нежить, не имеющую собственной воли, а подчиняющуюся воле поднявшего их колдуна, развеивает.
				Поцелуй Ехидны	// — Что-то вроде дождя из кислоты
				Огненная кобра	// — заклинание, использованное против Завулона, создающее гигантскую огненную змею которая самостоятельно борется с противником.
				Огненная Стена (или Стена огня)	// — довольно сильное групповое заклинание. Наносит значительный урон огнём противнику, причём чем меньше противников в группе, тем большие повреждения получит каждый из них.
				Путы Захви	//—жертва заклинания не имеет возможности двигаться и как-то действовать, но способна слышать, видеть и говорить (не путать с трансом). Применялось Лайком в "Лике Черной Пальмиры".
				Buka	// — боевое заклинание. Предположительно, из арсенала светлых. Эффект от применения данного заклинания не описан. Применялась в книге «Последний Дозор».
				Прах	// — заклинание против дэвов и големов. В силу редкости последних, практически не используется, не преподается иным при обучении в дозорах. Несложное заклинание, требующее правильно сложенного магического паса и берущее много Силы. Использовалось Антоном в Последнем дозоре против дэва. Он, в свою очередь, узнал об этом заклинании от Ольги.
				Thanathos	// — заклинание, подавляющее волю и вызывающее остановку сердца. Убивает не сразу, жертву можно спасти, как это было в «Сумеречном Дозоре».
		l5
			Light
				White marevo	// — самое сильное и страшное из упоминаемых в книгах заклинаний Светлых . По силам только высшим магам, «требует максимального сосредоточения и полной прокачки Силы в радиусе трёх километров». После произнесения изо рта мага вырывается белый туман, вызывающий локальное «схлопывание» всех слоёв Сумрака, и превращающий всех противников-иных в камень, внутри которого души остаются вечно живыми, но бездвижными и лишёнными всех чувств, медленно сходя с ума; людей сумрак перемалывает без следа. Придумано Мерлином, использовано лишь один раз Рустамом и Гесером.
			Dark
				Тень владык	// — самое сильное из упоминаемых в книгах заклинаний Тёмных. Временно вызывает души умерших Великих Тёмных Иных с шестого слоя Сумрака, накачивает их Силой и заставляет уничтожать всё вокруг.
			Time
				Саркофаг времён	// — заклинание из арсенала Инквизиции. Применивший его оказывается вместе со своей жертвой запертым в каменном саркофаге, плывущим в небытии, до скончания времён. Случаев побега из саркофага времён пока не существует. Антон Городецкий в книге "Новый дозор" был освобожден из саркофага времен, где он был заключен с ведьмой Ариной	// — тигром. (Однако, осталось неясным, смогла ли Арина освободиться с помощью Минойской Сферы (только ведьмы умеют их заряжать), которую имела при себе: Минойская Сфера прокладывает портал откуда угодно)
	Unique
		Son Merlina?
		Venets of Everything	// — камни в основании замка в Эдинбурге, позволяют освобождать ушедших Иных, даруя им окончательную смерть.
		Grimoire
			Fuaran's	//Book about turning human to Other, and Other to Higher level
		Claw of Phaphnir	// — коготь Великого Тёмного мага, убитого в своём сумеречном облике дракона, ставший сильным артефактом после того, как Братья Регина (секта, созданная учениками Фафнира) несколько поколений питали его силой.
		Shredinger Cat	// — артефакт, действующий во всех слоях Сумрака. Пушистая меховая лента, надеваемая на шею, как правило преступникам при конвое Инквизицией. Обезглавливает цель при малейшем магическом воздействии с её стороны.
		Mel of Fate	// — кусочек мела, с помощью которого можно изменить Книгу Судьбы любого человека или Иного. Сделать это может только Светлая Великая Волшебница. В книге «Ночной Дозор» Светлана хотела изменить судьбу Егора, но в это же самое время Ольга изменила Книгу Судьбы самой Светланы.
		Minoy Sphere	// - открывает портал откуда угодно, а его точку назначения невозможно проследить. Имеет только один заряд, перезаряжать его умеют только ведьмы. С разряженной Минойской Сферой ведьма Арина была заперта заклинанием Саркофаг Времён.
		Power Prizm	// — хрустальная прозрачная призма. Использующий призму Иной вытягивает жизненную силу из того, на кого сквозь неё смотрит. Использовала Алиса Донникова ("Ночной дозор")
	Direction
		Language[no
			?
		Type[no
			Straight
			Saving
			Artefact
		Action[no
			Atack
			Protection
			Health	=	Healing
			Love	=	Obvorozhenie
		Misc[no
			Clairvoyance
				Probability
			Metamorph	=	Oborotnichestvo
				Werewolf
				Turning
		Creature[no
			Undead	=	Necromancy
	Dimension
		Matteral
		Matteral-Etheral	=	Twilight
			0	=	Normal
			1	=	x3
			2	=	x9, cold
			3	=	x27, full gray
			4	=	red oblako
			5	=	?
			6	=	?
			7	=	Normal	//Can be backside`)
add(`Kono Subarashii Sekai ni Shukufuku o
	About
		Language[no
			Japanese
	Multiverse
		Original
			World
				Our	=	Earth?
				Other`)
add(`Tokyo Ghoul
	About
		Language[no
			Japanese`)
add(`Shingeki no Kyojin
	About
		Language[no
			Japanese`)
add(`Hataraku Maou-sama!
	About
		Language[no
			Japanese
	Feature
		s6[no
			Demon_0
			Fallen
			Angel_0
	Person
		s6[no
			Alciel =	Shiro Ashiya
			Satan Jakob =	Sadao Mao
			Lucifer =	Urushihara Hanzo
	Multiverse
		Original
			World
				Our	=	Earth
				Ente Isla`)
add(`To Love-Ru
	About
		Language[no
			Japanese`)
add(`The Gamer
	About
		Language[no
			Korean
	User
		s5[no
			Feature
			e5	=	Mage
		s6[no
			gm	=	Gamer's System
			Dark soul
			God_4
	Direction
		Misc
			Clairvoyance
		Element
			Fire
			Water
			Air
			Earth
		Form
			Elemental
	Spell
		Action
			Protection
				Mana	=	Mana Shield
	Person
		s5[no
			Gamer	=	Han Jee Han
			Blood Witch	=	Lolicano Mistrim
	Artefact
		s5[no
			Broomstick
			SS	=	Soul Stone
		s7[no
			Sword Dan
			God Bereza
			God Mirror
			God ???
	Organization
		Bezdna
			Aukcion
	User
		s5[no
			e1	=	Kiuser
			e5	=	Mage`)
add(`Neon Genesis Evangelion
	About
		Language[no
			Japanese
	Shell
		atf	=	AT-field
	Creature
		s6[no
			Angel_1
			Eva
	Feature
		Kid`)
add(`Dragon Age
	About
		Language[no
			English
	Material
		Metal
			Lyrium`)
add(`RWBY
	About
		Language[no
			Japanese
	Creature
		s5[no
			Grimm`)
add(`Death Note
	About
		Language[no
			Japanese
	Artefact
		s7[no
			Death Note
	User
		s7[no
			Death Note	=	Shinigami
	Person
		s4[no
			Yagami Light
			L Lawliet
		s7[no
			Ryuk
			Rem
			Death King`)
add(`Dragonlance
	About
		Language[no
			English`)
add(`League of Legends
	About
		Language[no
			English`)
add(`Code Geass
	About
		Language[no
			Japanese
	Person
		s5[no
			Lelouch
			Charlz
			Marianna
			Roland
			C.C.
			Mao
	User
		s5[no
			Geass
				Control	=	Lelouch
				Memory	=	Charlz
				Soul =	Marianna
				Time Stop	=	Roland
				Love	=	C.C.
				Mental	=	Mao
			Antigeass
				Jeremia
		s6[no
			Code Geass
	Material
		Metal
			Sakuradait
	Artefact
		s5[no
			Britanian Imperia's Tech
				Knightmare`)
