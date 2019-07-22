class Idea {
	constructor(id, title, body, star, quality) {
		this.id = id;
		this.title = title;
		this.body = body;
		this.star = star || false;
		this.quality = quality || 0;
	}

	saveToStorage(ideasArray) {
	  localStorage.setItem('theIdea', JSON.stringify(ideasArray));
	}

	deleteFromStorage(index) {
		ideasArray.splice(index, 1);
		this.saveToStorage(ideasArray)
	}

	updateIdea(type, text, ideasArray, index) {
		if(type === 'title'){
			this.title = text;
		}
		if(type === 'body'){
			this.body = text;
		}
		console.log('new this', this)
		ideasArray.splice(index, 1, this);
		this.saveToStorage(ideasArray);
	}

	updateQuality() {
		this.quality = quality;
		this.saveToStorage(quality);
	}

}
