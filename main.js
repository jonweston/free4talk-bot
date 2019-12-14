var greetings = ["Hello!", "Good morning", "Good afternoon", "Good evening", "It’s nice to meet you"
, "It’s a pleasure to meet you"
, "Hi!"
, "Morning!"
, "How are things?"
, "What’s new?"
, "It’s good to see you."
, "Good day"
, "G’day!"
, "Howdy!"
, "Hey" 
, "Hey there."
, "What’s up?"
, "Sup?"
, "How’s it going?"
, "What’s happening" 
, "What’s happenin’?"
, "Yo!"
, "Hi there"
, "Howdy"
, "Greetings"
, "Hey, What’s up?"
, "What’s going on?"
, "Hey! There you are. "
, "How’s everything?"
, "How are things?"
, "Good to see you"
, "Great to see you"
, "Nice to see you"
, "What’s happening"
, "How’s it going?"
, "Good evening"
, "Hey, boo"
, "How are you?"
, "Nice to meet you!"
, "Long time no see"
, "What’s the good word?"
, "What’s new?"
, "Look who it is!"
, "How have you been?"
, "Nice to see you again."
, "Greetings and salutations!"
, "How are you doing today?"
, "What have you been up to?"
, "How are you feeling today?"
, "what a pleasant surprise!"
, "feel free to open your mic and speak up"
, "nice to have you here"
, "thanks for joining us!"
, "Howdy-doody!"
, "Top of the mornin’ to ya!"
, "What’s crackin’?"
, "How's it going?"
, "Welcome to this room."
, "Welcome aboard!"
, "What’s new? Tell me everything!"
, "Good afternoon, how are you today?" ];






//Mute people
function MutePerson(personName) 
{
    // Click Setting button for each person
	for (step = 0; step < document.getElementsByClassName("ant-btn setting no-border ant-dropdown-trigger ant-btn-primary ant-btn-circle").length; step++)
	{
		document.getElementsByClassName("ant-btn setting no-border ant-dropdown-trigger ant-btn-primary ant-btn-circle")[step].click();
		document.getElementsByClassName("ant-btn setting no-border ant-dropdown-trigger ant-btn-primary ant-btn-circle")[step].click();
	}

	//to mute only who is unmuted
	for (i = 0; i < document.getElementsByClassName("ant-btn ant-btn-sm ant-btn-block").length; i++)
	{
		if (document.getElementsByClassName("ant-btn ant-btn-sm ant-btn-block")[i].textContent.includes("Mute"))
		{
			b = document.getElementsByClassName("ant-btn ant-btn-sm ant-btn-block")[i].innerText;
			c = b.substring(5, b.length);
			
			if (personName.includes(c))
			{
				document.getElementsByClassName("ant-btn ant-btn-sm ant-btn-block")[i].click();
			}
		}
	}	
}











//Mute people
function MutePeople() 
{
    // Click Setting button for each person
	for (step = 0; step < document.getElementsByClassName("ant-btn setting no-border ant-dropdown-trigger ant-btn-primary ant-btn-circle").length; step++)
	{
		document.getElementsByClassName("ant-btn setting no-border ant-dropdown-trigger ant-btn-primary ant-btn-circle")[step].click();
		document.getElementsByClassName("ant-btn setting no-border ant-dropdown-trigger ant-btn-primary ant-btn-circle")[step].click();
	}

	var mutePicArr = document.getElementsByClassName("ant-btn mic no-border ant-btn-primary ant-btn-circle");

	//to mute only who is unmuted
	for (i = 0; i < document.getElementsByClassName("ant-btn ant-btn-sm ant-btn-block").length; i++)
	{
		if (document.getElementsByClassName("ant-btn ant-btn-sm ant-btn-block")[i].textContent.includes("Mute"))
		{
			b = document.getElementsByClassName("ant-btn ant-btn-sm ant-btn-block")[i].innerText;
			c = b.substring(5, b.lenght);
			
			var toMute = true;
			
			for (j = 0; j < mutePicArr.length; j++)
			{
				if (mutePicArr[j].parentElement.innerText.includes(c))
				{
					toMute = false;
				}				
			}	
			
			if (toMute)
			{
				document.getElementsByClassName("ant-btn ant-btn-sm ant-btn-block")[i].click();
			}
		}
	}	
}




