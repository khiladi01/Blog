import { useState, useEffect } from "react";

function App() {
  const [usersdata, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/user");

      setLoading(false);
      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();
      console.log("Fetched Data", data);

      const list =
        data?.usersFind ??
        data?.users ??
        data?.user ??
        (Array.isArray(data) ? data : []);

      setUsersData(list);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log({
        success: false,
        message: "Data fetch failed",
        error: error.message,
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Data Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="h-screen bg-white flex justify-center items-center">
        {/* box */}
        <div className="h-[400px] w-[500px] shadow-lg shadow-slate-300">
          <section className="text-center text-2xl text-slate-900 font-bold uppercase">
            User Details
          </section>
          {usersdata.length === 0 && <p>User Data No Found</p>}

          {usersdata.map((item, index) => (
            <div key={item._id ?? index}>
              <p>{`Name: ${item.username}`}</p>
              <p>{`Email: ${item.email}`}</p>
              <p>{`Phone: ${item.phone}`}</p>
              <p>{`Address: ${item.address}`}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
