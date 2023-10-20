
let app = Vue.createApp({

    data() {
        return {
            showSidebar: true,
            
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
            price: {
          carrots: .25,
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
            this.sidebarVisible(1)
        console.log(this.cart)
        }
        ,
        addit(num) {
            this.mynum =+num
        },
        sidebarVisible(state) {
            this.showSidebar = state
            //this.showSidebar = true
            if (state)
                console.log(state)
            else
                console.log(state)
        }
    }
})
  
app.component('sidebar', {
  props: ['toggle', 'cart', 'price' ], //toggle is a property that passes the function to show/hide the cart into the component.
    template: `
  <aside class="cart-container">
  <div class="cart">
    <h1 class="cart-title spread">
      <span>
        Cart
        <i class="icofont-cart-alt icofont-1x"></i>
      </span>
   
    <button @click="toggle(0)" class="cart-close">&times;</button>
    </h1>

    <div class="cart-body">
      <table class="cart-table">
        <thead>
          <tr>
            <th><span class="sr-only">Product Image</span></th>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th><span class="sr-only">Actions</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><i class="icofont-carrot icofont-3x"></i></td>
            <td>Carrot</td>
            <td>$ {{price.carrots}}</td>
            <td class="center">{{cart.carrots}}</td>
            <td>$$ {{ parseFloat(cart.carrots * price.carrots).toFixed(2)}}</td>
            <td class="center">
              <button class="btn btn-light cart-remove">
                &times;
              </button>
            </td>                  
          </tr>
          num: {{cart.carrots}}
        </tbody>
      </table>           
      <p class="center"><em>No items in cart</em></p>
      <div class="spread">
        <span><strong>Total:</strong> $1.00</span>
        <button class="btn btn-light">Checkout</button>           
      </div>
    </div>
  </div>
</aside>
`  
  })

  app.mount('#app')