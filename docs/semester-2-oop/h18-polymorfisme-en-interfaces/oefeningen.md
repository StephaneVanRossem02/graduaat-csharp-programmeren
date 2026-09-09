# Oefeningen

:::info
Onderstaande oefeningen maak je oproepbaar via een klasse `Polymorfisme` met een methode `ToonSubmenu`.
:::

## h18-autoconstructeur

### Functionele analyse

Omdat we aan de vooravond staan van de transitie van klassieke aandrijvingen naar meer milieubewuste aandrijvingen van auto’s heeft een autoconstructeur beslist om zijn assemblage software te herwerken.

In de huidige software wordt gebruik gemaakt van een superklasse motor met twee subklassen bezinemotor en dieselmotor. Dit wordt nu uitgebreid.

Er zijn verschillende nieuwe motoren op de markt: elektrische, CNG, waterstof,..

Niet alleen de motor is verschillend maar ook de periferie (omgeving) van de motor is erg verschillend. Denk bv. aan de brandstofvoorziening (voor benzine, diesel, elektrisch).

### Technische analyse

Maak een interface IAandrijving die de volgende methoden en properties ondersteunt:

`void EnergieToevoegen(); // Het vroegere tanken`

`void Vertragen(int kmPerUurPerSeconde, int doelsnelheid);`

`void Versnellen(int kmPerUurPerSeconde, int doelsnelheid);`

Maak een klasse voor de volgende types aandrijvingen die de interface IAandrijving implementeren

`AandrijvingElekrisch`

`AandrijvingBezine`

`AandrijvingCNG`

De implementatie van de methodes is steeds

`Console.Writeline(“<Naam van de methode> - <Type aandrijving>”);`

Bijvoorbeeld:

`Console.Writeline(“Versnellen - Benzine”);`

Maak een klasse `Auto` met public property (van het type `string`) `AutoType` en een public property `Aandrijving`. Zorg er voor dat elk type van aandrijving kan toegevoegd worden aan een object van type `Auto`.

Instantieer een auto met benzine aandrijving. Doe dat door de aandrijving als parameter in de constructor mee te geven. De constructor van de auto heeft als signatuur dus `public Auto (string autoType, ? aandrijving)`. Het `?` moet je zelf invullen. Laat de auto versnellen. Bouw die auto nu om naar een elektrische aandrijving. Laat de auto opnieuw versnellen. Doe dit allemaal in een methode `DemonstreerAandrijving`.

### Voorbeeldinteractie

![](/img/img-3221.png)

## h18-grootkeuken

### Functionele analyse

Je wordt gevraagd om een grootkeuken van een studentenrestaurant te automatiseren.

In de keuken staan een zestal ketels die bepaalde functies wel of niet hebben. De functies zijn:

* `Verwarmen(int doelTemperatuur)`
* `Afkoelen(int doelTemperatuur)`
* `StoomVerwarmen(int doelTemperatuur)`
* `WaterDoseren(int hoeveelheid)`

Er bestaan 4 types van ketels

1. `Ketel` (dit is een abstracte klasse zonder enige functionaliteit)
2. Stoomketel (met functionaliteit `StoomVerwarmen`, `Afkoelen`, `WaterDoseren`) klasse `StoomKetel`
3. Gewone ketel zonder doseren (met functionaliteit `Verwarmen`) klasse `KetelZonderDoseren`
4. Gewone ketel met dosering (met functionaliteit `Verwarmen`, `WaterDoseren`) klasse `KetelMetDoseren`

### Technische analyse

Creëer 4 interfaces voor de verschillende functies: `IVerwarmen`, `IAfkoelen`, `IStoomVerwarmen`, `IWaterDoseren`). In de interface vinden we steeds de functie als methode terug (met return type `void`).

Creëer de 3 types van ketels. Gebruik overerving om gemeenschappelijke properties (inhoud type `int` en temperatuur type `int`) te implementeren. De constructors van de drie types ketels krijgen de inhoud als parameter mee. De temperatuur blijft op de defaultwaarde staan.

Demonstreer je code door 6 ketels te instantiëren. Zet de code hiervoor in `DemonstreerGrootkeuken`:

Ketel 1 : Stoomketel met capaciteit 300l

Ketel 2 : Stoomketel met capaciteit 300l

Ketel 3 : Ketel zonder doseren met capaciteit 150l

Ketel 4 : Ketel zonder doseren met capaciteit 300l

Ketel 5 : Ketel met doseren met capaciteit 200l

Ketel 6 : Ketel met doseren met capaciteit 150l

Verwarm ketel 1 tot 100 graden Celcius… zie interactie:

### Voorbeeldinteractie

![](/img/img-3222.png)

## h18-Rooster-stap1

### Functionele analyse

We schrijven een kalender. Hierop kunnen we verschillende zaken plaatsen: afspraken en taken. Beide werken anders, maar beide nemen wel een zekere hoeveelheid tijd in beslag.

### Technische analyse

