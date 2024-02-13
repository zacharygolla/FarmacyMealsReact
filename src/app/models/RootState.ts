// RootState.ts
import rootReducer from "../reducers/rootReducer";

export type RootState = ReturnType<typeof rootReducer>; // Assuming you have a rootReducer
