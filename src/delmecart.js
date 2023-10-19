let app = Vue.createApp({
    data() {
      return {
        inventory: {
          carrots: 0,
          pineapples: 0,
          cherries: 0
        },
        cart: {
          carrots: 0,
          pineapples: 0,
          cherries: 0
          },
          things:[
              {thing:10,mynum:100},
              { thing: 20, mynum: 200 },
              {thing:30,mynum:300}
          ],
          testnum:111
      }
    },
    methods: {
      addToCart(type) {
        this.cart[type] += this.inventory[type]
        console.log(this.cart)
        }
        ,
        addit(num) {
            this.mynum =+num
        }
    }
})
  

app.component('cart-items', {
  template: `

    `
  })


  app.mount('#app')