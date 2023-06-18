import { v4 as uuid } from "uuid";

export const ActionTypes = {
  ADD_HABIT: "ADD_HABIT",
  REMOVE_HABIT: "REMOVE_HABIT",
  EDIT_HABIT: "EDIT_HABIT",
  ARCHIVE_HABIT: "ARCHIVE_HABIT",
};

export const initialState = {
  habits: [],
};

export function DataReducer(state, action) {
  let result;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionTypes.ADD_HABIT: {
      return {
        ...state,
        habits: [
          ...state.habits,
          {
            ...action.payload.habit,

            id: uuid(),
            isArchive: false,
          },
        ],
      };
    }
    case ActionTypes.REMOVE_HABIT: {
      const updatedHabitList = state.habits.filter(
        (habit) => habit.id !== action.payload.habit.id
      );
      return {
        ...state,
        habits: updatedHabitList,
      };
    }
    case ActionTypes.EDIT_HABIT: {
      const updatedHabitList = state.habits.map((habit) =>
        habit.id !== action.payload.habit.id ? habit : action.payload.habit
      );
      return {
        ...state,
        habits: updatedHabitList,
      };
    }
    case ActionTypes.ARCHIVE_HABIT: {
      const updatedHabitList = state.habits.map((habit) =>
        habit.id !== action.payload.habit.id
          ? habit
          : { ...action.payload.habit, isArchive: true }
      );
      return {
        ...state,
        habits: updatedHabitList,
      };
    }
  }
  return result;
}
