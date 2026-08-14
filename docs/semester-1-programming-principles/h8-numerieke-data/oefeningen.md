# Oefeningen

## Inleiding

Deze oefeningen maak je als statische methoden van een klasse `NumeriekeData`. Je kan elk van deze methoden uitvoeren via een keuzemenu, zoals bij vorige hoofdstukken.

## H8-LengthAreaVolume

### Leerdoelen

* Werken met machten

### Functionele analyse

Schrijf een programma om, gegeven de lengte van een zijde, de oppervlakte van een vierkant met die zijde en het volume van een kubus met die zijde te berekenen. Je mag maximum vier keer gebruik maken van de variabele met daarin de lengte van de zijde, inclusief de initialisatie.

### Technische analyse

De oppervlakte bepaal je door de zijde met zichzelf te vermenigvuldigen. Bijvoorbeeld, een zijde van 10m betekent een oppervlakte van 10m \* 10m = 100m². Het volume bepaal je door nog een keer met de zijde te vermenigvuldigen. Een zijde van 10m betekent dus een oppervlakte van 1000m³. Maak gebruik van een methode uit `Math`.

Noem je methode `LengthAreaVolume`.

### Voorbeeldinteractie

```csharp
Hoe lang is de zijde in meter?
> 10
De lengte is: 10m
De oppervlakte is: 100m²
Het volume is: 1000m³
```

<OefeningAssistent oefening="H8-LengthAreaVolume" hoofdstuk="H8" />

## Oefening: H8-RockScissorsPaper

### Leerdoelen

* een taak herhaaldelijk uitvoeren met een lus

### Functionele analyse

Maak een applicatie waarbij de gebruiker steen-schaar-papier met de computer kan spelen. De gebruiker kiest telkens steen, schaar of papier en drukt op enter. Vervolgens kiest de computer willekeurig steen, schaar of papier.

Vervolgens krijgt de winnaar 1 punt:

* Steen wint van schaar, verliest van papier
* Papier wint van steen, verliest van schaar
* Schaar wint van papier, verliest van steen
* Indien beide hetzelfde hebben wint niemand een punt.

De eerste (pc of gebruiker) die 10 punten haalt wint.

Noem je methode `RockScissorsPaper`.

### Technische analyse

* Genereer een willekeurig getal tussen 1 en 3 om de computer te laten kiezen.

### Voorbeeldinteractie

```csharp
Maak een keuze:
1 voor schaar
2 voor steen
3 voor papier
> 2
De computer kiest steen!
Niemand wint deze ronde!
Jij hebt 0 punten, de computer heeft 0 punten.
Maak een keuze:
1 voor schaar
2 voor steen
3 voor papier
> 1
De computer kiest papier!
Jij wint deze ronde!
Jij hebt 1 punt, de computer heeft 0 punten.
Maak een keuze:
1 voor schaar
2 voor steen
3 voor papier
> 1
De computer kiest steen!
De computer wint deze ronde!
Jij hebt 1 punt, de computer heeft 1 punt.
```

(Helemaal op het einde)

```csharp
Jij hebt 10 punten, de computer heeft 8 punten.
Jij bent gewonnen!
```

of

```csharp
Jij hebt 8 punten, de computer heeft 10 punten.
De computer is gewonnen!
```

<OefeningAssistent oefening="H8-RockScissorsPaper" hoofdstuk="H8" />

## *Indien TextCell gemaakt: Oefening: TextCell met willekeurige getallen*

***Maak voor deze oefening een aparte klasse TextCellMetRandom. Kopieer hierin de code van je klasse TextCell en pas daarna pas aan.***

### *Functionele analyse*

*We willen onze spreadsheets gebruiken voor simulaties. Hiervoor hebben we willekeurige data nodig.*

### *Technische analyse*

*Zorg ervoor dat een cel in TextCell ook een formule van de vorm `=rand()` kan bevatten. Dit initialiseert de cel op een willekeurige waarde tussen 1 en 10.*

<OefeningAssistent oefening="H8-TextCellRandom" hoofdstuk="H8" />

## *Oefening: TextCell met kommagetallen*

***Maak voor deze oefening een aparte klasse TextCellMetKomma. Kopieer hierin de code van je klasse TextCell en pas daarna pas aan.***

### *Functionele analyse*

*We willen complexere berekeningen doen in TextCell. Zorg ervoor dat kommagetallen ondersteund worden, maar wel steeds getoond worden met maximum twee cijfers na de komma.*

### *Technische analyse*

*Pas op de juiste plaatsen alle code die een `int` veronderstelt aan naar een `double`. Zorg ervoor dat, na het uitrekenen van alle formules, alle cellen klassiek afgerond worden tot 2 cijfers na de komma.*

<OefeningAssistent oefening="H8-TextCellDecimals" hoofdstuk="H8" />
