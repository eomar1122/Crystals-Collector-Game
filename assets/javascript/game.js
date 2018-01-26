$(document).ready(function(){

	// VARIABLES
	// ==========================================================================

	var wins = 0;
	var losses = 0;
	var total = 0;
	var randomnumber = 0;
	var randomNumberArr = [];
	


	// FUNCTIONS
	// ==========================================================================

	// Generate four random numbers for the crystals
	function updateCrysNum() {
		for (var i = 0; i < 4; i++) {
			randomNumberArr[i] = Math.floor(Math.random() * 12) + 1;
		}
	}

	// Udate the crystals random number values
	function updateCrystalsValues() {
		var firstCrystal = $("#crystal-1").attr("data-crystalvalue", randomNumberArr[0]);
		var secondCrystal = $("#crystal-2").attr("data-crystalvalue", randomNumberArr[1]);
		var thirdCrystal = $("#crystal-3").attr("data-crystalvalue", randomNumberArr[2]);
		var fourthCrystal = $("#crystal-4").attr("data-crystalvalue", randomNumberArr[3]);
	}


	// Update the target number function
	function updateTargetNumber(){
        randomnumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $("#target-number").html(randomnumber);
        return randomnumber;
	}



	// Reset function
	function reset() {
		total = 0;
		randomNumberArr = [];
		updateTargetNumber();
		updateCrysNum();
		updateCrystalsValues();
		$("#you-score").html(total);
		console.log(randomNumberArr);
		console.log(randomnumber);
	}

	// CALL FUNCTIONS
	// ==========================================================================

	updateCrysNum();
	console.log(randomNumberArr);

	updateCrystalsValues();

	updateTargetNumber();
	console.log(randomnumber);


	// MAIN PROCESS
	// ==========================================================================

	// Add on click listener to the reystal images

	$(".crystal-image").on("click", function() {

		var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);
    	// console.log(crystalValue);
    	total += crystalValue;
    	// console.log("Total: " + total);
    	$("#you-score").html(total);
    	// console.log(randomnumber);

    	if (total === randomnumber) {
    		setTimeout(function(){
    			alert("You win!");
    		}, 100)
	      
	      wins++;
	      $("#wins").html("Wins: " + wins);
	      reset();
	    } 
	    else if (total >= randomnumber) {
	    	setTimeout(function() {
	    		alert("You lose!!");
	    	}, 100)
	      
	      losses++;
	      $("#losses").html("Losses: " + losses);
	      reset();
	    }
	});
});
