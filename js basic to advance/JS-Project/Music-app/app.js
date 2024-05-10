let play_btn = document.getElementById('play-btn')
let progress = document.getElementById('progress')
let song_list = document.getElementById('songList')
let currentTimeDisplay = document.getElementById('currentTime')
let totalDurationDisplay = document.getElementById('totalDuration')
let backwardBtn = document.getElementById('backward-btn')
let forwardBtn = document.getElementById('forward-btn')


let songs = [
    {
        name:'song1',
        id:'1'
    },
    {
        name:'song2',
        id:'2'
    },
    {
        name:'song3',
        id:'3'
    },
    {
        name:'song4',
        id:'4'
    },
    {
        name:'song5',
        id:'5'
    },
    {
        name:'song6',
        id:'6'
    },
    {
        name:'song8',
        id:'8'
    },
]
let audio = new Audio('./assets/song3.mp3');//by default song3 chlega

//1. show the song list in the UI

for(let song of songs){
    let li = document.createElement('li')
    li.innerText = song.name
    li.setAttribute('id',song.id)
    li.classList.add('song-item')
    song_list.append(li)
}

//2. play btn ka icon badlo and click krke gaana chalao

play_btn.addEventListener('click',function(){
    audio.paused ? audio.play() : audio.pause();
    
    if(play_btn.children[0].classList.contains('fa-play')){      //audio play hai to pause kr do
        play_btn.children[0].classList.remove('fa-play')
        play_btn.children[0].classList.add('fa-pause')
    }
    else{
        play_btn.children[0].classList.remove('fa-pause')        //audio  pause hai to play kr do
        play_btn.children[0].classList.add('fa-play')

    }

    // // Play button click event listener
    // console.log("Play button clicked");
    // if (audio.paused) {
    //     console.log("Audio is paused, playing now.");
    //     audio.play();
    //     play_btn.children[0].classList.toggle('fa-play');
    //     play_btn.children[0].classList.toggle('fa-pause');
    // } else {
    //     console.log("Audio is playing, pausing now.");
    //     audio.pause();
    //     play_btn.children[0].classList.toggle('fa-pause');
    //     play_btn.children[0].classList.toggle('fa-play');
    // }
});

//3.  current time ke hisaab se range chale

audio.addEventListener('timeupdate',function(){
    let currentProgress = (audio.currentTime  / audio.duration) * 100 
    progress.value = currentProgress;


    //update  and show the time and duration
    const currentTime = audio.currentTime;
    const totalDuration =  audio.duration;
    // Format the time in minutes and seconds
    const formattedCurrentTime = formatTime(currentTime)
    const formattedTotalDuration = formatTime(totalDuration)
    
    // Update the display
    currentTimeDisplay.textContent = formattedCurrentTime
    totalDurationDisplay.textContent = formattedTotalDuration
})

// Function to format time in minutes and seconds
function formatTime(timeInSeconds){
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`//like 1:00 ->if currenttime = 60s 
    return formattedTime;
}



//4. progress line ko drag krne se gaana chale 

progress.addEventListener('change',function(){
    let updateTime = audio.duration * progress.value / 100;
    audio.currentTime = updateTime;
})


//5. btn dabao gaala chalao contest

song_list.addEventListener('click',function(e){
    let songId = e.target.getAttribute('id')
    audio.src = `./assets/song${songId}.mp3`              //gane ka src change kr denge with the help of id
    audio.currentTime = 0;                                //jb bi gane ko chnge krege tb current time 0 se start hoga
    audio.play()                                          //then gane ko play kr denge
    play_btn.children[0].classList.add('fa-pause')        //gana chl rha hai change krne pr to isko add kr denge
    play_btn.children[0].classList.remove('fa-play')      //and isko remove kr denge
})

let currentSongId = 1; // Initialize with the default song ID

forwardBtn.addEventListener('click', function () {
    if (currentSongId < 9) {
        currentSongId += 1;
    } else {
        currentSongId = 1; // Loop back to the first song if currentSongId > 9
    }
    audio.src = `./assets/song${currentSongId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    play_btn.children[0].classList.add('fa-pause');
    play_btn.children[0].classList.remove('fa-play');
});

backwardBtn.addEventListener('click', function () {
    if (currentSongId > 1) {
        currentSongId -= 1;
    } else {
        currentSongId = 9; // Loop to the last song
    }
    audio.src = `./assets/song${currentSongId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    play_btn.children[0].classList.add('fa-pause');
    play_btn.children[0].classList.remove('fa-play');
});


//how to calculate currentprogress

// let currentProgress = (audio.currentTime  / audio.duration) * 100 
//Note: (60/currentTime)*100   = 1/3*100 =>33.33%

//here 60 seconds-> currentTime  and 180 seconds ->total duration