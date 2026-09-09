---
draft: true
---
# Liskov Substitution Principle (LSP)

Het Liskov Substitution Principle (LSP) heeft betrekking op de relatie tussen klassen en hun subklassen (afgeleide klassen). Het stelt dat objecten van afgeleide klassen zich moeten kunnen gedragen als objecten van hun basisklassen zonder ongewenst gedrag te introduceren. Met andere woorden, je moet een object van een subklasse kunnen gebruiken als een object van de basisklasse, zonder dat dit leidt tot fouten of inconsistent gedrag.

In C# wordt het LSP vaak bereikt door ervoor te zorgen dat de subklasse de gedragscontracten (interfaces of overerving) van de basisklasse naleeft en niet in strijd is met de verwachtingen van de gebruikers van de basisklasse.

Laten we dit principe verder illustreren met een voorbeeld:

Stel je hebt een hiërarchie van vormen met een basisklasse Shape en twee afgeleide klassen: Rectangle en Circle. Het LSP vereist dat een object van een subklasse (bijvoorbeeld Rectangle of Circle) naadloos kan worden vervangen door een object van de basisklasse (Shape) zonder dat dit tot problemen leidt.

```csharp
public class Shape
{
    public virtual double CalculateArea()
    {
        // Basisklasse heeft een standaardgedrag voor het berekenen van het gebied
        return 0;
    }
}

public class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }

    public override double CalculateArea()
    {
        return Width * Height;
    }
}

public class Circle : Shape
{
    public double Radius { get; set; }

    public override double CalculateArea()
    {
        return Math.PI * Radius * Radius;
    }
}
```

In dit voorbeeld implementeren zowel Rectangle als Circle de CalculateArea-methode die wordt geërfd van de basisklasse Shape. Hierdoor kunnen objecten van beide subklassen naadloos worden vervangen door objecten van de basisklasse in situaties waarin het berekenen van het gebied nodig is.

Het Liskov Substitution Principle zorgt ervoor dat wanneer we een object van een subklasse gebruiken in plaats van een object van de basisklasse, het verwachte gedrag behouden blijft. Het helpt om onverwachte fouten en inconsistente gedragingen in je code te vermijden.

Laten we eens kijken naar een voorbeeld waar we zondigen tegen dit principe. Stel je voor dat je een hiërarchie van dieren hebt, met een basisklasse Animal en twee afgeleide klassen: Dog en Cat. Laten we aannemen dat elke dierklasse een methode heeft genaamd MakeSound() om het geluid van het dier weer te geven.

Zonder Liskov Substitution Principle:

```csharp
public class Animal
{
    public virtual void MakeSound()
    {
        Console.WriteLine("Geluid van een dier");
    }
}

public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Woef woef!");
    }
}

public class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Miauw miauw!");
    }
}
```

Op het eerste gezicht lijkt dit correct, maar laten we een verkeerde implementatie van het Liskov Substitution Principle introduceren:

```csharp
public class WrongDog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Miauw miauw!"); // Fout geluid voor een hond
    }
}
```

In dit geval voldoet WrongDog niet aan het Liskov Substitution Principle. Als we WrongDog gebruiken waar we een Dog-object verwachten, zoals in een scenario waar honden geluiden maken, zouden we echter onverwacht gedrag krijgen, aangezien het geluid dat WrongDog maakt niet overeenkomt met een hond.

Dit kan leiden tot verwarring bij ontwikkelaars die de code gebruiken, onverwachte resultaten veroorzaken en zelfs ernstige fouten in applicaties introduceren.

Met het Liskov Substitution Principle zouden alle subklassen (zoals Dog en Cat) zich moeten gedragen op een manier die compatibel is met het verwachte gedrag van de basisklasse (Animal). In dit geval zou het de verwachting zijn dat het geluid van een hond wordt gereproduceerd wanneer de MakeSound()-methode van een Dog-object wordt aangeroepen.

Een ander bekend voorbeeld is de "wekkerklasse". 

![](/img/img-3252.png)


In de Wekkerklasse staan de functie maakGeluid en het veld geluid. Op het moment dat de Wekker hoort af te gaan wordt de functie maakGeluid aangeroepen en gaat het alarm af. Een analoge wekker is een wekker en zou dus Wekker moeten overerven. Ook een digitale wekker is een wekker en erft dus van de wekkerklasse. De dovenwekker is ook een wekker en zou dus moeten overerven van Wekker. Maar nu is er een probleem, deze wekker trilt in plaats van dat hij geluid maakt. De functie maakGeluid heeft dus geen duidelijke implementatie. In .net resulteert dit vaak in het throwen van een NotImplementedException.

Dit gaat dus in tegen het substitutieprincipe van Liskov: de methode maakGeluid is een methode van Wekker, maar maakGeluid hoort niet bij DovenWekker, terwijl DovenWekker een Wekker is.