import { Header, Footer } from "../../components";
import "../MultiSelect/MultiSelect.css";
import React, { useEffect, useState } from "react";
import Select from "react-select";

function MultiSelect() {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) =>
        setOptions(data.map((u) => ({ value: u.id, label: u.name })))
      )
      .catch((err) => console.error("Помилка завантаження:", err));
  }, []);
  return (
    <>
      <div>
        <Header />
        <div className="app-container">
          <div className="card">
            <h2>Вибір користувачів</h2>
            <Select
              isMulti
              options={options}
              value={selected}
              onChange={setSelected}
              placeholder="Оберіть користувачів..."
            />

            <div className="selected-list">
              <h3>Обрано:</h3>
              {selected.length === 0 ? (
                <p className="empty">Нікого не вибрано</p>
              ) : (
                <ul>
                  {selected.map((u) => (
                    <li key={u.value}>{u.label}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MultiSelect;
