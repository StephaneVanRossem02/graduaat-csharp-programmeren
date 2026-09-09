# Immutable datastructuren

De standaard datastructuren van C# zijn [reference types](https://github.com/v-nys/cursusprooo/blob/master/semester-2-oop/h11-datastructuren/broken-reference/README.md). Dit betekent dat iedereen die zo'n datastructuur te pakken krijgt (bijvoorbeeld omdat je hem als argument meegeeft aan een methode), de inhoud van deze datastructuur ook kan wijzigen. Dit kan met opzet of gewoonweg per vergissing gebeuren.

:::info
Hoezo, "met opzet"? Denk eraan dat je typisch niet de enige programmeur bent die met bepaalde code in contact komt.
:::

Bijvoorbeeld:

```csharp
// je gebruikt deze methode in de veronderstelling dat ze je data alleen maar print
// maar, zonder dat je het daarom meteen merkt, wist ze ook data
public static void PrintData(List<string> data) {
    for (int i = 0; i < data.Count; i++) {
        Console.WriteLine(data[i]);
        data[i] = null;
    }
}
```

In het algemeen geldt: als iemand bepaalde mogelijkheden niet echt **nodig** heeft, geef ze dan niet. Dit is opnieuw **encapsulatie**.

Om te verhinderen dat een datastructuur wordt aangepast, kan je er een immutable versie van maken. Dit is een versie van die datastructuur waarvan de inhoud achteraf niet gewijzigd kan worden. Er bestaan immutable versies van de standaard datastructuren en ze heten gewoonweg `ImmutableList<T>` en `ImmutableDictionary<K,V>`.

Om deze versies te gebruiken, moet je de `System.Collections.Immutable` namespace gebruiken. Wanneer je hier een `using` directief voor hebt staan, kan je methodes zoals `ToImmutableList<T>` oproepen op een lijst om er een immutable versie van te produceren. Deze immutable versie kan je dan veilig delen met code waarvan je niet wenst dat ze de inhoud van je lijst aanpast.

Een tweede manier om een immutable datastructuur te maken, is met een **builder**. Dit is een object waar je via `Add` data aan toevoegt en dat je achteraf vraagt een immutable list te produceren. Je kan er een aanmaken met de statische methode `CreateBuilder` van de immutable datastructuur die je wil gebruiken. Bijvoorbeeld:

```csharp
public static void PrintData(ImmutableList<string> data) {
    foreach(var datum in data) {
        Console.WriteLine(datum);
    }
}

public static void DemonstreerImmutableListBuilder() {
    var builder = ImmutableList.CreateBuilder<string>();
    bool doorgaan;
    do {
        Console.WriteLine("Geef een element om toe te voegen");
        builder.Add(Console.ReadLine());
        Console.WriteLine("Doorgaan met elementen toevoegen?");
        doorgaan = Console.ReadLine().ToLower() == "ja";
    } while (doorgaan);
    PrintData(builder.ToImmutableList<string>());
}
```

### het verschil met read-only properties

Beginnende programmeurs denken soms dat ze hetzelfde effect kunnen verkrijgen door een property voor een datastructuur "read only" te maken. Dit doen ze dan door alleen een getter te voorzien en geen setter of, als ze buiten deze cursus gaan zoeken, met het sleutelwoordje `readonly`.

**Dit maakt je datastructuur niet immutable!** Het zorgt er **wel** voor dat je het object op de heap waarin je data staat niet kan vervangen. Het zorgt er **niet** voor dat je de inhoud van dat object niet kan vervangen.

Bijvoorbeeld, als we personen voorzien van een array met lievelingsgerechten:

```csharp
class Persoon {

    private List<string> lievelingsgerechten;
    public List<string> Lievelingsgerechten {
        get {
            return this.lievelingsgerechten;
        }
    }
    
    public Persoon(string gerecht1, string gerecht2, string gerecht3) {
        this.lievelingsgerechten = new List<string>();
        this.lievelingsgerechten.Add(gerecht1);
        this.lievelingsgerechten.Add(gerecht2);
        this.lievelingsgerechten.Add(gerecht3);
    }
}

class Program {
    public static void Main() {
        var persoon = new Persoon("spaghetti","koekjes","ijs");
        // dit gaat WEL:
        persoon.Lievelingsgerechten[1] = "lasagne";
        persoon.Lievelingsgerechten.Add("frieten");
        foreach(var gerecht in persoon.Lievelingsgerechten) {
            Console.WriteLine(gerecht);
        }
        // dit gaat NIET:
        // persoon.Lievelingsgerechten = new List<string>();
    }
}
```

Onderstaande figuur toont een vereenvoudigde weergave van wat er aan de hand is:

![Het is niet mogelijk de pijl van de persoon naar het lijstobject te vervangen. Het is wel mogelijk data in het lijstobject te veranderen.](/img/img-3198.png)