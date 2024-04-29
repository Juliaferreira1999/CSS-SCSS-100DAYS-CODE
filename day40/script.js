const pics = document.querySelector('.pics');

function adjustTransformOrigin() {
	pic.forEach((element, index) => {
		const row = Math.floor(index / 3) + 1;  
		const col = (index % 3) + 1;             

		const left = ((col - 1) / 2).toFixed(2); 
		const top = ((row - 1) / 2).toFixed(2);  
		element.style.transformOrigin = `${left * 100}% ${top * 100}%`;
	});
}

for (let i = 1; i <= 9; i++) {
	pics.innerHTML += `
    <div class="pic pic-${i}">
      <img src="https://100dayscss.com/codepen/40-${i}.jpg" alt="" />
    </div>`;
}

const pic = document.querySelectorAll('.pic');
adjustTransformOrigin();

pic.forEach((e) => {
	e.addEventListener('click', () => {
		e.classList.toggle('active');
	});
});