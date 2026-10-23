---
hide_table_of_contents: true
---

# Oefeningen

## Inleiding

Al deze oefeningen maak je als statische methoden van een klasse `GevorderdeTekstverwerking`. Je kan elk van deze methoden uitvoeren via een keuzemenu, zoals bij vorige hoofdstukken.

## H10-SumOfNumbers

### Leerdoelen

* Werken met .Split en .Join
* Itereren over array

### Functionele analyse

Je vraagt de gebruiker een aantal getallen gescheiden door ';' in te geven. je laat vervolgens de som van deze getallen zien.

### Technische analyse

Schrijf in de klasse `GevorderdeTekstverwerking`een methode `SumOfNumbers`. Deze vraagt de gebruiker een aantal getallen te geven gescheiden door een ';'. Je leest de invoer in, splitst de invoer in getallen, maakt de som en laat die zien. Let op, het aantal getallen mag de gebruiker zelf bepalen.

### Voorbeeldinteractie

```text
Gelieve getallen gescheiden door ';'  in te geven
> 12;4;78;100;6;8
12+4+78+100+6+8 = 208
```

<OefeningAssistent oefening="H10-SumOfNumbers" hoofdstuk="H10" />

## H10-CentralAlignmentText

### Leerdoelen

* Formateren van tekst
* String interpolatie
* Methode oproep

### Functionele analyse

Je vraagt de gebruiker een tekst in te geven. Vervolgens vraag je de gewenst breedte van de tekst. Je laat de tekst dan centraal gealigneerd aan de gebruiker zien.

### Technische analyse

Schrijf in de klasse `GevorderdeTekstverwerking`een methode `CentralAlignmentText`. Deze vraagt de gebruiker een tekst in te geven en een gewenste lengte (minimaal de lengte van de tekst - controle!). \
Maak een tweede methode `CentralAlignment` met als parameters de tekst, de lengte van de tekst en een padding karakter. Deze methode geeft de  centraal gealigneerde tekst terug. \
Vervolgens wordt de tekst getoond aan de gebruiker. 

### Voorbeeldinteractie

```text
Geef een tekst in:
> Joepie
Geef de gewenste lengte van de tekst op, die moet minimaal 6 zijn
> 20
Geef het 'padding karakter':
> =
=======Joepie=======
```

<OefeningAssistent oefening="H10-CentralAlignmentText" hoofdstuk="H10" />

## H10-NeatlyOrderedChristmasShoppingList

### Leerdoelen

* stringformattering
* string methodes
* gebruik van karakters

### Functionele analyse

De eerdere oefening `ChristmasShoppingList` kan wat mooier gepresenteerd worden. Ze zou ook ingezet moeten kunnen worden in regio's waar de euro niet gebruikt wordt.

### Technische analyse

Maak een kopie van `ChristmasShoppingList` in deze klasse.

Pas door middel van stringformattering en string methodes de code aan, zodat:

* Een scheidingslijn getekend wordt onder "Info over je aankopen", die net breed genoeg is. Als we later deze hoofding veranderen (bijvoorbeeld naar "Informatie over je aankopen") moet de lijn mee groeien of krimpen.
* Alle bedragen netjes onder elkaar staan in één kolom. Hiervoor mag je veronderstellen dat de berichten op de linkerkant maximum 25 karakters in beslag zullen nemen.
* Het symbool voor de munteenheid van de gebruiker vanzelf gebruikt wordt. Dit kan dus € zijn maar ook $ of £ of iets anders.

### Voorbeeldinteractie

```text
Wat is het budget voor je kerstinkopen?
> 100
Wat is de prijs van cadeau 1?
> 20
Wat is de prijs van cadeau 2?
> 3
Wat is de prijs van cadeau 3?
> 7
Wat is de prijs van cadeau 4?
> 33
Wat is de prijs van cadeau 5?
> 0
Info over je aankopen:
=====================
Totaal bedrag:            $63.00.
Duurste cadeau:           $33.00.
Goedkoopste cadeau:       $3.00.
Gemiddelde prijs:         $15.75.
```


