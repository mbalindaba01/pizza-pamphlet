document.addEventListener('alpine:init', () => {
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
                console.log('it is working')
                this.feedbackText = 'Successful purchase'
            }else if(this.tendered === ''){
                this.feedbackText = 'Please put in tendered amount'
            }else{
                this.smallCount = 0
                this.medCount = 0
                this.largeCount = 0
                this.tendered = ''
                this.cartCount = 0
                this.feedbackText = 'Successful Purchase'
            }
        },

        getFeedbackText(){
            return this.feedbackText
        }
    }))
})