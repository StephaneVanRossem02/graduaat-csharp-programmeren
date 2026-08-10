# Werken met arrays

> ✅ [Kennisclip](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=dd1a0ea2-a768-4554-ae32-adcd0077b930)

### Nuttige array methoden <a href="#nuttige-array-methoden" id="nuttige-array-methoden"></a>

Iedere array heeft een aantal methoden waar meteen gebruik van gemaakt kan worden. Al deze methoden hier beschrijven zou ons te ver nemen, maar enkele methoden zijn echter zeer handig om te gebruiken en hebben een vanzelfsprekende betekenis: `Max()`, `Min()`, `Sum()` en `Average()`.

Volgende code geeft bijvoorbeeld het grootste getal terug uit een array genaamd "leeftijden".

```csharp
using System;
using System.Linq; // de methoden zijn afkomstig uit deze namespace
int[] leeftijden = {4, 9, 12, 38, 13, 7};
int oudsteleeftijd = leeftijden.Max();
```

Met de rest kan je het minimum, de som en het gemiddelde bepalen.

Daarnaast beschikken arrays ook over functionaliteit die niet specifiek gelinkt is aan getallen. We bekijken hier een paar mogelijkheden die heel vaak van pas komen. Voor deze methoden is de syntax, om redenen die we later zullen zien, wat anders: je schrijft eerst `Array.` en je geeft de array in kwestie mee tussen de haakjes.

#### Sort: Arrays sorteren <a href="#sort-arrays-sorteren" id="sort-arrays-sorteren"></a>

Om arrays te sorteren roep je de `Sort()`-methode op als volgt, als parameter geef je de array mee die gesorteerd moet worden.

Volgende voorbeeld toont hier het gebruik van:

```csharp
string[] items = {"brood","koffie","fruit"};
Array.Sort(items);

// Toon resultaat van sorteren
// De items zullen alfabetisch getoond worden
for (int i = 0; i < items.Length; i++)
{
    Console.WriteLine(items[i]);
}
```

Wanneer je de Sort-methode toepast op een array van strings dan zullen de elementen alfabetisch gerangschikt worden. Merk op dat je niet meteen iets merkt nadat je `Sort` hebt opgeroepen. Intern zijn er normaal elementen van plaats gewisseld, maar je ziet dit pas als je bijvoorbeeld de elementen afprint.

#### Reverse: Arrays omkeren <a href="#reverse-arrays-omkeren" id="reverse-arrays-omkeren"></a>

Met de `Array.Reverse()`-methode kunnen we dan weer de elementen van de array omkeren (dus het laatste element vooraan zetten en zo verder.

```csharp
Array.Reverse(items);
```

Ook hier zie je pas iets als je de elementen toont.

#### IndexOf: Zoeken in arrays <a href="#indexof-zoeken-in-arrays" id="indexof-zoeken-in-arrays"></a>

De `IndexOf`-methode maakt het mogelijk om te zoeken naar de index van een gegeven element in een index. De methode heeft twee parameters, enerzijds de array in kwestie en anderzijds het element dat we zoeken. Als resultaat wordt de index van het gevonden element teruggegeven. Indien niets wordt gevonden zal het resultaat (in de praktijk) -1 zijn.

Volgende code zal bijvoorbeeld de index teruggeven van het item `"koffie"` indien dit in de array `items` staat:

```csharp
string[] items = {"brood","koffie","fruit"};
int index = Array.IndexOf(items, "koffie"); // geeft 1
```

Volgend voorbeeld toont het gebruik van deze methode:

```csharp
string[] items = {"brood","koffie","fruit"};

Console.WriteLine("Wil je weten of iets al op je lijstje staat? Geef de naam van het item.");
string item = Console.ReadLine();
int index = Array.IndexOf(items,item);
if(index >= 0) {
    Console.WriteLine($"{item} staat op het lijstje met index {index}");
}
else {
    Console.WriteLine("staat nog niet op het lijstje");
}
```

`IndexOf` kan erg van pas komen om stukjes informatie aan elkaar te linken. Bijvoorbeeld: de prijs van de producten staat steeds op dezelfde index in de andere array:

```csharp
string[] producten = { "appel","peer","citroen" };
decimal[] prijzen = { 0.65d, 0.35d, 0.70d };
```

We weten nu genoeg om de gebruiker de prijs van elk product te kunnen tonen.

```csharp
Console.WriteLine("Van welk product wil je de prijs weten?");
string product = Console.ReadLine();
```

We tonen nu hoe we eerst het juiste product zoeken en dan vervolgens die index bewaren en gebruiken om de prijs te tonen:

```csharp
string[] producten = {"appel", "peer", "citroen"};
decimal[] prijzen = { 0.65m, 0.35m, 0.70m };
System.Console.WriteLine("Van welk product wil je de prijs kennen?");
string product = Console.ReadLine();
int productIndex = Array.IndexOf(producten,product);
if (productIndex < 0) {
    System.Console.WriteLine("Het product is niet aanwezig.");
}
else {
    Syst