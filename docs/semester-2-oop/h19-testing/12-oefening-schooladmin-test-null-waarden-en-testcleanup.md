# Oefening SchoolAdmin test null-waarden en TestCleanup

Bij de SchoolAdmin-opdracht H17\_2 hebben we ervoor gezorgd dat je geen `CourseRegistration` kan aanmaken zonder een student en/of cursus. Als dit gebeurt, dan wordt er een `ArgumentException` geworpen.\
Om dat te testen, hebben we bij `AddCourseRegistration` een optie 0 (=null) toegevoegd bij de keuze van een student en de keuze van een cursus.

Met unit testing kunnen we dit nu beter testen. Hiervoor maak je een testproject **`TestSchoolAdmin`**.

Maak daarin de klasse **`TestEmptyValues`**. 

Voorzie deze van een `TestInitialize`. Maak hierin een student-object en een course-object naar keuze.

Maak 2 testmethoden:

* **`TestNullValueCourse`**: test hier het maken van een `CourseRegistration` met als `Course` de null waarde.
* **`TestNullValueStudent`**: test hier het maken van een `CourseRegistration` met als `Student` de null waarde.

#### \[TestCleanup] attribuut

Als je deze testen apart test, werken ze perfect. Maar als je ze allebei samen test, dan krijg je een foutmelding:

`Message:  Initialization method TestSchoolAdmin.TestEmptyValues.ArrangeTests threw exception. SchoolAdmin.DuplicateDataException: Nieuwe cursus heeft dezelfde titel als een bestaande cursus`

We hebben inderdaad in SchoolAdmin ingesteld dat er geen 2 cursussen kunnen zijn met dezelfde titel. Dan wordt er een `DuplicateDataException` geworpen. Deze foutmelding krijgen we omdat de code van TestInitialize vóór elke test uitgevoerd wordt. En hierdoor maken we telkens terug een cursus gemaakt met dezelfde titel.

Door een `[TestCleanup]` toe te voegen kunnen we de titel van de cursus terug leegmaken. Deze code zal uitgevoerd worden ná elke test.