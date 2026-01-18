import { RawPokemonData } from './types.ts';

export const DEFAULT_COLLECTION_CSV = `SystemKey,Name,ApiId,DisplayId,Category,ParentKey,Owned,Value,ImageURL,FanArtURL,CardType,DreamURL,IdealURL,IsTrainer
1," ",1,001,Base,,FALSE,"","https://cdn11.bigcommerce.com/s-b4ioc4fed9/images/stencil/1280x1280/products/559923/2810744/cdCHxrRi8TqChI55NxHrgdWFp__26653.1762853278.jpg?c=1","","standard","https://images.pokemontcg.io/sv3pt5/167_hires.png","https://images.pokemontcg.io/sv3pt5/166_hires.png",FALSE
1-extra-1705536000-0,"Bulbasaur (166/165) - SV: 151",1,001,Slot,1,FALSE,"","https://images.pokemontcg.io/sv3pt5/166_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/166_hires.png",FALSE
1-extra-1705536000-1,"Bulbasaur (143/142) - SV: Stellar Crown",1,001,Slot,1,FALSE,"","https://images.pokemontcg.io/sv7/143_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv7/143_hires.png",FALSE
1-extra-1705536000-2,"Bulbasaur (SWSH231) - SWSH Promos",1,001,Slot,1,FALSE,"","https://images.pokemontcg.io/swshp/SWSH231_hires.png","","Promo Full Art","","https://images.pokemontcg.io/swshp/SWSH231_hires.png",FALSE
2,"Ivysaur",2,002,Base,,FALSE,"","https://dz3we2x72f7ol.cloudfront.net/expansions/mega-evolution/en-us/JL2G_EN_134-2x.png","","standard","","https://images.pokemontcg.io/sv3pt5/167_hires.png",FALSE
2-extra-1705536000-3,"Ivysaur (167/165) - SV: 151",2,002,Slot,2,FALSE,"","https://images.pokemontcg.io/sv3pt5/167_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/167_hires.png",FALSE
3,"Venusaur",3,003,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/b0e0c81622512063613e61a78749b279cbb07213f045b8eaa35f9cd2040e38d5/1600.jpg","","standard","https://storage.googleapis.com/images.pricecharting.com/34196496fbf1e0e1050bafeb3c4d3858ba0c4d9951a18e201c696ff340a26808/1600.jpg","https://images.pokemontcg.io/sv3pt5/198_hires.png",FALSE
3-extra-1768411598777,"Venusaur (Slot)",3,003,Slot,3,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/kkyd2euqtopgerjf/1600.jpg","","MEGA","https://storage.googleapis.com/images.pricecharting.com/cljqeuidy75urluu/1600.jpg","https://storage.googleapis.com/images.pricecharting.com/cljqeuidy75urluu/1600.jpg",FALSE
3-extra-1705536000-4,"Venusaur ex (198/165) - SV: 151",3,003,Slot,3,FALSE,"","https://images.pokemontcg.io/sv3pt5/198_hires.png","","Special Illus. Rare","","https://images.pokemontcg.io/sv3pt5/198_hires.png",FALSE
3-extra-1705536000-5,"Venusaur ex (182/165) - SV: 151",3,003,Slot,3,FALSE,"","https://images.pokemontcg.io/sv3pt5/182_hires.png","","Full Art","","https://images.pokemontcg.io/sv3pt5/182_hires.png",FALSE
3-extra-1705536000-6,"Venusaur EX (XY123) - XY Promos",3,003,Slot,3,FALSE,"","https://images.pokemontcg.io/xyp/XY123_hires.png","","Full Art","","https://images.pokemontcg.io/xyp/XY123_hires.png",FALSE
4,"Charmander (SVP 044) - Obsidian Flames",4,004,Base,,FALSE,"","https://m.media-amazon.com/images/I/71iFKilWtML._AC_UF894,1000_QL80_.jpg","","Illustration Rare","","https://images.pokemontcg.io/sv3/044_hires.png",FALSE
4-extra-1705536000-7,"Charmander (168/165) - SV: 151",4,004,Slot,4,FALSE,"","https://images.pokemontcg.io/sv3pt5/168_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/168_hires.png",FALSE
5,"Charmeleon (169/165) - SV: 151",5,005,Base,,FALSE,"","https://images.pokemontcg.io/sv3pt5/169_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/169_hires.png",FALSE
6,"Charizard",6,006,Base,,FALSE,"","","","standard","","https://images.pokemontcg.io/sv3pt5/199_hires.png",FALSE
6-extra-1768404993431,"Mega Charizard X ex #23",6,006,Slot,6,TRUE,"35","https://storage.googleapis.com/images.pricecharting.com/v7di2q5lovmym62w/1600.jpg","","MEGA","","",FALSE
6-extra-1705536000-10,"Charizard ex (199/165) - SV: 151",6,006,Slot,6,FALSE,"","https://images.pokemontcg.io/sv3pt5/199_hires.png","","Special Illus. Rare","","https://images.pokemontcg.io/sv3pt5/199_hires.png",FALSE
6-extra-1705536000-11,"Charizard ex (223/197) - Obsidian Flames",6,006,Slot,6,FALSE,"","https://images.pokemontcg.io/sv3/223_hires.png","","Special Illus. Rare","","https://images.pokemontcg.io/sv3/223_hires.png",FALSE
6-extra-1705536000-12,"Charizard V (154/172) - Brilliant Stars",6,006,Slot,6,FALSE,"","https://images.pokemontcg.io/swsh9/154_hires.png","","Alt Art","","https://images.pokemontcg.io/swsh9/154_hires.png",FALSE
6-extra-1705536000-13,"Charizard (TG03) - Lost Origin",6,006,Slot,6,FALSE,"","https://images.pokemontcg.io/swsh11tg/TG03_hires.png","","Trainer Gallery","","https://images.pokemontcg.io/swsh11tg/TG03_hires.png",FALSE
7,"Squirtle",7,007,Base,,FALSE,"","","","standard","","https://images.pokemontcg.io/sv3pt5/170_hires.png",FALSE
7-extra-1705536000-14,"Squirtle (170/165) - SV: 151",7,007,Slot,7,FALSE,"","https://images.pokemontcg.io/sv3pt5/170_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/170_hires.png",FALSE
7-extra-1705536000-15,"Squirtle (148/142) - SV: Stellar Crown",7,007,Slot,7,FALSE,"","https://images.pokemontcg.io/sv7/148_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv7/148_hires.png",FALSE
8,"Wartortle",8,008,Base,,FALSE,"","","","standard","","https://images.pokemontcg.io/sv3pt5/171_hires.png",FALSE
8-extra-1705536000-16,"Wartortle (171/165) - SV: 151",8,008,Slot,8,FALSE,"","https://images.pokemontcg.io/sv3pt5/171_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/171_hires.png",FALSE
9,"Blastoise",9,009,Base,,FALSE,"","","","standard","","https://images.pokemontcg.io/sv3pt5/200_hires.png",FALSE
9-extra-1768435706416,"Blastoise (Slot)",9,009,Slot,9,FALSE,"","","","MEGA","","",FALSE
9-extra-1705536000-17,"Blastoise ex (200/165) - SV: 151",9,009,Slot,9,FALSE,"","https://images.pokemontcg.io/sv3pt5/200_hires.png","","Special Illus. Rare","","https://images.pokemontcg.io/sv3pt5/200_hires.png",FALSE
9-extra-1705536000-18,"Blastoise ex (184/165) - SV: 151",9,009,Slot,9,FALSE,"","https://images.pokemontcg.io/sv3pt5/184_hires.png","","Full Art","","https://images.pokemontcg.io/sv3pt5/184_hires.png",FALSE
9-extra-1705536000-19,"Blastoise EX (XY122) - XY Promos",9,009,Slot,9,FALSE,"","https://images.pokemontcg.io/xyp/XY122_hires.png","","Full Art","","https://images.pokemontcg.io/xyp/XY122_hires.png",FALSE
10,"Caterpie",10,010,Base,,FALSE,"","https://images.pokemontcg.io/sv3pt5/172_hires.png","","standard","","",FALSE
10-extra-1705536000-20,"Caterpie (172/165) - SV: 151",10,010,Slot,10,FALSE,"","https://images.pokemontcg.io/sv3pt5/172_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/172_hires.png",FALSE
11,"Metapod",11,011,Base,,FALSE,"","","https://dhcjt92fxib5i.cloudfront.net/Poketimmy/metapod-aq4056k/cmalm6ena0001357g2i5399f3.png?format=webp&width=480&quality=75","standard","","",FALSE
12,"Butterfree",12,012,Base,,FALSE,"","https://titancards.co.uk/cdn/shop/products/001_189_Butterfree_V_504x700.jpg?v=1735825037","https://i.redd.it/hi-im-an-illustrator-and-i-just-started-my-own-151-v0-m3epateg8sce1.jpg?width=1226&format=pjpg&auto=webp&s=19280814fc2ce1b641d2fb54ef1fbbdd2c594591","standard","","",FALSE
12-extra-1705536000-21,"Butterfree VMAX (002/189) - Darkness Ablaze",12,012,Slot,12,FALSE,"","https://images.pokemontcg.io/swsh3/2_hires.png","","Rainbow Rare / FA","","https://images.pokemontcg.io/swsh3/2_hires.png",FALSE
13,"Weedle",13,013,Base,,FALSE,"","","https://reynard-health-supplies.sirv.com/Untitled%20design.png","standard","","",FALSE
14,"Kakuna",14,014,Base,,FALSE,"","","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48f0b3d5-5cdb-4d73-9f75-8a3f726c497e/dhewidd-5861c468-adb5-4917-8ead-d4ca4ba5b1ee.png/v1/fill/w_745,h_1040/card__0014_kakuna_by_envoyofhell_dhewidd-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0MCIsInBhdGgiOiIvZi80OGYwYjNkNS01Y2RiLTRkNzMtOWY3NS04YTNmNzI2YzQ5N2UvZGhld2lkZC01ODYxYzQ2OC1hZGI1LTQ5MTctOGVhZC1kNGNhNGJhNWIxZWUucG5nIiwid2lkdGgiOiI8PTc0NSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.GFl7PxWECsarjwSUGcXMwX7sZ6jUdkrq8jtPBxc1yhw","standard","","",FALSE
15,"Beedrill",15,015,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/76c5429cc46cf18ee38306a762a69d13577add96b660b65863a58664b88565fa/1600.jpg","","standard","","https://storage.googleapis.com/images.pricecharting.com/a340b29ba9304546ff670fe99b490626820c9c5997a55991b0c5daea90d0e026/1600.jpg",FALSE
15-extra-1768416724781,"Beedrill (Slot)",15,015,Slot,15,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/63bdc4e6063d493ad33d71c0dae27339fc3a5e2c4a8ace74e0e1cecb5a0dae67/1600.jpg","","standard","","",FALSE
15-extra-1768435731346,"Beedrill (Slot)",15,015,Slot,15,FALSE,"","","","MEGA","","",FALSE
15-extra-1705536000-22,"Beedrill V (161/189) - Astral Radiance",15,015,Slot,15,FALSE,"","https://images.pokemontcg.io/swsh10/161_hires.png","","Alternate Art","","https://images.pokemontcg.io/swsh10/161_hires.png",FALSE
16,"Pidgey",16,016,Base,,FALSE,"8","https://storage.googleapis.com/images.pricecharting.com/4750b91ec673b9bbeb50d74708db556afcf12e9f543415830869d0c15dcf7dd4/1600.jpg","","standard","","",FALSE
16-extra-1705536000-23,"Pidgey (207/197) - Obsidian Flames",16,016,Slot,16,FALSE,"","https://images.pokemontcg.io/sv3/207_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3/207_hires.png",FALSE
17,"Pidgeotto",17,017,Base,,FALSE,"5","https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/_tiles/sv/sv03/illustration-rare/inline/SV03_EN_208.png","","standard","","",FALSE
17-extra-1705536000-24,"Pidgeotto (208/197) - Obsidian Flames",17,017,Slot,17,FALSE,"","https://images.pokemontcg.io/sv3/208_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3/208_hires.png",FALSE
18,"Pidgeot",18,018,Base,,FALSE,"11","https://storage.googleapis.com/images.pricecharting.com/aeed3df377b1999c5b872556a1382d0be7f3ab34573c1ffab49538f61547db1c/1600.jpg","","standard","","",FALSE
18-extra-1768435721511,"Pidgeot (Slot)",18,018,Slot,18,FALSE,"","","","MEGA","","",FALSE
18-extra-1705536000-25,"Pidgeot ex (225/197) - Obsidian Flames",18,018,Slot,18,FALSE,"","https://images.pokemontcg.io/sv3/225_hires.png","","Special Illus. Rare","","https://images.pokemontcg.io/sv3/225_hires.png",FALSE
19,"Rattata",19,019,Base,,FALSE,"","","https://reynard-health-supplies.sirv.com/Rat.png","standard","","",FALSE
20,"Raticate",20,020,Base,,FALSE,"10","https://storage.googleapis.com/images.pricecharting.com/jf3zciyw7rl7q4sk/1600.jpg","","standard","","",FALSE
21,"Spearow",21,021,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/pbaofchmqxewe73d/1600.jpg","","standard","","",FALSE
22,"Fearow",22,022,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/05885cfb33ed1ef0200f0640d51c9b5ab0b8a027720af6335bad40d0268bafc6/1600.jpg","","standard","","",FALSE
23,"Ekans",23,023,Base,,FALSE,"","","https://reynard-health-supplies.sirv.com/IMG_0277.png","standard","","",FALSE
24,"Arbok",24,024,Base,,FALSE,"","https://pkmncards.com/wp-content/uploads/sv5_en_176_std.png","","standard","","",FALSE
24-extra-1705536000-26,"Arbok ex (176/165) - SV: 151",24,024,Slot,24,FALSE,"","https://images.pokemontcg.io/sv3pt5/176_hires.png","","Full Art","","https://images.pokemontcg.io/sv3pt5/176_hires.png",FALSE
25-extra-1705536000-27,"Pikachu (173/165) - SV: 151",25,025,Slot,25,FALSE,"","https://images.pokemontcg.io/sv3pt5/173_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/173_hires.png",FALSE
25-extra-1705536000-28,"Pikachu (GG30) - Crown Zenith",25,025,Slot,25,FALSE,"","https://images.pokemontcg.io/swsh12pt5gg/GG30_hires.png","","Secret Rare","","https://images.pokemontcg.io/swsh12pt5gg/GG30_hires.png",FALSE
25-extra-1705536000-29,"Pikachu VMAX (TG17) - Lost Origin",25,025,Slot,25,FALSE,"","https://images.pokemontcg.io/swsh11tg/TG17_hires.png","","Trainer Gallery","","https://images.pokemontcg.io/swsh11tg/TG17_hires.png",FALSE
25-extra-1705536000-30,"Pikachu ex (238/191) - Surging Sparks",25,025,Slot,25,FALSE,"","https://images.pokemontcg.io/sv8/238_hires.png","","Special Illus. Rare","","https://images.pokemontcg.io/sv8/238_hires.png",FALSE
26-extra-1705536000-31,"Raichu (211/193) - Paldea Evolved",26,026,Slot,26,FALSE,"","https://images.pokemontcg.io/sv2/211_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv2/211_hires.png",FALSE
27,"Sandshrew",27,027,Base,,FALSE,"","","https://i.redd.it/i-drew-my-friends-favorite-pokemon-full-art-cards-because-v0-1yjdwuqycbwe1.jpg?width=2972&format=pjpg&auto=webp&s=79147c952ed2f7b928d0a2ee32d8b2ae5776aa41","standard","","",FALSE
28,"Sandslash",28,028,Base,,FALSE,"","","https://dhcjt92fxib5i.cloudfront.net/esosa/sandslash-gxc0u7i/cm80dteiv00003j6phvrd6fhe.png?format=webp&width=480&quality=100","standard","","",FALSE
29,"Nidoran♀",29,029,Base,,FALSE,"","","https://reynard-health-supplies.sirv.com/IMG_0279.png","standard","","",FALSE
32,"Nidoran♂",32,032,Base,,FALSE,"","","https://reynard-health-supplies.sirv.com/IMG_0278.png","standard","","",FALSE
34-extra-1705536000-32,"Nidoking (174/165) - SV: 151",34,034,Slot,34,FALSE,"","https://images.pokemontcg.io/sv3pt5/174_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/174_hires.png",FALSE
37,"Vulpix",37,037,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/flj3a6njs2loik6g/1600.jpg","","standard","","",FALSE
38,"Ninetales",38,038,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/b2e61e7c33b80de6298733d0e34d47c3a1bc4cc214e3b128ec463577f08c75c2/1600.jpg","","standard","","",FALSE
38-extra-1705536000-33,"Ninetales (199/197) - Obsidian Flames",38,038,Slot,38,FALSE,"","https://images.pokemontcg.io/sv3/199_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3/199_hires.png",FALSE
39,"Jigglypuff",39,039,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/02b59f5ef8b3af178b4194c8ee809cc7340b513d90ea6099f9856c1d7326e3ac/1600.jpg","","standard","","https://storage.googleapis.com/images.pricecharting.com/48dc97e1f1fe84d7656974f3eaba015ba502e1f5bfb8bb3a818a3312a0803f95/1600.jpg",FALSE
40,"Wigglytuff",40,040,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/ct5v4o767whkxv5l/1600.jpg","","standard","","",FALSE
40-extra-1705536000-34,"Wigglytuff ex (187/165) - SV: 151",40,040,Slot,40,FALSE,"","https://images.pokemontcg.io/sv3pt5/187_hires.png","","Full Art","","https://images.pokemontcg.io/sv3pt5/187_hires.png",FALSE
44-extra-1705536000-35,"Gloom (198/197) - Obsidian Flames",44,044,Slot,44,FALSE,"","https://images.pokemontcg.io/sv3/198_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3/198_hires.png",FALSE
45-extra-1705536000-36,"Vileplume GX (211/236) - Cosmic Eclipse",45,045,Slot,45,FALSE,"","https://images.pokemontcg.io/sm12/211_hires.png","","Full Art (Tag Team era)","","https://images.pokemontcg.io/sm12/211_hires.png",FALSE
46-extra-1705536000-37,"Paras (GG32) - Crown Zenith",46,046,Slot,46,FALSE,"","https://images.pokemontcg.io/swsh12pt5gg/GG32_hires.png","","Galarian Gallery","","https://images.pokemontcg.io/swsh12pt5gg/GG32_hires.png",FALSE
47-extra-1705536000-38,"Parasect (TG01) - Lost Origin",47,047,Slot,47,FALSE,"","https://images.pokemontcg.io/swsh11tg/TG01_hires.png","","Trainer Gallery","","https://images.pokemontcg.io/swsh11tg/TG01_hires.png",FALSE
49-extra-1705536000-39,"Venomoth GX (12/214) - Unbroken Bonds",49,049,Slot,49,FALSE,"","https://images.pokemontcg.io/sm10/12_hires.png","","Full Art (Standard)","","https://images.pokemontcg.io/sm10/12_hires.png",FALSE
52,"Meowth",52,052,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/xtdnakbeqzhacii2/1600.jpg","","standard","","",FALSE
54-extra-1705536000-40,"Psyduck (175/165) - SV: 151",54,054,Slot,54,FALSE,"","https://images.pokemontcg.io/sv3pt5/175_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/175_hires.png",FALSE
58,"Growlithe",58,058,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/933accd5a36b31f7e73782bcc98b8106f69bbde68e01d3aec3fa19f31a8470c0/1600.jpg","https://dhcjt92fxib5i.cloudfront.net/Ryakuga/growlithe-uoi0peb/cmc2v602x0007356r02n51j9q.png?format=webp&width=480&quality=100","standard","","",FALSE
59-extra-1705536000-41,"Arcanine ex (224/198) - SV Base",59,059,Slot,59,FALSE,"","https://images.pokemontcg.io/sv1/224_hires.png","","Full Art","","https://images.pokemontcg.io/sv1/224_hires.png",FALSE
61-extra-1705536000-42,"Poliwhirl (176/165) - SV: 151",61,061,Slot,61,FALSE,"","https://images.pokemontcg.io/sv3pt5/176_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/176_hires.png",FALSE
65,"Alakazam",65,065,Base,,TRUE,"","https://storage.googleapis.com/images.pricecharting.com/357gofwa4cfzh35q/1600.jpg","","standard","","https://storage.googleapis.com/images.pricecharting.com/269104d702767fc78a726ddb44da87cdc927fcd83164b137a0b2c1c0ebeaacd5/1600.jpg",FALSE
65-extra-1705536000-43,"Alakazam ex (201/165) - SV: 151",65,065,Slot,65,FALSE,"","https://images.pokemontcg.io/sv3pt5/201_hires.png","","Special Illus. Rare","","https://images.pokemontcg.io/sv3pt5/201_hires.png",FALSE
66,"Machop",66,066,Base,,FALSE,"","","https://reynard-health-supplies.sirv.com/Mach.png","standard","","",FALSE
67-extra-1705536000-44,"Machoke (177/165) - SV: 151",67,067,Slot,67,FALSE,"","https://images.pokemontcg.io/sv3pt5/177_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/177_hires.png",FALSE
68,"Machamp",68,068,Base,,FALSE,"","","","standard","https://storage.googleapis.com/images.pricecharting.com/fe31aedd7666648c8dd1f23ff3967c361bb0f568611b92d33fa5e241ffa5341b/1600.jpg","https://storage.googleapis.com/images.pricecharting.com/fe31aedd7666648c8dd1f23ff3967c361bb0f568611b92d33fa5e241ffa5341b/1600.jpg",FALSE
68-extra-1705536000-45,"Machamp V (172/189) - Astral Radiance",68,068,Slot,68,FALSE,"","https://images.pokemontcg.io/swsh10/172_hires.png","","Alternate Art","","https://images.pokemontcg.io/swsh10/172_hires.png",FALSE
76-extra-1705536000-46,"Golem ex (189/165) - SV: 151",76,076,Slot,76,FALSE,"","https://images.pokemontcg.io/sv3pt5/189_hires.png","","Full Art","","https://images.pokemontcg.io/sv3pt5/189_hires.png",FALSE
78,"Rapidash",78,078,Base,,FALSE,"10","https://storage.googleapis.com/images.pricecharting.com/nsjw2sggc5zfwrxa/1600.jpg","","standard","","",FALSE
79-extra-1705536000-47,"Slowpoke (204/198) - SV Base",79,079,Slot,79,FALSE,"","https://images.pokemontcg.io/sv1/204_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv1/204_hires.png",FALSE
80-extra-1705536000-48,"Slowbro ex (246/198) - SV Base",80,080,Slot,80,FALSE,"","https://images.pokemontcg.io/sv1/246_hires.png","","Full Art","","https://images.pokemontcg.io/sv1/246_hires.png",FALSE
81-extra-1705536000-49,"Magnemite (242/236) - Cosmic Eclipse",81,081,Slot,81,FALSE,"","https://images.pokemontcg.io/sm12/242_hires.png","","Character Rare","","https://images.pokemontcg.io/sm12/242_hires.png",FALSE
85-extra-1705536000-50,"Dodrio V (201/264) - Fusion Strike",85,085,Slot,85,FALSE,"","https://images.pokemontcg.io/swsh8/201_hires.png","","Full Art","","https://images.pokemontcg.io/swsh8/201_hires.png",FALSE
89-extra-1705536000-51,"Muk & Alolan Muk (196/214) - Unbroken",89,089,Slot,89,FALSE,"","https://images.pokemontcg.io/sm10/196_hires.png","","Tag Team Alt Art","","https://images.pokemontcg.io/sm10/196_hires.png",FALSE
92,"Gastly",92,092,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/wj6xawywsglf2rg4/1600.jpg","","standard","","",FALSE
92-extra-1705536000-52,"Gastly (177/162) - Temporal Forces",92,092,Slot,92,FALSE,"","https://images.pokemontcg.io/sv5/177_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv5/177_hires.png",FALSE
93,"Haunter",93,093,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/6x6gz6mhlmmmunoy/1600.jpg","","standard","","",FALSE
94,"Gengar",94,094,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/ca2f59b3af4069288ece7f7ce8aeb0a94d5a6744652e013dc5c02e72fced9628/1600.jpg","","standard","","",FALSE
94-extra-1768435241766,"Gengar",94,094,Slot,94,FALSE,"","","","MEGA","","",FALSE
94-extra-1705536000-53,"Gengar VMAX (271/264) - Fusion Strike",94,094,Slot,94,FALSE,"","https://images.pokemontcg.io/swsh8/271_hires.png","","VMAX","","https://images.pokemontcg.io/swsh8/271_hires.png",FALSE
95-extra-1705536000-54,"Onix GX (SV) - Hidden Fates",95,095,Slot,95,FALSE,"","https://images.pokemontcg.io/sm115/SV45_hires.png","","Full Art","","https://images.pokemontcg.io/sm115/SV45_hires.png",FALSE
96-extra-1705536000-55,"Drowzee (210/198) - SV Base",96,096,Slot,96,FALSE,"","https://images.pokemontcg.io/sv1/210_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv1/210_hires.png",FALSE
102,"Exeggcute",102,102,Base,,FALSE,"5","https://storage.googleapis.com/images.pricecharting.com/2sa2syx5uqixtrof/1600.jpg","","standard","","",FALSE
102-extra-1705536000-56,"Exeggcute (192/191) - Surging Sparks",102,102,Slot,102,FALSE,"","https://images.pokemontcg.io/sv8/192_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv8/192_hires.png",FALSE
103,"Exeggutor",103,103,Base,,FALSE,"4","https://storage.googleapis.com/images.pricecharting.com/lncn4bixhmzjehvb/1600.jpg","","standard","","",FALSE
109-extra-1705536000-57,"Koffing (243/236) - Cosmic Eclipse",109,109,Slot,109,FALSE,"","https://images.pokemontcg.io/sm12/243_hires.png","","Character Rare","","https://images.pokemontcg.io/sm12/243_hires.png",FALSE
113,"Chansey",113,113,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/4936f6f735ae012bdea7a541182b8ee6150124665fa3df2238dd6bff17c48f32/1600.jpg","","standard","","",FALSE
113-extra-1705536000-58,"Chansey (187/167) - Twilight Masq",113,113,Slot,113,FALSE,"","https://images.pokemontcg.io/sv6/187_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv6/187_hires.png",FALSE
114-extra-1705536000-59,"Tangela (178/165) - SV: 151",114,114,Slot,114,FALSE,"","https://images.pokemontcg.io/sv3pt5/178_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/178_hires.png",FALSE
115,"Kangaskhan",115,115,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/hov43j4qreh5f2pd/1600.jpg","","standard","","",FALSE
115-extra-1768435822142,"Kangaskhan (Slot)",115,115,Slot,115,TRUE,"","https://storage.googleapis.com/images.pricecharting.com/lsh3gcrbscq3qcx7/1600.jpg","","MEGA","","",FALSE
115-extra-1705536000-60,"Kangaskhan ex (190/165) - SV: 151",115,115,Slot,115,FALSE,"","https://images.pokemontcg.io/sv3pt5/190_hires.png","","Full Art","","https://images.pokemontcg.io/sv3pt5/190_hires.png",FALSE
121-extra-1705536000-61,"Starmie V (TG13) - Astral Radiance",121,121,Slot,121,FALSE,"","https://images.pokemontcg.io/swsh10tg/TG13_hires.png","","Trainer Gallery","","https://images.pokemontcg.io/swsh10tg/TG13_hires.png",FALSE
122-extra-1705536000-62,"Mr. Mime (179/165) - SV: 151",122,122,Slot,122,FALSE,"","https://images.pokemontcg.io/sv3pt5/179_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/179_hires.png",FALSE
123-extra-1705536000-63,"Scyther (SV1) - Hidden Fates",123,123,Slot,123,FALSE,"","https://images.pokemontcg.io/sm115/SV1_hires.png","","Shiny Vault FA","","https://images.pokemontcg.io/sm115/SV1_hires.png",FALSE
124-extra-1705536000-64,"Jynx (TG04) - Silver Tempest",124,124,Slot,124,FALSE,"","https://images.pokemontcg.io/swsh12tg/TG04_hires.png","","Trainer Gallery","","https://images.pokemontcg.io/swsh12tg/TG04_hires.png",FALSE
127-extra-1705536000-65,"Pinsir (168/167) - Twilight Masq",127,127,Slot,127,FALSE,"","https://images.pokemontcg.io/sv6/168_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv6/168_hires.png",FALSE
129-extra-1705536000-66,"Magikarp (203/193) - Paldea Evolved",129,129,Slot,129,FALSE,"","https://images.pokemontcg.io/sv2/203_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv2/203_hires.png",FALSE
130-extra-1705536000-67,"Gyarados ex (225/198) - SV Base",130,130,Slot,130,FALSE,"","https://images.pokemontcg.io/sv1/225_hires.png","","Full Art","","https://images.pokemontcg.io/sv1/225_hires.png",FALSE
131-extra-1705536000-68,"Lapras (GG05) - Crown Zenith",131,131,Slot,131,FALSE,"","https://images.pokemontcg.io/swsh12pt5gg/GG05_hires.png","","Galarian Gallery","","https://images.pokemontcg.io/swsh12pt5gg/GG05_hires.png",FALSE
132,"Ditto",132,132,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/fa694b71646ada79c4226bee74488a7e81ca2f477ae1ce993fd8862b9b02f433/1600.jpg","","standard","","https://storage.googleapis.com/images.pricecharting.com/a2c65939a228a9181ef75a99d42312954296a6a805e63fa25925d41c2e8154c5/1600.jpg",FALSE
132-extra-1768436201027,"Ditto (Slot)",132,132,Slot,132,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/35c4ebf14cde4942cfb609d54819240e22b3e624c9d868b44fb2104b59082eb3/1600.jpg","","VMAX","","",FALSE
132-extra-1705536000-69,"Ditto (GG22) - Crown Zenith",132,132,Slot,132,FALSE,"","https://images.pokemontcg.io/swsh12pt5gg/GG22_hires.png","","Galarian Gallery","","https://images.pokemontcg.io/swsh12pt5gg/GG22_hires.png",FALSE
133-extra-1705536000-70,"Eevee (188/167) - Twilight Masq",133,133,Slot,133,FALSE,"","https://images.pokemontcg.io/sv6/188_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv6/188_hires.png",FALSE
134-extra-1705536000-71,"Vaporeon V (172/203) - Evolving Skies",134,134,Slot,134,FALSE,"","https://images.pokemontcg.io/swsh7/172_hires.png","","Alternate Art","","https://images.pokemontcg.io/swsh7/172_hires.png",FALSE
135-extra-1705536000-72,"Jolteon V (177/203) - Evolving Skies",135,135,Slot,135,FALSE,"","https://images.pokemontcg.io/swsh7/177_hires.png","","Alternate Art","","https://images.pokemontcg.io/swsh7/177_hires.png",FALSE
136-extra-1705536000-73,"Flareon V (175/203) - Evolving Skies",136,136,Slot,136,FALSE,"","https://images.pokemontcg.io/swsh7/175_hires.png","","Alternate Art","","https://images.pokemontcg.io/swsh7/175_hires.png",FALSE
137,"Porygon",137,137,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/fbc31afa0618406ec3de84cf23657f9fe00d6dbfd2cd98ef8f8531f0230d048b/1600.jpg","","standard","","",FALSE
137-extra-1768436450182,"Porygon",137,137,Slot,137,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/fbc31afa0618406ec3de84cf23657f9fe00d6dbfd2cd98ef8f8531f0230d048b/1600.jpg","","standard","","",FALSE
138-extra-1705536000-74,"Omanyte (180/165) - SV: 151",138,138,Slot,138,FALSE,"","https://images.pokemontcg.io/sv3pt5/180_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/180_hires.png",FALSE
142-extra-1705536000-75,"Aerodactyl V (180/196) - Lost Origin",142,142,Slot,142,FALSE,"","https://images.pokemontcg.io/swsh11/180_hires.png","","Alternate Art","","https://images.pokemontcg.io/swsh11/180_hires.png",FALSE
143,"Snorlax",143,143,Base,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/85439a8b088d7a3ff5cbf56a8ce8974cd029be0abd4580d16f41f48d338cfcc0/1600.jpg","","standard","","",FALSE
143-extra-1768435581342,"Snorlax (Slot)",143,143,Slot,143,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/619ed3bf5b5045faf18d7f0d3f265b4fea979dfc4509cfacb017bed8bc293bcf/1600.jpg","","standard","","",FALSE
143-extra-1768435618835,"Snorlax (Slot)",143,143,Slot,143,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/e5f3d1f79dea700a66d4c82c390767301be658f70be6c684b0b6c868f4ed6ac1/1600.jpg","","VMAX","","",FALSE
143-extra-1705536000-76,"Snorlax (SVP 051) - SV: 151 Promo",143,143,Slot,143,FALSE,"","https://images.pokemontcg.io/sv3pt5/151_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/151_hires.png",FALSE
144,"Articuno",144,144,Base,,TRUE,"","https://storage.googleapis.com/images.pricecharting.com/4f3swm67c7u5qmhe/1600.jpg","","standard","","",FALSE
144-extra-1705536000-77,"Articuno (Full Art) - Generations",144,144,Slot,144,FALSE,"","https://images.pokemontcg.io/g1/RC25_hires.png","","Full Art","","https://images.pokemontcg.io/g1/RC25_hires.png",FALSE
145-extra-1705536000-78,"Zapdos ex (202/165) - SV: 151",145,145,Slot,145,FALSE,"","https://images.pokemontcg.io/sv3pt5/202_hires.png","","Special Illus. Rare","","https://images.pokemontcg.io/sv3pt5/202_hires.png",FALSE
146,"Moltres",146,146,Base,,FALSE,"","","","standard","https://storage.googleapis.com/images.pricecharting.com/coblpnti3xaglty7/1600.jpg","",FALSE
146-extra-1768436680571,"Moltres (Slot)",146,146,Slot,146,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/e6ed7e4c4e7a32837449a3f5e792e7df1eafb593a3172dfd6edaecabff0743ae/1600.jpg","","standard","","",FALSE
146-extra-1705536000-79,"Moltres (Full Art) - Generations",146,146,Slot,146,FALSE,"","https://images.pokemontcg.io/g1/RC28_hires.png","","Full Art","","https://images.pokemontcg.io/g1/RC28_hires.png",FALSE
148-extra-1705536000-80,"Dragonair (181/165) - SV: 151",148,148,Slot,148,FALSE,"","https://images.pokemontcg.io/sv3pt5/181_hires.png","","Illustration Rare","","https://images.pokemontcg.io/sv3pt5/181_hires.png",FALSE
149-extra-1705536000-81,"Dragonite V (192/203) - Evolving Skies",149,149,Slot,149,FALSE,"","https://images.pokemontcg.io/swsh7/192_hires.png","","Alternate Art","","https://images.pokemontcg.io/swsh7/192_hires.png",FALSE
150,"Mewtwo",150,150,Base,,FALSE,"","https://tools.toywiz.com/_images/_webp/_products/lg/mewtwo052open.webp","","standard","","",FALSE
150-extra-1705536000-82,"Mewtwo VSTAR (GG44) - Crown Zenith",150,150,Slot,150,FALSE,"","https://images.pokemontcg.io/swsh12pt5gg/GG44_hires.png","","Galarian Gallery","","https://images.pokemontcg.io/swsh12pt5gg/GG44_hires.png",FALSE
151-extra-1705536000-83,"Mew ex (205/165) - SV: 151",151,151,Slot,151,FALSE,"","https://images.pokemontcg.io/sv3pt5/205_hires.png","","Special Illus. Rare","","https://images.pokemontcg.io/sv3pt5/205_hires.png",FALSE
249-lugia,"Lugia",249,249,Manual,,FALSE,"","https://m.media-amazon.com/images/I/51Oj6DBk1pL._AC_UF894,1000_QL80_.jpg","","standard","","",FALSE
250-ho-oh,"Ho-Oh",250,250,Manual,,FALSE,"","","","standard","https://storage.googleapis.com/images.pricecharting.com/qa24zph4ud2igr2l/1600.jpg","",FALSE
382-kyogre,"Kyogre",382,382,Manual,,FALSE,"","","","standard","","",FALSE
382-kyogre-extra-1768652597116,"Kyogre",382,382,Slot,382-kyogre,FALSE,"","","","MEGA","","",FALSE
383-groudon,"Groudon",383,383,Manual,,FALSE,"","","","standard","","",FALSE
383-groudon-extra-1768652608766,"Groudon",383,383,Slot,383-groudon,FALSE,"","","","MEGA","","",FALSE
384-rayquaza,"Rayquaza",384,384,Manual,,FALSE,"","","","standard","https://storage.googleapis.com/images.pricecharting.com/9bb4786a29398257b306030f9ac33390939f122e12b0874e805dcd05d7b7cc5b/1600.jpg","",FALSE
384-rayquaza-extra-1768652479448,"Rayquaza (Slot)",384,384,Slot,384-rayquaza,FALSE,"","","","VMAX","https://storage.googleapis.com/images.pricecharting.com/4b81f53c1a4b5332adba6899ab472a3c3880f7c3ec9be800a1ca71edc980c5b9/1600.jpg","",FALSE
386-deoxys,"Deoxys",386,386,Manual,,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/e31a868224963621158a7aaa7914073770a87de48cf329dd8b6e287043d6a157/1600.jpg","","standard","","",FALSE
386-deoxys-extra-1768652713270,"Deoxys (Slot)",386,386,Slot,386-deoxys,FALSE,"","https://storage.googleapis.com/images.pricecharting.com/93c7a0626b58cb5e7e0c0fcceed6931fad5920ef81575f2f479185c41df69d68/530.jpg","","VMAX","","",FALSE`;

