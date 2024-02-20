/*
	run this in desktop
*/

//ie. ='cookie'
let FILTERBYPOOL=0;

//ie. =['Upgrade name','Achievement name',...]
let FILTEREXACT=['A crumbly egg','A festive hat','How to bake your dragon'];

//keep this populated with upgrades and achievs that are in the mobile version
var upgrades=[`Plain cookies`,`Sugar cookies`,`Oatmeal raisin cookies`,`Peanut butter cookies`,`Coconut cookies`,`White chocolate cookies`,`Macadamia nut cookies`,`Double-chip cookies`,`White chocolate macadamia nut cookies`,`All-chocolate cookies`,`Dark chocolate-coated cookies`,`White chocolate-coated cookies`,`Eclipse cookies`,`Zebra cookies`,`Snickerdoodles`,`Stroopwafels`,`Macaroons`,`Empire biscuits`,`British tea biscuits`,`Chocolate british tea biscuits`,`Round british tea biscuits`,`Round chocolate british tea biscuits`,`Round british tea biscuits with heart motif`,`Round chocolate british tea biscuits with heart motif`,`Madeleines`,`Palmiers`,`Palets`,`Sabl&amp;eacute;s`,`Caramoas`,`Sagalongs`,`Shortfoils`,`Win mints`,`Fig gluttons`,`Loreols`,`Jaffa cakes`,`Grease's cups`,`Gingerbread men`,`Gingerbread trees`,`Rose macarons`,`Lemon macarons`,`Chocolate macarons`,`Pistachio macarons`,`Hazelnut macarons`,`Violet macarons`,`Caramel macarons`,`Licorice macarons`,`Pure black chocolate cookies`,`Pure white chocolate cookies`,`Ladyfingers`,`Tuiles`,`Chocolate-stuffed biscuits`,`Checker cookies`,`Butter cookies`,`Cream cookies`,`Gingersnaps`,`Cinnamon cookies`,`Vanity cookies`,`Cigars`,`Pinwheel cookies`,`Fudge squares`,`Digits`,`Butter horseshoes`,`Butter pucks`,`Butter knots`,`Butter slabs`,`Butter swirls`,`Shortbread biscuits`,`Millionaires' shortbreads`,`Caramel cookies`,`Lombardia cookies`,`Bastenaken cookies`,`Pecan sandies`,`Moravian spice cookies`,`Anzac biscuits`,`Buttercakes`,`Ice cream sandwiches`,`Pink biscuits`,`Whole-grain cookies`,`Candy cookies`,`Big chip cookies`,`One chip cookies`,`Sprinkles cookies`,`Peanut butter blossoms`,`No-bake cookies`,`Florentines`,`Chocolate crinkles`,`Maple cookies`,`Festivity loops`,`Persian rice cookies`,`Norwegian cookies`,`Crispy rice cookies`,`Ube cookies`,`Butterscotch cookies`,`Speculaas`,`Chocolate oatmeal cookies`,`Molasses cookies`,`Biscotti`,`Waffle cookies`,`Almond cookies`,`Hazelnut cookies`,`Walnut cookies`,`Custard creams`,`Bourbon biscuits`,`Mini-cookies`,`Profiteroles`,`Jelly donut`,`Glazed donut`,`Chocolate cake`,`Strawberry cake`,`Apple pie`,`Lemon meringue pie`,`Butter croissant`,`Cookie dough`,`Burnt cookie`,`A chocolate chip cookie but with the chips picked off for some reason`,`Flavor text cookie`,`High-definition cookie`,`Toast`,`Peanut butter &amp; jelly`,`Wookies`,`Cheeseburger`,`One lone chocolate chip`,`Whoopie pies`,`Caramel wafer biscuits`,`Chocolate chip mocha cookies`,`Earl Grey cookies`,`Corn syrup cookies`,`Icebox cookies`,`Graham crackers`,`Hardtack`,`Cornflake cookies`,`Tofu cookies`,`Gluten-free cookies`,`Russian bread cookies`,`Lebkuchen`,`Aachener Printen`,`Canistrelli`,`Nice biscuits`,`French pure butter cookies`,`Petit beurre`,`Nanaimo bars`,`Berger cookies`,`Chinsuko`,`Panda koala biscuits`,`Putri salju`,`Milk cookies`,`Cookie crumbs`,`Chocolate chip cookie`,`Skull cookies`,`Ghost cookies`,`Bat cookies`,`Slime cookies`,`Pumpkin cookies`,`Eyeball cookies`,`Spider cookies`,`Christmas tree biscuits`,`Snowflake biscuits`,`Snowman biscuits`,`Holly biscuits`,`Candy cane biscuits`,`Bell biscuits`,`Present biscuits`,`Dragon cookie`,`Milk chocolate butter biscuit`,`Dark chocolate butter biscuit`,`White chocolate butter biscuit`,`Ruby chocolate butter biscuit`,`Lavender chocolate butter biscuit`,`Elderwort biscuits`,`Bakeberry cookies`,`Duketater cookies`,`Green yeast digestives`,`Wheat slims`,`Synthetic chocolate green honey butter biscuit`,`Royal raspberry chocolate butter biscuit`,`Ultra-concentrated high-energy chocolate butter biscuit`,`Pure pitch-black chocolate butter biscuit`,`Forwards from grandma`,`Steel-plated rolling pins`,`Lubricated dentures`,`Cheap hoes`,`Fertilizer`,`Cookie trees`,`Sturdier conveyor belts`,`Child labor`,`Sweatshop`,`Sugar gas`,`Megadrill`,`Ultradrill`,`Vanilla nebulae`,`Wormholes`,`Frequent flyer`,`Antimony`,`Essence of dough`,`True chocolate`,`Ancient tablet`,`Insane oatling workers`,`Soul bond`,`Flux capacitors`,`Time paradox resolver`,`Quantum conundrum`,`Prune juice`,`Genetically-modified cookies`,`Radium reactors`,`Ultimadrill`,`Warp drive`,`Ambrosia`,`Sanity dance`,`Causality enforcer`,`Farmer grandmas`,`Miner grandmas`,`Worker grandmas`,`Cosmic grandmas`,`Transmuted grandmas`,`Altered grandmas`,`Grandmas' grandmas`,`Sugar bosons`,`String theory`,`Large macaron collider`,`Big bang bake`,`Antigrandmas`,`Double-thick glasses`,`Gingerbread scarecrows`,`Recombobulators`,`H-bomb mining`,`Chocolate monoliths`,`Aqua crustulae`,`Brane transplant`,`Yestermorrow comparators`,`Reverse cyclotrons`,`Gem polish`,`9th color`,`Chocolate light`,`Grainbow`,`Pure cosmic light`,`Rainbow grandmas`,`Aging agents`,`Pulsar sprinklers`,`Deep-bake process`,`Coreforge`,`Generation ship`,`Origin crucible`,`Deity-sized portals`,`Far future enactment`,`Nanocosmics`,`Glow-in-the-dark`,`Taller tellers`,`Scissor-resistant credit cards`,`Acid-proof vaults`,`Chocolate coins`,`Exponential interest rates`,`Financial zen`,`Golden idols`,`Sacrifices`,`Delicious blessing`,`Sun festival`,`Enlarged pantheon`,`Great Baker in the sky`,`Pointier hats`,`Beardlier beards`,`Ancient grimoires`,`Kitchen curses`,`School of sorcery`,`Dark formulas`,`Banker grandmas`,`Priestess grandmas`,`Witch grandmas`,`Xtreme walkers`,`Fudge fungus`,`Planetsplitters`,`Cyborg workforce`,`Way of the wallet`,`Creation myth`,`Cookiemancy`,`Dyson sphere`,`Theory of atomic fluidity`,`End of times back-up plan`,`Great loop hypothesis`,`The Pulse`,`Lux sanctorum`,`The Unbridling`,`Wheat triffids`,`Canola oil wells`,`78-hour days`,`The stuff rationale`,`Theocracy`,`Rabbit trick`,`The final frontier`,`Beige goo`,`Maddening chants`,`Cookietopian moments of maybe`,`Some other super-tiny fundamental particle? Probably?`,`Reverse shadows`,`Lucky grandmas`,`Your lucky cookie`,`"All Bets Are Off" magic coin`,`Winning lottery ticket`,`Four-leaf clover field`,`A recipe book about books`,`Leprechaun village`,`Improbability drive`,`Antisuperstistronics`,`Reverse dementia`,`Humane pesticides`,`Mole people`,`Machine learning`,`Edible money`,`Sick rap prayers`,`Deluxe tailored wands`,`Autopilot`,`The advent of chemistry`,`The real world`,`Second seconds`,`Quantum comb`,`Crystal mirrors`,`Bunnypedes`,`Timeproof hair dyes`,`Barnstars`,`Mine canaries`,`Brownie point system`,`Grand supercycles`,`Psalm-reading`,`Immobile spellcasting`,`Restaurants at the end of the universe`,`On second thought`,`Dimensional garbage gulper`,`Additional clock hands`,`Baking Nobel prize`,`Reverse theory of light`,`Revised probabilistics`,`Good manners`,`Lindworms`,`Bore again`,`"Volunteer" interns`,`Rules of acquisition`,`War of the gods`,`Electricity`,`Universal alphabet`,`Public betterment`,`Embedded microportals`,`Nostalgia`,`The definite molecule`,`Light capture measures`,`0-sided dice`,`Metagrandmas`,`Metabakeries`,`Mandelbrown sugar`,`Fractoids`,`Nested universe theory`,`Menger sponge cake`,`One particularly good-humored cow`,`Chocolate ouroboros`,`Nested`,`Space-filling fibers`,`Endless book of prose`,`The set of all sets`,`Reinforced index finger`,`Carpal tunnel prevention cream`,`Ambidextrous`,`Thousand fingers`,`Million fingers`,`Billion fingers`,`Trillion fingers`,`Kitten helpers`,`Kitten workers`,`Quadrillion fingers`,`Kitten engineers`,`Plastic mouse`,`Iron mouse`,`Titanium mouse`,`Adamantium mouse`,`Quintillion fingers`,`Kitten overseers`,`Sextillion fingers`,`Unobtainium mouse`,`Kitten managers`,`Septillion fingers`,`Octillion fingers`,`Eludium mouse`,`Wishalloy mouse`,`Kitten accountants`,`Kitten specialists`,`Kitten experts`,`Fantasteel mouse`,`Nevercrack mouse`,`Kitten consultants`,`Armythril mouse`,`Kitten assistants to the regional manager`,`Technobsidian mouse`,`Plasmarble mouse`,`Kitten marketeers`,`Kitten analysts`,`Lucky day`,`Serendipity`,`Get lucky`,`Heavenly chip secret`,`Heavenly cookie stand`,`Heavenly bakery`,`Heavenly confectionery`,`Heavenly key`,`Bingo center/Research facility`,`Specialized chocolate chips`,`Designer cocoa beans`,`Ritual rolling pins`,`Underworld ovens`,`One mind`,`Exotic nuts`,`Communal brainsweep`,`Arcane sugar`,`Elder Pact`,`Sacrificial rolling pins`,`Elder Pledge`,`Elder Covenant`,`Revoke Elder Covenant`,`Legacy`,`Heavenly cookies`,`Tin of butter cookies`,`Tin of british tea biscuits`,`Box of brand biscuits`,`Box of macarons`,`Starter kit`,`Halo gloves`,`Starter kitchen`,`Unholy bait`,`Elder spice`,`Sacrilegious corruption`,`Wrinkly cookies`,`Persistent memory`,`Heavenly luck`,`Lasting fortune`,`Decisive fate`,`Divine sales`,`Divine discount`,`Divine bakeries`,`Permanent upgrade slot I`,`Permanent upgrade slot II`,`Permanent upgrade slot III`,`Permanent upgrade slot IV`,`Permanent upgrade slot V`];
var achievs=[`Wake and bake`,`Making some dough`,`So baked right now`,`Fledgling bakery`,`Affluent bakery`,`World-famous bakery`,`Cosmic bakery`,`Galactic bakery`,`Universal bakery`,`Timeless bakery`,`Infinite bakery`,`Immortal bakery`,`Don't stop me now`,`You can stop now`,`Cookies all the way down`,`Overdose`,`How?`,`The land of milk and cookies`,`He who controls the cookies controls the universe`,`Tonight on Hoarders`,`Are you gonna eat all that?`,`We're gonna need a bigger bakery`,`In the mouth of madness`,`Brought to you by the letter &lt;div style="display:inline-block;background:url(img/cookicon.png);width:16px;height:16px;"&gt;&lt;/div&gt;`,`The dreams in which I'm baking are the best I've ever had`,`Set for life`,`Panic! at Nabisco`,`Bursting at the seams`,`Just about full`,`Hungry for more`,`Feed me, Orteil`,`And then what?`,`I think it's safe to say you've got it made`,`Casual baking`,`Hardcore baking`,`Steady tasty stream`,`Cookie monster`,`Mass producer`,`Cookie vortex`,`Cookie pulsar`,`Cookie quasar`,`Oh hey, you're still here`,`Let's never bake again`,`A world filled with cookies`,`When this baby hits 36 quadrillion cookies per hour`,`Fast and delicious`,`Cookiehertz: a really, really tasty hertz`,`Woops, you solved world hunger`,`Turbopuns`,`Faster menner`,`And yet you're still hungry`,`The Abakening`,`There's really no hard limit to how long these achievement names can be and to be quite honest I'm rather curious to see how far we can go.&lt;br&gt;Adolphus W. Green (1844–1917) started as the Principal of the Groton School in 1864. By 1865, he became second assistant librarian at the New York Mercantile Library; from 1867 to 1869, he was promoted to full librarian. From 1869 to 1873, he worked for Evarts, Southmayd &amp; Choate, a law firm co-founded by William M. Evarts, Charles Ferdinand Southmayd and Joseph Hodges Choate. He was admitted to the New York State Bar Association in 1873.&lt;br&gt;Anyway, how's your day been?`,`Fast`,`Knead for speed`,`Well the cookies start coming and they don't stop coming`,`I don't know if you've noticed but all these icons are very slightly off-center`,`The proof of the cookie is in the baking`,`If it's worth doing, it's worth overdoing`,`Running with scissors`,`Rarefied air`,`Push it to the limit`,`Green cookies sleep furiously`,`Leisurely pace`,`Hypersonic`,`Gotta go fast`,`Grandma's cookies`,`Sloppy kisses`,`Retirement home`,`Bought the farm`,`Reap what you sow`,`Farm ill`,`Production chain`,`Industrial revolution`,`Global warming`,`You know the drill`,`Excavation site`,`Hollow the planet`,`Expedition`,`Galactic highway`,`Far far away`,`Transmutation`,`Transmogrification`,`Gold member`,`A whole new world`,`Now you're thinking`,`Dimensional shift`,`Time warp`,`Alternate timeline`,`Rewriting history`,`Antibatter`,`Quirky quarks`,`It does matter!`,`Friend of the ancients`,`Ruler of the ancients`,`Perfected agriculture`,`Ultimate automation`,`Can you dig it`,`Type II civilization`,`Gild wars`,`Brain-split`,`Time duke`,`Molecular maestro`,`Lone photon`,`Dazzling glimmer`,`Blinding flash`,`Unending glow`,`The old never bothered me anyway`,`Homegrown`,`Technocracy`,`The center of the Earth`,`We come in peace`,`The secrets of the universe`,`Realm of the Mad God`,`Forever and ever`,`Walk the planck`,`Rise and shine`,`Pretty penny`,`Fit the bill`,`A loan in the dark`,`Need for greed`,`It's the economy, stupid`,`Your time to shrine`,`Shady sect`,`New-age cult`,`Organized religion`,`Fanaticism`,`Bewitched`,`The sorcerer's apprentice`,`Charms and enchantments`,`Curses and maledictions`,`Magic kingdom`,`The agemaster`,`To oldly go`,`Gardener extraordinaire`,`Tectonic ambassador`,`Rise of the machines`,`Acquire currency`,`Zealotry`,`The wizarding world`,`Parsec-masher`,`The work of a lifetime`,`A place lost in time`,`Heat death`,`Microcosm`,`Bright future`,`Seedy business`,`Freak fracking`,`Modern times`,`The nerve of war`,`Wololo`,`And now for my next trick, I'll need a volunteer from the audience`,`It's not delivery`,`Gold, Jerry! Gold!`,`Forbidden zone`,`cookie clicker forever and forever a hundred years cookie clicker, all day long forever, forever a hundred times, over and over cookie clicker adventures dot com`,`Scientists baffled everywhere`,`Harmony of the spheres`,`You and the beanstalk`,`Romancing the stone`,`Ex machina`,`And I need it now`,`Pray on the weak`,`It's a kind of magic`,`Make it so`,`All that glitters is gold`,`H̸̷͓̳̳̯̟͕̟͍͍̣͡ḛ̢̦̰̺̮̝͖͖̘̪͉͘͡ ̠̦͕̤̪̝̥̰̠̫̖̣͙̬͘ͅC̨̦̺̩̲̥͉̭͚̜̻̝̣̼͙̮̯̪o̴̡͇̘͎̞̲͇̦̲͞͡m̸̩̺̝̣̹̱͚̬̥̫̳̼̞̘̯͘ͅẹ͇̺̜́̕͢s̶̙̟̱̥̮̯̰̦͓͇͖͖̝͘͘͞`,`Way back then`,`Exotic matter`,`At the end of the tunnel`,`Lucked out`,`What are the odds`,`Grandma needs a new pair of shoes`,`Million to one shot, doc`,`As luck would have it`,`Ever in your favor`,`Be a lady`,`Dicey business`,`Aged well`,`101st birthday`,`Defense of the ancients`,`Harvest moon`,`Mine?`,`In full gear`,`Treacle tart economics`,`Holy cookies, grandma!`,`The Prestige`,`That's just peanuts to space`,`Worth its weight in lead`,`What happens in the vortex stays in the vortex`,`Invited to yesterday's party`,`Downsizing`,`My eyes`,`Maybe a chance in hell, actually`,`Make like a tree`,`Cave story`,`In-cog-neato`,`Save your breath because that's all you've got left`,`Vengeful and almighty`,`Spell it out for you`,`Space space space space space`,`Don't get used to yourself, you're gonna have to change`,`Objects in the mirror dimension are closer than they appear`,`Groundhog day`,`A matter of perspective`,`Optical illusion`,`Jackpot`,`But wait 'til you get older`,`Sharpest tool in the shed`,`Hey now, you're a rock`,`Break the mold`,`Get the show on, get paid`,`My world's on fire, how about yours`,`The meteor men beg to differ`,`Only shooting stars`,`We could all use a little change`,`Your brain gets smart but your head gets dumb`,`The years start coming`,`What a concept`,`You'll never shine if you don't glow`,`You'll never know if you don't go`,`Self-contained`,`Threw you for a loop`,`The sum of its parts`,`Bears repeating`,`More of the same`,`Last recurse`,`Out of one, many`,`An example of recursion`,`For more information on this achievement, please refer to its title`,`I'm so meta, even this achievement`,`Never get bored`,`Click delegator`,`Finger clickin' good`,`Click (starring Adam Sandler)`,`Gushing grannies`,`Panic at the bingo`,`Frantiquities`,`I hate manure`,`Rake in the dough`,`Overgrowth`,`Never dig down`,`Quarry on`,`Sedimentalism`,`The incredible machine`,`Yes I love technology`,`Labor of love`,`Vested interest`,`Paid in full`,`Reverse funnel system`,`New world order`,`Church of Cookiology`,`Thus spoke you`,`Hocus pocus`,`Too many rabbits, not enough hats`,`Manafest destiny`,`And beyond`,`The most precious cargo`,`Neither snow nor rain nor heat nor gloom of night`,`Magnum Opus`,`The Aureate`,`I've got the Midas touch`,`With strange eons`,`Ever more hideous`,`Which eternal lie`,`Spacetime jigamaroo`,`Be kind, rewind`,`D&amp;eacute;j&amp;agrave; vu`,`Supermassive`,`Infinitesimal`,`Powers of Ten`,`Praise the sun`,`A still more glorious dawn`,`Now the dark days are gone`,`Fingers crossed`,`Just a statistic`,`Murphy's wild guess`,`The needs of the many`,`Eating its own`,`We must go deeper`,`Click`,`Double-click`,`Mouse wheel`,`Of Mice and Men`,`The Digital`,`Extreme polydactyly`,`Dr. T`,`Thumbs, phalanges, metacarpals`,`With her finger and her thumb`,`Clicktastic`,`Clickathlon`,`Clickolympics`,`Clickorama`,`Clickasmic`,`Clickageddon`,`Clicknarok`,`Clickastrophe`,`Clickataclysm`,`The ultimate clickdown`,`All the other kids with the pumped up clicks`,`One...more...click...`,`Centennial`,`Centennial and a half`,`Bicentennial`,`Bicentennial and a half`,`Tricentennial`,`Tricentennial and a half`,`Quadricentennial`,`Quadricentennial and a half`,`Quincentennial`,`Golden cookie`,`Lucky cookie`,`A stroke of luck`,`Fortune`,`Leprechaun`,`Black cat's paw`,`Just wrong`,`Elder`,`Veteran`,`Elder nap`,`Elder slumber`,`Elder calm`,`Itchscratcher`,`Wrinklesquisher`,`Moistburster`,`Last Chance to See`,`Early bird`,`Fading luck`,`Builder`,`Architect`,`Engineer`,`Lord of Constructs`,`Enhancer`,`Augmenter`,`Upgrader`,`Lord of Progress`,`Polymath`,`Renaissance baker`,`The elder scrolls`,`One with everything`,`Mathematician`,`Base 10`,`Rebirth`,`Resurrection`,`Reincarnation`,`Endless cycle`,`Sacrifice`,`Oblivion`,`From scratch`,`Nihilism`,`Dematerialize`,`Nil zero zilch`,`Transcendence`,`Obliterate`,`Negative void`,`To crumbs, you say?`,`You get nothing`,`Humble rebeginnings`,`The end of the world`,`Oh, you're back`,`Lazarus`,`Smurf account`,`If at first you don't succeed`,`When the cookies ascend just right`,`Wholesome`];



