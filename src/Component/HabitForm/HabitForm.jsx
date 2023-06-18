import "./HabitForm.css";

import { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import "react-calendar/dist/Calendar.css";

import { DisplayContext } from "../../Context/DisplayContext";
import {
  dateOptions,
  goalOption,
  repeatOption,
  timeOptions,
} from "../../constants";
import { DataContext } from "../../Context/DataContext";
import { ActionTypes } from "../../Reducer/DataReducer";

export function HabitForm({ formData, setFormData }) {
  const { toggleDialogBox, setToggleDialogBox } = useContext(DisplayContext);
  const [FormDataError, setFormDataError] = useState("");
  const { dispatch } = useContext(DataContext);

  function validateFormData() {
    let errorFlag = false;

    for (let key in formData) {
      let value = formData[key];
      if (value === "" && key !== "id") {
        errorFlag = true;
        setFormDataError(() => `Empty Value not allow`);
      }
    }
    return errorFlag;
  }
  function SaveHabitHandler() {
    const errorFlag = validateFormData();
    if (!errorFlag) {
      dispatch({
        type: ActionTypes.ADD_HABIT,
        payload: {
          habit: formData,
        },
      });

      setToggleDialogBox(() => false);
      setFormData(() => ({
        id: "",
        name: "",
        repeat: "Once",
        goal: "1 times",
        time: "09:00",
        date: "Today",
      }));
      setFormDataError(() => "");
    }
  }
  function SaveChangesHabitHandler() {
    const errorFlag = validateFormData();
    if (!errorFlag) {
      dispatch({
        type: ActionTypes.EDIT_HABIT,
        payload: {
          habit: formData,
        },
      });

      setToggleDialogBox(() => false);
      setFormData(() => ({
        id: "",
        name: "",
        repeat: "Once",
        goal: "1 times",
        time: "09:00",
        date: "Today",
      }));
      setFormDataError(() => "");
    }
  }
  return (
    <div
      className="ModalPortal"
      style={{ display: toggleDialogBox ? "block" : "none" }}
    >
      <div className="ModalOverlay">
        <div className="ModalPortalContent">
          <div
            className="ModalPortalCloseButton"
            onClick={() => {
              setToggleDialogBox(() => false);
            }}
          >
            <RxCross1 />
          </div>
          <h2>New Habit</h2>
          <label>Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => {
              setFormData(() => ({ ...formData, name: e.target.value }));
            }}
          />
          <div className="RepeatAndGoalContainer">
            <div className="RepeatContainer">
              <div>REPEAT</div>
              <select
                defaultValue={formData.repeat}
                onChange={(e) => {
                  setFormData(() => ({ ...formData, repeat: e.target.value }));
                }}
              >
                {repeatOption.map((option) => {
                  return <option key={option}>{option}</option>;
                })}
              </select>
            </div>
            <div className="GoalContainer">
              <div>GOAL</div>
              <select
                defaultValue={formData.goal}
                onChange={(e) => {
                  setFormData(() => ({ ...formData, goal: e.target.value }));
                }}
              >
                {goalOption.map((option) => {
                  return <option key={option}>{option}</option>;
                })}
              </select>
            </div>
          </div>
          <div>TIME OF DAY</div>
          <div className="TimeContainer">
            <select
              defaultValue={formData.time}
              onChange={(e) => {
                setFormData(() => ({ ...formData, time: e.target.value }));
              }}
            >
              {timeOptions.map((value) => {
                return (
                  <option key={value} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="DateContainer">
            <div>START DATE</div>
            <select
              defaultValue={formData.date}
              onChange={(e) => {
                setFormData(() => ({ ...formData, date: e.target.value }));
              }}
            >
              {dateOptions.map((value) => {
                return (
                  <option key={value} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
            {/* <Calendar
              onChange={(date) => {
                console.log(new Date(date));

                setFormData(() => ({ ...formData, date: date }));
              }}
            /> */}
          </div>
          <p
            style={{ display: FormDataError !== "" ? "block" : "none" }}
            className="error"
          >
            {FormDataError}
          </p>
          {formData.id === "" ? (
            <button className="SaveButton" onClick={SaveHabitHandler}>
              SAVE
            </button>
          ) : (
            <button className="SaveButton" onClick={SaveChangesHabitHandler}>
              SAVE CHANGES
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
