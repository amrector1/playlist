var request = new XMLHttpRequest();

request.onreadystatechange = function(){
  if (request.readyState === 4 && request.status < 400){
    var object = JSON.parse(request.responseText);
    console.log(object);
    var array = object.results
      for (var i = 0; i < 3; i++) {
        /*var randomNum = array[Math.floor(Math.random()*array.length)];*/

        var image = document.createElement('img');
        image.src = "images/" + array[Math.floor(Math.random()*array.length)].cover_art;
        var body = document.getElementById('body-main');
        body.appendChild(image);
        image.style.height = "250px"
        image.style.width = "250px"
    }
  }
}
request.open("GET", "https://lit-fortress-6467.herokuapp.com/object");
request.send();
