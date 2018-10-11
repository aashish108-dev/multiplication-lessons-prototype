// source goes here
var app = {
  // this is the entry point for your app.
  init: function() {
    console.log("hello from app!");
    this.generateNumbers();
    this.assignClickHandlers();
	},
	generateNumbers: function(){
		var numbers = document.getElementById("numbers");
		var frag = document.createDocumentFragment();
		var i=0;
		for (i = 0; i < 144; i++) { 
			var element = document.createElement("button");
			element.innerHTML = i+1;
			element.setAttribute('class', 'number');
			element.setAttribute('data-number', i+1);
			frag.appendChild(element);
		}
		numbers.appendChild(frag);
	},
	assignClickHandlers: function(){
		var numberElements = document.querySelectorAll('.number');
		// console.log(numberElements[0]);
		for (var i = 0; i < numberElements.length; ++i) {
			numberElements[i].addEventListener('click', app.buttonClicked)
		}
	},
	buttonClicked: function(){
		var className='numberClicked';
		var areWeSelecting=true;
		if (this.classList){
			console.log('in this.classList');
			// Test to see if it contains a class
			if (this.classList.contains(className)){
				//True
				console.log('Contains class');
				this.classList.remove(className);
				areWeSelecting = false;
			}
			else{
				// Add the class to show it has been clicked
				this.classList.add(className);
				areWeSelecting = true;
			}
		}
		else{
			// Test to see if it contains a class
			if(new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)){
				console.log('Contains class regex');
				areWeSelecting = false;
			}
			else{
				areWeSelecting = true;
			}
		}
		var numberValue = parseInt(this.dataset.number, 10);
		app.multiples(numberValue, this, areWeSelecting);

	},
	multiples: function(number, currentlyClickedElement, areWeSelecting){
		console.log(`Number value of clicked element is ${number}`);
		var numberAsString	= String(number);
		var nextMultipliedNumber = number;
		document.querySelectorAll(`[data-foo='${numberAsString}']`);
		var x = 1;
		while (nextMultipliedNumber <= 144){
			// console.log(nextMultipliedNumber);
			// Calculate the next number;
			nextMultipliedNumber = number * x;
			var nextMultipliedNumberAsString = String(nextMultipliedNumber);
			if (nextMultipliedNumberAsString <= 144){
				// Find the next number
				var el = document.querySelectorAll("[data-number='"+nextMultipliedNumberAsString+"']")[0];
				var className = 'highlightNumber';
				if (areWeSelecting){
					// Highlight the next number
					if (el.classList){
						el.classList.add(className);
					}
					else{
						el.className += ' ' + className;
					}
				}
				// We are deselecting
				else{
					if (el.classList){
						el.classList.remove(className);
					}
					else{
						el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
					}
				}
			}
			x++;
		}

		for (var i = number; i < 144; ++i) {
			var numberAsString	= String(number);
			document.querySelectorAll(`[data-foo='${numberAsString}']`);
		}

	},
};

app.init();
