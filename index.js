// // function promis(message) {
// // 	return new Promise((res, rej) => {
// // 		if (message) {
// // 			setTimeout(() => { res(message) }, 2000);
// // 		} else {
// // 			rej("ahtung");
// // 		}
// // 	})
// // }

// // promis("hello")
// // 	.then((data) => {
// // 		return new Promise(res => {
// // 			console.log(data);
// // 			setTimeout(res, 5000);
// // 		})
// // 	})
// // 	.then(()=> console.log("end"))
// // 	.catch((err) => console.log(err))

// function randomInteger(min, max) {
// 	var rand = min - 0.5 + Math.random() * (max - min + 1)
// 	rand = Math.round(rand);
// 	return rand;
// }
// numb = randomInteger(0, 10);
// function promis(message) {
// 	return new Promise((res, rej) => {
// 		if (message > 5) {
// 			// console.log("больше 5");
// 			res(message)
// 		} else {
// 			// console.log("меньше 5");
// 			rej(message)
// 		}
// 	})
// }

// promis(numb).then(e => console.log("data", e), err => console.log("err", err))
// // promis(numb)
// // 	.then((data) => {
// // 		return new Promise(res => {
// // 			console.log(data);
// // 		})
// // 	})
// // 	.catch((err) => console.log(err))

// function handler(event) {
// 	var { target } = event;
// 	// vat target = event.target
// 	console.log("target-items", target);
	
// }

// var level_1 = document.getElementById("level-0");
// level_1.addEventListener("click", handler)

window.addEventListener("click", function(event) {
		event.target.parentElement.remove()})

		window.addEventListener("contextmenu", wi)
		window.addEventListener("click", wi)
		window.addEventListener("wheel", wi)
		
		function wi(event) {
			event.preventDefault()
			alert('asadasd')
			var div = document.createElement('div')
		}

setInterval(function addd() {
	var div = document.createElement('DIV');
	var but = document.createElement('BUTTON');
	div.innerHTML = new Date()
	// div.addEventListener("click", function(event) {
	// 	event.target.parentElement.remove()
	// })
	but.innerHTML = "DELETE"
	div.appendChild(but)
	if (Math.random() > 0.4) {
		document.body.appendChild(div);
	}

}, 1000)