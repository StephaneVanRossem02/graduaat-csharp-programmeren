---
hide_table_of_contents: true
---

# Oefeningen

## Oefeningen

### **Oefening: H6-ArrayTrueFalse**

#### **Leerdoelen**

* Declareren van arrays
* Initialiseren van arrays
* Opvullen van arrays
* Arrays gebruiken - afprinten

#### **Functionele analyse**

Maak een array gevuld met afwisselend true en false (de array is 30 lang). Toon ook de inhoud van de array op het scherm; alle elementen naast elkaar.


#### Technische analyse



#### Voorbeeldinteractie

```text
Maak een array gevuld met afwisselen true en false(lengte is 30)
True False True False True False True False True False True False True False True False True False True False True False True False True False True False True False
```

#### **Uitbreiding**

Toon nu ieder element naast elkaar met komma gescheiden. Dus:

true, false, true, ... 

Zorg ervoor dat er op het einde geen komma staat.

#### Voorbeeldinteractie

```text
Maak een array gevuld met afwisselen true en false(lengte is 30)
True,False,True,False,True,False,True,False,True,False,True,False,True,False,True,False,True,False,True,False,True,False,True,False,True,False,True,False,True,False
```


<OefeningAssistent oefening="H6-ArrayTrueFalse" hoofdstuk="H6" />

### **Oefening: H6-ArrayExercise**

#### **Leerdoelen**

* Declareren van arrays
* Initialiseren van arrays
* Opvullen van arrays
* Arrays gebruiken

#### **Functionele analyse**

Maak een programma dat aan de gebruiker vraagt om 10 waarden (int) in te voeren in een array. Vervolgens toont het programma de som, het gemiddelde en het grootste getal van deze 10.

Vervolgens vraagt het programma de gebruiker om een getal in te voeren. Het programma toont dan alle getallen die groter of gelijk zijn aan dit ingevoerde getal zijn die in de array aanwezig zijn. Indien geen getallen groter zijn dan verschijnt een bericht Niets is groter op het scherm.

#### **Technische analyse**

Merk op: je kan in principe de statistieken al bijhouden terwijl de getallen worden ingevoerd, maar hier moet je ze pas achteraf berekenen. Doe het ook zo.

#### **Voorbeeldinteractie**

```text
Voer 10 gehele getallen in
> 0
> 1
> 2
> 3
> 4
> 5
> 6
> 7
> 8
> 9
******
Som is 45, Gemiddelde is 4,5, Grootste getal is 9
******
Geef minimum getal in?
> 3
3 4 5 6 7 8 9
```

<OefeningAssistent oefening="H6-ArrayExercise" hoofdstuk="H6" />

### **Oefening: H6-Shopping**

#### **Leerdoelen**

* Declareren van arrays
* Initialiseren van arrays
* Opvullen van arrays
* Arrays gebruiken

#### **Functionele analyse**

Maak een programma dat de gebruiker een boodschappenlijstje laat samenstellen.

* Het programma vraagt eerst hoeveel items de boodschappenlijst moet bevatten en laat dan de lijst vullen.
* Vervolgens wordt een gesorteerde lijst van de items getoond.
* Daarna, in de winkel, kan de gebruiker aangeven welke items er gekocht worden. De gebruiker kan dit blijven doen zolang er 'ja' geantwoord wordt op de vraag 'Nog winkelen?'. Als de gebruiker een item intypt dat niet op de lijst staat, wordt er een bericht getoond.
* Na het winkelen toont het programma welke items van de lijst niet gekocht zijn.

#### **Technische analyse**



#### **Voorbeeldinteractie**

```text
We gaan de boodschappenlijst samenstellen. Hoeveel items wil je opschrijven?
> 3
Wat is item 1 op je lijst?
> kaas
Wat is item 2 op je lijst?
> eieren
Wat is item 3 op je lijst?
> boter
Dit is je gesorteerde lijst:
1: boter
2: eieren
3: kaas
Op naar de winkel!
Welk item heb je gekocht?
> kaas
Nog winkelen? (Ja of Nee)
> nee
Naar huis met de boodschappen!
Volgende items van je lijst ben je vergeten te kopen:
boter eieren
```

<OefeningAssistent oefening="H6-Shopping" hoofdstuk="H6" />

