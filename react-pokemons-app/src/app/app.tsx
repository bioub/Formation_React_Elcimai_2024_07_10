import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PokemonsList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import PageNotFound from './pages/page-not-found';
import Login from './pages/login';
import PrivateRoute from './private-route';
import PokemonCompare from './pages/pokemon-compare';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { CompareProvider } from './compare-context';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <CompareProvider>
      <BrowserRouter>
        <div>
          <nav>
            <div className="nav-wrapper teal">
              <Link to="/" className="brand-logo center">
                {t('Pokédex')}
              </Link>
              <button
                onClick={() => {
                  i18n.changeLanguage('en');
                }}
              >
                en
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage('fr');
                }}
              >
                fr
              </button>
            </div>
          </nav>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route index path="/" element={<PokemonsList />} />
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateRoute />}>
                <Route path="/pokemons" element={<PokemonsList />} />
                <Route path="/pokemon/add" element={<PokemonAdd />} />
                <Route path="/pokemon/compare" element={<PokemonCompare />} />
                <Route path="/pokemons/edit/:id" element={<PokemonEdit />} />
                <Route path="/pokemons/:id" element={<PokemonsDetail />} />
              </Route>
              <Route element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </CompareProvider>
  );
}

export default App;
