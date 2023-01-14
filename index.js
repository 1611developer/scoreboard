let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")
let homeScore = 0
let guestScore = 0

function oneHome() {
    homeScore += 1
    scoreHomeEl.textContent = homeScore
}

function twoHome() {
    homeScore += 2
    scoreHomeEl.textContent = homeScore
}

function threeHome() {
    homeScore += 3
    scoreHomeEl.textContent = homeScore
}

function oneGuest() {
    guestScore += 1
    scoreGuestEl.textContent = guestScore
}

function twoGuest() {
    guestScore += 2
    scoreGuestEl.textContent = guestScore
}

function threeGuest() {
    guestScore += 3
    scoreGuestEl.textContent = guestScore
}