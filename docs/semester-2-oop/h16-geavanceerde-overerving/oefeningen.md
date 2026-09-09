# Oefeningen

## h16-Orders-bugfix

### Functionele analyse

We schrijven een bestelsysteem. We kunnen gewone bestellingen en internationale bestellingen plaatsen. Voor internationale bestellingen wordt een extra kost van 10% aangerekend, maar is er wel korting voor grote bestellingen. We willen de prijzen van onze producten niet publiek zichtbaar maken, want dat verhindert prijsafspraken.

### Technische analyse

Schrijf een klasse `Order` met een `uint` property `Number`en een `double` **privé**-attribuut `unitPrice`. Voorzie ook een overschrijfbare computed property `TotalPrice`, namelijk het aantal maal de basisprijs. Voeg een constructor toe met het aantal en de basisprijs als parameters.  

Schrijf **daarna** een subklasse `InternationalOrder` die de totaalprijs bepaalt door de basisprijs met 10% te verhogen, maar vanaf 100 stuks een vlakke korting van 1000 euro toepast. **Dit zal niet meteen werken!** Doe een zo klein mogelijke aanpassing om het toch te doen werken.

Schrijf een methode `DemoOrders`in de klasse `Inheritance`. Hierin vraag je of de gebruiker een gewone of internationale bestelling wil plaatsen, vraag je om het aantal en de basisprijs en toon je dan de totaalprijs.

### Voorbeeldinteractie

```
Aantal stuks?
> 150
Basisprijs?
> 200
Gewone bestelling (1) of internationale bestelling (2)?
> 2
Totaalprijs: 32000,00 
```

## h16-Pizza

### Functionele analyse

We schrijven software om bestellingen van pizza's op te volgen. Deze software spreekt met andere software, bijvoorbeeld van Deliveroo of Uber Eats. We willen niet dat die diensten iets kunnen aanpassen aan de ingrediënten van onze pizza's, maar we willen wel zelf allerlei pizza's kunnen samenstellen.

### Technische analyse

Je krijgt volgende klasse `Pizza`:

```csharp
internal abstract class Pizza
    {
        private List<string> Ingredients;

        public Pizza(string[] extraToppings)
        {
            this.Ingredients = new List<string> { "deeg", "tomatensaus", "kaas" };
            foreach (var topping in extraToppings)
            {
                this.Ingredients.Add(topping);
            }
        }

        public abstract double UnitPrice
        {
            get;
        }

        public double Price
        {
            get
            {
                return this.UnitPrice + (this.Ingredients.Count * 0.5);
            }
        }

        public void ShowIngredients()
        {
            foreach (var ingredient in Ingredients)
            {
                Console.WriteLine(ingredient);
            }
        }

    }
```

Schrijf nu twee klassen `Margherita` en `Veggie` die overerven van `Pizza`, met basisprijs (UnitPrice) 5 en 6. Bij constructie krijgt een `Margherita` sowieso "mozzarella" toegevoegd aan de lijst met ingrediënten en krijgt een Veggie sowieso "tofu" en "spinazie", maar geen "kaas". Je moet hierbij een aanpassing doen aan `Pizza`, maar hou ze zo klein mogelijk. Het blijft de bedoeling dat een pizza standaard ook kaas bevat, dus schrijf je code zodat de veggie pizza dit ingrediënt verwijdert. Schrijf een demonstratiemethode `DemoPizzas` in de klasse `Inheritance`.

### Voorbeeldinteractie

![](/img/img-3188.png)


## h16-Menu

### Functionele analyse

We willen een digitale menukaart tonen in een online restaurant. Op deze kaart verschijnen gerechten in een standaardformaat. Kindergerechten volgen hetzelfde formaat, maar verschijnen in kleur.

### Technische analyse

* Schrijf een klasse `Meal`met:
  * properties `Name`en `Price`(deze laatste van type `double`). 
  * een constructor met de naam en de prijs.
  * methode `ShowTheMenu: deze`print de naam, gevolgd door 3 tabs, gevolgd door de prijs
* Schrijf een kindklasse `ChildrenMeal`
  * Dit werkt hetzelfde als een gewoon gerecht, maar de weergave op het menu gebruikt een willekeurige kleur. Als we bijvoorbeeld het aantal tabs aanpassen naar 5, moet `ChildrenMeal` zonder aanpassingen mee volgen.\
    Je kan een willekeurige kleur krijgen door een willekeurig getal tussen 1 en 15 te bepalen en dat dan te casten naar een waarde van de enum `ConsoleColor`.
