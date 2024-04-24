const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'52',
        songName:` La La Bheemla <br>
        <div class="subtitle">Arun Kaundinya</div>`,
        poster: "img/52.jpg",
    },
    {
        id:'53',
        songName:` Dandakadiyal <br>
        <div class="subtitle">Bheems Ceciroleo</div>`,
        poster: "img/53.jpg",
    },
    // all object type 
    {
        id:"54",
        songName: `Ismart Title Song <br><div class="subtitle">Mani Sharmsa, Anurag Kulkarni</div>`,
        poster: "img/54.jpg",
    },
    {
        id:"55",
        songName:`Jarra Jarra <br><div class="subtitle">Mickey j.Meyer</div>`,
        poster: "img/55.jpg",
    },
    {
        id:"56",
        songName:`Massu Maranam <br><div class="subtitle">Anirudh Ravichander</div>`,
        poster: "img/56.jpg",
    },
    {
        id:"57",
        songName: `Thoofaney Veedamma <br><div class="subtitle">G.V.Prakash, Anurag Kulkarni</div>`,
        poster: "img/57.jpg",
    },
    {
        id:"58",
        songName: `Gangu Leader <br><div class="subtitle">Anirudh Ravichander</div>`,
        poster: "img/58.jpg",
    },
    {
        id:"59",
        songName: `Rowdy Baby <br><div class="subtitle">Yuvan Shankar Raja</div>`,
        poster: "img/59.jpg",
    },
    {
        id:"60",
        songName: `Daakko Daakko Meka <br><div class="subtitle">Devi Sri Prasad, Sivam</div>`,
        poster: "img/60.jpg",
    },
    {
        id:"61",
        songName: `Dinchak <br><div class="subtitle">Keerthana Sharma</div>`,
        poster: "img/61.jpg",
    },
    {
        id:"62",
        songName: `Who Am I <br><div class="subtitle">Dinker Kalvala</div>`,
        poster: "img/62.jpg",
    },
    {
        id:"63",
        songName: `Master Coming <br><div class="subtitle">Anirudh Ravichander</div>`,
        poster: "img/63.jpg",
    },
    {
        id:"64",
        songName: `Dimaak Kharaab <br><div class="subtitle">Keerthana Sharma,Saketh</div>`,
        poster: "img/64.jpg",
    },
    {
        id:"65",
        songName: `Nee Kannulu <br><div class="subtitle">Rahul Sipligunj</div>`,
        poster: "img/65.jpg",
    },
    {
        id:"66",
        songName: `Pakka Local <br><div class="subtitle">Geetha Madhuri, Sagar</div>`,
        poster: "img/66.jpg",
    },
    {
        id:"67",
        songName: `Kevvu Keka <br><div class="subtitle">Mamta Sharma,Kushi murali</div>`,
        poster: "img/67.jpg",
    },
    {
        id:"68",
        songName: `Raja The Great <br><div class="subtitle">Ravi Teja, Revanth,Saketh</div>`,
        poster: "img/68.jpg",
    },
    {
        id:"69",
        songName: `Aa Gattunutaava <br><div class="subtitle">Shiva nagulu</div>`,
        poster: "img/69.jpg",
    },
    {
        id:"70",
        songName: `Mass Biriyani <br><div class="subtitle">Rahul Nambiar</div>`,
        poster: "img/70.jpg",
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