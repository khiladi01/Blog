import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/user" , {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
    });

      setLoading(false);
      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();
      console.log("Fetched Data", data);

      let list = [data.userData]

      console.log("Fetched List:", list)
      setUser(list);
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
  },[]);

  if (loading) return <p>Data Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="h-screen bg-white flex justify-center items-center">
        {/* box */}
        <div className="h-[400px] w-[500px] shadow-lg shadow-slate-300 rounded-lg">
          <section className="text-center text-2xl text-slate-900 font-bold uppercase">
            User Details
          </section>
          <div className="h-[300px] w-[500px] flex justify-center items-center">
            {user.length === 0 && <p>User Data No Found</p>}

          {user?.map((item, index) => (
            <div key={item._id ?? index} className="w-[400px] grid place-content-center gap-2 bg-slate-50 rounded-2xl">
              <p className="text-lg text-slate-700 font-semibold">Name: <span className="text-2xl text-red-400"> {item.name} </span> </p>
              <p className="text-lg text-slate-700 font-semibold">Email: <span    className="text-lg text-slate-700"> {item.email} </span> </p>
              <p className="text-lg text-slate-700 font-semibold">Mobile: <span   className="text-lg text-slate-700"> {item.mobile} </span> </p>
              <p className="text-lg text-slate-700 font-semibold">Location: <span className="text-lg text-slate-700"> {item.location} </span> </p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