<OefeningAssistent oefening="H10-NeatlyOrderedChristmasShoppingList" hoofdstuk="H10" />

## H10-Pixels-Persistent

### Functionele analyse

We wensen de kunstwerken die we in Pixels tekenen op te slaan en in te laden.

### Technische analyse

Kopieer de code voor Pixels naar deze klasse.

Zorg ervoor dat je twee extra opties hebt in je tekenprogramma. Om een tekening op te slaan, moet je elke `ConsoleColor` casten naar een `int`. Dan kan je één rij pixels opslaan als één rij getallen, gescheiden door puntkomma. Om een tekening in te laden, doe je het omgekeerde.

### Voorbeeldinteractie

![](/img/img-3047.png)


<OefeningAssistent oefening="H10-Pixels-Persistent" hoofdstuk="H10" />

## H10-Galgje

### Functionele analyse

Maak een programma dat galgje kan spelen. Er wordt door het programma een woord gekozen dat door de gebruiker geraden moet worden. Elke keer als de gebruiker een letter ingeeft, dan wordt deze getoond op de plaats waar deze in het woord voorkomt.

Geeft de gebruiker een woord in, dan wordt er gekeken of dit het te zoeken woord is. Klopt dit, dan is de gebruiker gewonnen. Anders blijft hij/zij letters of woorden gokken tot hij/zij het heeft gevonden. Achteraf krijgt de gebruiker ook het aantal pogingen te zien.

### Technische analyse

Noem de methode `Galgje`.

Zorg ervoor dat je een array hebt met 5 woorden, waaruit 1 woord random wordt gekozen. Dit is het woord dat de gebruiker moet zoeken. De niet gevonden letters van het te zoeken woord worden aan de gebruiker getoond met “\*”-jes.

De gebruiker geeft een letter of een heel woord in.

Tips:

* De input is een letter wanneer de input een lengte van 1 heeft; het is een woord wanneer dit meer is.
* Een woord (string) kan je omzetten naar een array van tekens (char\[]) door `.ToCharArray()` uit te voeren.

Wanneer het een letter is, wordt er gekeken of deze letter zich in het te zoeken woord bevindt.\
Zo ja, dan wordt deze letter zichtbaar op de plaats(en) waar het zich bevindt.\
Zo nee, dan mag de gebruiker opnieuw raden.

Er wordt ook bijgehouden hoeveel pogingen de gebruiker er over gedaan heeft tot hij het woord gevonden heeft.

### Voorbeeldinteractie

```text
*********
Geef letter in, of typ het volledige woord indien je het denkt te weten:
> e
**e******
Geef letter in, of typ het volledige woord indien je het denkt te weten:
> a
**e***aa*
Geef letter in, of typ het volledige woord indien je het denkt te weten:
> b
**e***aa*
Geef letter in, of typ het volledige woord indien je het denkt te weten:
> nieuwjaar
Niet correct! Probeer een letter te geven.
**e***aa*
Geef letter in, of typ het volledige woord indien je het denkt te weten:
> Nieuwjaar
Correct! U heeft het juiste woord gevonden.
Benodigde pogingen: 5.
```


<OefeningAssistent oefening="H10-Galgje" hoofdstuk="H10" />

## *Indien TexCell gemaakt: H10-TextCellPersistent*

### *Leerdoelen*

* *Gebruik van input en output van tekstbestanden*

### *Functionele analyse*

*We willen onze gemaakte TextCells ook kunnen opslaan en weer openen.*

### *Technische analyse*

