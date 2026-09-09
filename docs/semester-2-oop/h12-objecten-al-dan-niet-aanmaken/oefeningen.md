# Oefeningen

Werk verder in de klasse `ClassesAndObjects`:

## Oefening: H12-FiguresWithConstructor

### Leerdoelen

* werken met klassen en objecten
* gebruik maken van properties om geldige waarden af te dwingen
* gebruik van een constructor

### Functionele analyse

Functioneel is dit programma hetzelfde als H11-Figures.

### Technische analyse

Voorzie je eerdere figuren (`Rectangle`en `Triangle`) van een constructor met twee parameters, waarvan de tweede telkens de hoogte voorstelt en de eerste de andere afmeting. Zorg dat deze constructor gebruik maakt van de properties, zodat je makkelijker objecten met de juiste afmetingen kan maken en toch dezelfde foutmeldingen krijgt als eerder.

Je zal een extra, parameterloze, constructor moeten toevoegen omdat `DemoFigures`van eerder moet blijven werken. Schrijf een nieuwe methode `DemoFiguresWithConstructor om` te tonen dat je hetzelfde kan bereiken met de constructor met twee parameters. Deze moet ook opgeroepen kunnen worden van uit je keuzemenu.

#### Voorbeeldinteractie(s)

Schrijf `DemoFiguresWithConstructor` zodanig dat je exact onderstaande interactie krijgt:

```
Het is verboden een breedte van -1 in te stellen!
Het is verboden een hoogte van 0 in te stellen!
Een rechthoek met een breedte van 2,2m en een hoogte van 1,5m heeft een oppervlakte van 3,3m².
Een rechthoek met een breedte van 3m en een hoogte van 1m heeft een oppervlakte van 3,0m².
Een driehoek met een basis van 3m en een hoogte van 1m heeft een oppervlakte van 1,5m².
Een driehoek met een basis van 2m en een hoogte van 2m heeft een oppervlakte van 2,0m².
```

## H12\_1 SchoolAdmin Student Constructor

We willen een constructor gebruiken in `Student` om zeker te zijn dat we de nodige attributen en properties initialiseren.

#### Klassediagram

![](/img/img-3205.png)


Maak de constructor met 2 parameters. Zorg er ook voor dat je `StudentNumber`de waarde van `StudentCounter` toewijst en dat je `StudentCounter` met 1 verhoogt.

De default constructor kan nu niet meer gebruikt worden. Pas de code aan van `DemoStudents` met gebruik van de nieuwe constructor. Neem diezelfde code over in `DemoCourses`(zonder `ShowOverview`).

## H12\_2 SchoolAdmin Cursus Constructor

We wensen op verschillende manieren `Course`-objecten te kunnen aanmaken. 

#### Klassediagram

![](/img/img-3206.png)


Maak eerst de constructor met 3 parameters (titel, studenten en studiepunten). Initialiseer hier de nodige attributen en properties en zorg voor een juist `Id` van de cursus met behulp van `maxId`. Voeg het nieuwe object ook toe aan de list `AllCourses`.

Maak de tweede constructor met een chaining naar de eerste. Omdat een cursus meestal 3 studiepunten is, gaan we deze in dat geval gebruiken.

De derde met maar één parameter gebruiken we als er nog geen studentenlijst kan meegegeven worden. Gebruik hier een chaining naar de tweede constructor met een nieuwe lege lijst van studenten.

Pas de methode `ShowOverview`aan zodat naast de `Title`van de cursus ook het `Id` getoond wordt tussen haakjes alsook het aantal studiepunten tussen haakjes met "stp" erbij.

Voorbeeld van het resultaat van ShowOverview:

![](/img/img-3207.png)


Gebruik de 3 constructors in `DemoCourses`:\
Herschrijf de code:\
\- plaats eerst de code om de studenten said en mieke te maken;\
\- maak vervolgens een List van type `Student` en voeg said en mieke toe;\
\- maak een cursus communicatie met de lijst van studenten die je net gemaakt hebt en met 6 studiepunten (constructor 1);\
\- maak een cursus programmeren met dezelfde lijst van studenten en 3 studiepunten (constructor 2);\
\- maak cursussen webtechnologie en databanken met enkel de titel (constructor 3);\
\- voeg said toe aan de list `Students`van webtechnologie en mieke aan die van databanken;\
\- toon de overzichten van de cursussen.