### **Oefening: H6-ChristmasShopping**

#### **Leerdoelen**

* Declareren van arrays
* Initialiseren van arrays
* Opvullen van arrays
* Arrays gebruiken
* Array methodes gebruiken

#### **Functionele analyse**

Maak een programma dat kan gebruikt worden om kerstinkopen te doen, rekening houdend met een budget. Na de inkopen, wordt het totaal gespendeerd bedrag getoond en het hoogste, laagste en gemiddelde bedrag.

#### **Technische analyse**

#### Voorbeeldinteractie

```text
Wat is het budget voor je kerstinkopen?
> 500
Hoeveel cadeautjes wil je kopen?
> 2
Prijs van cadeau 1?
> 200
Prijs van cadeau 2?
> 330
Je bent al 30,0 euro over het budget!
Info over je aankopen:
Totaal bedrag: 530,0 euro.
Duurste cadeau: 330,0 euro.
Goedkoopste cadeau: 200,0 euro.
Gemiddelde prijs: 265,0 euro.
```

<OefeningAssistent oefening="H6-ChristmasShopping" hoofdstuk="H6" />

### **Oefening: H6-Lottery**

**Leerdoelen**

* Declareren van arrays
* Initialiseren van arrays
* Opvullen van arrays
* Opzoeken waarde in arrays
* Gebruik van random (⚠️ let op dit heb je nog niet gezien, maar staat in de oefening deels beschreven)

**Functionele analyse**

Je vraagt de gebruiker zijn 6 lotto getallen (getal tussen 1 en 42) in te geven. Je hoeft geen controle te doen op de getallen die de gebruiker ingeeft. Je bewaart deze getallen in een array lotteryForm.

Vervolgens simuleer je een trekking. Dat doe je door random 6 getallen te genereren (zie hiervoor [Random](../h8-numerieke-data/random.md)) en die ook in een array lotteryDraw te bewaren. Let op: hier moet je wel controleren of het inderdaad 6 verschillende getallen zijn (hoe kan je nagaan of iets aanwezig is in je array?).

Dan doe je een validatie. Heeft de gebruiker 3 juiste cijfers wint hij 10 €, bij 4 juiste cijfers 1000 €, bij 5 juiste cijfers 100.000 € en bij 6 juiste cijfers 10.000.000 €.

Zorg dat alles mooi wordt getoond aan de gebruiker. Lotto getallen in stijgende volgorde, trekking getallen in stijgende volgorde, winst. Zie voorbeeldinteractie.

**Technische analyse**

Wat betreft het random genereren van 6 getallen tussen 1 en 42. Daar krijg je het volgend stukje code voor:

```csharp
Random random = new Random();
int lottoGetal;
        
for (int i = 0; i < lottoTrekking.Length; i++) {
    do {
        lottoGetal = random.Next(42) + 1;
    }
    while (Array.IndexOf(lottoTrekking, lottoGetal) >= 0);
    lottoTrekking[i] = lottoGetal;
}
```

#### Voorbeeldinteractie

```text
Geef je lotto getallen (getallen moeten tussen 1 en 42 liggen)
Geef lotto nummer 1
> 11
Geef lotto nummer 2
> 22
Geef lotto nummer 3
> 33
Geef lotto nummer 4
> 4
Geef lotto nummer 5
> 9
Geef lotto nummer 6
> 23
Je gekozen cijfers zijn:
4 9 11 22 23 33
De trekking cijfers zijn:
2 6 13 32 34 35
Je hebt 0 Euro gewonnen
```

<OefeningAssistent oefening="H6-Lottery" hoofdstuk="H6" />

### **Oefening: H6-IntegerIndexOf**

#### **Leerdoelen**

* Opzoeken waarde in integer arrays – zelf geschreven methode

#### **Functionele analyse**

Zoek een getal in een reeks van getallen.

#### Technische analyse

De gebruiker geeft eerst 10 getallen in die je in een array zet. Vervolgens geeft de gebruiker een te zoeken getal in. Schrijf zelf de code (dus maak geen gebruik van een reeds bestaande methode) om te zien of dit getal al dan niet in de array zit.

#### Voorbeeldinteractie

