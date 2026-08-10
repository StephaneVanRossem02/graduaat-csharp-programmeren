# Omzetten van en naar strings

## Input van de gebruiker verwerken

> ✅ [Kennisclip voor deze inhoud](https://youtu.be/DGhdggwcdDk)

## Conversie

Zoals eerder aangegeven, kan je geen strings toekennen aan variabelen van type int of omgekeerd. Toch wil je soms een getal beschouwen als tekst, of tekst omzetten naar een getal .NET heeft hiervoor methoden die je kunnen helpen om data van het ene type naar het andere te brengen. Deze methoden zitten binnen de **`Convert`**-klasse.

Het gebruik hiervan is zeer eenvoudig. Enkele voorbeelden:

```csharp
int userAge = Convert.ToInt32("19"); // string to int
string ageAsText = Convert.ToString(19); // int to string
```

Je plaatst bij gebruik van `Convert` tussen de ronde haakjes de variabele of literal die je wenst te converteren naar een ander type. Merk op dat naar een `int` converteren met `.ToInt32()` moet gebeuren. Voor andere types zijn er overeenkomstige methoden. Je kan [alle conversie-mogelijkheden hier bekijken](https://msdn.microsoft.com/en-us/library/system.convert.aspx). Volgende conversies zullen je al ver vooruit helpen:

| gewenst type | methode   |
| ------------ | --------- |
| int          | ToInt32   |
| double       | ToDouble  |
| string       | ToString  |
| boolean      | ToBoolean |
| byte         | ToByte    |

## Foutloze input

Voorgaande code veronderstelt dat de gebruiker géén fouten invoert. De conversie zal namelijk mislukken indien de gebruiker bijvoorbeeld `IKWEEG10KG` invoert in plaats van `10,3`.

In het begin van de leercurve **moet** je er altijd van uitgaan dat de gebruiker foutloze input geeft. Later leer je wel hoe je dit kan afhandelen.

> ⚠️ **Opgelet**: de invoer van kommagetallen door de gebruiker is afhankelijk van de landinstellingen van je besturingssysteem. Staat deze in Belgisch/Nederlands dan moet je kommagetallen met een **KOMMA**(`,`) invoeren (dus `9,81`), staat deze in het Engels dan moet je een **PUNT**(`.`) gebruiken (`9.81`).

> ⚠️ **Opgelet 2**: In je C# code moet je doubles ALTIJD met een punt schrijven. Dit is onafhankelijk van je taalinstellingen.