import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import StateHook from './pages/StateHook';
import EffectHook from './pages/EffectHook';
import ContextHook from './pages/ContextHook';
import RefHook from './pages/RefHook';
import ReducerHook from './pages/ReducerHook';
import CallbackHook from './pages/CallbackHook';
import MemoHook from './pages/MemoHook';
import './styles/styles.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StateHook />} />
          <Route path="use-state" element={<StateHook />} />
          <Route path="use-effect" element={<EffectHook />} />
          <Route path="use-context" element={<ContextHook />} />
          <Route path="use-ref" element={<RefHook />} />
          <Route path="use-reducer" element={<ReducerHook />} />
          <Route path="use-callback" element={<CallbackHook />} />
          <Route path="use-memo" element={<MemoHook />} />
          <Route path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

const domNode = document.querySelector('#fromjs');
const root = createRoot(domNode);

root.render(<App />);

