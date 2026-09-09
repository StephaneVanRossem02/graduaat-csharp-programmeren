# value en reference met eigen objecten

## Value types vs reference types

### Twee soorten datatypes

Je gegevens in een C#-programma zijn altijd van een bepaald type: `string`, `int`, `DateTime`, `Student`, wat dan ook. Je moet voortdurend nadenken over welke datatype je aan het gebruiken bent. Dit is niet alleen belangrijk om te weten welke methoden en attributen je mag gebruiken. Je moet het ook weten om te begrijpen wat gebeurt als je een waarde toekent of als je een waarde meegeeft als argument van een methode.

Er zijn namelijk twee mogelijkheden:

* bij **value** types overschrijf je de data zelf wanneer je een toekenning doet en geef je een **kopie** van je data mee aan de methode
  * Deze types kunnen standaard niet de waarde `null` aannemen. Als je een variabele van een van deze types maakt en niet toekent, krijgt hij een defaultwaarde, zoals `0`, `false`,...
* bij **reference** types noteer je een geheugenadres wanneer je een toekenning doet en geef je een geheugenadres mee wanneer je een methode oproept
  * deze types kunnen (standaard) de waarde `null` aannemen, wat betekent dat er geen adres voor de data is. Dit is ook de defaultwaarde voor alle reference types.

Dit heeft belangrijke gevolgen. Als je dit systeem niet begrijpt, ga je gegarandeerd bugs in je code zien. Als voorbeeld zullen we het uitvoeren van een methode vergelijken met "iets noteren op papier" in het echte leven. Afhankelijk van de situatie wil je dan met een kopie of met een adres voor het origineel werken.

* Op een toets krijgt iedereen een blad met de vragen en vult hij/zij persoonlijke antwoorden in. Elke toets is individueel. Het is niet zo dat het antwoord van persoon 1 zichtbaar mag zijn voor persoon 2. We nemen dan ook geen toetsen af in Google docs.
* Wanneer er een geboortekaartje moet ondertekend worden, wordt er op de werkvloer vaak een e-mail uitgestuurd waarin staat in welk lokaal het kaartje ligt. Alle aanpassingen komen samen op hetzelfde kaartje.

We vragen niet aan iedereen om dezelfde toets in te vullen en we voorzien geen geboortekaartje per persoon die ondertekent. Je ziet dus andere resultaten wanneer je een handeling telkens uitvoert met een **kopie** dan wanneer je ze uitvoert met een **verwijzing** naar het origineel.

### Klassen zijn reference types

Onze eigen klassen zijn **reference types**. Dat wil zeggen dat, in de ruimte die voorzien wordt wanneer we een variabele van een bepaalde klasse declareren, er een **verwijzing** wordt bijgehouden. Zo'n verwijzing is een adres voor de bytes die ons object vormen. Dit is in tegenstelling tot **value** types. Daarvoor wordt de waarde zelf bijgehouden op de plaats die voorzien is voor de variabele. De meeste types die je in het begin gezien hebt, zijn value types: `int` (en varianten), `bool`, `float` (en varianten), `enum` types.

### Demonstratie: leeftijd als onderdeel van een klasse en als losse variabele

```csharp
public class Student {
    public int Leeftijd = 18;
}

public class Program {
    public static void VerhoogLeeftijd(int leeftijd) {
        leeftijd += 1;
    }
    public static void VerhoogLeeftijd(Student student) {
        student.Leeftijd += 1;
    }
    public static void Main() {
        int leeftijdAlsInt = 18;
        Student student = new Student();
        student.Leeftijd = 18;
        VerhoogLeeftijd(leeftijdAlsInt);
        VerhoogLeeftijd(student);
        Console.WriteLine(leeftijdAlsInt);
        Console.WriteLine(student.Leeftijd);
    }
}
```

Deze code produceert toont twee verschillende waarden: `18` en `19`.

We verklaren de 18 als volgt:

