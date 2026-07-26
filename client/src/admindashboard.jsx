import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Select a section to manage.</p>

      <div>

        <div>
          <div className="card">
            <div className="card-body">
              <h5>Users</h5>
              <Link to="/admin/users" className="btn btn-primary">
                Manage Users
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <div className="card-body">
              <h5>Projects</h5>
              <Link to="/admin/projects" className="btn btn-primary">
                Manage Projects
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <div className="card-body">
              <h5>Services</h5>
              <Link to="/admin/services" className="btn btn-primary">
                Manage Services
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <div className="card-body">
              <h5>References</h5>
              <Link to="/admin/references" className="btn btn-primary">
                Manage References
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}