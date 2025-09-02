export default function Login() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="flex flex-col space-y-4">
        <input type="email" placeholder="Email" className="border rounded p-2" />
        <input type="password" placeholder="Password" className="border rounded p-2" />
        <button type="submit" className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Login</button>
      </form>
    </div>
  );
}
