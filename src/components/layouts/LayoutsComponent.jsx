import "./LayoutsComponent.scss";

function Layouts() {
  return (
    <div className="layout">
      <img src="Logo.png" />

      <ul className="list">
        <li>
          <a>Trade</a>
        </li>
        <li>
          <a>Liquidity</a>
        </li>
        <li>
          <a>Lending</a>
        </li>
        <li>
          <a>Stake</a>
        </li>
        <li>
          <a>Portfolio</a>
        </li>
        <li>
          <a>Forums</a>
        </li>
        <li>
          <a>Governance</a>
        </li>
        <li>
          <a>Info</a>
        </li>
      </ul>
      <div className="icons">
        <div className="bottomTop">
          <img src="Logo1.png" />
          <span>$6.69</span>
          <button className="borderButton">Buy</button>
        </div>
        <div className="bottombottom">
          <img src="Logo1.png" />
          <img src="Logo1.png" />
          <img src="Logo1.png" />
        </div>
      </div>
    </div>
  );
}

export default Layouts;
