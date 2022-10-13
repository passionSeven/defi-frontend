import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Trade from './components/trade/TradeComponent';
import Liquidity from './components/liquidity/LiquidityComponent';
import Lending from './components/lending/LendingComponent';
import Stake from './components/stake/StakeComponent';
import Portfolio from './components/portfolio/PortfolioComponent';
import Forums from './components/forums/ForumsComponent';
import Governance from './components/governance/GovernanceComponent';
import Info from './components/info/InfoComponent';
import Layouts from './components/layouts/LayoutsComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Trade />} />
      <Route path="/trade" element={<Trade />} />
      <Route path="/layouts" element={<Layouts />} />
      <Route path="/liquidity" element={<Liquidity />} />
      <Route path="/lending" element={<Lending />} />
      <Route path="/stake" element={<Stake />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/forums" element={<Forums />} />
      <Route path="/governance" element={<Governance />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
