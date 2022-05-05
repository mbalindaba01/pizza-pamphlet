import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

document.addEventListener('alpine:init', () => {
    Alpine.data('pizzas', () => ({
        smallCount: 0,
        medCount: 0,
        largeCount: 0,
        smallPrice: 50.99,
        medPrice: 80.99,
        largePrice: 109.99,
        addPizza(size){
            size++
        },
        removePizza(size){
            size--
        },
        getSmallTotal(){
            return smallCount * smallPrice
        },
        getMedTotal(){
            return medCount * medPrice
        },
        getLargeTotal(){
            return largeCount * largePrice
        },

        getTotal(){
            return getSmallTotal + getMedTotal + getLargeTotal
        }
    }))
})