import "./HabitCard.css";

import { useContext } from "react";
import { ActionTypes } from "../../Reducer/DataReducer";
import { DataContext } from "../../Context/DataContext";
import { DisplayContext } from "../../Context/DisplayContext";
import { useLocation, Link } from "react-router-dom";

export function HabitCard({ habit, setFormData }) {
  const location = useLocation();
  const { dispatch } = useContext(DataContext);
  const { setToggleDialogBox, setCurrentHabit } = useContext(DisplayContext);

  return (
    <div
      onClick={() => {
        setToggleDialogBox(() => true);
        setCurrentHabit(() => habit);
      }}
    >
      <div
        style={{
          display: location.pathname === "/archive" ? "none" : "flex",
        }}
        className="ActionButton"
      >
        <div>
          <button
            onClick={() => {
              dispatch({
                type: ActionTypes.REMOVE_HABIT,
                payload: {
                  habit: habit,
                },
              });
            }}
          >
            DELETE
          </button>
        </div>
        <div>
          {habit.isArchive ? (
            <Link className="GoToArchiveLink" to={"/archive"}>
              ALREADY ARCHIVED
            </Link>
          ) : (
            <button
              disabled={habit.isArchive}
              onClick={() => {
                dispatch({
                  type: ActionTypes.ARCHIVE_HABIT,
                  payload: {
                    habit: habit,
                  },
                });
              }}
            >
              {" "}
              ARCHIVE
            </button>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              setFormData(() => habit);
              setToggleDialogBox(() => true);
            }}
          >
            EDIT
          </button>
        </div>
      </div>

      <h2>{habit.name}</h2>
    </div>
  );
}
