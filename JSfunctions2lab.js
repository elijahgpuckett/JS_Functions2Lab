var slideshow = {
    photoList: ["photo1", "photo2", "photo3"],
    currentPhotoIndex: 0,
    nextPhoto: function () {
        if (this.currentPhotoIndex < this.photoList.length) {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex - 1]);
        }
        else if (this.currentPhotoIndex === this.photoList.length) {
            console.log("end of slideshow");
        }
    },
    prevPhoto: function () {
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex])
        }
        else if (this.currentPhotoIndex + 1 > 0) {
            console.log("Start Of Slideshow");
        }
    },
    getCurrentPhoto: function () {
        console.log(this.photoList[this.currentPhotoIndex]);
    }
}

slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.getCurrentPhoto();


