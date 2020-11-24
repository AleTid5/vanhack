import { useEffect, useState } from "react";

export default (localStorageKey: string) => {
  const [value, setValue] = useState<string>(
    localStorage.getItem(localStorageKey) || ""
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [localStorageKey, value]);

  return [value ? JSON.parse(value) : value, setValue] as const;
};
