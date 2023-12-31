function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;
	this.buildingType = null;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	document.getElementById("cell24name").textContent = "Senkyo Planitia";
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 10 times amount shown on dice.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />If 2 Transportations are owned<span style="float: right;">50.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function citytax() {
	var p = player[turn];

	if (p.human) {

		buttonAonclick = 'hide("popupbackground"); hide("popupwrap"); var p=player[turn]; addalert(p.name+" paid $200 for landing on City Tax."); p.pay(200, 0);';
		buttonBonclick = ' hide("popupbackground"); hide("popupwrap"); var p=player[turn]; var cost=p.money; for(var i=0; i<40; i++){sq=square[i]; if(sq.owner==turn) { if(sq.mortgage) { cost+=sq.price*0.5; } else { cost+=sq.price; } cost+=(sq.house*sq.houseprice); } } cost*=0.1; cost=Math.round(cost); addalert(p.name+" paid $"+cost+" for landing on City Tax."); p.pay(cost,0);';

		popup("You landed on City Tax. You must pay $200 or ten percent of your total worth.<div><input type='button' value='Pay $200' onclick='" + buttonAonclick + "' /><input type='button' value='Pay 10%' onclick='" + buttonBonclick + "' /></div>", false);
	} else {
		addalert(p.name + " paid $200 for landing on City Tax.");
		p.pay(200, 0);
	}
}

function luxurytax() {
	addalert(player[turn].name + " paid $75 for landing on Luxury Tax.");
	player[turn].pay(75, 0);

	$("landed").show().text("You landed on Luxury Tax. Pay $75.");
}

var square = [];

