var video={
    poster:"",
    profile:"",
    title :"",
    creater:"",
    views: 17,
    timing: ""

}

// var card= document.createElement("div");
// card.className="card";


// var videoPoster=document.createElement("div");
// videoPoster.className="videoPoster";

// var videoInfo = document.createElement("div");
// videoInfo.className="videoinfo";

// card.appendChild(videoPoster);
// card.appendChild(videoInfo);


// var posterImg = document.createElement("img");
// posterImg.src="twitter.png";
// posterImg.height="100%";
// posterImg.width="100%";

// videoPoster.appendChild(posterImg);




var playlist=document.createElement("div");
playlist.className="playlist";

var videoPoster=document.createElement("div");
videoPoster.className="videoPoster";

var videoInfo=document.createElement("div");
videoInfo.className="videoInfo";

playlist.appendChild(videoPoster);
playlist.append(videoInfo);

var image=document.createElement("img");
image.src="image.webp";
image.height="100%";
image.width="100%";
videoPoster.appendChild(image);


var profile=document.createElement("div");
profile.className="profile";
// console.log(profile);

var profileimg=document.createElement("img");
profileimg.src="twitter.png";
profile.appendChild(profileimg);

var title=document.createElement("div");
title.className="title";
// console.log(title);

var h1Element=document.createElement("h1");
h1Element.textContent="Full Video: Galliyan Song | Ek Villain | Ankit Tiwari | Sidharth";
document.videoInfo.appendChild(h1Element);


var creater=document.createElement("div");
creater.className="creater";
// console.log(creater);

var pElement=document.createElement("p");
pElement.textContent="T series 392M Views • 10 years ago";
document.videoInfo.appendChild(pElement);

var check=document.createElement("i");
check.className="ri-checkbox-circle-fill";
creater.appendChild(check);

var options=document.createElement("div");
options.className="options";
// console.log(options);

var menuButton=document.createElement("i");
menuButton.className="ri-more-2-fill";
options.appendChild(menuButton);

playlist.appendChild(profile);
playlist.appendChild(title);
playlist.appendChild(creater);
playlist.appendChild(options);
console.log(videoInfo);

var playlist=document.getElementById("ImageList");

ImageList.appendChild(playlist);



