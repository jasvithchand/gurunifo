import "./displaystyles.css";
import { useState } from "react";

const people = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg"
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPeople = people.filter(
    (person) =>
      person.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleSearchChange} />

      {filteredPeople.map((person) => (
        <div key={person.id} style={{ display: "flex", alignItems: "center" }}>
          <img
            src={person.imageUrl}
            alt={person.firstName}
            width="150"
            height="150"
            style={{ marginRight: 10 }}
          />
          <div>
            <div>
              {person.firstName} {person.lastName}
            </div>
            <div>
              <button>View More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
