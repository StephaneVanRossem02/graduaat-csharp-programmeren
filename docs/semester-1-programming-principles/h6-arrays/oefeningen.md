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

Je kan eventueel onderstaande flowchart gebruiken.

#### Technische analyse



#### Voorbeeldinteractie

![](/img/img-3141.png)

#### **Uitbreiding**

Toon nu ieder element naast elkaar met komma gescheiden. Dus:

true, false, true, ... 

Zorg ervoor dat er op het einde geen komma staat.

#### Voorbeeldinteractie

![](/img/img-3142.png)


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

Je kan eventueel onderstaande flowchart gebruiken.  



#### **Voorbeeldinteractie**

![](/img/img-3144.png)

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

Je kan eventueel onderstaande flowchart gebruiken.  

#### **Technische analyse**



#### **Voorbeeldinteractie**

![](/img/img-3146.png)

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

![](/img/img-3147.png)

### **Oefening: H6-Lottery**

**Leerdoelen**

* Declareren van arrays
* Initialiseren van arrays
* Opvullen van arrays
* Opzoeken waarde in arrays

**Functionele analyse**

Je vraagt de gebruiker zijn 6 lotto getallen (getal tussen 1 en 42) in te geven. Je hoeft geen controle te doen op de getallen die de gebruiker ingeeft. Je bewaart deze getallen in een array lotteryForm.

Vervolgens simuleer je een trekking. Dat doe je door random 6 getallen te genereren (zie hiervoor [Random](/programmeren/semester-1-programming-principles/h8-numerieke-data/random.md)) en die ook in een array lotteryDraw te bewaren. Let op: hier moet je wel controleren of het inderdaad 6 verschillende getallen zijn (hoe kan je nagaan of iets aanwezig is in je array?).

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

![](/img/img-3148.png)

### **Oefening: H6-IntegerIndexOf**

#### **Leerdoelen**

* Arrays in flowcharts gebruiken
* Opzoeken waarde in integer arrays – zelf geschreven methode

#### **Functionele analyse**

Zoek een getal in een reeks van getallen.

#### Technische analyse

De gebruiker geeft eerst 10 getallen in die je in een array zet. Vervolgens geeft de gebruiker een te zoeken getal in. Schrijf zelf de code (dus maak geen gebruik van een reeds bestaande methode) om te zien of dit getal al dan niet in de array zit.

Je kan eventueel onderstaande flowchart gebruiken.



#### Voorbeeldinteractie

![](/img/img-0134.png)

![](/img/img-0135.png)

### **Oefening: H6-BinarySearch**

**Leerdoelen**

* Arrays in flowcharts gebruiken
* De array gebruiken, in een array zoeken.

**Functionele analyse**

Heel eenvoudig uitgelegd zal het algoritme de te zoeken waarde vergelijken met de middelste waarde (van een gesorteerde array). Als de waarde niet gelijk is wordt dat gedeelte van de array waar de waarde zich niet in kan bevinden weggegooid. De zoektocht gaat verder totdat de waarde is gevonden (of niet gevonden indien alle mogelijkheden zijn doorzocht).

#### **Technische analyse**

Je kan eventueel onderstaande flowchart gebruiken. 

Om twee strings te ordenen, gebruik je `string1.CompareTo(string2)`. Dit levert -1 als string1 voor string2 komt, 1 als string1 na string2 komt en 0 als ze op dezelfde plaats komen.



#### Voorbeeldinteractie

![](/img/img-0136.png)

![](/img/img-0137.png)

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

```csharp
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

```csharp
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