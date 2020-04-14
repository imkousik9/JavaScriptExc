let myYoutubeVideo = {
    title: 'Loops in javascript',
    videoLegth: 15,
    videoCreator: "Kousik Manna",
    videoDescription: 'this is a video description an a long one'

}

// console.log(myYoutubeVideo);

// console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);

// this fuction take an object and return object

let changeVideoLength = function (myObject) {
    return {
        formateOne: `Time of this video is: ${myObject.videoLegth + 1}`,
        formateTwo: `Time of this video is: ${myObject.videoLegth + 2}`,
        formateThree: `Time of this video is: ${myObject.videoLegth + 3}`
    }
}

let addOne = changeVideoLength(myYoutubeVideo)
console.log(addOne.formateOne);

let addTwo = changeVideoLength(myYoutubeVideo)
console.log(addTwo.formateTwo);

let addThree = changeVideoLength(myYoutubeVideo)
console.log(addThree.formateThree);


