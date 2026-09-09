# Oefeningen

## h17-weekdagen-zonder-exception-handling

### Functionele analyse

Je krijgt code die een exception oplevert, maar je kan deze deze oplossen zonder exception handling.

### Technische analyse

Maak eerst een klasse ExceptionHandling met een methode ShowSubmenu zodat je je oefeningen rond exception handling kan demonstreren. Voeg dan volgende methode toe:

```csharp
private static void DemonstrateWeekdayErrorHandlingWithoutException()
{
    string[] arr = new string[5];
    arr[0] = "Vrijdag";
    arr[1] = "Maandag";
    arr[2] = "Dinsdag";
    arr[3] = "Woensdag";
    arr[4] = "Donderdag";

    for (int i = 0; i <= 5; i++)
    {
        Console.WriteLine(arr[i].ToString());
    }
}
```

Verbeter zelf de fout.

### Voorbeeldinteractie (na fix)

```
Vrijdag
Maandag
Dinsdag
Woensdag
Donderdag
```

## h17-weekdagen-met-exception-handling

Start terug vanaf de code van eerder. Noem ze ditmaal `DemonstrateWeekdayErrorHandlingWithException`. Los nu het probleem op, enkel en alleen door exception handling toe te voegen op de juiste plaats. De voorbeeldinteractie blijft identiek dezelfde.

## h17-overflow-zonder-exception-handling

### Functionele analyse

Je krijgt opnieuw code die een exception oplevert, maar je kan deze deze oplossen zonder exception handling.

### Technische analyse

Start vanaf volgende code:

```csharp
private static void DemonstrateOverflowErrorHandlingWithoutException()
{
    int num1, num2;
    byte result;
    num1 = 30;
    num2 = 60;
    result = Convert.ToByte(num1 * num2);
    Console.WriteLine("{0} x {1} = {2}", num1, num2, result);
}
```

Spoor zelf de fout op en pas de code aan zodat ze hetzelfde doet, zonder gebruik te maken van exception handling. Gebruik eventueel de debugger.

### Voorbeeldinteractie

```
30 x 60 = 1800
```

## h17-overflow-met-exception-handling

Start terug vanaf de code van eerder. Los nu het probleem op door te vermelden wat er is misgelopen met behulp van exception handling. Noem je methode nu `DemonstrateOverflowErrorHandlingWithException`.

### Voorbeeldinteractie

```
Het getal is te groot om te converteren naar het gewenste formaat.
```

## h17-juiste-index

### Functionele analyse

Schrijf een programma dat een array maakt met drie willekeurige gehele getallen in en de gebruiker toestaat om een getal naar keuze te tonen, tot hij klaar is.

### Technische analyse

Eerst maak je de array aan. Daarna start je een bepaald soort lus op. Kijk hiervoor in de voorbeeldinteractie welke stappen zich steeds herhalen. Als je programma werkt wanneer de gebruiker zich netjes aan de regels houdt, voeg je exception handling toe om rekening te houden met verkeerde indexwaarden. Op andere soorten exceptions wordt niet voorzien. Noem de methode hiervoor `DemonstrateElementChoice`.

:::warning
Omdat dit een oefening op het basisgebruik is, wijken we hier af van [onze richtlijnen over wanneer je exceptions moet gebruiken](./3-wanneer.md).
:::

### Voorbeeldinteractie

![](/img/img-3178.png)

## h17-juiste-index-extra-voorzichtig

### Functionele analyse

Bij de vorige oefening zijn er nog randsituaties mogelijk. Handel de meest waarschijnlijke op een specifieke manier af en voorzie een algemeen vangnet.

### Technische analyse

Test voorgaande code uit met tekst in plaats van een getal. Test voorgaande code uit met een enorm groot getal. Test voorgaande code uit met een kommagetal. Test voorgaande code uit door meteen op enter te duwen. Test voorgaande code uit met een dollarteken in plaats van een getal. Onthoud de soorten exceptions.

Voorzie vervolgens exception handling om uit te leggen wat er is misgelopen zonder het programma te laten crashen, zoals je in de vorige oefening ook hebt aangegeven dat een bepaalde index niet geldig was.

Voorzie ook code om om het even welk type exception af te handelen.

## h17-leeftijd-kat

### Functionele analyse

Schrijf een klasse `Cat`. Deze klasse encapsuleert onze domeinkennis over katten en zorgt ervoor dat we geen onrealistische katten kunnen voorstellen in een softwaresysteem.

