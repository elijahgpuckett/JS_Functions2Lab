var slideshow = {
    photoList: ["photo1", "photo2", "photo3"],
    currentPhotoIndex: 0,
    nextPhoto: function () {
        if (this.currentPhotoIndex < this.photoList.length) {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex - 1]);
        }
        else if (this.currentPhotoIndex === this.photoList.length) {
            slideshow.pause()
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
        console.log("You're at " + this.photoList[this.currentPhotoIndex]);
    },

    playInterval: null,

    play: function () {
        this.playInterval = setInterval(function (){slideshow.nextPhoto()}, 2000);
        
    },
    pause: function () {   
        clearInterval(this.playInterval)
    }
}



slideshow.play();


