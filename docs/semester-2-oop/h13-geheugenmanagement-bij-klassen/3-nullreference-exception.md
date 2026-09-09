# NullReference exception

:::tip
[Kennisclip voor deze inhoud](https://youtu.be/Q5bdntXXQe4)
:::

## Null en NullReferenceException

Zoals nu duidelijk is bevatten variabelen van een reference type steeds een referentie naar een object. Maar wat als we dit schrijven:

```csharp
Student stud1;
// Visual Studio staat niet toe een programme met deze code uit te voeren
// maar je kan het via command line wel doen
stud1.Naam = "Test";
```

Dit zal een fout geven. `stud1` bevat namelijk nog geen referentie. Maar wat dan wel?

Deze variabele bevat de waarde **`null`** . Dit is de defaultwaarde voor reference types. Met andere woorden, als je een reference type declareert en niet initialiseert, zal de waarde `null` zijn.

### NullReferenceException

Een veel voorkomende foutboodschap tijdens de uitvoer van je applicatie is de zogenaamde `NullReferenceException` . Deze zal optreden wanneer je code een **member** (attribuut, methode of property) van `null` probeert op te vragen.

Laten we dit eens simuleren:

```csharp
Student stud1 = null;
Console.WriteLine(stud1.Name);
```

Dit zal resulteren in volgende foutboodschap:

![NullReferenceException error in VS](/img/img-3285.png)

> We moeten in dit voorbeeld expliciet `= null` plaatsen daar Visual Studio slim genoeg is om je te waarschuwen voor eenvoudige potentiële NullReference fouten en je code anders niet zal compileren.

### NullReferenceException voorkomen

Je kan `NullReferenceException` voorkomen door na te gaan dat een object verschillend is van null vooraleer je een van de members van dit object probeert te gebruiken. Bijvoorbeeld, met een klasse `Auto`:

```csharp
static void Main() {
    Auto auto1 = new Auto();
    Auto auto2 = null;
    Console.WriteLine($"{auto1.GeefKilometerstand()}km");
    if (!(auto2 is null)) {
        Console.WriteLine($"{auto2.GeefKilometerstand()}km");
    }
    else {
        Console.WriteLine($"auto2 heeft geen waarde, kilometerstand opvragen zou crashen");
    }
}
```

Deze code zal niet crashen. Als je de `WriteLine` uitvoert zonder if, zal het programma wel crashen met een `NullReferenceException`.

:::warning
Waarom `is null` en niet `== null`? Die vraag leidt ons te ver. Meestal zal `== null` ook werken, maar `==` kan aangepast worden om anders te werken dan gewoonlijk. `is` is dus betrouwbaarder.
:::