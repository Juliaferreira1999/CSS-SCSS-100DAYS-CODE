const sky = document.querySelector('.sky');
const moon = document.querySelector('.moon');

for (let i = 5; i >= 1; i--) {
	const newDiv = document.createElement('div');
	newDiv.classList.add('cloud-' + i);
	sky.insertBefore(newDiv, moon.nextSibiling);	
}

for (let i = 12; i >= 1; i--) {
	const newDiv = document.createElement('div');
	newDiv.classList.add('crater-' + i);
	moon.append(newDiv);
}

for (let i = 1; i <= 10; i++) {
	const dropLg = document.createElement('div');
	
	dropLg.classList.add('drop-lg-' + i);
	
	sky.insertBefore(dropLg, moon.nextSibiling);	
}

for (let i = 1; i <= 10; i++) {
	const dropMd = document.createElement('div');
	
	dropMd.classList.add('drop-md-' + i);
	
	sky.insertBefore(dropMd, moon.nextSibiling);
}

for (let i = 1; i <= 10; i++) {
	const dropSm = document.createElement('div');

	dropSm.classList.add('drop-sm-' + i);

	sky.insertBefore(dropSm, moon.nextSibiling);
}