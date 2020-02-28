(() => {
	// variables at the top -> elements on the page
	let sigilButtons = document.querySelectorAll('.sigilContainer'),
	lightBox = document.querySelector('.lightbox');
	gotVideo = lightBox.querySelector('video')
	closeLightBox = lightBox.querySelector('.lightbox-close');

	function showLightbox() {
		// pop open a light box
		// 

		lightBox.classList.add('show-lightbox');

		gotVideo.play();
	}

	function hideLightBox() {
		lightBox.classList.remove('show-lightbox');
		gotVideo.pause();
		gotVideo.currentTime = 0;
	}

	// add a click event to the sigilButtons
	sigilButtons.forEach(button => button.addEventListener("click", showLightbox))

	closeLightBox.addEventListener('click', hideLightBox);
})();
