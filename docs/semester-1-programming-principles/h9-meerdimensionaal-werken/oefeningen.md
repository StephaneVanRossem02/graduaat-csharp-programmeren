# Oefeningen

## Inleiding

Al deze oefeningen maak je als statische methoden van een klasse Meerdimensionaal. Je kan elk van deze methoden uitvoeren via een keuzemenu, zoals bij vorige hoofdstukken.

## H9 - FillRandom

### Leerdoelen

Gebruik van een 2 dimensionale array en `Random`.

### Functionele analyse

Vul een 2D array met willekeurige getallen en maak de som van alle getallen.

### Technische analyse

Maak in een methode `FillRandom` een twee dimensionale array van 4 rijen en 4 kolommen. 

Vul deze array met willekeurige getallen van 0 tot en met 9.

Maak de som van alle getallen.

Toon de inhoud van de array zoals in het voorbeeld (je kan "\t" gebruiken voor de afstand tussen de getallen) en toon de som.

### Voorbeeldinteractie

![](/img/img-3154.png)


<OefeningAssistent oefening="H9-FillRandom" hoofdstuk="H9" />

## H9 - MultiplicationTables

### Leerdoelen

Gebruik van een 2 dimensionale array.

### Functionele analyse

In een twee dimensionale array moet je de tafels van vermenigvuldiging van 1 tot en met 10 plaatsen en vervolgens tonen.

### Technische analyse

Maak in een methode `MultiplicationTables`een twee dimensionale array van 10 rijen en 10 kolommen. Plaats daarin de producten van de tafels van vermenigvuldiging en toon de inhoud zoals in het voorbeeld.

### Voorbeeldinteractie

![](/img/img-3155.png)


```csharp
// Tip
table[row,column]:d3
```

<OefeningAssistent oefening="H9-MultiplicationTables" hoofdstuk="H9" />

## H9 - MakingTeams

### Leerdoelen

Gebruik van één en twee dimensionale arrays.

### Functionele analyse

Je moet 3 teams samenstellen en de samenstelling bijhouden. Dit doe je op basis van 6 gegeven namen.

### Technische analyse

Voeg een nieuwe methode `MakingTeams` toe aan de klasse. 

Hierin maak je eerst een array met 6 verschillende namen. Bijvoorbeeld: 

`string[] names = { "Els", "Ali", "John", "Hanna", "Toon", "Mora" };`

Maak vervolgens een twee dimensionale array voor de teams. Er zijn 3 teams. Op de eerste plaats van elke rij moet de naam van het team komen. Op plaats 2 en 3 komen de namen van de teamspelers.

Vraag eerst aan de gebruiker om de namen van de teams in te geven.

Vervolgens verdeel je de namen over de spelersplaatsen: de eerste en de tweede naam komen in het eerste team, de derde en vierde in het tweede team, ...\
Toon de samenstelling van de teams zoals in het voorbeeld.

### Voorbeeldinteractie

![](/img/img-3156.png)


<OefeningAssistent oefening="H9-MakingTeams" hoofdstuk="H9" />

## H9-Multiplications

### Leerdoelen

Werken met 2 dimensionale arrays.\
Gebruik van methoden met parameters. 

### Functionele analyse

Met willekeurige getallen kan de gebruiker de tafels van vermenigvuldiging oefenen. Op het einde wordt het aantal correcte antwoorden getoond.

### Technische analyse

Maak een methode `Multiplications`. Hierin maak je een 2D array met 10 rijen en 3 kolommen. In kolom 1 en 2 zet je willekeurige getallen van 1 tot en met 12.\
In de 3de kolom bereken je het resultaat van de vermenigvuldiging van de 2 vorige getallen in de rij. Bijvoorbeeld:

![](/img/img-3157.png)


Roep vervolgens een methode `PracticeMultiplications` op waaraan je de 2 dimensionale array meegeeft als argument.  In deze methode laat je voor elke rij uit de array door de gebruiker het product berekenen van het getal uit de eerste kolom en het getal uit de 2de kolom. Toon telkens of het product  correct of fout is (d.w\.z. of het gelijk is aan het getal in de 3de kolom). Bereken hoeveel keer de gebruiker het juiste antwoord gegeven heeft en geef dit resultaat terug.

Toon tenslotte in `Multiplications` het behaalde resultaat.

### Voorbeeldinteractie

![](/img/img-3158.png)


<OefeningAssistent oefening="H9-Multiplications" hoofdstuk="H9" />

## H9-SumRowN

### Leerdoelen

* Werken met multidimensionale arrays

### Functionele analyse