### Technische analyse

Maak de klasse. Deze beschikt over een property `Age`, met een publieke getter, maar geen publieke setter. De leeftijd wordt meegegeven bij constructie en wordt ingesteld, maar als hij hoger is dan 25, moet de code die het `Cat`-object heeft proberen aanmaken een `ArgumentException` afhandelen, met de boodschap: "Deze kat is te oud!".

Pas ook onderstaande code (die je in een methode `DemonstrateCatAge` van `ExceptionHandling` mag plaatsen) aan zodat deze boodschap wordt geprint, maar je programma niet crasht:

```csharp
Cat cat = new Cat(27);
```

### Voorbeeldinteractie

```
Deze kat is te oud!
```

## h17-leeftijd-katten

### Functionele analyse

Schrijf code die op willekeurige wijze een lijst met katten aanmaakt. Dit kan mis lopen. Hoe dan ook moet je code netjes achter zich opkuisen door in alle gevallen deze lijst terug leeg te maken wanneer het werk gedaan is.

:::info
Dit is een nogal vreemd voorbeeld, maar we hebben in deze cursus niet gezien hoe je met databaseconnecties, streams, e.d. werkt en dat zijn het soort zaken die je typisch opkuist in alle mogelijke scenario's.
:::

### Technische analyse

* Maak een methode `DemonstrateCatAgeWithResourceCleanup`
* Maak in deze methode een lijst met katten
* Voeg twintig katten met een willekeurige leeftijd van 0 tot 30 toe aan deze lijst
* Als dit zonder problemen verloopt, toon je: "De volledige lijst met katten is aangemaakt!"
* Als er ergens een probleem optreedt omwille van een ongeldige leeftijd, toon je: "Het is niet gelukt :-("
* In beide gevallen zorg je dat de methode eindigt door te lijst terug leeg te maken met de methode `Clear`
  * Doe dit op zo'n manier dat dit **altijd** gebeurt, ook als er een andere exception dan de `ArgumentException` optreedt en deze exception op een hoger niveau wordt opgevangen

### Voorbeeldinteractie

```
De volledige lijst met katten is aangemaakt!
```

**OF**

```
Het is niet gelukt :-(
```

## h17-filehelper

### Functionele analyse

We willen een *utility* methode schrijven om makkelijk files te lezen.

### Technische analyse

Schrijf een methode `FileHelper`. Deze vraagt eerst om een pad naar een file en probeert deze file te lezen. Als dit lukt, geeft ze heel de inhoud van de file terug als string. Als de file niet bestaat, geeft ze nog altijd een string terug (geen exception!) met de waarde: "File kon niet gevonden worden." In het geval van andere problemen met input/output, geeft ze ook een string terug, met waarde: "File bestaat, maar kon niet gelezen worden. Mogelijk heb je geen toegangsrechten." In nog algemenere problemen geeft ze een string terug met waarde: "Er is iets misgelopen. Neem een screenshot van wat je aan het doen was en contacteer de helpdesk."

```
Welke file wil je lezen?
> C:\Users\vincent\TODO.txt
naar de winkel gaan
met de hond wandelen
backups maken
```

**OF**

```
Welke file wil je lezen?
> C:\Users\vincent\FILEDIENIETBESTAAT.txt
File kon niet gevonden worden
```

**OF**

```
Welke file wil je lezen?
> C:\Windows\beschermdefile.txt
File bestaat, maar kon niet gelezen worden. Mogelijk heb je geen toegangsrechten.
```

## h17-leeftijd-kat-custom

### Functionele analyse

We doen een uitbreiding op h17-leeftijd-kat. We zouden graag makkelijk in detail kunnen uitleggen aan de gebruiker waarom het is misgelopen. We doen dit hier in de eerste plaats door een custom exception type te voorzien.

### Technische analyse

* Maak een kopie van je klasse `Cat`. Noem deze `CatWithCustomException`.
* Maak een klasse `CatAgeException`. Deze erft van `ArgumentException`.
  * Ze heeft drie read-only properties, waarvan je zelf het juiste type zou moeten kunnen bepalen:
    * `ProvidedValue`
    * `LowestPossibleValue`
    * `HighestPossibleValue`
  * Ze heeft een constructor die (enkel) waarden voor deze drie properties als parameters heeft.
  * Wanneer de leeftijd van een `CatWithCustomException` wordt ingesteld, wordt een exception van dit type in plaats van een `ArgumentException` gegooid. Hierbij vul je de argumenten in op basis van de rest van je code.
