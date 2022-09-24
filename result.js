
function show_image(src) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 300;
    img.height = 500;
    img.alt = "asd";
  
    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
  }
  
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString)
  
  const delimeter = "-XQ-"
  
  let str = "Ancient Future" + delimeter
  params.forEach((value, key) => {
    str += value + delimeter
  });
  
  str = str.slice(0, -4).replace(" ", "%20")
  
  const loadImage = src =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    })
    ;
  
  url = `http://5112-34-82-58-227.ngrok.io/?prompt=${str}`
  loadImage(url).
    then(image => show_image(url));
  
  
  
  
  