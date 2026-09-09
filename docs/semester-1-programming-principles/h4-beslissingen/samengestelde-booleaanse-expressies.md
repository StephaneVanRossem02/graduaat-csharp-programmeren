# Samengestelde booleaanse expressies

:::tip
[Kennisclip 1](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=1e36fa54-2062-4955-93e8-adbe00e6481c)
:::

:::tip
[Kennisclip 2](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=bb631bd5-c504-4c3e-9a56-adbe00e64818)
:::

## Logische operatoren

De logische EN, OF en NIET-operatoren die je misschien kent uit de lessen technologie of elektronica kan je ook gebruiken in C#:

| C#-syntax | Betekenis     |
| --------- | ------------- |
| `&&`      | en-operator   |
| `\|\|`    | of-operator   |
| `!`       | niet-operator |

Je kan de `&&`-operator tussen twee booleaanse expressies zetten om een nieuwe, grote expressie te schrijven die afhangt van de kleinere expressies aan beide kanten. Idem voor de `||`-operator. Je kan de niet-operator voor een booleaanse expressie zetten om het resultaat hiervan om te draaien. Bijvoorbeeld:

```csharp
!(0==2)  //zal true geven
```

Hieronder krijg je nog eens het overzicht van de werking van de AND en OR operatoren:

| AND       | niet waar | waar      |
| --------- | --------- | --------- |
| niet waar | niet waar | niet waar |
| waar      | niet waar | waar      |

| OR        | niet waar | waar |
| --------- | --------- | ---- |
| niet waar | niet waar | waar |
| waar      | waar      | waar |

## Test jezelf

Wat zal de uitkomst zijn van volgende expressies? (tip: het zal steeds `true` of `false` zijn, niets anders)

* `3>2`
* `4!=4`
* `4<5 && 4<3`
* `"a"=="a" || 4>=3`
* `(3==3 && 2<1) || 5!=4`
* `!(4<=3)`
* `true || false`
* `!true && false`

## Booleaanse expressies algemeen

Je bent niet beperkt tot het gebruik van expressies met één relationele operator in de voorwaarde van een if. Je mag om het even welk type booleaanse expressie gebruiken. Anders gezegd: als het gedeelte tussen haakjes uiteindelijk maar true of false oplevert, is het goed. We kunnen dus ook gebruik maken van de logische operatoren &&, ||, ! in onze voorwaarden.

Goed gebruik van booleaanse expressies kan onze programma's drastisch vereenvoudigen. We tonen dit met een voorbeeld.

Volgend programma bepaalt of je korting krijgt op het openbaar vervoer. Volg zelf de flowchart om de logica te snappen:

![](/img/img-3090.png)

Maar we kunnen dit eenvoudiger zo schrijven:

![](/img/img-3091.png)

Deze code zegt dat je korting krijgt als je jonger bent dan 18 **of** als je ouder bent dan 65. Ze doet hetzelfde als de eerste versie, maar het diagram is eenvoudiger en de gegenereerde code is dat ook. Ook via de andere operatoren `&&` en `!` kan je gelijkaardige vereenvoudigingen verkrijgen.