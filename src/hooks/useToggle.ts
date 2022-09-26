import {useCallback, useState} from 'react';

export const useToggle = (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(
    () => setState(previousState => !previousState),
    [],
  );

  return [state, toggle];
};
