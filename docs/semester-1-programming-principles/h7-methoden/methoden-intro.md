# Methoden intro

> ✅ [Kennisclip](https://youtu.be/eXcX25OfYOY)

## Methoden

Veel code die we hebben geschreven wordt meerdere keren, al dan niet op verschillende plaatsen, gebruikt. Dit verhoogt natuurlijk de foutgevoeligheid. Door het gebruik van methodes kunnen we de foutgevoeligheid van de code verlagen omdat de code maar op 1 plek staat én maar 1 keer dient geschreven te worden. Ook de leesbaarheid en dus onderhoudbaarheid van de code wordt verhoogd wanneer we methoden gebruiken om verschillende deeltaken van elkaar te scheiden.

### Wat is een methode

Een methode (bijna hetzelfde als een "functie" in andere programmeertalen) genoemd, is in C# een stuk code ('block') bestaande uit een 0, 1 of meerdere statements. Het is eigenlijk een klein stappenplan voor een onderdeel van je totale programma.

Zoals bij elk stappenplan is er een verschil tussen het vastleggen van de stappen en het uitvoeren. Het vastleggen van de stappen noemen we **definiëren** van de methode. Vergelijk met het tekenen van een flowchart voor een bepaalde taak, maar dan in code: de **definitie** van de methode stemt overeen met de flowchart die de deeltaak beschrijft.

Het uitvoeren van de stappen, dus het volgen van de flowchart, noemen we het **oproepen** of **uitvoeren** van de methode. De code die dit proces in gang zet noemen we een **oproep** (in het Engels: ***call***) van de methode.

Je hebt intussen al vaak (ingebouwde) methodes opgeroepen, waaronder:

* de `Main` methode van de klasse `Program` (voor deze hoef je de call zelf niet te schrijven, ze start automatisch op)
* de `WriteLine` methode van de klasse `Console`
* de `Substring` methode van een stuk tekst

### Basissyntax

#### Definitie

In het begin schrijven we onze methodes zo (binnenkort zien we uitbreidingen):

```csharp
public static void MethodeNaam()
{
    // code die een bepaalde taak uitvoert
}
```

Dit stukje code definieert dus hoe het stappenplan er uitziet. Het zorgt er niet voor dat het ook ooit wordt uitgevoerd. Daar is een call voor nodig. `public` zorgt dat deze methode opgeroepen kan worden van uit andere klassen, `static` is nodig omdat we klassen alleen als organisatieprincipe voor onze code gebruiken, `void` behandelen we iets verder op. Deze zaken, samen met de naam en de haakjes, noemen we ook de **signatuur** van de methode.

In Flowgorithm stemt de definitie van een methode overeen met een flowchart die in haar geheel getoond kan worden. Onderstaand voorbeeld bevat drie definities (flowcharts): `Main`, `ToonGroen` en `ToonBlauw`.



Je kan elke definitie (flowchart) terugvinden via dit menu:

![](/img/img-3132.png)

#### Oproep

Om de methode te gebruiken, moeten we een statement uitvoeren die er als volgt uitziet:

```csharp
MethodeNaam();
```

Aangezien elk programma begint met een oproep van de `Main` methode, zal dit programma dus wel de tekst `Groen` laten zien en niet de tekst `Blauw`:

```csharp
class Program {
    public static void ToonGroen() {
        Console.WriteLine("Groen");
    }
    public static void ToonBlauw() {
        Console.WriteLine("Blauw");
    }
    public static void Main() {
        ToonGroen();
    }
}
```

In Flowgorithm herken je de oproep als volgt:

![](/img/img-0140.png)

Een oproep van een methode betekent dus dat je een andere flowchart uitvoert alsof het één stap is van de flowchart waarin je bezig bent.

> ℹ️ Net zoals eerder kan je dit ook in C# stap voor stap uitvoeren door de debugger te gebruiken. Om de werking van een methode in detail te zien, gebruik je "step into".