* Maak ook een variatie op je eerdere demonstratiemethode. Noem deze `DemonstrateCatAgeWithCustomException`.

### Voorbeeldinteractie

Als dit in je code staat:

```csharp
CatWithCustomException cat = new CatWithCustomException(37);
```

```
37 is geen geldige leeftijd. De laagst mogelijke leeftijd is 0 jaar, de hoogst mogelijke leeftijd is 25 jaar.
```

Dit bericht mag niet "hardgecodeerd zijn". Elk getal moet uit de exception gehaald worden.

## H17\_1 SchoolAdmin: geen dubbele cursusnamen

#### Functionele analyse

Wanneer je een nieuwe cursus aanmaakt, wordt deze vanzelf geregistreerd in het systeem. Je moet de code aanpassen zodat er geen twee cursussen met dezelfde naam kunnen geregistreerd worden.

#### Technische analyse

We werken in 2 stappen:

* Maak in je SchoolAdmin project een klasse `DuplicateDataException`. Deze heeft twee properties, `Object1` en `Object2`, beide van type `System.Object`. Ze heeft ook een constructor die een message en de twee waarden als parameter heeft.
* Zorg ervoor dat een poging om een cursus aan te maken afgebroken wordt door middel van een `DuplicateDataException` vooraleer de teller van alle cursussen wordt verhoogd. De boodschap die je meegeeft is: "Nieuwe cursus heeft dezelfde naam als een bestaande cursus." Voor de eerste waarde geef je de nieuwe cursus, voor de tweede geef je de bestaande cursus.\
  Zorg er ook voor dat je programma niet crasht wanneer deze fout zich voordoet bij het uitvoeren van `AddCourse`. Indien de fout zich voordoet, moet de boodschap van de exception getoond worden en het `ID` van de bestaande cursus waarmee de nieuwe cursus zou overlappen. Dit kan je doen door `Object2`te casten.

#### Voorbeeldinteractie:

![](/img/img-3179.png)


## H17\_2 SchoolAdmin: geen lege waarden voor CourseRegistration

#### Functionele analyse

Het is niet logisch een inschrijving te hebben zonder student of zonder vak. 

#### Technische analyse

Zorg ervoor dat een `CourseRegistration` niet kan aangemaakt worden zonder een student en/of een cursus. Zorg in de klasse `CourseRegistration` bij zowel de property  `Student` als de property `Course` voor een private setter om te testen op de `null` waarde. Als er toch een null-waarde wordt ingegeven, werp je een `ArgumentException` met de Message "Student/cursus mag niet ontbreken.". Hierna zal je een kleine wijziging moeten doen aan de constructor. 

Om dit te kunnen testen, breiden we `AddCourseRegistration` uit met een optie 0 om de waarde `null` te kunnen gebruiken voor de student en/of de cursus. Voeg de nodige exception handling toe aan deze methode.

#### Voorbeeldinteractie

![](/img/img-3180.png)


## H17\_3 SchoolAdmin: geen tweede inschrijving voor dezelfde cursus

#### Functionele analyse

Zorg ook dat het niet toegelaten is een student twee keer in te schrijven voor hetzelfde vak. 

#### Technische analyse

Zorg dat een tweede inschrijving van dezelfde student voor dezelfde cursus ook een `ArgumentException` oplevert (met een gepaste foutmelding: zie voorbeeldinteractie). Overloop hiervoor in de constructor de lijst `AllCourseRegistrations`. Let op de plaats waar je dit doet! 

#### Voorbeeldinteractie

![](/img/img-3181.png)


## H17\_4 SchoolAdmin: beperkt aantal inschrijvingen per cursus

#### Functionele analyse

Er mogen niet meer dan 20 lopende inschrijvingen per cursus zijn. 

#### Technische analyse

Maak een `CapacityExceededException` met enkel een constructor met één parameter, namelijk de `Message`.  

Vul de code van de constructor van `CourseRegistration` aan om ervoor te zorgen dat er een `CapacityExceededException` optreedt wanneer je iemand probeert in te schrijven voor een cursus waarvoor al 20 inschrijvingen (zonder toegekend resultaat) bestaan. Geef als parameter mee: "Er zijn al teveel studenten ingeschreven voor ...(titel cursus)".

Pas de code van `AddCourseRegistration` aan zodat de exception wordt opgevangen en de message getoond wordt.

#### Voorbeeldinteractie

