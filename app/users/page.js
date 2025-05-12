import { IconUser, IconSettings, IconLogout } from "@tabler/icons-react";

export default function User_Page() {
  const users = [
    {
      name: "Rahmat Saudi Al Fathir As",
      email: "rahmatsaudi@universitasmulia.ac.id",
      roles: ["Admin", "Employee"],
      status: "Aktif",
    },
    {
      name: "Lintang",
      email: "lintang@universitasmulia.ac.id",
      roles: ["Employee"],
      status: "Aktif",
    },
    {
      name: "Shafira",
      email: "shafira@universitasmulia.ac.id",
      roles: ["Employee"],
      status: "Aktif",
    },
    {
      name: "Lebah Ganteng",
      email: "lebahganteng@universitasmulia.ac.id",
      roles: ["Employee"],
      status: "Suspended",
    },
  ];

  return (
    <div className="flex h-screen font-sans"> 
      {/* Sidebar */}
      <aside className="bg-white w-56 border-r px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-6">Connect</h1>
        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-2 p-2 bg-black text-white rounded">
            <IconUser size={20} /> <span>User</span>
          </button>
          <button className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
            <IconSettings size={20} /> <span>Hak Akses</span>
          </button>
          <button className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
            <IconLogout size={20} /> <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 relative">
        <input
          type="text"
          placeholder="Cari user"
          className="w-full p-2 border rounded mb-4"
        />

        <div className="flex flex-col gap-4">
          {users.map((user, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border rounded p-4 shadow-sm"
            >
              <div>
                <h2 className="font-bold text-lg">{user.name}</h2>
                <p className="text-sm text-black-600">{user.email}</p>
                <div className="flex gap-2 mt-2">
                  {user.roles.map((role, i) => (
                    <span
                      key={i}
                      className="bg-black text-white text-xs px-2 py-1 rounded"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={`font-bold ${
                  user.status === "Aktif" ? "text-black" : "text-black-500"
                }`}
              >
                {user.status}
              </div>
            </div>
          ))}
        </div>

        {/* Add User Button */}
<button className="fixed bottom-6 right-6 w-14 h-14 bg-gray-300 text-black border border-gray-300 rounded-xl shadow-md flex items-center justify-center hover:bg-gray-100">
  <span className="text-3xl leading-none">+</span>
</button>
      </main>
    </div>
  );
}
