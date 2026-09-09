# Input en output van tekstbestanden

### Text files lezen algemeen

De `System.IO` namespace bevat tal van nuttige methoden en klassen om met bestanden te werken. Om gebruik hiervan te maken plaats je bovenaan je file:

```csharp
using System.IO;
```

Via `System.File.ReadAllLines()` kunnen we een tekstbestand uitlezen. De methode geeft een array van string terug. Per lijn die eindigt met een newline (onder Windows ) zal een nieuwe string aan de array toegevoegd worden.

```csharp
// wat dus ook kan: File.ReadAllLines("C:\\mypoem.txt")
string[] lines = File.ReadAllLines(@"C:\mypoem.txt");
for (int i = 0; i < lines.Length; i++)
{
    Console.WriteLine(lines[i]);
    Console.WriteLine("----------");
}
```

:::warning
Deze methode probeert automatisch de juiste encodering van het bestand te detecteren. Dit zal niet voor elke encodering werken. Als je vreemde karakters ziet, zal je moeten uitzoeken wat de encodering is en uitdrukkelijk aangeven dat je deze wenst te gebruiken.
:::

#### CSV uitlezen

Dankzij `ReadAllLines` en `Split` hebben we nu alle bouwstenen om eenvoudig een csv-bestand te verwerken.

Stel je voor dat een bestand `soccer.csv` volgende tekst bevat:

```csharp
Dams;Tim;1981
Hamdaoui;Mounir;1984
Stoffels;José;1950
```

Volgende code zal dit bestand uitlezen en de individuele data op het scherm tonen:

```csharp
string[] lijnen = File.ReadAllLines(@"C:\soccerstars.csv");
for (int i = 0; i < lijnen.Length; i++)
{
    string[] kolomwaarden = lijnen[i].Split(';');
    Console.WriteLine($"Voornaam speler {i}= {kolomwaarden[1]}" );
    Console.WriteLine($"Achternaam speler {i}= {kolomwaarden[0]}");
    Console.WriteLine($"Geboortejaar speler {i}= {kolomwaarden[2]}");
}
```

### Text files schrijven

Je kan tekst uit een bestand lezen, maar uiteraard kan je ook naar een bestand wegschrijven. De 2 eenvoudigste manieren zijn:

* `File.WriteAllText`: deze gebruik je als je 1 enkele string wilt wegschrijven. Typisch bevat deze tekst newline karakters.
* `File.WriteAllLines`: deze is de omgekeerde van `ReadAllLines()` en zal een array van strings wegschrijven. Elke string in de array wordt geschreven als een regel, dus het is alsof je de strings eerst verbindt met een newline via `String.Join` en dan wegschrijft met `File.WriteAllText`.

Een voorbeeld:

```csharp
string[] stringArray = new string[]
    {
        "cat",
        "dog",
        "arrow"
    };


File.WriteAllLines("C:\\file.txt", stringArray);
```

**Opgelet met het schrijven naar bestanden: dit zal onherroepelijk het target bestand overschrijven.** .Gebruik `if(File.Exists(pathtofile))` om te controleren of een bestand bestaat of niet. Eventueel kan je dan aan de gebruiker bevestiging vragen of je deze effectief wilt overschrijven.