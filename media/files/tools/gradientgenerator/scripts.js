let pickerA = document.getElementById("color-a"),
pickerB = document.getElementById("color-b");

const colorA = pickerA.value,
colorB = pickerB.value;

let hexTextA = document.getElementById("hexTextA"),
hexTextB = document.getElementById("hexTextB");

let preview = document.getElementById("preview"),
see = document.getElementById("see");

let direction = document.getElementsByClassName("direction");

let generate = document.getElementById("generate");

hexTextA.innerHTML = colorA;
hexTextB.innerHTML = colorB;

let code

let percentageA = document.getElementById("range-a"),
percentageB = document.getElementById("range-b");

function updateCssCode(){
	let code = `background: linear-gradient(to ${document.getElementById("direction-input").textContent}, ${hexTextA.innerHTML} ${parseInt(percentageA.value,10)}%, ${hexTextB.innerHTML} ${parseInt(percentageB.value,10)}%);`;
	document.getElementById("css-code").innerText = code;
	document.getElementById("clipboard-alert").innerText = "Copy to clipboard";
}

for(let i = 0; i < direction.length; i++ ) {

    direction[i].addEventListener("click", (event) => {
        document.getElementById("direction-input").innerText = `${direction[i].value}`;
        document.body.style = `background: linear-gradient(to ${document.getElementById("direction-input").textContent}, ${hexTextA.innerHTML} 0%, ${hexTextB.innerHTML} 100%)`;
		updateCssCode();
	});
};

pickerA.addEventListener("input", (event) => {
    hexTextA.innerHTML = pickerA.value;
    document.body.style = `background: linear-gradient(to ${document.getElementById("direction-input").textContent}, ${hexTextA.innerHTML} ${parseInt(percentageA.value,10)}%, ${hexTextB.innerHTML} ${parseInt(percentageB.value,10)}%);`;
	updateCssCode();
}, false);

pickerB.addEventListener("input", (event) => {
    hexTextB.innerHTML = pickerB.value;
    document.body.style = `background: linear-gradient(to ${document.getElementById("direction-input").textContent}, ${hexTextA.innerHTML} ${parseInt(percentageA.value,10)}%, ${hexTextB.innerHTML} ${parseInt(percentageB.value,10)}%);`;
	updateCssCode();
}, false);

percentageA.addEventListener("input", (event) => {
    document.body.style = `background: linear-gradient(to ${document.getElementById("direction-input").textContent}, ${hexTextA.innerHTML} ${parseInt(percentageA.value,10)}%, ${hexTextB.innerHTML} ${parseInt(percentageB.value,10)}%);`;
	updateCssCode();
});

percentageB.addEventListener("input", (event) => {
    document.body.style = `background: linear-gradient(to ${document.getElementById("direction-input").textContent}, ${hexTextA.innerHTML} ${parseInt(percentageA.value,10)}%, ${hexTextB.innerHTML} ${parseInt(percentageB.value,10)}%);`;
	updateCssCode();
});

generate.addEventListener("click", (event) => {
    let code = `background: linear-gradient(to ${document.getElementById("direction-input").textContent}, ${hexTextA.innerHTML} ${parseInt(percentageA.value,10)}%, ${hexTextB.innerHTML} ${parseInt(percentageB.value,10)}%);`;
    let codeToCopy = document.createElement('textarea');
    codeToCopy.value = code;
    document.body.appendChild(codeToCopy);
    codeToCopy.select();
    document.execCommand('copy');
	document.getElementById("clipboard-alert").innerText = "Copied..";
    document.body.removeChild(codeToCopy);
})
