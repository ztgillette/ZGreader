// document
//   .querySelectorAll('style,link[rel="stylesheet"]')
//   .forEach(item => item.remove())


const text = document.querySelectorAll('p');

text.forEach((p) => {

    console.log(typeof p);

    //gets string value of text in a paragraph
    let mystr = p.innerText;

    //create array of individual words
    var strArr = mystr.split(" ");

    //loop through words and split them in half
    var halvedArr = [];
    for(let i=0;i<strArr.length; i++) {
        
        let word = strArr[i];
        let wordlength = word.length;
        let midindex = Math.ceil(wordlength/3);

        let half1 = word.substring(0, midindex);
        let half2 = word.substring(midindex);

        halvedArr.push(half1);
        halvedArr.push(half2);

    }

    //loop through and apply changes to the p
    p.innerHTML = "";
    for(let i=0; i<halvedArr.length; i+=2) {

        p.innerHTML += "<span class=\"qweasdzxc\">" + halvedArr[i] + "</span>" + halvedArr[i+1] + " ";

    }
    
    p.style.backgroundColor = "#eee";

    //p.style.fontFamily = "Open Sans,sans-serif";

  });


const text1 = document.querySelectorAll('h1');

text1.forEach((p) => {

    console.log(typeof p);

    //gets string value of text in a paragraph
    let mystr = p.innerText;

    //create array of individual words
    var strArr = mystr.split(" ");

    //loop through words and split them in half
    var halvedArr = [];
    for(let i=0;i<strArr.length; i++) {
        
        let word = strArr[i];
        let wordlength = word.length;
        let midindex = Math.ceil(wordlength/3);

        let half1 = word.substring(0, midindex);
        let half2 = word.substring(midindex);

        halvedArr.push(half1);
        halvedArr.push(half2);

    }

    //loop through and apply changes to the p
    p.innerHTML = "";
    for(let i=0; i<halvedArr.length; i+=2) {

        p.innerHTML += "<span class=\"qweasdzxc\">" + halvedArr[i] + "</span>" + halvedArr[i+1] + " ";

    }
    
    p.style.backgroundColor = "#eee";

    //p.style.fontFamily = "Open Sans,sans-serif";

  });

  const text2 = document.querySelectorAll('h2');

  text2.forEach((p) => {
  
      console.log(typeof p);
  
      //gets string value of text in a paragraph
      let mystr = p.innerText;
  
      //create array of individual words
      var strArr = mystr.split(" ");
  
      //loop through words and split them in half
      var halvedArr = [];
      for(let i=0;i<strArr.length; i++) {
          
          let word = strArr[i];
          let wordlength = word.length;
          let midindex = Math.ceil(wordlength/3);
  
          let half1 = word.substring(0, midindex);
          let half2 = word.substring(midindex);
  
          halvedArr.push(half1);
          halvedArr.push(half2);
  
      }
  
      //loop through and apply changes to the p
      p.innerHTML = "";
      for(let i=0; i<halvedArr.length; i+=2) {
  
          p.innerHTML += "<span class=\"qweasdzxc\">" + halvedArr[i] + "</span>" + halvedArr[i+1] + " ";
  
      }
      
      p.style.backgroundColor = "#eee";
  
      //p.style.fontFamily = "Open Sans,sans-serif";
  
    });

const text3 = document.querySelectorAll('h3');

text3.forEach((p) => {

    console.log(typeof p);

    //gets string value of text in a paragraph
    let mystr = p.innerText;

    //create array of individual words
    var strArr = mystr.split(" ");

    //loop through words and split them in half
    var halvedArr = [];
    for(let i=0;i<strArr.length; i++) {
        
        let word = strArr[i];
        let wordlength = word.length;
        let midindex = Math.ceil(wordlength/3);

        let half1 = word.substring(0, midindex);
        let half2 = word.substring(midindex);

        halvedArr.push(half1);
        halvedArr.push(half2);

    }

    //loop through and apply changes to the p
    p.innerHTML = "";
    for(let i=0; i<halvedArr.length; i+=2) {

        p.innerHTML += "<span class=\"qweasdzxc\">" + halvedArr[i] + "</span>" + halvedArr[i+1] + " ";

    }
    
    p.style.backgroundColor = "#eee";

    //p.style.fontFamily = "Open Sans,sans-serif";

  });