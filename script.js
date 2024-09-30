const btn = document.getElementById('calculate');

    btn.addEventListener('click',function()
{
let height=document.querySelector('#height').value;
let weight=document.querySelector('#weight').value;

if(height === '' || weight ==='')
{
    alert('please fill out the input fields')
    return;
}


height =parseFloat( height / 100)
let BMI = parseFloat((weight / (height * height)))
BMI = BMI.toFixed(2)
document.querySelector('#result').innerHTML = BMI
// console.log(BMI)

let status ='';
let angle=0;
let videoUrl ='';

if(BMI <18.5)
{
    status = "Under Weight"
    angle=-120;
   videoUrl="https://www.youtube.com/embed/DSfoev51IhI?si=SOG6AR6Swx7fCgsR" 
}else if(BMI >= 18.5 && BMI <25)
{
    status = "Normal";
    angle=-80;
    videoUrl="https://www.youtube.com/embed/OkNbacmwNp4?si=IbhClxPpfxx9v0U4" 
   
}
 else if(BMI >= 25 && BMI < 30)
{
    status = "Over Weight"
    angle=-30;
    videoUrl="https://www.youtube.com/embed/jvJuJpCtyic?si=T43_WnXkuI-4PCUU"
}
else if(BMI >=30)
{
    status = "Obese"
    angle=70
    videoUrl="https://www.youtube.com/embed/oPPhkyQhGrg?si=ZpNOMAqrg8okWs6x" 
}


document.querySelector('.comment').innerHTML =`you are <span id="comment">${status}
                
            </span>`
rotateArrow(angle)

setTimeout(function()
{


window.location.href = `video.html?bmi=${BMI}&status=${status}&videoUrl=${encodeURIComponent(videoUrl)}`;
},2000)
}
    )

    function rotateArrow(angle)
    {

        const arrow=document.getElementById("bmi-arrow")
        arrow.style.transform =`rotate(${angle}deg)`
    }

    function suggestExercise(videoUrl)
    {
        const videoElement = document.getElementById("exercise-video")
        videoElement.src=videoUrl;
        videoElement.style.display='block'
    }