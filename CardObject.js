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

    this.card.style.left = this.x +  "px";
    this.card.style.top =  this.y  + "px";

  

    this.content.innerHTML = htmlcontent;


    // this.content.innerHTML = htmlcontent + "<br> hight = " + this.content.offsetHeight ;

    this.card.style.offsetHeight = parseInt(this.content.offsetHeight) + 50;
                                    // + this.title.offsetHeight  ;  

    console.log( " content >> hi = " + this.content.offsetHeight);
    this.card.style.height  = (this.content.offsetHeight  + this.title.offsetHeight ) + "px" ; 
    this.card.style.width  = (this.title.offsetWidth  ) + "px" ; 
    
    this.card.style.backgroundColor  = "yellow"; 
    console.log("setCardContent  OK ")
  }

  setWidth(width){
    this.card.style.width = width + "px";
  }
  
  setContentBgColor(bgcolor){
    this.card.style.backgroundColor  = bgcolor; 
    console.log("setContentBgColor  OK ")
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
 

  register() {

    // Get the card and title elements
    const card = document.querySelector(this.card_selector);
    const title = document.querySelector(this.card_selector + ' > div.card-title');
    const content = document.querySelector(this.card_selector + ' > div.card-content');

    // Create a new this instance

    // Set the card and title elements
    this.card = card;
    this.title = title;
    this.content = content;

    // Add event listeners for mouse events
    title.addEventListener('mousedown', this.onMouseDown.bind(this));
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));

    this.setCardContent(
      'title-new <br>(' + this.card_selector + ')',
      'This is OK  <br> by thitipong  js ES6 <br>  test 1234445fs <br>stest assssss<br>sssssss<br>sssssss<br>sssssssssssss',
    );

    // this.appendCardContentNL('');
    // this.appendCardContentNL('AAA');
    // this.appendCardContent('BBB');
    // this.appendCardContent(' CCC ');
    // for (let i = 0; i < 10; i++) {
    //   this.appendCardContentNL(' Add Row  ' + i);
    // }

    console.log('OK2 Register Finished');
  }
 

// ==================================
}
// ==================================
// END Class  
// ==================================

console.log('OK1 Register');
// console.log("OK111");

const cardObject = new CardObject(50, 50, '#container');

cardObject.register();
cardObject.appendCardContentNL('');
cardObject.appendCardContentNL('AAA');
cardObject.appendCardContent('BBB');
cardObject.appendCardContent(' CCC ');
cardObject.appendCardContent('<ul>');
for (let i = 0; i <  4; i++) {
  cardObject.appendCardContentNL(' <li> ' + i + "  data row</li>");
}
cardObject.appendCardContent('</ul>');
cardObject.setContentBgColor("lightyellow");


for( let i = 0 ; i < 10 ; i ++ ){ 
  
  const x   = Math.floor(Math.random() * 800); 
  const y   = Math.floor(Math.random() * 600); 
  const cardObject2 = new CardObject(x , y, '#container');
  cardObject2.register();  
}

const cardObject2 = new CardObject(200 , 250, '#container');
cardObject2.register();  
cardObject2.appendCardContentNL("");
let url= "<a href='https://github.com/tps2015gh/taskcardjs'>https://github.com/tps2015gh/taskcardjs</a>";
cardObject2.appendCardContentNL( url ) ;
cardObject2.appendCardContentNL("");
cardObject2.setWidth(300);
cardObject2.setContentBgColor("lightgreen");

// ==================================
  
  export default CardObject;
  