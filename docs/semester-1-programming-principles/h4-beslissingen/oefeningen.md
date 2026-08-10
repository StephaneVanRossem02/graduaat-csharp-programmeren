# Oefeningen

Al deze oefeningen maak je in een klasse `Beslissingen`

## **Oefening: H4-ShoeSeller**

#### Leerdoelen

* flowchart omzetten naar conditionele code
* Eenvoudige conditie
* Uitbreiding: samengestelde booleaanse expressie

**Functionele analyse**

**Basis**: Maak een programma dat aan de gebruiker vraagt hoeveel paar schoenen hij/zij wenst te kopen. Ieder paar schoenen kost normaal 50 euro. Indien de gebruiker meer dan 2 paar koopt, is er 10% korting. Toon aan de gebruiker de totale prijs. 

**Uitbreiding**: Breid in een tweede stap je programma uit zodat de korting enkel geldt als de gebruiker een klantenkaart heeft.

**Technische analyse**

Maak een methode met de naam `ShoeSeller`. Maak gebruik van een `if.` Zet volgende flowchart om in code. Een `Real` in Flowgorithm stemt overeen met een `double` in C#.

**Basis**:

![](/img/img-3065.png)


**Uitbreiding:**

![](/img/img-3066.png)


#### **Voorbeeldinteractie(s)**

**Basis:**

![](/img/img-3067.png)

![](/img/img-3068.png)

**Uitbreiding:**

![](/img/img-3069.png)

## **Oefening: H4-EvenOrOdd**

#### **Leerdoelen**

* flowchart omzetten naar conditionele code
* tweevoudige conditie
* gebruik modulo

#### **Functionele analyse**

Maak een programma dat aan de gebruiker een geheel getal vraagt. Het programma geeft terug of het ingegeven getal even of oneven is.

#### **Technische analyse**

Maak een methode met de naam `EvenOrOdd`.

Een getal is even als de rest van de deling door 2 nul is. Hiervoor kan je de modulo operator gebruiken. Het teken voor de modulo is het `%` -teken.\
Voorbeelden:\
7%2 geeft 1 => 7 is oneven\
8%2 geeft 0 => 8 is even

Zet volgende flowchart om in code:

![](/img/img-3070.png)


#### **Voorbeeldinteractie(s)**

![](/img/img-3071.png)

![](/img/img-3072.png)

## **Oefening: H4-PositiveNegativeZero**

#### **Leerdoelen**

* flowchart omzetten naar conditionele code
* meervoudige conditie

#### **Functionele analyse**

Maak een programma dat aan de gebruiker een geheel getal vraagt. Het programma geeft terug of het ingegeven getal positief, negatief of 0 is.

#### **Technische analyse**

Maak een methode met de naam `PositiveNegativeZero`.

Maak gebruik van een `if` – `else if` - `else`.

Zet volgende flowchart om in code:

![](/img/img-3073.png)


**Voorbeeldinteractie(s)**

![](/img/img-3074.png)

![](/img/img-3075.png)

![](/img/img-3076.png)

## **Oefening: H4-BMICalculator**

#### **Leerdoelen**

* meervoudige conditie
* gebruik van `else if`

#### **Functionele analyse**

