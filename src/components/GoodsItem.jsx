function GoodsItem(props) {
    const { id, name, description, price, full_background, addToBasket = Function.prototype, } = props;

    const defaultImage = 'https://sun9-39.userapi.com/impg/iAihgdPuIwoFe2sTXQexzxtAo-o-toKdFpVNyg/lh8god1e2_A.jpg?size=900x900&quality=96&sign=13655807574dc731c37390bff1574858&c_uniq_tag=z5gvGWcfWlKTFkP46BRPLBLw_sSySbhPRXinAS8rMJg&type=album';

    const handleImageError = (event) => {
        event.target.src = defaultImage;
    };
    
    return (
        <div className="card" id={id}>
            <div className="card-image">
                <div className="emote">
                    <img className="image-box" src={full_background} onError={handleImageError} alt={name}/>
                </div>
                <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
                {description ? <p>{description}</p> : <p>Описание отсутствует</p>}
            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addToBasket({id, name, price,})}>Купить</button>
                <span className="price">{price} V</span>
            </div>
        </div>
    );
}

export { GoodsItem };