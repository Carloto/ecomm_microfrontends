import { mount as mountProducts } from 'products/ProductsIndex'
import { mount as mountCart } from 'cart/CartShow'

console.log('container');

mountProducts(document.querySelector('#container-products'));
mountCart(document.querySelector('#container-cart'));