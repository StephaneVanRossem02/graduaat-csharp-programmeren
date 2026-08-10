# Array principes

## Array principes <a href="#array-principes" id="array-principes"></a>

> ✅ [Kennisclip](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=d12579a6-80ea-477c-8d9b-adcd00769e1c)

### Arrays <a href="#arrays" id="arrays"></a>

Stel je voor dat je, met de kennis die je nu hebt, een boodschappenlijstje moet programmeren. Met andere woorden, een programma dat vraagt om een aantal regels tekst in te typen, waarbij je dan items kan aanduiden als gekocht.

Je zou ruimte kunnen voorzien voor 3 items, voorgesteld als `string`, als volgt:

```csharp
string item1, item2, item3;
Console.WriteLine("Wat is het 1e item dat je nodig hebt?");
item1 = Console.ReadLine();
Console.WriteLine("Wat is het 2e item dat je nodig hebt?");
item2 = Console.ReadLine();
Console.WriteLine("Wat is het 3e item dat je nodig hebt?");
item3 = Console.ReadLine();
// hier nog wat code om deze items te tonen
// of om te markeren dat ze in de kar geplaatst zijn
```

Een groot nadeel van deze aanpak: als je vier items wil ondersteunen, heb je meer code nodig. Als je vijf items wil ondersteunen, heb je nog meer code nodig. Deze code kan geen basis zijn voor een degelijk boodschappenlijstje.

Een tweede mogelijkheid bestaat erin heel het lijstje voor te stellen als een string, als volgt:

```csharp
Console.WriteLine("Hoe veel items ga je kopen?");
int aantalItems = Convert.ToInt32(Console.ReadLine());
string lijstje = "";
for (int i = 1; i <= aantalItems; i++) {
    Console.WriteLine($"Wat is het {i}e item dat je nodig hebt?");
    lijstje = $"{lijstje} + {Console.ReadLine()}";
}
```

Hiermee kan je elk gewenst aantal items toevoegen, maar de voorstelling is erg onhandig. Als je bijvoorbeeld item zeven op je lijstje wil zoeken, moet je plustekens eerst zes plustekens tellen. Als je het lijstje op een andere manier wil tonen aan de gebruiker, bijvoorbeeld met één item per regel, is dat lastig. Als je wil bijhouden of iets gekocht is, kan je daar geen boolean voor gebruiken, maar moet je bijvoorbeeld een vinkje vlak voor het item plaatsen. Dat is allemaal vrij ingewikkelde code voor een vrij eenvoudige taak.

Arrays bieden een oplossing voor deze problemen. Arrays zijn reeksen van waarden, maar ze zijn zelf ook waarden. Met andere woorden, ze maken het mogelijk één variabele te maken die verschillende waarden voorstelt. Hierdoor wordt je code leesbaarder en eenvoudiger in onderhoud. Arrays zijn een zeer krachtig hulpmiddel, maar er zitten wel enkele addertjes onder het gras.

Laat ons beginnen bij het begin: een array is een reeks waarden van **één type** en heeft een bepaalde lengte. Bijvoorbeeld een reeks van 10 `int`s of 5 `string`s. Je kan dus geen reeks hebben met een mengeling van `int` en `string`, of van `boolean` en double, of wat dan ook. Je kan een array toekennen aan een variabele, maar je kan ook individuele waarden uit de reeks halen door middel van een *index*. Dit is een getal dat een positie in de reeks aanduidt, zoals je dat ook kent van de `substring` methode.

We zullen het eerst even voordoen in Flowgorithm.

![](/img/img-3138.png)



### Basisgebruik arrays <a href="#basisgebruik-arrays" id="basisgebruik-arrays"></a>

#### Arrays declareren <a href="#arrays-declareren" id="arrays-declareren"></a>

Net als andere datatypes moet je aangeven dat een variabele van een bepaald array type is. Je moet dus de compiler informeren dat er een array bestaat met een bepaalde naam en een bepaald type. Dit is bijna hetzelfde als het declareren van een variabele van een van de types die je al kent, maar je geeft aan dat het om een reeks gaat door middel van rechte haken.

We geven hier enkele voorbeelden:

```csharp
string[] items; // een reeks boodschappen voorgesteld als tekst
double[] metingen; // metingen van de neerslag als kommagetallen
decimal[] aandeelWaarden; // kommagetallen met hoge precisie
```

De rechte haken betekenen dus "een reeks van" en een declaratie van een reeks kan een heleboel declaraties van individuele variabelen vervangen. Met deze voorstelling heb je bijvoorbeeld `item1` en `item2` en `item3` niet meer nodig.

Als we naar de Flowgorithm code van het boodschappenlijstje kijken, zien we dit ook:

![](/img/img-0122.png)

Merk wel op: hier vindt ook meteen een **initialisatie** plaats.

Een initialisatie vertelt de compiler niet alleen dat deze variabele bestaat, maar ook wat zijn eerste waarde is. Een waarde van een array-type stelt eigenlijk een hoeveelheid ruimte in het geheugen voor. Ruimte voor een bepaald aantal strings, voor een bepaald aantal getallen, maakt niet uit. Om technische redenen die we later in meer detail bekijken, moet je deze ruimte reserveren met het keyword `new`. Je moet ook zeggen hoe veel ruimte je nodig hebt. Bijvoorbeeld, met de declaraties van hierboven:

