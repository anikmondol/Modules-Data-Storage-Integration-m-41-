

const Watch = ({watch}) => {
    const {name, price, brand} = watch;
    return (
        <div>
            <h2>Watch: {name}</h2>
            <h3>Brand: {brand}</h3>
            <p>Price: {price}</p>
        </div>
    );
};

export default Watch;