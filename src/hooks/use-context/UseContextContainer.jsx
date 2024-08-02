import AuthProvider from "./AuthProvider";

export default function UseContextContainer() {
  return (
    <div>
      <h2>{`useContext()`}</h2>
      <p>
        The useContext hook allows functional components to access and consume
        context data. Its simplifies the process of passing the data throught
        the component tree without props drilling.
      </p>
      <p>
        Example: In this example we will create a context to hold a user's
        authentication status.
      </p>
      <AuthProvider />
    </div>
  );
}