* Maak een methode `DemoMeals` in de  klasse `Inheritance`. Hierin maak je een lijst met minstens 4 gerechten (waarvan minstens 2 kindergerechten) naar keuze en doorloop je de lijst zodat elk gerecht getoond wordt op het menu.

### Voorbeeldinteractie

![](/img/img-3189.png)


:::info
Tabs zijn eigenlijk niet ideaal. Zoek, als je sneller klaar bent, uit hoe je stringformattering kan gebruiken om de naam van elk gerecht met exact 35 tekens weer te geven.
:::

## Uitbreidingen SchoolAdmin

In de volgende stappen, zullen we SchoolAdmin verder uitbouwen. Volgend diagram toont het hele project na al deze wijzigingen:

![](/img/img-3190.png)


## H16\_1 SchoolAdmin: Vergelijkbare objecten

#### Functionele analyse

We willen kunnen nagaan of een van de objecten niet dubbel voorkomt in de lijst met geregistreerde objecten. 

#### Technische analyse

Voorzie `Person` en `Course` van een eigen versie van Equals. 

Een persoon is gelijk aan een andere persoon met hetzelfde ID. Je hoeft hier niet na te gaan dat de objecten van exact hetzelfde type zijn. In plaats daarvan kan je schrijven: `if (obj is Person) { ... }` Test ook op de `null`-waarde.

Een cursus is gelijk aan een andere cursus met hetzelfde ID.

Voorzie ook overal een hash code volgens de vuistregel in de cursus (gebruik het Id).

## H16\_2 SchoolAdmin: ToString

#### Functionele analyse

We willen van alle personen een tekstje met info over de persoon kunnen tonen.

#### Technische analyse

Voorzie `Person` van een `ToString` methode die een resultaat van volgende vorm toont:

![](/img/img-3191.png)


Zorg dat de concrete klassen hier ook het statuut van de persoon aan koppelen, bijvoorbeeld:

![](/img/img-3192.png)


Doe dit niet met `GetType`, want dan is de schrijfwijze anders. Schrijf het statuut letterlijk in de code per klasse.

## H16\_3 SchoolAdmin: Eenmaking statische lijsten personen

#### Functionele analyse

Je hebt momenteel volgende statische properties voor (immutable) lijsten met personen:

* AllPersons
* AllLecturers
* AlleStudents
* AllEmployees
* AllAdministrativePersonnel

Het is niet ideaal om al deze lijsten te hebben. Elke persoon wordt nu op twee of drie plaatsen bijgehouden, dus als je het systeem zou aanpassen om personen te verwijderen, moet je er aan denken dat op twee of drie plaatsen te doen. Als je klassen zoals `GuestLecturer`, `ExchangeStudent`of `ScheduleManager`zou toevoegen, zou je dat zelfs op nog meer plaatsen moeten doen.

#### Technische analyse

Vervang daarom de lijsten voor de subklassen van `Person` zodat er geen achterliggend attribuut wordt bijgehouden. In plaats daarvan, moet de lijst met personen "on-the-fly" berekend worden. Met andere woorden, je moet nog steeds een getter `AllLecturers`enzovoort voorzien, maar deze verzamelt alle lectoren door `AllPersons`te doorlopen. Gebruik hier opnieuw het woordje `is` dat we bij `Equals` hebben gebruikt.

Vergeet niet om voor de gewijzigde klassen de constructor aan te passen.

## H16\_4 SchoolAdmin: Tweerichtingsverkeer voor CourseRegistration

#### Functionele analyse

In je huidige code heeft de klasse `Student` een lijst `courseRegistrations`. Zo wordt een student gelinkt aan de cursussen die hij of zij volgt. Dit is niet ideaal, want in werkelijkheid willen we ook vaak te weten komen welke studenten in een bepaalde cursus zijn ingeschreven. We moeten dus in twee richtingen kunnen gaan.

#### Technische analyse

De oplossing die hier voorgesteld wordt, verreist wel wat aanpassingen. We zullen er stap voor stap doorgaan:

* klasse `CourseRegistration`: 
  * voorzie de klasse van een (immutable) lijst `AllCourseRegistrations`. Zo hoef je geen data dubbel bij te houden en kan je toch de functionaliteit verder uitbreiden. 
* klasse `Student:`
  * Schrap de huidige lijst met `courseRegistrations`. 
