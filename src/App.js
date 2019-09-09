import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Bag from './pages/Bag';
import Account from './pages/Account';
import HistoricBuys from './pages/HistoricBuys';
import ReportPurchasesPerCustomer from './pages/Admin/Reports/PurchasesPerCustomer';
import ReportMissingProducts from './pages/Admin/Reports/MissingProducts';
import ReportDailyValue from './pages/Admin/Reports/DailyValue';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/sacola" exact component={Bag}/>
        <Route path="/conta" exact component={Account}/>
        <Route path="/historico" exact component={HistoricBuys}/>
        <Route path="/relatorio-compras-por-cliente" exact component={ReportPurchasesPerCustomer} />
        <Route path="/relatorio-produtos-em-falta" exact component={ReportMissingProducts} />
        <Route path="/relatorio-valor-diario" exact component={ReportDailyValue} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
