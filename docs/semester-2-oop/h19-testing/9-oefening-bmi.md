# Oefening BMI

#### Controle op berekening BMI 

* Maak een nieuwe methode in de klasse `Calculator`: **`BMICalculator`**. Deze heeft 2 parameters en geeft het BMI in de vorm van een double (gewicht/lengte²).
* Maak in de klasse een `DataTestMethod`` `**`TestBMICorrect`** die dezelfde 2 parameters heeft. Voeg 3 `DataRows` toe met een gewicht en een lengte. Test de werking van de methode BMICalculator met de gepaste `Assert` methode.

#### Controle op beoordeling BMI

* Maak een `enum`` `**`BMICategory`** met de waarden: Underweight, HealthyWeight en Overweight
* Maak een nieuwe methode in de klasse `Calculator`: **`BMIRange`**. Deze heeft als parameter een bmi en geeft een `BMICategory` terug:\
  minder dan 18.5 : Underweight\
  van 18.5 tot minder dan 30: HealthyWeight\
  30 of meer: Overweight
* Maak 3 `TestMethodes` zonder parameter:\
  \- **`TestBMIUnderweight`**: deze test een BMI van 16\
  \- **`TestBMIHealtyWeight`**: deze test een BMI van 23\
  \- **`TestBMIOverweight`**: deze test een BMI van 32\
   