import React, { createContext } from 'react';

export const TaskContext = createContext(null);

export function TaskProvider({ task, children }) {
  return (
    <TaskContext.Provider value={task}>
      {children}
    </TaskContext.Provider>
  );
}

export const TaskConsumer = TaskContext.Consumer;
