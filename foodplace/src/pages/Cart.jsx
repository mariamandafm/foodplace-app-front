import { Header } from "../components/Header";
import { useState } from "react";
import { CartProgressBar } from "../components/CartProgressBar.jsx";
import { CartPage } from "../components/CartPage.jsx"
import { AddressPage } from "../components/AddressPage.jsx";
import { ConfirmationPage } from "../components/ConfirmationPage.jsx";

export function Cart() {
  const [page, setPage] = useState("cartPage");
  const [orderInfo, setOrderInfo] = useState({
    order: {},
    address: {}
  });

  const nextPage = (page) => {
    setPage(page);
  };

  return (
    <>
      <Header />
      <section id="cart d-flex align-items-center">
        <div className="container pt-5">
          <div className="pb-5">
            <CartProgressBar page={page} />
          </div>
          {
            {
              cartPage: <CartPage onButtonClick={nextPage} setOrderInfo={setOrderInfo}/>,
              addressPage: <AddressPage onButtonClick={nextPage} setOrderInfo={setOrderInfo}/>,
              confirmationPage: <ConfirmationPage onButtonClick={nextPage}  orderInfo={orderInfo}/>
            }[page]
          }
        </div>
      </section>
    </>
  );
}