export const RAW_POKEMON: (string | RawPokemonData)[] = [
    { name: "Bulbasaur", cardImage: "https://images.pokemontcg.io/sv3pt5/166_hires.png" },
    { name: "Ivysaur", cardImage: "https://images.pokemontcg.io/sv3pt5/167_hires.png" },
    { name: "Venusaur", cardImage: "https://images.pokemontcg.io/sv3pt5/198_hires.png" },
    { name: "Charmander", cardImage: "https://images.pokemontcg.io/sv3pt5/168_hires.png" },
    { name: "Charmeleon", cardImage: "https://images.pokemontcg.io/sv3pt5/169_hires.png" },
    { name: "Charizard", cardImage: "https://images.pokemontcg.io/sv3pt5/199_hires.png" },
    { name: "Squirtle", cardImage: "https://images.pokemontcg.io/sv3pt5/170_hires.png" },
    { name: "Wartortle", cardImage: "https://images.pokemontcg.io/sv3pt5/171_hires.png" },
    { name: "Blastoise", cardImage: "https://images.pokemontcg.io/sv3pt5/200_hires.png" },
    { name: "Caterpie", cardImage: "https://images.pokemontcg.io/sv3pt5/172_hires.png" },
    "Metapod", "Butterfree", "Weedle", "Kakuna", 
    { name: "Beedrill", cardImage: "https://images.pokemontcg.io/swsh10/V_hires.png" },
    "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", 
    { name: "Pikachu", cardImage: "https://images.pokemontcg.io/sv3pt5/173_hires.png" },
    { name: "Raichu", cardImage: "https://images.pokemontcg.io/sv2/211_hires.png" },
    "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", 
    { name: "Nidoking", cardImage: "https://images.pokemontcg.io/sv3pt5/174_hires.png" },
    "Clefairy", "Clefable", "Vulpix", 
    { name: "Ninetales", cardImage: "https://images.pokemontcg.io/sv3pt5/186_hires.png" },
    "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", 
    { name: "Psyduck", cardImage: "https://images.pokemontcg.io/sv3pt5/175_hires.png" },
    "Golduck", "Mankey", "Primeape", 
    { name: "Growlithe", cardImage: "https://images.pokemontcg.io/swsh8/TG01_hires.png" },
    { name: "Arcanine", cardImage: "https://images.pokemontcg.io/sv1/224_hires.png" },
    "Poliwag", { name: "Poliwhirl", cardImage: "https://images.pokemontcg.io/sv3pt5/176_hires.png" },
    "Poliwrath", "Abra", "Kadabra", 
    { name: "Alakazam", cardImage: "https://images.pokemontcg.io/sv3pt5/201_hires.png" },
    "Machop", { name: "Machoke", cardImage: "https://images.pokemontcg.io/sv3pt5/177_hires.png" },
    { name: "Machamp", cardImage: "https://images.pokemontcg.io/swsh10/V_hires.png" },
    "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", 
    { name: "Rapidash", cardImage: "https://images.pokemontcg.io/swsh12/TG11_hires.png" },
    "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch’d", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", 
    { name: "Gengar", cardImage: "https://images.pokemontcg.io/swsh8/271_hires.png" },
    "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", 
    { name: "Tangela", cardImage: "https://images.pokemontcg.io/sv3pt5/178_hires.png" },
    "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu",
    { name: "Starmie", cardImage: "https://images.pokemontcg.io/swsh10/TG13_hires.png" },
    { name: "Mr. Mime", cardImage: "https://images.pokemontcg.io/sv3pt5/179_hires.png" },
    "Scyther", { name: "Jynx", cardImage: "https://images.pokemontcg.io/sv3pt5/191_hires.png" },
    "Electabuzz", "Magmar", "Pinsir", "Tauros", 
    { name: "Magikarp", cardImage: "https://images.pokemontcg.io/sv2/203_hires.png" },
    { name: "Gyarados", cardImage: "https://images.pokemontcg.io/xy9/123_hires.png" },
    { name: "Lapras", cardImage: "https://images.pokemontcg.io/swsh12pt5/GG05_hires.png" },
    { name: "Ditto", cardImage: "https://images.pokemontcg.io/swsh12pt5/GG22_hires.png" },
    { name: "Eevee", cardImage: "https://images.pokemontcg.io/swsh9/TG11_hires.png" },
    { name: "Vaporeon", cardImage: "https://images.pokemontcg.io/swsh9/TG02_hires.png" },
    { name: "Jolteon", cardImage: "https://images.pokemontcg.io/swsh9/TG04_hires.png" },
    { name: "Flareon", cardImage: "https://images.pokemontcg.io/swsh9/TG01_hires.png" },
    "Porygon", { name: "Omanyte", cardImage: "https://images.pokemontcg.io/sv3pt5/180_hires.png" },
    "Omastar", "Kabuto", "Kabutops", 
    { name: "Aerodactyl", cardImage: "https://images.pokemontcg.io/swsh11/180_hires.png" },
    { name: "Snorlax", cardImage: "https://images.pokemontcg.io/swsh11/TG10_hires.png" },
    { name: "Articuno", cardImage: "https://images.pokemontcg.io/swsh6/169_hires.png" },
    { name: "Zapdos", cardImage: "https://images.pokemontcg.io/sv3pt5/202_hires.png" },
    { name: "Moltres", cardImage: "https://images.pokemontcg.io/swsh6/176_hires.png" },
    "Dratini", { name: "Dragonair", cardImage: "https://images.pokemontcg.io/sv3pt5/181_hires.png" },
    { name: "Dragonite", cardImage: "https://images.pokemontcg.io/swsh7/192_hires.png" },
    { name: "Mewtwo", cardImage: "https://images.pokemontcg.io/swsh12pt5/GG44_hires.png" },
    { name: "Mew", cardImage: "https://images.pokemontcg.io/sv3pt5/151_hires.png" }
];

