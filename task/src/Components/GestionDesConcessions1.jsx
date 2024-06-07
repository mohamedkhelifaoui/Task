import './GestionDesConcessions1.css';
import ConcessionsTable from './ConcessionsTable';
import HorizontalNavbar from './HorizontalNavbar';
import Sidebar from './Sidebar';

function GestionDesConcessions1() {
  return (
    <div className="Scr1">
    <Sidebar />
    <div className="main-content">
      <HorizontalNavbar />
      <h1>Gestion des concessions</h1>
      <ConcessionsTable />
    </div>
  </div>
  );
}

export default GestionDesConcessions1;



