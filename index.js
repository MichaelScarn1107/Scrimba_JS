let onePointHomeBtn = document.getElementById("onePointHome-btn")
let twoPointHomeBtn = document.getElementById("twoPointHome-btn")
let threePointHomeBtn = document.getElementById("threePointHome-btn")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

let onePointGuestBtn = document.getElementById("onePointGuest-btn")
let twoPointGuestBtn = document.getElementById("twoPointGuest-btn")
let threePointGuestBtn = document.getElementById("threePointGuest-btn")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0


function homeAddOnePoint(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
    
}
function homeAddTwoPoint(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
    
}
function homeAddThreePoint(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
    
}

function guestAddOnePoint(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
    
}
function guestAddTwoPoint(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
    
}
function guestAddThreePoint(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
    
}