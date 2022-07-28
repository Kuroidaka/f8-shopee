$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

const avatar = $('.header_user');
const loginBtn = $('.jsLoginBtn');
const registerBtn = $('.jsRegisterBtn');
const loginForm = $('.modal_login');
const registerForm = $('.modal_register');
const returnBtns = $$('.jsReturnBtn');
const modalBodys = $$('.modal_overlay');
const loginBtnInForms = $$('.authem-login');
const registerBtnInForms = $$('.authem-register');




const app = {
    isRegister: false,
    isLogin: false,
    Products: [
        {
            name: 'Apple watch',
            image: 'https://dienthoaigiakho.vn/_next/image?url=https%3A%2F%2Fcdn.dienthoaigiakho.vn%2Fphotos%2F1650873073116-aw3-gps-gr-new.jpg&w=768&q=100',
            oldPrice: 'đ18.000.000',
            newPrice: 'đ12.000.000',
            sold: '150k',
            local: 'TP HCM',
            liked: 'active',
            storage: 'true'
        },
        {
            name: 'Iphone 12',
            image: './assets/img/Cart/apple-iphone-12-256gb-blue.png',
            oldPrice: 'đ25.000.000',
            newPrice: 'đ16.000.000',
            sold: '80k',
            local: 'Hà Nội',
            storage: 'true'
        },
        {
            name: 'Ốp lưng Iphone',
            image: 'https://hatocase.com/wp-content/uploads/2021/09/op-lung-the-xanh-op-lung-the-thong-tin-covid_02.jpg',
            oldPrice: 'đ2.500.000',
            newPrice: 'đ1.200.000',
            sold: '10k',
            local: 'TP HCM',
            liked: 'active',
            storage: 'true'
        },
        {
            name: 'Giày bóng rổ Curry 9 - Tích hợp Zoom, Air chuẩn, Full box, tem mác, giấy gói',
            image: 'https://cf.shopee.vn/file/73dd057ae89178a854e68af855f363ba',
            oldPrice: 'đ2.500.000',
            newPrice: '₫900.000',
            sold: '10k',
            local: 'TP HCM',
            liked: 'active',
            storage: 'true'
        },
        {
            name: 'Giày bóng rổ ( lebron james 13 galaxy)',
            image: ' https://cf.shopee.vn/file/3bd32c342eb5d9d9f35a247401a560ad',
            newPrice: '₫420.000',
            sold: '137',
            local: 'Nước ngoài',
            storage: 'true'
        },
        {
            name: 'Giày bóng rổ NBA All Star Lebron James 15 cao cấp size 36-45',
            image: 'https://cf.shopee.vn/file/553635c1a367d5424fbd19595a7fbe69',
            oldPrice: 'đ800.000',
            newPrice: '₫400.000',
            sold: '126',
            local: 'Nước ngoài',
            // storage: 'true'
            // star: '3'
        },


    ],
    activeAuthemForm: function() {
        if(this.isLogin){
            loginForm.classList.add('active');
            registerForm.classList.remove('active');

        }
        if(this.isRegister){
            loginForm.classList.remove('active');
            registerForm.classList.add('active');

            
        }
    },
    switchAuthemForm: function() {
        if(this.isLogin || this.isRegister){
            loginForm.classList.toggle('active');
            registerForm.classList.toggle('active');

        }
    },
    closeAuthemForm: function() {
            this.isLogin = false;
            loginForm.classList.remove('active');
            this.isRegister = false;
            registerForm.classList.remove('active');
    
        
    },
    handleEvent: function () {
        const _this = this;
        //  login btn click  
        loginBtn.onclick = function() {
            _this.isLogin = true;
  
            _this.activeAuthemForm();
        }

        //  register btn click  
        registerBtn.onclick = function() {
            _this.isRegister = true;
     
            _this.activeAuthemForm();
        }
  // close 
        // khi bấm nút trở lại => close modal
        returnBtns.forEach(function(returnBtn) {

            returnBtn.onclick = function() {
                // console.log(123);
                _this.closeAuthemForm();

            }
        }
        )
        
        modalBodys.forEach(function(modalBody) {
            modalBody.addEventListener('click',function() {
              
                _this.closeAuthemForm();
            });
        })
        
        //switch form 


        loginBtnInForms.forEach(function(loginBtnInForm) {
            loginBtnInForm.onclick = function() {
                
                console.log(123);
                _this.switchAuthemForm();
            }
        })
       

      

        

    },
    render: function () {
        // const stars = $$('.fa-solid.fa-star');

        const htmls = this.Products.map(function (product) {
            return`
            <div class="grid-column-2 ">
    
            <div class="shopee_product_items-stuff">
                <a class="shopee_product_items-wrap" href="#">
                    <div class="label_like-form ${product.liked}">
                        <p>Yêu thích</p>
                       
                    </div>
                    <div class="shopee_product_items_img">
                        <div class="shopee_product_items_product-img" style="background-image: url(${product.image})"></div>
                    </div>

                    <div class="shopee_product_items-name">
                        ${product.name}
                    </div>

                    <div class="shopee_product_items_price">
                        <span class="shopee_product_items_price-old ${product.oldPrice ? `mr-10` : ''}">
                            ${product.oldPrice ? product.oldPrice : ''}
                        </span>
                        <span class="shopee_product_items_price-new">
                        ${product.newPrice}
                        </span>
                    </div>

                    <div class="shopee_product_items-action">
                        <!-- <div class="shopee_product_items-heart">
                      
                            <i class="fa-solid fa-heart"></i>
                        </div> -->


                        <div class="shopee_product_items-star shopee_product_items-star-gold">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                             


                        </div>

                        <div class="shopee_product_items-sold">
                            Đã bán ${product.sold} 
                        </div>
                    </div>

                   
                    

                    <div class="shopee_product_items-locate">
                    ${product.local}
                    </div>
                </a>

            </div>

        </div>                                                  
        `
        })

        
        // console.log(htmls);
        $('.JsGridRow').innerHTML = htmls.join(''); 
    },
    renderCart: function() {

        const htmlCart = this.Products.map(function (cartProduct) {
            
            if(cartProduct.storage){
            return `
            <li class="header_cart-list-stuff">
            <img src="${cartProduct.image}" alt="" class="header_cart_stuff_img">

            <span class="header_cart_stuff-info">
                <span class="header_cart_stuff-head">
                 <span class="header_cart_stuff-name">${cartProduct.name}</span>
                 <span class="header_cart_stuff-cost">${cartProduct.newPrice}</span>

                </span>

                <!-- <span class="header_cart_stuff-describe">
                    <span class="header_cart_stuff-text">thiết bị di động của hãng Apple..</span>
                    <span class="header_cart_stuff-remove">xóa</span>
                </span> -->
            </span>

        </li>

            `
        }
        })
        $('.header_cart-list-items').innerHTML = htmlCart.join('');
    },
    cartQuantity: function() {
        var quantity = 0;
        const htmlCart = this.Products.map(function (cartProduct) {
            if(cartProduct.storage) 
            quantity++;
        })
        console.log(quantity);
        $('.header_cart_stock').innerHTML = quantity;

    },
    start: function () {
        this.render();
        this.renderCart();
        this.cartQuantity();
        this.handleEvent();
       
    }

}

app.start();
