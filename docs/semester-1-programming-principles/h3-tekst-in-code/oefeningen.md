# Oefeningen

Al deze oefeningen maak je in een klasse `StringsEnHunMethoden`

### Oefening: CapitalLetters <a href="#oefening-variabelenenhoofdletters" id="oefening-variabelenenhoofdletters"></a>

#### Leerdoelen <a href="#leerdoelen" id="leerdoelen"></a>

* gebruik van variabelen om input en output op te slaan en te tonen
* functionaliteit van strings

#### Functionele analyse <a href="#functionele-analyse" id="functionele-analyse"></a>

Een applicatie vraagt je tekst in te voeren die dan daarna zal worden getoond met allemaal hoofdletters.

#### Technische analyse <a href="#technische-analyse" id="technische-analyse"></a>

Noem de methode voor deze oefening `CapitalLetters`.

#### voorbeeldinteractie(s) <a href="#voorbeeldinteracties" id="voorbeeldinteracties"></a>

```csharp
Welke tekst moet ik omzetten?
> Hello World
HELLO WORLD
```

#### Technische hulp <a href="#technische-hulp" id="technische-hulp"></a>

**Programmaverloop**

Lees de gebruikersinvoer van de console en sla deze op in een variabele.\
Zet de inhoud van deze variabele om in hoofdletters. \
Uiteindelijk geef je dan het resultaat weer in de console.

**Testscenario's**

* Voer tekst in met spaties
* Voer tekst in van meer dan 100 karakters
* Voer tekst in van 1 karakter
* Voer geen tekst in

## Oefening: H3-string-interpolation <a href="#oefening-h3-string-interpolation" id="oefening-h3-string-interpolation"></a>

### Leerdoelen <a href="#leerdoelen-2" id="leerdoelen-2"></a>

* gebruik van string interpolation

### Functionele analyse <a href="#functionele-analyse-2" id="functionele-analyse-2"></a>

Zelfde als oefeningen `MultiplicationTables` en `Space` van vorig hoofdstuk.

### Technische analyse <a href="#technische-analyse-2" id="technische-analyse-2"></a>

Je moet twee methoden schrijven. Noem de eerste `MultiplicationTablesStringInterpolation` en de tweede `SpaceStringInterpolation`. Deze doen net hetzelfde als hun tegenhangers uit het vorige hoofdstuk, maar je bouwt de getoonde tekst op met stringinterpolatie in plaats van via `+` en/of `Console.Write`.

### voorbeeldinteractie(s) <a href="#voorbeeldinteracties-2" id="voorbeeldinteracties-2"></a>

Zie oefening H2-MultiplicationTables en H2-Space.

### Technische hulp <a href="#technische-hulp-2" id="technische-hulp-2"></a>

#### Programmaverloop <a href="#programmaverloop-2" id="programmaverloop-2"></a>

Pas string interpolatie m.b.v. `$` toe om de veranderlijke onderdelen van de output in te vullen.

#### Testscenario's <a href="#testscenarios-2" id="testscenarios-2"></a>

* Zie oefening H2-MultiplicationTables en H2-Space.

## Oefening: H3-VATCalculation <a href="#oefening-h3-bereken-btw" id="oefening-h3-bereken-btw"></a>

### Leerdoelen <a href="#leerdoelen-3" id="leerdoelen-3"></a>

* gebruik van string interpolation

### Functionele analyse <a href="#functionele-analyse-3" id="functionele-analyse-3"></a>

Een programma vraagt een bedrag en vervolgens btw percentage in te geven waarna het bedrag incl. btw-percentage wordt weergegeven.

### Technische analyse <a href="#technische-analyse-3" id="technische-analyse-3"></a>

Noem de methode voor deze oefening `VATCalculation`.

### voorbeeldinteractie(s) <a href="#voorbeeldinteracties-3" id="voorbeeldinteracties-3"></a>

![](/img/img-3054.png)

### Technische hulp <a href="#technische-hulp-3" id="technische-hulp-3"></a>

#### Programmaverloop <a href="#programmaverloop-3" id="programmaverloop-3"></a>

Het bedrag dat wordt ingevoerd moet geconverteerd worden naar een `int` met `Convert.ToInt32`.

