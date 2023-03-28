// отримує ключ та значення, які необхідно зберегти у локальному сховищі браузера
export function saveContacts(key, value) {
  const serialisedData = JSON.stringify(value);
  localStorage.setItem(key, serialisedData);
}
//отримуємо ключ, за яким потрібно знайти значення у локальному сховищі
export function loadContacts(key) {
  const serialisedData = localStorage.getItem(key);
  return serialisedData === null ? undefined : JSON.parse(serialisedData);
}
