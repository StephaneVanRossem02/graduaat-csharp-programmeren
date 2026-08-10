# If, else, else if

> ✅ [Kennisclip](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=e78ccafd-9804-40cc-8744-adbe00e37ac0)

In dit deel zullen we bekijken hoe we ons programma dynamischer kunnen maken met behulp van het `if`-statement, al dan niet uitgebreid met `else` en `else if`.

## If

De `if` is een van de elementairste constructies in een programmeertaal. Vrijwel elke programmeertaal bezit deze constructie. We zullen de werking ervan eerst wat algemener bekijken, zodat je het concept goed begrijpt. Daarna zullen we inzoomen op de syntax in C#.

Het basisidee is als volgt: een `if`-constructie bevat code die **enkel** uitvoert als een booleaanse expressie `true` oplevert. Met andere woorden: als een voorwaarde naar keuze **waar** is. We noemen dergelijke code **conditionele code**, want een conditie is een voorwaarde.

We zullen dit tonen met een Flowgorithm programma. Dit is een beperkte, maar heel visuele programmeertaal. In een Flowgorithm programma start je bij `Main` en volg je steeds de pijlen.

![](/img/img-3055.png)

De gele box stelt een declaratie voor. Ook in Flowgorithm moet je variabelen declareren. Het blauw parallellogram: de gebruiker geeft iets in (de waarde van `wachtwoord`). De rode ruit bevat een booleaanse expressie. Dan is er een vertakking, met daarop de waarden `True` en `False`. **We volgen de pijl met daarop de uitkomst van de booleaanse expressie.** Als we dus het juiste wachtwoord intypen, krijgen we de geheime info, anders gebeurt er niets.

Het `if`-statement stemt overeen met alles tussen de rode ruit en het rode bolletje. Dus **als aan een bepaalde voorwaarde voldaan is, voeren we afgebakende code uit**.

Uit dit programma kan je dan ook volgende C#-code afleiden:

![](/img/img-3056.png)

In de gegenereerde code stemt de rode ruit dus overeen met de haakjes meteen na `if` en stemt de tak `True` overeen met de accolades.

> ℹ️ Flowgorithm is vrij te downloaden, dus als je moeite hebt met deze concepten, wordt aangeraden hier wat mee te experimenteren.

## Veelgemaakte if-fouten

Er zijn enkele veelgemaakte fouten waar je op moet letten:

### Appelen en peren vergelijken

De types in je booleanse expressie moeten steeds vergelijkbaar zijn. Volgende code is dus fout: `if( "4" > 3)` daar we hier een `string` met een `int` vergelijken.

### Accolades vergeten

Als je geen accolades schrijft, verandert de werking van `if`. Het gevolg zal zijn dat enkel het eerste statement na de `if` zal uitgevoerd worden indien `true`. Gebruiken we de `if` van daarnet maar zonder accolades dan zal het tweede statement altijd uitgevoerd worden ongeacht de `if`:

```csharp
if (wachtwoord == "gEhEiM")
    Console.WriteLine ("Geheime informatie: ...");
    Console.WriteLine ("Fijne dag nog!");
```

> ℹ️ Voor ons is het simpel: we schrijven `if` **altijd** met accolades.

## If/else

Het eerdere voorbeeld toont dat we soms actie willen ondernemen als aan een voorwaarde voldaan is, maar heel vaak willen we een **andere** actie ondernemen als aan diezelfde voorwaarde **niet** voldaan is. In dat geval maken we gebruik van de `if ... else ...`.

We gaan terug naar onze login. Een fout wachtwoord ingeven heeft bepaalde gevolgen. Dit kan bijvoorbeeld een alarm doen afgaan, omdat indringers soms foute wachtwoorden ingeven tot ze toevallig het juiste vinden. We stellen dit hier voor door een actie toe te voegen als het wachtwoord **niet** klopt.

![](/img/img-3057.png)

De overeenkomstige C# code:

![](/img/img-3058.png)

In bovenstaande code stemt de rode ruit dus nog steeds overeen met de haakjes meteen na `if`, stemt de tak `True` overeen met de accolades vlak na de ronde haakjes en stemt `else { ... }` overeen met de tak `False`. Anders gezegd: **als aan een bepaalde voorwaarde voldaan is, voeren we het eerste blok afgebakende code uit, anders voeren we het tweede blok afgebakende code uit**.

## Code voor beide gevallen

Als we iets altijd willen doen, hoort dat niet in een vertakking. Dan zetten we het in de flowchart na het rode bolletje. In ons programma zetten we het dan na de volledige `if ... else ...`:

![Code die in beide gevallen moet uitvoeren, zetten we achter het rode bolletje.](/img/img-3059.png)

De gegenereerde code is dan:

![](/img/img-3060.png)

## Nesting

Het is perfect mogelijk om bepaalde controles enkel te doen als eerdere controles wel of niet gelukt zijn. Dit kan er zo uitzien:

![](/img/img-3061.png)

In de gegenereerde code leidt dit tot **geneste conditionele code**: een `if` binnenin een grotere `if` of `else`. In digt geval gaat het om een `if` in een `else`. Je mag zo diep nesten als je maar wil. Er is geen technische limiet, maar je code zal wel onleesbaar worden als je overdrijft.

![](/img/img-3062.png)

## else if

Nesten van conditionele code levert soms code op die moeilijk te ontrafelen is. Het gebeurt vaak dat we een `else` nodig hebben met meteen daarin terug een `if`, om zo verschillende gevallen af te handelen.

We kunnen een programma maken dat dit demonstreert: Er is niet aan de hoofdvoorwaarde voldaan, maar er is wel aan een andere voorwaarde voldaan:

![](/img/img-3063.png)

De gegenereerde code voor dit frament is technisch juist:

![](/img/img-3064.png)

Maar Flowgorithm is geen menselijke programmeur. Een menselijke programmeur zou volgende voorstelling gebruiken, die hetzelfde doet, maar makkelijker leesbaar is:

```csharp
public static void Main(string[] args) {
  string wachtwoord;
  wachtwoord = Console.ReadLine();
  if (wachtwoord == "gEhEiM") {
    Console.WriteLine("Geheime informatie: ...");
  }
  else if (wachtwoord == "geheim") {
    Console.WriteLine("Warm!");
  }
  else {
    Console.WriteLine("Koud!");
  }
  Console.WriteLine("Fijne dag nog!");
}
```