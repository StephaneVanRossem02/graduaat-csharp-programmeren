# Variabelen

> ✅ [Kennisclip voor deze inhoud](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=9ee07d38-af69-45e3-a45f-adb1008ebbf2)

## Variabelen

In het vorige hoofdstuk zagen we dat er verschillende datatypes bestaan. Deze types hebben we nodig om **variabelen** aan te maken. Een variabele is een koppeling van een naam aan gegevens. In C# heeft elke variabele ook een type.

Een variabele wordt bijgehouden in het geheugen van je machine, maar in een programmeertaal als C# vragen we ons niet af waar in het geheugen. In plaats daarvan gebruiken we de naam van de variabele, de zogenaamde **identifier**, om de gekoppelde gegevens op te vragen.

> De naam (identifier) van de variabele moet voldoen aan de identifier regels onder "Inleiding -> Afspraken code".

## Variabelen aanmaken en gebruiken

Om een variabele te maken moeten we deze **declareren**, door een type en naam te geven. Vanaf dan zal de computer een hoeveelheid geheugen voor je reserveren. Hiervoor dien je op te geven:

1. Het **datatype** (bv `int`, `double`).
2. Een **identifier** zodat de variabele uniek kan geïdentificeerd worden ([volgens de naamgevingsregel van C#](./0_csharpessentials.md)).

Een variabele declaratie heeft als syntax:

```csharp
datatype identifier;
```

Bijvoorbeeld: `int leeftijd;`

Je mag ook meerdere variabelen van het zelfde datatype in 1 enkele declaratie aanmaken door deze met komma's te scheiden:

```csharp
datatype identifier1, identifier2, identifier3;
```

Bijvoorbeeld `string voornaam, achternaam, adres;`

Indien je reeds weet wat de beginwaarde moet zijn van de variabele dan mag je de variabele ook reeds deze waarde toekennen bij het aanmaken. Dit noemen we de **initialisatie** van de variabele.

```csharp
int mijnLeeftijd = 37;
```

Eens een variabele is geïnitaliseerd, kunnen we deze (op de meeste plaatsen) gebruiken alsof we de gekoppelde waarde rechtstreeks gebruikten.

### Waarden toekennen aan variabelen

Een initialisatie is een speciaal geval van een **toekenning**. Een toekenning houdt in dat je de waarde die bij een bepaalde naam hoort instelt. In C# mag dit ook indien de variabele al een waarde heeft.

Met de **toekennings-operator (=)** kan je een waarde toekennen aan een variabele. Hierbij kan je zowel een letterlijke waarde toekennen oftewel het resultaat van een berekening (een "expressie").

Je kan ook een waarde uit een variabele uitlezen en toewijzen aan een andere variabele:

```csharp
int eenAndereLeeftijd = mijnLeeftijd;
```

### Literal toewijzen

Literals (of "letterlijke waarden") zijn expliciet uitgeschreven waarden in je code. Als je in je code expliciet de waarde 4 wilt toekennen aan een variabele dan is het getal 4 in je code een zogenaamde literal. Wanneer we echter data bijvoorbeeld eerst uitlezen of berekenen (via bijvoorbeeld invoer van de gebruiker of als resultaat van een berekening) en het resultaat hiervan toekennen aan een variabele dan is dit geen literal.

Voorbeelden van een literal toekennen:

```csharp
int temperatuurGisteren = 20;
int temperatuurVandaag = 25;
```

Het is belangrijk dat het type van de literal overeenstemt met dat van de variabele waaraan je deze zal toewijzen. Een `string` literal stel je voor met aanhalingstekens. Volgende code zal dan ook een compiler-fout generen, daar je een `string` literal aan een int-variabele wil toewijzen, en vice versa.

```csharp
string eenTekst;
int eenGetal;

eenTekst = 4;
eenGetal = "4";
```

Als je bovenstaande probeert te compileren dan krijg je volgende error-boodschappen:

![](/img/img-3040.png)

#### Literal bepaalt het datatype

De manier waarop je een literal schrijft in je code zal bepalen wat het datatype van de literal is:

* **Gehele getallen** worden standaard als `int` beschouwd, vb: `125`.
* **Kommagetallen** (met punt `.`) worden standaard als `double` beschouwd, vb: `12.5`.
* Via een **suffix** na het getal kan je aangeven als het om andere types gaat:
  * `U` of `u` voor `uint`, vb: `125U`.
  * `L` of `l` voor `long`, vb: `125L`.
  * `UL` of `ul` voor `ulong`, vb: `125ul`.
  * `F` of `f` voor `float`, vb: `12.5f`.
  * `M` of `m` voor `decimal`, vb: `12.5M`.
* Voor **`bool`** (zie verder) is dit enkel `true` of `false`.
* Voor **`char`** (zie verder) wordt dit aangeduid met een enkele apostrof voor en na de literal, vb: `'q'`.
* Voor **`string`** (zie verder) wordt dit aangeduid met aanhalingsteken voor en na de literal, vb: `"pikachu"`.

De overige types `sbyte`, `short` en `ushort` hebben geen literal aanduiding. Er wordt vanuit gegaan wanneer je een literal probeert toe te wijzen aan een van deze types dat dit zonder problemen zal gaan (ze worden impliciet geconverteerd).

### Nieuwe waarden overschrijven oude waarden

Wanneer je een reeds gedeclareerde variabele een **nieuwe waarde toekent** dan zal de oude waarde in die variabele onherroepelijk verloren zijn. Probeer dus altijd goed op te letten of je de oude waarde nog nodig hebt of niet. Wil je de oude waarde ook nog bewaren dan zal je een nieuwe, extra variabele moeten aanmaken en daarin de nieuwe waarde moeten bewaren:

```csharp
int temperatuurGisteren = 20;
temperatuurGisteren = 25;
```

In dit voorbeeld zal er dus voor gezorgd worden dat de oude waarde van temperatuurGisteren, `20`, overschreven zal worden met `25`.

Volgende code toont hoe je bijvoorbeeld eerst de vorige waarde kunt bewaren en dan overschrijven:

```csharp
int temperatuurGisteren= 20;
//Doe vanalles
//...
//1 dag later
int temperatuurEerGisteren= temperatuurGisteren; //Vorige temperatuur in eergisteren bewaren
temperatuurGisteren = 25; //temperatuur nu overschrijven
```

We hebben dus aan het einde van het programma zowel de temperatuur van eergisteren, `20`, als die van vandaag, `25`.