*Maak in je oefeningen map een nieuwe map aan TextCell. In deze map zullen de TextCell bestanden bewaard worden. Je kan in je applicatie ook een relatief pad opgeven (dus niet c:\\...). Dit relatief pad gaat vertrekkende van de map waar je nu op werkt een map zoeken (dit is wat kort door de bocht, de werkelijkheid is een stuk ingewikkelder maar voor nu volstaat dit). Het relatieve pad dat wij gebruiken is "./TextCell/filenaam.aptx).*

*Kopieer het bestand TextCell.cs naar TextCellPersistent.cs. Maak gerbuik van de in de theorie aangehaalde methodes File.ReadAllLines en File.WriteAllLines. Test bij opslaan van het bestand of het bestand reeds bestaat en bij laden van het bestand of het bestand sowieso bestaat.*

### *Voorbeeldinteractie*

```text
Hoe veel cellen telt je spreadsheet "laad" om een bestaande textcel te laden
> 8
|A       |B       |C       |D       |E       |F       |G       |H       |
|        |        |        |        |        |        |        |        |
Welke cel wil je wijzigen - "bewaar" om je TextCel bestand op ts slaan, "stop" om te stoppen?
> D
Wat wil je hier invullen?
> 5
|A       |B       |C       |D       |E       |F       |G       |H       |
|        |        |        |5       |        |        |        |        |
Welke cel wil je wijzigen - "bewaar" om je TextCel bestand op ts slaan, "stop" om te stoppen?
> A
Wat wil je hier invullen?
> D+3
|A       |B       |C       |D       |E       |F       |G       |H       |
|D+3     |        |        |5       |        |        |        |        |
Welke cel wil je wijzigen - "bewaar" om je TextCel bestand op ts slaan, "stop" om te stoppen?
> A
Wat wil je hier invullen?
> =D+3
|A       |B       |C       |D       |E       |F       |G       |H       |
|8       |        |        |5       |        |        |        |        |
Welke cel wil je wijzigen - "bewaar" om je TextCel bestand op ts slaan, "stop" om te stoppen?
> B
Wat wil je hier invullen?
> =D+A
|A       |B       |C       |D       |E       |F       |G       |H       |
|8       |13      |        |5       |        |        |        |        |
Welke cel wil je wijzigen - "bewaar" om je TextCel bestand op ts slaan, "stop" om te stoppen?
> bewaar
Geef de naam van je TextCell bestand: TextCell1
Je TextCell bestand is bewaard.
|A       |B       |C       |D       |E       |F       |G       |H       |
|8       |13      |        |5       |        |        |        |        |
Welke cel wil je wijzigen - "bewaar" om je TextCel bestand op ts slaan, "stop" om te stoppen?
```

```text
Hoe veel cellen telt je spreadsheet "laad" om een bestaande textcel te laden
> laad
Geef je TextCell bestand (zonder extensie aptx)
> aaa
Bestand niet gevonden!
Geef je TextCell bestand (zonder extensie aptx)
> TextCell1
|A       |B       |C       |D       |E       |F       |G       |H       |
|8       |13      |        |5       |        |        |        |        |
Welke cel wil je wijzigen - "bewaar" om je TextCel bestand op ts slaan, "stop" om te stoppen?
> E
Wat wil je hier invullen?
> =A+B+D
|A       |B       |C       |D       |E       |F       |G       |H       |
|8       |13      |        |5       |26      |        |        |        |
Welke cel wil je wijzigen - "bewaar" om je TextCel bestand op ts slaan, "stop" om te stoppen?
> bewaar
Geef de naam van je TextCell bestand: TextCell2
Je TextCell bestand is bewaard.
|A       |B       |C       |D       |E       |F       |G       |H       |
|8       |13      |        |5       |26      |        |        |        |
Welke cel wil je wijzigen - "bewaar" om je TextCel bestand op ts slaan, "stop" om te stoppen?
> stop
```

##

###

<OefeningAssistent oefening="H10-TextCellPersistent" hoofdstuk="H10" />

## Modeloplossingen

<DownloadSlot hoofdstuk="H10" />
