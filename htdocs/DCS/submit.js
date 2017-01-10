
var lower_teams = ["Hard Stuck Gold 3", "Nerf This!", "Pink Penguins", "She was level 18", "Mambo Monster Kill", "The Quackheads", "Eat Pray League", "Team Solo Feed"]
var upper_teams = ["Boosted 1", "Boosted 2", "Boosted 3", "Boosted 4", "Boosted 5", "Boosted 6", "Boosted 7", "Boosted 8"]

function prepData(){

	var errorFlag = false;

	var inputs = ["score", "teamOneName", "teamTwoName", "matchHistory1", "matchHistory2"];
	var error_index = [0,0,0,0,0];

	var scoreForm = document.getElementById("score");
	var score = scoreForm.options[scoreForm.selectedIndex].text;
	var score_value = scoreForm.options[scoreForm.selectedIndex].value;

	if (score_value === "default"){

		errorFlag = true;
		error_index[0] = 1;

	}

	var teamOneForm = document.getElementById("teamOneName");
	var teamOne = teamOneForm.options[teamOneForm.selectedIndex].text;
	var teamOne_value = teamOneForm.options[teamOneForm.selectedIndex].value;

	if (teamOne_value === "default"){
		
		errorFlag = true;
		error_index[1] = 1;

	}

	var teamTwoForm = document.getElementById("teamTwoName");
	var teamTwo = teamTwoForm.options[teamTwoForm.selectedIndex].text;
	var teamTwo_value = teamTwoForm.options[teamTwoForm.selectedIndex].value;

	if (teamTwo_value === "default"){

		errorFlag = true;
		error_index[2] = 1;

	}

	var matchOne = document.getElementById("matchHistory1").value;
	var matchTwo = document.getElementById("matchHistory2").value;

	if (matchOne.indexOf("matchhistory.na.leagueoflegends.com") == -1){

		errorFlag = true;
		error_index[3] = 1;
	}

	if (matchTwo.indexOf("matchhistory.na.leagueoflegends.com") == -1){

		errorFlag = true;
		error_index[4] = 1;

	}

	if (errorFlag){

		event.preventDefault();
		
		for (var i = 0; i<error_index.length; i++){
			if (error_index[i]===1){
				document.getElementById(inputs[i]).className = document.getElementById(inputs[i]).className + " error";
			}
			else{
				document.getElementById(inputs[i]).className = document.getElementById(inputs[i]).className.replace(" error", "");
			}

		}
		return;

	}

	var matchOneIdIndex = 6;
	var matchTwoIdIndex = 6;

	if (matchOne.indexOf("http") == -1){

		matchOneIdIndex = 4;

	}

	if (matchTwo.indexOf("http") == -1){

		matchTwoIdIndex = 4;
	}

	matchOneId = matchOne.split("/")[matchOneIdIndex];
	matchTwoId = matchTwo.split("/")[matchTwoIdIndex];

}

function chooseTeams(){

	var div_choose = document.getElementById("division");
	var division = div_choose.options[div_choose.selectedIndex].value;
	
	var dict = {"lower": lower_teams, "upper": upper_teams};

	var chosen = dict[division];

	var team_one = $("#teamOneName")[0];
	team_one.options.length = 1;
	for (var i = 0; i<chosen.length; i++){
		team_one.add(new Option(chosen[i], "team"+i));
	}

	var team_two = $("#teamTwoName")[0];
	team_two.options.length = 1;
	for (var i = 0; i<chosen.length; i++){
		team_two.add(new Option(chosen[i], "team"+i));
	}


}
