var ideasArray = [];
var titleInput = document.querySelector('.form__input--title');
var bodyInput = document.querySelector('.form__input--body');
var saveBtn = document.querySelector('.form__btn');
var searchInput = document.querySelector('.form__input--search');
var cardsMain = document.querySelector('main');
var ideaForm = document.querySelector('form');
var paragraph = document.querySelector('.main__paragraph');
var cardMain = document.querySelector('main');
getCards();
// reDisplayCards();
// form.addEventListener('click', deleteCard);
// window.addEventListener('load' getCards); 
cardMain.addEventListener('click', deleteCard);
titleInput.addEventListener('keyup', enableSaveBtn);
bodyInput.addEventListener('keyup', enableSaveBtn);
saveBtn.addEventListener('click', makeNewIdea);

function getCards() {
  if (JSON.parse(localStorage.getItem('theIdea')) === null) {
  } else {
  var newIdeasArray = JSON.parse(localStorage.getItem('theIdea')).map(function(idea) {
    return new Idea(idea.id, idea.title, idea.body, idea.star, idea.quality);
  });
  ideasArray = newIdeasArray;
}
}
  // generateIdeaCard();

                // *******PHASE ONE*******

// ****VIEWING AND ADDING NEW IDEA****
// 3.On click on save btn
//   3.d idea should be persisted. It should still be present upon reloading the page.


function handleSave() {

}

function enableSaveBtn(e) {
  e.preventDefault;
  if (titleInput.value !== "" && bodyInput.value !== "") {
    saveBtn.disabled = false;
  } else {
    saveBtn.disabled = true;
  }
}

function clearFormInputs() {
  titleInput.value = "";
  bodyInput.value = "";
}

function makeNewIdea(e) {
  e.preventDefault();
 var idea = new Idea(Date.now(), titleInput.value, bodyInput.value, false, 0);
 ideasArray.push(idea);
 idea.saveToStorage(ideasArray); 
 generateIdeaCard(idea);
 clearFormInputs();
}

// function reDisplayCards() {
//   console.log(ideasArray)
//   console.log('what')
//   for (var i = 0; i < ideasArray.length; i++) {
//   // when will this be called to display cards  
//   }
//   generateIdeaCard();
// }


function generateIdeaCard({id, title, body, star, quality}) {
 paragraph.hidden = true;
 cardMain.insertAdjacentHTML ('afterbegin',
 `<article class="main__article--card" data-id=${id}>
  <section class="article__section--header">
    <img src="idea-box-images/star.svg" class="article__star" alt="small star icon"${star}>
    <img src="idea-box-images/delete.svg" class="article__delete" alt="X delete button">
  </section>
<section class="article__section--body">
    <h2 class="article__section--h2" contentEditable="true">${title}</h2>
    <p class="article__section--p" contentEditable="true">${body}</p>
</section>
  <section class="article__section--footer">
    <img src="idea-box-images/upvote.svg" alt="round upvote icon">
    <h3 class="article__section--h3">Quality: ${quality}</h3>
    <img src="idea-box-images/downvote.svg" alt="round downvote icon">
  </section>
</article>`)
};


// ****DELETING EXISTING IDEA***
// 4.On click of delete btn
//   4.a idea card delete btn removes from both data model and DOM
// 	 4.b delete btn should remove correct card
//   4.c page SHOULD NOT reload after delete


function deleteCard(e) {
  if (e.target.className === 'article__delete') {
    e.target.closest('article').remove();
    // idea.DeleteFromStorage();
  }
}

// function getId(e) {
//   return (e.target.closest('main__article--card').getAttribute.(data-id));
// }

function getCardIndex() {
} 

// ****EDIT/STAR EXISTING IDEA****
// 6. idea and body on card should be contentEditable="true" attribute
//   6.a changes are 'commited' by pressing enter/return and clicking outside of text field(keycode 13 and blur)
//   6.b when star is clicked it should stay in active(orange) state

function updateCard() {

}

// ****UPDATE IDEA IN LOCAL STORAGE****
// 7.if page is reloaded, edit should persist
//   7.a update of idea.js should be in updateIdea method
//   7.b DOM gets updated in main.js file (where you can still leverage your idea instance)

		        // *******PHASE TWO*******

// ****CHANGE QUALITY OF IDEA****
// 1.all ideas start out as 'Swill'
//   1.a upvote and downvote should be buttons
//   1.b Clicking upvote should increase its quality one notch (“swill” → “plausible”, “plausible” → “genius”)
//   1.c Clicking downvote should decrease its quality one notch (“genius” → “plausible”, “plausible” → “swill”)
//   1.d shouldnt be able to increase "genius" idea or decrease "swill" idea

function changeQuality() {

}

// ****UPDATE QUALITY IN LOCAL STORAGE****
// 2.if page is reloaded, edit should persist
//   2.a update of idea.js should be in updateQuality method
//   2.b DOM gets updated in main.js file (where you can still leverage your idea instance)

// ****FILTER AND SEARCH BY TEXT****
// 3. Upon searching
//   3.a As user types (keyup) in search, the list of ideas should filter in real time to only display ideas whose title or body includ.
//   3.b The page SHOULD NOT reload.
//   3.c Clearing the search box should restore all the idea cards to the list
//   3.d doesnt need to persist. Not changed to idea.js needed

// function handleSearch() {}