* Schrijf twee klassen, `Afspraak` en `Taak`
* Voor een afspraak moet je volgende zaken bijhouden:
  * de tijd om je naar de afspraak te verplaatsen (een `TimeSpan`)
  * de tijd om terug te komen (een `TimeSpan`)
  * de duur van de afspraak (een `TimeSpan`)
  * een omschrijving (een `string`)
* Voor een taak moet je volgende zaken bijhouden:
  * de werktijd die je nodig zal hebben (een `TimeSpan`)
  * een omschrijving (een `string`)

Beide hebben constructoren die de hierboven genoemde parameters in volgorde bevatten.

Zowel afspraken als taken zijn roosterbaar op een kalender. Dit maak je mogelijk door hen allebei te voorzien van de `IRoosterbaar` interface. Deze omvat:

* een read-only property `Tijdsduur` die een `TimeSpan` teruggeeft
  * voor een afspraak is dit de som van de verplaatsingstijd en de duur van de afspraak
  * voor een taak is dit gewoon de duur van de taak
* een read-only property `Omschrijving` die een `string` teruggeeft
  * voor een taak kan je gewoon de bestaande property gebruiken
  * voor een afspraak geef je de bestaande omschrijving, gevolgd door de tekst `(inclusief verplaatsing)`

Test uit met volgende code, die je `DemonstreerIRoosterbaar` noemt (in de klasse voor dit labo).

```csharp
IRoosterbaar blok1 = new Afspraak(new TimeSpan(0,20,0),new TimeSpan(1,0,0),new TimeSpan(0,20,0), "tandarts");
IRoosterbaar blok2 = new Taak(new TimeSpan(2,0,0),"dagelijkse oefeningen OOP");
System.Console.WriteLine($"Totale kalendertijd: {(blok1.Tijdsduur + blok2.Tijdsduur).Hours}u{(blok1.Tijdsduur + blok2.Tijdsduur).Minutes}m");
```

### Voorbeeldinteractie

```
Totale kalendertijd: 3u40m
```

## h18-Rooster-stap2

### Functionele analyse

We willen onze taken en afspraken nu echt kunnen inplannen op een interactieve kalender.

### Technische analyse

* Schrijf een klasse `Kalender`. Een kalender heeft een naam en koppelt tijdstippen aan roosterbare gebeurtenissen. Enkel de naam wordt meegegeven bij constructie. Voor de koppeling gebruik je een `Dictionary<DateTime,IRoosterbaar>`.
* Een `Kalender` heeft een methode `VoegToe`. Deze vraagt eerst om wat voor gebeurtenis het gaat (`Taak` of `Afspraak`) en vraagt dan om alle properties van dit type object. Daarna vraagt ze: "Wanneer moet dit geroosterd worden"? Ten slotte wordt het roosterbare object geassocieerd met dit tijdstip. **Let op:** voor een afspraak vraag je wanneer **de afspraak zelf** geroosterd moet worden, maar rooster je vanaf het moment dat je moet vertrekken naar de afspraak.

### Voorbeelduitvoering

Schrijf zelf een methode `DemonstreerKalender1`. Deze vraagt maakt een kalender met naam "DemonstratieKalender" en vraagt de gebruiker objecten toe te voegen tot hij niet meer wil doorgaan. Daarna wordt de inhoud van de kalender getoond.

![](/img/img-3223.png)

## h18-Rooster-stap3

### Functionele analyse

Onze code is te sterk gekoppeld. Om Kalender te schrijven, hebben we code moeten schrijven om beide soorten objecten in te lezen. Als we nog meer tijdsblokken willen inbouwen (bijvoorbeeld `QualityTime`), moeten we `Kalender` verder uitbreiden.

### Technische analyse

Voorzie `Taak` en `Afspraak` van een constructor zonder parameters. Voorzie de interface IRoosterbaar van een methode `Initialiseer` en van een methode `RoosterOm(DateTime referentiepunt)`. De methode `Initialiseer` vraagt alle gegevens voor een object van dat type en stelt ze in. De methode `RoosterOm` bepaalt uit het referentiepunt wanneer de kalender moet worden ingeblokt.

:::info
We werken met een constructor zonder parameters, gevolgd door initialisatie, omdat we geen statische methoden kunnen toevoegen aan een interface. Er zijn elegantere oplossingen, maar we willen niet te ver afwijken van de koers.
:::

### Voorbeeldinteractie

Deze ziet eruit zoals hierboven, maar de demonstratiecode is nu:

```csharp
public void VoegToeLosgekoppeld() {
    System.Console.WriteLine("Om wat voor object gaat het?");
    System.Console.WriteLine("1. Afspraak");
    System.Console.WriteLine("2. Taak");
    IRoosterbaar item;
    DateTime begin;
    int antwoord = Convert.ToInt32(Console.ReadLine());
    if (antwoord == 1) {
        item = new Afspraak();
    }
    else {
        item = new Taak();
    }
    item.Initialiseer();
    System.Console.WriteLine("Wanneer moet dit geroosterd worden?");
    begin = Convert.ToDateTime(Console.ReadLine(), new CultureInfo("nl-BE"));
    this.Rooster[item.RoosterOm(begin)] = item;
}
```

