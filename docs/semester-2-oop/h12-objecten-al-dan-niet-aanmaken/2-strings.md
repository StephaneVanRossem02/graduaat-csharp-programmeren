# Spelen met strings

Je kan objecten aanmaken door een omschrijving ervan in tekst om te zetten naar een constructoroproep. We noemen dit proces "deserialisatie". Een object omzetten naar een omschrijving noemen we "serialisatie". Deze omschrijving kan verschillende conventies volgen: XML, JSON, YAML, CSV,...

:::info
We hebben [eerder in de cursus ](../../semester-1-programming-principles/h10-gevorderde-tekstverwerking/input-en-output-van-tekstbestanden.md)geleerd hoe we CSV-bestanden moesten uitlezen. Fris dit zo nodig op, want we gaan nu een stap verder.
:::

### Objecten deserializeren met CSV

CSV wordt vaak gebruikt om objecten tussen programma's te verplaatsen. Een object inlezen vanaf een CSV bestand is een vorm van deserializeren.

```csharp
// Speler voornaam, familienaam, geboortejaar
string[] lijnen = File.ReadAllLines(@"C:\spelers.csv");
Speler[] spelers = new Speler[lijnen.Length];
for (int i = 0; i < lijnen.Length; i++)
{
    string[] kolomwaarden = lijnen[i].Split(',');
    spelers[i] = new Speler(kolomwaarden[0],kolomwaarden[1],Convert.ToInt32(kolomwaarden[2]));
}
```

### CSV wegschrijven

Je kan tekst uit een bestand lezen, maar uiteraard kan je ook naar een bestand wegschrijven. De 2 eenvoudigste manieren zijn:

* `File.WriteAllText`: deze gebruik je als je 1 enkele string wilt wegschrijven
* `File.WriteAllLines`: deze is de omgekeerde van `ReadAllLines()` en zal een array van strings wegschrijven.

Een voorbeeld:

```csharp
string[] stringArray = new string[]
    {
        "cat",
        "dog",
        "arrow"
    };


File.WriteAllLines("file.txt", stringArray);
```

**Opgelet met het schrijven naar bestanden: dit zal onherroepelijk het target bestand overschrijven.** Gebruik `if(File.Exists(pathtofile))` om te controleren of een bestand bestaat of niet. Eventueel kan je dan aan de gebruiker bevestiging vragen of je deze effectief wilt overschrijven.

Wil je CSV-bestand maken dan zal je eerst met `String.Join` of met stringinterpolatie een komma-separated lijst maken, bijvoorbeeld:

```csharp
Speler[] spelers = {
    new Speler("Tim","Dams",1981),
    new Speler("Jos","Stoffels",1970),
    new Speler("Mounir","Hamdaoui",1984)
};

string[] lines = new string[spelers.Length];
for (int i = 0; i < lines.Length; i++)
{
    Speler speler = spelers[i];
    lines[i] = $"{speler.Voornaam},{speler.Familienaam},{speler.Geboortejaar}";
}

System.IO.File.WriteAllLines("spelers.csv", lines);
```