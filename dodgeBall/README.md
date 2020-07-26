# DodgeBall

I created the Class Player to add attribute for person to it.

Then I created the class Teammate which extends the Player class by adding the teamName (red or blue).

Then I created global variables for the document "IDs" to reference the IDs in the index.html.

Then I created "li" and "buttons" after the List People button is clicked. This button is the Make Player button. I also added attributes from the person to tell the user the player they want to pick. Then the button is clicked and it removes the clicked user. 

The makePlayer function is ran, which first pushes the selected player to the listOfPlayers array. Then it list the user under Dodge Ball Player with a button for red team and blue team attached.

When either of the red and blue team button is clicked it removes the player from the Dodge Ball Player and pushes it to the specific team that was clicked. It also pushes the specific Player that was clicked to the specific team array(blueTeam || redTeam)

TEST

These test will test if a person is moved to the Player class and the listOfPlayer array. Then it will test if the player is selected for the redTeam. Then it will test if the player is selected for the blueTeam.

I want the user to be able to pick the players they want to play Dodgeball with. Then I want the user to choose which team each player should be on red or blue.