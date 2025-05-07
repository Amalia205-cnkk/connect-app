export default function UserPage(){
    return(
        <div id="conteiner">
            <section id="navigation">
                <h1>connect</h1>
                <div>
                    <button>Users</button>
                    <button>Hak Akses</button>
                    <button>Logout</button>
                </div>
            </section>
            <section id="content">
                <input type="text" placeholder="Cari Users" />
                <div id="List-users"></div>
            </section>
        </div>
    )       
}

