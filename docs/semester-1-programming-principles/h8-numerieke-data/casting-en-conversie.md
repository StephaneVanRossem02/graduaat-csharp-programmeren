# Casting en conversie

## Casting en conversie <a href="#casting-en-conversie" id="casting-en-conversie"></a>

:::tip
[Kennisclip basis](https://youtu.be/EspjsQkxD3s) (meer kennisclips lager op de pagina)
:::

Wanneer je de waarde van een variabele wil toekennen aan een variabele van een ander type mag dit niet zomaar. Volgende code zal bijvoorbeeld een error geven, omdat aan de linkerkant staat dat je een geheel getal wil bijhouden (door middel van `int`) en aan de rechterkant een kommagetal staat:

```csharp
int age = 4.3;
```

Een kommagetal past niet in het geheugen voorzien voor een geheel getal: als er toch een zinvolle omzetting mogelijk is, zal je moeten **converteren of casten**.

Dit kan op o.a. volgende manieren:

* Via casting: de (klassieke) manier die ook werkt in veel andere programmeertalen.
* Via de `Convert` klasse. Deze staat omzettingen toe die handig zijn, maar niet op het niveau van de taal zijn vastgelegd.

### Casting <a href="#casting" id="casting"></a>

Een klassieke, in veel talen voorziene manier om date om te zetten is **casten**. Hierbij dien je aan de compiler te zeggen: *"Volgende variabele die van het type x is, moet aan deze variabele van het type y toegekend worden. **Ik besef dat hierbij data verloren kan gaan, maar zet de variabele toch maar om naar het nieuwe type, ik draag alle verantwoordelijkheid voor het verlies.**"* Je kan bijvoorbeeld bovenstaand kommagetal enkel omzetten naar een geheel getal als je de cijfers na de komma verloren laat gaan. In het Engels betekent *to cast* "in een vorm gieten".

#### Wat is casting <a href="#wat-is-casting" id="wat-is-casting"></a>

Casting heb je nodig om een waarde van een bepaald type om te zetten naar een waarde van een ander type. Stel dat je een complexe berekening hebt waar je werkt met verschillende types (bijvoorbeeld int, double en float). Door te casten kan je het soort bewerkingen sturen. Je gaat namelijk bepaalde types even als andere types gebruiken.

Het is belangrijk in te zien dat het casten van een variabele naar een ander type enkel een gevolg heeft tijdens het uitwerken van de expressie waarbinnen je werkt. Het casten op zich verandert niets aan de variabele of waarde zelf.

Casting duid je aan door voor de variabele of literal het datatype tussen haakjes te plaatsen naar wat het omgezet moet worden:

```csharp
int mijngetal = (int) 3.5;
Console.WriteLine(mijngetal);
```

of

```csharp
double kommagetal = 13.8;
int kommaNietWelkom = (int) kommagetal;
Console.WriteLine(kommaNietWelkom);
```

#### Narrowing <a href="#narrowing" id="narrowing"></a>

:::tip
[Kennisclip narrowing en widening](https://youtu.be/2HA96kQI6X0)
:::

Casting gebruik je vaak als je een variabele wil gebruiken als een ander type dat deze waarde niet kan bevatten. We moeten dan aan **narrowing** doen, letterlijk het versmallen van de data.

Bekijk eens het volgende voorbeeld:

```csharp
double var1;
int var2;

var1 = 20.4;
var2 = var1;
```

Dit zal niet gaan. Je probeert namelijk een waarde van het type double in een variabele van het type int te steken. Dat gaat enkel als je informatie weggooit. Je moet aan *narrowing* doen.

Dit gaat enkel als je expliciet aan de compiler zegt: het is goed, je mag informatie weggooien, ik begrijp dat en zal er rekening mee houden. Dit noemen we **expliciete casting**.

En je doet dit door voor de variabele die dienst moet doen als een ander type, het nieuwe type, tussen ronde haakjes te typen, als volgt:

```csharp
double var1;
int var2;

var1 = 20.4;
var2 = (int) var1;
```

Het resultaat in `var2` zal `20` zijn (alles na de komma wordt bij casting van een double naar een int weggegooid).

> Merk op dat `var1` nooit van datatype is veranderd; enkel de inhoud ervan (`20.4`) werd eruit gehaald, omgezet ("gecast") naar `20` en dan aan `var2` toegewezen dat enkel `int` aanvaardt.

#### Widening <a href="#widening" id="widening"></a>

Casting kan je ook gebruiken als je aan **widening** doet (een kleiner type in een groter type steken), als volgt:

```csharp
int var1;
double var2;

var1 = 20;
var2 = var1;
```

Deze code zal zonder problemen gaan. `var2` zal de waarde `20.0` bevatten. De inhoud van `var1` wordt *verbreed* naar een `double`, eenvoudigweg door er een kommagetal van te maken. Er gaat **geen** inhoud verloren. Dit wordt ook **impliciete casting** genoemd. Er bestaan scenario's waarin je dit toch expliciet wil doen, maar die komen minder vaak voor en zullen we benoemen als we ze tegenkomen.

### Conversie <a href="#conversie" id="conversie"></a>

:::tip
[Kennisclip Convert klasse](https://youtu.be/5Yj2k2fPI68)
:::

Casting is een in de taal ingebakken manier van data omzetten, die vooral zeer nuttig is daar deze ook werkt in andere C#-related programmeertalen zoals C, C++ en Java. Om te weten hoe deze omzettingen gebeuren, kan je kijken in de handleiding van de taal C# zelf.

Echter, .NET heeft ook methoden die je kunnen helpen om data van het ene type naar het andere te brengen. Deze methoden zitten binnen de **`Convert`**-klasse.

Het gebruik hiervan is zeer eenvoudig. Enkele voorbeelden:

```csharp
int getal= Convert.ToInt32(3.2); //double to int
double anderGetal= Convert.ToDouble(5); //int to double
bool isWaar= Convert.ToBoolean(1); //int to bool
int userAge= Convert.ToInt32("19"); //string to int
int ageOther= Convert.ToInt32(anderGetal); //double to int
```

Je plaatst tussen de ronde haakjes de variabele of literal die je wenst te converteren naar een ander type. Merk op dat naar een `int` converteren met `.ToInt32()` moet gebeuren. Om naar een `short` te converteren is dit met behulp van `.ToInt16()`. Het voordeel van deze werkwijze is dat ze vastgelegd kan worden door de programmeur en dat ze vaak meer "intuïtieve" omzettingen doet dan een cast. En, als de omzettingen je niet bevallen, kan je een eigen klasse `MyConvert` schrijven die de omzettingen doet zoals je zelf wil. **Het zijn namelijk gewoon methodes.**

Je kan [alle conversie-mogelijkheden hier bekijken](https://msdn.microsoft.com/en-us/library/system.convert.aspx).