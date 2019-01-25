

var addToMemeDiv = document.querySelector(".meme-output");

var imageInputURL = document.querySelector('#Image-url');

//function to get the top text from user
var topTextInput = document.querySelector('#meme-top-text');

//function to get the bottom text from user
var bottomTextInput = document.querySelector('#meme-bottom-text');

//function to add new meme to selected ID
var addMemeBtn = document.querySelector("#add-meme-click");

//default Hulk picture
const defaultPic = "./img/Hulk.jpg";
var imageURL = "";
var topText = "";
var bottomText = "";



function createMeme() {

    //create elements to add to meme division
    var memeDiv = document.createElement("div");
    var memeImage = document.createElement("img");
    var memeTop = document.createElement("div");
    var memeBottom= document.createElement("div");
    var deleteButton = document.createElement("button");

    //get the form values (image url, top text, bottom text)
    imageURL = imageInputURL.value;

    //if no URL is provided, use default picture and text of "you forgot to include a URL"""
    if(imageURL === ""){
        imageURL = defaultPic;
        topText = "You forgot to";
        bottomText = "Include a URL!"
    }
    else{
        topText = topTextInput.value;
        bottomText = bottomTextInput.value;
    }
    //add classes to new meme division
    memeDiv.classList.add('col-md-6');
    memeDiv.classList.add('memes');

    memeTop.innerText = topText;
    memeBottom.innerText = bottomText;

    //add attributes to image
    memeImage.src = imageURL;
    // memeImage.width = "508";
    // memeImage.height = "338.66";
   

    //add ID to top and bottom text divisions
    memeTop.id = "text-on-top";
    memeBottom.id = "text-on-bottom";

    //add attributes to class division
    deleteButton.classList.add("icon");
    deleteButton.classList.add("overlay");
    deleteButton.classList.add("delete-button");
    deleteButton.classList.add("fa");
    deleteButton.classList.add("fa-times");


    memeDiv.append(memeImage);
    memeDiv.append(memeTop);
    memeDiv.append(memeBottom);
    memeDiv.append(deleteButton);
    
    addToMemeDiv.append(memeDiv);

    deleteButton.addEventListener('click',function(){
        addToMemeDiv.removeChild(memeDiv);
    });

}

addMemeBtn.addEventListener('click',function(event){
    event.preventDefault();
    createMeme();
    imageInputURL.value = "";
    topTextInput.value = "";
    bottomTextInput.value = "";
});








