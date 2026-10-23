---
hide_table_of_contents: true
---

# Oefeningen

Al deze oefeningen maak je in een klasse `Loops`

## Oefeningen WHILE en DO WHILE

## Oefening: H5-CountDown

### **Leerdoelen**

* flowchart omzetten naar code
* gebruik van een `while`-lus

### **Functionele analyse**

Je vraagt de gebruiker een positief geheel getal en vervolgens ga je aftellen. Alle getallen vanaf dat getal tot 1 worden getoond onder elkaar. Na het tonen van het laatste getal toon je “Start!”.

### **Technische analyse**

Maak een methode met de naam `CountDown`

Zet volgende flowchart om in code:

![](/img/img-3106.png)


#### **Voorbeeldinteractie(s)**

```text
Geef een getal in: 10
10
9
8
7
6
5
4
3
2
1
Start!
```

#### **Testscenario's**

Voer een negatief getal in.

<OefeningAssistent oefening="H5-CountDown" hoofdstuk="H5" />

## Oefening: H5-Password

## **Leerdoelen**

* Gebruik van een `do while`-lus

### **Functionele analyse**

De gebruiker wordt gevraagd om een wachtwoord in te geven totdat het juiste antwoord (“AP”) wordt gegeven. Toon daarna “Wachtwoord in orde!”.

Tel ook het aantal pogingen dat de gebruiker nodig had om het juiste antwoord te geven en toon het aantal pogingen.

### **Technische analyse**

Maak een methode met de naam `Password`

Zet volgende flowchart om in code:

![](/img/img-3108.png)

#### **Voorbeeldinteractie(s)**

```text
Geef het wachtwoord in: IT
Geef het wachtwoord in: ap
Geef het wachtwoord in: AP
Wachtwoord in orde!
aantal pogingen: 3
```

#### **Testscenario's**

· Duw meteen op ENTER

<OefeningAssistent oefening="H5-Password" hoofdstuk="H5" />

## Oefening: H5-Average

### **Leerdoelen**

* Gebruik van een `while` of `do while` lus.

### **Functionele analyse**

Bereken het gemiddelde van een aantal ingegeven getallen. De invoer van de getallen stopt met ingeven van de waarde 0.

### **Technische analyse**

Maak een methode met de naam `Average`. Het gemiddelde bereken je door de ingegeven getallen te delen door het aantal ingegeven getallen. De 0 die de reeks getallen stopt, wordt niet meegeteld als ingegeven getal.

Werk een oplossing uit met gebruik van een while lus of een do while lus. Zorg ervoor dat je gemiddelde ook de cijfers na de komma bevat.