```text
Geef 10 willekeurige gehele getallen
> 10
> 11
> 12
> 13
> 14
> 15
> 16
> 17
> 18
> 19
Welke geheel getal wil je zoeken?
> 14
Je zocht 14, die is gevonden op index 4
```

```text
Geef 10 willekeurige gehele getallen
> 10
> 11
> 12
> 13
> 14
> 15
> 16
> 17
> 18
> 19
Welke geheel getal wil je zoeken?
> 8
Je zocht 8, jammer die is niet gevonden
```


<OefeningAssistent oefening="H6-IntegerIndexOf" hoofdstuk="H6" />

### **Oefening: H6-BinarySearch**

**Leerdoelen**

* De array gebruiken, in een array zoeken.

**Functionele analyse**

Heel eenvoudig uitgelegd zal het algoritme de te zoeken waarde vergelijken met de middelste waarde (van een gesorteerde array). Als de waarde niet gelijk is wordt dat gedeelte van de array waar de waarde zich niet in kan bevinden weggegooid. De zoektocht gaat verder totdat de waarde is gevonden (of niet gevonden indien alle mogelijkheden zijn doorzocht).

#### **Technische analyse**

Om twee strings te ordenen, gebruik je `string1.CompareTo(string2)`. Dit levert -1 als string1 voor string2 komt, 1 als string1 na string2 komt en 0 als ze op dezelfde plaats komen.

#### Voorbeeldinteractie

```text
Welke automerk wil U zoeken?
> Opel
Je zocht Opel, die is gevonden op index 6
```

```text
Welke automerk wil U zoeken?
> blabla
Je zocht blabla, jammer die is niet gevonden
```

<OefeningAssistent oefening="H6-BinarySearch" hoofdstuk="H6" />

### **Oefening: H6-ShoppingList**

#### **Leerdoelen**

* Declareren van een `List`
* Initialiseren van een `List`
* `List` gebruiken

#### **Functionele analyse**

Maak een een alternatieve versie van H6-Shopping. Maak ditmaal gebruik van List\<T> in plaats van een array.

#### **Technische analyse**

* Je hoeft de grootte van de lijst niet meer op voorhand te vragen.
* Een lijst `myList` sorteren doe je door `myList.sort()` op te roepen.
* Je mag elementen die gekocht zijn gewoonweg verwijderen uit de lijst.
* Op het eindetoon je de resterende items met een `foreach` lus.
* Je geeft een lege regel in om aan te geven dat je niets wil toevoegen aan je lijstje.

#### **Voorbeeldinteractie**

```text
Wat is item 1 op je lijst?
> kaas
Wat is item 2 op je lijst?
> eieren
Wat is item 3 op je lijst?
> boter
Wat is item 4 op je lijst?
>
Dit is je gesorteerde lijst:
1: boter
2: eieren
3: kaas
Op naar de winkel!
Welk item heb je gekocht?
> kaas
Nog winkelen? (Ja of Nee)
> nee
Naar huis met de boodschappen!
Volgende items van je lijst ben je vergeten te kopen:
boter eieren
```

<OefeningAssistent oefening="H6-ShoppingList" hoofdstuk="H6" />

### **Oefening: H6-ChristmasShoppingList**

#### **Leerdoelen**

* Declareren van een `List`
* Initialiseren van een `List`
* `List` gebruiken

#### **Functionele analyse**

Maak een een alternatieve versie van H6-ChristmasShopping. Maak ditmaal gebruik van List\<T> in plaats van een array.

#### **Technische analyse**

* Je hoeft niet meer te vragen op voorhand hoe veel cadeautjes er gekocht zullen worden.
* Je mag stoppen bij een lege regel invoer.
* Je moet ook stoppen zodra je over budget gaat.

#### Voorbeeldinteractie

```text
Wat is het budget voor je kerstinkopen?
> 500
Prijs van cadeau 1?
> 200
Prijs van cadeau 2?
> 330
Je bent al 30.0 euro over het budget!
Info over je aankopen:
Totaal bedrag: 530.0 euro
Duurste cadeau: 330.0 euro
Goedkoopste cadeau: 200.0 euro
Gemiddelde prijs: 265.0 euro
```

<OefeningAssistent oefening="H6-ChristmasShoppingList" hoofdstuk="H6" />

## Modeloplossingen

<DownloadSlot hoofdstuk="H6" />
