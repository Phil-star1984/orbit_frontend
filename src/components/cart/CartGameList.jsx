import calcArbitraryPrice from "../../../utility/calcArbetraryPrice.jsx";
import CartGame from "./CartGame.jsx";
calcArbitraryPrice;

const CartGameList = ({ games }) => {
  return (
    <div className="text-white w-2/3 flex flex-col gap-2">
      {games.map((game, index) => {
        const arbitraryPrice = calcArbitraryPrice(game.id);
        return (
          <CartGame
            key={index}
            id={game.id}
            title={game.name}
            imageSrc={game.background_image}
            price={arbitraryPrice}
          />
        );
      })}
    </div>
  );
};

export default CartGameList;
