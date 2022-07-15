export function fetchByName(userName: string) {
  const res = fetch(`https://api.github.com/users/${userName}`).then((res) =>
    res.json()
  ).catch((err) => {
    console.error(err)
  })
  return res;
}
