export function fetchByName(userName: string) {
  const res = fetch(`https://api.github.com/users/${userName}`);
  return res;
}
