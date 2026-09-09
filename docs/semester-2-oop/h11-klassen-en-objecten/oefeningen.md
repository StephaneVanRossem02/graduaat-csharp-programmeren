# Oefeningen

## Richtlijnen

### Structuur oefeningen

Vanaf hier veronderstellen we dat je in één groot project (`OOExercises`) werkt dat één klasse `Program` heeft. Deze klasse heeft een `Main` methode die een keuzemenu opstart. Oefeningen rond eenzelfde topic worden (statische) methodes van één klasse met een methode `ShowSubmenu`, die je een menu toont van alle oefeningen over dat topic en die je toestaat een oefening naar keuze te testen. Dit wordt uitgelegd in de eerste oefening.

## Oefening: H11-voorbereiding

### Leerdoelen

* een ordelijke menustructuur voor je code voorzien

### Functionele analyse

We willen dat we alle oefeningen die we in dit vak maken op een ordelijke manier kunnen opstarten. We doen dit door een keuzemenu met twee niveaus te voorzien: de gebruiker kan elke reeds geschreven oefening uitvoeren door eerst het algemene onderwerp aan te geven en vervolgens de specifieke oefening.

### Technische analyse

* Maak een project `OOExercises`.
* Laat in je Main methode een lijst van alle topics zien waarover oefeningen gemaakt zijn. In het begin is dit enkel `DateTime`. De gebruiker kan een topic aanduiden door een nummer in te geven, want voor elk topic staat ook een nummer.
* Gebruik een switch op de gebruikersinput om te bepalen van welk topic de `ShowSubmenu` methode moet worden opgeroepen. Deze methode heeft return type `void` en geen parameters.
* Voorzie een eerste klasse, `DateTimeExercises`, met deze methode `ShowSubmenu`. Totdat je oefeningen hebt om te demonstreren, toont `ShowSubmenu` gewoonweg de tekst `"Er zijn nog geen oefeningen over dit topic"`.
* Indien er wel oefeningen zijn (deze oefening moet je dus updaten naarmate je vordert), wordt elke reeds geprogrammeerde oefening genummerd en getoond en kan de gebruiker kiezen om deze uit te voeren.
* Nadat een oefening getest is, kan je opnieuw een topic en een oefening kiezen. Het programma eindigt nooit.

#### Voorbeeldinteractie

:::warning
Dit is maar een voorbeeld! De getoonde topics en oefeningen gaan afhangen van wat je al gedaan hebt.
:::

```
Welkom bij de oefeningen van Objectgeoriënteerd Programmeren!
Topic van de uit te voeren oefening?
1. DateTime
2. Properties en access modifiers
> 1
Uit te voeren oefening?
1. H11-Clock
2. H11-Birthday
> 2
(...)
```

## Oefening: H11-Clock

Maak een applicatie die bestaat uit een oneindige loop. De loop zal iedere seconde pauzeren: `System.Threading.Thread.Sleep(1000);`

 Vervolgens wordt het scherm leeg gemaakt en wordt de huidige tijd getoond. Merk op dat ENKEL de tijd wordt getoond, niet de datum.

## Oefening: H11-Birthday

Maak een applicatie die aan de gebruiker vraagt op welke dag hij/zij jarig is. Toon vervolgens over hoeveel dagen de verjaardag van de gebruiker zal zijn.

## Oefening: H11-DayOfTheWeek

### Leerdoelen

* aanmaken van `DateTime` objecten
* formatteren van `DateTime` objecten

### Functionele analyse

We willen voor een willekeurige datum kunnen bepalen welke dag van de week het is.

### Technische analyse

* je moet eerst de dag, maand en jaar opvragen en een `DateTime` aanmaken
* daarna moet je laten zien over welke dag van de week (in het Nederlands) het gaat
  * gebruik hiervoor formattering van een `DateTime`
  * laat ook de datum zelf zien in een formaat dat leesbaar is voor de gebruiker
* noem de methode waarin je dit schrijft `DayOfTheWeek .`

### Voorbeeldinteractie

```
Welke dag?
> 14
Welke maand?
> 2
Welk jaar?
> 2020
14 februari 2020 is een vrijdag.
```

