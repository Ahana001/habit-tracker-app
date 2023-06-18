import "./ArchiveHabitPage.css";

import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { color } from "../../style";
import { HabitCard } from "../../Component/HabitCard/HabitCard";
import { Link } from "react-router-dom";

export function ArchiveHabitPage() {
  const { state } = useContext(DataContext);
  const filterArchieveHabits = state.habits.filter((habit) => habit.isArchive);
  return (
    <div>
      <Link className="GoToBackLink" to="/">
        {" "}
        GO TO HOME
      </Link>

      <h2>Archive Habits</h2>
      <ul>
        {filterArchieveHabits.map((habit) => {
          let randomValue = color[Math.floor(Math.random() * color.length)];
          return (
            <li
              style={{
                backgroundColor: randomValue.lightColor,
                color: randomValue.darkColor,
              }}
              key={habit.id}
            >
              <HabitCard habit={habit} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
