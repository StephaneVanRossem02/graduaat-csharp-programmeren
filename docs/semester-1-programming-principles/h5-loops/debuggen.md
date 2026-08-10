# Debuggen

## Debuggen

**Debugging is een essentiële skill**. Bekijk onderstaande clip en zorg dat je de werking van elk gedemonstreerd onderdeel begrijpt. Gebruik voortaan altijd de debugger als je programma wel uitvoert, maar verkeerde resultaten produceert vooraleer je de lector aanspreekt.

Intussen kan je hopelijk stap voor stap een Flowgorithm programma in je hoofd uitvoeren. Als je de software gedownload hebt, kan je dit ook op je machine doen door telkens F6 te gebruiken. Je kan ook op elk punt in het programma kijken wat de waarden van je variabelen zijn via de knop met het symbooltje `x=`.

![Flowgorithm programma, gepauzeerd middenin een for-lus, met weergave van de teller.](/img/img-3098.png)

Voor C#-programma's is er een gelijkaardige tool in Visual Studio Code: de debugger. De naam is wat misleidend: deze zal geen bugs verwijderen uit je programma, maar zal je wel helpen stap voor stap door je programma te gaan. Als je programma bugs vertoont, is de kans groot dat je op deze manier de oorzaak kan vinden.

Dit wordt geïllustreerd door volgende code:

```csharp
using System;

namespace Demonstratie_debugger
{
    class Program
    {
        public static void MethodeB() {
            int getal = 2;
            double kommagetal = 4.9;
            Console.WriteLine("B");
        }
        public static void MethodeA() {
            Console.WriteLine("A1");
            MethodeB();
            int getal1 = 56;
            int getal2 = 13;
            Console.WriteLine("A2");
        }
        static void Main(string[] args)
        {
            Program.MethodeA();
        }
    }
}

```

Eerst zet je ergens in deze code een **breakpoint**. Dit ziet er uit als een rood bolletje naast de code waar je programma moet "stilstaan". Je doet dit door op de plaats van het bolletje te klikken.

![breakpoint](/img/img-3099.png)

Dan start je je programma op via "Run -> Start debugging" (of via F5). De regel waarop je code gepauzeerd is, wordt aangeduid.

![](/img/img-3100.png)

In dit geval is er maar één instructie: "voer `MethodeA` uit". We kunnen dit als één geheel doen via "step over" of we kunnen ook de stappen binnenin `MethodeA` bekijken via "step into".

![step over: "voer de instructie als één geheel uit"](/img/img-3101.png) ![step into: "bekijk de instructie zelf als een reeks kleinere instructies"](/img/img-3102.png)

In dit geval kunnen we in detail kijken hoe `MethodeA` werkt via "step into". We kunnen "step into" niet altijd uitvoeren: we hebben hiervoor toegang nodig tot de broncode van de instructie die we verder willen bekijken.

Door enkele stappen uit te voeren, kunnen we pauzeren op de toekenning van `getal2`:

![](/img/img-3103.png)

Op dit punt in de code, kunnen we onder "variables" bekijken welke waarden onze variabelen op dit moment hebben (merk op: de toekenning van 13 is nog niet gebeurd, we staan stil vlak ervoor):

![](/img/img-3104.png)

En via de "call stack" zien we dat we niet gewoon in `MethodeA` zitten, maar dat `MethodeA` is opgeroepen door `Main`:

![Onderaan staan de methodes die al het langst aan het uitvoeren zijn. Met andere woorden: Main heeft MethodeA opgeroepen.](/img/img-3105.png)

> ❗ Er komen geen oefeningen specifiek rond debuggen. Dat gaat niet, want debuggen helpt je alleen informatie verzamelen. Toch is het een zéér, zéér belangrijke skill. Debuggen kan je helpen inzien **wat je programma doet**. Er worden geen rechtstreekse punten op gegeven, maar als je goed debugt, kan je opdrachten afwerken die je anders niet zou kunnen maken. Gedraagt je programma zich tijdens de labosessies niet zoals je verwacht? **Zet een breakpoint en kijk wat er aan de hand is!**