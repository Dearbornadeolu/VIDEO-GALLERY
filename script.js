let listVideo = document.querySelectorAll('.video-list .vid')
let mainVideo = document.querySelector('#mainvideo video')
let title = document.querySelector('#mainvideo .title')
listVideo.forEach(video =>{
    video.onclick= ()=>{
        listVideo.forEach(vid => vid.classList.remove('active'))
        video.classList.add('active')
        if (video.classList.contains('active')) {
            let src = video.children[0].getAttribute('src')
            mainVideo.src = src
            let text = video.children[1].innerHTML
            console.log(text);
            title.innerHTML = text
        }
    }
})