We wensen de gegevens in één rij te groeperen door hun som te bepalen, een beetje zoals je dat in een Excel spreadsheet zou kunnen doen.

### Technische analyse

Schrijf in de klasse `Meerdimensionaal` een methode `SumRowN`. Deze heeft twee parameters: een meerdimensionale array van `double` en een rijnummer (een `int`). De returnwaarde is de som van alle waarden op de rij met het gevraagde nummer.

Deze methode toont niets op de console, maar je kan ze wel testen via deze voorbeeldcode, die je mag gebruiken wanneer deze oefening wordt opgestart via het keuzemenu:

```csharp
double[,] numbers = {{4.2, 8.1, 3.3},
                     {2.0, 4.0, 6.0},
                     {3.1,3.2,3.3}};
Console.WriteLine("Van welke rij wil je de som zien?");
int row = Convert.ToInt32(Console.ReadLine());
Console.WriteLine(SumRowN(numbers,row));
```

<OefeningAssistent oefening="H9-SumRowN" hoofdstuk="H9" />

## H09-RowSums

### Leerdoelen

* Werken met multidimensionale arrays

### Functionele analyse

We wensen de gegevens in één rij te groeperen door hun som te bepalen, een beetje zoals je dat in een Excel spreadsheet zou kunnen doen.

### Technische analyse

Schrijf in de klasse `Meerdimensionaal` een methode `RowSums`. Deze maakt een tweedimensionale array met het gevraagde aantal rijen en het gevraagde aantal kolommen aan. Je mag veronderstellen dat er een geldig aantal wordt ingegeven. Vervolgens vraagt ze, rij per rij en kolom per kolom, een getalwaarde. Wanneer elke positie is ingevuld, toont ze de som per rij van de ingegeven getallen.

### Voorbeeldinteractie

```csharp
Hoe veel rijen telt je array?
> 3
Hoe veel kolommen telt je array?
> 2
Waarde voor rij 1, kolom 1?
> 4
Waarde voor rij 1, kolom 2?
> 2
Waarde voor rij 2, kolom 1?
> 1
Waarde voor rij 2, kolom 2?
> 1
Waarde voor rij 3, kolom 1?
> 7
Waarde voor rij 3, kolom 2?
> 9
Sommen per rij:
6
2
16
```

<OefeningAssistent oefening="H9-RowSums" hoofdstuk="H9" />

## H09-Pixels

### Leerdoelen

* Werken met multidimensionale arrays
* Werken met enumeratietypes

### Functionele analyse

We willen een simpel tekenprogramma maken in de terminal. De gebruiker kan pixel per pixel een gewenste kleur aangeven.

### Technische analyse

Schrijf in `Meerdimensionaal` een methode `Pixels`.

Vraag hierin eerst aan de gebruiker welke afmetingen hij wil gebruiken voor zijn afbeelding. Dit bepaalt het aantal rijen en kolommen en dus het aantal pixels. Maak vervolgens een array van `ConsoleColor` waarden aan met deze afmetingen. Vraag tenslotte in een lus wat de gebruiker wil doen:

* een pixel kleuren
  * vraag hierbij de rij-index en kolom-index
  * vraag ten slotte in welke kleur deze moet worden ingevuld
    * je kan sneller een array van alle kleuren krijgen met volgende code: `ConsoleColor[] kleuren = (ConsoleColor[]) Enum.GetValues(typeof(ConsoleColor));`
    * je hoeft deze instructie niet volledig te begrijpen: ze doet hetzelfde als `ConsoleColor[] kleuren = {ConsoleColor.Back, ConsoleColor.DarkBlue, ...}` maar vraagt gewoon minder typwerk
* de afbeelding zoals ze momenteel is tonen
  * toon hiervoor elke pixel als een spatie met `Console.Write(" ")`

### Voorbeeldinteractie

![](/img/img-3159.png)

<OefeningAssistent oefening="H9-Pixels" hoofdstuk="H9" />

## H09-color-filter

### Leerdoelen

* Werken met multidimensionale arrays
* Werken met enumeratietypes

### Functionele analyse

We zullen ons tekenprogramma uitbreiden met een extra functie die de array bewerkt. Met andere woorden, een (simpele) afbeeldingsfilter. Deze zal bepaalde pixels automatisch rood kleuren.

### Technische analyse

Schrijf een functie `RedFilter`. Deze heeft een afbeelding (een `ConsoleColor[,]`) als invoer en vervangt alle vakjes die zich op en oneven rij **én** een oneven kolom bevinden door de kleur rood. Ze toont de afbeelding niet.