```csharp
items = new string[10]; // ruimte om 10 items op het lijstje bij te houden
metingen = new double[365]; // ruimte om een jaar aan metingen te voorzien
aandelen = new decimal[365*10]; // ruimte om de koers over (ongeveer) 10 jaar bij te houden
```

Zoals je merkt uit het laatste voorbeeld, mag je deze waarde ook berekenen. Ook het Flowgorithm voorbeeld toont dit, want daar wordt `aantalItems` ingelezen.

#### Arrays opvullen <a href="#arrays-opvullen" id="arrays-opvullen"></a>

Nadat de nodige ruimte voorzien is, kan je deze gebruiken. Dit doe je door te zeggen dat een bepaalde waarde op een bepaalde positie in de reeks terechtkomt. Deze positie noemen we de **index** van het element. **Het eerste element krijgt index 0, niet 1. Het laatste krijgt een index gelijk aan de lengte van de array verminderd met 1.**

We geven even een voorbeeld rechtstreeks in C#:

```csharp
items[0] = "brood"; // het eerste element heeft index 0
items[1] = "thee";
items[2] = "fruit";
// nog wat boodschappen
items[9] = "krant";
// items[10] kan je niet gebruiken want de laatste index is 10-1
```

Dit hoeven geen vaste waarden te zijn! Je kan ook dit doen:

```csharp
Console.WriteLine(); // geef 10 items die je nodig hebt
items[0] = Console.ReadLine(); // het eerste element heeft index 0
items[1] = Console.ReadLine();
items[2] = Console.ReadLine();
// nog wat boodschappen
items[9] = Console.ReadLine();
// items[10] kan je niet gebruiken want de laatste index is 10-1
```

Dit zorgt dat je code kan uitsparen. Met 10 individuele variabelen, dus **zonder array**, zou je bovenstaande code ongeveer zo moeten schrijven:

```csharp
Console.WriteLine(); // geef 10 items die je nodig hebt
item1 = Console.ReadLine(); // het eerste element heeft index 0
item2 = Console.ReadLine();
item3 = Console.ReadLine();
// nog wat boodschappen
item10 = Console.ReadLine();
```

Maar **met een array** heb je ook deze optie:

```csharp
Console.WriteLine(); // geef 10 items die je nodig hebt
for(int i = 0; i <= 9; i++) {
    items[i] = Console.ReadLine();
}
```

En als je je lijstje wil uitbreiden tot 1000 items, moet je alleen de 10 door 1000 vervangen. We zullen nog vaak gebruik maken van arrays en lussen om herhaalde code te vermijden!

#### Arrays uitlezen <a href="#arrays-uitlezen" id="arrays-uitlezen"></a>

Je gebruikt de notatie met rechte haken ook om een array uit te lezen:

```csharp
Console.WriteLine($"Het 1e item op je lijstje is {items[0]}");
Console.WriteLine($"Het 2e item op je lijstje is {items[1]}");
// herhaald
Console.WriteLine($"Het 10e item op je lijstje is {items[9]}");
```

Ook hier bespaar je vervelend werk met een lus:

```csharp
for(int i = 0; i <= 9; i++) {
    Console.WriteLine($"Het {i+1}e item op je lijstje is {items[i]}");
}
```

Als je een element probeert uit te lezen dat nog geen waarde gekregen heeft, krijg je een defaultwaarde. Wat voor waarde dat is, hangt af van de array. Er zit een systeem achter, maar dat behandelen we pas later in de cursus. Voorlopig mag je dit onthouden: voor getallen krijg je 0. Voor booleans krijg je `false`. Voor strings krijg je een speciale waarde `null`, die verschillend is van `""`. intWat je vooral moet weten over `null` is dat je er geen eigenschappen van kan opvragen of methodes op kan toepassen. Ik laat even zien wat ik bedoel.

```csharp
string[] stukkenTekst;
Console.WriteLine(stukkenTekst[0].Length);
```

```csharp
string[] stukkenTekst;
Console.WriteLine(stukkenTekst[0].ToUpper());
```

```csharp
int[][] arrayVanArrays;
Console.WriteLine(arrayVanArrays.Length);
```

Dus als een variabele `null` bevat of kan bevatten, moet je syntax vermijden die hier een punt achter plaatst. Je kan dit op een eenvoudige manier doen met `if (mijnVariabele is null) { ... } else { ... }`.

#### De lengte van de array te weten komen <a href="#de-lengte-van-de-array-te-weten-komen" id="de-lengte-van-de-array-te-weten-komen"></a>

Soms kan het nodig zijn dat je in een later stadium van je programma de lengte van je array nodig hebt. De `Length` eigenschap geeft je deze lengte. Volgend voorbeeld toen dit:

```csharp
string[] items = new string[10];
Console.WriteLine("Geef de 10 items die je wil kopen:");
for(int i = 0; i < items.Length; i++) {
    items[i] = Console.ReadLine();
}
```

Het voordeel hiervan is je maar één keer moet vastleggen hoe groot de array is en daarna in het algemeen over de grootte kan spreken. Zo kan je bij het aanpassen van je code niet vergeten **overal** de juiste aanpassing te doen. Let op: de lengte geeft niet aan hoe veel items je al hebt ingevuld! Ze geeft aan hoe veel plaats er maximaal is in de array.