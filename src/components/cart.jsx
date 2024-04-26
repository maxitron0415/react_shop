import cart from '../img//cart-svgrepo-com.svg';

function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div className='cart'>
            {quantity ? <span className='quant-text'>{quantity}</span> : null}
            <img className='cart-img' src={cart} onClick={handleBasketShow}/>
            
        </div>
    );
}

export { Cart };