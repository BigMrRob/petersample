import React from "react";

const InfoHeader = () => {
  return (
    <div>
      <br />
      <hr />
      <h4>
        Refresh the page to be given a full new set. The useTransactionHook as
        well as the randomDate function located in Utils/Common are given
        default values, but they can be passed any values for any number of
        transactions, or any start/end date. Defaulting to starting today and
        ending 3 months later as well as 100 transactions.
      </h4>
      <hr />
      <h1>Transactions</h1>
      <br />
    </div>
  );
};

export default InfoHeader;
