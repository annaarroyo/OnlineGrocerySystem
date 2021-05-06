import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Celery",
                "src": "https://images.squarespace-cdn.com/content/v1/595d2dd378d171b665fd870d/1506694801054-2DUKOSAQXGP746JCQFLD/ke17ZwdGBToddI8pDm48kBbdSUIHrnfszC0Uv-s6NXNZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGho-jSmQAPWn94Nvix4OSMAOlmV6QajS_lhzTPq6JK5e3fdiwvU2dIXnCeUs0K4JU/celery+cuts.jpg",
                "description": "Green and stringy",
                //"content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 5,
                //"colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Potatoes",
                "src": "https://assets.bonappetit.com/photos/5d7284758d926f0009df5cfc/3:2/w_3798,h_2532,c_limit/Basically-Gojuchang-Chicken-Potato.jpg",
                "description": "UI/UX designing, html css tutorials",
                //"content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 19,
                //"colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Carrots",
                "src": "https://www.irishtimes.com/polopoly_fs/1.3818057.1551977600!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg",
                "description": "UI/UX designing, html css tutorials",
                //"content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 50,
                //"colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Steak",
                "src": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Cut_up_steak.jpg",
                "description": "UI/UX designing, html css tutorials",
                //"content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 15,
                //"colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Milk",
                "src": "https://images.squarespace-cdn.com/content/v1/5c1a75dfb27e393e602f4778/1592238775580-2MABECW5PV97PQVCZLJO/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oVSXdFfjxR5AjcLwGSebOiGBsFzzcw3xKxvyC_6CFFG_/Milk+Gallon.jpg?format=2500w",
                "description": "UI/UX designing, html css tutorials",
                //"content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 10,
                //"colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Grapes",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
                "description": "UI/UX designing, html css tutorials",
                //"content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                //"colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Fish",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
                "description": "UI/UX designing, html css tutorials",
                //"content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                //"colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Chips",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
                "description": "UI/UX designing, html css tutorials",
                //"content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                //"colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "Lettuce",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
                "description": "UI/UX designing, html css tutorials",
                //"content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                //"colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "10",
                "title": "Cheese",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
                "description": "UI/UX designing, html css tutorials",
                //"content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                //"colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0

    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }

    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };

    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }


    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider
                value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}