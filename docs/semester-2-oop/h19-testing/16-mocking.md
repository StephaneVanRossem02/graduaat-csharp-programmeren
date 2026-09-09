# Mocking

We bouwen verder op het voorbeeld dat we hebben gezien in het vorige hoofdstuk

1\. Voeg een nieuwe interface toe met de naam `IDie`

2\. We werken deze interface als volgt uit:

```csharp
public interface IDie
{
    int Roll();
}

```

3\. We passen nu onze bestaande `Die` klasse aan en implementeren op deze klasse de `IDie` interface. Verder moeten we hier niets aanpassen, omdat deze klasse al een int `Roll()` heeft.

```csharp
public class Die : IDie //<--
{
    private static Random random = new Random();

    public int Roll()
    {
        return random.Next(6) + 1;
    }
}
```

4\. Mijn  `NumberGame` klasse heeft nu een "tight coupling" met `Die`. Deze `Die` klasse geeft een random getal terug. Ik wil de `NumberGame` klasse kunnen testen met een `IDie` waarbij ik zelf kan kiezen welk resultaat deze terug geeft. Ik maak gebruik van dependency injection en pas mijn `NumberGame` klasse als volgt aan:

```csharp
public class NumberGame
{
    private IDie die; //<--
    public NumberGame(IDie die) //<--
    {
        this.die = die; //<--
    }

    public int RateGuess(int guess)
    {
        int result = die.Roll();
        if (result == guess)
        {
            return 2;
        }
        if (result - 1 == guess || result + 1 == guess)
        {
            return 1;
        }
        return 0;
    }
}
```

We kunnen nu via de constructor onze `NumberGame` klasse met eender welke dobbelsteen laten werken die `IDie` implementeert. Dit principe noemen we Dependency Injection.

Misschien willen we een dobbelsteen met een waarde van 1 tot 12? Of één die we visueel op het scherm zien rollen? Ik maak mijn code dus niet enkel testbaar, ik werk ook dependencies weg en zorg zo voor code die makkelijker aanpasbaar is.

5\. Als we nu proberen compileren krijgen we de volgende foutmelding: "There is no argument given that corresponds to the required formal parameter 'die' of 'NumberGame.NumberGame(IDie)'"

In onze `Main` methode moeten we nu een `IDie` meegeven aan onze `NumberGame` klasse. Ik gebruik in mijn code de `Die` klasse. Alles werkt dan weer zoals het was, met dat verschil dat ik nu via de constructor van `NumberGame` kan bepalen welke `IDie` ik wil gebruiken.

```csharp
public class Program
{
    static void Main(string[] args)
    {
        var numberGame = new NumberGame(new Die()); //<--
        int score = numberGame.RateGuess(5);
        Console.WriteLine($"Uw score: {score}");
    }
}
```

6\. Mijn test werkt nu ook niet meer. Hier moet ik aan de `NumberGame` constructor ook een `IDie` meegeven. We zullen hiervoor een nieuwe klasse aanmaken.

Voeg een nieuwe klasse toe en geef deze de naam `DieMock`.

Deze klasse laten we `IDie` implementeren en moet dus een `Roll` methode hebben. We werken deze als volgt uit:

```csharp
public class DieMock : IDie
{
    private int result;

    public DieMock(int result)
    {
        this.result = result;
    }

    public int Roll()
    {
        return result;
    }
}
```

Deze code lijkt op het eerste zicht misschien een beetje vreemd maar dit is exact wat we nodig hebben. Als ik een nieuwe instance wil maken van deze klasse moet in ik de constructor een getal meegeven. Dit is het resultaat dat de dobbelsteen steeds zal teruggeven.

7\. Ik kan mijn test nu als volgt implementeren:

```csharp
[TestMethod]
public void RateGuess_Returns_2_When_Guess_Is_Correct()
{
       var numberGame = new NumberGame(new DieMock(5)); //<--
       int result = numberGame.RateGuess(5);
       Assert.AreEqual(2, result);
 }
```

Nu weet ik dat de dobbelsteen 5 zal teruggeven. Nu zal de test dus steeds correct werken. Als de dobbelsteen 5 teruggeeft en ik raad 5, dan krijg ik 2 punten.

Ik kan nu ook de volgende test implementeren:

```csharp
[TestMethod]
public void RateGuess_Returns_1_When_Guess_Is_Only_1_Wrong()
{
       var numberGame = new NumberGame(new DieMock(5));
       int result = numberGame.RateGuess(4);
       Assert.AreEqual(1, result);
}
```

En de laatste test:

```csharp
[TestMethod]
public void RateGuess_Returns_0_When_Guess_Is_Wrong()
{
       var numberGame = new NumberGame(new DieMock(5));
       int result = numberGame.RateGuess(3);
       Assert.AreEqual(0, result);
 }
```

## "Moqing"

