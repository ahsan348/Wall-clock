console.log('Hello Clock');


function Update(){
    let time =new Date();
    let Hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    Hours = (Hours < 10 ? "0" : "") + Hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    
    let format = (Hours < 12) ? "AM" : "PM";
    
    Hours = (Hours > 12) ? Hours - 12 : Hours;
    Hours = (Hours = 12) ? 12 : Hours;
    // console.log(Hours)

    let wallStr = Hours + ':' + minutes + ':' + seconds + " " + format;
    document.getElementById('wall').innerHTML = wallStr;
    

}