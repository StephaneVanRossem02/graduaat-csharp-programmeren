# Exception testing

Voeg volgende methode toe aan klasse `Calculator`:

```csharp
   public double Divide(double a, double b)
   {
       return a / b;
   }
```

Maak volgende testmethode:

```csharp
  [TestMethod]
  public void TestDivide()
  {
      double expectedResult = 20.0 / 4;
      double result = calculator.Divide(20, 4);
      Assert.AreEqual(expectedResult, result);
  }
```

Voer de test uit.

We willen nu testen wat er gebeurt als de deler 0 is.

Maak hiervoor volgende testmethode:

```csharp
 [TestMethod]
 public void TestDivideByZero()
 {
     double result = calculator.Divide(20, 0);
     Assert.AreEqual(0, result);
 }
```

Voer de test uit. Deze geeft:

![](/img/img-3236.png)


Voeg code toe aan de methode `Divide` om een exception te werpen als de deler 0 is:

```csharp
 public double Divide(double a, double b)
 {
     if (b==0)
     {
         throw new DivideByZeroException();
     }
     else
     {
         return a / b;
     }

 }
```

Of een exception correct geworpen wordt, kan je testen op verschillende manieren. Hieronder tonen we er 2:

#### Gebruik van Assert.Throws

Bij onze testmethode gebruiken we`Throws`  .\
We gebruiken `() => calculator.Divide(20, 0)` om aan te geven dat we bij deze methode aanroep een Exception verwachten.

```csharp
        [TestMethod]
        public void TestDivideByZero()
        {
                 Assert.Throws<DivideByZeroException>(() => calculator.Divide(20, 0));
        }
```

Deze test verloopt wel goed! 

Om na te gaan of je test wel goed werkt, kan je eerst testen met een deling door 4. Dan krijg je deze melding:

![](/img/img-3237.png)


#### Gebruik van try - catch

Je kan het werpen van een exception ook nog anders testen; namelijk met een `try` - `catch`. Maak volgende testmethode:

```csharp
 [TestMethod]
 public void TestDivideByZeroWithTryCatch()
 {
     try
     {
         double result = calculator.Divide(20, 4);
         Assert.Fail("DivideByZeroException werd niet geworpen");
     }
     catch (DivideByZeroException)
     {
         //test geslaagd
     }    
 }
```

Deze zal 'failed" geven:

![](/img/img-3238.png)


Verander nu de 4 in 0 en die test zal wel slagen.

 