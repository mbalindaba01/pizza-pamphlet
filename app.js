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

        feedbackText(){
            if(this.getTotal() > parseFloat(this.tendered)){
                return 'Insufficient funds'
            }else if(this.getTotal() <= parseFloat(this.tendered)){
                return 'Funds are enough. Let\'s checkout'
            }
        },

        checkout(){
            if(this.feedbackText() == 'Insufficient funds'){
                window.alert('Insufficient funds.')
            }else{
                this.smallCount = 0
                this.medCount = 0
                this.largeCount = 0
                this.tendered = ''
                window.alert('Successful Purchase')
            }
            
        }
    }))
})