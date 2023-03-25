"strict"

// Finding search bar in the HTMLfile
const todoForm = document.querySelector(".search");

// Finding the search input in HTML file
const todoInput = document.querySelector(".search input[type='text']");

// Starts searching as clicked on the button or by pressing enter
todoForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    // Taking input from the user
    const newTodoText = todoInput.value;

    // Calling the api and searching for the input images
    const api_url = `https://api.unsplash.com/search/photos?page=1&query=${newTodoText}&client_id=fAnASDSyGzISdL-_FxiiVtVQ-JxxjPfQTA-59j81oZc`;

    // Defining async function
    async function getapi(url) {
    
    	// Storing response
    	const response = await fetch(url);
    
    	// Storing data in form of JSON
    	var data = await response.json();
    	console.log(data);
    	if (response) {
    		hideloader();
    	}
    	show(data);
    }
    // Calling that async function
    getapi(api_url);

    // Function to hide the loader
    function hideloader() {
    	document.getElementById('loading').style.display = 'none';
    }
    // Function to define innerHTML for HTML img
    function show(data) {
    	let newImg = ``;

        // Running loop on the data we are getting from the api server
    	for (let r of data.results) {

            // Adding img tag and adding lightbox css with reference to the achor tag to newImg
    		newImg += `<a href=${r.urls.regular} data-lightbox="search" data-title=${r.alt_description}> 
            <img src=${r.urls.regular}>
            </a>`;
    	}
    	// Setting innerHTML as newImg variable
    	document.getElementById("gallery").innerHTML = newImg;
    }
});