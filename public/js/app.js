const socket = io();
const startingSection = document.querySelector('.starting-section')
const startButton = document.querySelector('.home-btn')
const crazyButton = document.getElementById('crazyButton')

startButton.addEventListener('click', () => {
    socket.emit('StartGame')
})

socket.on('startGame', () => {
    hideStartButton()
})

function hideStartButton(){
    startButton.style.display = 'none';
    crazyButton.style.display = 'block';
    startingSection.style.display  = 'none'
}