* `leeftijdAlsInt` is een `int`, dus een value type, waaraan we de waarde 18 geven
* als we `VerhoogLeeftijd` met een `int` als parameter oproepen, maken we dus een kopie van `18` en geven we die kopie mee aan de methode. Het is alsof we de methode een eigen exemplaar van de toets geven. In de body van de methode is "leeftijd" dus een naam om de kopie aan te duiden.
* als we `leeftijd` met 1 verhogen (via `leeftijd += 1` ofwel `leeftijd = leeftijd + 1`) koppelen we de naam "leeftijd" aan een nieuwe waarde. **Dat heeft geen enkel effect op `leeftijdAlsInt`, waarvan we bij oproep van `VerhoogLeeftijd` een kopie hadden genomen.**
* de `Console.WriteLine` toont de originele leeftijd en die is nooit aangepast

We verklaren de 19 als volgt:

* `Student` is een zelf geschreven klasse, dus een reference type
* als we `student.Leeftijd` instellen op 18, gaan we eerst op zoek naar de geheugenlocatie waar de gegevens over student zijn bijgehouden en overschrijven we daar de bytes die de leeftijd voorstellen.
* als we `VerhoogLeeftijd` met `student` als parameter aanroepen, vertellen we de methode waar in het geheugen de informatie over `student` gevonden kan worden. Het is alsof we zeggen: "Het geboortekaartje (de student) ligt in de refter".
* `VerhoogLeeftijd` gaat de leeftijd dus aanpassen bij de bron: de bytes die overschreven worden, zijn dezelfde die we de eerste keer hebben ingevuld.
* de `Console.WriteLine` gaat naar het adres waar de bytes van het `Student` object zich bevinden en haalt daar de leeftijd op: deze zijn in de vorige stap aangepast.

## Demonstratie: wat als klassen value types waren?

Het feit dat klassen reference types zijn, heeft praktische gevolgen. We zullen dit demonstreren door dezelfde functionaliteit te implementeren met een `class` en een `struct`. Je kan `struct` zien als bijna hetzelfde als `class`, in die zin dat je er ook objecten van kan maken, maar `struct`-objecten zijn value types.

:::warning
We gaan je nergens in deze cursus vragen zelf een `struct` te maken. We gebruiken ze alleen omdat ze het verschil tussen value en reference duidelijker kunnen maken.
:::

Vergelijk volgende twee vereenvoudigde varianten op `DateTime`:

```csharp
struct MiniDatumValue
{
    public int Dag;
    public int Maand;
    public int Jaar;
}
    
class MiniDatumReference
{
    public int Dag;
    public int Maand;
    public int Jaar;
}
```

Beide stellen een datum voor en hebben dezelfde attributen. We voorzien ook een methode `WijzigDatums`, met twee parameters: één voor ons value type en één voor ons reference type. Ten slotte voorzien we een demonstratie in `Main`:

```csharp
static void Main(string[] args) {
    MiniDatumValue d1 = new MiniDatumValue();
    d1.Dag = 6;
    d1.Maand = 3;
    d1.Jaar = 2016;
    MiniDatumReference d2 = new MiniDatumReference();
    d2.Dag = 6;
    d2.Maand = 3;
    d2.Jaar = 2016;
    Program.WijzigDatums(d1,d2);
    Console.WriteLine($"value na uitvoering: {d1.Dag}/{d1.Maand}/{d1.Jaar}");
    Console.WriteLine($"reference na uitvoering: {d2.Dag}/{d2.Maand}/{d2.Jaar}");
}

static void WijzigDatums(MiniDatumValue val, MiniDatumReference reference)
{
    val.Maand = 2;
    reference.Maand = 2;
}
```

Als je dit programma uitvoert, merk je dat de waarde van `d1` niet gewijzigd is door de methode en `d2` wel. Dat komt omdat val een kopie bevatte van de waarde van `d1`, terwijl reference naar dezelfde data verwees als `d2`.