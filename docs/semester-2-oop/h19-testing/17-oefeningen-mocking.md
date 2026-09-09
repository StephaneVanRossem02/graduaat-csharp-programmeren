# Oefeningen Mocking

## Oefening Weekend

Maak volgende code in een project:

```csharp
public class Greeter
{
    private IDateGetter dateGetter;

    public Greeter(IDateGetter dateGetter)
    {
        this.dateGetter = dateGetter;
    }

    public string GetMessage()
    {
        DateTime date = dateGetter.GetDate();
        if(date.DayOfWeek == DayOfWeek.Saturday || date.DayOfWeek == DayOfWeek.Sunday)
        {
            return "Party time...  it's the weekend!";
        }
        return "Work hard, the weekend is on it's way...";
    }
}
```

```csharp
public interface IDateGetter
{
    DateTime GetDate();
}
```

```csharp
public class DateGetter : IDateGetter
{
    public DateTime GetDate()
    {
        return DateTime.Now;
    }
}
```

### Opdracht 1

Bekijk de code en analyseer wat deze doet. Wat zou er voor problemen kunnen zorgen mocht je een unittest schrijven om de `GetMessage` methode te testen?

### Opdracht 2

Schrijf een unit test om de GetMessage klasse te testen. Je moet dus testen of je steeds de juiste boodschap zal terug krijgen afhankelijk of het een week dag is of niet. Let op, je test moet je op eender welke dag van de week kunnen uitvoeren! 

:::info
Je zal dus gebruik moeten maken van moq om je IDateGetter te mocken.
:::