import { useState } from "react";


export const useLocalStorage = (key, value) => {

                const item = window.localStorage.getItem(key);
                const setValue = value => {
                    setStoredValue(value);
                    window.localStorage.setItem(key, JSON.stringify(value))

                }
                    const [storedValue, setStoredValue] = useState(() => {
                        return item ? JSON.parse(item) : value;

                    })

                return[storedValue, setValue];
}
export default useLocalStorage