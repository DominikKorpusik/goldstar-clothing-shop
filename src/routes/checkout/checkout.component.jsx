import { Fragment } from "react";
import CheckoutTable from "../../components/checkout-table/checkout-table.component";
import TotalPayment from "../../components/total-payment/total-payment.component";

export const Checkout = () => {
  return (
    <Fragment>
      <CheckoutTable />
      <TotalPayment />
    </Fragment>
  );
};

export default Checkout;
