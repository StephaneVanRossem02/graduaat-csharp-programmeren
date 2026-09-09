---
draft: true
---
# Open/Closed Principle (OCP)

Het Open/Closed Principle (OCP) stelt dat klassen open moeten staan voor uitbreiding, maar gesloten moeten blijven voor wijzigingen. Met andere woorden, je zou nieuwe functionaliteit moeten kunnen toevoegen aan een systeem zonder de bestaande code van dat systeem te wijzigen. Dit bevordert het behoud van de stabiliteit van bestaande code terwijl je nieuwe functies introduceert.

In C# kan het OCP worden toegepast door gebruik te maken van abstractie, interfaces en het gebruik van polymorfisme (het vermogen van objecten om zich anders te gedragen op basis van hun specifieke implementaties).

Laten we dit principe illustreren aan de hand van een eenvoudig voorbeeld. Stel je voor dat je een applicatie hebt die verschillende soorten vormen moet kunnen tekenen, zoals cirkels en rechthoeken. Laten we eerst een niet-OCP-compatibele implementatie bekijken en vervolgens een OCP-compatibele benadering.

**Niet-OCP-compatibele implementatie:**

```csharp
public class Circle
{
    public double Radius { get; set; }

    public void DrawCircle()
    {
        // Code om een cirkel te tekenen
    }
}

public class Rectangle
{
    public double Width { get; set; }
    public double Height { get; set; }

    public void DrawRectangle()
    {
        // Code om een rechthoek te tekenen
    }
}
```

Als je een nieuwe vorm wilt toevoegen, moet je de bestaande code aanpassen en nieuwe methoden toevoegen om de nieuwe vorm te tekenen. Het grootste probleem is dat je niet kan itereren over een collectie van deze objecten en tegen elk object kan zeggen dat het zichzelf moet tekenen.

**OCP-compatibele implementatie:**

```csharp
public interface IShape
{
    void Draw();
}

public class Circle : IShape
{
    public double Radius { get; set; }

    public void Draw()
    {
        // Code om een cirkel te tekenen
    }
}

public class Rectangle : IShape
{
    public double Width { get; set; }
    public double Height { get; set; }

    public void Draw()
    {
        // Code om een rechthoek te tekenen
    }
}
```

Met deze implementatie introduceren we een interface genaamd IShape die een gemeenschappelijke Draw-methode heeft. Nu kunnen we nieuwe vormen toevoegen door eenvoudig nieuwe klassen te maken die IShape implementeren en de Draw-methode invullen. Hierdoor kunnen we nieuwe functionaliteit toevoegen zonder bestaande code te wijzigen. 

Als we nu een collectie van IShape objecten hebben kunnen we hier over itereren en tegen elk object zeggen dat het zichzelf moet tekenen. Op deze manier kunnen we dus in de toekomst oneindig veel figuren toevoegen, zo lang deze maar IShape implementeren. Onze code zal dan steeds correct blijven werken.

Het Open/Closed Principle moedigt dus aan om bestaande code niet te wijzigen wanneer nieuwe functies worden toegevoegd, maar eerder uitbreidingen te maken via abstractie en interfaces. Dit zorgt voor een meer flexibele en onderhoudbare codebase.