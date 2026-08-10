# For

## For

Het gebeurt heel vaak dat we een teller bijhouden die aangeeft hoe vaak een lus al doorlopen is. Wanneer de teller een bepaalde waarde bereikt moet de loop afgesloten worden.

Bijvoorbeeld volgende code om alle even getallen van 0 tot 10 te tonen:

```csharp
int k = 0;
while(k <= 10)
{
    Console.WriteLine(k);
    k = k + 2;
}
```

**Met een for-loop kunnen we deze veel voorkomende code-constructie verkort schrijven.**

### For syntax

De syntax van een `for`-loop is de volgende:

```csharp
for (setup; test; update)
{
    // alles tussen deze accolades is de "body" van de lus
}
```

* **setup**: In het setup gedeelte voeren we code uit die klaar moet zijn voor de lus voor het eerst begint. Dat betekent in de praktijk bijna altijd dat we een **loop variabele** aanmaken waarmee we bijhouden hoe vaak we al door de lus zijn gegaan. Variabelen die je hier aanmaakt hebben dezelfde scope als de **body** van de lus. Wanneer de `for` eindigt, bestaan ze met andere woorden niet meer.
* **test**: Hier plaatsen we een booleaanse expressie die nagaat of de lus mag worden uitgevoerd. Deze heeft dus niet dezelfde functie als de booleaanse expressie van een `while`. Als ze `false` oplevert, wordt de body van de lus niet meer uitgevoerd. Dit betekent in de praktijk heel vaak dat we nagaan of de loop variabele al een zekere waarde heeft bereikt.
* **update**: Hier plaatsen we wat er moet gebeuren telkens de loop body is afgewerkt. Meestal zullen we hier de loop variabele verhogen of verlagen.

In Flowgorithm (dit stemt helaas niet 100% overeen met C# omwille van een klein verschil in scope):

!["step 2" betekent dat we na elke cyclus de teller met 2 verhogen](/img/img-3097.png)

Gebruiken we deze kennis nu, dan kunnen we de eerder vermelde code om de even getallen van 0 tot en met 10 tonen als volgt:

```csharp
for (int teller = 0; teller <= 10; teller += 2)
{
    Console.WriteLine(teller);
}
```

Voor de indexvariabele kiest men meestal niet `teller`, maar `i`, maar dat is niet noodzakelijk. In de setup wordt dus een variabele op een start-waarde gezet. De test zal aan de start van iedere loop kijken of de voorwaarde nog waar is, indien dat het geval is dan wordt een nieuwe loop gestart en wordt `i` met een bepaalde waarde, zoals in update aangegeven, verhoogd.

> ⚠️ Je kan niets met een `for` dat je met een `while` niet kan. Je kan niets met een `while` dat je met een `for` niet kan. Als je dit niet inziet, heb je lussen nog niet begrepen en moet je dit hoofdstuk vanaf het begin opnieuw lezen.
> 
> P.S.: wat voor lus is hier net gebruikt?!

> ℹ️ Waarom stemt de Flowgorithm hierboven niet perfect overeen met de C#-code? Omdat in de C#-code `teller` **gedeclareerd wordt als onderdeel van de for**. In de code die we uit de Flowgorithm hierboven kunnen genereren, wordt `teller` niet gedeclareerd als onderdeel van de lus en blijft deze dus bestaan nadat de lus is afgewerkt. Dit is een klein detail, maar we vinden het belangrijk uit te leggen waarom deze code niet gelijkwaardig is.