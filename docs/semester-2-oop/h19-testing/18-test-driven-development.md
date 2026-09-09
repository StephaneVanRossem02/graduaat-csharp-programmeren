# Test Driven Development

## Wat is TDD

TDD is een manier van werken in software ontwikkeling (mehodiek/discipline) die er op is gericht om foutarme (minder fouten) en flexibele software te ontwikkelen . D.m.v. TDD gaan de testen de duwende factor zijn bij het ontwikkelen van je code. Dat betekent dat je niet begint met de code te schrijven, je begint met de testen te schrijven. Nadien schrijf je de code die er voor gaat zorgen dat de test succesvol wordt doorlopen.De puristen onder de aanhangers van TDD zullen nooit ook maar één lijn code schrijven alvorens de test ervoor geschreven is. TDD gaat eigenlijk niet over testen, het gaat over het ontwerp en ontwikkeling van software. D.m.v. het gebruik van TDD zal je applicatie groeien in functionaliteit, maar zonder complexiteit toe te voegen. 

## De drie wetten van TDD (Robert C. Martin - Uncle Bob)

1. Het is niet toegelaten om productie code te schrijven, behalve om een gefaalde test te doen slagen
2. Het is niet toegelaten om meer testen te schrijven dan om de testen te doen falen, inclusief het falen van compilatie 
3. Het is niet toegelaten meer code te schrijven dan nodig om de gefaalde test te doen slagen 

## Het TDD proces

![](/img/img-3247.png)


Het TDD proces is algemeen bekend als het 'Red-Green-Refactor' proces. TDD is absoluut een voorbeeld van iteratieve ontwikkeling waar je stap voor stap de nodige functionaliteit aan je applicatie toevoegt. Puristen zullen steeds starten met een eerste test ItExists waarin ze de ontwikkel- en testomgeving testen. Na die eerste test wordt voor het eerste stukje functionaliteit een test geschreven en wordt de test uitgevoerd. De test faalt (Red). Vervolgens wordt de productiecode geschreven tot de test slaagt (Green). Op het einde van elke iteratie is het zaak om te kijken of je code niet kan worden 'opgekuist'. Je bekijkt dus of het niet beter zou zijn om bepaalde stukken van je code en/of je data te herwerken, anders te structureren, … Merk op dat je geschreven testen je daarbij helpen, je hoeft niet bang te zijn dat je wijzigingen nieuwe fouten zullen introduceren. Alle testen moeten slagen alvorens je een nieuw stukje functionaliteit kan toevoegen

## Argumenten tegen TDD

1. Testen vraagt tijd - Geld
2. Testen is moeilijk (het schrijven van de juiste testen)
3. Wanneer de functionaliteit wijzigt moeten ook de testen worden aangepast

## Argumenten voor TDD

1. Vermindert het werk van manuele testen
2.  Reduceert het aantal fouten
3. Garandeert een zeker niveau van correctheid 
4. Neemt de angst voor refactoring weg
5. Zorgt voor een beter architectuur
6. Zorgt voor snellere ontwikkeling

## Blind beginnen

Het is aangewezen om op voorhand het lijstje met tests dat je denkt nodig te hebben al even te noteren 

Waarom?

* Je denkt op voorhand al eens na over de specificatie / requirements ipv direct beginnen code te typen. Aangezien TDD niet helpt bij het designen van je software kan het handig zijn om toch al een beetje een idee te hebben waar je naartoe wil werken. Zeker voor complexere functionaliteiten kan het helpen om hierin een collega te betrekken.
* Je hebt dan al een plan van aanpak waar je kan beginnen met testen, het lijstje kan uiteraard altijd geüpdatet worden als je nog extra cases bedenkt tijdens het implementeren.

## Instructievideo's

Hieronder vinden jullie twee video's over TDD gemaakt door Jeremy Clark. Het is de bedoeling dat jullie deze video's bekijken en in parallel met Jeremy de oefeningen maken. Opgelet, Jeremy gebruikt als test framework Nunit. Je kan dit ook downloaden langs NuGet (zoals Moq), zorg dat je dan de laatste versie gebruikt.

Bekijk ook het volgende stukje "Class Library"



