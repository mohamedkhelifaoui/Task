import React from 'react';
import './ConcessionsTable.css';
import Pic1 from '../Images/list.png';
import Pic2 from '../Images/edit.png'; 
import Pic3 from '../Images/Icon Right.png'
import { useNavigate } from 'react-router-dom';



const ConcessionsTable = () => {
  const data = [
    { id: '#5089', name: 'Investisse..', exploitationDate: '14 Juin 2024', exploitationEndDate: '29 Juillet 2026', investmentDate: '14 Juin 2024', investmentEndDate: '29 Juillet 2026', rate: '7 OZT/g', investors: 1200, goal: 70 },
    { id: '#5089', name: 'Investisse..', exploitationDate: '14 Juin 2024', exploitationEndDate: '29 Juillet 2026', investmentDate: '14 Juin 2024', investmentEndDate: '29 Juillet 2026', rate: '7 OZT/g', investors: 1230, goal: 55 },
    { id: '#5089', name: 'Investisse..', exploitationDate: '14 Juin 2024', exploitationEndDate: '29 Juillet 2026', investmentDate: '14 Juin 2024', investmentEndDate: '29 Juillet 2026', rate: '7 OZT/g', investors: 784, goal: 23 },
    { id: '#5089', name: 'Investisse..', exploitationDate: '14 Juin 2024', exploitationEndDate: '29 Juillet 2026', investmentDate: '14 Juin 2024', investmentEndDate: '29 Juillet 2026', rate: '7 OZT/g', investors: 3941, goal: 50 },
  ];

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/CréerConcusion'); 
  };
  return (
    <div className="concessions-table-container">
      <div className='lista'>Liste des concessions</div>
      <div className="filters">
        <div className='btnn'>
            <button className="custom-button" onClick={handleClick}>
              Créer une concession
            </button>
        </div>
        <input className='inn' type="text" placeholder="Chercher" />
        <select className='in'>
          <option>Matière</option>
        </select>
        <select className='inn'>
          <option>Type de transaction</option>
        </select>
        <select className='inn'>
          <option>Pays de l'utilisateur</option>
        </select>
      </div>
      <table className="concessions-table">
        <thead>
          <tr className='tabl'>
            <th>ID <br></br>CONCESSION</th>
            <th>NOM</th>
            <th>DATE <br></br>D'EXPLOITATION</th>
            <th>DATE <br></br>D'INVESTISSEMENT</th>
            <th>TAUX</th>
            <th>NB <br></br>INVESTISSEURS</th>
            <th>BUT</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody >
          {data.map((item, index) => (
            <tr className='tbt' key={index}>
              <td ><a className='idd' href="#k">{item.id}</a></td>
              <td>
                <div className="name-cell">
                  <span className="dot"></span>
                  <span className='tabl'>{item.name}</span>
                </div>
              </td>
              <td className='dt'>
                <form>
                  {item.exploitationDate} <br /> {item.exploitationEndDate}
                  <div><img src={Pic3} alt='#'/></div>
                </form>

              </td>
              <td className='dt'>
                <form>
                  {item.investmentDate} <br /> {item.investmentEndDate}
                  <div><img src={Pic3} alt='#'/></div>
                </form>
              </td>
              <td className='dtt'>{item.rate}</td>
              <td className='ell'>{item.investors}</td>
              <td>
                <div className="goal-cell">
                  <span className='iddd'>{item.goal}%</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${item.goal}%` }}></div>
                  </div>
                </div>
              </td>
              <td>
                <span className="icon"><img src={Pic1} alt="#"/></span>
                <span className="icon"><img src={Pic2} alt="#"/></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>Previous</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default ConcessionsTable;
