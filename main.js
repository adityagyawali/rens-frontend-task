new Vue({
	el: "#app",
	data: {
		images: [
			{ id: 0, url: "./images/pic1.png" },
			{ id: 1, url: "./images/pic2.png" },
			{ id: 2, url: "./images/pic3.png" }
		],
		currentIndex: 0
	},
	computed: {
		currentImage() {
			return this.images[Math.abs(this.currentIndex) % this.images.length].url;
		}
	},
	methods: {
		nextImage() {
			this.currentIndex += 1;
			if (this.currentIndex >= this.images.length) {
				this.currentIndex = 0;
			}
		},
		activeImage(index) {
			this.currentIndex = index;
		}
	},
	mounted() {
		setInterval(() => {
			this.nextImage();
		}, 5000);
	}
});
