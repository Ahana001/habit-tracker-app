import { useContext, useState } from "react";
import "./HomePage.css";
import { DisplayContext } from "../../Context/DisplayContext";
import { HabitForm } from "../../Component/HabitForm/HabitForm";
import { DataContext } from "../../Context/DataContext";
import { color } from "../../style";
import { HabitCard } from "../../Component/HabitCard/HabitCard";
import { Link } from "react-router-dom";

export function HomePage() {
  const { toggleDialogBox, setToggleDialogBox } = useContext(DisplayContext);
  const { state } = useContext(DataContext);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    repeat: "Once",
    goal: "1 times",
    time: "Any Time",
    date: "Today",
  });
  const removeArchiveHabits = state.habits.filter((habit) => !habit.isArchive);
  if (!state.habits) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="HomePageContainer">
      <button
        className="AddHabitButton"
        onClick={() => {
          setFormData(() => ({
            id: "",
            name: "",
            repeat: "Once",
            goal: "1 times",
            time: "Any Time",
            date: "Today",
          }));
          setToggleDialogBox(() => !toggleDialogBox);
        }}
      >
        Add Habit
      </button>
      <Link className="HomePageGoToArchiveLink" to={"/archive"}>
        GO TO ARCHIEVE PAGE
      </Link>
      <div className="Heading">Habits</div>

      {removeArchiveHabits.length === 0 ? (
        <div className="NoHabites">No Habits Here</div>
      ) : (
        <div className="HabitListContainer">
          <ul>
            {removeArchiveHabits.map((habit) => {
              let randomValue = color[Math.floor(Math.random() * color.length)];
              return (
                <li
                  style={{
                    backgroundColor: randomValue.lightColor,
                    color: randomValue.darkColor,
                  }}
                  key={habit.id}
                >
                  <HabitCard habit={habit} setFormData={setFormData} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <HabitForm formData={formData} setFormData={setFormData} />
    </div>
  );
}
