# Oefeningen

## Aparte oefeningen overerving

Deze oefeningen maak je allebei in een klasse genaamd `Inheritance`, met haar eigen `ShowSubmenu` methode.

### H15-PostOffice

#### Functionele analyse

We werken een systeem uit voor de post, waarin (aangetekende) brieven geregistreerd worden. Dit zal ons toestaan elke brief op te zoeken in het systeem en interessante informatie over de brief op te vragen.

#### Technische analyse

* Maak een klasse `RegisteredLetter`, met een property `Distance`van type `double`, die steeds groter dan 0 moet zijn en de afstand in kilometer uitdrukt die de brief zal moeten afleggen.
* Voeg een computed property `Duration`(van type byte) en een property `Price`(van type double) toe.
  * De reistijd (`Duration`) is de reisafstand (`Distance`) gedeeld door 100, afgerond naar boven, uitgedrukt in dagen.
  * De kostprijs (`Price`) is 15 euro voor brieven die minder dan 100km moeten afleggen. Daarna komt er 10 euro bij per 100km.
* Voorzie voorlopig geen constructor.
* Maak een subklasse `InternationalRegisteredLetter`. Voor deze is de reistijd de reisafstand gedeeld door 50, afgerond naar boven. De kostprijs is 20 euro per 100km; met een minimum van 20 euro. Voorzie voorlopig geen constructor.
* Maak een subklasse `HighPriorityRegisteredLetter`. Voor deze is de reistijd de reisafstand gedeeld door 200, afgerond naar boven. De kostprijs is 30 euro per 100km; met een minimum van 30 euro. Voorzie voorlopig geen constructor.
* Schrijf een methode `DemoPostOffice`. In deze methode vraag je de gebruiker, tot hij wenst te stoppen, om brieven in te geven voor verzending. Deze worden toegevoegd aan een lijst van brieven. Wanneer hij klaar is met brieven in te geven, toon je per brief alle eigenschappen.

#### Voorbeeldinteractie

```
Wil je nog een brief toevoegen? (ja/nee)
> ja
Wat voor brief wil je toevoegen?
1. standaard
2. internationaal
3. hoge prioriteit
4. geen enkele, we zijn klaar met invoeren
> 1
Hoe ver moet deze brief gaan?
> 150
Wat voor brief wil je toevoegen?
1. standaard
2. internationaal
3. hoge prioriteit
4. geen enkele, we zijn klaar met invoeren
> 2
Hoe ver moet deze brief gaan?
> 1000
Wat voor brief wil je toevoegen?
1. standaard
2. internationaal
3. hoge prioriteit
4. geen enkele, we zijn klaar met invoeren
> 3
Hoe ver moet deze brief gaan?
> 800
Wat voor brief wil je toevoegen?
1. standaard
2. internationaal
3. hoge prioriteit
4. geen enkele, we zijn klaar met invoeren
> 4
Brief 1: 150km, reistijd 2 dagen, kostprijs 25 euro
Brief 2: 1000km, reistijd 20 dagen, kostprijs 200 euro
Brief 3: 800km, reistijd 4 dagen, kostprijs 240 euro
```

### H15-Veterinarian

#### Functionele analyse

Een dierenarts moet zijn "patiënten" opvolgen met een geautomatiseerd systeem. Bepaalde aspecten zijn van toepassing voor alle soorten dieren, maar bepaalde zaken zijn afhankelijk van de diersoort.

#### Technische analyse

* Schrijf een abstracte klasse `Animal`, met een property `Name` (van type `string`), `Gender`(van een enum type, genaamd `Genders`, met waarden `Male`en `Female`), een abstracte property (van type `ImmutableList<string>`) `Allergies` en een abstracte methode `ShowChip`(van type `void`)
* Schrijf concrete subklassen `Dog`en`Parrot`
  * Voor de implementatie van de allergieën van een hond voorzie je eerst een tweede property, `IndividualAllergies`. Deze mag een gewone `List<string>` zijn, met default getter en setter. Voor de implementatie van `Allergies` geef je dan de samenvoeging van de individuele allergieën met "druiven", "noten", "chocolade" en "avocado". Voor `ShowChip`toon je de waarde van een property `Chip` die je op Hond voorziet (met type `string`).
  * Voor papegaaien geef je een lege lijst van allergieën. Voor de chip toon je het bericht "Papegaaien worden niet gechipt."

#### Voorbeeldinteractie

Voeg volgende methode `DemoVet` toe aan je klasse en maak oproepbaar uit het keuzemenu. Test dat alle resultaten kloppen.