Pas string interpolatie toe om de output te tonen.

#### Testscenario's <a href="#testscenarios-3" id="testscenarios-3"></a>

* Typ tekst in
* Geef een veel te groot bedrag in

## Oefening: H3-LeetSpeak <a href="#oefening-h3-leetspeak" id="oefening-h3-leetspeak"></a>

### Leerdoelen <a href="#leerdoelen-4" id="leerdoelen-4"></a>

* functionaliteit van strings leren kennen

### Functionele analyse <a href="#functionele-analyse-4" id="functionele-analyse-4"></a>

We willen tekst omvormen naar een ander formaat. Laat de gebruiker een lijn tekst ingeven en haal er alle tussenliggende spaties uit en vervang de a's door @

### Technische analyse <a href="#technische-analyse-4" id="technische-analyse-4"></a>

Gebruik `Console.ReadLine` om tekst in te lezen en hou bij in een variabele. Pas de nodige string methodes toe om het resultaat te verkrijgen. Noem je methode voor dit programma `LeetSpeak`.

### Programmaverloop <a href="#programmaverloop-4" id="programmaverloop-4"></a>

```csharp
Geef je tekst in
> Oefening baart kunst!
Oefeningb@@rtkunst!
```

### Testscenario's <a href="#testscenarios-4" id="testscenarios-4"></a>

* test met een zin zonder a's
* test met een zin met vijf a's of meer
* test met een lege string

## Oefening: H3-Instructions <a href="#oefening-h3-instructies" id="oefening-h3-instructies"></a>

### Leerdoelen <a href="#leerdoelen-5" id="leerdoelen-5"></a>

* leren werken met stringinterpolatie
* leren werken met methodes van strings

### Functionele analyse <a href="#functionele-analyse-5" id="functionele-analyse-5"></a>

We willen met behulp van een programma instructies genereren voor de gebruiker. Meerbepaald wordt automatisch aangegeven in welke map de gebruiker bepaalde bestanden op een UNIX-achtig systeem moet bijhouden.

Voor deze oefening is het verplicht gebruik te maken van een (geïnterpoleerde) string.

### Technische analyse <a href="#technische-analyse-5" id="technische-analyse-5"></a>