* klasse `CourseRegistration:`
  * Voorzie ter vervanging daarvan een property (read only) `Student` die bijhoudt welke student bij de inschrijving hoort. 
  * Pas de constructor aan met een extra parameter `Student`. Zorg er ook voor dat de nieuwe inschrijving toegevoegd wordt aan `AllCourseRegistrations`.
* klasse `Student:`
  * Voorzie een property (immutable list) `CourseRegistrations`die "on-the-fly" berekent welke inschrijvingen bij de student in kwestie horen. Overloop alle inschrijvingen in `AllCourseRegistrations` en elke inschrijving van de desbetreffende student, voeg je toe aan de lijst. Maak gebruik van een builder.
  * Verander de naam `courseRegistrations` in `CourseRegistrations` in de andere methoden van Student.
  * In de methode `RegisterCourseResult` moeten we de inschrijving niet meer toevoegen aan de lijst van `CourseRegistrations` maar enkel nog een nieuwe `CourseRegistration` maken.
  * Voorzie ook een property (immutable list)`Courses`. Hierin plaats je al de cursussen van de student door `CourseRegistrations` te overlopen. Maak ook hier gebruik van een builder.
* klasse `Course:`
  * Voorzie  een property  (immutable list)`CourseRegistrations.` Hierin zet je elke inschrijving die gebeurd is voor de desbetreffende cursus door de lijst van `AllCourseRegistrations` te overlopen. Gebruik een builder.
  * Wis het bestaande attribuut `Students` en vervang die door een immutable list `Students`. Overloop hiervoor de lijst `CourseRegistrations` van de cursus en voeg de studenten toe die ingeschreven zijn voor deze cursus. Gebruik ook hier een builder.
  * In de constructors wordt nog gebruikt gemaakt van een parameter `students`. Die parameter halen we er uit want het toevoegen van studenten aan een cursus verloopt nu via `CourseRegistration`. Wijzig constructor 1 en 2 en verwijder 3 want deze wordt overbodig.
* klasse Program: 
  * `DemoCourses`: 
    * verwijder de lijst `saidEnMieke` bij het maken van de `Course`-instanties.
    *  verwijder het toevoegen van studenten aan een cursus

## H16\_5 SchoolAdmin: Cursussen in semesters

#### Functionele analyse

Momenteel bestaat een studieprogramma gewoon uit een vlakke lijst cursussen. Dat stemt niet goed overeen met de werkelijkheid. In werkelijkheid wordt een cursus in een bepaald semester ingepland. 

#### Technische analyse

We zullen het opdelen in semesters mogelijk maken door de vlakke lijst met cursussen te vervangen door een `Dictionary` met cursussen als keys en semesters (byte) als values. Doe deze aanpassing in je code. 

Pas de code van `ShowOverview` aan zodat er gebruik gemaakt wordt van de nieuwe `Dictionary` en zodat je de cursussen toont, geordend per semester. 

Voorbeeld:

![](/img/img-3193.png)


Daarna pas je de demonstratiecode aan. Zorg dat communicatie bij de opleiding programmeren in het eerste semester staat, maar bij de opleiding systeem- en netwerkbeheer in het tweede semester. Alle andere vakken staan overal in het eerste semester.

Het veranderen van de titel van een cursus naar "Scripting" zal niet meer werken. Herschrijf de code zodat deze wijziging nog steeds gebeurt.

## H16\_6 SchoolAdmin: Manueel data invoeren

#### Functionele analyse

De demonstratiemethodes hebben bijna overal objecten aangemaakt door ze te "hard coden". Dat wil zeggen dat de instructies C# code zijn en niet gewijzigd kunnen worden eens je programma gecompileerd is. In een echte systeem voor schoolbeheer zou het administratief personeel voortdurend nieuwe entiteiten kunnen toevoegen aan het systeem.

#### Technische analyse

We voorzien hiervoor vier nieuwe mogelijkheden in het keuzemenu: "student toevoegen" (`AddStudent`), "cursus toevoegen" (`AddCourse`), "vakinschrijving toevoegen" ( `AddCourseRegistration`) en "inschrijvingsgegevens tonen" '`ShowCourseRegistrations`). 

De eerste drie vragen om de nodige gegevens om een object van een van deze klassen aan te maken. De laatste toont eerst alle studenten in het systeem, dan alle cursussen, dan alle inschrijvingen. 

Let op, er kan maar een vakinschrijving toegevoegd worden als er minstens één student geregistreerd is en minstens één cursus.

#### Voorbeeldinteracties:

![](/img/img-3194.png)


![](/img/img-3195.png)


![](/img/img-3196.png)


![](/img/img-3197.png)