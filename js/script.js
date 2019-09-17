(function () {
	let arrObj = [];
	
	// document.addEventListener('userSleep', function(){
	// 	list.item();
	// });

	function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
    }

    function Item(name, img){
		this.name = name;
		this.img = img;
		this.init = function(){
			let obj = document.createElement('img');
			let posX = getRandom(120,470);
			let posY = getRandom(200,950);
			obj.className = "object";
			obj.id = this.name;
			obj.src = "img/"+img;
			obj.style.top = posX+'px';
			obj.style.left = posY+'px';
			document.body.appendChild(obj);

			let textObj = document.getElementById(this.name+'_t'),
			textO=this.name;
			textObj.innerHTML = textO

		};
		this.off = function(){
			var div = document.getElementById(this.name);
			div.classList.add('object_off');

			var div1 = document.getElementById(this.name+'_t');
			div1.classList.add('text_off');

			let count = document.getElementsByClassName('object_off');
 			

 			// count.clear();

 			if (count.length == 4){

			var div2 = document.getElementById('footer');
			div2.classList.add('footer_off');

			var div3 = document.getElementById('tutorial');
			div3.classList.add('tutorial_off');

 			let bg = document.querySelectorAll('.bg');

 			for(let i=0; i < bg.length; i++) {
			bg[i].style.background = 'url("img/bg_blur.png") no-repeat top/100% 100%';
			bg[i].style.width = '1000px';
			bg[i].style.height = '600px';
			bg[i].style.transition = '3s';
			}

			var div4 = document.getElementById('finish');
			div4.classList.add('finish_o');

 			}

		}
		
	}



	// function Count(){
	// 	this.start = function(){
	// 		let userSleep = new Event("userSleep");
	// 		let itm = setTimeout(document.dispatchEvent(userSleep, 5000));
	// 	};

	// 	this.clear = function(){
	// 		clearTimeout(itm);
	// 		this.start();
	// 	};

	// }


	// function List(){
	// 	this.item = function(){
	// 		let items = document.querySelectorAll('.text');
	// 		item.forEach(function(item){
	// 		if (!item.classList.contains('text_off')){
	// 			...
	// 		}
	// 		});



	// 	}
	// }


	// let list = new List();
	// let count = new Count();
	// count.start();

	let apple = new Item('apple', 'apple.png');
	arrObj.push(apple);
	apple.init();
	

	let mirror = new Item('mirror', 'mirror.png');
	arrObj.push(mirror);
	mirror.init();

	let book = new Item('book', 'book.png');
	arrObj.push(book);
	book.init();

	let balerina = new Item('balerina', 'balerina.png');
	arrObj.push(balerina);
	balerina.init();



 	var body = document.body;
 	body.onclick = function(event){
 		var target = event.target;
 		if (target.classList.contains('object')){
 			let oNmae = target.id;
 			arrObj.forEach(function(item){
  			if (item.name == oNmae){
 			item.off();
 			}
 			});
 		}
 	}


})();