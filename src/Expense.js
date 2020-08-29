import React, { useState, useEffect } from "react";
import "./Expense.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Expense() {
  const [description, setDescription] = useState("");
  const [incomeDescription, setIncomeDescription] = useState([]);
  const [expenseDescription, setExpenseDescription] = useState([]);
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [incomeAmount, setIncomeAmount] = useState([]);
  const [expenseAmount, setExpenseAmount] = useState([]);

  const addToIncome = (e) => {
    e.preventDefault();
    let newAmount = parseInt(amount);
    let newIncomeAmount = incomeAmount.map(Number);
    setIncomeAmount([...newIncomeAmount, amount]);
    setIncomeDescription([...incomeDescription, description]);
    let result = newIncomeAmount.reduce(
      (sum, current) => sum + current,
      newAmount
    );
    setIncomeTotal(result);
    setAmount("");
    setDescription("");
  };

  const addToExpense = (e) => {
    e.preventDefault();
    let newAmount = parseInt(amount);
    let newExpenseAmount = expenseAmount.map(Number);
    setExpenseAmount([...newExpenseAmount, amount]);
    setExpenseDescription([...expenseDescription, description]);
    let result = newExpenseAmount.reduce(
      (sum, current) => sum + current,
      newAmount
    );
    setExpenseTotal(result);
    setAmount("");
    setDescription("");
  };

  useEffect(() => {
    setTotal(incomeTotal - expenseTotal);
  }, [incomeTotal, expenseTotal]);

  return (
    <div className="expense">
      <div className="expense-header">
        <div className="expense-headerText">
          <h1>{total}</h1>
          <div className="expense-headerTextIncome">
            <h4>Income</h4>
            <p>+ {incomeTotal}</p>
          </div>
          <div className="expense-headerTextExpense">
            <h4>Expense</h4>
            <p>- {expenseTotal}</p>
          </div>
        </div>
      </div>
      <div className="expense-body">
        <div className="expense-bodyValues">
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="expense-bodyValuesInput1"
            type="text"
            placeholder="Add description"
          />
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="expense-bodyValuesInput2"
            type="text"
            placeholder="Value"
          />
          <AddIcon onClick={addToIncome} className="buttonPlus" />
          <RemoveIcon onClick={addToExpense} className="buttonMinus" />
        </div>
        <div className="expense-bodyOutput">
          <div className="expense-bodyOutputIncome">
            <h1>Income</h1>
            <div className="expense-bodyOutputIncomeWrapper">
              <div className="expense-bodyOutputIncomeDesc">
                {incomeDescription.map((idesc) => (
                  <h3 className="expense-bodyOutputIncomeNumberElements">
                    <strong>{idesc}</strong>
                  </h3>
                ))}
              </div>
              <div className="expense-bodyOutputIncomeNumber">
                {incomeAmount.map((iamount) => (
                  <p className="expense-bodyOutputIncomeNumberElements">
                    {iamount}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="expense-bodyOutputExpense">
            <h1>Expense</h1>
            <div className="expense-bodyOutputExpenseWrapper">
              <div className="expense-bodyOutputExpenseDesc">
                {expenseDescription.map((edesc) => (
                  <h3 className="expense-bodyOutputExpenseNumberElements">
                    <strong>{edesc}</strong>
                  </h3>
                ))}
              </div>
              <div className="expense-bodyOutputExpenseNumber">
                {expenseAmount.map((eamount) => (
                  <p className="expense-bodyOutputExpenseNumberElements">
                    {eamount}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
