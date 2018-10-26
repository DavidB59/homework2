class Cart {
    constructor() {
        this.array = []
    }
    getItems() {
        return this.array
    }
    addItem(itemName, quantity, price) {
        const item = {
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        }
        this.array.push(item)
    }
    clear() {
        this.array = []
    }
    total() {
        return this.array.reduce(function (acc, va) {
            return va.pricePerUnit * va.quantity + acc
        }, 0)
    }
}

module.exports = Cart
