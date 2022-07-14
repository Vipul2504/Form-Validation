const movieSelect = document.querySelector('#movie');
const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const total = document.getElementById('total');
const count = document.getElementById('count');

let ticketPrice = +movieSelect.value;

function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}

function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) >-1){
                seat.classList.add('selected')
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

function updateSelectedCount(){
    const selectedSeats  = document.querySelectorAll('.row .seat.selected');

    const selectedSeatsCounts = selectedSeats.length;

    const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));
    
    count.innerText = selectedSeatsCounts;
    total.innerText = selectedSeatsCounts * ticketPrice;
}

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

container.addEventListener('click', (e) => {
   if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected')
   } 
   updateSelectedCount();
})


updateSelectedCount();