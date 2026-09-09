# Polymorfisme

**Polymorfisme** oftewel "meerdere vormen" is een programmeertechniek waarbij je code met één algemene noemer op meerdere manieren implementeert. Hierdoor kan je algemene code schrijven die verschillende specifieke effecten kan vertonen naargelang de configuratie. Samen met encapsulatie, abstractie en overerving is polymorfisme een vierde belangrijke eigenschap van object georiënteerd programmeren.

:::info
Nog eens samengevat:

* encapsulatie betekent dat je de gebruiker niet laat sleutelen aan de interne werking van data (bv. door access modifiers te gebruiken)
* overerving betekent dat je code uitspaart door code van een andere klasse te "recycleren"
* abstractie betekent dat je data zo algemeen mogelijk behandelt en irrelevante verschillen tussen data verbergt (bv. door variabelen met het type van een ouderklasse te declareren)
* polymorfisme betekent dat je werkt met een algemene voorstelling van data, maar dat de eigenlijke data bij uitvoering van het programma specifieker kan zijn en specifieker kan werken; het is eigenlijk de keerzijde van abstractie
:::

We tonen de werking van polymorfisme aan de hand van een voorbeeld:

### Polymorfisme in de praktijk: Dieren <a href="#polymorfisme-in-de-praktijk-dieren" id="polymorfisme-in-de-praktijk-dieren"></a>

Een voorbeeld maakt veel duidelijk. Stel dat we een een aantal Dier-gerelateerde klassen hebben die allemaal op hun eigen manier een geluid voortbrengen. We hanteren de klasse `Dier`:

```csharp
abstract class Dier {
  public abstract string MaakGeluid();
}
```

Twee child-klassen:

```csharp
class Paard : Dier {
  public override string MaakGeluid() {
    return "Hinnikhinnik";
  }
  // deze methode is alleen voor paarden
  public void Galoppeer() {
    Console.WriteLine("klipklop");
  }
}
class Varken : Dier {
  public override string MaakGeluid() {
    return "Oinkoink";
  }
}
```

Dankzij polymorfisme kunnen we nu elders objecten van Paard en Varken in een `Dier` bewaren, maar toch hun eigen geluid laten reproduceren:

```csharp
Dier eenDier = new Varken();
Dier anderDier = new Paard();
Console.WriteLine(eenDier.MaakGeluid()); //Oinkoink
Console.WriteLine(anderDier.MaakGeluid()); //Hinnikhinnik
```

Het is belangrijk te beseffen dat `eenDier` en `anderDier` van het type `Dier` zijn en dus enkel die dingen kunnen die in `Dier` beschreven staan. Dit is het gevolg van de abstractie van beide soorten dieren tot één algemeen datatype `Dier`. Je kan `eenDier` en `anderDier` wel declareren als `Varken` en `Paard` respectievelijk, maar dat doe je best alleen als je hiermee methodes wil oproepen die enkel in `Varken` of `Paard` aanwezig zijn. Dit gaat bijvoorbeeld niet:

```csharp
// werkt niet omdat anderDier gedeclareerd is als type Dier
anderDier.Galoppeer();
```

De declaratie vertelt de compiler dat hij alleen moet onthouden dat `anderDier` alles kan wat in `Dier` beschreven staat. `Galoppeer` valt daar niet onder. **De waarde is tijdens de uitvoering van type `Paard`, maar de variabele is van type `Dier`. Tijdens de compilatiefase wordt alleen gebruik gemaakt van de informatie die in de types van de variabelen staat.**

Als je die methode toch wil kunnen gebruiken, moet je de declaratie anders schrijven:

```csharp
Paard anderDier = new Paard();
// geen probleem
// zowel de variabele als de waarde zijn van type Paard
anderDier.Galoppeer();
```

### Datastructuren en polymorfisme <a href="#arrays-en-polymorfisme" id="arrays-en-polymorfisme"></a>

Datastructuren zoals arrays, lijsten, dictionaries,... bieden heel veel mogelijkheden in combinatie met abstractie en polymorfisme. Je kan een lijst van de basis-klasse maken en deze vullen met allerlei objecten van de basis-klasse **én de child-klassen**.

Een voorbeeld:

```csharp
List<Dier> zoo = new List<Dier>();
zoo.Add(new Varken());
zoo.Add(new Paard());
foreach(Dier dier in zoo){
  Console.WriteLine(dier.MaakGeluid());
}
```

Deze code is algemener dan wat je zou kunnen doen met twee aparte lijsten. Zo kan je hier paarden en varkens door elkaar voorstellen. Er hangt wel een prijskaartje aan: zonder cast kan je hier geen gebruik maken van `Galoppeer`.