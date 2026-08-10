# Strings

## String

Een string is een reeks van 0, 1 of meerdere lettertekens, zoals je ook kan zien als je even met je muis boven een string keyword *hovert* in je code:

![](/img/img-3053.png)

### Strings declareren

Merk op dat we bij een string literal gebruik maken van aanhalingstekens (`"`) terwijl bij chars we een apostrof gebruiken (`'`). Dit is de manier om een string van een char te onderscheiden.

Volgende code geeft twee keer het cijfer 1 onder elkaar op het scherm, maar de eerste keer gaat het om de weergave van een `string` (reeks van tekens) en de tweede keer van een `int` (effectief getal):

```csharp
string eenString = "1"; 
int eenGetal = 1;

Console.WriteLine(eenString);
Console.WriteLine(eenGetal);
```

De output van dit programma zal dan zijn:

```csharp
1
1
```

Fout gebruik van strings zal code geven die niet zal gecompileerd worden:

```csharp
string eenString = 1; //fout
int eenGetal = "1"; //fout
```

1. In de tweede toekenning proberen we een literal van het type **int** toe te kennen aan een variabele van het type **string**.
2. In de laatste toekenning proberen we een literal van het type **string** toe te kennen aan een variabele van het type **int**.