
let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video .video');
let title = document.querySelector('.main-video .title');

listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach((vid) => {
            vid.classList.remove('active');
            // vid.children[1].add('hidden');
        });

        video.classList.add('active');


        if (video.classList.contains('active')) {
            mainVideo.innerHTML = video.innerHTML
            mainVideo.children[2].removeAttribute('hidden');
          
         };
    };
});

// listVideo.forEach(vid => vid.classList.remove('active'));
//         video.classList.add('active');

//         if (video.classList.contains('active')) {
//             let src = video.children[0].getAttributes('src');
//             mainVideo.src = src;
//             let text = video.children[1].innerHTML;
//             title.innerHTML = text;
//          };