In het bovenstaande voorbeeld maakten we een `DieMock` klasse. Deze klasse zal de dobbelsteen vervangen als we het systeem willen testen. Over deze klasse hebben we zelf de controle. Het zou ons heel wat werk kosten om voor elke klasse die we maken ook een Mock klasse te voorzien en in deze klasse al het nodige gedrag te coderen. Gelukkig zijn er frameworks die deze taak voor ons uitvoeren. Wij zullen Moq gebruiken.

1\. Om te beginnen voegen we via NuGet de Moq package toe:

1. Onder je test project rechter klik je op Dependencies (of rechtstreeks op je project)
2. Klik op "Manage NuGet Packages..."
3. Klik op browse 
4. Zoek Moq
5. Selecteer Moq
6. Klik op install
7. Klik op OK
8. De Package is nu toegevoegd aan ons test project

In plaats van onze `DieMock` klasse te gebruiken zullen we nu het Moq framework gebruiken om dit object aan te maken:

2\. We werken onze test nu als volg uit:

```csharp
[TestMethod]
public void RateGuess_Returns_2_When_Guess_Is_Correct_Moq()
{
       var die = new Mock<IDie>();
       die.Setup(x => x.Roll()).Returns(5); //<-- dit is nieuw!
       var numberGame = new NumberGame(die.Object);
       int result = numberGame.RateGuess(5);
       Assert.AreEqual(2, result);
 }
```

De gemarkeerde coderegel is wat vreemd gestructureerd. We gebruiken hier voor het eerst een lambda expressie. De structuur van een lambda ziet er als volgt uit `(x => x.iets) of (x  => iets(x)`). Je moet niet x gebruiken, je kan hier eenders welke variabele voor kiezen, maar net zoals we in een for-loop meestal `int i` laten staan, gebruiken we x in lambda expressies. Even een voorbeeld van iets waarmee wel al bekend zijn. We kunnen op List\<T> verschillende methoden aanroepen waaraan we een lambda expressie kunnen meegeven. Hier zie je een voorbeeld van code die hetzelfde doet.

```csharp
List<int> numbers = new List<int>{ 1, 2, 3, 4, 5 };
//'normale' manier van foreach
foreach (var number in numbers)
{
    Console.WriteLine(number);
}
//herschreven met lambda notatie
numbers.ForEach(x => Console.WriteLine(x));
numbers.ForEach(number => Console.WriteLine(number));
```

Omdat `die` nu een Mock variabele is kunnen we `Setup` aanroepen. Deze methode vraagt ook voor een lambda expressie. `Setup` zorgt ervoor dat we een methode kunnen mocken. Om dit te doen moeten we eerst ons element selecteren: We zetten dus eerst x => x om aan te geven dat we iets willen uitvoeren.

![](/img/img-3239.png)


Als we er een punt achter zetten zien we dat we alle methoden van Die te zie krijgen. 

![](/img/img-3240.png)


We willen `Roll` mocken zodat we steeds 5 terugkrijgen ipv een random waarde. Dit doen we door achter `Roll().Returns(5)` aan te roepen. 

![](/img/img-3241.png)


Dit zorgt ervoor dat als we, tijdens de test, ergens in de code `Roll()` aanroepen, we steeds de waarde 5 terugkrijgen!

3\. Onze `NumberGame` klasse moet de dobbelsteen exact één keer werpen als ik de `RateGuess` methode aanroep. De `Roll` methode van de `Die` klasse moet dus exact één keer worden aangeroepen. We implementeren deze tests als volgt:

```csharp
[TestMethod]
public void Roll_Method_Rolls_The_Die_Exactly_Once()
{
       var die = new Mock<IDie>();
       var numberGame = new NumberGame(die.Object);
       numberGame.RateGuess(5);
       die.Verify(x => x.Roll(), Times.Once);
}
```

`Verify` zorgt ervoor of onze `Roll` methode wordt uitgevoerd. Je kan als extra parameter meegeven of dit verschillende keren gebeurt of (minstens) 1 keer.

![](/img/img-3242.png)


`Times` heeft verschillende opties waaruit je kan kiezen.

![](/img/img-3243.png)


:::warning
We gaan niet te diep in op lambda expressions. Je moet ze wel begrijpen en kunnen toepassen in de context van Moq, maar we verwachten niet dat je nu alle code met lambda expressies gaat schrijven. Wil je meer info? Kijk gerust even [hier](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions), maar let erop; dit is wel wat complexer en geen verplichte leerstof!
:::

:::info
Je kan nog zoveel meer doen met Moq dan wat we hier laten zien (bvb in je Setup vastleggen dat je een Exception werpt wanneer je een methode aanroept om te kijken of je exceptionhandling goed is). Probeer zelf wat uit en zoek online op.
:::

```csharp
//Exception voorbeeld
die.Setup(x => x.Roll()).Throws(new Exception());
```