//===================================================
		var out='';
		/*out+=`

	//====== Buildings ======

		`;
		
		for (var i in Game.Objects)
		{
			var me=Game.Objects[i];
			out+=`
	new G.Building({
		name:\`${me.name}\`,
		id:${me.id},
		single:\`${me.single}\`,plural:\`${me.plural}\`,actionName:\`${me.actionName}\`,extraName:\`${me.extraName}\`,extraPlural:\`${me.extraPlural}\`,
		desc:\`${me.desc}\`,
		pic:${me.icon},
		icon:[${me.iconColumn},0],
		cost:${me.basePrice},
		cps:${me.baseCps},
	});
`;
		}
		out+=`
	G.buildingsBN['Antimatter condenser'].style='font-size:90%;letter-spacing:-1px;';
		`;
		*/
		out+=`

	//====== Upgrades ======

		`;
		
		let List=Game.Upgrades;
		
		if (FILTERBYPOOL=='building')
		{
			List=[];
			for (var i in Game.Objects)
			{
				for (var ii in Game.Objects[i].tieredUpgrades)
				{
					if (!isNaN(ii))
					{
						Game.Objects[i].tieredUpgrades[ii].descFunc=null;
						Game.Objects[i].tieredUpgrades[ii].pool='building';
						List.push(Game.Objects[i].tieredUpgrades[ii]);
					}
				}
			}
		}
		
		
		for (var i in List)
		{
			var me=List[i];
			if (FILTEREXACT && FILTEREXACT.indexOf(me.name)==-1) continue;
			if (FILTERBYPOOL && FILTERBYPOOL!='building' && me.pool!=FILTERBYPOOL) continue;
			if (upgrades.indexOf(me.name)!=-1 || achievs.indexOf(me.name)!=-1) continue;
			
			var unlockAtKeys=Object.keys(me.unlockAt);
			var unlockAt={};
			for (var i in unlockAtKeys)
			{
				var key=unlockAtKeys[i];
				if (key=='name') continue;
				else if (key=='cookies') unlockAt['cookies']=me.unlockAt['cookies'];
				else if (key=='require') unlockAt['upgrade']=me.unlockAt['require'];
				else unlockAt[key]='//TODO '+me.unlockAt[key];
			}
			out+=`
	new G.Upgrade({
		name:\`${me.name}\`,
		id:${me.id},
		desc:\`${me.baseDesc.split('<q>')[0]}\`,
		q:\`${me.baseDesc.indexOf('<q>')!=-1?(me.baseDesc.split('<q>')[1].split('</q>')[0]):''}\`,
		icon:[${me.icon[0]},${me.icon[1]}],
		cost:${me.basePrice},
		pool:\`${me.pool}\`,order:${me.order},${me.power?`power:${me.power},`:``}${me.buildingTie?`tie:${Game.Objects[me.buildingTie.name].id},`:``}${me.tier?`tier:${me.tier},`:``}${me.parents.length>0?`
		parents:[${(me.parents.map(me => '\`'+me.name+'\`')).join(',')}],`:``}${(me.priceFunc||me.buyFunction||me.iconFunction||me.descFunc)?`
		/*TODO
		${me.priceFunc?`Has priceFunc : ${me.priceFunc}`:''}
		${me.buyFunction?`Has buyFunction : ${me.buyFunction}`:''}
		${me.iconFunction?`Has iconFunction : ${me.iconFunction}`:''}
		${me.descFunc?`Has descFunc : ${me.descFunc}`:''}
		*/`:``}
		${Object.keys(unlockAt).length>0?'unlockAt:'+JSON.stringify(unlockAt)+',':''}
	});
`;
		}
		
		out=`
G.addData(function(){
	
	`+out+`
	
});`;
		
		console.log(out);
		out=out.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
		document.write('<pre>'+out+'</pre>');
//===================================================