# nullable value types

## Betekenis van null

Normaal gezien kom je `null` tegen wanneer je een variabele van een reference type hebt zonder verwijzing naar data. Het gevolg is dat `null` vaak betekent dat er een waarde zou kunnen staan, maar in de huidige situatie geen geldige waarde is.

Hoewel value types niet werken met verwijzingen, zou dezelfde interpretatie ook bij value types zinvol kunnen zijn: soms heb je gewoonweg geen geldige waarde. Daarom kent C# ook **nullable value types**. Dit zijn speciale value types die ook de waarde `null` kunnen aannemen (ook al kom je die laatste anders vooral tegen bij reference types).

Je noteert een nullable value type als een gewoon value type, gevolgd door een vraagteken. Indien je in code bijvoorbeeld een getalwaarde wil voorstellen als een variabele `int mijnVariabele`, maar de mogelijkheid bestaat dat er geen waarde is voor `mijnVariabele`, declareer je als volgt: `int? mijnVariabele`. Dit betekent: "`mijnVariabele` is een getal, maar kan ontbreken."

Dit heeft gevolgen. Je kan code die een value type verwacht niet zomaar gebruiken met een nullable versie van hetzelfde type. Anders gezegd: je mag `mijnVariabele` niet meegeven aan een methode die een gewone `int` verwacht. Je moet ofwel deze methode aanpassen zodat ze een `int?` verwacht, ofwel moet je `mijnVariabele` casten voor je hem meegeeft als argument. Let op: dit werkt alleen als `mijnVariabele` niet `null` is!

## Operaties met `null`

Voor de nullable versies van de value types die je al kent, kan je gekende operaties (zoals `+`, `-`, ... voor getallen) blijven gebruiken, maar je moet opletten. Een berekening met `null` in levert je sowieso `null` op als resultaat. Een vergelijking (via `<=`, `<`, `>`, `>=`) met `null` levert je sowieso `false` op als resultaat.

## H13\_1 SchoolAdmin nullable Resultaat

Tot nu kan een student zich enkel inschrijven voor een cursus als er een cursusresultaat is. We gaan ervoor zorgen dat null kan ingegeven worden als resultaat.

Hernoem eerst de klasse `CourseResult`naar de meer geschikte naam  `CourseRegistration`(verander de naam van het bestand en antwoord 'yes' op de vraag om in heel het project de naam te wijzigen).

![](/img/img-3276.png)


Doe ook een Rename van de list `courseResults`naar `courseRegistrations` in de klasse `Student`.

![](/img/img-3277.png)


Geef in de methode `DemoStudents`, null in als resultaat bij student said voor Programmeren.

![](/img/img-3278.png)


Je ziet dat er een byte verwacht wordt. Ga naar de definitie van de methode `RegisterCourseResult`en verander `byte` in **`byte?`** .

![](/img/img-3279.png)


Er komt nu een foutmelding bij het maken van de instantie van een `CourseRegistration`. Ga naar de definitie van de constructor van `CourseRegistration`en maak de parameter result **`byte?`** .

![](/img/img-3280.png)


Nu geeft de property `Result`problemen. Maak daarop `Result` nullable. Indien value null is, geeft de vergelijking problemen. Voeg een extra controle toe.

![](/img/img-3281.png)


Als je de toepassing uitvoert, komt er een foutmelding van de methode `Average`uit `Student`. Een nullable byte moet je expliciet converteren naar een double. Om zeker te zijn dat bij de optelling `Result` geen null is, voeg je nog een controle toe.

![](/img/img-3282.png)


Als je de toepassing nog eens uitvoert, zie je dat het gemiddelde verkeerd berekend wordt. Doe de nodige aanpassingen om een correct gemiddelde te verkrijgen.

![](/img/img-3283.png)


#### Voorbeeldinteractie

![](/img/img-3284.png)