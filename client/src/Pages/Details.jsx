export default function Details({ setMyClick, myClick }) {
  function handleSubmit(e) {
    setMyClick(true);
  }
  return (
    <div className="info">
      <h1>GENDER REVEAL</h1>
      <div className="infoContainer">
        <div className="dateConatiner">
          <h2>DATE</h2>
          <h3>Saturday 2nd December</h3>
        </div>
        <div className="timeConatiner">
          <h2>TIME</h2>
          <h3>3PM</h3>
        </div>
        <div className="locationConatiner">
          <h2>LOCATION</h2>
          <h3>62 Portland Street, CH41 0BN</h3>
        </div>
      </div>
      <button className="pageButton" onClick={handleSubmit}>
        NEXT PAGE
      </button>
    </div>
  );
}
