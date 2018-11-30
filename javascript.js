var animals = ["cat", "fish", "shark", "panda", "whale", "tiger", "dragon"];

function displayAnimals(){   
    
    var animal = $(this).attr("data-name");
     console.log(".animal");
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=AZuzub4KixtMNWh3XjS5yonltXGp9giD";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      
      .then(function(response) {
        console.log(queryURL);
        console.log(response);
       
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

          var animalDiv = $("<div>");
          var p = $("<p>").text("Rating: " + results[i].rating);
          var animalImage = $("<img>");
          
          animalImage.attr("src", results[i].images.fixed_height.url);
          animalDiv.append(p);
          animalDiv.append(animalImage);

         
          $("#gifs-appear-here").prepend(animalDiv);
        }
      });
  };
$(".gif").on("click", function() {
    
  var state = $(this).attr('data-state');
  console.log($(this).attr('data-state'));

     if (state === 'still') {
       $(this).attr("src", $(this).attr('data-animate'));
       $(this).attr('animate');
     }
  
    else if (state === 'animate'){
      $(this).attr("src", $(this).attr('data-still'));
      $(this).attr('data-state', 'still');
    }
})

function renderButtons() {

   $("#buttons-view").empty();

for (var i = 0; i < animals.length; i++) {
      var a = $("<button>");

      a.addClass("animal");
      a.attr("data-name", animals[i]);
      a.text(animals[i]);

      $("#buttons-view").append(a);
    }
  }

  
  $("#add-animal").on("click", function(event) {
    event.preventDefault();
    var newAnimal = $("#animal-input").val().trim();
    animals.push(newAnimal);
    renderButtons();

  });

  $(document).on("click", ".animal", displayAnimals);
  renderButtons();