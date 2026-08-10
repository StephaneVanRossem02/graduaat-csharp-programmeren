# Datatypes

> ✅ [Kennisclip voor deze inhoud](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=c1597c7c-ef46-4129-b08f-adb10081ee25)

Een essentieel onderdeel van C# is kennis van datatypes. Een **datatype** is, zoals de naam het zegt, een soort waartoe bepaalde gegevens kunnen behoren. Wanneer je data wenst te bewaren in je applicatie dan zal je je moeten afvragen wat voor soort data het is. Gaat het om een getal, een geheel getal, een kommagetal, een stuk tekst of misschien een binaire reeks? Een variabele met een bepaald datatype kan een bepaald soort data bewaren en dit zal afhankelijk hiervan een bepaalde hoeveelheid computergeheugen vereisen.

Er zijn tal basistypes in C# gedeclareerd (zogenaamde **built-in datatypes**). Dit semester leren we werken met datatypes voor:

* Gehele getallen: `sbyte, byte, short, ushort, int, uint, long`
* Kommagetallen: `double, float, decimal`
* Tekst: `char, string`
* Booleans: `bool`

> ℹ️ Het datatype `string` heb je al in actie gezien in het vorig hoofdstuk. Je hebt toen al een variabele aangemaakt van het type string door de zin `string result;`.
> 
> Verderop koppelden we de naam `result` dan aan het resultaat van een actie, namelijk inlezen van tekst via `Console.ReadLine` (eerst wordt dat resultaat uitgerekend, dan pas wordt het aan de naam gekoppeld):
> 
> ```csharp
> result = Console.ReadLine();
> ```

## Basistypen voor getallen

C# heeft een hoop datatypes gedefinieerd om te werken met getallen zoals wij ze kennen, gehele en kommagetallen. Intern zullen deze getallen steeds binair bewaard worden, maar dat merken we zelden tijdens het programmeren.

De basistypen van C# om getallen in op te slaan zijn:

* Voor gehele getallen: `sbyte, byte, short, ushort, int, uint, long`
* Voor kommagetallen: `double, float, decimal`

Deze datatypes hebben allemaal een bepaald bereik, wat een rechtstreeks gevolg is van de hoeveelheid geheugen die ze innemen.

### Gehele getallen

Voor de gehele getallen:

| **Type** | **Geheugen** | **Bereik**                                               | **Meer info**                                                                             |
| -------- | ------------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `sbyte`  | 8 bits       | -128 tot 127                                             | [info](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sbyte)  |
| `byte`   | 8 bits       | 0 tot 255                                                | [info](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/byte)   |
| `short`  | 16 bits      | -32768 tot 32767                                         | [info](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/short)  |
| `ushort` | 16 bits      | 0 tot 65535                                              | [info](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/ushort) |
| `int`    | 32 bits      | -2 147 483 648 tot 2 147 483 647                         | [info](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int)    |
| `uint`   | 32 bits      | 0 tot 4294967295                                         | [info](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/uint)   |
| `long`   | 64 bits      | -9 223 372 036 854 775 808 tot 9 223 372 036 854 775 807 | [info](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/long)   |
| `ulong`  | 64 bits      | 0 tot 18 446 744 073 709 551 615                         | [info](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/ulong)  |
| `char`   | 16 bits      | 0 tot 65535                                              | [info](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/char)   |

Enkele opmerkingen bij deze tabel:

* De `s` vooraan `sbyte` types staat voor `signed`: m.a.w. 1 bit wordt gebruikt om het + of - teken te bewaren.
* De `u` vooraan `ushort`, `uint` en `ulong` staat voor `unsigned`. Het omgekeerde van signed dus. Kwestie van het ingewikkeld te maken. Deze twee datatypes hebben dus geen teken en zijn **altijd positief**.
* `char` heeft dezelfde kenmerken als `ushort`, maar dient voor iets anders. `ushort` gebruik je echt om getallen binnen dat bereik voor te stellen. `char` bewaart karakters, d.w\.z. symbolen zoals letters. Een beetje vereenvoudigd kan je stellen dat er een tabel is waarin elk symbool gekoppeld is aan een getal, zodat een reeks nulletjes en eentjes ook een letter kan voorstellen.

### Kommagetallen

Voor de kommagetallen zijn er maar 3 mogelijkeden. Ieder datatype heeft een voordeel tegenover de 2 andere, dit voordeel staat vet in de tabel:

| **Type**  | **Geheugen** | **Bereik**                                                          | **Precisie**        |                                                                                            |
| --------- | ------------ | ------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| `float`   | **32 bits**  | ±1.5 × 10⁻⁴⁵ to ±3.4 × 10³⁸          | 6 to 9 digits       | [info](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/float)   |
| `double`  | 64 bits      | **±5.0 × 10⁻³²⁴ to ±1.7 × 10³⁰⁸**   | 15 to 17 digits     | [info](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/double)  |
| `decimal` | 128 bits     | ±1.0 × 10⁻²⁸ to ±7.9228 × 10²⁸       | **28 to 29 digits** | [info](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/decimal) |

Zoals je ziet moet je bij kommagetallen een afweging maken tussen 3 even belangrijke criteria. Heb je zeer grote precisie (veel cijfers na de komma) nodig, dan ga je voor een `decimal`. Wil je vooral erg grote of erg kleine getallen (met meer kans op afrondingen), dan kies je voor `double`.

> ℹ️ Bij twijfel opteren we meestal voor kommagetallen om het **`double`** datatype te gebruiken. Bij gehele getallen kiezen we meestal voor **`int`**.

## Boolean datatype

Het `bool` (**boolean**) is het eenvoudigste datatype van C#. Het kan maar 2 mogelijke waarden bevatten: `true` of `false`. 1 of 0 met andere woorden. In het Nederlands meestal uitgedrukt als "waar" en "niet waar".

We zullen het `bool` datatype erg veel nodig hebben wanneer we met [beslissingen](/programmeren/semester-1-programming-principles/h4-beslissingen/0_beslissingen_intro.md) zullen werken, specifiek de [if statements](/programmeren/semester-1-programming-principles/h4-beslissingen/0_if.md) die afhankelijk van de uitslag van een `bool` bepaalde code wel of niet zullen doen uitvoeren.

## Tekst/String datatype

We besteden verderop een heel apart hoofdstuk aan tonen hoe je tekst en enkele karakters kan bewaren in variabelen. De basis:

* Tekst kan bewaard worden in het `string` datatype
  * Letterlijke tekst schrijf je tussen dubbele quotes, bijvoorbeeld `"Hallo Wereld!"`
* Een enkel karakter wordt bewaard in het `char` datatype, dat we ook hierboven al even hebben zien passeren.
  * Letterlijke karakter schrijf je tussen enkele quotes, bijvoorbeeld `'à'`

Meer info vind je later in [dit hoofdstuk](/programmeren/semester-1-programming-principles/h2-tekst-in-code/5_chars_strings.md).