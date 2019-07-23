class Idea {
	constructor(id, title, body, star, quality) {
		this.id = id;
		this.title = title;
		this.body = body;
		this.star = star || false;
		this.quality = quality || 0;
	}

	saveToStorage(ideasArray) {
	  localStorage.setItem('theIdeas', JSON.stringify(ideasArray));
	}

	deleteFromStorage(index) {
      ideasArray.splice(index, 1);
	  this.saveToStorage(ideasArray)
	}

	updateIdea(type, text, ideasArray, index) {
	  if (type === 'title') {
		this.title = text;
	}
	  if (type === 'body') {
		this.body = text;
	}
	  ideasArray.splice(index, 1, this);
	  this.saveToStorage(ideasArray);
	}

	updateStar(ideasArray) {
	  this.star = this.star;
	  this.saveToStorage(ideasArray);
	}

	updateQuality(ideasArray) {
	  this.quality = this.quality;
	  this.saveToStorage(ideasArray);
	}

}
