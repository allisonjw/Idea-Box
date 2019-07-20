class Idea {
	constructor(id, title, body, star, quality) {
		this.id = id;
		this.title = title;
		this.body = body;
		this.star = star || false;
		this.quality = quality;
	}

	saveToStorage(ideasArray) {
	  localStorage.setItem('theIdea', JSON.stringify(ideasArray));
	}

	deleteFromStorage(index) {
		ideasArray.splice(index, 1);
		this.saveToStorage(ideasArray)
	}

	updateIdea(type, text, ideasArray, index, star) {
		console.log('this', this)
		if(type === 'title'){
			this.title = text;
		}
		if(type === 'body'){
			this.body = text;
		}
		if(star === true){
			this.star = true;
		}
		console.log('new this', this)
		ideasArray.splice(index, 1, this);
		this.saveToStorage(ideasArray);
	}
}
