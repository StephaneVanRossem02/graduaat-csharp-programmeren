# TestInitialize en DataRows

#### TestInitialize

In de verschillende testen moeten we steeds terug een instantie maken van de `Calculator`-klasse. Dat kunnen we beter apart doen in een initialisatiecode:

Bovenaan de klasse `CalculatorTest` plaatsen we de initialisatiecode die dan zal gelden voor alle onderstaande testmethodes:

```csharp
namespace UnitTesting
{
    [TestClass]
    public class CalculatorTest
    {
        Calculator calculator;
        [TestInitialize]
        public void ArrangeTests()
        {
            calculator = new Calculator();
        }
        [TestMethod]
        public void SumTest()
        {
            //ARRANGE       
            int a = 2;                       
            int b = 3;                        
            int expected = 5;                
            //ACT
            int result = calculator.Sum(a, b);  
            //ASSERT
            Assert.AreEqual(expected, result);  
        }
    }
}
```

#### DataRows

We kunnen met één testmethode verschillende waarden testen door er een `DataTestMethod` van te maken en DataRows samen te stellen. De testmethode moet wel parameters hebben dan. 

Maak volgende methode:

```csharp
    [DataTestMethod]
    [DataRow(2)]
    [DataRow(5)]
    [DataRow(6)]
    [DataRow(8)]
    public void EvenTestTrueRow(int number)
    {
        //Arrange

        //Act
        bool result = calculator.Even(number);
        //Assert
        Assert.IsTrue(result);
    }
```

Er staat één oneven getal tussen de datarows; dus dit geeft:

![](/img/img-3248.png)