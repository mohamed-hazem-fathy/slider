
var sliderimages = Array.from(document.querySelectorAll('.slider-container img'));
console.table(sliderimages);
// get number of slide
var slidesCount = sliderimages.length;
//frist slide
var currentSlide = 1;
//slidenumber strang#
var slideNumberElement = document.getElementById('slider-number');
//Previous and Next Byttons
var nextButton = document.getElementById('next');
var PrevButton = document.getElementById('prev');
//Handel Click on previous and Next Buttons

nextButton.onclick = nextSlide;
PrevButton.onclick = prevSlide;
//Create THE Main UL Element
var PaginationElement = document.createElement('ul');


//set id on created Ui Element
PaginationElement.setAttribute('id','Pagination-ul');

//Create List Items Based On Slides Count
for (var i = 1; i<=slidesCount; i++) {
    //Creat The Li
    var PaginationItem = document.createElement('li');

    //set Custom Attribute
PaginationItem.setAttribute('data-index', i );
    //Set Items content
    PaginationItem.appendChild(document.createTextNode(i));

    //Append Items to The Main Ul List
    PaginationElement.appendChild(PaginationItem);



}

//add The Created ul Element to The page 
document.getElementById('indicators').appendChild(PaginationElement);

//GET The New Created Ul 
var PaginationCreatedUl = document.getElementById('Pagination-ul');

//Get pagination Items | Array ,form [Es6 Feature]
var paginationBullets = Array.from(document.querySelectorAll('#Pagination-ul li'));

//Loop Throuugh All Bullets Items
for (var i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute('data-index'));
    theChecker();
    }
    
}


//Trigger The Checker Function

theChecker();





//Next Slide Function
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {

        //Do not thing
        return false;
    } else{

        currentSlide++;

        theChecker();
    }
}
//Previous Slide Function
function prevSlide() {
    if (PrevButton.classList.contains('disabled')) {

        //Do not thing
        return false;
    } else{

        currentSlide--;

        theChecker();
    }
};


//Create The Checker Function
function theChecker() {
    //Set The slide Nember
    slideNumberElement.textContent = 'slide #' + (currentSlide) + ' of ' + (slidesCount); 

    //Remove all active
    RemoveAllActive();

    //Set Active Class On Current Slide
    sliderimages[currentSlide - 1].classList.add('active');

    //Set Active Class On Current Pagination Item 
    PaginationCreatedUl.children[currentSlide - 1 ].classList.add('active');
    


    //Check if Current Slide is the frist
    if (currentSlide == 1) {

    //aAdd Disabled Class On Previous Button    
    PrevButton.classList.add('disabled');

    }

    else {
    //Remove Desabled Class From Previous Button
    PrevButton.classList.remove('disabled');

    }

    //Check if Current Slide is the Last
    if (currentSlide == slidesCount) {

        //aAdd Disabled Class On next Button    
        nextButton.classList.add('disabled');
    
        }
    
        else {
        //Remove Desabled Class From next Button
        nextButton.classList.remove('disabled');
    
        }

    


}




//Remove All Active Classes From Images And Pagnation Bulletas
function RemoveAllActive(){


    //Loop through Images
        sliderimages.forEach(function (img) {
        img.classList.remove('active');
    });

    //Loop throurh paw 211111111111111111111111111111111111gination Bullets
        paginationBullets.forEach(function (bullet) {
        bullet.classList.remove('active');

    });
}
console.log(document.body)


