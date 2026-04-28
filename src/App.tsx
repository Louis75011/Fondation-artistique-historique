/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Museum from './pages/Museum';
import Workshops from './pages/Workshops';
import Catalogues from './pages/Catalogues';
import Family from './pages/Family';
import UNScandal from './pages/UNScandal';
import Expertises from './pages/Expertises';
import Contact from './pages/Contact';
import ArtistDetail from './pages/ArtistDetail';
import CatalogueDetail from './pages/CatalogueDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist/:id" element={<ArtistDetail />} />
          <Route path="/musee" element={<Museum />} />
          <Route path="/ateliers" element={<Workshops />} />
          <Route path="/catalogues" element={<Catalogues />} />
          <Route path="/catalogue/:id" element={<CatalogueDetail />} />
          <Route path="/famille" element={<Family />} />
          <Route path="/scandale" element={<UNScandal />} />
          <Route path="/expertises" element={<Expertises />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