Op basis van de voornaam van de student en de naam van de cursus wordt de map gegeven die de student moet aanmaken (`/home/`, eerste 3 letters voornaam, in hoofdletters met submap de naam van de cursus. Noem je methode `Instructions`.

### Programmaverloop <a href="#programmaverloop-5" id="programmaverloop-5"></a>

```csharp
Wat is je naam?
> Vincent
Wat is de naam van de cursus?
> Programmeren
Maak een map als volgt: /home/VIN/Programmeren
```

## Oefening: H3-Lotto <a href="#oefening-h3-lotto" id="oefening-h3-lotto"></a>

### Leerdoelen <a href="#leerdoelen-6" id="leerdoelen-6"></a>

* functionaliteit van strings
* stringinterpolatie

### Functionele analyse <a href="#functionele-analyse-6" id="functionele-analyse-6"></a>

De gebruiker voert zijn lottocijfers in. We willen deze op een overzichtelijke manier weergeven.

### Technische analyse <a href="#technische-analyse-6" id="technische-analyse-6"></a>

Laat de lottocijfers allemaal achter elkaar ingeven, gescheiden door komma's, zonder spaties. De gebruiker wordt verondersteld cijfers onder de 10 in te geven voorafgegaan door een nul. Gebruik de juiste methode om de cijfers uit te string te "knippen" en gebruik het karakter `|` om de uitvoer te scheiden. Noem je methode `Lotto`.

### Voorbeeldinteractie <a href="#voorbeeldinteractie" id="voorbeeldinteractie"></a>

```csharp
Wat zijn je cijfers (tussen 01 en 45)?
> 05,08,13,18,27,44
Je cijfers zijn:
05|08|13
18|27|44
```

## Oefening: H3-SumOfNumbers <a href="#oefening-h3-som-van-cijfers" id="oefening-h3-som-van-cijfers"></a>

### Leerdoelen <a href="#leerdoelen-7" id="leerdoelen-7"></a>

* functionaliteit van strings
* stringinterpolatie

### Functionele analyse <a href="#functionele-analyse-7" id="functionele-analyse-7"></a>

De gebruiker voert een getal in. Het programma berekent de som van de cijfers in de decimale voorstelling van dit getal.

### Technische analyse <a href="#technische-analyse-7" id="technische-analyse-7"></a>

We veronderstellen dat de gebruiker een getal van exact vijf cijfers ingeeft, desnoods vooraan opgevuld met nullen. Noem je methode `SumOfNumbers`.

### Voorbeeldinteractie <a href="#voorbeeldinteractie-2" id="voorbeeldinteractie-2"></a>

Onderstaand voorbeeld komt uit op 27, want 6 + 3 + 9 + 2 + 7 is 27.

```csharp
Gelieve een getal in te voeren dat bestaat uit exact 5 decimale cijfers.
> 63927
De som is 27.
```

## Oefening: H3-NameFromEmail <a href="#oefening-h3-naam-uit-mail" id="oefening-h3-naam-uit-mail"></a>

### Leerdoelen <a href="#leerdoelen-8" id="leerdoelen-8"></a>

* functionaliteit van strings
* stringinterpolatie

### Functionele analyse <a href="#functionele-analyse-8" id="functionele-analyse-8"></a>

De gebruiker voert een e-mailadres in. Jouw programma toont hieruit het gedeelte dat de naam voorstelt, in hoofdletters.

### Technische analyse <a href="#technische-analyse-8" id="technische-analyse-8"></a>

We veronderstellen dat de gebruiker een juist mailadres invult. Noem je methode `NameFromEmail`.

### Voorbeeldinteractie <a href="#voorbeeldinteractie-3" id="voorbeeldinteractie-3"></a>

```csharp
Geef je e-mailadres:
> ann.debrabandere@ap.be
Je naam uit je e-mail is: ANN.DEBRABANDERE
```

## Oefening: H3-FirstLetterAndSurname <a href="#oefening-h3-eerste-letter-en-achternaam" id="oefening-h3-eerste-letter-en-achternaam"></a>

### Leerdoelen <a href="#leerdoelen-9" id="leerdoelen-9"></a>

* functionaliteit van strings
* stringinterpolatie

### Functionele analyse <a href="#functionele-analyse-9" id="functionele-analyse-9"></a>

De gebruiker voert zijn naam in. Je programma toont dan de eerste letter van de voornaam en de familienaam.

### Technische analyse <a href="#technische-analyse-9" id="technische-analyse-9"></a>

We veronderstellen dat de gebruiker een voornaam zonder spaties invult. Noem je methode `FirstLetterAndSurname`.

### Voorbeeldinteractie <a href="#voorbeeldinteractie-4" id="voorbeeldinteractie-4"></a>

```csharp
Geef je naam:
> Ann De Brabandere
De eerste letter van je naam is: A.
Je achternaam is: De Brabandere
```

## Oefening: H3-AccessCode <a href="#oefening-h3-toegangscode" id="oefening-h3-toegangscode"></a>

### Leerdoelen <a href="#leerdoelen-10" id="leerdoelen-10"></a>

* functionaliteit van strings
* stringinterpolatie
* omzetting tussen tekst en getal

### Functionele analyse <a href="#functionele-analyse-10" id="functionele-analyse-10"></a>

De gebruiker voert enkele persoonlijke gegevens in en op basis hiervan wordt een persoonlijke toegangscode gegenereerd.

### Technische analyse <a href="#technische-analyse-10" id="technische-analyse-10"></a>

Noem je methode `AccessCode`. De code van vier tot vijf cijfers wordt als volgt bepaald:

* het eerste symbool is de voorlaatste letter van de naam, in kleine letters
* het tweede symbool is de laatste letter van de naam, in hoofdletters
* het derde symbool is het laatste cijfer van het geboortejaar
* het vierde (en eventueel vijfde) symbool is het eerste cijfer van de postcode, in het kwadraat (dus vermenigvuldigd met zichzelf)

### Voorbeeldinteractie <a href="#voorbeeldinteractie-5" id="voorbeeldinteractie-5"></a>

```csharp
Geef je naam: > Janssens
Geef je geboortejaar: > 2001
Geef je postcode: > 2000
Je toegangscode is nS14
```

###