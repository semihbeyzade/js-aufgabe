class CoffeeShop {
	constructor (name, menu, orders) {
		this.name = name
		this.menu = menu
		this.orders = orders
		
	}
	addOrder(name){
		if(this.menu.filter(element => element.item === name)){
			this.orders.push(name)
			return `Order added!`
		}else{
			return `This item is currently unavailable!`
		}
	}

	fulfillOrder(){
		if(this.orders.length >= 0){
			return `${this.orders[0]} is ready`
		}else{
			return `All orders have been fulfilled!`
		}
	}
	listOrders(){
		return this.orders;
	}
	dueAmount(){
		let sum = 0;
		this.orders.forEach(order => {
			this.menu.forEach(element => {
				if(element.item === order){
					sum = sum + element.price
				}
			})
		});
		return sum.toFixed(2)
	}

	cheapestItem(){
	let prices = this.menu.map(element => element.price)
	let lowest = Math.min(...prices)
	let position = prices.indexOf(lowest)
	return this.menu[position]


	}
	drinksOnly(){
	return this.menu.filter(element => element.type == "drink").map(element => element.item)
	}
	foodOnly(){
		return this.menu.filter(element => element.type == "food").map(element => element.item)
	}
	

}

let tcs = new CoffeeShop('starbucks', [{ item: 'Tea', type: 'drink', price: 2.5 }, { item: 'Coffee', type: 'drink', price: 3.5 }, { item: 'iced coffee', type: 'drink', price: 3.5 }, { item: 'Cookie', type: 'food', price: 2 }, { item: 'cinnamon roll', type: 'food', price: 2.5 }], [])
tcs.addOrder('Coffee')
console.log(tcs.orders);
console.log(tcs.fulfillOrder());
console.log(tcs.dueAmount());
console.log(tcs.cheapestItem());
console.log(tcs.drinksOnly());
console.log(tcs.foodOnly());


