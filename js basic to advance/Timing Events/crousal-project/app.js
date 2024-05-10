const imgEl = document.querySelector('img')

let arr = [
    'https://wallpapercave.com/wp/wp2599594.jpg',
    'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg',
    'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
    'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg',
    'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg'
]

// let ArrIndex = 0;
// let stopId = setInterval(function(){
//     imgEl.setAttribute('src',arr[ArrIndex])
//     ArrIndex = (ArrIndex + 1) % arr.length; //modulas->reaminder
// },1000)

// setTimeout(function(){
//     clearInterval(stopId)
//     document.write('interval stopped')
// },30000)
// 30000 miliSeconds = 30 seconds


//or

let i = 0;
setInterval(function(){
    imgEl.src =  arr[i]
    if(i < arr.length-1){  //when i=4<4  then else i=0 set kr do  bcz in array always index/i num start with 0 and length start with 1
        i++;
    }
    else{
        i = 0;
    }
},2000)


