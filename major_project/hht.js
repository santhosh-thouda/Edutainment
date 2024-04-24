const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'16',
        songName:` Urike Urike <br>
        <div class="subtitle">Mm Sreelekha,sid sriram</div>`,
        poster: "img/16.jpg"
    },
    {
        id:'17',
        songName:` Malli Malli <br>
        <div class="subtitle">Hiphop Tamizha</div>`,
        poster: "img/17.jpg"
    },
    // all object type 
    {
        id:"18",
        songName: `Naa Madhi <br><div class="subtitle"> Dhanunjay Seepana</div>`,
        poster: "img/18.jpg",
    },
    {
        id:"19",
        songName:`Suguna Sundari <br><div class="subtitle">Thaman S,Ram Miriyala</div>`,
        poster: "img/19.jpg",
    },
    {
        id:"20",
        songName:`Poonakaalu Loading <br><div class="subtitle">Devi sri Prasad</div>`,
        poster: "img/20.jpg",
    },
    {
        id:"21",
        songName: `Ra Ra Reddy I am Ready <br><div class="subtitle">Lipsika,Aditya Lyengar</div>`,
        poster: "img/21.jpg",
    },
    {
        id:"22",
        songName: `Thaar Maar Thakkar Maar <br><div class="subtitle">Thaman S</div>`,
        poster: "img/22.jpg",
    },
    {
        id:"23",
        songName: `Bullet Song <br><div class="subtitle">Dev Sri Prasad</div>`,
        poster: "img/23.jpg",
    },
    {
        id:"24",
        songName: `Thattukolede <br><div class="subtitle">Vijai Bulganin</div>`,
        poster: "img/24.jpg",
    },
    {
        id:"25",
        songName: `Halamithi Habibo <br><div class="subtitle">Anirudh Ravichander</div>`,
        poster: "img/25.jpg",
    },
    {
        id:"26",
        songName: `Mehabooba <br><div class="subtitle">Ananya Bhat</div>`,
        poster: "img/26.jpg",
    },
    {
        id:"27",
        songName: `Ma Ma Mahesha <br><div class="subtitle">Thaman S</div>`,
        poster: "img/27.jpg",
    },
    {
        id:"28",
        songName: `Pataas Pilla <br><div class="subtitle">Anirudh Ravichander</div>`,
        poster: "img/28.jpg",
    },
    {
        id:"29",
        songName: `Ninnele <br><div class="subtitle">Anurag Kulkarni</div>`,
        poster: "img/29.jpg",
    },
    {
        id:"30",
        songName: `Oh sita hey Ram <br><div class="subtitle">Vishal Chandrashekhar</div>`,
        poster: "img/30.jpg",
    },
    {
        id:"31",
        songName: `Sulthana <br><div class="subtitle">Sri Krishna,Prudhvi Chandra</div>`,
        poster: "img/31.jpg",
    },
    {
        id:"32",
        songName: `Komuram Bheemudo <br><div class="subtitle">Kala Bhairava</div>`,
        poster: "img/32.jpg",
    },
    {
        id:"33",
        songName: `The Monster Song <br><div class="subtitle">Ravi Basrur,Adithi Sagar</div>`,
        poster: "img/33.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})