# Losse koppeling

## "Losse koppeling"

In een objectgeoriënteerd programma zijn objecten de onderdelen waaruit je programma bestaat. Eén kenmerk van een goed ontworpen programma is dat deze onderdelen vlot inwisselbaar zijn voor andere onderdelen die dezelfde taak vervullen, maar op een andere manier. Anders gezegd: ze hebben dezelfde **interface** (nu in de "algemene" betekenis), maar een andere **implementatie**. Als dit vlot gaat, spreken we over een "losse koppeling" ("loose coupling") van de onderdelen van het programma. Interfaces (in de "language construct"-betekenis) spelen hier een belangrijke rol in in C#.

### Voorbeeld uit het echte leven: stopcontacten

Je gebruikt elke dag dezelfde het principe van losse koppeling. Je kan je elektrische tandenborstel, de lader van je GSM, de lader van je laptop, je desktop,... allemaal aansluiten op elk stopcontact in je huis. Dat komt omdat ze allemaal afgestemd zijn op West-Europese stopcontacten.

Dit is niet vanzelfsprekend: een laptop trekt bijvoorbeeld veel meer stroom dan een elektrische tandenborstel. Daarom wordt je laptop geleverd met een transformator ("stroomblok"). In principe zouden we gebouwen kunnen maken met aparte stopcontacten voor laptops zonder stroomblok, voor elektrische tandenborstels, enzovoort. Dan hadden we geen stroomblokken meer nodig, **maar dan kon je elk toestel maar op sommige stopcontacten aansluiten**. De toestellen zouden iets makkelijker te maken zijn, maar ze zouden niet meer inwisselbaar zijn, omdat ze allemaal een andere aansluiting zouden hebben.

Door een stroomblok toe te voegen, zorgen we dat elk toestel dezelfde "interface" heeft, zelfs wanneer de implementatie verschillend is.

### Voorbeeld in code: IEnumerable\<T>

Als je een klasse schrijft waaraan je een reeks elementen, bijvoorbeeld van de klasse `Student`, wil linken, dan heb je een heleboel keuzes. Enkele opties zijn:

* `List<Student>`
* `ImmutableList<Student>`
* `HashSet<Student>`
* `LinkedList<Student>` (deze ken je waarschijnlijk nog niet)

Elke optie heeft haar voor- en nadelen. `List` is vrij algemeen bruikbaar. `ImmutableList` kan veiligere code opleveren. `HashSet` zorgt er automatisch voor dat je geen dubbels in je verzameling plaatst. `LinkedList` kan snellere code opleveren als je vooral elementen vooraan of achteraan in de lijst toevoegt.

Je kan twee dingen doen:

* op voorhand één lijsttype kiezen en je programma overal afstemmen op dat lijsttype
* een zo eenvoudig mogelijke interface bepalen die je in je programma nodig hebt en daar mee werken

De eerste optie is zoals stopcontacten voor elk type apparaat ontwerpen. De tweede is zoals vastleggen hoe het stopcontact er uitziet en dan compatibele apparaten kiezen. In code:

#### Optie 1

:::warning
Dit gaat over studenten en klasgroepen enz. maar hoort niet bij SchoolAdmin!
:::

```csharp
public class KlasGroep {
  private List<Student> studenten = new List<Student>();
  public List<Student> Studenten {
    get {
      return this.studenten;
    }
  }
  // nog methoden
}
```

Code die objecten van `KlasGroep` aanmaakt, bijvoorbeeld `School`, zal nu misschien veronderstellen dat `Studenten` altijd een `List<Student>` is. Ze zal misschien zelf variabelen declareren van type `List<Student>`. Dit maakt dat de code niet los gekoppeld is, maar sterk gekoppeld. Als je iets aanpast in `KlasGroep`, moet je ook aanpassingen doen in `School`.

### Optie 2

```csharp
public class KlasGroep {
  private IEnumerable<Student> studenten = new List<Student>();
  public IEnumerable<Student> Studenten {
    get {
      return this.studenten;
    }
  }
  // nog methoden
}
```

De `IEnumerable` interface geeft aan dat iets een opsomming van elementen is. `List` is een soort opsomming, maar `ImmutableList` is dat ook, `HashSet` is dat ook en `LinkedList` ook. Nu is `KlasGroep` zo algemeen mogelijk. Er worden studenten bijgehouden en deze kunnen worden opgesomd. Code van `School` zal niet meer veronderstellen dat ze gebruik mag maken van methodes van `List`. Dat zal misschien wat meer code vragen, maar het voordeel is dat we nu de implementatie van KlasGroep kunnen veranderen zonder effect op `School`. Bijvoorbeeld:

```csharp
public class KlasGroep {
  // andere implementatie, zelfde interface
  private IEnumerable<Student> studenten = new LinkedList<Student>();
  public IEnumerable<Student> Studenten {
    get {
      return this.studenten;
    }
  }
  // nog methoden
}
```

Om deze reden zal je soms gevraagd worden ergens een interface te gebruiken, terwijl een gewone klasse op het eerste zicht net zo goed zou volstaan. Sommige softwareprojecten gaan hier heel ver in en gebruiken voor zowat alle velden interfaces in plaats van klassen. Dat maakt het bijvoorbeeld heel makkelijk productiecode om te wisselen voor testcode.