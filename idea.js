class Idea {
	constructor(id, title, body, star, quality) {
		this.id = id;
		this.title = title;
		this.body = body;
		this.star = star || false;
		this.quality = quality;
	}
	saveToStorage() {
	  localStorage.setItem('theIdea', JSON.stringify(ideasArray));	
	}
	deleteFromStorage() {

	}
	updateIdea() {

	}
	updateQuality() {

	}
}	