square[0] = new Square("GO", "COLLECT $200 minerals AS YOU PASS.", "white");
square[1] = new Square("Kraken Mare", "$60", "#4B0082", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "white");
square[3] = new Square("Ligeia Mare", "$60", "#4B0082", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("Punga Mare", "PAY 10% OR $200", "white");
square[5] = new Square("冰火山", "$200", "white", 200, 1);
square[6] = new Square("Jingpo Lacus", "$100", "#AACCFF", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Chance", "NEW YORK LOTTERY GAMES", "white");
square[8] = new Square("Mackay Lacus", "$100", "#AACCFF", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Aztlan Regio", "$120", "#AACCFF", 120, 4, 8, 40, 100, 300, 450, 600);

square[10] = new Square("Just Visiting", "", "white");

square[11] = new Square("Ligeia Fluctus", "$140", "purple", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("Mithrim Montes", "$150", "white", 150, 2);
square[13] = new Square("Vid Flumina", "$140", "purple", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Afekan Crater ", "$160", "purple", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Sotra Patera", "$200", "white", 200, 1);
square[16] = new Square("Dilmun Regio", "$180", "orange", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "white");
square[18] = new Square("Belet Sand Sea ", "$180", "orange", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("Adiri", "$200", "orange", 200, 6, 16, 80, 220, 600, 800, 1000);

square[20] = new Square("Free Parking", "", "white");

square[21] = new Square("Ontario Lacus", "$220", "red", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Chance", "NEW YORK LOTTERY GAMES", "white");
square[23] = new Square("Shangri-La Sand Sea", "$220", "red", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Senkyo Planitia", "$240", "red", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("Menrva", "$200", "white", 200, 1);
square[26] = new Square("Quivira & Touche LLP", "$260", "yellow", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Fensal", "$260", "yellow", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Aaru", "$150", "white", 150, 2);
square[29] = new Square("Tsegihi", "$280", "yellow", 280, 8, 24, 120, 360, 850, 1025, 1200);

square[30] = new Square("Go to Camp area", "Go directly to Camp area. Do not pass GO. Do not collect $200.", "white");

square[31] = new Square("Xanadu Regio", "$300", "green", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("Hotei Regio", "$300", "green", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "white");
square[34] = new Square("Mezzoramia", "$320", "green", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Tui Regio", "$200", "white", 200, 1);
square[36] = new Square("Chance", "NEW YORK LOTTERY GAMES", "white");
square[37] = new Square("Eir Regio", "$350", "blue", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("Erebor Mons", "Pay $75", "white");
square[39] = new Square("Doom Mons", "$400", "blue", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Rapid Medical Card for Camp area, Free. This card may be kept until needed or sold.", function() { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Oxygen consumption is less than expected, gain 10 oxygen.", function() { addO2(10, 'Community Chest');});
communityChestCards[2] = new Card("Acquiring a temporary oxygen recycling system, gain 30 oxygen.", function() { addO2(30, 'Community Chest');});
communityChestCards[3] = new Card("Rapid Medical Card for Camp area, Free. This card may be kept until needed or sold.", function() { p.communityChestJailCard = true; updateOwned();});
communityChestCards[4] = new Card("Oxygen consumption is less than expected, gain 10 oxygen.", function() { addO2(10, 'Community Chest');});
communityChestCards[5] = new Card("Acquiring a temporary oxygen recycling system, gain 30 oxygen.", function() { addO2(30, 'Community Chest');});
communityChestCards[6] = new Card("Rapid Medical Card for Camp area, Free. This card may be kept until needed or sold.", function() { p.communityChestJailCard = true; updateOwned();});
communityChestCards[7] = new Card("Oxygen consumption is less than expected, gain 10 oxygen.", function() { addO2(10, 'Community Chest');});
communityChestCards[8] = new Card("Acquiring a temporary oxygen recycling system, gain 30 oxygen.", function() { addO2(30, 'Community Chest');});
communityChestCards[9] = new Card("Rapid Medical Card for Camp area, Free. This card may be kept until needed or sold.", function() { p.communityChestJailCard = true; updateOwned();});
communityChestCards[10] = new Card("Oxygen consumption is less than expected, gain 10 oxygen.", function() { addO2(10, 'Community Chest');});
communityChestCards[11] = new Card("Acquiring a temporary oxygen recycling system, gain 30 oxygen.", function() { addO2(30, 'Community Chest');});
communityChestCards[12] = new Card("Rapid Medical Card for Camp area, Free. This card may be kept until needed or sold.", function() { p.communityChestJailCard = true; updateOwned();});
communityChestCards[13] = new Card("Oxygen consumption is less than expected, gain 10 oxygen.", function() { addO2(10, 'Community Chest');});
communityChestCards[14] = new Card("Acquiring a temporary oxygen recycling system, gain 30 oxygen.", function() { addO2(30, 'Community Chest');});
communityChestCards[15] = new Card("Oxygen consumption is less than expected, gain 10 oxygen.", function() { addO2(10, 'Community Chest');});

// communityChestCards[1] = new Card("You have won lifetime home delivery of the New York Times. Collect $10", function() { addamount(10, 'Community Chest');});
// communityChestCards[2] = new Card("From sale of Macy's stock, you get $45", function() { addamount(45, 'Community Chest');});
// communityChestCards[3] = new Card("Life insurance matures. Collect $100", function() { addamount(100, 'Community Chest');});
// communityChestCards[4] = new Card("Deloitte & Touche LLP tax return Collect $20", function() { addamount(20, 'Community Chest');});
// communityChestCards[5] = new Card("FAO Schwarz Xmas fund matures. Collect $100", function() { addamount(100, 'Community Chest');});
// communityChestCards[6] = new Card("You have won a United Airlines trip around the world! Collect $100", function() { addamount(100, 'Community Chest');});
// communityChestCards[7] = new Card("Performed a wedding at the Plaza Hotel. Receive $25", function() { addamount(25, 'Community Chest');});
// communityChestCards[8] = new Card("Pay hospital $100", function() { subtractamount(100, 'Community Chest');});
// communityChestCards[9] = new Card("You won the Lottery! Collect $200", function() { addamount(200, 'Community Chest');});
// communityChestCards[10] = new Card("Pay school tax of $150", function() { subtractamount(150, 'Community Chest');});
// communityChestCards[11] = new Card("Doctor's fee. Pay $50", function() { subtractamount(50, 'Community Chest');});
// communityChestCards[12] = new Card("Madison Square Garden opening tonight. Collect $50 from every player for opening night seats.", function() { collectfromeachplayer(50, 'Community Chest');});
// communityChestCards[13] = new Card("You have won kiss cash! Advance to GO (Collect $200)", function() { advance(0);});
// communityChestCards[14] = new Card("You are assessed for street repairs. $40 per house. $115 per hotel.", function() { streetrepairs(40, 115);});
// communityChestCards[15] = new Card("Go to Camp area. Go directly to Camp area. Do not pass GO. Do not collect $200.", function() { gotojail();});


chanceCards[0] = new Card("Get out of Camp area free. This card may be kept until needed or sold.", function() { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Volcanic Activity: Sudden volcanic eruptions of ice and ammonia on Titan affect nearby areas. Lose 10 minerals.", function() { subtractamount(10, 'Chance');});
chanceCards[2] = new Card("Methane Downpour: Intense methane rainfalls on Titan affect players' movement. Go back 3 spaces.", function() { gobackthreespaces();});
chanceCards[3] = new Card("Ice Sheet Collapse: Ice sheets on Titan collapse suddenly, forming new terrain or exposing hidden resources. Get 20 minerals.",  function() { addamount(20, 'Chance');});
chanceCards[4] = new Card("Solar Storm Warning: Solar activity releases high-energy particles threatening equipment and astronauts on Titan. Go back 3 spaces.", function() { gobackthreespaces();});
chanceCards[5] = new Card("Dune Shifting: Strong winds on Titan shift dunes, altering the terrain.", function() { advance(0,32);});
chanceCards[6] = new Card("Volcanic Activity: Sudden volcanic eruptions of ice and ammonia on Titan affect nearby areas. Lose 10 minerals.", function() { subtractamount(10, 'Chance');});
chanceCards[7] = new Card("Methane Downpour: Intense methane rainfalls on Titan affect players' movement. Go back 3 spaces.", function() { gobackthreespaces();});
chanceCards[8] = new Card("Ice Sheet Collapse: Ice sheets on Titan collapse suddenly, forming new terrain or exposing hidden resources. Get 20 minerals.",  function() { addamount(20, 'Chance');});
chanceCards[9] = new Card("Solar Storm Warning: Solar activity releases high-energy particles threatening equipment and astronauts on Titan. Go back 3 spaces.", function() { gobackthreespaces();});
chanceCards[10] = new Card("Dune Shifting: Strong winds on Titan shift dunes, altering the terrain.", function() { advance(0,32);});
chanceCards[11] = new Card("Volcanic Activity: Sudden volcanic eruptions of ice and ammonia on Titan affect nearby areas. Lose 10 minerals.", function() { subtractamount(10, 'Chance');});
chanceCards[12] = new Card("Methane Downpour: Intense methane rainfalls on Titan affect players' movement. Go back 3 spaces.", function() { gobackthreespaces();});
chanceCards[13] = new Card("Ice Sheet Collapse: Ice sheets on Titan collapse suddenly, forming new terrain or exposing hidden resources. Get 20 minerals.",  function() { addamount(20, 'Chance');});
chanceCards[14] = new Card("Solar Storm Warning: Solar activity releases high-energy particles threatening equipment and astronauts on Titan. Go back 3 spaces.", function() { gobackthreespaces();});
chanceCards[15] = new Card("Dune Shifting: Strong winds on Titan shift dunes, altering the terrain.", function() { advance(0,32);});

// chanceCards[7] = new Card("Advance token to the nearest Transportation and pay owner Twice the Rental to which they are otherwise entitled. If Transportation is unowned, you may buy it from the Bank.", function() { advanceToNearestRailroad();});
// chanceCards[8] = new Card("Take a walk past The Essex House. Advance to GO. Collect $200.", function() { advance(0,32);});
// chanceCards[9] = new Card("Take a ride to the Regency Hotel! If you pass GO collect $200.", function() { advance(31);});
// chanceCards[10] = new Card("Take a walk on fifth avenue. Advance token to Trump Tower.", function() { advance(39);});
// chanceCards[11] = new Card("Advance to thirteen.", function() { advance(13);});
// chanceCards[12] = new Card("Your Smith Barney mutual fund pays dividend. Collect $150.", function() { addamount(150, 'Chance');});
// chanceCards[13] = new Card("Advance token to the nearest Transportation and pay owner Twice the Rental to which they are otherwise entitled.\n\nIf Transportation is unowned, you may buy it from the Bank.", function() { advanceToNearestRailroad();});
// chanceCards[14] = new Card("Catch a bus to Central Park. If you pass GO, collect $200.", function() { advance(9);});
// chanceCards[15] = new Card("Go directly to Camp area. Do not pass GO, do not collect $200.", function() { gotojail();});
