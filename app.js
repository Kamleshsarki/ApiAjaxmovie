// The below code fills in the first row of the table
const getMovie = title => {
       
    fetch(`http://www.omdbapi.com/?t=${title}&apikey=trilogy`)
    .then(r=>r.json())
    .then(movie =>{
     let trElem = document.createElement('tr')
     trElem.id = movie.imdbID
     trElem.innerHTML = `
     <td>${movie.Title}</td>
     <td>${movie.Year}</td>
     <td>${movie.Actors}</td>
     <td>${movie.Rated}</td>
     <td><button data-movie = "${movie.imdbID}" class = "btn btn-danger delBtn">Delete</button></td>
     `
     document.getElementById('movieTable').append(trElem)
    })
    .catch(e=>console.log(e))
     // Write a fetch request to the OMDB API asking for a movie that matches the title provided by the user
    // Once you have the response, create a table row with the id of the movie id returned in the response.
       // Inside the table row, create table data cells for each header in the above HTML code, making sure the information is in the correct order. Also include a delete button with a data-movie property, which you should give the same value as the table row's id. This will make it easier to make the delete button functional once the code is written.
       // Finally, append the new table row to the table body
   }

   document.querySelector('.submitMovie').addEventListener('click', e => {
     // Write a click event listener that grabs the title of the movie typed in by the user and passes it to the getMovie function written above.
     e.preventDefault()
     getMovie(document.getElementById('movieTitle').value)
     document.getElementById('movieTitle').value=''
     // prevent the form from automatically refreshing the page
       // grab the text input's value and pass it to getMovie
       // set the value of the input to empty so there is no text in there after the button has been clicked
   })
   document.addEventListener('click', event =>{
     if(event.target.className==='btn btn-danger delBtn')
     {
     document.getElementById(event.target.dataset.movie).remove()
     }
   })
   // Write a click event listener for the delete button to remove the table row from the page
     // remember that the delete buttons were dynamically added, so you cannot grab the id or classes of the buttons themselves, you must grab the document
     // check to see if the element clicked has a class called deleteBtn
       // if it does, then remove the table row with an id that matches this delete button's data-movie
