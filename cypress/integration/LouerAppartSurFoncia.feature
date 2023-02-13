Feature: Tester la location d'un appartement sur fr.foncia.com
    Scenario: Tester la possibilité de louer un appartement avec un loyer max en euros
    Given je suis sur le site foncia
    Then je vois bien la popin alert au fraud et je la valide
    And je vérifier que le titre de la page est À vos côtés, en ligne et dans votre quartier
    When je cherche un loyer avec le montant Max
    |maxBudget|location|
    |1500|PARIS|
    Then je vérifier que toutes les annonces sont dans la localisation recherché
    |location|
    |PARIS|
    And je vérifier que toutes les annonces ont un montant moins de montant Max choisi
    |location|
    |1500|
