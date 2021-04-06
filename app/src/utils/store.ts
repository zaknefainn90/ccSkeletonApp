export function createReducer<ActionType, State>(initialState: State, handlers: any) {
  return function reducer(state = initialState, action: { type: ActionType }) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type as any)) {
      return handlers[action.type](state, action) as State;
    }
    return state;
  };
}

export function makeActionCreator<ActionTypes>(type: string, ...argNames: any[]) {
  return (...args: unknown[]) => {
    const action: any = { type };

    argNames.forEach((arg: unknown, index: number) => {
      action[argNames[index]] = args[index];
    });
    return action as ActionTypes;
  };
}
