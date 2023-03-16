import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import StateHook from './pages/StateHook';
import EffectHook from './pages/EffectHook';
import './styles/styles.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StateHook />} />
          <Route path="use-state" element={<StateHook />} />
          <Route path="use-effect" element={<EffectHook />} />
          <Route path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(
    <App />,
  document.querySelector('#fromjs')
);

