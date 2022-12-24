class CardObject {

    constructor(x, y ,root_selector ) {
      this.x = x;
      this.y = y;
      this.content = null;
      this.root = document.querySelector(root_selector);
      let card_selector = this.createElement();
      this.card_selector = card_selector ;
      console.log("card created "+ card_selector);
    }
  
    //=================================================

    createElement(){
        // Create the div elements
        const card = document.createElement('div');
        const title = document.createElement('div');
        const content = document.createElement('div');

        // Set the class names of the div elements
        card.className = 'card';
        title.className = 'card-title';
        content.className = 'card-content';


        // Generate a random number
        const random = Math.floor(Math.random() * 1000000); // Generate a random number between 0 and 10000
        // Set the id of the card object
        card.id = 'cardObject-' + random ;

        let card_selector = "#" + card.id; 

        // Set the content of the title and content div elements
        title.innerHTML = 'Title 123A';
        content.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        
 
        
        // Append the title and content div elements to the card div element
        card.appendChild(title);
        card.appendChild(content);

        // Set the style of the card div element
        card.style.left = '50px';
        card.style.top = '50px';

        // Append the card div element to the DOM
        this.root.appendChild(card);

        
        
        return card_selector; 
    }
    //=================================================

    setPosition(x, y) {
      this.x = x;
      this.y = y;
    }
  
    getPosition() {
      return {
        x: this.x,
        y: this.y,
      };
    }

    //===============================
      // Other methods...

  onMouseMove(e) {
    if (this.isDragging) {
      // Calculate the new position of the card
      this.x += e.clientX - this.mouseX;
      this.y += e.clientY - this.mouseY;

      // Update the position of the card
      this.card.style.left = this.x + 'px';
      this.card.style.top = this.y + 'px';

      // Update the mouse position
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    }
  }

  onMouseUp(e) {
    // Set the flag to false
    this.isDragging = false;
  }

  onMouseDown(e) {
    // alert("DOWN")
    // Set the flag to true
    this.isDragging = true;

    // Save the mouse position
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    // Save the title position
    this.titleX = this.title.offsetLeft;
    this.titleY = this.title.offsetTop;
  }

  setCardContent(title, htmlcontent) {
    console.log("setCardContent")
    console.log(title)
    console.log(htmlcontent)
    this.title.innerHTML = title;

  

    this.content.innerHTML = htmlcontent;


    // this.content.innerHTML = htmlcontent + "<br> hight = " + this.content.offsetHeight ;

    this.card.style.offsetHeight = parseInt(this.content.offsetHeight) + 50;
                                    // + this.title.offsetHeight  ;  

    console.log( " content >> hi = " + this.content.offsetHeight);
    this.card.style.height  = (this.content.offsetHeight  + this.title.offsetHeight ) + "px" ; 
    
    this.card.style.backgroundColor  = "yellow"; 
    console.log("setCardContent  OK ")
  }

  appendCardContent(htmlContent){
    let title =   this.title.innerHTML  ; 
    this.setCardContent(title,this.content.innerHTML  + htmlContent );
  }
  appendCardContentNL(htmlContent){
    let title =   this.title.innerHTML  ; 
    this.setCardContent(title,this.content.innerHTML  + htmlContent + "<br>\n" );
  }  
// ==================================
}
// ==================================

function register(){ 
    console.log("OK1 Register");
    // console.log("OK111");

    const cardObject = new CardObject(50, 50 , "#container");
    
    // Get the card and title elements
    const card = document.querySelector(cardObject.card_selector);
    const title = document.querySelector( cardObject.card_selector  + ' > div.card-title');
    const content = document.querySelector(cardObject.card_selector  + ' > div.card-content');
    
    // Create a new CardObject instance

    
    // Set the card and title elements
    cardObject.card = card;
    cardObject.title = title;
    cardObject.content = content;
    
    // Add event listeners for mouse events
    title.addEventListener('mousedown', cardObject.onMouseDown.bind(cardObject));
    document.addEventListener('mousemove', cardObject.onMouseMove.bind(cardObject));
    document.addEventListener('mouseup', cardObject.onMouseUp.bind(cardObject));
    
    cardObject.setCardContent("title-new <br>(" + cardObject.card_selector + ")" , "This is OK  <br> test 1234445fs <br>stest assssss<br>sssssss<br>sssssss<br>sssssssssssss" );
    
    cardObject.appendCardContentNL("")
    cardObject.appendCardContentNL("AAA")
    cardObject.appendCardContent("BBB")
    cardObject.appendCardContent(" CCC ")
    for(let i = 0 ; i < 10 ; i++){
        cardObject.appendCardContentNL(" Add Row  " + i )
    }
    
    console.log("OK2 Register Finished");
}
register();

// ==================================
  
  export default CardObject;
  