# Oefeningen

## H13\_2 SchoolAdmin: cursus opzoeken op Id

#### Functionele analyse

We willen cursussen makkelijk kunnen opvragen via Id. Schrijf in de klasse `Course` een methode `SearchCourseById` die dit doet.

#### Technische analyse

Deze methode werkt op klasseniveau, want je hebt geen cursus nodig om een andere cursus te vinden. Ze heeft één parameter, `id`. Het return type is `Course`, maar het kan zijn dat je geen cursus met het gevraagde Id kan terugvinden.

De methode werkt door `AllCourses`element per element te doorlopen en de waarde van het attribuut `Id` van elk element te vergelijken met het meegegeven argument. Als de gevraagde cursus niet bestaat, mag je programma niet crashen, maar krijg je `null` terug.

#### Klassediagram

![](/img/img-3272.png)


## H13\_3 SchoolAdmin: gelinkte objecten

### Functionele analyse

Het is niet handig dat onze klasse `CourseRegistration`een cursus voorstelt als string. Dat maakt dat we de functionaliteit van `Course`niet kunnen gebruiken. Pas daarom `CourseRegistration` aan zodat de klasse echt gelinkt is aan `Course`. Dit vereist aanpassingen op een aantal plaatsen.

### Technische analyse

Wijzig de klasse `CourseRegistration`: verwijder `Name`, voeg de full property `Course`toe en pas de constructor aan.

#### Klassediagram

![](/img/img-3273.png)


Door deze aanpassing moeten er een aantal wijzigingen gebeuren:

1.  in de klasse `Student`:\
   \- pas de methode `RegisterCourseResult` aan door het parametertype van course te veranderen\
   \- zorg ervoor dat in `ShowOverview` in plaats van de `Name`van een cursus de `Title`van de cursus getoond wordt
2. In de methode `DemoStudents(Program)` moet je eerst 4 `Course`-objecten aanmaken die je vervolgens als argument kan gebruiken bij het toepassen van `RegisterCourseResult`.
3. In de methode `DemoCourses` worden reeds 4 Cursus-objecten aangemaakt. Pas de oproepen naar de methode `RegisterCourseResult` aan en schuif ze verder naar onderen zodat deze methode terug correct werkt.
4. Aanpassingen `ReadTextFormatStudent`:\
   Vanaf nu gebruiken we in de csv-gegevens van een student niet meer de naam van een cursus maar het ID. Met behulp van de methode `SearchCourseById` kan je dan de juiste cursus terugvinden en deze gebruiken (als deze niet null is) in `RegisterCourseResult` . 

Controleer ook dat al je testmethodes nog dezelfde resultaten leveren als eerder.

#### Voorbeeldinteractie

Na het uitvoeren van optie 2 (`DemoCourses`) en optie 3 (`ReadTextFormatStudent`):

![](/img/img-3274.png)


## H13\_4 SchoolAdmin: Studieprogramma

#### Functionele analyse

We wensen cursussen te groeperen in studieprogramma's.

#### Technische analyse

Schrijf een klasse `StudyProgram`. Deze heeft een `Name`(enkele een getter) en bevat een lijst van cursussen. `ShowOverview`toont de naam van het programma en daaronder het overzicht voor elke cursus.

Voorzie ook een methode `DemoStudyProgram` die hieronder gegeven wordt:

Gebruik volgende code voor de demonstratiemethode:

```csharp
       Course communicatie = new Course("Communicatie");
       Course programmeren = new Course("Programmeren");
       Course databanken = new Course("Databanken");
       List<Course> courses = new List<Course>() { communicatie, programmeren, databanken };
       StudyProgram programmerenProgram = new StudyProgram("Programmeren");
       StudyProgram snbProgram = new StudyProgram("Systeem- en netwerkbeheer");
       programmerenProgram.Courses = courses;
       snbProgram.Courses = courses;
       programmerenProgram.ShowOverview();
       snbProgram.ShowOverview();
```

#### Klassediagram

![](/img/img-3275.png)


## H13\_5 SchoolAdmin: Studieprogramma aanpassen

#### Functionele analyse

We willen aanpassingen doen aan het studieprogramma SNB. Eerst schrappen we de cursus Databanken en vervolgens wijzigen we de titel van de cursus programmeren naar "Scripting". 

#### Technische analyse

*Eerste wijziging:*

Pas `DemoStudyProgram` aan met een `Remove` van de cursus Databanken uit het programma van SNB:

```csharp
       Course communicatie = new Course("Communicatie");
       Course programmeren = new Course("Programmeren");
       Course databanken = new Course("Databanken");
       List<Course> courses = new List<Course>() { communicatie, programmeren, databanken };
       StudyProgram programmerenProgram = new StudyProgram("Programmeren");
       StudyProgram snbProgram = new StudyProgram("Systeem- en netwerkbeheer");
       programmerenProgram.Courses = courses;
       snbProgram.Courses = courses;
       //we willen hieronder Databanken schrappen uit het programma SNB
       snbProgram.Courses.Remove(databanken);
       programmerenProgram.ShowOverview();
       snbProgram.ShowOverview();
```

Hier loopt iets mis. Benoem de oorzaak en corrigeer de fout.

*Tweede wijziging:*

Gebruik nu volgende code voor de demonstratiemethode:

```
    Course communicatie = new Course("Communicatie");
    Course programmeren = new Course("Programmeren");
    Course databanken = new Course("Databanken");
    List<Course> coursesProgrammeren = new List<Course>() { communicatie, programmeren, databanken };
    List<Course> coursesSNB = new List<Course>() { communicatie, programmeren, databanken };
    StudyProgram programmerenProgram = new StudyProgram("Programmeren");
    StudyProgram snbProgram = new StudyProgram("Systeem- en netwerkbeheer");
    programmerenProgram.Courses = coursesProgrammeren;
    snbProgram.Courses = coursesSNB;
    //we willen hieronder Databanken schrappen uit het programma SNB
    snbProgram.Courses.Remove(databanken);
    //voor SNB wordt de titel van de cursus Programmeren veranderd naar "Scripting"
    snbProgram.Courses[1].Title = "Scripting";
    programmerenProgram.ShowOverview();
    snbProgram.ShowOverview();
```

Opnieuw loopt het fout. Benoem zelf de oorzaak en corrigeer de fout.