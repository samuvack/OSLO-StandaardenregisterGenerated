<template>
  <vl-grid mod-stacked>
    <!--TODO: check whether spotlight should be changed to doormat -->
    <vl-column>
      <vl-introduction>
        Dit standaardenregister geeft een overzicht van alle lopende en
        afgewerkte trajecten die deel uitmaken van het initiatief Open
        Standaarden voor Linkende Organisaties (OSLO) van de Vlaamse overheid.
      </vl-introduction>
    </vl-column>
    <vl-column>
      <general-staticstics />
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
        <a href="/statistics"> Ontdek hier de statistieken per standaard! </a>
      </p>
    </vl-column>
    <vl-column>
      <vl-title tag-name="h3" mod-border>Status van een standaard</vl-title>
    </vl-column>
    <vl-column width="4">
      <info-card
        title="Erkende standaard"
        info="werd na het doorlopen van een erkenningsprocedure goedgekeurd door de 
          Werkgroep Datastandaarden van het Stuurorgaan Vlaams Informatie- en ICT-beleid 
          als standaard binnen de Vlaamse overheid."
      />
    </vl-column>
    <vl-column width="4">
      <info-card
        title="Kandidaat standaard"
        info="is een stabiele specificatie die voor de standaard werd ontwikkeld waarbij aan
          de hand van een publieke reviewperiode implementatie-ervaring wordt opgedaan en
          feedback van buiten de thematische werkgroep wordt verzameld."
      />
    </vl-column>
    <vl-column width="4">
      <info-card
        title="Standaard in ontwikkeling"
        info="werd reeds aangemeld bij de Werkgroep Datastandaarden en wordt verder uitgewerkt
          door een thematische werkgroep aan de hand van publieke werksessies."
      />
    </vl-column>
    <vl-column>
      <vl-title tag-name="h3" mod-border> Type van een standaard </vl-title>
    </vl-column>
    <vl-column width="6">
      <info-card
        title="Vocabularium"
        info="Vormt de basis voor open semantische informatiestandaarden. Ze bieden een
          gedeeld begrippenkader voor bepaalde concepten met een focus op
          gegevensuitwisseling."
      />
    </vl-column>
    <vl-column width="6">
      <info-card
        title="Applicatieprofiel"
        info="Is een specificatie voor gegevensuitwisseling voor applicaties die een bepaalde
          use case vervullen. Het laat toe om naast een gedeelde semantiek ook bijkomende
          restricties op te leggen, zoals het vastleggen van kardinaliteiten of het
          gebruik van bepaalde codelijsten."
      />
    </vl-column>
    <vl-column width="6">
      <info-card
        title="Implementatiemodel"
        info="Is een specificatie voor gegevensuitwisseling voor applicaties die een bepaalde
          use case vervullen, deze modellen kunnen een deel van de interne
          gegevensverwerking van specifieke applicaties bevatten. Het laat toe om naast
          een gedeelde semantiek ook bijkomende restricties op te leggen, zoals het
          vastleggen van kardinaliteiten of het gebruik van bepaalde codelijsten. De
          ontwikkeling hiervan volgt dezelfe ideologie als applicatieprofielen en
          vocabularia, maar heeft nog geen officiele erkenning als proces en methode."
      />
    </vl-column>
    <vl-column width="6">
      <info-card
        title="Technische standaard"
        info="Biedt een manier aan van gestandaardiseerde
          gegevensuitwisseling. Het gaat om een stabiele specificatie voor de standaard
          die werd ontwikkeld, waarbij aan de hand van een publieke reviewperiode
          implementatie-ervaring wordt opgedaan en feedback van buiten de thematische
          werkgroep wordt verzameld."
      />
    </vl-column>
  </vl-grid>
</template>
