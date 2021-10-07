import Expenses from "./Components/Expenses";

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
      <h1>Expense Tracker</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
