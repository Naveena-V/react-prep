import useFetch from "./useFetch";

export default function Users() {
  const { data, isPending } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log("data", data, "isPending", isPending);

  return (
    <div>
      <h2>Users</h2>
      <div>
        {!isPending &&
          data.map((user) => (
            <div key={user.id}>
              <div>{user.id}</div>
              <div>{user.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
