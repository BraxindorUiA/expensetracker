import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "scooter forsikring",
      amount: 186,
      date: new Date(2021, 8, 28),
    },
    {
      id: "e2",
      title: "Scooter innkjøp",
      amount: 2000,
      date: new Date(2021, 6, 12),
    },
    {
      id: "e3",
      title: "Hjelm",
      amount: 3499,
      date: new Date(2021, 6, 15),
    },
    {
      id: "e4",
      title: "Bensin",
      amount: 94,
      date: new Date(2021, 9, 27),
    },
  ];

  return (
    <div>
      <h1>Expense Trackr</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
