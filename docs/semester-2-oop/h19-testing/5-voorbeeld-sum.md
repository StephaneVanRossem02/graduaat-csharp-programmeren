# Eerste voorbeeld: Sum

Visual Studio 2022 voorziet tools om unit tests te maken en deze te automatiseren. We bouwen in enkele stappen een kleine console applicatie in Visual Studio 2022 en maken hier een unit test voor.

1\. Maak in Visual Studio een nieuwe console applicatie aan met de naam `TestingCalculator`

2\. Voeg aan deze applicatie een nieuwe klasse toe met de naam `Calculator`

3\. We voegen in deze klasse onderstaande methode toe

```csharp
namespace TestingCalculator
{
    internal class Calculator
    {
        public int Sum(int a, int b)
        {
            return 0;
        }
    }
}
```

4\. Deze methode zullen we gebruiken om 2 getallen op te tellen. Zoals je kan zien is deze methode nog niet uitgewerkt en geeft deze steeds 0 terug. Voorlopig laten we dit zo. We zullen eerst een test maken voor deze methode. Deze test zal falen. Daarna implementeren we de juiste logica in deze methode en laten we de test opnieuw lopen. Deze zal nu wel correct lopen. Deze manier van werken waarbij we eerst de test maken en dan pas de logica implementeren noemen we **Test Driven Development** of TDD. 

5\. Klik nu met je rechter muisknop op je solution en klik op Add > New Project…

6\. Selecteer **MSTest Test Project** (voor C#),  klik op Next, kies als project naam **`UnitTesting`** en klik op Next, selecteer .NET 6.0 (of 7.0) en klik op Create

![](/img/img-3231.png)


7. We krijgen nu onderstaande klasse:

```csharp
namespace UnitTesting
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
        }
    }
}
```

8\. Het `UnitTesting` project refereert naar klassen uit het project  `TestingCalculator`. We leggen dat vast in de dependencies. Klik rechts op Dependencies, kies Add Project Reference en selecteer `TestingCalculator`.

![](/img/img-3232.png)


9. Wijzig de code zoals in het onderstaande voorbeeld:

```csharp
namespace UnitTesting
{
    [TestClass]
    public class CalculatorTest
    {
        [TestMethod]
        public void SumTest()
        {
            Assert.Fail();
        }
    }
}
```

10\. Rechter klik nu op `SumTest` en klik op "Run Tests" (Ctrl+R, T)

11\. Visual Studio toont nu de **Test Explorer.** We zien hier dat er één test is uitgevoerd en dat deze test faalde; zoals weergegeven in onderstaande afbeelding. Je kan de test explorer ook steeds openen via View > Test Explorer.

![](/img/img-3233.png)


12\. Deze test faalde omdat in deze test `Assert.Fail()` staat.

13\. We implementeren deze test door onderstaande code toe te voegen. \
Merk op dat er een `using` is bijgevoegd en vergeet ook niet om de klasse Calculator `public` te maken.

#### Internal

:::info
`Internal` wil zeggen: de klasse/methode gedraagt zich als public zolang we in hetzelfde project aan het werken zijn. Alles daar buiten ziet de klasse/methode als private.

Voorheen was dit geen probleem omdat we steeds aan het werken waren binnen hetzelfde project. Maar om unit tests te gebruiken moeten we over 2 (of meer) projecten werken.
:::

```csharp
using TestingCalculator;

namespace UnitTesting
{
    [TestClass]
    public class CalculatorTest
    {
        [TestMethod]
        public void SumTest()
        {
            Calculator calculator = new Calculator();  // Maak een nieuwe calculator instantie
            int a = 2;                          // Waarde voor parameter a
            int b = 3;                          // Waarde voor parameter b
            int expected = 5;                   // Verwacht resultaat
            int result = calculator.Sum(a, b);  // Sum methode aanroepen
            Assert.AreEqual(expected, result);  // Testen of resultaat gelijk is aan verwachte waarde 
        }
    }
}
```

14\. We laten de test opnieuw lopen. We krijgen nu het onderstaande resultaat.

![](/img/img-3234.png)


15\. Zoals je kan zien is het verwacht resultaat 5 (2 + 3) maar is het resultaat van de `Sum` methode 0. We moeten deze methode nog implementeren in onze calculator klasse. We werken deze als volgt uit.

```csharp
namespace TestingCalculator
{
    public class Calculator
    {
        public int Sum(int a, int b)
        {
            return a + b;
        }
    }
}
```

16\. Als we de test nu opnieuw uitvoeren krijgen we het onderstaande resultaat

![](/img/img-3235.png)


We kunnen deze test in de toekomst steeds blijven uitvoeren. Als onze applicatie in de toekomst complexer zal worden, zijn we toch zeker dat dit stukje code blijft werken. Als er iemand het + teken per vergissing zou vervangen door een - teken zal deze test falen en weten we dat er een probleem is met deze methode. Uiteraard is het belangrijk om je test parameters zorgvuldig te kiezen en eventueel meerdere test te schrijven voor een methode.

We kunnen van deze eerste test gebruik maken om te tonen dat een unittest een vast patroon volgt.

```csharp
using TestingCalculator;

namespace UnitTesting
{
    [TestClass]
    public class CalculatorTest
    {
        [TestMethod]
        public void SumTest()
        {
            //ARRANGE
            Calculator calculator = new Calculator();  // Maak een nieuwe calculator instantie
            int a = 2;                          // Waarde voor parameter a
            int b = 3;                          // Waarde voor parameter b
            int expected = 5;                   // Verwacht resultaat
            //ACT
            int result = calculator.Sum(a, b);  // Sum methode aanroepen
            //ASSERT
            Assert.AreEqual(expected, result);  // Testen of resultaat gelijk is aan verwachte waarde 
        }
    }
}
```

Dit helpt om structuur te houden in de unittests.