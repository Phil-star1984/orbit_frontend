import calcArbitraryPrice from "../../../utility/calcArbetraryPrice.jsx";
import CartGame from "./CartGame.jsx";
calcArbitraryPrice;

const CartGameList = ({ games }) => {
  return (
    <div className="text-white w-2/3 flex flex-col gap-2">
      {games.length ? (
        games.map((game) => {
          const arbitraryPrice = calcArbitraryPrice(game.id);
          return (
            <CartGame
              key={game.id}
              id={game.id}
              title={game.name}
              imageSrc={game.background_image}
              price={arbitraryPrice}
            />
          );
        })
      ) : (
        <h2>No games in cart</h2>
      )}
    </div>
  );
};

export default CartGameList;