**Voorbeeldinteractie(s**

```text
Geef het volgende getal in (stoppen met 0) 15
Geef het volgende getal in (stoppen met 0) 8
Geef het volgende getal in (stoppen met 0) 11
Geef het volgende getal in (stoppen met 0) 0
Het gemiddelde: 11,333333333333334
```

#### **Testscenario's**

* Test met negatieve waarden
* Geef dadelijk een 0 in. Wat wordt er dan getoond als waarde van het gemiddelde en wat betekent dit?

<OefeningAssistent oefening="H5-Average" hoofdstuk="H5" />

## Oefening: H5-Party

### **Leerdoelen**

· Gebruik van een `while` met samengestelde booleaanse expressie

### **Functionele analyse**

Je organiseert een feestje en met een programma ga je de inschrijvingen noteren. Je kan echter maximaal 20 personen inschrijven én je kan elk moment beslissen dat je geen volgende persoon meer wil inschrijven. Op het einde toon je alle namen van de ingeschrevenen.

### **Technische analyse**

Maak een methode met de naam `Party`

Werk een oplossing uit met gebruik van een while lus.

#### **Voorbeeldinteractie(s)**

```text
Wil je een volgende persoon inschrijven? (ja of nee) ja
Geef de naam: John
Wil je een volgende persoon inschrijven? (ja of nee) ja
Geef de naam: Paul
Wil je een volgende persoon inschrijven? (ja of nee) ja
Geef de naam: George
Wil je een volgende persoon inschrijven? (ja of nee) ja
Geef de naam: Ringo
Wil je een volgende persoon inschrijven? (ja of nee) nee
Lijst van aanwezigen:  John Paul George Ringo
Er zijn 4 personen aanwezig.
```

#### **Testscenario's**

* Geef dadelijk “nee” in.
* Probeer meer dan 20 personen in te schrijven.

<OefeningAssistent oefening="H5-Party" hoofdstuk="H5" />

## Oefening: H5-NumberOfDigits

### **Leerdoelen**

* Gebruik van een `do while`

### **Functionele analyse**

Schrijf een programma dat het aantal cijfers in een getal telt (het getal 12348 heeft bijvoorbeeld 5 cijfers). Het is de bedoeling dat je dit doet met een loop, dus **niet door het getal als tekst te behandelen**.

### **Technische analyse**

Maak een methode met de naam `NumberOfDigits`

Het is de bedoeling dat je het aantal digits telt met een do while loop, dus niet door het getal als tekst te behandelen.

#### **Voorbeeldinteractie(s)**

```text
Geef een geheel getal in: 987654321
Het ingegeven getal bestaat uit 9 cijfers
```

<OefeningAssistent oefening="H5-NumberOfDigits" hoofdstuk="H5" />

## Oefening: H5-Lions

### Leerdoelen

Gebruik van een `while` of `do while` lus.

### Functionele analyse

In een natuurpark zijn er 50 leeuwen. Het aantal groeit elk jaar met 15%. Hoe lang duurt het tot er 100 leeuwen zijn?

### **Technische analyse**

Maak een methode met de naam `Lions.`

### **Voorbeeldinteractie(s)**

```text
Na 1 jaar zijn er 57 leeuwen
Na 2 jaar zijn er 66 leeuwen
Na 3 jaar zijn er 76 leeuwen
Na 4 jaar zijn er 87 leeuwen
Na 5 jaar zijn er 101 leeuwen
```


<OefeningAssistent oefening="H5-Lions" hoofdstuk="H5" />

## Oefening: H5-SumOfEvenNumbers

### **Leerdoelen**

* Gebruik van een `while` met een geneste `if`.
* Flowchart omzetten in code

### **Functionele analyse**

Schrijf een programma dat de som maakt van alle even getallen van 1 tot een waarde n. Toon niet enkel de eindsom maar ook alle even getallen met de tussentijdse sommen.

### **Technische analyse**

Maak een methode met de naam `SumOfEvenNumbers`

Zet volgende flowchart om in code:

![](/img/img-3114.png)


#### **Voorbeeldinteractie(s)**

```text
Geef n in: 20
Even getal 2. De som van de getallen tot nu is: 2
Even getal 4. De som van de getallen tot nu is: 6
Even getal 6. De som van de getallen tot nu is: 12
Even getal 8. De som van de getallen tot nu is: 20
Even getal 10. De som van de getallen tot nu is: 30
Even getal 12. De som van de getallen tot nu is: 42
Even getal 14. De som van de getallen tot nu is: 56
Even getal 16. De som van de getallen tot nu is: 72
Even getal 18. De som van de getallen tot nu is: 90
Even getal 20. De som van de getallen tot nu is: 110
```

#### **Testscenario's**

* Druk dadelijk op ENTER.
* Geef 0 in.
* Geef 1 in.

<OefeningAssistent oefening="H5-SumOfEvenNumbers" hoofdstuk="H5" />

## Oefening: H5-Factors

### **Leerdoelen**

* Gebruik van een `while` met geneste `if`’s.

### **Functionele analyse**

Schrijf een programma een getal *n* ontbindt in [factoren](https://nl.wikipedia.org/wiki/Factorisatie). Factoren zijn de getallen waardoor je *n* kan delen zonder rest (van bijvoorbeeld het getal 100 zijn de factoren 1,2,4,5,10,20,25,50,100.

### **Technische analyse**

Maak een methode met de naam `Factors`

Gebruik een while loop. Gebruik een extra if om ervoor te zorgen dat er op het einde van de factoren geen komma teveel staat.

#### **Voorbeeldinteractie(s)**

```text
Geef een getal (groter dan 1):
> 12
Factoren zijn: 1, 2, 3, 4, 6, 12
```

#### **Testscenario's**

* Geef 0 in.
* Geef 1 in.
* Geef een negatief getal in.
* Geef een priemgetal in.

<OefeningAssistent oefening="H5-Factors" hoofdstuk="H5" />

## Oefening: H5-RNATranscription

### Leerdoelen

· Gebruik van een `do while` met geneste `if`.

### Functionele analyse

DNA heeft steeds een RNA-complement (DNA is het gevolg van RNA transscriptie). Schrijf een programma dat een ingevoerde DNA-string omzet naar een RNA-string. De gebruiker voert steeds 1 DNA-nucleotide (m.a.w. één letter) in per keer en duwt op enter, de RNA string wordt steeds groter. De omzetting is als volgt:

· G wordt C

· C wordt G

· T wordt A

· A wordt U

· “stop” dan stopt de gebruiker met letters ingeven en wordt het resultaat getoond.

· Andere letters of meer dan één letter worden genegeerd

### Technische analyse

Noem de methode voor deze oefening `RNATranscription`.

#### Voorbeeldinteractie(s)

```text
Geef de letter in (stoppen met 'stop')
> G
Geef de letter in (stoppen met 'stop')
> C
Geef de letter in (stoppen met 'stop')
> T
Geef de letter in (stoppen met 'stop')
> A
Geef de letter in (stoppen met 'stop')
> jkjfhskj
Geef de letter in (stoppen met 'stop')
> G
Geef de letter in (stoppen met 'stop')
> stop
De RNA string is: CGAUC
```

#### **Testscenario's**

* Geef andere letters in dan G, T, C of A.
* Geef meerdere letters in.
* Geef een getal in.
* Druk op ENTER.

<OefeningAssistent oefening="H5-RNATranscription" hoofdstuk="H5" />

## Oefening: H5-Accountant

### Leerdoelen

* Gebruik van een `do while` met geneste `if`
* Gebruik van een oneindige lus

### Functionele analyse

Maak een 'boekhoudprogramma': de gebruiker kan continu positieve en negatieve getallen invoeren. Dit programma houdt volgende zaken bij:

· de totale balans

· de som van de positieve getallen

· de som van de negatieve getallen

· het gemiddelde

### Technische analyse

Maak een methode met de naam `Accountant`

Voor de eerste drie zaken kom je toe met een variabele. Voor de laatste is dit lastiger, omdat elk nieuw getal een kleiner effect heeft op het gemiddelde dan het vorige. Je houdt beter een teller bij met het aantal ingevoerde getallen. Dan is het gemiddelde de totale balans gedeeld door het aantal ingevoerde getallen.

#### voorbeeldinteractie(s)

```text
Geef een getal
> 7
De balans is 7
De som van de positieve getallen is 7
De som van de negatieve getallen is 0
Het gemiddelde is 7
Geef een getal
> -3
De balans is 4
De som van de positieve getallen is 7
De som van de negatieve getallen is -3
Het gemiddelde is 2
Geef een getal
> 11
De balans is 15
De som van de positieve getallen is 18
De som van de negatieve getallen is -3
Het gemiddelde is 5
Geef een getal
```

(Dit programma kan blijven verder lopen zo lang je wil.)

#### **Testscenario's**

· Druk dadelijke op ENTER.

<OefeningAssistent oefening="H5-Accountant" hoofdstuk="H5" />

## Oefeningen FOR

## Oefening: H5-Minus100Plus100

### **Leerdoelen**

* Gebruiken van een `for`-lus
* Aanpassen 'update'
* Flowchart omzetten in code

### **Functionele analyse**

Basis: Toon alle natuurlijke getallen van -100 tot 100.

Uitbreiding: Toon alle even natuurlijke getallen van -100 tot 100.

### **Technische analyse**

Maak een methode met de naam `Minus100Plus100`.

Zet volgende flowcharts om in code: (als er geen update vermeld is, wordt de wachtervariabele verhoogd met 1)

**Basis:**

![](/img/img-3119.png)

**Uitbreiding:**

![](/img/img-3120.png)

**voorbeeldinteractie(s)**

**Basis**

```text
-100
-99
-98
-97
-96
-95
...
96
97
98
99
100
```

Uitbreiding:

```text
-100
-98
-96
-94
-92
...
96
98
100
```

<OefeningAssistent oefening="H5-Minus100Plus100" hoofdstuk="H5" />

## Oefening: H5-AMultiplicationTable

### **Leerdoelen**

* Gebruiken van een `for`-lus

### **Functionele analyse**

Vraag aan de gebruiker van welk getal de tafel van vermenigvuldiging tot 10 moet getoond worden.\
Toon elke vermenigvuldiging onder elkaar.

### **Technische analyse**

Maak een methode met de naam `AMultiplicationTable`.

**voorbeeldinteractie(s)**

```text
Van welk getal wil je de tafel van vermenigvuldiging zien?
> 5
1 x 5 is 5
2 x 5 is 10
3 x 5 is 15
4 x 5 is 20
5 x 5 is 25
6 x 5 is 30
7 x 5 is 35
8 x 5 is 40
9 x 5 is 45
10 x 5 is 50
```

**Testscenario's**

Geef 0 in.

<OefeningAssistent oefening="H5-AMultiplicationTable" hoofdstuk="H5" />

## Oefening: H5-Multiples6And8

### **Leerdoelen**

* Gebruiken van een `for`-lus met een geneste `if` met een samengestelde booleaanse expressie

### **Functionele analyse**

Toon alle getallen van 1 tot en met 100 die een veelvoud zijn 6 en die een veelvoud zijn van 8.

### **Technische analyse**

Maak een methode met de naam `Multiples6And8`.

**voorbeeldinteractie(s)**

```text
6
8
12
16
18
24
30
32
36
40
42
48
54
56
60
64
66
72
78
80
84
88
90
96
```

##

<OefeningAssistent oefening="H5-Multiples6And8" hoofdstuk="H5" />

## Oefening H5-Fibonacci

### Leerdoelen

Gebruik `For`.

### Functionele analyse

Dit is een van de beroemdste getallenreeksen in de wiskunde. De rij van Fibonacci is een reeks van getallen waarbij ieder getal in deze reeks de som is van de 2 voorgaande getallen. De eerste 2 getallen van de Fibonacci reeks zijn 0 en 1, daarnaast is deze Fibonacci reeks oneindig lang.

### Technische analyse

Maak een methode met de naam `Fibonacci`. 

Vraag aan de gebruiker hoeveel getallen moeten getoond worden van de reeks.

### Voorbeeldinteractie

```text
Geef het aantal getallen op die je wil zien van de reeks: 12
De fibonacci lijst is:
0 1 1 2 3 5 8 13 21 34 55 89
```


<OefeningAssistent oefening="H5-Fibonacci" hoofdstuk="H5" />

## Oefening: H5-PrimeNumberChecker

### **Leerdoelen**

* Gebruiken van een `for`-lus met geneste `if`.

### **Functionele analyse**

Je krijgt een getal van de gebruiker. Je moet nagaan of dit een priemgetal is, d.w\.z. of het precies 2 gehele delers heeft.

### **Technische analyse**

Maak een methode met de naam `PrimeNumberChecker`.

Elk geheel getal vanaf 2 heeft minstens 2 gehele delers: 1 en zichzelf. Als dat de enige delers van het gegeven getal zijn, is het priem. Je kan dus nagaan of een getal een priemgetal is door alle getallen vanaf 2 tot het getal zelf te overlopen en na te gaan of deze delers zijn van het getal.\
Je mag veronderstellen dat de gebruiker minstens 2 intypt\*\*.\*\*

**voorbeeldinteractie(s)**

```text
Geef getal in:
> 8
8 is geen priemgetal
```

```text
Geef getal in:
> 11
11 is een priemgetal
```

**Testscenario's**

Test met een negatief getal.

<OefeningAssistent oefening="H5-PrimeNumberChecker" hoofdstuk="H5" />

## Oefening: H5-PrimeNumberGenerator

### **Leerdoelen**

* Gebruiken van een `while` lus met een geneste `for` lus

### **Functionele analyse**

Je toont de priemgetallen tussen een laagste waarde en een hoogste waarde die door de gebruiker worden ingegeven.

### **Technische analyse**

Maak een methode met de naam `PrimeNumberGenerator`.

Je kan een deel van de code van de vorige oefening gebruiken

**voorbeeldinteractie(s)**

```text
Priemgetallen van (laagste getal):
> 2
tot en met (hoogste getal):
> 10
 2 3 5 7
```

**Testscenario's**

Test met een negatieve laagste waarde.

<OefeningAssistent oefening="H5-PrimeNumberGenerator" hoofdstuk="H5" />

## Modeloplossingen

<DownloadSlot hoofdstuk="H5" />