## Oefening: H11-TicksSince2000

### Leerdoelen

* aanmaken van `DateTime` objecten

### Functionele analyse

We willen weten hoe veel fracties van een seconde al verlopen zijn sinds het begin van de jaren 2000.

### Technische analyse

* .NET stelt deze fracties (1 / 10000 milliseconden) voor als "ticks"
* We willen weten hoe veel ticks er voorbijgegaan zijn sinds het absolute begin van het jaar 2000
* Noem de methode waarin je dit schrijft `TicksSince2000`

### Voorbeeldinteractie

```
Sinds 1 januari 2000 zijn er (hier wordt het aantal getoond) ticks voorbijgegaan.
```

## Oefening: H11-LeapYearCount

### Leerdoelen

* gebruik van een statische methode

### Functionele analyse

We willen bepalen hoe veel schrikkeljaren er zijn tussen 1799 en 2021.

### Technische analyse

* implementeer zelf geen logica voor schrikkeljaren, maar laat dit over aan de klassen `DateTime`
* maak gebruik van een statische methode van deze klasse
* noem je methode `LeapYearCount`

### Voorbeeldinteractie

```
Er zijn (hier wordt het aantal getoond) schrikkeljaren tussen 1799 en 2021.
```

## Oefening: H11-CodeTiming

### Leerdoelen

* eenvoudig code leren timen
* gebruiken van `DateTime`
* herhaling arrays

### Functionele analyse

We zijn benieuwd hoe lang het duurt een array van 1 miljoen `int`s te maken en op te vullen met de waarden 1,2,...

### Technische analyse

* Bepaal het tijdstip voor en na aanmaken van de array.
* Vul de array in met een `for`-lus.
* Noem de methode waarin je dit schrijft `CodeTiming`

### Voorbeeldinteractie

```
Het duurt (hier wordt het aantal getoond) milliseconden om een array van een miljoen elementen aan te maken en op te vullen met opeenvolgende waarden.
```

### Oefeningen na *Access modifiers*:

## Oefening: H11-CombinationOf2Numbers

### Leerdoelen

* werken met klassen en objecten
* instantieattributen
* instantiemethoden

### Functionele analyse

Dit programma geeft op basis van de input van twee getallen de som van beide getallen, het verschil, het product en de deling. In het laatste geval en indien er een deling door nul zou worden uitgevoerd, wordt er "Fout!" weergegeven.

### Technische analyse

Voorzie voor volgende oefening eerst een nieuwe submenuklasse met als naam `ClassesAndObjects`.

Maak ook een eigen klasse `CombinationOf2Numbers` in een eigen file, `CombinationOf2Numbers.cs`. Deze klasse bevat 2 getallen (type `int`). Er zijn 4 methoden, die allemaal een `double` teruggeven:

* `Sum`: geeft som van beide getallen weer
* `Difference`: geeft verschil van beide getallen weer
* `Product`: geeft product van beide getallen weer
* `Quotient`: geeft deling van beide getallen weer. Print `"Fout"` naar de console indien je zou moeten delen door 0 en voer dan de deling uit. Wat er dan gebeurt, is niet belangrijk.

Gebruik `public` attributen `Number1`en `Number2`. Plaats onderstaande code in een publieke statische methode van `ClassesAndObjects`met naam `DemoCombinationOf2Numbers`met return type `void`:

```csharp
CombinationOf2Numbers pair = new CombinationOf2Numbers();
pair.Number1= 12;
pair.Number2= 34;
Console.WriteLine("Paar:" + pair.Number1+ ", " + pair.Number2);
Console.WriteLine("Som = " + pair.Sum());
Console.WriteLine("Verschil = " + pair.Difference());
Console.WriteLine("Product = " + pair.Product());
Console.WriteLine("Quotient = " + pair.Quotient());
```

Zorg dat je `DemoCombinationOf2Numbers`kan oproepen via het submenu van `ClassesAndObjects.`

#### Voorbeeldinteractie(s)

```
Paar: 12, 34
Som = 46
Verschil = -22
Product = 408
Quotient = 0,352941176470588
```

