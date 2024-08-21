
  export const parseImageCarousel = (game) => {
    const parser = new DOMParser();
    // find id mySlides
    const doc = parser.parseFromString(game.content.rendered, "text/html");
    const mySlides = doc.querySelector(".slideshow-container");

    if (!mySlides) return;
    const images = mySlides.querySelectorAll("img");
    if (!images) return;
    const imageArray = [];

    if (images.length > 2) {
      for (let i = 0; i < 2; i++) {
        imageArray.push(images[i].src);
      }
    } else {
      for (let i = 0; i < images.length; i++) {
        imageArray.push(images[i].src);
      }
    }

    return imageArray;
  };

  export const isGameCracked = (game) => {
    const parser = new DOMParser();
    // if span contain the word Not Cracked! ignore it
    const doc = parser.parseFromString(game.content.rendered, "text/html");
    // get all span
    const span = doc.querySelectorAll("span");
    if (!span) return;
    for (let i = 0; i < span.length; i++) {
      if (span[i].outerText === "Not Cracked!") {
        return true;
      }
    }
    return false;
  };

