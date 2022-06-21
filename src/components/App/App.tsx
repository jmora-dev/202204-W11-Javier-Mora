import GentlemanList from "../GentlemanList/GentlemanList";

import "../css/styles.css";

export default function App() {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <main className="main">
        <GentlemanList />
      </main>
    </div>
  );
}