## H11\_4 SchoolAdmin klasse Course

We willen per cursus bijhouden welke studenten ingeschreven zijn en maken daarvoor een klasse `Course`.

#### Klassediagram

![](/img/img-3257.png)


Deze klasse heeft twee attributen: `Students` en `Title`. `Students` is een List van `Student`-objecten. `Title` is gewoonweg een `string`. `Course`heeft ook een methode `ShowOverview`die de titel van de cursus toont, gevolgd door de namen van alle studenten die de cursus volgen.

Test je programma door een statische methode te maken in Program.cs `DemoCourses.` Deze methode maakt eerst twee studenten aan (dezelfde als in `DemoStudents`; je kan de code kopiëren).  Maak 4 cursussen aan ("Communicatie", "Databanken", "Programmeren" en "Webtechnologie") via variabelen `communicatie`, `programmeren`, `webtechnologie` en `databanken` en geef ze de juiste titel. Maak de 2 studenten lid van de cursussen zoals hieronder getoond wordt. Toon tenslotte voor elke cursus het overzicht via `ShowOverview`. \
De methode `DemoCourses` wordt ook opgeroepen via het keuzemenu in `Main`. Plaats deze code in een oneindige lus.

#### Voorbeeldinteractie

![](/img/img-3258.png)


## H11\_5 SchoolAdmin klasse CourseResult 

We willen voor de student goed kunnen bijhouden voor welke cursus er welk resultaat behaald werd. Daarvoor maken we een nieuwe klasse `CourseResult`. Daarna passen we ook de klasse `Student` aan.

#### Klassediagram

![](/img/img-3259.png)


Deze klasse bevat twee attributen: `Name` van het type string en `Result` van het type byte.

Er zijn een aantal wijzigingen in de klasse Student.

#### Klassediagram

![](/img/img-3260.png)


Om deze klasse te gebruiken in klasse `Student`, vervangen we de list `courses`door een list `courseResults`van `CourseResult`-objecten en vervangen we de methode `RegisterForCourse` door `RegisterCourseResult`.

`RegisterCourseResult`controleert eerst het resultaat. Indien dit groter is dan 20, geef dan de melding "Ongeldig cijfer!". Indien het een geldig resultaat is:

* maak je een nieuw object van de klasse `CourseResult`;
* geef je het attribuut `Name van`dit object de waarde van de parameter course;
* geef je het attribuut `Result`van dit object de waarde van de parameter result;
* voeg je het nieuwe object toe aan de lijst `courseResults`.

Doe de nodige aanpassing aan de methode `DetermineWorkload`.

`DemoStudents` en `DemoCourses` moeten ook aangepast worden:

* Verwijder de lijnen met gebruik van `RegisterForCourse` .
* We schrijven elke student in voor enkele cursussen met behulp van `RegisterCourseResult`en we kennen ook resultaten toe:\
  Said: Communicatie: 12; Programmeren: 15; Webtechnologie: 13\
  Mieke: Communicatie: 13; Programmeren: 16; Databanken:14

De uitvoer van deze 2 methodes is niet gewijzigd.

## H11\_6 SchoolAdmin Student Average

Voor een student gaan we een gemiddelde berekenen van de behaalde resultaten en we tonen dit in een overzicht.

#### Klassediagram

![](/img/img-3261.png)


Maak de methode `Average`. Deze overloopt de list `courseResults,` maakt het totaal van alle resultaten en deelt dit door het aantal resultaten.

De methode `ShowOverview`toont eerst de naam van de student met daaronder de werkbelasting en vervolgens een cijferrapport met de gevolgde cursussen en de behaalde resultaten. Onderaan staat het gemiddelde.

Pas de methode `DemoStudents` aan (in Program.cs). Schrap hier de methoden `GenerateNameCard`en `DetermineWorkload`en voer voor elke student de methode `ShowOverview`uit.

Resultaat van `DemoStudents`:

![](/img/img-3262.png)


### Oefeningen na *Properties*:

## Oefening: H11-Figures

### Leerdoelen

