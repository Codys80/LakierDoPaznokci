
function Lakier({ setCart, nail }) {

    return (
        <div className="nail">
            <img src={nail.image} />
            <div className='nailInfo'>
                <h3>{nail.name}</h3>
                <p>odcień: {nail.hue}</p>
                <p><b>Cena {nail.price} zł</b></p>
                <p className='nailAd'>{nail.ad}</p>
                <button onClick={() => {
                    setCart((cart) => cart + 1);
                    alert(`Dodano lakier ${nail.name} do koszyka!`);
                }}>
                    Dodaj do koszyka
                </button>
            </div>
        </div>
    )

}

export default Lakier;