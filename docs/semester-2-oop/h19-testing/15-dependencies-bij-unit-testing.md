# Dependencies bij Unit Testing

We bouwen een spel waarbij je een getal moet raden van 1 tot 6 (we werpen een virtuele dobbelsteen). Kan je het getal exact raden dan krijg je 2 punten. Gok je eentje hoger of lager dan krijg je 1 punt. In de andere gevallen krijg je geen punten.

1\. We bouwen in Visual Studio 2022 een nieuwe console applicatie met de naam `UnitTestingDependencies`

2\. We hebben een klasse nodig die een willekeurig getal terug kan geven van 1 tot 6. Dit is onze virtuele dobbelsteen. We voege een nieuwe klasse `Die` toe aan ons project en implementeren deze als volgt:

```csharp
public class Die
{
    private static Random random = new Random();

    public int Roll()
    {
        return random.Next(6) + 1;
    }
}
```

3\. Nu we een dobbelsteen hebben kunnen we ons spel implementeren. Dit spel zal gebruik maken van de dobbelsteen. We voegen een nieuwe klasse `NumberGame` toe aan ons project en implementeren deze als volgt:

```csharp

public class NumberGame
{
    private Die die; 
    public NumberGame()
    {
        this.die = new Die();
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

4\. We kunnen nu onze Main Methode implementeren zodat we een werkend programma krijgen:

```csharp
public class Program
{
    static void Main(string[] args)
    {
        var numberGame = new NumberGame();
        int score = numberGame.RateGuess(5);
        Console.WriteLine($"Uw score: {score}");
    }
}
```

We hebben nu een werkend programma

5\. Nu we een werkend programma hebben wil ik ook zeker zijn dat dit correct werkt, en in de toekomst ook correct zal blijven werken. Ik wil een unit test maken voor de `RateGuess` Methode van de `NumberGame` klasse. Ik wil volgende zaken testen:

1. Als je het getal juist kan raden geeft de methode 2 terug
2. Als je eentje hoger of lager gokt geeft de methode 1 terug
3. Als je fout gokt geeft deze methode 0 terug

6\. We implementeren onze test: Creëer een nieuw test project met de naam `UnitTestingDependencies.Tests` (vergeet niet de referenties toe te voegen). Hernoem de naam van de klasse UnitTest1 door `NumberGameTests`. Vervang de standaard test methode door een test methode  met de naam `RateGuess_Returns_2_When_Guess_Is_Correct`

7\. We doen nu een poging om deze test te implementeren door onderstaande code toe te voegen:

```csharp
[TestMethod]
public void RateGuess_Returns_2_When_Guess_Is_Correct()
{
    var numberGame = new NumberGame();
    int result = numberGame.RateGuess(5);
    Assert.AreEqual(2, result);
}
```

Deze test zal soms werken, als 5 toevallig het juiste getal is. Maar 5 kansen op 6 zal deze test fout lopen. Er is met andere woorden een factor in mijn test die ik zelf niet in de hand heb. `NumberGame` heeft een dependency met Die en deze zal altijd een willekeurig getal teruggeven. We zullen onze code eerst moeten aanpassen om deze degelijk te kunnen testen. We zullen zien dat we hiermee ook de kwaliteit van onze code zullen verbeteren. Als je code niet testbaar is dan is ze in de meeste gevallen ook niet goed.