Maak een programma om de BMI van de gebruiker te berekenen. ([Meer info over BMI](https://nl.wikipedia.org/wiki/Queteletindex)) De BMI wordt berekend aan de hand van de lengte en het gewicht van de persoon.

De formule is: BMI = gewicht / lengte².

Je toont niet enkel de BMI maar ook een beoordeling over de BMI:

\- BMI lager dan 18,5 => ondergewicht

\- BMI vanaf 18,5 maar lager dan 25 => normaal gewicht

\- BMI vanaf 25 maar lager dan 30 => overgewicht

\- BMI vanaf 30 maar lager dan 40 => zwaarlijvig

\- BMI 40 of hoger dan 40 => ernstige obesitas

#### **Technische analyse**

Maak een methode met de naam `BMICalculator`.

Maak gebruik van een `if` – `else if` – `else if` …

#### **Voorbeeldinteractie**

![](/img/img-3077.png)

## **Oefening: H4-LargestNumberOfThree**

#### **Leerdoelen**

* meervoudige conditie
* samengestelde booleaanse expressie
* gebruik van `else if`

#### **Functionele analyse**

Maak een programma om van 3 ingegeven getallen, het grootste te bepalen.

#### **Technische analyse**

Maak een methode met de naam `LargestNumberOfThree`.

Maak gebruik van een `if` – `else if` - `else`

**Voorbeeldinteractie**

![](/img/img-3078.png)

## **Oefening: H4-Exams**

#### **Leerdoelen**

* conditie
* samengestelde booleaanse expressie

#### **Functionele analyse**

Maak een programma waarmee je aan de gebruiker het resultaat van 3 examens opvraagt. De opgevraagde resultaten zijn de behaalde punten op 100. Om te slagen moet de student een gemiddelde van meer dan 50% hebben én maximaal 1 onvoldoende.

#### **Technische analyse**

Maak een methode met de naam `Exams`.

Maak gebruik van een `if` – `else`.

**Voorbeeldinteractie**

![](/img/img-3079.png)

## Oefening: H4-OhmsLaw

#### Leerdoelen <a href="#leerdoelen-2" id="leerdoelen-2"></a>

\- conditionele berekeningen

#### Functionele analyse

De Wet van Ohm houdt in dat een elektrische stroom (voorgesteld als I) gelijk is aan een spanningsverschil (U) gedeeld door een weerstand (R), dus I = U / R.

Vraag aan de gebruiker wat hij wenst te berekenen: Spanning, Weerstand of Stroomsterkte. Vraag vervolgens de twee andere waarden. Als dus de gebruiker "Spanning" kiest, vraag je aan de gebruiker de waarden van de stroomsterkte en de weerstand. Bereken m.b.v. de Wet van Ohm de gewenste waarde en toon aan de gebruiker.

#### Technische analyse <a href="#technische-analyse-2" id="technische-analyse-2"></a>

Maak een nieuwe methode genaamd `OhmsLaw`.

Denk eraan dat de gegeven formule wiskundig gedefinieerd is. Houd rekening met het feit dat deze drie maten uitgedrukt kunnen worden in kommagetallen.

#### **V**oorbeeldinteractie(s)

![](/img/img-3080.png)

![](/img/img-3081.png)

![](/img/img-3082.png)

## Oefening H4-LeapYear

#### Functionele analyse

De gebruiker voert een jaartal in en jouw programma toont of het wel of geen schrikkeljaar is. 

#### Technische analyse

Maak een methode `LeapYear`. 

Je hebt een schrikkeljaar als het jaartal deelbaar is door 4, behalve als het ook deelbaar is door 100, tenzij het wél deelbaar is door 400. Bijvoorbeeld:

* 1997: geen schrikkeljaar
* 1996: wél schrikkeljaar
* 1900: geen schrikkeljaar
* 2000: wél schrikkeljaar

#### Voorbeeldinteractie

![](/img/img-3083.png)


## Oefening H4-PocketMoney

#### Functionele analyse

Je moet je zakgeld berekenen. Het zakgeld is standaard 20 euro maar je kan meer of minder zakgeld krijgen afhankelijk van je behaalde punten op je examen.

#### Technische analyse

Maak een methode `PocketMoney`.

Het standaard zakgeld is 20 euro. Dit bedrag kan vermeerderd of verminderd worden als volgt:

* Als je punten meer dan 15 zijn, dan krijg je 60% meer zakgeld dan het standaard bedrag.
* Als je punten meer dan 10 zijn maar minder of gelijk aan 15, krijg je ook meer zakgeld dan het standaard bedrag; namelijk 2 euro per punt dat je meer hebt dan 10.
* Als je punten 10 zijn, dan krijg je het standaard zakgeld.
* Als je punten minder dan 10 zijn maar meer dan 7, dan krijg je 30% minder zakgeld dan het standaardbedrag.
* Als je punten 7 of minder dan 7 zijn maar meer dan 5, dan krijg je 3 euro minder voor elk punt dat je minder dan 10 hebt.
* Als je punten 5 of minder zijn, dan krijg je 0 euro zakgeld.

#### Voorbeeldinteractie

![](/img/img-3084.png)


![](/img/img-3085.png)


## Keuzemenu's maken

#### Leerdoelen: <a href="#leerdoelen-5" id="leerdoelen-5"></a>

\- Conditionele functionaliteit\
\- Gebruik van de `switch`

#### Functionele analyse: <a href="#functionele-analyse-5" id="functionele-analyse-5"></a>

We willen dat de gebruiker een menu ter beschikking heeft om eerst te kiezen uit welk hoofdstuk er een oefening moet gekozen worden en vervolgens welke oefening er moet uitgevoerd worden.

#### Technische analyse

Maak in je klasse Program een hoofdmenu. Deze methode laat de gebruiker kiezen uit één van de hoofdstukken. Na de keuze wordt het scherm leeggemaakt en dan wordt de methode `SubMenu`van de juiste klasse opgeroepen.\
Elke klasse die je tot hiertoe in dit project gemaakt hebt, voorzie je dus van een methode `SubMenu`, zodat de gebruiker kan kiezen uit de oefeningen (=methodes) binnen het gekozen hoofdstuk.

#### Voorbeeldinteractie

![](/img/img-3086.png)

![](/img/img-3087.png)

![](/img/img-3088.png)

![](/img/img-3089.png)