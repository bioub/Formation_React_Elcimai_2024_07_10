# Exercices

## Rappels

Créer un nouveau composant `src/app/components/pokemon-card-details.tsx` dont le JSX reprend les lignes 26 à 84
de `src/app/pages/pokemon-detail.tsx`

Ce nouveau composant reçoit l'objet pokemon en props (le typer en TS en le rendant optionnel)

Remplacer ensuite les lignes 26 à 84 de `src/app/pages/pokemon-detail.tsx` par ce nouveau composant

Créer une nouvelle page `src/app/pages/pokemon-compare.tsx` contenant le JSX suivant :

```
<div className="row">
  <div className="col s6">
  	<PokemonCardDetails pokemon={pokemon1} />
  </div>
  <div className="col s6">
  	<PokemonCardDetails pokemon={pokemon2} />
  </div>
</div>
```

Les variables `pokemon1` et `pokemon2` doivent contenir les pokemon dont les ids sont `3` et `4`, utiliser le
service `getPokemon` pour les récupérer.

Créer la route dans `app.tsx`, l'URL peut etre par exemple `/pokemons/compare`

Créer un bouton en bas de la page `src/app/pages/pokemon-list.tsx`, sur son click appeler la méthode navigate (voir par
exemple `src/app/components/pokemon-card.tsx`)

Dans le composant `src/app/components/pokemon-card.tsx` déplacer le `onClick` sur un bouton "Details" dans la carte (on
se servira du click de la carte pour séléctionner les éléments à comparer), sur le click il faudra appeler
la `event.stopPropagation()` (pour ne pas déclencher le click des ancetres).
