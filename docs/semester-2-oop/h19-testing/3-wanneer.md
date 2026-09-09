# Wanneer Unit Testing?

Klassiek zou men denken dat unit tests geschreven worden nadat een unit werd ontwikkeld om de goede werking ervan te bevestigen.

Dit is eigenlijk te laat, door de tests te schrijven tijdens de ontwikkeling van de unit word je verplicht om testbare code te schrijven en reeds na te denken over de verschillende scenario’s die je gaat moeten testen

Er is ook een tendens richting “**Test Driven Development**” (TDD).\
Volgens deze manier van werken worden de test scenario’s eerst geschreven vooraleer de eigenlijke component wordt geschreven. Dit gebeurt volgens het principe van Red-Green-Refactor

![](/img/img-3250.png)


#### Wanneer unit tests uitvoeren?

* Uiteraard tijdens en na ontwikkeling van een nieuwe unit
* Na oplossen van een bug of aanpassen van een unit
* Voor het inchecken (commit) van je code alle tests uitvoeren
* Kan ook geautomatiseerd (vb. testrunner) worden zodat alle testen worden uitgevoerd na een automatische build – in combinatie met een mailing / notification system

 Zorg er daarom voor dat unit tests compact zijn, snel uitvoeren en robuust zijn (net zoals je productiecode).