Om te testen kan je i.p.v. 20, slechts 1 inschrijving toelaten.

![](/img/img-3182.png)


## h17-gedeeltelijke-afhandeling

### Functionele analyse

We schrijven flexibele formuliercode, die we ook zullen gebruiken om de duidelijkheid van onze formulieren te verbeteren. Een formulier logt ongeldige antwoorden op vragen vooraleer het de fout signaleert aan een hoger niveau.

:::warning
Dit is een uitdagende, maar leerrijke en realistische oefening.
:::

### Technische analyse

We vertrekken vanaf dit klassendiagram:

![Klassendiagram formulieren](/img/img-3183.png)

Je krijgt ook volgende demonstratiecode om in het submenu van je klasse `ExceptionHandling` te plaatsen:

```csharp
private static void DemonstrateForms() {
    var question1 = new FormNumberQuestion("Hoe oud ben je?", 18, 130);
    var question2 = new FormFreeTextQuestion("Hoe ziet jouw ideale dag eruit?");
    var question3 = new FormNumberQuestion("Hoe veel personen heb je ten laste?", 0, 10);
    var question4 = new FormFreeTextQuestion("Wie is je idool?");
    Form form1 = new Form(new List<FormQuestion>{ question1, question2 });
    Form form2 = new Form(new List<FormQuestion>{ question3, question4 });
    try {
        form1.FillIn();
        form1.Show();
    }
    catch (Exception) {
        System.Console.WriteLine("We zullen dit formulier weggooien.");
        form1 = null;
    }
    try {
        form2.FillIn();
        form2.Show();
    }
    catch (Exception) {
        System.Console.WriteLine("We zullen dit formulier weggooien.");
        form2 = null;
    }
}
```

De werking van elke klasse is als volgt:

* FormQuestion:
  * Dit stelt één vraag op één formulier voor, inclusief het antwoord dat eventueel al is gegeven op deze vraag.
  * De tekst is de vraag waarop een antwoord verwacht wordt. Deze mag nooit leeg of null zijn.
  * Het antwoord is het antwoord dat de invuller gegeven heeft op deze vraag, in tekstformaat. Dit moet initieel null zijn maar mag later nooit meer naar null gewijzigd worden.
  * Het presenteren van een vraag en het inlezen van een antwoord hangt af van het vraagtype, omdat elk vraagtype eigen instructies heeft (bv. antwoorden in tekst of met een reeks cijfers,...)
* FormNumberQuestion:
  * Dit stelt een vraag voor waarbij een getal wordt verwacht.
  * De ondergrens is het kleinste getal dat mag worden ingegeven, de bovengrens is het grootste getal dat mag worden ingegeven.
  * Als een vraag van dit type wordt aangemaakt met een ondergrens die groter is dan de bovengrens, krijgen we een `ArgumentException`.
  * Bij het inlezen van een antwoord wordt de ingetypte tekst geconverteerd naar een getal. Als dit getal tussen de ondergrens en bovengrens ligt, wordt het antwoord (het getal, voorgesteld als string) opgeslagen. Anders wordt gesignaleerd dat het antwoord tussen deze twee getallen moet liggen en wordt er opnieuw tekst ingelezen, tot er een antwoord verkregen is (of er een exception optreedt).
  * Tonen van een vraag gaat als volgt:
    * Eerst wordt de vraagtekst geprint.
    * Daaronder wordt toegevoegd: "Dit is een getal tussen ... en ..." (met daar de grenzen ingevuld)
* FormFreeTextQuestion:
  * Alle tekst is geldig als antwoord
  * Tonen van een vraag: de vraagtekst wordt getoond. Daaronder wordt getoond: "Sluit af met ENTER."
* Form:
  * Bij constructie wordt er een lijst met FormQuestion-objecten meegegeven.
  * Deze vragen worden opgeslagen en na aanmaak van het formulier kan de lijst met vragen niet meer gewijzigd worden.
  * Een formulier invullen betekent dat we één voor één elke vraag in het formulier tonen en het antwoord inlezen.
    * Dit kan fout lopen. Als er iets fout loopt (wat dan ook), tonen we een bericht "Onverwachte fout wordt naar schijf weggeschreven." en staan we vervolgens toe dat de fout naar een hoger niveau van de programmacode gaat.
  * Een formulier tonen betekent dat we voor elke vraag in het formulier de tekst van de vraag en het opgeslagen antwoord tonen.

### Voorbeeldinteractie

![](/img/img-3184.png)
