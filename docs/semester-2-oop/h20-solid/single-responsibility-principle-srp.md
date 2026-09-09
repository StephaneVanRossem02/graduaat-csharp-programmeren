---
draft: true
---
# Single Responsibility Principle (SRP)

Het Single Responsibility Principle (SRP) stelt dat een klasse slechts één enkele verantwoordelijkheid zou moeten hebben. Met andere woorden, een klasse zou slechts één specifieke taak of verantwoordelijkheid moeten hebben, en als er meerdere verantwoordelijkheden zijn, zouden die verantwoordelijkheden in afzonderlijke klassen moeten worden ondergebracht. Dit helpt om de code overzichtelijker, onderhoudbaarder en flexibeler te maken.

Laten we het SRP illustreren aan de hand van een eenvoudig voorbeeld in C#. Stel je voor dat we een klasse hebben die verantwoordelijk is voor het beheren van zowel de gegevens van een werknemer als het genereren van rapporten. Dit zou een schending van het SRP zijn, omdat het twee verschillende verantwoordelijkheden zijn.

Hier is een voorbeeld van een klasse die het SRP schendt:

```csharp
public class EmployeeManager
{
    public void SaveEmployeeData(Employee employee)
    {
        // Code om werknemersgegevens op te slaan in de database
    }

    public void GenerateReport(Employee employee)
    {
        // Code om een rapport te genereren op basis van werknemersgegevens
    }
}
```

Om het SRP toe te passen, zouden we de verantwoordelijkheden moeten opsplitsen in afzonderlijke klassen. Eén klasse zou zich moeten richten op het beheren van werknemersgegevens, terwijl een andere klasse zich zou moeten richten op het genereren van rapporten.

```csharp
public class Employee
{
    // Properties en methoden voor werknemersgegevens
}

public class EmployeeDataAccess
{
    public void SaveEmployeeData(Employee employee)
    {
        // Code om werknemersgegevens op te slaan in de database
    }
}

public class ReportGenerator
{
    public void GenerateReport(Employee employee)
    {
        // Code om een rapport te genereren op basis van werknemersgegevens
    }
}
```

Door de verantwoordelijkheden te scheiden, kunnen we elke klasse nu afzonderlijk aanpassen zonder het risico dat we per ongeluk de functionaliteit van de andere verstoren. Dit leidt tot een betere organisatie van de code en maakt het gemakkelijker om wijzigingen door te voeren zonder onverwachte bijwerkingen.