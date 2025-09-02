import { useState, useEffect } from "react";

export default function HackMate() {
  const [teams, setTeams] = useState([]);
  const [applications, setApplications] = useState([]);
  const [myApps, setMyApps] = useState([]);

  useEffect(() => {
    const storedTeams = JSON.parse(localStorage.getItem("teams")) || [];
    const storedApps = JSON.parse(localStorage.getItem("applications")) || [];
    setTeams(storedTeams);
    setApplications(storedApps);
  }, []);

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
    localStorage.setItem("applications", JSON.stringify(applications));
  }, [teams, applications]);

  const addTeam = () => {
    const name = prompt("Enter team name:");
    if (name) {
      setTeams([...teams, { id: Date.now(), name }]);
    }
  };

  const applyTeam = (team) => {
    if (myApps.find((app) => app.id === team.id)) return;
    setMyApps([...myApps, team]);
  };

  const cancelApplication = (id) => {
    setMyApps(myApps.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">HackMate</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Find Team */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Find Team</h2>
          {teams.length === 0 ? (
            <p className="text-gray-600">No teams yet.</p>
          ) : (
            <ul className="space-y-2">
              {teams.map((team) => (
                <li key={team.id} className="flex justify-between items-center border p-2 rounded">
                  {team.name}
                  <button
                    onClick={() => applyTeam(team)}
                    className="bg-indigo-600 text-white px-2 py-1 rounded hover:bg-indigo-700"
                  >
                    Apply
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Create Team */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Create Team</h2>
          <button onClick={addTeam} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Add Team
          </button>
        </div>
      </div>

      {/* My Applications */}
      <div className="bg-white shadow-md p-4 rounded-lg mt-6">
        <h2 className="text-xl font-bold mb-2">My Applications</h2>
        {myApps.length === 0 ? (
          <p className="text-gray-600">No applications yet.</p>
        ) : (
          <ul className="space-y-2">
            {myApps.map((app) => (
              <li key={app.id} className="flex justify-between items-center border p-2 rounded">
                {app.name}
                <button
                  onClick={() => cancelApplication(app.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Cancel
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