Merk op dat je maar een heel kleine aanpassing zou moeten doen om `Kalender` uit te breiden met bijvoorbeeld `QualityTime`. Die klasse zou door iemand anders geschreven mogen worden.

## H18\_1 SchoolAdmin: sorteren volgens criteria

#### Functionele analyse

We willen graag de data in ons systeem gesorteerd weergeven. We willen de gebruiker de keuze geven om te sorteren op verschillende manieren. Dit ben je ongetwijfeld gewoon van op webwinkels waar je kan sorteren volgens prijs, productnaam,...

#### Technische analyse

* Om dit klaar te spelen, heb je een klasse nodig die de `IComparer<T>` interface implementeert. Deze interface bestaat al. Je hoeft hem niet te schrijven. Je moet hem alleen implementeren.
* Om studenten oplopend op naam te sorteren, schrijf je een `StudentsAscendingByName`die `IComparer<Student>` implementeert.
* Deze interface bevat één methode `Compare(T,T)`. Deze vergelijkt twee objecten van één type. 
  * Als het eerste argument voor het tweede gesorteerd moet worden, geeft de methode een negatief getal terug.
  * Als het eerste argument na het tweede gesorteerd moet worden, geeft de methode een positief getal terug.
  * Als het niet uitmaakt, geeft ze 0 terug.
  * Om 2 namen van studenten te vergelijken kan je de `CompareTo`-methode gebruiken.
  * `null` zou niet mogen voorkomen, maar je kan die vooraan in om het even welke lijst objecten zetten
* Maak op dezelfde manier `StudentsDescendingByName`, `CoursesSortByTitle` en `CoursesSortByCreditPoints`.
* Door een instantie van een `IComparer` als argument mee te geven aan `Sort`, kan je sorteren op basis van de implementatie van `Compare`.
* Voeg nu volgende functionaliteit toe aan de `Program`-klasse:
  * Een methode`ShowStudents`die je kan oproepen vanaf het keuzemenu. Bij het tonen van de studenten, moet de gebruiker kunnen kiezen om ze te tonen in stijgende of dalende alfabetische volgorde.
  * Een `ShowCourses` die je kan oproepen vanaf het keuzemenu
    * Bij het tonen van cursussen, moet de gebruiker kunnen kiezen om ze te tonen volgens cursusnaam van A naar Z of oplopend volgens aantal studiepunten.
    * Voorzie een `ToString` die de titel van de cursus toont, gevolgd door het aantal studiepunten tussen haakjes om te controleren of alles werkt

#### Voorbeeldinteractie

![](/img/img-3224.png)


## H18\_2 SchoolAdmin: data export naar CSV

#### Functionele analyse

We zouden graag alle entiteiten in ons systeem in één beweging kunnen exporteren naar CSV-formaat. Zo kunnen we makkelijk heel ons systeem voorzien van een backup zonder al te veel code. 

#### Technische analyse

Schrijf een interface `ICSVSerializable`. Deze bevat één objectmethode zonder parameters, namelijk `ToCSV`. Het return type is `string`.

Werk verder volgens volgende stappen:

1. Implementeer deze interface eerst in `Course`.\
   Voor elk `Course`-object toon je eerst "Cursus" gevolgd door de titel en het aantal studiepunten. Telkens met puntkomma tussen.
2. Voeg vervolgens in het hoofdmenu een optie toe: "13. Data exporteren". \
   Maak hiervoor een methode `Export` waarin je een lijst `allData` van het type `ICSVSerializable` maakt. Voeg hier alle instanties van `Course` aan toe en voer de methode `ToCSV()` uit.

#### Voorbeeldinteractie

Na het uitvoeren van "Demonstreer cursussen" en "Data exporteren":

![](/img/img-3225.png)


3. Implementeer `ICSVSerializable` in `Person`. Maak `ToCSV() virtual` en geef voor elk `Person`-object:`Id`, `Name` en `BirthDate` (korte datumformaat). Telkens met puntkomma tussen.
4. Overschrijf `ToCSV()` in `Employee`: deze geeft eerst de info uit de `base` en vervolgens voor elke taak de naam van de taak en het aantal uren.
5. Overschrijf vervolgens`ToCSV()` in:
   1. `Lecturer`: toon eerst "Lector", dan de info uit de `base` en vervolgens van elke cursus die de lector geeft de titel en het aantal uren
   2. `AdministrativePersonnel`: toon "Administratief personeel" en de info uit de `base`
   3. `Student`: toon "Student", de info uit de `base` en van elk item uit `StudentFile` de datum en de tekst.
6. Vul de methode `Export` aan door in `allData` alle personen toe te voegen.

#### Voorbeeldinteractie

![](/img/img-3226.png)


7. Zorg ervoor dat na het tonen van de csv-gegevens, deze gegevens ook weggeschreven worden in een bestand `SchoolAdminData.csv`. 