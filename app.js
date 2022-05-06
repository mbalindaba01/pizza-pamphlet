console.log('it is working')
document.addEventListener('alpine:init', () => {
    Alpine.data('pizzas', () => ({
        smallCount: 0,
        medCount: 0,
        largeCount: 0,
        smallPrice: 48.99,
        medPrice: 78.99,
        largePrice: 114.99,
        tendered: '',
        addSmall(){
            this.smallCount++
        },
        addMed(){
            this.medCount++
        },
        addLarge(){
            this.largeCount++
        },
        removeSmall(){
            this.smallCount--
        },

        removeMed(){
            this.medCount--
        },

        removeLarge(){
            this.largeCount--
        },


        getSmallTotal(){
            return this.smallCount * this.smallPrice
        },
        getMedTotal(){
            return this.medCount * this.medPrice
        },
        getLargeTotal(){
            return this.largeCount * this.largePrice
        },

        getTotal(){
            let total = this.getSmallTotal() + this.getMedTotal() + this.getLargeTotal()
            return total.toFixed(2)
        },

        feedbackText(){
            if(this.getTotal() > parseFloat(this.tendered)){
                return 'Insufficient funds'
            }else if(this.getTotal() <= parseFloat(this.tendered)){
                return 'Funds are enough. Let\'s checkout'
            }
        },

        checkout(){
            this.smallCount = 0
            this.medCount = 0
            this.largeCount = 0
            window.alert('Successful Purchase')
        }
    }))
})