# SchoolAdmin: overzicht van alle stappen

Het SchoolAdmin-project loopt als een rode draad door heel semester 2. Je bouwt het stap voor stap
op, hoofdstuk na hoofdstuk. Een aantal stappen staat **in de theorie** (die maak je tijdens de les),
de meeste staan bij de **oefeningen** van het hoofdstuk.

Deze pagina verzamelt alle stappen op één plek, in de volgorde waarin je ze maakt, met een
rechtstreekse link naar het kopje waar de opdracht en de code staan.

:::info
De opzet van het project vind je bij
[Opdracht: SchoolAdmin](../semester-2-oop/h11-klassen-en-objecten/6-attributen.md#opdracht-schooladmin)
in H1. Je werkt in een **apart project** `SchoolAdmin`, los van `OOExercises`.
:::

## H1: Klassen en objecten

- **[H1_1 SchoolAdmin Student attributen](../semester-2-oop/h11-klassen-en-objecten/6-attributen.md#h1_1-schooladmin-student-attributen)** — *theorie: Attributen*\
  Klasse `Student` met publieke attributen voor naam, geboortedatum, studentennummer en cursussen, plus de teller `StudentCounter`.
- **[H1_2 SchoolAdmin Student methoden](../semester-2-oop/h11-klassen-en-objecten/7-methoden.md#h1_2-schooladmin-student-methoden)** — *theorie: Methoden*\
  De methoden `GenerateNameCard` en `DetermineWorkload`, en een eerste keuzemenu in `Main` dat `DemoStudents` oproept.
- **[H1_3 SchoolAdmin Student Cursussen private](../semester-2-oop/h11-klassen-en-objecten/8-accessmodifiers.md#h1_3-schooladmin-student-cursussen-private)** — *theorie: Access modifiers*\
  `Courses` wordt het private veld `courses` en krijgt de methode `RegisterForCourse`, die dubbele inschrijvingen tegenhoudt.
- **[H1_4 SchoolAdmin klasse Course](../semester-2-oop/h11-klassen-en-objecten/oefeningen.md#h1_4-schooladmin-klasse-course)** — *oefeningen*\
  Nieuwe klasse `Course` met `Students`, `Title` en `ShowOverview`, getest via de demomethode `DemoCourses`.
- **[H1_5 SchoolAdmin klasse CourseResult](../semester-2-oop/h11-klassen-en-objecten/oefeningen.md#h1_5-schooladmin-klasse-courseresult)** — *oefeningen*\
  Nieuwe klasse `CourseResult`; in `Student` vervangt de list `courseResults` de list `courses`, en `RegisterCourseResult` vervangt `RegisterForCourse`.
- **[H1_6 SchoolAdmin Student Average](../semester-2-oop/h11-klassen-en-objecten/oefeningen.md#h1_6-schooladmin-student-average)** — *oefeningen*\
  De methode `Average`, en een `ShowOverview` die naam, werkbelasting, cijferrapport en gemiddelde toont.
- **[H1_7 SchoolAdmin properties Course](../semester-2-oop/h11-klassen-en-objecten/oefeningen.md#h1_7-schooladmin-properties-course)** — *oefeningen*\
  `Course` krijgt de property `CreditPoints` met private setter, een read-only `Id` via `maxId`, en de statische lijst `AllCourses`.
- **[H1_8 SchoolAdmin properties CourseResult](../semester-2-oop/h11-klassen-en-objecten/oefeningen.md#h1_8-schooladmin-properties-courseresult)** — *oefeningen*\
  De attributen van `CourseResult` worden properties, waarbij `Result` nooit hoger dan 20 kan worden ingesteld.
- **[H1_9 SchoolAdmin Student Age](../semester-2-oop/h11-klassen-en-objecten/oefeningen.md#h1_9-schooladmin-student-age)** — *oefeningen*\
  Read-only computed property `Age` op basis van de geboortedatum, mee opgenomen in `ShowOverview`.

## H2: Objecten (al dan niet) aanmaken

- **[H2_1 SchoolAdmin Student Constructor](../semester-2-oop/h12-objecten-al-dan-niet-aanmaken/oefeningen.md#h2_1-schooladmin-student-constructor)** — *oefeningen*\
  Constructor met twee parameters voor `Student`, die meteen `StudentNumber` toekent vanuit `StudentCounter`.
- **[H2_2 SchoolAdmin Cursus Constructor](../semester-2-oop/h12-objecten-al-dan-niet-aanmaken/oefeningen.md#h2_2-schooladmin-cursus-constructor)** — *oefeningen*\
  Drie constructors voor `Course` met chaining, die het `Id` zetten en het nieuwe object toevoegen aan `AllCourses`.
- **[H2_3 SchoolAdmin CursusResultaat Constructor](../semester-2-oop/h12-objecten-al-dan-niet-aanmaken/oefeningen.md#h2_3-schooladmin-cursusresultaat-constructor)** — *oefeningen*\
  Constructor met `name` en `result` voor `CourseResult`, waarbij `Name` read-only wordt.
- **[H2_4 SchoolAdmin Student uit tekst lezen](../semester-2-oop/h12-objecten-al-dan-niet-aanmaken/oefeningen.md#h2_4-schooladmin-student-uit-tekst-lezen)** — *oefeningen*\
  De methode `ReadTextFormatStudent`, die één student met al zijn cursusresultaten inleest uit één regel CSV-tekst.

## H3: Geheugenmanagement bij klassen

- **[H3_1 SchoolAdmin nullable Resultaat](../semester-2-oop/h13-geheugenmanagement-bij-klassen/2-nullable-value-types.md#h3_1-schooladmin-nullable-resultaat)** — *theorie: Nullable value types*\
  `CourseResult` wordt hernoemd naar `CourseRegistration` en het resultaat wordt nullable, zodat je kan inschrijven zonder resultaat.
- **[H3_2 SchoolAdmin: cursus opzoeken op Id](../semester-2-oop/h13-geheugenmanagement-bij-klassen/oefeningen.md#h3_2-schooladmin-cursus-opzoeken-op-id)** — *oefeningen*\
  De statische methode `SearchCourseById`, die `AllCourses` doorloopt en `null` teruggeeft als de cursus niet bestaat.
- **[H3_3 SchoolAdmin: gelinkte objecten](../semester-2-oop/h13-geheugenmanagement-bij-klassen/oefeningen.md#h3_3-schooladmin-gelinkte-objecten)** — *oefeningen*\
  `CourseRegistration` verwijst voortaan naar een echt `Course`-object in plaats van naar een string.
- **[H3_4 SchoolAdmin: Studieprogramma](../semester-2-oop/h13-geheugenmanagement-bij-klassen/oefeningen.md#h3_4-schooladmin-studieprogramma)** — *oefeningen*\
  Nieuwe klasse `StudyProgram` met een naam en een lijst cursussen, plus de demomethode `DemoStudyProgram`.
- **[H3_5 SchoolAdmin: Studieprogramma aanpassen](../semester-2-oop/h13-geheugenmanagement-bij-klassen/oefeningen.md#h3_5-schooladmin-studieprogramma-aanpassen)** — *oefeningen*\
  Een cursus schrappen en een cursustitel wijzigen in één programma, en zien wat dat doet met het andere programma (referenties).

## H4: Datastructuren

- **[H4_1 SchoolAdmin: AlleStudenten](../semester-2-oop/h14-datastructuren/oefeningen.md#h4_1-schooladmin-allestudenten)** — *oefeningen*\
  Statische read-only property `AllStudents` als `ImmutableList<Student>`, die vanuit de constructor wordt aangevuld.
- **[H4_2 SchoolAdmin: Cursuslijsten immutable](../semester-2-oop/h14-datastructuren/oefeningen.md#h4_2-schooladmin-cursuslijsten-immutable)** — *oefeningen*\
  `AllCourses` en de cursuslijst van `StudyProgram` worden afgeschermd als immutable lijsten.

## H5: Overerving

- **[H5_1 SchoolAdmin: Persoon](../semester-2-oop/h15-overerving/oefeningen.md#h5_1-schooladmin-persoon)** — *oefeningen*\
  Abstracte klasse `Person` met `Id`, `Name`, `BirthDate` en `Age`, en de methoden die elke kindklasse moet implementeren.
- **[H5_2 SchoolAdmin: Student erft over van Persoon](../semester-2-oop/h15-overerving/oefeningen.md#h5_2-schooladmin-student-erft-over-van-persoon)** — *oefeningen*\
  `Student` wordt een kind van `Person`, verliest de dubbele leden en krijgt het dossier `StudentFile`.
- **[H5_3 SchoolAdmin: Personeel erft over van Persoon](../semester-2-oop/h15-overerving/oefeningen.md#h5_3-schooladmin-personeel-erft-over-van-persoon)** — *oefeningen*\
  Abstracte klasse `Employee` met anciënniteit (max. 50), een takenlijst en de verplichte methode `CalculateSalary`.
- **[H5_4 SchoolAdmin: Administratief Personeel](../semester-2-oop/h15-overerving/oefeningen.md#h5_4-schooladmin-administratief-personeel)** — *oefeningen*\
  `AdministrativePersonnel` met een salaris op basis van anciënniteit en tewerkstellingsbreuk, en een eigen naamkaartje.
- **[H5_5 SchoolAdmin: Lector](../semester-2-oop/h15-overerving/oefeningen.md#h5_5-schooladmin-lector)** — *oefeningen*\
  `Lecturer` met de cursussen die hij of zij geeft, en een eigen berekening van salaris en werkbelasting.

## H6: Geavanceerde overerving

:::tip
Bij [Uitbreidingen SchoolAdmin](../semester-2-oop/h16-geavanceerde-overerving/oefeningen.md#uitbreidingen-schooladmin) staat een klassediagram van het **volledige project** na alle stappen van dit hoofdstuk.
:::

- **[H6_1 SchoolAdmin: Vergelijkbare objecten](../semester-2-oop/h16-geavanceerde-overerving/oefeningen.md#h6_1-schooladmin-vergelijkbare-objecten)** — *oefeningen*\
  Een eigen `Equals` en `GetHashCode` op `Person` en `Course`, gebaseerd op het `Id`.
- **[H6_2 SchoolAdmin: ToString](../semester-2-oop/h16-geavanceerde-overerving/oefeningen.md#h6_2-schooladmin-tostring)** — *oefeningen*\
  Een `ToString` op `Person`, waarbij elke concrete klasse het statuut van de persoon toevoegt.
- **[H6_3 SchoolAdmin: Eenmaking statische lijsten personen](../semester-2-oop/h16-geavanceerde-overerving/oefeningen.md#h6_3-schooladmin-eenmaking-statische-lijsten-personen)** — *oefeningen*\
  De aparte statische lijsten per subklasse verdwijnen; ze worden on-the-fly berekend uit `AllPersons`.
- **[H6_4 SchoolAdmin: Tweerichtingsverkeer voor CourseRegistration](../semester-2-oop/h16-geavanceerde-overerving/oefeningen.md#h6_4-schooladmin-tweerichtingsverkeer-voor-courseregistration)** — *oefeningen*\
  Via `AllCourseRegistrations` kan je de link student–cursus in beide richtingen bevragen, zonder data dubbel bij te houden.
- **[H6_5 SchoolAdmin: Cursussen in semesters](../semester-2-oop/h16-geavanceerde-overerving/oefeningen.md#h6_5-schooladmin-cursussen-in-semesters)** — *oefeningen*\
  Het studieprogramma wordt een `Dictionary` van cursus naar semester, en het overzicht toont de cursussen per semester.
- **[H6_6 SchoolAdmin: Manueel data invoeren](../semester-2-oop/h16-geavanceerde-overerving/oefeningen.md#h6_6-schooladmin-manueel-data-invoeren)** — *oefeningen*\
  Menu-opties om studenten, cursussen en inschrijvingen manueel toe te voegen en de inschrijvingsgegevens te tonen.

## H7: Exception handling

- **[H7_1 SchoolAdmin: geen dubbele cursusnamen](../semester-2-oop/h17-exception-handling/oefeningen.md#h7_1-schooladmin-geen-dubbele-cursusnamen)** — *oefeningen*\
  Een eigen `DuplicateDataException` die verhindert dat twee cursussen met dezelfde naam geregistreerd worden.
- **[H7_2 SchoolAdmin: geen lege waarden voor CourseRegistration](../semester-2-oop/h17-exception-handling/oefeningen.md#h7_2-schooladmin-geen-lege-waarden-voor-courseregistration)** — *oefeningen*\
  Een `ArgumentException` wanneer je een inschrijving maakt zonder student en/of zonder cursus.
- **[H7_3 SchoolAdmin: geen tweede inschrijving voor dezelfde cursus](../semester-2-oop/h17-exception-handling/oefeningen.md#h7_3-schooladmin-geen-tweede-inschrijving-voor-dezelfde-cursus)** — *oefeningen*\
  Een `ArgumentException` wanneer dezelfde student zich een tweede keer voor dezelfde cursus inschrijft.
- **[H7_4 SchoolAdmin: beperkt aantal inschrijvingen per cursus](../semester-2-oop/h17-exception-handling/oefeningen.md#h7_4-schooladmin-beperkt-aantal-inschrijvingen-per-cursus)** — *oefeningen*\
  Een `CapacityExceededException` zodra er al 20 lopende inschrijvingen voor een cursus zijn.

## H8: Polymorfisme en interfaces

- **[H8_1 SchoolAdmin: sorteren volgens criteria](../semester-2-oop/h18-polymorfisme-en-interfaces/oefeningen.md#h8_1-schooladmin-sorteren-volgens-criteria)** — *oefeningen*\
  Klassen die `IComparer<T>` implementeren, zodat de gebruiker studenten en cursussen op verschillende criteria kan sorteren.
- **[H8_2 SchoolAdmin: data export naar CSV](../semester-2-oop/h18-polymorfisme-en-interfaces/oefeningen.md#h8_2-schooladmin-data-export-naar-csv)** — *oefeningen*\
  De interface `ICSVSerializable` met `ToCSV`, doorheen de hele klassenhiërarchie geïmplementeerd, plus de menu-optie "Data exporteren".

## H9: Testing

Deze oefeningen dragen geen `H9_`-nummer, maar testen wel rechtstreeks code die je in SchoolAdmin
hebt geschreven. Je maakt hiervoor een testproject `TestSchoolAdmin`.

- **[Oefening SchoolAdmin test null-waarden en TestCleanup](../semester-2-oop/h19-testing/12-oefening-schooladmin-test-null-waarden-en-testcleanup.md)** — *oefening*\
  Testklasse `TestEmptyValues` die de `ArgumentException` uit H7_2 nagaat, met `TestInitialize` en `TestCleanup`.
- **[Oefening SchoolAdmin test equals](../semester-2-oop/h19-testing/13-oefening-schooladmin-test-equals.md)** — *oefening*\
  Testklasse `TestEquals` die de `Equals`-implementaties uit H6_1 controleert voor studenten en lectoren.
- **[Oefening SchoolAdmin test cursus zoeken met id](../semester-2-oop/h19-testing/14-oefening-schooladmin-test-cursus-zoeken-met-id.md)** — *oefening*\
  Testklasse `TestSearchCourse` die `SearchCourseById` uit H3_2 test met `Assert.IsInstanceOfType`, `Assert.AreSame` en `Assert.AreEqual`.
