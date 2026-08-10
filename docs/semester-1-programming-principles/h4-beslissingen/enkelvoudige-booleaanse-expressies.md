# Enkelvoudige booleaanse expressies

> ✅ [Kennisclip](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=f8e00e11-9d99-48be-a670-adbe0076d68b)

## Relationele operators

Om beslissingen te kunnen nemen in C# moeten we kunnen nagaan of een bepaalde uitspraak waar of niet waar is. Anders gezegd: we moeten stukjes code kunnen schrijven waarvan we achteraf kunnen zeggen of ze "waar" of "niet waar" zijn. Zo'n stukjes code noemen we **booleaanse expressies**. De meest typische booleaanse expressies schrijf je met de **relationele operatoren**. Deze stellen vergelijkingen tussen stukjes data voor. Gelukkig ken je deze al uit het lager onderwijs en moet je alleen de notatie hieronder leren:

| C#-syntax | Betekenis                 |
| --------- | ------------------------- |
| `>`       | groter dan                |
| `<`       | kleiner dan               |
| `==`      | gelijk aan                |
| `!=`      | niet gelijk aan           |
| `<=`      | kleiner dan of gelijk aan |
| `>=`      | groter dan of gelijk aan  |

> ⚠️ "Gelijk aan" noteren we met twee symbolen, omdat één symbool gebruikt wordt voor een toekenning.

Deze operatoren leveren je altijd één van twee mogelijkheden als uitkomst: `true` of `false`. Je kan dit ook uittesten: `Console.WriteLine(4 < 7);` of `Console.WriteLine(4 < 2);` toont je het verwachte resultaat.

Er bestaan nog simpelere booleaanse expressies dan die met de relationele operatoren: `true` en `false` zelf zijn hun eigen resultaat en zijn dus technisch gesproken ook booleaanse expressies. Je mag dus bv. ook `true` schrijven in plaats van `4 > 2`.