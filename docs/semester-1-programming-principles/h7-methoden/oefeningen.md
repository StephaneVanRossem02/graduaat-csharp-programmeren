# Oefeningen

## Oefeningen

Al deze oefeningen schrijf je in een klasse `Methodes`.

### **Oefening H7-VoidOperations**

#### **Leerdoelen**

* Methodes definiëren met parameters
* Oproepen van de methodes

#### Functionele analyse

Je stelt een aantal typische berekeningen voor met methodes.

#### **Technische analyse**

Voor deze oefening schrijf je **meerdere** methodes. Je plaatst er slechts één in je keuzemenu, namelijk `VoidOperations`. Deze voert alle andere methodes van deze oefening één voor één uit.

Enkel `VoidOperations` mag `Console.ReadLine` statements bevatten. De andere methodes **tonen** hun resultaat op het scherm door middel van `Console.WriteLine` statements **in de methode zelf** die het resultaat bepaalt. (Met andere woorden, alle methodes zijn `void`.)

De andere methodes zijn:

* `CalculateRadius` die de straal van een cirkel kan berekenen waarvan je de diameter meegeeft (de diameter geef je mee als argument). De straal is de helft van de diameter.
* Idem voor `CalculateCircumference` en `CalculateArea .` De omtrek is de diameter maal het getal pi, dat je voorstelt als `Math.Pi`. De oppervlakte is straal maal straal maal pi.
* Methode `Maximum` die het grootste van 2 getallen teruggeeft (beide getallen geef je mee als argument).
* Methode `IsEven` die toont of een getal even of oneven is.
* Methode `ShowOddNumbers` die alle oneven getallen van 1 tot n toont waarbij n als argument wordt meegegeven.

#### Voorbeeldinteractie

![](/img/img-3133.png)

### Oefening: H7-ReturnOperations

**Leerdoelen**

* Methodes definiëren met parameters en returnwaarde
* Oproepen van de methodes
* Gebruiken van returnwaarden

#### Functionele analyse

Je stelt een aantal typische berekeningen voor met methodes die geschikt zijn voor gebruik in andere programma's.

#### **Technische analyse**

Voor deze oefening schrijf je **meerdere** methodes. Je plaatst er slechts één in je keuzemenu, namelijk `ReturnOperations`. Deze voert alle andere methodes van deze oefening één voor één uit.

Enkel `ReturnOperations`mag **`Console.ReadLine` of `Console.WriteLine`** statements bevatten. De andere methodes berekenen hun resultaat, zonder het te tonen op het scherm. Met andere woorden, hun return type is niet `void`.

De andere methodes zijn:

* `CalculateRadiusWithReturn` die de straal van een cirkel kan berekenen waarvan je de diameter meegeeft (de diameter geef je mee als argument). De straal is de helft van de diameter. Voor je deze toont, rond je ze **in** af tot één cijfer na de komma met `Math.Round(reedsBerekendeStraal,1)`.
* Idem voor `CalculateCircumferenceWithReturn` en `CalculateAreaWithReturn` . Ook deze waarden moet je, nadat ze uitgerekend zijn, afronden tot 1 cijfer na de komma.
* Methode `MaximumReturn` die het grootste van 2 getallen teruggeeft (beide getallen geef je mee als argument).
* Methode `IsEvenWithReturn` die bepaalt of een getal even of oneven is. De returnwaarde vertelt dus of iets waar of niet waar is.
* Methode  `DetermineEvnNumbersWithReturn.` Deze geeft als antwoord een `List` van alle even getallen tot n. toont deze getallen dan, gescheiden door een komma.

#### Voorbeeldinteractie

Zoals boven, met de vermelde aanpassingen (afronding tot 1 cijfer na de komma en getallen gescheiden door `,`)

### **Oefening H7-EmailadresGenerator**

#### **Leerdoelen**

* Methodes definiëren met return type en parameters
* Oproepen van de methodes

#### **Functionele analyse**

Schrijf een programma dat op basis van je voornaam, naam en het feit of je al dan niet een student bent een AP e-mailadres genereert. Het e-mailadres moet uit allemaal kleine letters bestaan en moet een geldig e-mailadres zijn.

Je mag geen String methodes gebruiken maar je schrijft je eigen methodes. Als aanzet is de methode StringToLower al uitgewerkt.

**Uitbreiding**: kijk of voor al je lectoren en medestudenten het gegenereerde e-mailadres geldig is. Pas eventueel je code aan indien niet.

#### Technische analyse

Je kan eventueel volgende flowchart gebruiken:



Voorbeeldinteractie

![](/img/img-0148.png)

### H7-Triangle

#### Functionele analyse

We schrijven een simpel tekenprogramma, dat driehoeken van een bepaalde afmeting, met een bepaald patroon kan tekenen.

#### Technische analyse

Schrijf een methode `DrawTriangle`. Deze methode verwacht twee zaken: een karakter om het patroon voor te stellen en de hoogte van de driehoek. Ze roept zelf **meermaals** een andere methode op,  `DrawLine`, die één regel van de driehoek tekent. `DrawLine` toont niets op het scherm via `Console.WriteLine`!

#### Voorbeeldinteractie

```csharp
Hoe hoog is de driehoek?
> 4
Welk karakter gebruiken we als patroon?
> #
#
##
###
####
```

```csharp
Hoe hoog is de driehoek?
> 3
Welk karakter gebruiken we als patroon?
> .
.
..
...
```