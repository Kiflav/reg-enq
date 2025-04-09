function updateStars(rating) {
	let htmlCollection = document.getElementsByClassName("tp-container");
	countContainers = htmlCollection.length;
	
	for (var i=0; i < countContainers; i++){
		var counter = i + 1;
		const stars = htmlCollection[i].querySelectorAll('.star rect');
				
		stars.forEach((star, index) => {
			
			const starIndex = index + 1;

			// Determine color based on the rating
			let grey = 		  "#DCDCE6";
			let red =  		  "#FF3722";
			let orange = 	  "#FF8622";
			let yellow = 	  "#FFCE00";
			let lightGreen =  "#73CF11";
			let darkGreen =   "#00B67A";

			let color = 	  grey; // Default value = grey

			if (rating <= 0) 		{color = grey}
			else if (rating <= 1.7) {color = red}
			else if (rating <= 2.7) {color = orange}
			else if (rating <= 3.7) {color = yellow}
			else if (rating <= 4.2) {color = lightGreen}
			else if (rating <= 5)   {color = darkGreen}

			// Apply full color or gradient based on the fractional value
			if (rating >= starIndex) {
				// Fully fill the star
				star.setAttribute('fill', color);
			} 
			else if (rating > starIndex - 1 && rating < starIndex) {
				// Partially fill the star (half)
				if(counter == 1){
					const gradient = document.querySelector('#halfGradient');
					gradient.children[0].setAttribute('stop-color', color); // Set the first half color
					star.setAttribute('fill', 'url(#halfGradient)');
				}
				else if (counter == 2){
					const gradientTwo = document.querySelector('#halfGradientTwo');
					gradientTwo.children[0].setAttribute('stop-color', color); // Set the first half color
					star.setAttribute('fill', 'url(#halfGradientTwo)');
				}
			} 
			else {
				// Default grey for unfilled stars
				star.setAttribute('fill', grey);
			}
		});		
				  
	};
};