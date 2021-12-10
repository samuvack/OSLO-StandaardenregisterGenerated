<template>
  <vl-grid mod-stacked>
    <vl-column>
      <vl-introduction>
        Dit standaardenregister geeft een overzicht van alle lopende en
        afgewerkte trajecten die deel uitmaken van het initiatief Open
        Standaarden voor Linkende Organisaties (OSLO) van de Vlaamse overheid.
      </vl-introduction>
    </vl-column>
    <vl-column>
      <p>
        Overheden op lokaal, Vlaams, interfederaal en Europees niveau moeten in
        het kader van hun dienstverlening vaak samenwerken. In praktijk moeten
        bijgevolg heel wat gegevens uitgewisseld worden tussen de verschillende
        administraties. Deze gegevens zijn afkomstig uit verschillende systemen,
        zijn mogelijks niet in hetzelfde technische formaat beschikbaar, en
        volgen niet noodzakelijk dezelfde semantiek. Zonder het maken van
        afspraken, wordt kwaliteitsvolle gegevensuitwisseling onmogelijk. Dit
        onderstreept het belang van de ontwikkeling van datastandaarden. De
        verschillende standaarden kunnen onderverdeeld worden op basis van waar
        ze zich bevinden in de levenscyclus en krijgen elk ook een type
        toegewezen.
      </p>
    </vl-column>
    <vl-column>
      <vl-title tag-name="h3" mod-border>Status van een standaard</vl-title>
    </vl-column>
    <vl-column width="4">
      <vl-spotlight title="Erkende standaard" mod-alt>
        <a v-vl-modal-toggle="'erkende-standaard-modal'" class="vl-link">
          Meer info
        </a>
      </vl-spotlight>
    </vl-column>
    <vl-column width="4">
      <vl-spotlight title="Kandidaat standaard" mod-alt>
        <a v-vl-modal-toggle="'kandidaat-standaard-modal'" class="vl-link">
          Meer info
        </a>
      </vl-spotlight>
    </vl-column>
    <vl-column width="4">
      <vl-spotlight title="Standaard in ontwikkeling" mod-alt>
        <a
          v-vl-modal-toggle="'standaard-in-ontwikkeling-modal'"
          class="vl-link"
        >
          Meer info
        </a>
      </vl-spotlight>
    </vl-column>
    <erkende-standaard-modal />
    <kandidaat-standaard-modal />
    <standaard-in-ontwikkeling-modal />

    <vl-column>
      <vl-title tag-name="h3" mod-border> Type van een standaard </vl-title>
    </vl-column>

    <vl-column width="6">
      <vl-spotlight title="Technische standaard" mod-alt>
        <a v-vl-modal-toggle="'technische-standaard-modal'" class="vl-link">
          Meer info
        </a>
      </vl-spotlight>
    </vl-column>
    <vl-column width="6">
      <vl-spotlight title="Vocabularium" mod-alt>
        <a v-vl-modal-toggle="'vocabularium-modal'" class="vl-link">
          Meer info
        </a>
      </vl-spotlight>
    </vl-column>
    <vl-column width="6">
      <vl-spotlight title="Applicatieprofiel" mod-alt>
        <a v-vl-modal-toggle="'applicatieprofiel-modal'" class="vl-link">
          Meer info
        </a>
      </vl-spotlight>
    </vl-column>
    <vl-column width="6">
      <vl-spotlight title="Implementatiemodel" mod-alt>
        <a v-vl-modal-toggle="'implementatiemodel-modal'" class="vl-link">
          Meer info
        </a>
      </vl-spotlight>
    </vl-column>
    <technische-standaard-modal />
    <vocabularium-modal />
    <applicatieprofiel-modal />
    <implementatiemodel-modal />
  </vl-grid>
</template>
