# Oefening SchoolAdmin test cursus zoeken met id

Maak een nieuwe testklasse **`TestSearchCourse`**. Voorzie deze van een `TestInitialize` waarin je 2 cursussen maakt met zelfgekozen titels. Maak ook dadelijk een `TestCleanup` om de titels van beide cursussen terug leeg te maken na elke test.

Maak volgende testmethoden:

**`TestSearchCourseGivesCourse`**

Zoek met behulp van `SearchCourseById` naar de cursus met Id 1. Test of deze methode een object van het type `Course` teruggeeft met behulp van `Assert.IsInstanceOfType`.

**`TestSearchCourseCorrectCours`**

Zoek met behulp van `SearchCourseById` naar de cursus met Id 1. Vergelijk de gevonden cursus met de eerste cursus uit de collectie van alle cursussen. Gebruik hiervoor `Assert.AreSame`.

**`TestSearchCourseCorrectID`**

Zoek met behulp van `SearchCourseById` naar de cursus met Id 1.  Gebruik `Assert.AreEqual` om het Id van de gevonden cursus te vergelijken met het Id van de eerste cursus uit de collectie van alle cursussen.