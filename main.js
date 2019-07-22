var ideasArray = [];
var qualityArray = ['Swill', 'Plausible', 'Genius'];
var titleInput = document.querySelector('.form__input--title');
var bodyInput = document.querySelector('.form__input--body');
var saveBtn = document.querySelector('.form__btn');
var searchInput = document.querySelector('.form__input--search');
var ideaForm = document.querySelector('form');
var paragraph = document.querySelector('.main__paragraph');
var cardMain = document.querySelector('main');
var search = document.querySelector('.form__input--search')
var upVote = document.querySelector('.article__section--upvote');
var downVote = document.querySelector('.article__section--downvote');
getCards();
reDisplayCards();

cardMain.addEventListener('click', getId);
cardMain.addEventListener('keydown', handleEnter);
cardMain.addEventListener('click', toggleStarImg);
cardMain.addEventListener('focusout', updateIdeaInputs);
cardMain.addEventListener('click', incrementQuality);
cardMain.addEventListener('click', decrementQuality);
titleInput.addEventListener('keyup', enableSaveBtn);
bodyInput.addEventListener('keyup', enableSaveBtn);
saveBtn.addEventListener('click', makeNewIdea);
search.addEventListener('keyup', filterSearch);
saveBtn.addEventListener('click', enableSaveBtn);

function getCards() {
  if (JSON.parse(localStorage.getItem('theIdea')) === null) {
  } else {
  ideasArray = JSON.parse(localStorage.getItem('theIdea')).map(function({id, title, body, star, quality}) {
    return new Idea(id, title, body, star, quality);
    });
  }
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

function reDisplayCards() {
  for (var i = 0; i < ideasArray.length; i++) {
    generateIdeaCard(ideasArray[i]);
  }
}

function ideaMessage() {
  if (ideasArray.length === 0) {
    paragraph.classList.remove('hidden');
  } else if (ideasArray.length !== 0) {
    paragraph.classList.add('hidden');
  }
}

function generateIdeaCard({id, title, body, star, quality}) {
  var starImg = star ? "star-active.svg" : "star.svg";
  cardMain.insertAdjacentHTML ('afterbegin',
 `<article class="main__article--card" data-id=${id}>
   <section class="article__section--header">
     <img src="idea-box-images/${starImg}" class="article__section--star" alt="small star icon">
     <img onmouseover=src="idea-box-images/delete-active.svg" onmouseout=src="idea-box-images/delete.svg" src="idea-box-images/delete.svg" class="article__delete" alt="X delete button">
   </section>
   <section class="article__section--body">
     <h2 class="article__section--h2" contentEditable="true">${title}</h2>
     <p class="article__section--p" contentEditable="true">${body}</p>
   </section>
   <section class="article__section--footer">
     <img src="idea-box-images/upvote.svg" class="article__section--upvote" alt="round upvote icon">
     <h3 class="article__section--h3">Quality: ${qualityArray[quality]}</h3>
     <img src="idea-box-images/downvote.svg" class="article__section--downvote" alt="round downvote icon">
   </section>
  </article>`)
ideaMessage();
};

function getId(e) {
  var findId = e.target.closest('article').getAttribute('data-id');
  var index = ideasArray.findIndex(function(idea) {
    return idea.id == findId;
})
if (e.target.classList[0] === "article__delete") {
  deleteCard(e, index);
 }
    return index;
}

function deleteCard(e, index) {
  e.target.closest('article').remove();
  ideasArray[index].deleteFromStorage(index);
  ideaMessage();
};

function updateIdeaInputs(e) {
  var index = getId(e);
  if (e.target.className === 'article__section--h2') {
    var editTitle = e.target.innerText;
    ideasArray[index].updateIdea('title', editTitle, ideasArray, index);
  }
  if (e.target.className === 'article__section--p') {
    var editBody = e.target.innerText;
    ideasArray[index].updateIdea('body', editBody, ideasArray, index);
  }
}

function handleEnter(e) {
  if (e.key === 'Enter') {
      e.target.blur();
      updateIdeaInputs(e);
  }
}

function toggleStarImg(e) {
  var index = getId(e);
  var starImg = e.target.closest('.article__section--star');
  var active = "idea-box-images/star-active.svg";
  var inactive = "idea-box-images/star.svg";
  if (ideasArray[index].star === false) {
    starImg.src = active;
    ideasArray[index].star = true;
    ideasArray[index].saveToStorage(ideasArray);
  } else {
    starImg.src = inactive;
    ideasArray[index].star = false;
    ideasArray[index].saveToStorage(ideasArray);
  }
}

function incrementQuality(e, index, quality) {
  var index = getId(e);
  var upVote = e.target.closest('.article__section--upvote');
  if(e.target === upVote) {
    if(ideasArray[index].quality < qualityArray.length - 1) {
    ideasArray[index].quality++;
    ideasArray[index].saveToStorage(ideasArray);
    updateQuality(e, ideasArray[index].quality);
    }
  }
}

function decrementQuality(e, index, quality) {
  var index = getId(e);
  var downVote = e.target.closest('.article__section--downvote');
  if(e.target === downVote) {
    if(ideasArray[index].quality >= 1) {
    ideasArray[index].quality--;
    ideasArray[index].saveToStorage(ideasArray);
    updateQuality(e, ideasArray[index].quality);
    }
  }
}

function updateQuality(e, quality) {
  console.log(quality)
    if(e.target) {
    e.target.parentNode.children[1].innerText = `Quality: ${qualityArray[quality]}`
  }
}
  // var upvoteActive = "idea-box-images/upvote-active.svg";
  // var upvoteInactive = "idea-box-images/upvote.svg";

// ****UPDATE QUALITY IN LOCAL STORAGE****
// 2.if page is reloaded, edit should persist
//   2.a update of idea.js should be in updateQuality method
//   2.b DOM gets updated in main.js file (where you can still leverage your idea instance)

function filterSearch() {
  var searchText = document.querySelector('.form__input--search').value;
  var results = ideasArray.filter(function(idea){
      return idea.title.toLowerCase().includes(searchText) || idea.body.toLowerCase().includes(searchText);
  })
  document.querySelector('main').innerText = '';
  results.forEach(function(idea) {
   generateIdeaCard(idea);
  });
}
