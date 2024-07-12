import { short } from './lib';

function Exercise6() {
  return (
    <div className="Exercise6">
      <h2>Exercice (fr)</h2>
      <p>
        Ce composant dépend de <code>lib.js</code> qui a été exporté via un
        objet en default export
      </p>
      <p>
        Constatez que la commande <code>npm run build</code> génère un build de
        l'ordre de 300ko
      </p>
      <p>
        Modifiez ensuite le code de <code>lib.js</code> avec 2 exports nommés et
        n'importer que la fonction <code>short</code>,, rebuildez avec{' '}
        <code>npm run build</code> et constatez la différence de poids
      </p>
      <p>
        Utiliser ensuite React.lazy et Suspense pour que le code de ce composant
        ne charge qu'au moment on l'on va sur cette page
      </p>
      <h2>Exercise (en)</h2>
      <p>
        This component depends on <code>lib.js</code> that was exported using
        default export
      </p>
      <p>
        Notice that the <code>npm run build</code> command generate a build of
        approximately 300kB
      </p>
      <p>
        Edit <code>lib.js</code> with 2 named exports and import the{' '}
        <code>short</code>, build again with <code>npm run build</code> and
        notice the difference in size
      </p>
      <p>
        Then use React.lazy and Suspense to load this component when we visit
        this page.
      </p>
      <div>From lib.js : {short()}</div>
    </div>
  );
}

export default Exercise6;
