---
hide_table_of_contents: true
---

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

```text
Welkom bij de oefeningen van Objectgeoriënteerd Programmeren!
Topic van de uit te voeren oefening?
1: DateTime
2: Properties en access modifiers
3: Datastructuren
>3
Uit te voeren oefening?
1. H14-PhoneBookNameNumber
2. H14-PhoneBookCityNameNumber
3. H14-PhoneBookWithBuilder
>1
Wil je een naam en nummer inlezen?
>ja
Naam?
>Gebruiker1
Nummer?
>12345
Wil je (nog) een naam en nummer inlezen?
>ja
Naam?
>Gebruiker2
Nummer?
>67891
Wil je (nog) een naam en nummer inlezen?
>ja
Naam?
>Gebruiker2
Nummer?
>23456
Wil je (nog) een naam en nummer inlezen?
>nee
Gebruiker1: 12345
Gebruiker2: 23456
```


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

```text
>2
Wil je een gemeente, naam en nummer inlezen?
>ja
Gemeente?
>Antwerpen
Naam?
>Gebruiker1
Nummer?
>123456
Wil je nog een gemeente, naam en nummer inlezen?
>ja
Gemeente?
>Antwerpen
Naam?
>Gebruiker2
Nummer?
>23456
Wil je nog een gemeente, naam en nummer inlezen?
>ja
Gemeente?
>Mechelen
Naam?
>Gebruiker3
Nummer?
>34567
Wil je nog een gemeente, naam en nummer inlezen?
>nee
Gemeente: Antwerpen
Gebruiker1: 123456
Gebruiker2: 23456
Gemeente: Mechelen
Gebruiker3: 34567
```


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

## Modeloplossingen

<DownloadSlot hoofdstuk="H14" />
