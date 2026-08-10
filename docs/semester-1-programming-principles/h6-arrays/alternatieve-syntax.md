# Alternatieve syntax

> ✅ [Kennisclip](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=bdc85a1e-7bf9-4137-864a-adcd00771f88)

De reeds besproken manier om arrays te maken is veelzijdig en toont alle aspecten, maar vraagt vrij veel schrijfwerk. Er zijn nog manieren om arrays aan te maken, maar deze veronderstellen dat je de array in één keer kan opvullen.

**Manier 1: met `new`**

Ook op deze manier moet je array gedeclareerd worden als volgt:

```csharp
type[] arraynaam; // type vervang je door het type in kwestie
```

Dit is hetzelfde als eerder. Je kan bijvoorbeeld volgende concrete code hebben:

```csharp
string[] items;
```

Nu kan je deze array meteen initialiseren op een andere manier dan eerder. Je kan kiezen de grootte niet in te vullen en de gebruikte waarden tussen accolades te zetten, bijvoorbeeld:

```csharp
string[] items;
items = new string[] {"brood", "koffie", "fruit", "thee", "yoghurt"};
```

Er staan vijf elementen tussen de accolades, dus de compiler kan achterhalen dat je een nieuwe array van vijf elementen wil maken, zonder dat je dat uitdrukkelijk zegt.

**Manier 2: verkorte declaratie en initialisatie**

Indien je direct waarden wilt toekennen (initialiseren) tijdens het aanmaken van de array zelf dan mag dit ook. We noemen dit de **array literal syntax**:

```csharp
string[] items = {"brood", "koffie", "fruit", "thee", "yoghurt"};
```

Hier zal je array dus een vaste lengte van 5 elementen hebben. Merk op dat deze manier dus enkel werkt indien je al weet hoe groot je array moet zijn voor je je programma opstart. De andere opties bieden in dat opzicht meer flexibiliteit ten koste van meer schrijfwerk.