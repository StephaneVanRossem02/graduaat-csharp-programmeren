# Strings samenvoegen

> ✅ [Kennisclip voor deze inhoud](https://youtu.be/UXOdj_j0c6I)

## Strings samenvoegen

Je kan strings en variabelen samenvoegen tot een nieuwe string op verschillende manieren. We bekijken volgende twee mogelijkheden:

* `+`-operator
* `$` string interpolation

> ⚠️ Gebruik zelf stringinterpolatie tenzij het anders gevraagd wordt. Dit is bijna altijd de handigste manier. Online kom je nog (vooral oudere) code tegen die het anders doet, maar we geven deze bewust **niet** omdat stringinterpolatie bijna altijd het beste werkt.

### In dit hoofdstuk

We gaan van volgende informatie uit:

* Stel dat je 2 variabelen hebt `int age=13` en `string name="Finkelstein"`.
* We willen de inhoud van deze variabelen samenvoegen in een nieuwe `string result` die zal bestaan uit de tekst:

  `Ik ben Finkelstein en ik ben 13 jaar oud.`

Volgende 2 manieren tonen hoe je steeds tot voorgaande string zal komen.

## Manier 1: String samenvoegen met de `+`-operator

Als je de `+` tussen strings plaatst, krijgt deze operator een andere betekenis dan tussen getallen. De strings worden dan achter elkaar geplakt. Als iets geen string is en op deze manier wordt gebruikt, wordt eerst een tekstvoorstelling bepaald, zoals hieronder bij `age` (want dat is een `int`).

```csharp
string result = "Ik ben " + name + " en ik ben " + age + " jaar oud.";
```

Op het eerste zicht is dit een eenvoudige manier om strings op te bouwen, maar ze heeft een paar belangrijke nadelen:

* je moet vaak afwisselen tussen aanhalingstekens en plustekens
* het is lastig spaties en leestekens juist te noteren op deze manier (merk op dat de stukken tekst in het voorbeeld spaties op de zijkanten bevatten)
* er komt vrij veel extra werk bij kijken als je data in een specifiek formaat wil weergeven, bijvoorbeeld met een specifiek aantal cijfers na de komma
* als je grote, complexe strings op deze manier opbouwt, kost het erg veel rekentijd

> ℹ️ We geven deze manier van werken vooral mee omdat ze in héél veel programmeertalen bestaat en omdat ze simpel is. Ze is niet bijzonder *goed*.

## Manier 2: String interpolation met `$`

Via stringinterpolatie schrijf je je string min of meer zoals hij er uiteindelijk moet uitzien, maar vervang je de niet-letterlijke delen door geformatteerde waarden. Dit levert een goed leesbaar resultaat.

Door het `$`-teken **VOOR** de string te plaatsen geef je aan dat alle delen in de string die tussen accolades staan als code mogen beschouwd worden. Een voorbeeld maakt dit duidelijk:

```csharp
string result = $"Ik ben {name} en ik ben {age} jaar oud.";
```

In dit geval zal dus de inhoud van de variabele `name` tussen de string op de plek waar nu `{name}` staat geplaatst worden. Idem voor `age`. Dit mag, zelfs al is `age` geen string: hetgeen tussen de accolades staat, wordt altijd intern omgezet naar een string voor het in het resultaat wordt geplaatst.