export const WOTC_BASE_MAP: Record<number, number> = {
    65: 1, 9: 2, 113: 3, 6: 4, 35: 5, 130: 6, 107: 7, 68: 8, 82: 9, 150: 10, 34: 11, 38: 12, 62: 13, 26: 14, 3: 15, 145: 16,
    15: 17, 148: 18, 51: 19, 125: 20, 101: 21, 17: 22, 59: 23, 5: 24, 87: 25, 147: 26, 83: 27, 58: 28, 93: 29, 2: 30, 124: 31,
    64: 32, 14: 33, 67: 34, 129: 35, 126: 36, 33: 37, 61: 38, 137: 39, 20: 40, 86: 41, 8: 42, 63: 43, 1: 44, 10: 45, 4: 46,
    50: 47, 84: 48, 96: 49, 92: 50, 109: 51, 66: 52, 81: 53, 11: 54, 32: 55, 95: 56, 16: 57, 25: 58, 60: 59, 77: 60, 19: 61,
    27: 62, 7: 63, 121: 64, 120: 65, 114: 66, 100: 67, 37: 68, 13: 69
};

export const GENERATION_DATA: Record<number, {id: number, name: string}[]> = {
    1: [
        {id: 1, name: "Bulbasaur"}, {id: 2, name: "Ivysaur"}, {id: 3, name: "Venusaur"}, {id: 4, name: "Charmander"}, {id: 5, name: "Charmeleon"}, {id: 6, name: "Charizard"}, {id: 7, name: "Squirtle"}, {id: 8, name: "Wartortle"}, {id: 9, name: "Blastoise"}, {id: 10, name: "Caterpie"}, 
        {id: 11, name: "Metapod"}, {id: 12, name: "Butterfree"}, {id: 13, name: "Weedle"}, {id: 14, name: "Kakuna"}, {id: 15, name: "Beedrill"}, {id: 16, name: "Pidgey"}, {id: 17, name: "Pidgeotto"}, {id: 18, name: "Pidgeot"}, {id: 19, name: "Rattata"}, {id: 20, name: "Raticate"}, 
        {id: 21, name: "Spearow"}, {id: 22, name: "Fearow"}, {id: 23, name: "Ekans"}, {id: 24, name: "Arbok"}, {id: 25, name: "Pikachu"}, {id: 26, name: "Raichu"}, {id: 27, name: "Sandshrew"}, {id: 28, name: "Sandslash"}, {id: 29, name: "Nidoran♀"}, {id: 30, name: "Nidorina"}, 
        {id: 31, name: "Nidoqueen"}, {id: 32, name: "Nidoran♂"}, {id: 33, name: "Nidorino"}, {id: 34, name: "Nidoking"}, {id: 35, name: "Clefairy"}, {id: 36, name: "Clefable"}, {id: 37, name: "Vulpix"}, {id: 38, name: "Ninetales"}, {id: 39, name: "Jigglypuff"}, {id: 40, name: "Wigglytuff"}, 
        {id: 41, name: "Zubat"}, {id: 42, name: "Golbat"}, {id: 43, name: "Oddish"}, {id: 44, name: "Gloom"}, {id: 45, name: "Vileplume"}, {id: 46, name: "Paras"}, {id: 47, name: "Parasect"}, {id: 48, name: "Venonat"}, {id: 49, name: "Venomoth"}, {id: 50, name: "Diglett"}, 
        {id: 51, name: "Dugtrio"}, {id: 52, name: "Meowth"}, {id: 53, name: "Persian"}, {id: 54, name: "Psyduck"}, {id: 55, name: "Golduck"}, {id: 56, name: "Mankey"}, {id: 57, name: "Primeape"}, {id: 58, name: "Growlithe"}, {id: 59, name: "Arcanine"}, {id: 60, name: "Poliwag"}, 
        {id: 61, name: "Poliwhirl"}, {id: 62, name: "Poliwrath"}, {id: 63, name: "Abra"}, {id: 64, name: "Kadabra"}, {id: 65, name: "Alakazam"}, {id: 66, name: "Machop"}, {id: 67, name: "Machoke"}, {id: 68, name: "Machamp"}, {id: 69, name: "Bellsprout"}, {id: 70, name: "Weepinbell"}, 
        {id: 71, name: "Victreebel"}, {id: 72, name: "Tentacool"}, {id: 73, name: "Tentacruel"}, {id: 74, name: "Geodude"}, {id: 75, name: "Graveler"}, {id: 76, name: "Golem"}, {id: 77, name: "Ponyta"}, {id: 78, name: "Rapidash"}, {id: 79, name: "Slowpoke"}, {id: 80, name: "Slowbro"}, 
        {id: 81, name: "Magnemite"}, {id: 82, name: "Magneton"}, {id: 83, name: "Farfetch’d"}, {id: 84, name: "Doduo"}, {id: 85, name: "Dodrio"}, {id: 86, name: "Seel"}, {id: 87, name: "Dewgong"}, {id: 88, name: "Grimer"}, {id: 89, name: "Muk"}, {id: 90, name: "Shellder"}, 
        {id: 91, name: "Cloyster"}, {id: 92, name: "Gastly"}, {id: 93, name: "Haunter"}, {id: 94, name: "Gengar"}, {id: 95, name: "Onix"}, {id: 96, name: "Drowzee"}, {id: 97, name: "Hypno"}, {id: 98, name: "Krabby"}, {id: 99, name: "Kingler"}, {id: 100, name: "Voltorb"}, 
        {id: 101, name: "Electrode"}, {id: 102, name: "Exeggcute"}, {id: 103, name: "Exeggutor"}, {id: 104, name: "Cubone"}, {id: 105, name: "Marowak"}, {id: 106, name: "Hitmonlee"}, {id: 107, name: "Hitmonchan"}, {id: 108, name: "Lickitung"}, {id: 109, name: "Koffing"}, {id: 110, name: "Weezing"}, 
        {id: 111, name: "Rhyhorn"}, {id: 112, name: "Rhydon"}, {id: 113, name: "Chansey"}, {id: 114, name: "Tangela"}, {id: 115, name: "Kangaskhan"}, {id: 116, name: "Horsea"}, {id: 117, name: "Seadra"}, {id: 118, name: "Goldeen"}, {id: 119, name: "Seaking"}, {id: 120, name: "Staryu"}, 
        {id: 121, name: "Starmie"}, {id: 122, name: "Mr. Mime"}, {id: 123, name: "Scyther"}, {id: 124, name: "Jynx"}, {id: 125, name: "Electabuzz"}, {id: 126, name: "Magmar"}, {id: 127, name: "Pinsir"}, {id: 128, name: "Tauros"}, {id: 129, name: "Magikarp"}, {id: 130, name: "Gyarados"}, 
        {id: 131, name: "Lapras"}, {id: 132, name: "Ditto"}, {id: 133, name: "Eevee"}, {id: 134, name: "Vaporeon"}, {id: 135, name: "Jolteon"}, {id: 136, name: "Flareon"}, {id: 137, name: "Porygon"}, {id: 138, name: "Omanyte"}, {id: 139, name: "Omastar"}, {id: 140, name: "Kabuto"}, 
        {id: 141, name: "Kabutops"}, {id: 142, name: "Aerodactyl"}, {id: 143, name: "Snorlax"}, {id: 144, name: "Articuno"}, {id: 145, name: "Zapdos"}, {id: 146, name: "Moltres"}, {id: 147, name: "Dratini"}, {id: 148, name: "Dragonair"}, {id: 149, name: "Dragonite"}, {id: 150, name: "Mewtwo"}, 
        {id: 151, name: "Mew"}
    ],
    2: [
        { id: 152, name: "Chikorita" }, { id: 153, name: "Bayleef" }, { id: 154, name: "Meganium" }, { id: 155, name: "Cyndaquil" }, { id: 156, name: "Quilava" }, { id: 157, name: "Typhlosion" }, { id: 158, name: "Totodile" }, { id: 159, name: "Croconaw" }, { id: 160, name: "Feraligatr" },
        { id: 161, name: "Sentret" }, { id: 162, name: "Furret" }, { id: 163, name: "Hoothoot" }, { id: 164, name: "Noctowl" }, { id: 165, name: "Ledyba" }, { id: 166, name: "Ledian" }, { id: 167, name: "Spinarak" }, { id: 168, name: "Ariados" }, { id: 169, name: "Crobat" }, { id: 170, name: "Chinchou" }, { id: 171, name: "Lanturn" },
        { id: 172, name: "Pichu" }, { id: 173, name: "Cleffa" }, { id: 174, name: "Igglybuff" }, { id: 175, name: "Togepi" }, { id: 176, name: "Togetic" }, { id: 177, name: "Natu" }, { id: 178, name: "Xatu" }, { id: 179, name: "Mareep" }, { id: 180, name: "Flaaffy" }, { id: 181, name: "Ampharos" }, { id: 182, name: "Bellossom" },
        { id: 183, name: "Marill" }, { id: 184, name: "Azumarill" }, { id: 185, name: "Sudowoodo" }, { id: 186, name: "Politoed" }, { id: 187, name: "Hoppip" }, { id: 188, name: "Skiploom" }, { id: 189, name: "Jumpluff" }, { id: 190, name: "Aipom" }, { id: 191, name: "Sunkern" }, { id: 192, name: "Sunflora" },
        { id: 193, name: "Yanma" }, { id: 194, name: "Wooper" }, { id: 195, name: "Quagsire" }, { id: 196, name: "Espeon" }, { id: 197, name: "Umbreon" }, { id: 198, name: "Murkrow" }, { id: 199, name: "Slowking" }, { id: 200, name: "Misdreavus" }, { id: 201, name: "Unown" }, { id: 202, name: "Wobbuffet" },
        { id: 203, name: "Girafarig" }, { id: 204, name: "Pineco" }, { id: 205, name: "Forretress" }, { id: 206, name: "Dunsparce" }, { id: 207, name: "Gligar" }, { id: 208, name: "Steelix" }, { id: 209, name: "Snubbull" }, { id: 210, name: "Granbull" }, { id: 211, name: "Qwilfish" }, { id: 212, name: "Scizor" },
        { id: 213, name: "Shuckle" }, { id: 214, name: "Heracross" }, { id: 215, name: "Sneasel" }, { id: 216, name: "Teddiursa" }, { id: 217, name: "Ursaring" }, { id: 218, name: "Slugma" }, { id: 219, name: "Magcargo" }, { id: 220, name: "Swinub" }, { id: 221, name: "Piloswine" }, { id: 222, name: "Corsola" },
        { id: 223, name: "Remoraid" }, { id: 224, name: "Octillery" }, { id: 225, name: "Delibird" }, { id: 226, name: "Mantine" }, { id: 227, name: "Skarmory" }, { id: 228, name: "Houndour" }, { id: 229, name: "Houndoom" }, { id: 230, name: "Kingdra" }, { id: 231, name: "Phanpy" }, { id: 232, name: "Donphan" },
        { id: 233, name: "Porygon2" }, { id: 234, name: "Stantler" }, { id: 235, name: "Smeargle" }, { id: 236, name: "Tyrogue" }, { id: 237, name: "Hitmontop" }, { id: 238, name: "Smoochum" }, { id: 239, name: "Elekid" }, { id: 240, name: "Magby" }, { id: 241, name: "Miltank" }, { id: 242, name: "Blissey" },
        { id: 243, name: "Raikou" }, { id: 244, name: "Entei" }, { id: 245, name: "Suicune" }, { id: 246, name: "Larvitar" }, { id: 247, name: "Pupitar" }, { id: 248, name: "Tyranitar" }, { id: 249, name: "Lugia" }, { id: 250, name: "Ho-Oh" }, { id: 251, name: "Celebi" }
    ],
    3: [
        { id: 252, name: "Treecko" }, { id: 253, name: "Grovyle" }, { id: 254, name: "Sceptile" }, { id: 255, name: "Torchic" }, { id: 256, name: "Combusken" }, { id: 257, name: "Blaziken" }, { id: 258, name: "Mudkip" }, { id: 259, name: "Marshtomp" }, { id: 260, name: "Swampert" },
        { id: 261, name: "Poochyena" }, { id: 262, name: "Mightyena" }, { id: 263, name: "Zigzagoon" }, { id: 264, name: "Linoone" }, { id: 265, name: "Wurmple" }, { id: 266, name: "Silcoon" }, { id: 267, name: "Beautifly" }, { id: 268, name: "Cascoon" }, { id: 269, name: "Dustox" },
        { id: 270, name: "Lotad" }, { id: 271, name: "Lombre" }, { id: 272, name: "Ludicolo" }, { id: 273, name: "Seedot" }, { id: 274, name: "Nuzleaf" }, { id: 275, name: "Shiftry" }, { id: 276, name: "Taillow" }, { id: 277, name: "Swellow" }, { id: 278, name: "Wingull" }, { id: 279, name: "Pelipper" },
        { id: 280, name: "Ralts" }, { id: 281, name: "Kirlia" }, { id: 282, name: "Gardevoir" }, { id: 283, name: "Surskit" }, { id: 284, name: "Masquerain" }, { id: 285, name: "Shroomish" }, { id: 286, name: "Breloom" }, { id: 287, name: "Slakoth" }, { id: 288, name: "Vigoroth" }, { id: 289, name: "Slaking" },
        { id: 290, name: "Nincada" }, { id: 291, name: "Ninjask" }, { id: 292, name: "Shedinja" }, { id: 293, name: "Whismur" }, { id: 294, name: "Loudred" }, { id: 295, name: "Exploud" }, { id: 296, name: "Makuhita" }, { id: 297, name: "Hariyama" }, { id: 298, name: "Azurill" }, { id: 299, name: "Nosepass" },
        { id: 300, name: "Skitty" }, { id: 301, name: "Delcatty" }, { id: 302, name: "Sableye" }, { id: 303, name: "Mawile" }, { id: 304, name: "Aron" }, { id: 305, name: "Lairon" }, { id: 306, name: "Aggron" }, { id: 307, name: "Meditite" }, { id: 308, name: "Medicham" }, { id: 309, name: "Electrike" }, { id: 310, name: "Manectric" },
        { id: 311, name: "Plusle" }, { id: 312, name: "Minun" }, { id: 313, name: "Volbeat" }, { id: 314, name: "Illumise" }, { id: 315, name: "Roselia" }, { id: 316, name: "Gulpin" }, { id: 317, name: "Swalot" }, { id: 318, name: "Carvanha" }, { id: 319, name: "Sharpedo" },
        { id: 320, name: "Wailmer" }, { id: 321, name: "Wailord" }, { id: 322, name: "Numel" }, { id: 323, name: "Camerupt" }, { id: 324, name: "Torkoal" }, { id: 325, name: "Spoink" }, { id: 326, name: "Grumpig" }, { id: 327, name: "Spinda" }, { id: 328, name: "Trapinch" }, { id: 329, name: "Vibrava" }, { id: 330, name: "Flygon" },
        { id: 331, name: "Cacnea" }, { id: 332, name: "Cacturne" }, { id: 333, name: "Swablu" }, { id: 334, name: "Altaria" }, { id: 335, name: "Zangoose" }, { id: 336, name: "Seviper" }, { id: 337, name: "Lunatone" }, { id: 338, name: "Solrock" }, { id: 339, name: "Barboach" }, { id: 340, name: "Whiscash" },
        { id: 341, name: "Corphish" }, { id: 342, name: "Crawdaunt" }, { id: 343, name: "Baltoy" }, { id: 344, name: "Claydol" }, { id: 345, name: "Lileep" }, { id: 346, name: "Cradily" }, { id: 347, name: "Anorith" }, { id: 348, name: "Armaldo" }, { id: 349, name: "Feebas" }, { id: 350, name: "Milotic" },
        { id: 351, name: "Castform" }, { id: 352, name: "Kecleon" }, { id: 353, name: "Shuppet" }, { id: 354, name: "Banette" }, { id: 355, name: "Duskull" }, { id: 356, name: "Dusclops" }, { id: 357, name: "Tropius" }, { id: 358, name: "Chimecho" }, { id: 359, name: "Absol" }, { id: 360, name: "Wynaut" },
        { id: 361, name: "Snorunt" }, { id: 362, name: "Glalie" }, { id: 363, name: "Spheal" }, { id: 364, name: "Sealeo" }, { id: 365, name: "Walrein" }, { id: 366, name: "Clamperl" }, { id: 367, name: "Huntail" }, { id: 368, name: "Gorebyss" }, { id: 369, name: "Relicanth" }, { id: 370, name: "Luvdisc" },
        { id: 371, name: "Bagon" }, { id: 372, name: "Shelgon" }, { id: 373, name: "Salamence" }, { id: 374, name: "Beldum" }, { id: 375, name: "Metang" }, { id: 376, name: "Metagross" }, { id: 377, name: "Regirock" }, { id: 378, name: "Regice" }, { id: 379, name: "Registeel" },
        { id: 380, name: "Latias" }, { id: 381, name: "Latios" }, { id: 382, name: "Kyogre" }, { id: 383, name: "Groudon" }, { id: 384, name: "Rayquaza" }, { id: 385, name: "Jirachi" }, { id: 386, name: "Deoxys" }
    ],
    4: [
        { id: 387, name: "Turtwig" }, { id: 388, name: "Grotle" }, { id: 389, name: "Torterra" }, { id: 390, name: "Chimchar" }, { id: 391, name: "Monferno" }, { id: 392, name: "Infernape" }, { id: 393, name: "Piplup" }, { id: 394, name: "Prinplup" }, { id: 395, name: "Empoleon" }, { id: 396, name: "Starly" }, 
        { id: 397, name: "Staravia" }, { id: 398, name: "Staraptor" }, { id: 399, name: "Bidoof" }, { id: 400, name: "Bibarel" }, { id: 401, name: "Kricketot" }, { id: 402, name: "Kricketune" }, { id: 403, name: "Shinx" }, { id: 404, name: "Luxio" }, { id: 405, name: "Luxray" }, { id: 406, name: "Budew" }, 
        { id: 407, name: "Roserade" }, { id: 408, name: "Cranidos" }, { id: 409, name: "Rampardos" }, { id: 410, name: "Shieldon" }, { id: 411, name: "Bastiodon" }, { id: 412, name: "Burmy" }, { id: 413, name: "Wormadam" }, { id: 414, name: "Mothim" }, { id: 415, name: "Combee" }, { id: 416, name: "Vespiquen" }, 
        { id: 417, name: "Pachirisu" }, { id: 418, name: "Buizel" }, { id: 419, name: "Floatzel" }, { id: 420, name: "Cherubi" }, { id: 421, name: "Cherrim" }, { id: 422, name: "Shellos" }, { id: 423, name: "Gastrodon" }, { id: 424, name: "Ambipom" }, { id: 425, name: "Drifloon" }, { id: 426, name: "Drifblim" }, 
        { id: 427, name: "Buneary" }, { id: 428, name: "Lopunny" }, { id: 429, name: "Mismagius" }, { id: 430, name: "Honchkrow" }, { id: 431, name: "Glameow" }, { id: 432, name: "Purugly" }, { id: 433, name: "Chingling" }, { id: 434, name: "Stunky" }, { id: 435, name: "Skuntank" }, { id: 436, name: "Bronzor" }, 
        { id: 437, name: "Bronzong" }, { id: 438, name: "Bonsly" }, { id: 439, name: "Mime Jr." }, { id: 440, name: "Happiny" }, { id: 441, name: "Chatot" }, { id: 442, name: "Spiritomb" }, { id: 443, name: "Gible" }, { id: 444, name: "Gabite" }, { id: 445, name: "Garchomp" }, { id: 446, name: "Munchlax" }, 
        { id: 447, name: "Riolu" }, { id: 448, name: "Lucario" }, { id: 449, name: "Hippopotas" }, { id: 450, name: "Hippowdon" }, { id: 451, name: "Skorupi" }, { id: 452, name: "Drapion" }, { id: 453, name: "Croagunk" }, { id: 454, name: "Toxicroak" }, { id: 455, name: "Carnivine" }, { id: 456, name: "Finneon" }, 
        { id: 457, name: "Lumineon" }, { id: 458, name: "Mantyke" }, { id: 459, name: "Snover" }, { id: 460, name: "Abomasnow" }, { id: 461, name: "Weavile" }, { id: 462, name: "Magnezone" }, { id: 463, name: "Lickilicky" }, { id: 464, name: "Rhyperior" }, { id: 465, name: "Tangrowth" }, { id: 466, name: "Electivire" }, 
        { id: 467, name: "Magmortar" }, { id: 468, name: "Togekiss" }, { id: 469, name: "Yanmega" }, { id: 470, name: "Leafeon" }, { id: 471, name: "Glaceon" }, { id: 472, name: "Gliscor" }, { id: 473, name: "Mamoswine" }, { id: 474, name: "Porygon-Z" }, { id: 475, name: "Gallade" }, { id: 476, name: "Probopass" }, 
        { id: 477, name: "Dusknoir" }, { id: 478, name: "Froslass" }, { id: 479, name: "Rotom" }, { id: 480, name: "Uxie" }, { id: 481, name: "Mesprit" }, { id: 482, name: "Azelf" }, { id: 483, name: "Dialga" }, { id: 484, name: "Palkia" }, { id: 485, name: "Heatran" }, { id: 486, name: "Regigigas" }, 
        { id: 487, name: "Giratina" }, { id: 488, name: "Cresselia" }, { id: 489, name: "Phione" }, { id: 490, name: "Manaphy" }, { id: 491, name: "Darkrai" }, { id: 492, name: "Shaymin" }, { id: 493, name: "Arceus" }
    ],
    5: [
        { id: 494, name: "Victini" }, { id: 495, name: "Snivy" }, { id: 496, name: "Servine" }, { id: 497, name: "Serperior" }, { id: 498, name: "Tepig" }, { id: 499, name: "Pignite" }, { id: 500, name: "Emboar" }, { id: 501, name: "Oshawott" }, { id: 502, name: "Dewott" }, { id: 503, name: "Samurott" },
        { id: 504, name: "Patrat" }, { id: 505, name: "Watchog" }, { id: 506, name: "Lillipup" }, { id: 507, name: "Herdier" }, { id: 508, name: "Stoutland" }, { id: 509, name: "Purrloin" }, { id: 510, name: "Liepard" }, { id: 511, name: "Pansage" }, { id: 512, name: "Simisage" }, { id: 513, name: "Pansear" },
        { id: 514, name: "Simisear" }, { id: 515, name: "Panpour" }, { id: 516, name: "Simipour" }, { id: 517, name: "Munna" }, { id: 518, name: "Musharna" }, { id: 519, name: "Pidove" }, { id: 520, name: "Tranquill" }, { id: 521, name: "Unfezant" }, { id: 522, name: "Blitzle" }, { id: 523, name: "Zebstrika" },
        { id: 524, name: "Roggenrola" }, { id: 525, name: "Boldore" }, { id: 526, name: "Gigalith" }, { id: 527, name: "Woobat" }, { id: 528, name: "Swoobat" }, { id: 529, name: "Drilbur" }, { id: 530, name: "Excadrill" }, { id: 531, name: "Audino" }, { id: 532, name: "Timburr" }, { id: 533, name: "Gurdurr" },
        { id: 534, name: "Conkeldurr" }, { id: 535, name: "Tympole" }, { id: 536, name: "Palpitoad" }, { id: 537, name: "Seismitoad" }, { id: 538, name: "Throh" }, { id: 539, name: "Sawk" }, { id: 540, name: "Sewaddle" }, { id: 541, name: "Swadloon" }, { id: 542, name: "Leavanny" }, { id: 543, name: "Venipede" },
        { id: 544, name: "Whirlipede" }, { id: 545, name: "Scolipede" }, { id: 546, name: "Cottonee" }, { id: 547, name: "Whimsicott" }, { id: 548, name: "Petilil" }, { id: 549, name: "Lilligant" }, { id: 550, name: "Basculin" }, { id: 551, name: "Sandile" }, { id: 552, name: "Krokorok" }, { id: 553, name: "Krookodile" },
        { id: 554, name: "Darumaka" }, { id: 555, name: "Darmanitan" }, { id: 556, name: "Maractus" }, { id: 557, name: "Dwebble" }, { id: 558, name: "Crustle" }, { id: 559, name: "Scraggy" }, { id: 560, name: "Scrafty" }, { id: 561, name: "Sigilyph" }, { id: 562, name: "Yamask" }, { id: 563, name: "Cofagrigus" },
        { id: 564, name: "Tirtouga" }, { id: 565, name: "Carracosta" }, { id: 566, name: "Archen" }, { id: 567, name: "Archeops" }, { id: 568, name: "Trubbish" }, { id: 569, name: "Garbodor" }, { id: 570, name: "Zorua" }, { id: 571, name: "Zoroark" }, { id: 572, name: "Minccino" }, { id: 573, name: "Cinccino" },
        { id: 574, name: "Gothita" }, { id: 575, name: "Gothorita" }, { id: 576, name: "Gothitelle" }, { id: 577, name: "Solosis" }, { id: 578, name: "Duosion" }, { id: 579, name: "Reuniclus" }, { id: 580, name: "Ducklett" }, { id: 581, name: "Swanna" }, { id: 582, name: "Vanillite" }, { id: 583, name: "Vanillish" },
        { id: 584, name: "Vanilluxe" }, { id: 585, name: "Deerling" }, { id: 586, name: "Sawsbuck" }, { id: 587, name: "Emolga" }, { id: 588, name: "Karrablast" }, { id: 589, name: "Escavalier" }, { id: 590, name: "Foongus" }, { id: 591, name: "Amoonguss" }, { id: 592, name: "Frillish" }, { id: 593, name: "Jellicent" },
        { id: 594, name: "Alomomola" }, { id: 595, name: "Joltik" }, { id: 596, name: "Galvantula" }, { id: 597, name: "Ferroseed" }, { id: 598, name: "Ferrothorn" }, { id: 599, name: "Klink" }, { id: 600, name: "Klang" }, { id: 601, name: "Klinklang" }, { id: 602, name: "Tynamo" }, { id: 603, name: "Eelektrik" },
        { id: 604, name: "Eelektross" }, { id: 605, name: "Elgyem" }, { id: 606, name: "Beheeyem" }, { id: 607, name: "Litwick" }, { id: 608, name: "Lampent" }, { id: 609, name: "Chandelure" }, { id: 610, name: "Axew" }, { id: 611, name: "Fraxure" }, { id: 612, name: "Haxorus" }, { id: 613, name: "Cubchoo" },
        { id: 614, name: "Beartic" }, { id: 615, name: "Cryogonal" }, { id: 616, name: "Shelmet" }, { id: 617, name: "Accelgor" }, { id: 618, name: "Stunfisk" }, { id: 619, name: "Mienfoo" }, { id: 620, name: "Mienshao" }, { id: 621, name: "Druddigon" }, { id: 622, name: "Golett" }, { id: 623, name: "Golurk" },
        { id: 624, name: "Pawniard" }, { id: 625, name: "Bisharp" }, { id: 626, name: "Bouffalant" }, { id: 627, name: "Rufflet" }, { id: 628, name: "Braviary" }, { id: 629, name: "Vullaby" }, { id: 630, name: "Mandibuzz" }, { id: 631, name: "Heatmor" }, { id: 632, name: "Durant" }, { id: 633, name: "Deino" },
        { id: 634, name: "Zweilous" }, { id: 635, name: "Hydreigon" }, { id: 636, name: "Larvesta" }, { id: 637, name: "Volcarona" }, { id: 638, name: "Cobalion" }, { id: 639, name: "Terrakion" }, { id: 640, name: "Virizion" }, { id: 641, name: "Tornadus" }, { id: 642, name: "Thundurus" }, { id: 643, name: "Reshiram" },
        { id: 644, name: "Zekrom" }, { id: 645, name: "Landorus" }, { id: 646, name: "Kyurem" }, { id: 647, name: "Keldeo" }, { id: 648, name: "Meloetta" }, { id: 649, name: "Genesect" }
    ],
    6: [
        { id: 650, name: "Chespin" }, { id: 651, name: "Quilladin" }, { id: 652, name: "Chesnaught" }, { id: 653, name: "Fennekin" }, { id: 654, name: "Braixen" }, { id: 655, name: "Delphox" }, { id: 656, name: "Froakie" }, { id: 657, name: "Frogadier" }, { id: 658, name: "Greninja" }, { id: 659, name: "Bunnelby" },
        { id: 660, name: "Diggersby" }, { id: 661, name: "Fletchling" }, { id: 662, name: "Fletchinder" }, { id: 663, name: "Talonflame" }, { id: 664, name: "Scatterbug" }, { id: 665, name: "Spewpa" }, { id: 666, name: "Vivillon" }, { id: 667, name: "Litleo" }, { id: 668, name: "Pyroar" }, { id: 669, name: "Flabébé" },
        { id: 670, name: "Floette" }, { id: 671, name: "Florges" }, { id: 672, name: "Skiddo" }, { id: 673, name: "Gogoat" }, { id: 674, name: "Pancham" }, { id: 675, name: "Pangoro" }, { id: 676, name: "Furfrou" }, { id: 677, name: "Espurr" }, { id: 678, name: "Meowstic" }, { id: 679, name: "Honedge" },
        { id: 680, name: "Doublade" }, { id: 681, name: "Aegislash" }, { id: 682, name: "Spritzee" }, { id: 683, name: "Aromatisse" }, { id: 684, name: "Swirlix" }, { id: 685, name: "Slurpuff" }, { id: 686, name: "Inkay" }, { id: 687, name: "Malamar" }, { id: 688, name: "Binacle" }, { id: 689, name: "Barbaracle" },
        { id: 690, name: "Skrelp" }, { id: 691, name: "Dragalge" }, { id: 692, name: "Clauncher" }, { id: 693, name: "Clawitzer" }, { id: 694, name: "Helioptile" }, { id: 695, name: "Heliolisk" }, { id: 696, name: "Tyrunt" }, { id: 697, name: "Tyrantrum" }, { id: 698, name: "Amaura" }, { id: 699, name: "Aurorus" },
        { id: 700, name: "Sylveon" }, { id: 701, name: "Hawlucha" }, { id: 702, name: "Dedenne" }, { id: 703, name: "Carbink" }, { id: 704, name: "Goomy" }, { id: 705, name: "Sliggoo" }, { id: 706, name: "Goodra" }, { id: 707, name: "Klefki" }, { id: 708, name: "Phantump" }, { id: 709, name: "Trevenant" },
        { id: 710, name: "Pumpkaboo" }, { id: 711, name: "Gourgeist" }, { id: 712, name: "Bergmite" }, { id: 713, name: "Avalugg" }, { id: 714, name: "Noibat" }, { id: 715, name: "Noivern" }, { id: 716, name: "Xerneas" }, { id: 717, name: "Yveltal" }, { id: 718, name: "Zygarde" }, { id: 719, name: "Diancie" },
        { id: 720, name: "Hoopa" }, { id: 721, name: "Volcanion" }
    ],
    7: [
        { id: 722, name: "Rowlet" }, { id: 723, name: "Dartrix" }, { id: 724, name: "Decidueye" }, { id: 725, name: "Litten" }, { id: 726, name: "Torracat" }, { id: 727, name: "Incineroar" }, { id: 728, name: "Popplio" }, { id: 729, name: "Brionne" }, { id: 730, name: "Primarina" }, { id: 731, name: "Pikipek" },
        { id: 732, name: "Trumbeak" }, { id: 733, name: "Toucannon" }, { id: 734, name: "Yungoos" }, { id: 735, name: "Gumshoos" }, { id: 736, name: "Grubbin" }, { id: 737, name: "Charjabug" }, { id: 738, name: "Vikavolt" }, { id: 739, name: "Crabrawler" }, { id: 740, name: "Crabominable" }, { id: 741, name: "Oricorio" },
        { id: 742, name: "Cutiefly" }, { id: 743, name: "Ribombee" }, { id: 744, name: "Rockruff" }, { id: 745, name: "Lycanroc" }, { id: 746, name: "Wishiwashi" }, { id: 747, name: "Mareanie" }, { id: 748, name: "Toxapex" }, { id: 749, name: "Mudbray" }, { id: 750, name: "Mudsdale" }, { id: 751, name: "Dewpider" },
        { id: 752, name: "Araquanid" }, { id: 753, name: "Fomantis" }, { id: 754, name: "Lurantis" }, { id: 755, name: "Morelull" }, { id: 756, name: "Shiinotic" }, { id: 757, name: "Salandit" }, { id: 758, name: "Salazzle" }, { id: 759, name: "Stufful" }, { id: 760, name: "Bewear" }, { id: 761, name: "Bounsweet" },
        { id: 762, name: "Steenee" }, { id: 763, name: "Tsareena" }, { id: 764, name: "Comfey" }, { id: 765, name: "Oranguru" }, { id: 766, name: "Passimian" }, { id: 767, name: "Wimpod" }, { id: 768, name: "Golisopod" }, { id: 769, name: "Sandygast" }, { id: 770, name: "Palossand" }, { id: 771, name: "Pyukumuku" },
        { id: 772, name: "Type: Null" }, { id: 773, name: "Silvally" }, { id: 774, name: "Minior" }, { id: 775, name: "Komala" }, { id: 776, name: "Turtonator" }, { id: 777, name: "Togedemaru" }, { id: 778, name: "Mimikyu" }, { id: 779, name: "Bruxish" }, { id: 780, name: "Drampa" }, { id: 781, name: "Dhelmise" },
        { id: 782, name: "Jangmo-o" }, { id: 783, name: "Hakamo-o" }, { id: 784, name: "Kommo-o" }, { id: 785, name: "Tapu Koko" }, { id: 786, name: "Tapu Lele" }, { id: 787, name: "Tapu Bulu" }, { id: 788, name: "Tapu Fini" }, { id: 789, name: "Cosmog" }, { id: 790, name: "Cosmoem" }, { id: 791, name: "Solgaleo" },
        { id: 792, name: "Lunala" }, { id: 793, name: "Nihilego" }, { id: 794, name: "Buzzwole" }, { id: 795, name: "Pheromosa" }, { id: 796, name: "Xurkitree" }, { id: 797, name: "Celesteela" }, { id: 798, name: "Kartana" }, { id: 799, name: "Guzzlord" }, { id: 800, name: "Necrozma" }, { id: 801, name: "Magearna" },
        { id: 802, name: "Marshadow" }, { id: 803, name: "Poipole" }, { id: 804, name: "Naganadel" }, { id: 805, name: "Stakataka" }, { id: 806, name: "Blacephalon" }, { id: 807, name: "Zeraora" }, { id: 808, name: "Meltan" }, { id: 809, name: "Melmetal" }
    ],
    8: [
        { id: 810, name: "Grookey" }, { id: 811, name: "Thwackey" }, { id: 812, name: "Rillaboom" }, { id: 813, name: "Scorbunny" }, { id: 814, name: "Raboot" }, { id: 815, name: "Cinderace" }, { id: 816, name: "Sobble" }, { id: 817, name: "Drizzile" }, { id: 818, name: "Inteleon" }, { id: 819, name: "Skwovet" },
        { id: 820, name: "Greedent" }, { id: 821, name: "Rookidee" }, { id: 822, name: "Corvisquire" }, { id: 823, name: "Corviknight" }, { id: 824, name: "Blipbug" }, { id: 825, name: "Dottler" }, { id: 826, name: "Orbeetle" }, { id: 827, name: "Nickit" }, { id: 828, name: "Thievul" }, { id: 829, name: "Gossifleur" },
        { id: 830, name: "Eldegoss" }, { id: 831, name: "Wooloo" }, { id: 832, name: "Dubwool" }, { id: 833, name: "Chewtle" }, { id: 834, name: "Drednaw" }, { id: 835, name: "Yamper" }, { id: 836, name: "Boltund" }, { id: 837, name: "Rolycoly" }, { id: 838, name: "Carkol" }, { id: 839, name: "Coalossal" },
        { id: 840, name: "Applin" }, { id: 841, name: "Flapple" }, { id: 842, name: "Appletun" }, { id: 843, name: "Silicobra" }, { id: 844, name: "Sandaconda" }, { id: 845, name: "Cramorant" }, { id: 846, name: "Arrokuda" }, { id: 847, name: "Barraskewda" }, { id: 848, name: "Toxel" }, { id: 849, name: "Toxtricity" },
        { id: 850, name: "Sizzlipede" }, { id: 851, name: "Centiskorch" }, { id: 852, name: "Clobbopus" }, { id: 853, name: "Grapploct" }, { id: 854, name: "Sinistea" }, { id: 855, name: "Polteageist" }, { id: 856, name: "Hatenna" }, { id: 857, name: "Hattrem" }, { id: 858, name: "Hatterene" }, { id: 859, name: "Impidimp" },
        { id: 860, name: "Morgrem" }, { id: 861, name: "Grimmsnarl" }, { id: 862, name: "Obstagoon" }, { id: 863, name: "Perrserker" }, { id: 864, name: "Cursola" }, { id: 865, name: "Sirfetch’d" }, { id: 866, name: "Mr. Rime" }, { id: 867, name: "Runerigus" }, { id: 868, name: "Milcery" }, { id: 869, name: "Alcremie" },
        { id: 870, name: "Falinks" }, { id: 871, name: "Pincurchin" }, { id: 872, name: "Snom" }, { id: 873, name: "Frosmoth" }, { id: 874, name: "Stonjourner" }, { id: 875, name: "Eiscue" }, { id: 876, name: "Indeedee" }, { id: 877, name: "Morpeko" }, { id: 878, name: "Cufant" }, { id: 879, name: "Copperajah" },
        { id: 880, name: "Dracozolt" }, { id: 881, name: "Arctozolt" }, { id: 882, name: "Dracovish" }, { id: 883, name: "Arctovish" }, { id: 884, name: "Duraludon" }, { id: 885, name: "Dreepy" }, { id: 886, name: "Drakloak" }, { id: 887, name: "Dragapult" }, { id: 888, name: "Zacian" }, { id: 889, name: "Zamazenta" },
        { id: 890, name: "Eternatus" }, { id: 891, name: "Kubfu" }, { id: 892, name: "Urshifu" }, { id: 893, name: "Zarude" }, { id: 894, name: "Regieleki" }, { id: 895, name: "Regidrago" }, { id: 896, name: "Glastrier" }, { id: 897, name: "Spectrier" }, { id: 898, name: "Calyrex" }, { id: 899, name: "Wyrdeer" },
        { id: 900, name: "Kleavor" }, { id: 901, name: "Ursaluna" }, { id: 902, name: "Basculegion" }, { id: 903, name: "Sneasler" }, { id: 904, name: "Overqwil" }, { id: 905, name: "Enamorus" }
    ],
    9: [
        { id: 906, name: "Sprigatito" }, { id: 907, name: "Floragato" }, { id: 908, name: "Meowscarada" }, { id: 909, name: "Fuecoco" }, { id: 910, name: "Crocalor" }, { id: 911, name: "Skeledirge" }, { id: 912, name: "Quaxly" }, { id: 913, name: "Quaxwell" }, { id: 914, name: "Quaquaval" }, { id: 915, name: "Lechonk" },
        { id: 916, name: "Oinkologne" }, { id: 917, name: "Tarountula" }, { id: 918, name: "Spidops" }, { id: 919, name: "Nymble" }, { id: 920, name: "Lokix" }, { id: 921, name: "Pawmi" }, { id: 922, name: "Pawmo" }, { id: 923, name: "Pawmot" }, { id: 924, name: "Tandemaus" }, { id: 925, name: "Maushold" },
        { id: 926, name: "Fidough" }, { id: 927, name: "Dachsbun" }, { id: 928, name: "Smoliv" }, { id: 929, name: "Dolliv" }, { id: 930, name: "Arboliva" }, { id: 931, name: "Squawkabilly" }, { id: 932, name: "Nacli" }, { id: 933, name: "Naclstack" }, { id: 934, name: "Garganacl" }, { id: 935, name: "Charcadet" },
        { id: 936, name: "Armarouge" }, { id: 937, name: "Ceruledge" }, { id: 938, name: "Tadbulb" }, { id: 939, name: "Bellibolt" }, { id: 940, name: "Wattrel" }, { id: 941, name: "Kilowattrel" }, { id: 942, name: "Maschiff" }, { id: 943, name: "Mabosstiff" }, { id: 944, name: "Shroodle" }, { id: 945, name: "Grafaiai" },
        { id: 946, name: "Bramblin" }, { id: 947, name: "Brambleghast" }, { id: 948, name: "Toedscool" }, { id: 949, name: "Toedscruel" }, { id: 950, name: "Klawf" }, { id: 951, name: "Capsakid" }, { id: 952, name: "Scovillain" }, { id: 953, name: "Rellor" }, { id: 954, name: "Rabsca" }, { id: 955, name: "Flittle" },
        { id: 956, name: "Espathra" }, { id: 957, name: "Tinkatink" }, { id: 958, name: "Tinkatuff" }, { id: 959, name: "Tinkaton" }, { id: 960, name: "Wiglett" }, { id: 961, name: "Wugtrio" }, { id: 962, name: "Bombirdier" }, { id: 963, name: "Finizen" }, { id: 964, name: "Palafin" }, { id: 965, name: "Varoom" },
        { id: 966, name: "Revavroom" }, { id: 967, name: "Cyclizar" }, { id: 968, name: "Orthworm" }, { id: 969, name: "Glimmet" }, { id: 970, name: "Glimmora" }, { id: 971, name: "Greavard" }, { id: 972, name: "Houndstone" }, { id: 973, name: "Flamigo" }, { id: 974, name: "Cetoddle" }, { id: 975, name: "Cetitan" },
        { id: 976, name: "Veluza" }, { id: 977, name: "Dondozo" }, { id: 978, name: "Tatsugiri" }, { id: 979, name: "Annihilape" }, { id: 980, name: "Clodsire" }, { id: 981, name: "Farigiraf" }, { id: 982, name: "Dudunsparce" }, { id: 983, name: "Kingambit" }, { id: 984, name: "Great Tusk" }, { id: 985, name: "Scream Tail" },
        { id: 986, name: "Brute Bonnet" }, { id: 987, name: "Flutter Mane" }, { id: 988, name: "Slither Wing" }, { id: 989, name: "Sandy Shocks" }, { id: 990, name: "Iron Treads" }, { id: 991, name: "Iron Bundle" }, { id: 992, name: "Iron Hands" }, { id: 993, name: "Iron Jugulis" }, { id: 994, name: "Iron Moth" }, { id: 995, name: "Iron Thorns" },
        { id: 996, name: "Frigibax" }, { id: 997, name: "Arctibax" }, { id: 998, name: "Baxcalibur" }, { id: 999, name: "Gimmighoul" }, { id: 1000, name: "Gholdengo" }, { id: 1001, name: "Wo-Chien" }, { id: 1002, name: "Chien-Pao" }, { id: 1003, name: "Ting-Lu" }, { id: 1004, name: "Chi-Yu" }, { id: 1005, name: "Roaring Moon" },
        { id: 1006, name: "Iron Valiant" }, { id: 1007, name: "Koraidon" }, { id: 1008, name: "Miraidon" }, { id: 1009, name: "Walking Wake" }, { id: 1010, name: "Iron Leaves" }, { id: 1011, name: "Dipplin" }, { id: 1012, name: "Poltchageist" }, { id: 1013, name: "Sinistcha" }, { id: 1014, name: "Okidogi" }, { id: 1015, name: "Munkidori" },
        { id: 1016, name: "Fezandipiti" }, { id: 1017, name: "Ogerpon" }, { id: 1018, name: "Archaludon" }, { id: 1019, name: "Hydrapple" }, { id: 1020, name: "Gouging Fire" }, { id: 1021, name: "Raging Bolt" }, { id: 1022, name: "Iron Boulder" }, { id: 1023, name: "Iron Crown" }, { id: 1024, name: "Terapagos" }, { id: 1025, name: "Pecharunt" }
    ]
};