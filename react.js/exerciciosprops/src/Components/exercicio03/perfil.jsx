import './perfil.css'; 

function Perfil  ({ nome, idade, profissao })  {
  return (
    <div className="perfil">
      <div className="card-header">
        <h2>{nome}</h2>
      </div>
      <div className="card-body">
        <p><strong>Idade</strong> {idade} anos</p>
        <p><strong>Profissão</strong> {profissao}</p>
      </div>
    </div>
  );
};

export default Perfil;