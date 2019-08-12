class Burger {
    constructor(){
        this.burgerOrder = document.querySelectorAll("input:checked");
        this.sum = 0;
        this.kkal = 0;
    }
    _calcBurgerPriceKalories(){
        this.burgerOrder.forEach(e => {
            this.sum += +e.dataset.price;
            this.kkal += +e.dataset.kkal;
        })
    }
    renderBurgerOrder(sum, kkal){
        this._calcBurgerPriceKalories();
        document.querySelector('.result').innerText = `Стоимость бургера: ${this.sum} рублей, ${this.kkal} калорий`;
    }
}

document.querySelector('.btn-result').addEventListener('click', () => {
    let burger = new Burger();
    burger.renderBurgerOrder();
})
