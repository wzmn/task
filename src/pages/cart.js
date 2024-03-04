import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Cart() {
    const [subTotal, setSubtotal] = useState(2800);
    const [items, setItems] = ([
        {
            title: "Business Starter Pack",
            price: 1299,
            quantity: 1,
        },
        {
            title: "Digital Marketing Starter Pack",
            price: 1499,
            quantity: 1,
        },
    ])
    function redeem(){
        if (subTotal - 1249 > 0) {
            setSubtotal(subTotal - 1249)

        }
    }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vxceed - Cart</title>
      </Helmet>
      <div className="container mx-auto mb-10 px-4">
        <div
          className="min-h-[60vh] flex justify-center items-start flex-col px-10 text-center"
          style={{
            backgroundImage: "url(./cart.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div className="text-3xl sm:text-6xl text-center mb-8 font-semibold">
            Your <br />
            Cart
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-10 px-4">
        <div className="flex gap-x-4 items-start flex-col md:flex-row">
          <div className="flex-1 flex flex-col">
            <div className="flex items-center border rounded mb-5 px-4 border-gray-200 py-4 relative">
              <div className="w-1/4">
                <img
                  src={"https://placehold.co/600x400"}
                  alt={"[product.name]"}
                  className="w-full"
                />
              </div>
              <div className="w-3/4 pl-4">
                <h3 className="text-lg font-semibold mb-2">
                  Business Starter Pack
                </h3>
                <p className="text-gray-600 mb-2">$1400</p>
                <div className="flex items-center mb-2">
                  <label htmlFor="quantity" className="mr-2">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={1}
                    min="1"
                    onChange={(e) => console.log("do nothing")}
                    className="w-16 border border-gray-300 rounded px-2 py-1"
                  />
                </div>
                <button
                  className="text-red-500 font-semibold hover:text-red-600 absolute bottom-[15px] right-[15px]"
                  onClick={() => console.log("do nothing")}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="flex items-center border rounded mb-5 px-4 border-gray-200 py-4 relative">
              <div className="w-1/4">
                <img
                  src={"https://placehold.co/600x400"}
                  alt={"[product.name]"}
                  className="w-full"
                />
              </div>
              <div className="w-3/4 pl-4">
                <h3 className="text-lg font-semibold mb-2">
                  Digital Marketing Starter Pack
                </h3>
                <p className="text-gray-600 mb-2">$1200</p>
                <div className="flex items-center mb-2">
                  <label htmlFor="quantity" className="mr-2">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    value={1}
                    id="quantity"
                    name="quantity"
                    min="1"
                    onChange={(e) => console.log("do nothing")}
                    className="w-16 border border-gray-300 rounded px-2 py-1"
                  />
                </div>
                <button
                  className="text-red-500 font-semibold hover:text-red-600 absolute bottom-[15px] right-[15px]"
                  onClick={() => console.log("do nothing")}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="min-w-full md:min-w-96 bg-gray-200 rounded p-4">
            <div className="font-bold text-2xl mb-4">Order summary</div>
            <div className="mb-4">2 items</div>
            <div className="flex justify-between mb-2 py-2 ">
              <div className="flex flex-col">
                <div className="mr-2 mb-2 ">Avaialble points:</div>
                <span className="bg-gray-300 px-4 rounded text-center cursor-pointer border-emerald-600 border" onClick={redeem}>Redeem</span>
              </div>
              <div className="font-semibold">12490</div>
            </div>
            <hr className="border-gray-400" />
            <div className="flex justify-between py-2 font-semibold">
              <div>Subtotal</div>
              <div>${subTotal}</div>
            </div>
            <div className="text-xs text-center mb-1">
              You will earn {subTotal / 10} points for this purchase
            </div>
            {/* <div className="text-xs text-center mb-1">
              Subtotal does not include applicable taxes
            </div> */}
            <div className="text-center mb-4">Have a promo code?</div>
            <div className="mb-4">
              <div className="flex items-center">
                <input type="text" className="p-2 border flex-1 rounded-none" />
                <span className="bg-gray-600 text-white p-2">Apply</span>
              </div>
            </div>
            <div className="flex mb-4">
              <a
                href="#"
                className="p-2 bg-black text-white text-center w-full"
              >
                I'm ready to pay
              </a>
            </div>
            <div className="flex justify-between md:flex-row flex-col">
                <div className="font-bold mb-2">Secure payment</div>
              <div className="flex">
                <img
                  height="25"
                  width="37"
                  className="mr-1 fs-unmask"
                  alt="visa"
                  src="https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#visa"
                />
                <img
                  height="25"
                  width="37"
                  className="mr-1 fs-unmask"
                  alt=" mastercard"
                  src="https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#mastercard"
                />
                <img
                  height="25"
                  width="37"
                  className="mr-1 fs-unmask"
                  alt=" amex"
                  src="https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#amex"
                />
                <img
                  height="25"
                  width="37"
                  className="mr-1 fs-unmask"
                  alt=" rupay"
                  src="https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#rupay"
                />
                <img
                  height="25"
                  width="37"
                  className="mr-1 fs-unmask"
                  alt=" maestro"
                  src="https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#maestro"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
