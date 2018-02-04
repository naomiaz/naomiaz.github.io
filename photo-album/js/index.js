var myPicturesArray = [
  {
    albumId: 1,
    id: 1,
    title: "Beach",
    url:
      "https://www.mustdo.com/wp-content/uploads/2016/12/Longboat-Key-Beaches-Sarasota-Florida.jpg",
    thumbnailUrl:
      "https://blog1.fkimg.com/wp-content/uploads/2017/08/Best-Beach-Vacations-USA-Featured-Traverse-City-150x150.jpg"
  },
  {
    albumId: 1,
    id: 2,
    title: "Beach",
    url: "https://www.mustdo.com/wp-content/uploads/2016/12/Turner-Beach.jpg",
    thumbnailUrl:
      "http://www.solarishotelsresort.com/wp-content/uploads/2013/10/1004-solaris-beach-resort-solaris-spa-beach1-150x150.jpg"
  },
  {
    albumId: 2,
    id: 51,
    title: "Eiffel Tower - Paris",
    url: "http://placehold.it/600/8e973b",
    thumbnailUrl:
      "https://s-ec.bstatic.com/data/landmark/square150/150/1501.jpg"
  },
  {
    albumId: 2,
    id: 52,
    title: "Sagrada Familia - Barcelona",
    url:
      "http://c10.nrostatic.com/sites/default/files/uploaded/sagrada-familia-cathedral-barcelona-catholic-architecture-r.jpg",
    thumbnailUrl:
      "http://travelhdwallpapers.com/wp-content/uploads/2014/04/Sagrada-Fam%C3%ADlia-1-150x150.jpg"
  },
  {
    albumId: 3,
    id: 127,
    title: "Carrot Cake",
    url:
      "https://lh3.googleusercontent.com/RwUkMoudDccfU_TlNIZEu-vNUTPxpdy7Gerh1wkJPU2X8123a_rJfV23LnUaNmM2QYiHujBkmP-3xWWh4yNSyN8I3wALLTYFVblNUw=w600",
    thumbnailUrl:
      "https://s-media-cache-ak0.pinimg.com/150x150/0e/b7/c4/0eb7c49a7215c6c199aa5e3bd79c853b.jpg"
  },
  {
    albumId: 3,
    id: 128,
    title: "Macarons",
    url:
      "https://www.eatlivetravelwrite.com/wp-content/uploads/2014/05/photo-4-21.jpg",
    thumbnailUrl:
      "https://s-media-cache-ak0.pinimg.com/150x150/e7/f1/a4/e7f1a49b010e1fb830a7a718308a4922.jpg"
  }
];

// Display thumbnails in #imageContainer
myPicturesArray.forEach(function(currentImage) {
  var image = document.createElement("img");
  var imageContainer = document.querySelector("#imageContainer");
  var imageResizedContainer = document.querySelector("#imageResizedContainer");
  //Give thumbnails correct source and alt
  image.src = currentImage.thumbnailUrl;
  image.alt = currentImage.title;
  //Append thumbnail to #imageContainer and hide black photo background
  imageContainer.appendChild(image);
  imageResizedContainer.classList.add("hidden-overlay");

  //Click on a thumbnail to enlarge image, imageTitle and black background in #imageResize dContainer
  image.addEventListener("click", function() {
    var enlargedImage = document.createElement("img");
    var imageTitle = document.createElement("div");
    //Add correct source and alt to enlarged image
    enlargedImage.src = currentImage.url;
    enlargedImage.alt = currentImage.title;
    //Add image title to imageTitle div
    imageTitle.innerHTML = currentImage.title;
    //Append enlarged image to #imageResizedContainer, add black background and imageTitle
    imageResizedContainer.appendChild(enlargedImage);
    imageResizedContainer.appendChild(imageTitle);
    imageResizedContainer.classList.remove("hidden-overlay");

    //Click again to minize enlarged image, imageTitle and black background in #imageResizedContainer
    enlargedImage.addEventListener("click", function() {
      imageResizedContainer.removeChild(enlargedImage);
      imageResizedContainer.removeChild(imageTitle);
      imageResizedContainer.classList.add("hidden-overlay");
    });
  });
});