//mute who is unmuted
var targetMic = document.querySelector('div.sc-cvbbAY.iDciIF');
var configMic = { attributes: true, childList: true, subtree: true };
var callbackMic = function(mutationsList, observerMic) 
{
	for(let mutation of mutationsList) 
	{
		if (mutation.addedNodes.length)
		{
			if(mutation.addedNodes[0].classList.contains('meter'))
			{	
				if (roomType == 2)
				{
					MutePeople();
				}
			}
		}
	}
};
var observerMic = new MutationObserver(callbackMic);
observerMic.observe(targetMic, configMic);

//observerMic.disconnect();











//catch the message event
var roomType = 1;  //1-speaking, 2-movie

var superMode = 0; 

var movieName = '';

var targetNode = document.querySelector(".sc-kgoBCf.ftdFup");

var config = { attributes: false, childList: true, subtree: true };

var callback = function(mutationsList, observer) 
{
	for(let mutation of mutationsList) 
	{
		if (mutation.addedNodes.length > 0)
		{
			console.log(mutation.addedNodes);
			if( mutation.addedNodes[0] && mutation.addedNodes[0].innerText && (mutation.addedNodes[0].classList.value == 'message null null' || mutation.addedNodes[0].classList.value == 'system'))
			{
				if (mutation.addedNodes[0].innerText.includes("joined group chat"))
				{					
					var pressEnter = new KeyboardEvent("keypress", {bubbles: true, cancelable: true, keyCode: 13});
					
					var element = document.querySelector('textarea');
					element.focus();
					
					var textToSend = mutation.addedNodes[0].innerText.split('joined')[0].trim().split(' ')[0].trim();    //.match(/([\w\s]+)\sjoined/)[1].split(' ')[0];
					if (roomType == 1)
					{
						textToSend = "Hi " + textToSend + ", " + greetings[Math.floor(Math.random()*greetings.length)] + "\n";
					}
					else
					{
						textToSend = "Hi " + textToSend + ", we are watching a movie " + movieName + " , please remain silent.";
					}						
					
					
					document.execCommand('insertText',false,textToSend);
					setTimeout( () => 
					{ 	
						element.dispatchEvent(pressEnter); 
					}, 10000 );
				}	
				
				if (mutation.addedNodes[0].innerText.includes("left awdawdadadadadagroup chat"))
				{					
					var pressEnter = new KeyboardEvent("keypress", {bubbles: true, cancelable: true, keyCode: 13});
					
					var element = document.querySelector('textarea');
					element.focus();
					
					var textToSend = mutation.addedNodes[0].innerText.match(/([\w\s]+)\sleft/)[1].split(' ')[0];
					textToSend = textToSend + ", byeeee, join us next time.";
					
					document.execCommand('insertText',false,textToSend);
					setTimeout( () => 
					{ 	
						element.dispatchEvent(pressEnter); 
					}, 50 );
				}	
			}
			else if (mutation.addedNodes[0] && mutation.addedNodes[0].innerText && mutation.addedNodes[0].classList.value == 'message shift-mode null') //message shift-mode null
			{	
				var lowerText = mutation.addedNodes[0].innerText.toLowerCase();
				
				if (lowerText.includes("kick("))
				{					
					var pressEnter = new KeyboardEvent("keypress", {bubbles: true, cancelable: true, keyCode: 13});
					
					var element = document.querySelector('textarea');
					element.focus();
					
					var textToSend = ''; //mutation.addedNodes[0].innerText.match(/([\w\s]+)\sjoined/)[1].split(' ')[0];
					textToSend = textToSend + "Dont' tell me what to do.";
					
					document.execCommand('insertText', false, textToSend);
					setTimeout( () => 
					{ 	
						element.dispatchEvent(pressEnter); 
					}, 3000 );
				}
				
				if (superMode && lowerText.includes("mute("))
				{					
					var pressEnter = new KeyboardEvent("keypress", {bubbles: true, cancelable: true, keyCode: 13});
					
					var element = document.querySelector('textarea');
					element.focus();
					
					var textToSend = mutation.addedNodes[0].innerText.match( /\((.*?)\)/ )[1];
					
					MutePerson(textToSend); 
				}					
			}
		}		
	}
};

var observer = new MutationObserver(callback);

observer.observe(targetNode, config);


// For pausing the observer
//observer.disconnect();