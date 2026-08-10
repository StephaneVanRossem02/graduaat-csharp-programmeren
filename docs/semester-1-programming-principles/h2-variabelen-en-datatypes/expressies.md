# Expressies en operators

> ✅ [Kennisclip voor deze inhoud](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=6e2e7e80-9be2-490f-95e8-adb1009c6316)

## Expressies en operators

Een bewerking die een waarde kan opleveren is een **expressie**. Anders gezegd: een expressie in C# is iets dat je kan toekennen aan een variabele. Bijvoorbeeld `3+2`, `Console.ReadLine()`, of `7`. Als je kan zeggen dat een bewerking een duidelijk resultaat heeft, is het waarschijnlijk een expressie.

### Expressie-resultaat toewijzen

Meestal zal je expressies schrijven waarin je bewerkingen op en met variabelen uitvoert. Vervolgens zal je het resultaat van die expressie willen bewaren voor verder gebruik in je code.

Voorbeeld van **expressie**-resultaat toekennen:

```csharp
int temperatuursVerschil = temperatuurGisteren - temperatuurVandaag;
```

Hierbij zal de temperatuur uit de rechtse 2 variabelen worden uitgelezen, van elkaar wordt afgetrokken en vervolgens bewaard worden in temperatuursVerschil.

De voorgaande code kan ook langer geschreven worden als:

```csharp
int tussenResultaat = temperatuurGisteren - temperatuurVandaag;
int temperatuursVerschil = tussenResultaat;
```

Een ander voorbeeld van een **expressie**-resultaat toewijzen maar nu met literals (stel dat we temperatuursVerschil reeds hebben gedeclareerd eerder):

```csharp
temperatuursVerschil = 21 - 25;
```

Uiteraard mag je ook combinaties van literals en variabelen gebruiken in je expressies:

```csharp
int breedte = 15;
int hoogte = 20 * breedte;
```

## Operators

Operators in C# zijn de welgekende 'wiskundige bewerkingen' zoals optellen (`+`), aftrekken (`-`), vermenigvuldigen (`*`) en delen (`/`). Deze volgen de wiskundige regels van **volgorde van berekeningen**:

1. **Haakjes**
2. **Vermenigvuldigen, delen**: `*` (vermenigvuldigen), `/` (delen)
3. **Optellen en aftrekken**: `+` en `-`

   (etc.)

Net zoals in de wiskunde kan je in C# met behulp van de haakjes verplichten het deel tussen de haakjes eerst te doen, ongeacht de andere operators en hun volgorde van berekeningen:

```csharp
3+5*2 => zal 13 als resultaat geven
(3+5)*2 => zal 16 geven
```

Je kan nu complexe berekeningen doen door literals, operators en variabelen samen te voegen. Bijvoorbeeld om te weten hoe zwaar je je op Mars zou voelen:

```csharp
double gewichtOpAarde = 80.3;        //kg
double zwaartekrachtAarde = 9.81;    //m/s² 
double zwaartekrachtMars = 3.711;    //m/s²

double  gewichtOpMars = (gewichtOpAarde/zwaartekrachtAarde) * zwaartekrachtMars; //kg
Console.WriteLine("Op Mars voelt het alsof je " + gewichtOpMars + " kg weegt.");
```

## Automatische berekening van datatypes

![](/img/img-3041.jpg)

De types die je in je berekeningen gebruikt bepalen ook het type van het resultaat. Als je bijvoorbeeld twee `int` variabelen of literals optelt zal het resultaat terug een `int` geven.

```csharp
int result = 3+4;
```

Je kan echter geen kommagetallen aan `int` toewijzen. Als je dus twee `double` variabelen deelt is het resultaat terug een `double` en zal deze lijn een fout geven daar je probeert een `double` aan een `int` toe te wijzen:

```csharp
int otherResult = 3.1/45.2;
```

Wat als je een `int` door een `int` deelt? Het resultaat is terug een `int`. Je bent gewoon alle informatie na de komma kwijt. Kijk maar:

```csharp
int getal1 = 9;
int getal2 = 2;
int result = getal1 / getal2;
Console.WriteLine(result);
```

Er zal `4` op het scherm verschijnen! (niet `4.5` daar dat geen `int` is).

Wat als je datatypes mengt? Als je een berekening doet met een `int` en een `double` dan zal C# het meest algemene datatype kiezen. In dit geval een double. Volgende code zal dus werken:

```csharp
double result = 3/5.6;
```

Volgende niet:

```csharp
int result = 3/5.6;
```

Wil je dus het probleem oplossen om 9 te delen door 2 dan zal je minstens 1 van de 2 literals of variabelen door een double moeten omzetten. Het voorbeeld van hierboven herschrijven we dan naar:

```csharp
int getal1 = 9;
double getal2 = 2.0;
double result = getal1/getal2;
Console.WriteLine(result);
```

En nu krijgen we wel `4.5`.

### En complexer?

Het kan subtiel worden in grotere berekeningen.

Stel dat ik afspreek dat je van mij de helft van m'n salaris krijgt. Ik verdien (fictief) 10000 euro per maand. Ik gebruik volgende formule:

```csharp
double helft = 10000.0 * (1/2);
```

Hoeveel krijg je van me? **0.0 euro!**

De volgorde van berekeningen zal eerst het gedeelte tussen de haakjes doen: 1 delen door 2 geeft 0, daar we een `int` door een `int` delen en dus terug een `int` als resultaat krijgen. Vervolgens zullen we deze `0` vermenigvuldigen met `10000.0` . We vermenigvuldigen weliswaar een `double` (het salaris) met een `int`, maar die `int` is reeds `0` en we krijgen dus `0.0` als resultaat.

Wil je het dus eerlijk spelen dan zal je de formule moeten aanpassen naar:

```csharp
double helft = 10000.0 * (1.0/2); // of 1/2.0 of zonder haakjes
```

Nu krijgt het gedeelte tussen de haakjes een `double` als resultaat, namelijk `0.5` dat we dan kunnen vermenigvuldigen met het salaris om `5000.0` te krijgen.