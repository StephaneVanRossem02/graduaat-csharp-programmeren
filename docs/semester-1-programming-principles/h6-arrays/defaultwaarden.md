# Defaultwaarden

Standaard weigert de compiler het gebruik van variabelen die niet geïnitaliseerd zijn. Probeer volgende code maar eens in een testprogramma:

```csharp
string naam;
Console.WriteLine(naam);
```

Je krijgt een foutmelding en je programma voert niet uit. Lees de tekst van de foutmelding. Er wordt uitgelegd dat je `naam` probeert te gebruiken zonder er een waarde aan te geven. Een variabele moet dus geïnitialiseerd zijn.

We hebben eerder gezien dat elementen van een array ongeveer gebruikt kunnen worden als variabelen, bijvoorbeeld:

```csharp
int[] getallen = new int[10];
getallen[0] = 5;
```

Maar hier is een aandachtspuntje: `getallen[1]`, `getallen[2]`, enzovoort zijn nog steeds niet geïnitialiseerd. Anderzijds is de grotere structuur `getallen` wel geïnitialiseerd. Kunnen we ze dan wel al gebruiken?

Het antwoord is ja. De echte variabele `getallen` is geïnitialiseerd. Je kan dit uittesten en er zal meteen its opvallen:

```csharp
int[] getallen = new int[10];
getallen[0] = 5;
for (int i = 0; i < getallen.Length; i++) {
	// ToString heeft hier geen effect, maar we tonen verderop iets
	Console.WriteLine(getallen[i].ToString());
}
```

Alle niet-ingevulde getallen hebben een defaultwaarde gekregen, namelijk 0.

In het algemeen krijgen niet-geïnitialiseerde waarden een defaultwaarde. Welke waarde dat is, hangt af van hun type. Er bestaan verschillende categorieën van types die deze waarde vastleggen, maar voorlopig mag je het volgende onthouden:

| type(s)        | defaultwaarde |
| -------------- | ------------- |
| elk getaltype  | 0             |
| bool           | false         |
| string         | null          |
| elk type array | null          |
| Random         | null          |

`null` is een speciale waarde die eigenlijk betekent "er is geen waarde". Van een ontbrekende waarde kunnen we geen eigenschappen of methoden opvragen. Daarom crasht volgende code, die identiek gestructureerd is aan het vorige voorbeeld:

```csharp
string[] teksten = new string[10];
teksten[0] = "hallo wereld";
for (int i = 0; i < teksten.Length; i++) {
	Console.WriteLine(teksten[i].ToString());
}
```

Het probleem is dat we `null.ToString()` oproepen. Let dus op: je mag geen eigenschap of methode gebruiken door een punt achter een waarde te zetten die `null` bevat. Je kan hier op controleren met `is null`:

```csharp
string[] teksten = new string[10];
teksten[0] = "hallo wereld";
for (int i = 0; i < teksten.Length; i++) {
	if (!(teksten[i] is null)) {
	  Console.WriteLine(teksten[i].ToString());
	}
}
```