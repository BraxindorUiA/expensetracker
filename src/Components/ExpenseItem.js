import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>29. juni 2021</div>
      <div className="expense-item__description">
        <h2>Scooter forsikring</h2>
        <div className="expense-item__price">178 kroner</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
