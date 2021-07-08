import React from "react";
import styles from "../styles/Transaction.module.css";
import useTransactionData from "../hooks/useTransactionData";

const TransactionList = () => {
  const { data } = useTransactionData();

  return (
    <ul className={styles.ul}>
      <div className={styles.transactionHeaders}>
        <p>Price</p>
        <p>Amount</p>
        <p>Points Issued</p>
      </div>
      <hr />
      {data.map((transaction, index) => {
        return (
          <React.Fragment key={index}>
            <li className={styles.li}>
              <p className={styles.transactionText}>{transaction.date}</p>
              <p className={styles.transactionText}>{transaction.amount}</p>
              <p className={styles.transactionText}>{transaction.points}</p>
            </li>
            <hr />
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default TransactionList;
