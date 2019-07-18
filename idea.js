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
		console.log('linked')
		ideasArray.splice(index, 1);
		this.saveToStorage(ideasArray)
		console.log(ideasArray)
	}

	// updateIdea() {
	//
	// }
	// updateQuality() {
	//
	// }
}
