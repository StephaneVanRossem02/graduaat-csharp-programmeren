---
draft: true
---
# Interface Segregation Principle (ISP)

Het Interface Segregation Principle (ISP) benadrukt dat afgeleide klassen niet gedwongen moeten worden afhankelijk te zijn van interfaces die ze niet gebruiken. Met andere woorden, het stelt dat interfaces specifiek en gespecialiseerd moeten zijn voor de behoeften van de klassen die ze implementeren, om overbodige en ongebruikte methoden te vermijden.

Dit principe is vooral relevant bij het ontwerpen van interfaces in situaties waarin klassen verschillende sets functionaliteit nodig hebben. Door het ISP toe te passen, creëer je meer cohesie en losse koppeling in je code, waardoor het gemakkelijker wordt om code te begrijpen, aan te passen en te onderhouden.

Laten we dit principe verder toelichten aan de hand van een voorbeeld in C#.

Stel dat je een interface hebt genaamd IWorker die enkele methoden definieert die verband houden met werknemers:

```csharp
public interface IWorker
{
    void Work();
    void Eat();
    void Sleep();
}
```

Nu heb je twee klassen, OfficeWorker en FactoryWorker, die werknemers vertegenwoordigen:

```csharp
public class OfficeWorker : IWorker
{
    public void Work()
    {
        // Implementatie van werken in een kantooromgeving
    }

    public void Eat()
    {
        // Implementatie van eten in een kantooromgeving
    }

    public void Sleep()
    {
        // Implementatie van slapen in een kantooromgeving
    }
}

public class FactoryWorker : IWorker
{
    public void Work()
    {
        // Implementatie van werken in een fabrieksomgeving
    }

    public void Eat()
    {
        // Implementatie van eten in een fabrieksomgeving
    }

    public void Sleep()
    {
        // Implementatie van slapen in een fabrieksomgeving
    }
}
```

In dit geval worden alle methoden van het IWorker-interface geïmplementeerd in zowel OfficeWorker als FactoryWorker. Maar wat als we later een nieuwe klasse introduceren, bijvoorbeeld Driver, die alleen de Work-methode nodig heeft? Dan zou deze klasse gedwongen worden om lege implementaties te hebben voor Eat en Sleep, wat onnodig is en tegen het ISP ingaat.

Om het Interface Segregation Principle toe te passen, kunnen we de interface opsplitsen in meerdere interfaces die specifiek zijn voor de verschillende rollen van de werknemers:

```csharp
public interface IWorkable
{
    void Work();
}

public interface IEatable
{
    void Eat();
}

public interface ISleepable
{
    void Sleep();
}
```

Nu kunnen we de interfaces afzonderlijk implementeren in de respectievelijke klassen:

```csharp
public class OfficeWorker : IWorkable, IEatable, ISleepable
{
    // Implementaties van de specifieke methoden
}

public class FactoryWorker : IWorkable, IEatable, ISleepable
{
    // Implementaties van de specifieke methoden
}

public class Driver : IWorkable
{
    // Implementatie van de enige vereiste methode
}
```

Door het toepassen van het ISP hebben we interfaces gemaakt die specifiek zijn voor de behoeften van elke klasse. Hierdoor hoeven klassen geen ongebruikte methoden te implementeren en wordt de codebase meer modulair en onderhoudbaar. Het ISP moedigt aan om interfaces op te splitsen in kleinere, gerichte interfaces die beter aansluiten bij de behoeften van individuele klassen.