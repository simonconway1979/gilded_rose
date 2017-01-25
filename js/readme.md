# Gilded Rose


## Introduction

This is a well known kata developed by Terry Hughes. This is commonly used as a tech test to assess a candidate's ability to read, refactor and extend legacy code.


## Instructions

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

Once the sell by date has passed, Quality degrades twice as fast
The Quality of an item is never negative
“Aged Brie” actually increases in Quality the older it gets
The Quality of an item is never more than 50
“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
We have recently signed a supplier of conjured items. This requires an update to our system:

“Conjured” items degrade in Quality twice as fast as normal items
Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."*


## Approach

1
The instructions tell me not to change the items function.
This is a simple function that sets three values for an item.
Then I should refactor the update_quality function to make additions and changes to rules easier.

2
Firstly I added Jasmine tests for the legacy code.
These tests check the output of the update_quality function.

e.g.

I add an item with known values.
I run the update_quality function.
The test checks that the values of the items is correct after running update_quality.

3
Then I refactored the update_quality function.
This is refactored so that I still get an input item with values and the values after my refactored code is run.

This means that my tests should still all pass when the refactored code is run.

4




## Installation

Clone this repo: https://github.com/simonconway1979/gilded_rose.git

Change the folder to js (Note: all files for this kata are included in the js folder as I completed it in JavaScript. I copied the rest in case I wanted to repeat this in other languages, but I have not completed these yet.)

Copy the full path for the SpecRunner.html file and paste this into a web browser. This will run the tests.

Open the console in the browser.
