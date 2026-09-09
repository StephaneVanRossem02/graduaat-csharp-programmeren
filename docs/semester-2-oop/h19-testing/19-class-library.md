# Class Library

In de filmpjes van TDD wordt er gebruik gemaakt van een Class Library. Dit is een soort project dat je ook kan toevoegen in Visual Studio, net zoals Console App of MSTest Test Project.

![](/img/img-3228.png)


Als je dit project `PopularClasses` noemt dan krijg je dit te zien.

![](/img/img-3229.png)


```csharp
namespace PopularClasses
{
    public class Class1
    {

    }
}
```

Het zal direct opvallen dat er geen `Program.Main` is. Dit komt omdat een Class Library enkel klassen (en interfaces etc) bevat, maar geen eigen werking naar een console, website of iets anders. Waarom gebruik je ze dan? Je kan hier klassen zetten die je veel gebruikt. Hierna kan je de Class Library koppelen aan andere projecten om toch de klassen binnenin te gebruiken. We hernoemen (rename) Class1 naar `Person` en voegen een property `FirstName` en constructor toe.

Zo kan je in onderstaand voorbeeld `PopularClasses` (Class Library) koppelen (net zoals aan een Test Project) aan `PopularClassesApplication` (Console Application). Je kan daar dan klasse Person gebruiken. Heb je nog een Project dat `Person` wil gebruiken? Dan kan je eenvoudig ook naar daar een dependencie maken.

![](/img/img-3230.png)


```csharp
namespace PopularClasses //in het Class Library-project
{
    public class Person
    {
        private string firstName;

        public string FirstName
        {
            get { return firstName; }
            set { firstName = value; }
        }

        public Person(string firstName)
        {
            FirstName = firstName;
        }
    }
}
```

Let erop dat de klasse Person public moet zijn. [Weet je nog waarom](./5-voorbeeld-sum.md)? 

```csharp
using PopularClasses; //<-- belangrijk!

namespace PopularClassesApplication //in het Console App-project
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person("John");
        }
    }
}
```

:::info
Je wil meestal geen Console.WriteLine()'s etc gebruiken in Class Libraries omdat je niet zeker bent dat je je Library gaat koppelen aan een ConsoleApplicatie. Je kan dit ook rechtstreeks koppelen aan een TestProject of aan WPF Project(grafische UI applicatie). In beide zit geen Console dus zou je een foutmelding krijgen als je Console wil aanroepen.
:::