## H12\_3 SchoolAdmin CursusResultaat Constructor

We willen gemakkelijker `CourseResult`-objecten kunnen aanmaken met behulp van een constructor.

#### Klassediagram

![](/img/img-3208.png)


Maak de property `Name`read-only.

Voeg een constructor toe met de parameters `name` en `result`.

De default constructor kan nu niet meer gebruikt worden en dat heeft gevolgen in de klasse Student. Pas de methode `RegisterCourseResult` aan.

## H12\_4 SchoolAdmin Student uit tekst lezen

na spelen met strings

Zorg ervoor dat een gebruiker één regel tekst kan intypen met alle gegevens over een student, zonder veel verdere interactie.

Schrijf hiervoor in Program.cs een methode `ReadTextFormatStudent`die vraagt om de tekstvoorstelling van één student in te typen. Je mag veronderstellen dat de gebruiker dat in het juiste formaat ingeeft;  eerst de naam van de student, gevolgd door een puntkomma, gevolgd door de geboortedag, puntkomma, geboortemaand, puntkomma, geboortejaar. Alle elementen van de geboortedatum worden voorgesteld als getallen, volgens de afspraken die je ook toepast om datums te noteren in het Belgische formaat. Het kan zijn dat er ook informatie is om de student meteen te registreren voor een of meerdere cursusresultaten. In dat geval staat er na het geboortejaar nog een puntkomma, dan de naam van de cursus, dan het behaalde cijfer. Per cursus herhaalt deze groep van twee elementen zich.\
Bijvoorbeeld: 

`Bart Van Steen;04;03;1998;Boekhouden;14;Macro-economie;8;Frans, deel 2;18`

Gebruik deze gegevens om een nieuw student-object te maken en de student te registreren voor de ingegeven cursussen. Toon vervolgens het overzicht van de student.

> ?? De student hoeft niet opgenomen te worden in de lijst`Students` van een `Course`-object. We verbeteren dit later nog.

### Voorbeeldinteractie

```
Geef de tekstvoorstelling van 1 student in CSV-formaat:
>Bart Van Steen;04;03;1998;Boekhouden;14;Macro-economie;8;Frans, deel 2;18

Bart Van Steen, 22 jaar

Cijferrapport:
**********
Boekhouden:     14
Macro-economie: 8
Frans, deel 2:  18
Gemiddelde      13,3
```

## Oefening: H12-FoodPurchase

### Leerdoelen

* herhalingsoefening van onderwerpen 10 en 11

### Functionele analyse

We willen de aankoop van één bepaald voedingsproduct voorstellen. Je kan je dit inbeelden als één regel op een kasticket.

### Technische analyse

Schrijf een eigen klasse `FoodPurchase`. Het klassendiagram ziet er als volgt uit:

![](/img/img-3209.png)


Deze klasse bevat:

* Attribuut `Refrigerate`:
  * Hierin wordt bijgehouden of het voedingsproduct koel moet bewaard worden
* Property  `ProductName`:
  * Read-only
  * Wordt altijd in hoofdletters weergegeven
* Property `Number`:
  * Bevat het aantal aangekochte producten
  * Als er hier een waarde kleiner of gelijk aan 0 wordt gegeven, dan toon je: “Ongeldig aantal”
* Property `UnitPrice`:
  * Prijs van het product
  * Er wordt een foutmelding geprint op de console als de prijs kleiner is dan 0 of groter is dan 5000: “Ongeldige eenheidsprijs”
* Computed property `ExpirationDate`:
  * Dit is de vervaldatum van het product
  * Deze is altijd 2 maanden later.<br/>
* `Constructor`:
  * Parameters: de naam van het product, het aantal, de prijs en het al dan niet koud bewaren
* Methode `CalculateTotalPrice`:
  * Deze geeft prijs x aantal

In de klasse `ClassesAndObjects` maak je:

* Methode `DemoPurchase`:
  * De methode maakt eerst een object waarbij er 2 stuks kaas worden aangekocht van 2,45 euro. Toon hiervan de totaalprijs en de vervaldatum.
  * Vervolgens maak je een object waarbij 0 stuks boter wordt aangekocht aan 5555 euro.

### Voorbeeldinteractie

![](/img/img-3210.png)