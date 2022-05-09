document.addEventListener('alpine:init', () => {
    const error = document.querySelector('.checkout-text')
    Alpine.data('pizzas', () => ({
        smallCount: 0,
        medCount: 0,
        largeCount: 0,
        smallPrice: 48.99,
        medPrice: 78.99,
        largePrice: 114.99,
        tendered: '',
        cartCount: 0,
        feedbackText: '',
        addSmall(){
            this.smallCount++
            this.cartCount++
        },
        addMed(){
            this.medCount++
            this.cartCount++
        },
        addLarge(){
            this.largeCount++
            this.cartCount++
        },
        removeSmall(){
            this.smallCount--
            this.cartCount--
        },

        removeMed(){
            this.medCount--
            this.cartCount--
        },

        removeLarge(){
            this.largeCount--
            this.cartCount--
        },


        getSmallTotal(){
            let total = this.smallCount * this.smallPrice
            return total
        },
        getMedTotal(){
            let total = this.medCount * this.medPrice
            return total
        },
        getLargeTotal(){
            let total = this.largeCount * this.largePrice
            return total
        },

        getTotal(){
            let total = this.getSmallTotal() + this.getMedTotal() + this.getLargeTotal()
            return total
        },

        checkout(){
            if(this.getTotal() > parseFloat(this.tendered)){
                this.feedbackText = 'Insufficient funds'
            }else if(this.getTotal() <= parseFloat(this.tendered)){
                this.feedbackText = 'Successful purchase'
                this.smallCount = 0
                this.medCount = 0
                this.largeCount = 0
                this.tendered = ''
                this.cartCount = 0
            }else if(this.tendered === ''){
                this.feedbackText = 'Please put in tendered amount'
            }
            setTimeout(() => {
                this.feedbackText = ''
            }, 3000);
        },

        getFeedbackText(){
            return this.feedbackText
        }
    }))
})