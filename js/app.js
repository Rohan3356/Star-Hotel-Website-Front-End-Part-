//javascript for the filter project in search
//=================================filter item=====================================================//
(function(){
	//slect all the buttons
	const filterBtn=document.querySelectorAll(".filter-btn");
	//console.log(filterBtn);
	filterBtn.forEach(function(btn){
		btn.addEventListener("click", function(event){
			//prevent default action
			event.preventDefault();
			const value=event.target.dataset.filter;
			console.log(value);
			
			const items=document.querySelectorAll(".store-item");
			//console.log(items);
			
			items.forEach(function(item){
				if(value==="all"){
					item.style.display="block";
				}
				
				else{
					if(item.classList.contains(value)){
						item.style.display="block";
					}
					else{
						item.style.display="none";
					}
				}
			});		
		});
	});
	
})();


//==================================search input==================================================//
(function(){
	//target search box
	
	const search=document.getElementById("search-item");
	
	search.addEventListener("keyup", function(){
		let value=search.value.toLowerCase().trim();
		console.log(value);
		const items=document.querySelectorAll(".store-item");
		items.forEach(function(item){
			let type=item.dataset.item;
			
////			console.log(type);
//			if(type.includes(value)){
//				item.style.display="block";
//			}
//			else{
//				item.style.display="none";
//			}
			let length=value.length;
			let match=type.slice(0,length);
			
			if(value===match){
				item.style.display="block";
			}
			
			else{
				item.style.display="none";
			}
		});
	});
})();

//===========================javascript for the cart============================================//
//show cart
(function(){
	const cartInfo=document.getElementById('cart-info');
	const cart=document.getElementById('cart');
	cartInfo.addEventListener('click', function(){
		cart.classList.toggle('show-cart');
	});	
})();

//add items to the cart

(function(){
	const cartBtn=document.querySelectorAll('.store-item-icon');
	cartBtn.forEach(function(btn){
		btn.addEventListener('click',function(event){
			//console.log(event.target);
		if(event.target.parentElement.classList.contains('store-item-icon')){
			let fullPath=event.target.parentElement.previousElementSibling.src;
			let pos = fullPath.indexOf('img')+3;
			let partPath=fullPath.slice(pos);
			//console.log(partPath);
			const item={};
			item.img = `img-cart${partPath}`;
			let name=event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
			item.name=name;
			
			let price=event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
			let finalPrice = price.slice(1).trim();
			item.price = finalPrice;
			
			const cartItem = document.createElement('div');
			cartItem.classList.add('cart-item','d-flex','justify-content-between','text-capitalize','my-3');
			
			cartItem.innerHTML=`<img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div>`;
			
			//select cart
			const cart = document.getElementById('cart');
			const total = document.querySelector('.cart-total-container');
			
			cart.insertBefore(cartItem,total);

			alert('item added ');
		  	
			showTotals();
		
		}
			
		});
	});
	//show total
	function showTotals(){
		const total=[];
		const items = document.querySelectorAll('.cart-item-price');
		items.forEach(function(item){
			total.push(parseFloat(item.textContent));
		}); 
		//console.log(total);
		
		const totalMoney = total.reduce(function(total, item){
			total+=item;
			return total;
		}, 0);
		
		const finalMoney = totalMoney.toFixed(2);
		//console.log(finalMoney);
		document.getElementById('cart-total').textContent=finalMoney;
		document.querySelector('.item-total').textContent=finalMoney;    
		document.getElementById('item-count').textContent=total.length;    
	}
	
})()  










