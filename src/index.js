document.addEventListener('DOMContentLoaded', init);
// invoking the function that LOADS AFTER THE DOM / two in one

const init = () => {
    // create a function that runs after the DOM has loaded
    
    const inputForm = document.querySelector('form')
    // grabbing the section we want to add our form to
    
    inputForm.addEventListener('submit', (event) => {
    // adding a fucntion that listens for the submit button to
    // be clicked
    
      event.preventDefault();
    // invoking a function at event that prevents the page from
    // refreshing automatically
    
      const input = document.querySelector('input#searchByID');
    // grabbing the section of the form that the user will
    // input their info. The info will be the id value of 
    // the movies object
    
      fetch(`http://localhost:3000/movies/${input.value}`)
    // fetching specific info from the server with the ability to
    // take the input from the user
      .then(response => response.json())
    // getting a response from the server by turning the JSON info
    // into a Javascript object
      .then(data => {
    // function to send the new object to the places we need the data
    // to go
        const title = document.querySelector('section#movieDetails h4');
    // grabbing the area we want movie title to go
        const summary = document.querySelector('section#movieDetails p');
    // grabbing the area we want summary to go
        title.innerText = data.title;
    // adding the movie title text to the newely created title
        summary.innerText = data.summary;
    // adding the movie details to the newely created summary
      });
    });
  }