```csharp
public static void DemoVet()
{
   var patients = new List<Animal>();
   var animal1 = new Dog();
   animal1.IndividualAllergies = new List<string> { "vis" };
   animal1.Chip = "ABC123";
   animal1.Gender = Genders.Female;
   animal1.Name = "Misty";
   patients.Add(animal1);
   var animal2 = new Parrot();
   animal2.Gender = Genders.Male;
   animal2.Name = "Coco";
   patients.Add(animal2);
   foreach (var animal in patients)
   {
        Console.WriteLine(animal.Name);
        Console.WriteLine(animal.Gender);
        Console.WriteLine("allergieën:");
        foreach (var allergie in animal.Allergies)
        {
            Console.WriteLine(allergie);
        }
        animal.ShowChip();
   }
}
```

## H15\_1 SchoolAdmin: Persoon

#### Functionele analyse

Om naast studenten ook andere personen, zoals lectoren en administratief personeel te kunnen beheren in SchoolAdmin, maken we enkele nieuwe klassen aan. De eerste klasse die we maken is `Person`.

![](/img/img-3212.png)


#### Technische analyse

De abstracte klasse `Person` definieert wat voor alle personen in het systeem hetzelfde is: een id, een naam, een geboortedatum en de leeftijd. Voorzie hiervoor dus private attributen met publieke properties. Voorzie voor de properties `Id` en `BirthDate`enkel getters, zodat ze read only zijn. Het `Id` wordt automatisch ingesteld bij constructie. Hiervoor wordt een teller `maxId` bijgehouden.

Verder zegt deze klasse ook dat elke klasse die er van erft, ten minste de methoden `GenerateNameCard` en `DetermineWorkload` moet bevatten. Hoe dat naamkaartje er moet uitzien, legt `Person` niet vast.

Elke nieuwe persoon die gemaakt wordt, wordt bewaard in een lijst met alle personen. Deze lijst mag door andere klassen niet gewijzigd worden: het beheer van de lijst ligt bij `Person`. Deze lijst kan wel opgevraagd worden via een statische property `AllPersons`die een immutable list produceert.

#### Klassediagram

![](/img/img-3213.png)


## H15\_2 SchoolAdmin: Student erft over van Persoon

#### Functionele analyse

Een student is een soort Persoon.

#### Technische analyse

De klasse Student wordt een kind van `Person`. Zorg er dus voor dat deze klasse de verplichte zaken uit `Person` implementeert, maar dat duplicate functionaliteit (bv. `StudentNumber`, `Name`, `BirthDate`, `Age`, `StudentCounter`) vanaf nu aan `Person` worden overgelaten: haal deze dus weg uit Student. Let op de kleine wijzigingen van type!

Voeg op Student ook een attribuut `StudentFile` toe.  Dit dossier is een collectie waarin opmerkingen genoteerd kunnen worden. De opmerkingen worden geïndexeerd met de datum en het tijdstip waarop ze worden ingegeven. Zorg er voor dat dit dossier niet aangepast kan worden buiten de Student klasse door de getter een immutable dictionary te laten teruggeven.

#### Klassediagram

![](/img/img-3214.png)


Test nu de eerdere methodes `DemoStudents`en `ReadTextFormatStudent` opnieuw uit. Alles zou nog moeten werken.

## H15\_3 SchoolAdmin: Personeel erft over van Persoon

#### Functionele analyse

Ook een personeelslid is een soort persoon.

#### Technische analyse

`Employee` is een abstracte klasse die erft van `Person`. In deze klasse wordt een (immutable) lijst bijgehouden van alle personeelsleden die worden aangemaakt. Ze voorziet ook een anciënniteitsteller (`Seniority`): hierin wordt bijgehouden hoeveel jaar het personeelslid al in dienst is. De anciënniteit kan nooit hoger gaan dan 50. Hogere waarden worden verlaagd tot 50.

De klasse eist van al haar kindklassen dat zij een methode `CalculateSalary`bevatten. Hoe het salaris berekend moet worden, wordt overgelaten aan de kindklassen.

De klasse `Employee` voorziet ook een lijst van taken (`Tasks`) die het personeelslid moet uitvoeren. De taken worden opgeslagen als een naam van een taak, met daarbij het aantal uur per week dat het personeelslid aan die taak zal werken. Deze taken kunnen bij constructie worden meegegeven, maar het oorspronkelijke dictionary mag de taken niet meer kunnen aanpassen. Je moet dus de keys en values kopiëren naar het nieuwe dictionary.

#### klassediagram

![](/img/img-3215.png)


## H15\_4 SchoolAdmin: Administratief Personeel

#### Functionele analyse

Administratief personeel is een soort personeel.

#### Technische analyse

