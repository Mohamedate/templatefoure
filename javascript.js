
//ourSkills effect
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".skill .the-progress span");
///////////////////////////////////
let progress = document.querySelector(".discount .progress");
let count = document.querySelector(".discount .count");
let input = document.querySelector(".discount .text");
let maxLength = input.getAttribute("maxlength");
let fuck = input.getAttribute("placeholder");
count.innerHTML = maxLength;

 input.oninput = function() { 
     count.innerHTML = maxLength - this.value.length;
     count.innerHTML == 0 ? count.classList.add("zero") : count.classList.remove("zero");

 }
 //countdwon
let countDownDate = new Date(" Dec 31, 2021 23:59:59").getTime();
let counter = setInterval(() => { 
//get date now
let dateNow = new Date().getTime();
//find the date difference between now and countdown date   
let dateDiff = countDownDate - dateNow;
// get time units 
let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24 ));
let hours =  Math.floor((dateDiff % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
let second = Math.floor(dateDiff % (1000 * 60 ) / (1000));
document.querySelector(".day").innerHTML = days;
document.querySelector(".hour").innerHTML = hours;
document.querySelector(".minute").innerHTML = minutes;
document.querySelector(".second").innerHTML = second;

}, 1000)
//countstate
// up
let uper = document.querySelector(".up");
///////////////
let num = document.querySelectorAll(".stats .number");
let sectionTwo = document.querySelector(".stats");
let started = false;
window.onscroll = function () { 
    if (window.scrollY >= section.offsetTop - 100) { 
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    if (window.scrollY >= sectionTwo.offsetTop - 200) { 
        if (!started) { 
            num.forEach((numb) => startCount(numb));
            started = true;
        }

    }
    if (this.scrollY >= 1000) { 
        uper.classList.add("shwo");
    }
    else uper.classList.remove("shwo");
}
function startCount(el) { 
    let goal = el.dataset.goal;
    let count = setInterval(() => { 
        el.textContent++;
        if (el.textContent == goal) { 
            clearInterval(count);
        }
    },10)
}

