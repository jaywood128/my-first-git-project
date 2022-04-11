const loadText = document.querySelector('.loading-text')

const bg = document.querySelector('.bg')

const machu = document.querySelector('.machu')

let load = 0; 

let int = setInterval(blurring, 30);

function blurring(){
  load++;

  console.log(load);
  if(load > 99){
    clearInterval(int);
  }
  bg.style.opacity = scale(load, 100, 0, 1, 0);
  loadText.innerText = `${load}%`

  bg.style.filter = `blur ${load}`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = load;

  machu.style.opacity = scale(load, 100, 0, 1, 0);
  machu.style.filter = `blur ${load}`;
  machu.style.filter = load;

  console.log(bg.style);

}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
