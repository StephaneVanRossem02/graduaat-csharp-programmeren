# While en Do While

### While

#### Voorbeeld werking

Volgend Flowgorithm programma demonstreert hoe een `while` lus wordt toegepast wanneer je systematisch boodschappen afwerkt.

![Een while wordt aangegeven door een booleaanse expressie waaruit een True-tak vertrekt die er daarna weer in terugkomt. Hier: de oranje zeshoek.](/img/img-3092.png)

Omdat de `True`-tak terug leidt naar de controle van de voorwaarde, blijven we dezelfde stappen herhalen tot niet meer aan de voorwaarde voldaan is. Dit is het basisconcept achter een `while` lus. Het woord "while" betekent dan ook "zolang als".

Dit is anders dan bij `if`: het woordje "if" betekent gewoonweg "als" en houdt dus niet in dat we dezelfde stappen zullen herhalen. Bij `while` blijven we dezelfde stappen uitvoeren zo lang dat nodig is.

#### Syntax

De syntax van een while loop is eenvoudig:

```csharp
while (booleaanse expressie) 
{
  // C# die zal uitgevoegd worden zolang de booleaanse expressie waar is
}
```

Waarbij, net als bij een `if` statement, de conditie uitgedrukt wordt als een booleaanse expressie.

Zolang de conditie `true` is zal de code binnen de accolades uitgevoerd worden. Indien dus de conditie reeds vanaf het begin `false` is dan zal de code binnen de `while`-loop niet worden uitgevoerd.

Telkens wanneer het programma aan het einde van het `while` codeblock komt springt het terug naar de conditie bovenaan en zal de test wederom uitvoeren. Is deze weer `true` dan wordt de code weer uitgevoerd. Van zodra de test `false` is zal de code voorbij het codeblock springen en na het `while` codeblok doorgaan.

De code voor ons boodschappenlijstje ziet er dan ook zo uit:

![](/img/img-3093.png)

Een tweede voorbeeld van een eenvoudige while loop:

```csharp
int myCount = 0;

while (myCount < 100)
{
    myCount++;
    Console.WriteLine(myCount);
}
```

Zolang `myCount` kleiner is dan 100 (`myCount < 100`) zal myCount met 1 verhoogd worden en zal de huidige waarde van myCount getoond worden. We krijgen met dit programma dus alle getallen van 1 tot en met 100 op het scherm onder elkaar te zien.

Daar de test gebeurt aan het begin van de loop wil dit zeggen dat het getal 100 nog wel getoond zal worden. **Begrijp je waarom?** Test dit zelf!

### Do while

In tegenstelling tot een while loop, zal een do-while loop sowieso **minstens 1 keer uitgevoerd worden**.

#### Voorbeelden werking

Volgende flowchart helpt je bepalen of je klaar bent om een commit operatie uit te voeren in Git. Zoals je in andere vakken leert, moet je in Git eerst de gewenste bestanden in de staging area zetten. Dat kan soms in één commando gebeuren en soms in meerdere commando's, maar je moet altijd wel minstens één keer stagen.

![Een do-while wordt aangegeven door een booleaanse expressie die na een reeks instructies wordt geëvalueerd en waarbij de True-tak terug tot diezelfde reeks instructies leidt.](/img/img-3094.png)

Een tweede voorbeeld: een opstel schrijven. Dat moet je altijd nog eens nakijken. Als het niet goed is, moet je je tekst aanpassen en opnieuw controleren. Pas wanneer je helemaal tevreden bent, mag je inzenden.

![](/img/img-3095.png)

De syntax van een do-while is eveneens verraderlijk eenvoudig:

```csharp
do{
      // C# die uitgevoerd zal worden zolang de booleaanse expressie waar is
} while (booleaanse expressie);
```

> ⚠️ Merk op dat achteraan de conditie een puntkomma na het ronde haakje staat. **Dit is een véél voorkomende fout. Bij een while is dit niet zo!** Daar de test van een do-while achteraan de code van de loop gebeurt is het logisch dat een do-while dus minstens 1 keer wordt uitgevoerd. Het volgende eenvoudige aftelprogramma toont de werking van de do-while loop.

Voor het opstel ziet dit er bijvoorbeeld zo uit:

![](/img/img-3096.png)

Je kan dit ook doen met een gewone while (je kan elke do while herschrijven met een gewone while), maar dan kost dat meer code. Dat verhoogt dan weer de kans op fouten.

### Complexe condities

Uiteraard mag de conditie waaraan een loop moet voldoen complexer zijn door middel van de relationele operatoren.

Volgende `while` bijvoorbeeld zal de gebruiker aanraden in bed te blijven zolang deze ziek of moe is:

```csharp
while(gebruikerVoeltZichZiek || gebruikerVoeltZichMoe)
{
  Console.WriteLine("Blijf in bed!");
  Console.ReadLine();
}
```

### Oneindige loops

Indien de loop-conditie nooit `false` wordt, dan heb je een oneindige loop gemaakt. Soms is dit gewenst gedrag (bijvoorbeeld in een programma dat constant je scherm moet updaten, zoals in een game), soms is dit een bug.

Volgende twee voorbeelden tonen dit:

* Een bewust oneindige loop:

  ```csharp
  while(true)
  {
    // code die nooit hoort te stoppen of die zelf het programma kan afsluiten
  }
  ```
* Een bug die een oneindige loop veroorzaakt:

  ```csharp
  int teller = 0; 
  while(teller<10)
  {
    Console.WriteLine(teller);
  }
  ```

### Scope van variabelen in loops

Let er op dat de [scope](../h4-beslissingen/3_scope.md) van variabelen bij loops zeer belangrijk is. Indien je een variabele binnen de loop definieert dan zal deze steeds terug "verdwijnen" wanneer de cyclus van de loop is afgewerkt. Latere declaraties voor variabelen met dezelfde naam hebben niets meer te maken met de oorspronkelijke variabele.

Volgende code toont bijvoorbeeld **foutief** hoe je de som van de eerste 10 getallen (1+2+3+...+10) zou maken:

```csharp
int teller= 1;
while(teller <= 10)
{
   int som = 0;
   som = som+teller;
   teller++;
}
Console.WriteLine(som); //deze lijn zal fout genereren
```

De **correcte** manier om dit op te lossen is te beseffen dat de variabele som enkel binnen de accolades van de while-loop gekend is. Op de koop toe wordt deze steeds terug op 0 gezet en er kan dus geen som van alle teller-waarden bijgehouden worden:

```csharp
int teller= 1;
int som=0;  
while(teller <= 10)
{
   som = som+teller;
   teller++;
}
Console.WriteLine(som);
```

Scope is [eerder](../h4-beslissingen/3_scope.md) al in het algemeen behandeld, maar zeker in loops worden er veel fouten tegen gemaakt. Daarom beklemtonen we het hier nog eens.