* werken met klassen en objecten
* gebruik maken van properties om geldige waarden af te dwingen

### Functionele analyse

Dit programma maakt enkele rechthoeken en driehoeken met gegeven afmetingen (in meter) aan, berekent hun oppervlakte en toont deze info aan de gebruiker. De rechthoeken en driehoeken die worden aangemaakt, zijn al gecodeerd in het programma. De gebruiker hoeft dus niets anders te doen dan het programma te starten.

### Technische analyse

Er is een klasse `Rectangle`met **full properties** `Width` en `Height`en een klasse `Triangle`met `Base` en `Height`. Je programma maakt de figuren die hierboven beschreven worden aan met beginwaarde `1.0` voor elke afmeting en stelt daarna hun afmetingen in via de setters voor deze properties. De oppervlakte wordt bepaald in een read-only property (dus met alleen een getter en geen setter). Deze heet `Area`en is van het type `double`.

:::info
`base` is een keyword in C#; je kan als achterliggend privaat veld  @base  gebruiken.
:::

Indien om het even welk van deze properties wordt ingesteld op `0` of minder, signaleer je dit via de code `Console.WriteLine($"Het is verboden een (afmeting) van (waarde) in te stellen!")` (zie voorbeeldcode).

:::info
De wiskundige formule voor de oppervlakte van een driehoek is basis \* hoogte / 2.
:::

Schrijf de voorbeelden uit in een `static` methode `DemoFigures` van de klasse `ClassesAndObjects`.

#### Voorbeeldinteractie(s)

(Er worden twee rechthoeken en twee driehoeken aangemaakt. De afmetingen van de eerste rechthoek worden eerst op `-1` en `0` ingesteld. Daarna krijgen ze de waarden die je ziet in het bericht hieronder. Formatteer ook met 1 cijfer na de komma.)

```
Het is verboden een breedte van -1 in te stellen!
Het is verboden een breedte van 0 in te stellen!
Een rechthoek met een breedte van 2,2m en een hoogte van 1,5m heeft een oppervlakte van 3,3m².
Een rechthoek met een breedte van 3m en een hoogte van 1m heeft een oppervlakte van 3m².
Een driehoek met een basis van 3m en een hoogte van 1m heeft een oppervlakte van 1,5m².
Een driehoek met een basis van 2m en een hoogte van 2m heeft een oppervlakte van 2m².
```

## H11\_7 SchoolAdmin properties Course

We willen elke cursus automatisch een id toewijzen en ook willen we studiepunten per cursus bijhouden. \
Daarnaast willen we een lijst bijhouden met alle objecten van de klasse Cursus.

#### Klassediagram

![](/img/img-3263.png)


Maak de **property** `CreditPoints`met een private setter.

Voeg de read-only property `Id` toe. Om telkens een volgend nummer toe te wijzen aan dit id, maak je het static attribuut `maxId` dat je de beginwaarde 1 geeft.

Maak het attribuut `AllCourses`(static); dit is een list van Course-objecten.

## H11\_8 SchoolAdmin properties CourseResult

We herschrijven de bestaande attributen naar properties

#### Klassediagram (er is geen verschil te zien)

![](/img/img-3264.png)


Van Name maak je een property `Name`.

Van Result maak je een property `Result`. Zorg ervoor dat er enkel een resultaat kan ingesteld worden dat niet meer is dan 20.

## H11\_9 SchoolAdmin Student Age

Op basis van de geboortedatum berekenen we de exacte leeftijd van de student en nemen we die mee op in het overzicht.

#### Klassediagram

![](/img/img-3265.png)


Maak de read-only property `Age`zonder achterliggend veld ('computed property'). Bereken hier eerst het verschil in jaren tussen het huidige jaar en het geboortejaar. Pas daarna dit aantal jaren eventueel aan (-1) als de student nog niet verjaard is (de maand van de verjaardag is na de huidige maand; of we zijn de maand van de verjaardag maar de verjaardag is na de huidige dag).

Voeg de leeftijd toe aan het overzicht in `ShowOverview`.\
Voorbeeld:

![](/img/img-3266.png)


##