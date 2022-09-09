const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            // Solution
            description: 'A warm fuzzy pair of socks.' ,
            // Solution
            image : './assets/images/socks_blue.jpg',
            
           /*  url : 'https://www.w3schools.com/js/', */
             inStock : false, 
             details: ['50% cotton', '30% wool', '20% polyester'],
             variants: [
                { id: 2234, color: 'green',image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue',image:'./assets/images/socks_blue.jpg'},
              ],
              sizes:['s','xs','xl', 'xxl','L'],
              

           /*  inventory : 100,
            onSale : true */
            
        }
    }
,

methods: {
    addToCart() {
        this.cart += 1
    },
    removeFromCart(){
        if(this.cart >=1)
        this.cart -= 1
    },
    updateImage(variantImage) {
        this.image = variantImage
    }
}
})