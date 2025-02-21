import { useState } from "react";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Counter from "./Components/Counter";
import "./App.css";

function App() {
  const users = [
    {
      name: "Mercy Kabingu",
      email: "mercykabingu@gmail.com",
      institution: "Kirinyaga University",
      course: "Bsc software engineering",
    },
    {
      name: "Mark Tyson",
      email: "mark@gmail.com",
      institution: "Kisii University",
      course: "Bsc computer science",
    },
    {
      name: "James Muchema",
      email: "mercykabingu@gmail.com",
      institution: "Maseno University",
      course: "Bsc software engineering",
    },
    {
      name: "Jane Muthoni",
      email: "mark@gmail.com",
      institution: "Kisii University",
      course: "Bsc computer science",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 w-full p-12 text-center">
        <Header />

        <div className="item-center p-6 flex flex-wrap justify-center">
          {users.map((user) => (
            <Profile
              name={user.name}
              email={user.email}
              institution={user.institution}
              course={user.course}
            />
          ))}
        </div>
        <Counter />
        
      </div>
    </>
  );
}

export default App;