Deze klasse, `AdministrativePersonnel` is een kind van `Employee`en moet daarom aan alle voorwaarden van `Employee`én `Person` voldoen: er zullen dus enkele methoden verplicht moeten worden geïmplementeerd in deze klasse. Er wordt ook een (immutable) lijst bijgehouden van alle administratieve personeelsleden die worden aangemaakt.

Het salaris van een administratief personeelslid wordt als volgt berekend: *per 3 jaar, krijgt het personeelslid 75 euro extra bovenop een basisloon van 2000 euro. Dit basisloon wordt vervolgens verrekend met de tewerkstellingsbreuk. De tewerkstellingsbreuk is de werkbelasting van het personeelslid gedeeld door 40 uur (voltijdse tewerkstelling).*

Bijvoorbeeld: Ahmed is 4 jaar in dienst. Hij krijgt dus 2000 EUR basisloon, plus 1 keer 75 EUR anciënniteitstoeslag. Hij werkt echter 30 uur per week in plaats van 40, dus krijgt hij 1556,25 EUR. Cijfers na de komma vallen weg omwille van het datatype.

De werkbelasting van een administratief personeelslid wordt bepaald aan de hand van de taken in zijn of haar takenlijst. De duur van alle taken wordt hiertoe opgeteld.

Het naamkaartje van een administratief personeelslid bevat de naam van het personeelslid, met daarachter de vermelding `(ADMINISTRATIE)`. Bv.

```
Ahmed Azzaoui (ADMINISTRATIE)
```

Schrijf nu in `Program.cs` een methode `DemoAdministrativePersonnel`. Maak hierin een variabele `ahmed` die behoort tot het administratief personeel. Zijn taken bestaan uit 10u roostering, 10u correspondentie en 10u animatie. Hij is geboren 4 februari 1988.

Doorloop vervolgens met een `foreach` de lijst met alle administratief personeel en toon alle naamkaartjes.  Toon dan ook het salaris en de werkbelasting van Ahmed.

#### klassediagram

![](/img/img-3216.png)


#### Voorbeeldinteractie

![](/img/img-3217.png)


## H15\_5 SchoolAdmin: Lector

#### Functionele analyse

Een lector maakt ook deel uit van het personeel.

#### Technische analyse

De klasse `Lecturer` is een kind van `Employee`en moet daarom aan alle voorwaarden van `Employee`én `Person` voldoen: er zullen dus enkele methoden verplicht moeten worden geïmplementeerd in deze klasse. Er wordt ook een lijst bijgehouden van alle lectoren die worden aangemaakt. 

Een `Lecturer` object bevat dan weer een opsomming van alle `Courses` die deze lector geeft, met voor elke cursus de werkbelasting van deze cursus voor de lector.

Het salaris van een lector wordt als volgt berekend: *per 4 jaar, krijgt het personeelslid 120 euro extra bovenop een basisloon van 2200 euro. Dit basisloon wordt vervolgens verrekend met de tewerkstellingsbreuk. De tewerkstellingsbreuk is de werkbelasting van het personeelslid gedeeld door 40 uur (voltijdse tewerkstelling).*

Bijvoorbeeld: Anna is 9 jaar in dienst. Ze krijgt dus 2200 EUR basisloon, plus 2 keer 120 EUR anciënniteitstoeslag. Ze werkt 10 uur per week in plaats van 40, dus krijgt ze 610,00 EUR.

De werkbelasting van een lector wordt bepaald aan de hand van de cursussen die hij of zij geeft. De werkbelasting van elke cursus in de collectie wordt hiertoe opgeteld.

Het naamkaartje van een lector bevat de naam van de lector, met op een nieuwe lijn `Lector voor:` . Vervolgens worden de titels van alle cursussen die deze lector geeft op telkens een nieuwe lijn toegevoegd. Bv.

```
Anna Bolzano
Lector voor:
Economie
Statistiek
Analystische Meetkunde
```

Schrijf nu in `Program.cs` een methode `DemoLecturers`. Maak hierin een variabele `anna` met de gegevens van bovenstaande persoon. Maak hierin ook variabelen voor de drie cursussen in het voorbeeld boven. Anna heeft 3u economie, 3u statistiek en 4u analytische meetkunde. Ze is geboren 12 juni 1975.

Doorloop vervolgens met een `foreach` de lijst met alle lectoren en toon zo alle naamkaartjes van de lectoren.  Toon dan ook het salaris en de werkbelasting van Anna.

#### klassediagram

![](/img/img-3218.png)


#### Voorbeeldinteractie

![](/img/img-3219.png)


### Klassediagram

Hieronder zie je al de klassediagrammen tot nu in SchoolAdmin:

![](/img/img-3220.png)