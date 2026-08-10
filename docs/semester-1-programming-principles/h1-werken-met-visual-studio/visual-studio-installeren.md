# Visual Studio en .NET Core installeren

Met een editor, zoals Visual Studio, krijgen we ondersteuning bij het schrijven van de code die we later zullen uitvoeren. Een editor vergemakkelijkt dus het schrijven van een specifiek soort tekst.

De "SDK" (software development toolkit) bevat alles wat je nodig hebt om de code daadwerkelijk uitvoerbaar te maken.

## Installatie

### Visual Studio 2026 Community

1. https://visualstudio.microsoft.com/downloads/
2. Kies voor de "community" versie<br/>

![](/img/img-3016.png)


1. Het installatiescherm ziet er als volgt uit, in de volgende punten wordt beschreven welke elementen je specifiek moet aanduiden.

![](/img/img-3017.png)


## Intellicode moet uitgeschakeld zijn !.

* Kies bij de installatie voor **.NET desktop development**\
  ![](/img/img-3018.png)
* Bij de *installation details* kies je voor volgende elementen\
  ![](/img/img-3019.png)
* In het tabblad *individual components* klik je **.NET 8.0 Runtime** en **.NET 10.0 Runtime** aan.<br/>

  ![](/img/img-3020.png)


1. Vervolgens kies je rechts onderaan voor de knop **Install**
2. Log in met jouw account van de hogeschool, nl. **`s-nummer@ap.be`**\
   ![](/img/img-3021.png)

## Eerste gebruik Visual Studio

1. Kies voor **Create New Project**\\

   ![](/img/img-3022.png)

2. Vervolgens selecteer je **Console App**

   ![](/img/img-3023.png)

3. Je geeft je project een goede naam, hieronder dien je de **Project name** dan aan te passen en je zal zien dat de **Solution name** automatisch mee wordt gewijzigd.\
   Denk er ook aan om je project op de juiste plaats op te slaan door de **Location** te wijzigen.

   ![](/img/img-3024.png)

4. In de volgende stap kies je voor **Framework** .NET 8.0 en vink je de optie "Do not use top-level statements" **aan**.<br/>

   ![](/img/img-3025.png)


Nadat je je project hebt aangemaakt, rechterklik je op je project in de Solution Explorer -> Properties -> Global Usings -> General en schakel je "Implicit global usings" **uit**.<br/>

![](/img/img-3026.png)


## Code Snippet

Hierbij ga je ervoor zorgen dat je met afkortingen kan coderen die dan automatisch in het goede formaat worden omgezet.

Bv. **cr** (gevolgd door twee TABs) \*\*\*\* wordt dan **Console.ReadLine()**

Je kan volgende code kopiëren in een tekstbestand met als extensie .snippet of je kan het hieronder downloaden.



```csharp
<?xml version="1.0" encoding="utf-8" ?>
<CodeSnippets xmlns="http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet">
 <CodeSnippet Format="1.0.0">
 <Header>
 <Title>cr</Title>
 <Shortcut>cr</Shortcut>
 <Description>Code snippet for Console.ReadLine</Description>
 <Author>Community</Author>
 <SnippetTypes>
 <SnippetType>Expansion</SnippetType>
 </SnippetTypes>
 </Header>
 <Snippet>
 <Declarations>
 <Literal Editable="false">
 <ID>SystemConsole</ID>
 <Function>SimpleTypeName(global::System.Console)</Function>
 </Literal>
 </Declarations>
 <Code Language="csharp">
 <![CDATA[$SystemConsole$.ReadLine();$end$]]>
 </Code>
 </Snippet>
 </CodeSnippet>
</CodeSnippets>

```

Vervolgens dien je binnen Visual Studio in het menu Tools naar Code Snippets Manager gaan.

Je kiest voor Language CSharp en klikt op de knop Import.

![](/img/img-0025.png)

Je kiest het snippet bestand en voegt dit toe.