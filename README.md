# 💻 PROJECT: WD1 - Langlopende Taak

- [💻 PROJECT: WD1 - Langlopende Taak](#-project-wd1---langlopende-taak)
  - [🥅 Overzicht en Leerdoelen](#-overzicht-en-leerdoelen)
  - [🔍 Langlopende Taak](#-langlopende-taak)
  - [🛠️ Opdrachten](#️-opdrachten)
  - [📚 Bronnen](#-bronnen)
  - [🏆 **Evaluatie**](#-evaluatie)
    - [HTML (30%)](#html-30)
    - [Opmaak (20%)](#opmaak-20)
    - [Javascript \& API's (25%)](#javascript--apis-25)
    - [Bronbestanden (10%)](#bronbestanden-10)
    - [Project \& Documentatie (15%)](#project--documentatie-15)

## 🥅 Overzicht en Leerdoelen

  - De student past HTML toe voor de constructie van een webpagina en hedendaagse webfunctionaliteiten.
  - De student hanteert een correcte syntax en semantiek bij de structurele opbouw in HTML | CSS |  JavaScript.
  - De student gebruikt de juiste bestandsformaten voor beeld, video en audio voor gebruik op het web.
  - De student documenteert de constructie van zijn/haar website op heldere wijze.
  - De student realiseert een website in HTML en CSS op basis van een gegeven wireframe/mockup.
  - De student host/structureert websites op een webserver.
  - De student voegt eenvoudige JavaScript-functionaliteiten toe aan een website.

## 🔍 Langlopende Taak

Je maakt een website, gemaakt met de technologieën die werden behandeld tijdens de les: HTML, Bootstrap (CSS) en Javascript. 

De website gaat over een onderwerp dat je zelf kiest, met telkens 6 topics die hermee verband houden. Je website zal gebruik moeten maken van een API, dus kies best een onderwerp waar je een API over kan terugvinden. Enkele voorbeelden:

 - NASA (NASA API)
 - Pokemon (Poke API)
 - Basketbal (NBA API)
 - Eten (Food API)
 - Films (OMDB API)
 - Lord of the Rings (The One API)
 - ...

Je kan een grotere lijst vinden op websites als [apilist.fun](https://apilist.fun/). 

> **⚠️Let op!⚠️** Bij sommige API's heb je een *key* nodig. Soms is die gemakkelijk te krijgen, soms wat moeilijker. We zullen een voorbeeld hiervan zien tijdens de les, maar je kan altijd na de les even vragen om dit mee uit te zoeken.

**BELANGRIJK!** Je moet niet alle teksten volledig zelf schrijven. Maak *om de teksten te schrijven* gerust gebruik van tools als chat GPT.

Je website bevat verschillende pagina's:
 - **home** (`index.html`): 1 pagina met een beschrijving van jouw onderwerp. Deze pagina *moet* bevatten:
   - een sfeerbeeld
   - een uitleg over jezelf in de context van het onderwerp
   - een foto van jezelf
 - **overzicht** (`overzicht.html`): 1 pagina met een overzicht van 6 topics die verband houden met jouw onderwerp. Deze pagina *moet* voor *elk topic* bevatten:
   - een titel, waar je op kan klikken om op een detailpagina terecht te komen
   - een korte uitleg
   - een bijhorende foto
 - **topic-pagina's**: voor elk topic een pagina dat in detail het topic beschrijft. Deze pagina *moet* bevatten:
   - titel van het topic
   - ondertitel
   - minstens 1 lijst
   - minstens 1 `figure` met afbeelding en bijschrift
   - minstens 2 topics pagina's bevatten een kaart met een markering, met behulp van de Leaflet library
   - 1 semantische tabel met bijschrift
 - **contact** (`contact.html`): 1 pagina met een contactformulier waar zowel jij als de webdesigner gecontacteerd kunnen worden. Deze pagina *moet* bevatten:
   - een contactformulier voor de 'admin' en voor de 'webdesigner' (1 ervan mag dus een fictief persoon zijn, maar het moeten 2 verschillende personen zijn)
   - een kaart met markering om een locatie aan te duiden

Elke pagina moet ook voldoen aan de volgende eisen:
 - **De layout is *responsive***, met andere woorden: de layout past zich aan voor grote en kleine schermen, voor zowel een horizontale als verticale weergave.
 - **Elke pagina bevat een duidelijke *menu***, waarbij je naar elke pagina kunt surfen.
 - **De menu bevat een *zoekveld*** om naar onderdelen te zoeken.
 - **De Leaflet library werd gebruikt** om kaarten te tonen op de topic-pagina's en de contact-pagina.
 - **Een relevante API werd gebruikt** op minstens één pagina.

Als laatste zorg je dat je website gehost wordt als een Github Pages website (wordt tijdens de les behandeld).

## 🛠️ Opdrachten

<details>
<summary>opdracht 1: Onderwerp Vinden</summary>

> - [ ] Benoem je onderwerp
> - [ ] Bedenk welke pagina's je nodig hebt
> - [ ] Verzamel de nodige inhoud
>   - teksten, afbeeldingen, titels, ...
> - [ ] Onderzoek stijlen van de concurrentie
>   - bekijk andere websites die over een gelijkaardig thema gaan

</details>

---

<details>
<summary>opdracht 2: Mock-Ups</summary>

> - [ ] Werk je pagina's uit in mock-ups
>   - kleurloos, focus op layout en ruimte
> - [ ] Bepaal waar de verzamelde inhoud (uit opdracht 1) moet komen staan
> - [ ] Bepaal de huisstijl
>   - 60-30-10 principe: dominante kleur, complementaire kleur, contrast kleur (+ eventuele accent kleur)

</details>

---

<details>
<summary>opdracht 3: HTML & Bootstrap</summary>

> - [ ] Organiseer je project in een duidelijke mappenstructuur
> - [ ] Maak de nodige bestanden aan
> - [ ] Bouw je website met behulp van HTML & Bootstrap (CSS)

</details>

---

<details>
<summary>opdracht 4: API's en Libraries</summary>

> - [ ] Implementeer een kaart (met behulp van `leaflet.js`)
> - [ ] Plaats een marker op de kaart
> - [ ] Implementeer minstens 1 extra API

</details>

---


## 📚 Bronnen

- [AP cursus Webtechnologie (HTML)](https://apwt.gitbook.io/g_webtechnologie/html/html-structuur)
- [w3schools](https://www.w3schools.com)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)

---

## 🏆 **Evaluatie**

### HTML (30%)

doelstelling | 19-20   | 15-18   | 12-14   | 10-11   | 0-9   |
--- | --- | --- | --- | --- | --- |
***De student past HTML toe voor de constructie van een webpagina en hedendaagse webfunctionaliteiten.***| Elementen worden correct genest. Elk element bestaat uit de juiste openings- en sluitingstag. Elementen zijn voorzien van de vereiste attributen en elk attribute is ingevuld met een correcte waarde. | Elementen worden correct genest. Elk element bestaat uit de juiste openings- en sluitingstag. Elementen zijn voorzien van de vereiste attributen. Attributes bevatten een foutieve waarde. | Elementen worden correct genest. Elk element bestaat uit de juiste openings- en sluitingstag. Elementen zijn niet voorzien van de vereiste attributen. Attributes bevatten een foutieve waarde. | Elementen worden niet correct genest. Elk element bestaat uit de juiste openings- en sluitingstag. Elementen zijn niet voorzien van de vereiste attributen. Attributes bevatten een foutieve waarde.  | Elementen worden niet correct genest. Elementen missen de juiste openings- of sluitingstag. Attributen werden niet correct gebruikt. Er zijn te weinig elementen aanwezig om de inhoud correct over te brengen. 
***De student hanteert een correcte syntax en semantiek bij de structurele opbouw in HTML.*** |De semantisch juiste elementen werden gebruikt. De id's en classes van elementen zijn ingevuld waar nodig en verbeteren de semantiek. Elementen zijn onderverdeeld in grotere en kleinere elementen, en er is gekozen voor een optimale oplossing. | De semantisch juiste elementen werden gebruikt. De id's en classes van elementen zijn ingevuld waar nodig en verbeteren de semantiek. Elementen zijn onderverdeeld in grotere en kleinere elementen. Er zijn echter betere oplossingen die je had kunnen bedenken en gebruiken. | De semantisch juiste elementen werden niet altijd gebruikt. De id's en classes van elementen zijn ingevuld waar nodig en verbeteren de semantiek. Elementen zijn onderverdeeld in grotere en kleinere elementen. | De semantisch juiste elementen werden gebruikt. De id's en classes van elementen zijn niet ingevuld waar nodig en verbeteren de semantiek onvoldoende. Elementen zijn onderverdeeld in grotere en kleinere elementen. | De semantisch juiste elementen werden niet of verkeerd gebruikt. De id's en classes zijn onvoldoende ingevuld. Elementen zijn onvoldoende onderverdeeld in grotere en kleinere elementen.

### Opmaak (20%)

doelstelling | 19-20   | 15-18   | 12-14   | 10-11   | 0-9   |
--- | --- | --- | --- | --- | --- |
***De student realiseert een website in HTML en CSS op basis van een gegeven wireframe/mockup.*** | Layout en ruimte zijn correct geïmplementeerd volgens de mock-up. De website is responsive en Mobile First ontwikkeld. | Layout en ruimte zijn correct geïmplementeerd volgens de mock-up. De website is responsive en Mobile First ontwikkeld.  Er zijn echter duidelijk oplossingen die korter of optimaler zijn. | Ruimte is onvoldoende geimplementeerd. De layout is correct geimplementeerd volgens de mock-up. De website is responsive en Mobile First ontwikkeld.  | Ruimte is onvoldoende geïmplementeerd. De website is onvoldoende responsive. Je layout is correct volgens de mock-up en je hebt de website ontwikkeld volgens het Mobile First principe. | Layout, ruimte en interactie zijn onvoldoende geïmplementeerd. De website is niet responsive. Er werd niet gewerkt volgens het Mobile First principe.

### Javascript & API's (25%)

doelstelling | 19-20   | 15-18   | 12-14   | 10-11   | 0-9   |
--- | --- | --- | --- | --- | --- |
***De student voegt eenvoudige JavaScript-functionaliteiten toe aan een website.*** | De zoekfunctie werkt en produceert goede zoekresultaten. De Leaflet library werd correct gebruikt en geimplementeerd op meer dan één pagina. Een extra API werd aangesproken en verrijkt de website op een zinnige wijze. | De zoekfunctie werkt en produceert goede zoekresultaten. De Leaflet library werd correct gebruikt en geimplementeerd op meer dan één pagina. Een extra API werd aangesproken en verrijkt de website op een zinnige wijze. Er zijn echter betere oplossingen die je had kunnen bedenken en gebruiken. | De zoekfunctie werkt. De Leaflet library werd correct gebruikt en geimplementeerd. Een extra API werd aangesproken. | De zoekfunctie werkt. De Leaflet library werd niet correct gebruikt. Een extra API werd aangesproken. | De zoekfunctie werkt niet. De Leaflet library werd niet gebruikt of werd op te weinig plaatsen geimplementeerd.

### Bronbestanden (10%)

doelstelling | 19-20   | 15-18   | 12-14   | 10-11   | 0-9   |
--- | --- | --- | --- | --- | --- |
***De student gebruikt de juiste bestandsformaten voor beeld, video en audio voor gebruik op het web.*** | Bronnen zijn (waar nodig) lokaal opgeslagen. Alle bronnen werken. Bronnen zijn (waar nodig) voorzien van meerdere resoluties. Alt-teksten en captions zijn voorzien waar nodig, en bevatten een duidelijke omschrijving. | Bronnen zijn (waar nodig) lokaal opgeslagen. Alle bronnen werken. Bronnen zijn (waar nodig) voorzien van meerdere resoluties. Alt-teksten en captions zijn voorzien waar nodig, maar missen soms een duidelijke beschrijving. | Bronnen zijn (waar nodig) lokaal opgeslagen. Alle bronnen werken. Bronnen zijn niet voorzien van meerdere resoluties. Alt-teksten en captions zijn voorzien waar nodig. | Externe bronnen worden gebruikt waar interne bronnen een betere oplossing zijn. Alle bronnen werken. Alt-teksten en captions zijn voorzien waar nodig. | Enkele bronnen werken niet. Er werd gekozen voor ongeschikte bestandsformaten. Alt-teksten of captions zijn onvoldoende aanwezig.

### Project & Documentatie (15%)

doelstelling | 19-20   | 15-18   | 12-14   | 10-11   | 0-9   |
--- | --- | --- | --- | --- | --- |
***De student documenteert de constructie van zijn/haar website op heldere wijze.*** | De code is voorzien van duidelijke en uitgebreide commentaar. Een Version Control System wordt regelmatig gebruikt met duidelijke commentaar om code-wijzigingen bij te houden. | De code is meestal voorzien van duidelijke en uitgebreide commentaar, maar mist dit op minder belangrijke plekken. Een Version Control System wordt regelmatig gebruikt met duidelijke commentaar om code-wijzigingen bij te houden. | De code is meestal voorzien van duidelijke en uitgebreide commentaar. Een Version Control System wordt regelmatig gebruikt, maar mist soms duidelijke commit-commentaren. | De code is onvoldoende voorzien van duidelijke en uitgebreide commentaar. Een Version Control System wordt regelmatig gebruikt. | De code is niet voorzien van commentaar.  Een Version Control System is te weinig gebruikt, of mist te vaak duidelijke commit-commentaren.
***De student host/structureert websites op een webserver.*** | Bestanden zijn georganiseerd met behulp van een duidelijke naamgeving en een optimale mappenstructuur. De website werkt en is bereikbaar via een url. | Bestanden zijn georganiseerd met behulp van een duidelijke naamgeving en een mappenstructuur, hoewel het soms te complex in elkaar zit. De website werkt en is bereikbaar via een url. | Bestanden zijn georganiseerd met behulp van een mappenstructuur, maar de naamgeving is soms verwarrend of foutief. De website werkt en is bereikbaar via een url.  | Bestanden zijn georganiseerd met behulp van een mappenstructuur. De website werkt lokaal, maar is niet bereikbaar via een url. | Een mappenstructuur is onvoldoende aanwezig. Bestanden hebben geen duidelijke naam. De website is niet bereikbaar via een url.