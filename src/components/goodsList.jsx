import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return 
        <h3>Not found</h3>;
        <div class="progress">
            <div class="indeterminate"></div>
        </div>
    }

    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodsItem key={item.imbdID} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}

export { GoodsList };