import './GestionDesConcessions2.css';
import HorizontalNavbar from './HorizontalNavbar';
import Sidebar from './Sidebar';
import CréerCon from './CréerCon';

function GestionDesConcessions2() {
  return (
    <div className="Scr2">
    <Sidebar />
    <div className="main-content">
      <HorizontalNavbar />
      <h1>Gestion des concessions</h1>

      <CréerCon/>
    </div>
  </div>
  );
}

export default GestionDesConcessions2;
