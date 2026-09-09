# Oefeningen TDD

## Stap 0: Inleiding

In deze oefening gaan we met behulp van TDD een programma schrijven die de score gaat berekenen  van een volledig spelletje bowling. Voor diegenen die nog nooit gebowld hebben of niet juist weten hoe de puntentelling is opgebouwd; hieronder vind je enkele links naar info:

[Puntentelling Bowling](https://www.myactivesg.com/Sports/Bowling/How-To-Play/Bowling-Rules/How-are-points-determined-in-bowling#:~:text=The%20more%20pins%20you%20knock,strikes%E2%80%9D%20or%20%E2%80%9Cspares%E2%80%9D.)

[Scorecalculator Bowling](https://www.sportcalculators.com/bowling-score-calculator)

[Leren bowlen](https://www.youtube.com/watch?v=CACAmH4r1fw)

Je moet dus de totale score van een spelletje berekenen, niet de lopende score weergeven (niet zoals de calculator dus).

De oefening wordt begeleid in stappen, het is de bedoeling dat je deze stappen volgt.

We gebruiken TDD als methode. Dat houdt dus in dat we de Red, Green, Refactor cyclus gaan volgen.

## Stap 1: De eerste test

Zet alles klaar voor de eerste test: Maak een nieuw project BowlingGameScore en voeg een NUnit Test Project BowlingGameTests toe. Vergeet de 'Project Reference' en de using niet.\
Probeer in methode Test1 een instantie te maken van een klasse BowlingGame.

![](/img/img-3245.png)


### Stap 1.1: 

Zorg ervoor dat deze test slaagt. Let op: vermijd het schrijven van extra code. Creëer een nieuwe klasse BowlingGame.

## Stap 2: De tweede test

Een volgende stap is dat we de score van een complete off-day game testen. De in bowlingmiddens bekende GutterGame, Je gooit je bowlingbal steeds in de goot. 

###  Stap 2.1:

Schrijf de test When\_Roll\_GutterGame\_Returns\_0(). Je creëert eerst een BowlingGame object. Roep 20 keer de (nog onbestaande) methode Roll aan met argument 0 (aantal kegels omvergeworpen) en vergelijk de score (property Score van class BowlingGame) met het verwachte resultaat. Deze test faalt (implementatie is nog niet verwezenlijkt).

### Stap 2.2:

Zorg dat de tweede test slaagt. Creëer een methode Roll die een integer argument heeft (het aantal omgeworpen kegels) en creëer een property die de score bijhoudt. Je hoeft er enkel voor te zorgen dat deze test slaagt.

### Stap 2.3:

Refactor je testen. De eerste test zit volledig in de tweede test, nl het instantiëren van het BowlingGame object. Je kan de eerste test dus schrappen. Doe dat. Laat de test(en) lopen en verifieer dat ze slaagt.  

## Stap 3: De derde test

Een mogelijke volgende stap is een game waarin je bij elke worp een 1 gooit. 

### Stap 3.1:

Schrijf de test When\_Roll\_AllOnes\_Returns\_20(). Je creëert eerst een BowlingGame object. Roep  20 keer de methode Roll aan met argument 1 (aantal kegels omvergeworpen) en vergelijk de score (property Score van class BowlingGame) met het verwachte resultaat. Deze test faalt (implementatie van Roll is nog niet juist).

### Stap 3.2:

Zorg dat de derde test slaagt. Verbeter de methode Roll zodat bij elke nieuwe worp de punten van de omgevallen kegels bij de score worden geteld.

### Stap 3.3:

Refactor je testen en de code. Allereerst maak je de setter van de property Score private. Test na je aanpassing opnieuw. Vervolgens kan je herhaalde code voor de instantiatie van het BowlingGame object verbeteren. Dat hebben we nog niet gezien in de cursus, dus dat krijg je cadeau:

```csharp
public class BowlingGameScoreTests
{
    private BowlingGame game;

    [SetUp]
    public void Setup()
    {
        game = new BowlingGame();
    }

    [Test]
    public void When_Roll_GutterGame_Returns_0()
```

Verwijder de instantiatie van het BowlingGame object uit je testen. Test opnieuw. Het testen is belangrijk om te voorkomen dat je nieuwe problemen introduceert tijdens de refactoring. Je hebt waarschijnlijk twee identieke loops in je testen staan om 20 keer een 0 of een 1 te gooien. Vervang deze loops door een (private) method RollMany met twee integer parameters rolls (aantal keren) en pins (aantal omvergeworpen kegels). Test nadien opnieuw om te verifiëren dat alles nog correct werkt.

## Stap 4: De vierde test

Tijd om een Spare te testen. Een Spare is in één frame 10 kegels omgooien. Opgelet, een frame kan bestaan uit 1 of 2 worpen. Als je bij de eerste worp 10 kegels omgooit heb je een strike. Daarover meer later. De score is dan de 10 van de frame + het aantal omgevallen kegels bij je volgende worp. Het voorbeeld dat je in je test kan gebruiken is worp 1 - 5 kegels, worp 2 - 5 kegels en worp 3 - 3 kegels gevolgd door allemaal gootjes. De uiteindelijke score is dan voor frame 1 - 13 + frame 2 - 3 = 16.

### Stap 4.0: 

Er is eerst wat refactoring nodig. Je hebt ten eerste het concept van frame dat we nog niet hebben meegenomen in de code. Verder heb je eigenlijk een historiek nodig van worpen om de score te kunnen bepalen. Je moet namelijk kunnen terugkijken naar een sequentie van worpen. Ook deze nieuwe code krijg je cadeau, maar je mag ook zelf eerst proberen of je er in lukt om de test hieronder te doen slagen. Doe in elk geval eerst de refactoring en blijf testen (zonder nieuwe test) alvorens je de nieuwe test schrijft.

Voor diegenen die er niet in slagen om de code te schrijven, of die de vraagstelling niet helemaal begrepen hebben volgt nu de nieuwe code. De nieuwe code doorloopt de tot nu toe gedefinieerde testen glansrijk:

```csharp
using System;
using System.Collections.Generic;
using System.Text;

namespace BowlingGameScore
{
    public class BowlingGame
    {
        private int[] pins = new int[21];  // het aantal omgeworpen kegels per worp (maximaal 21 worpen laatste frame een spare + 1 of strike + 2;
        private int currentRoll = 0;       // teller van het aantal worpen die de gebruiker heeft gedaan
        
        public int Score
        {
            get 
            {
                int score = 0;
                int rollIndex = 0;
                for (int frame = 0; frame < 10; frame++) // loop over het aantal worpen
                {
                    score += pins[rollIndex] + pins[rollIndex + 1];
                    rollIndex += 2;
                }

                return score;
            }
        }
        public void Roll (int pinsThisRoll)
        {
            pins[currentRoll++] = pinsThisRoll;
        }
    }
}

```

### Stap 4.1:

Schrijf de test When\_Roll\_SpareAndThree\_Returns\_16(). Je roept de juiste methodes aan om de worpen aan de scorecalculator aan te bieden  en vergelijkt de score  met het verwachte resultaat. Deze test faalt.

### Stap 4.2:

Pas de code aan zodat de test slaagt.

### Stap 4.3:

Je kan de test of je een Spare hebt vervangen dooe een methode IsSpare met parameter rollIndex. Vervang ook 

```csharp
score += pins[rollIndex] + pins[rollIndex + 1]
```

Door

```csharp
 score += GetStandardScore(rollIndex);
```

En doe hetzelfde met je code voor de Spare score. Vergeet niet telkens te testen.

## Stap 5: De vijfde test

De strike. Je eerste worp van een frame kegelt alle kegels om. De score is dan de 10 van de frame + het aantal omgevallen kegels bij je volgende twee worpen. Het voorbeeld dat je in je test kan gebruiken is worp 1 - 10 kegels, worp 2 - 3 kegels en worp 3 - 4 kegels gevolgd door allemaal gootjes. De uiteindelijke score is dan voor frame 1 - 17 + frame 2 (twee worpen) - 7 = 24.

Dit is identiek aan test 4.

## Stap 6: De zesde test

Het perfecte spel, dus niets dan strikes: 10 frames met telkens 1 worp en vervolgens nog eens 2 strikes. 

Doe wat moet gedaan worden. Noem je test When\_Roll\_PerfectGame\_Returns\_300. De score voor een perfecte game is 300. Hoeveel worpen heb je? Moet je je code nog aanpassen?

