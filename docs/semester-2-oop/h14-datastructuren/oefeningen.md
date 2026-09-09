# Oefeningen

## H14-PhoneBookNameNumber

### Functionele analyse

We wensen een simpel telefoonboek bij te houden, waarin je namen en nummers plaatst.

### Technische analyse

* maak eerst een blanco Dictionary van string naar string aan
* vraag in een lus telkens of de gebruiker nog wil doorgaan en, zo ja, vraag om een naam en een nummer
* hou de koppeling van de naam en dat nummer bij
  * dit mag geen fout leveren als de naam al in het woordenboek staat - overschrijf in dat geval de waarde
* toon tenslotte de inhoud van heel je telefoonboek
* noem je methode `PhoneBookNameNumber`

### Voorbeeldinteractie

![](/img/img-3199.png)


## H14-PhoneBookCityNameNumber

### Functionele analyse

Zie boven, maar we willen nu telefoonnummers ook groeperen per gemeente

### Technische analyse

* per gemeente heb je een Dictionary dat werkt zoals in de vorige oefening
  * om aan het Dictionary van een gemeente te komen, gebruik je een "groter" Dictionary met de naam van de gemeente als opzoekingssleutel
  * Voeg enkel een gemeente toe als deze nog niet bestaat als sleutel (hiervoor kan je `ContainsKey` gebruiken).
* achteraf print je de gegevens per gemeente, zoals dat ook in een fysiek telefoonboek ongeveer het geval is
* noem je methode `PhoneBookCityNameNumber`

### Voorbeeldinteractie

![](/img/img-3200.png)


## H14-PhoneBookWithBuilder

### Functionele analyse

We willen graag dat ons Dictionary (zonder gemeente) veilig doorgegeven kan worden aan methodes enz. Daarom zullen we er een ImmutableDictionary van maken.

### Technische analyse

* start met aanmaak van een builder voor een ImmutableDictionary
* vraag de gegevens zoals in de eerdere oefening
* plaats deze stap voor stap in de builder
* zet, voor je alle gegevens print, om naar een ImmutableDictionary en pas daar een foreach lus op toe

### Voorbeeldinteractie

In de interactie zie je geen verschil [met de eerdere oefening](#h14-phonebooknamenumber).

## SchoolAdmin project

## H14\_1 SchoolAdmin: AlleStudenten

#### Functionele analyse

We willen een lijst van alle studenten bijhouden.

#### Technische analyse

Voorzie de klasse `Student` van een statische read-only property `AllStudents`. Deze is van het type `ImmutableList<Student>` en bevat altijd elke student die in het systeem aanwezig is. Dit gebeurt door bij de constructie van elk `Student`-object de lijst uit te breiden.

#### Klassediagram

![](/img/img-3201.png)


## H14\_2 SchoolAdmin: Cursuslijsten immutable

#### Functionele analyse

We willen de cursuslijsten afschermen.

#### Technische analyse

Maak in de klasse `Course`van het attribuut `AllCourses`een immutableList-property . Pas de constructor aan!

Maak ook de lijst Courses in de klasse `StudyProgram` Read-Only en immutable. Pas dan de demonstreermethode aan!

#### Klassediagrammen

![](/img/img-3202.png)


![](/img/img-3203.png)