Deze oefening kan je niet rechtstreeks oproepen via het keuzemenu voor deze klasse. Het wordt een extra optie om iets met je afbeelding te doen.

### Voorbeeldinteractie

```csharp
Wat wil je doen?
1. een pixel kleuren
2. afbeelding tonen
3. roodfilter toepassen
```

<OefeningAssistent oefening="H9-RedFilter" hoofdstuk="H9" />

## H09-triangle-filter

### Leerdoelen

* Werken met multidimensionale arrays
* Werken onderling afhankelijke indexen

### Functionele analyse

We zullen ons tekenprogramma uitbreiden met nog een extra functie die de array bewerkt. Deze functie "knipt" de afbeelding diagonaal in twee.

### Technische analyse

Schrijf een functie `LowerTriangleFilter`. Deze heeft een afbeelding (een `ConsoleColor[,]`). Ze zorgt ervoor dat alle pixels op of onder de diagonaal van links boven tot rechts onder wit worden gemaakt. Dit vereist wat te veel rekenwerk als de afbeelding geen vierkant is, dus geef de foutmelding `"deze filter kan niet worden toegepast op deze afbeelding"` als het aantal rijen verschilt van het aantal kolommen.

Deze oefening kan je niet rechtstreeks oproepen via het keuzemenu voor deze klasse. Het wordt een extra optie om iets met je afbeelding te doen.

### Voorbeeldinteractie

```csharp
Wat wil je doen?
1. een pixel kleuren
2. afbeelding tonen
3. roodfilter toepassen
4. driehoeksfilter toepassen
```

<OefeningAssistent oefening="H9-TriangleFilter" hoofdstuk="H9" />

## H09-HeatmapPaardensprong

### Leerdoelen

* Werken met multidimensionale arrays
* Werken met geneste iteratie
* Werken met Random

### Functionele analyse

Ik wil een paard een aantal willekeurige (random) sprongen laten maken op een schaakbord vertrekkende van een gegeven positie.

Na de sprongen wil ik een "heatmap" van deze sprongen. Hoe vaak is het paard op een positie geweest.

Volg de conventie:

![](/img/img-3160.png)

### Technische analyse

Schrijf een nieuwe klasse `HeatmapPaardensprong`. Het startpunt in deze klasse is de methode `HeatmapPaardensprongMain`.

Vraag hierin eerst aan de gebruiker hoe vaak het paard moet springen en vraag ook de beginpositie in de vorm A1..H8

Je gaat vervolgens vertrekkende van deze positie een aantal willekeurige sprongen kiezen. Per sprong zijn er maximaal 8 mogelijkheden (zie afbeelding). Je zorgt er voor dat de sprong geldig is (binnen het bord). Deze positie is de startpositie voor de volgende sprong. De positie zelf is ook bezocht, dat houd je bij.

### Voorbeeldinteractie

![](/img/img-3161.png)

<OefeningAssistent oefening="H9-HeatmapKnightMoves" hoofdstuk="H9" />

## H09-ConwayGameOfLife

### Leerdoelen

* Werken met multidimensionale arrays
* Werken met geneste iteratie
* Werken met Random

### Functionele analyse

Surf naar de webstek: https://www.compadre.org/osp/EJSS/3577/12.htm. Hier wordt het "Game of Life" uitgelegd. We gaan een vereenvoudigde console versie maken. Dit wordt bijvoorbeeld veel gebruikt om automatisch omgevingen met structuur te genereren in games met procedurele generatie.

### Technische analyse

Schrijf een nieuwe klasse `ConwayGameOfLife`. Het startpunt in deze klasse is de methode `ConwayGameOfLifeMain`.

Vraag hierin eerst aan de gebruiker hoe veel cellen hij wil: 10 geeft een veld van 10 op 10 cellen.

Vervolgens vraag je de gebruiker hoeveel generaties hij wil zien.

Je gaat vervolgens het bord willekeurig opvullen. Gebruik een enum type om de status van een cel (levend, dood) bij te houden.

Vervolgens ga je generatie per generatie laten zien. Van de éne generatie op de andere gelden volgende regels:

* Any live cell with fewer than two live neighbors dies, as if by loneliness
* Any live cell with more than three live neighbors dies, as if by overcrowding.
* Any live cell with two or three live neighbors lives, unchanged, to the next generation.
* Any dead cell with exactly three live neighbors comes to life.

Laat elke generatie 2 seconden zien en bereken dan de volgende generatie (kijk even naar de oefening met de chronometer!).

### Voorbeeldinteractie

![](/img/img-3162.png)

##

##

<OefeningAssistent oefening="H9-ConwayGameOfLife" hoofdstuk="H9" />
