<template>
  <vl-grid mod-stacked>
    <vl-column>
      <vl-title tag-name="h2" mod-alt> Statistiek per standaard </vl-title>
    </vl-column>
    <vl-column>
      <p>
        Benieuwd welke organisaties meehielepen aan de ontwikkeling van een
        standaard of hoeveel mensen het domeinmodel helpen ontwikkelen? Via deze
        zoekbalk kan je de statistieken van een specifieke standaard opvragen.
      </p>
    </vl-column>
    <vl-column>
      <statistics-standard-search />
    </vl-column>
    <vl-column>
      <statistics-standards-search-result />
    </vl-column>
  </vl-grid>
</template>
