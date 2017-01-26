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


## Installation

Clone this repo: https://github.com/simonconway1979/gilded_rose.git

Change the folder to js (Note: all files for this kata are included in the js folder as I completed it in JavaScript. I copied the rest in case I wanted to repeat this in other languages, but I have not completed these yet.)

Copy the full path for the SpecRunner.html file and paste this into a web browser. This will run the tests.

Open the console in the browser.

Commands:

View items:
$ items
(Then expand the tree to see the item.name, item.sell_in and item.quality)

Add item:
new Item("Name", sell_in, quality);
(This will add a new item to the array)

Update items: update.runUpdate();
(This will update the sell_in and quality values. You can then view the items again to see the results)


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

a)
To refactor I kept the code in one function called Update and made several prototypes for this function. To me this made sense as the function updates the items.

b)
I created some generic function prototypes that applied to many or all of the items:

updateSell_in
(This applies to all items except Sulfuras)

updateQuality
(This is a function that adjusts the quality at the end of the process so that if it falls outside of the maximum and minimum values it is reset to the maximum value of 50 or minimum value of 0)

c)
I refactored prototypes for each exception:

brie
sufuras
backstagePass

These functions have the individual rules for changing quality when update is run.

Note
I have kept these functions relating to the individual items. This is because there was not enough items to see the underlying patterns to the rules.

E.g.

Brie increases in quality as time passes.
There could be similar items that have a similar rule.
In this case it might make sense to have a function for items with an increasing quality measure.
But until I have enough items that fit this pattern to see the rule, it doesn't make sense to me to extract rules as they will no doubt change as soon as more items have been added.

d)
I added prototype for standard items.
This runs rules on all items that are not Non Standard Items.

e)
I extracted nonStandardItems into an array.
This allows more nonStandardItems to be added simply and clearly outlines items with an exception.
I updated the standardItems prototype to reference the list of nonStandardItems for making exclusions.



## Possible further refactoring

1
I could extract the items into an items class.
This could contain an array with items in it.

This feels like it belongs in a separate class, but at the moment it only would include an array and very few tests.

2
I could separate generic rules into a separate function from item specific rules.

E.g.

updateSell_in
updateQuality

This could guide other developers to the idea that as more items are added, and we can identify generic patterns, we can extract generic rules into the generic rules class.



## Original intro from forked git repository

This Kata was originally created by Terry Hughes (http://twitter.com/#!/TerryHughes). It is already on GitHub [here](https://github.com/NotMyself/GildedRose). See also [Bobby Johnson's description of the kata](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/).

I translated the original C# into a few other languages, (with a little help from my friends!), and slightly changed the starting position. This means I've actually done a small amount of refactoring already compared with the original form of the kata, and made it easier to get going with writing tests by giving you one failing unit test to start with. I also added test fixtures for Text-Based approval testing with TextTest (see [the TextTests](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/master/texttests))

As Bobby Johnson points out in his article ["Why Most Solutions to Gilded Rose Miss The Bigger Picture"](http://iamnotmyself.com/2012/12/07/why-most-solutions-to-gilded-rose-miss-the-bigger-picture), it'll actually give you
better practice at handling a legacy code situation if you do this Kata in the original C#. However, I think this kata
is also really useful for practicing writing good tests using different frameworks and approaches, and the small changes I've made help with that. I think it's also interesting to compare what the refactored code and tests look like in different programming languages.

I wrote this article ["Writing Good Tests for the Gilded Rose Kata"](http://coding-is-like-cooking.info/2013/03/writing-good-tests-for-the-gilded-rose-kata/) about how you could use this kata in a [coding dojo](https://leanpub.com/codingdojohandbook).

## How to use this Kata

The simplest way is to just clone the code and start hacking away improving the design. You'll want to look at the ["Gilded Rose Requirements"](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/master/GildedRoseRequirements.txt) which explains what the code is for. I strongly advise you that you'll also need some tests if you want to make sure you don't break the code while you refactor.

You could write some unit tests yourself, using the requirements to identify suitable test cases. I've provided a failing unit test in a popular test framework as a starting point for most languages.

Alternatively, use the "Text-Based" tests provided in this repository. (Read more about that in the next section)

Whichever testing approach you choose, the idea of the exercise is to do some deliberate practice, and improve your skills at designing test cases and refactoring. The idea is not to re-write the code from scratch, but rather to practice designing tests, taking small steps, running the tests often, and incrementally improving the design.

## Text-Based Approval Testing

This is a testing approach which is very useful when refactoring legacy code. Before you change the code, you run it, and gather the output of the code as a plain text file. You review the text, and if it correctly describes the behaviour as you understand it, you can "approve" it, and save it as a "Golden Master". Then after you change the code, you run it again, and compare the new output against the Golden Master. Any differences, and the test fails.

It's basically the same idea as "assertEquals(expected, actual)" in a unit test, except the text you are comparing is typically much longer, and the "expected" value is saved from actual output, rather than being defined in advance.

Typically a piece of legacy code may not produce suitable textual output from the start, so you may need to modify it before you can write your first text-based approval test. That could involve inserting log statements into the code, or just writing a "main" method that executes the code and prints out what the result is afterwards. It's this latter approach we are using here to test GildedRose.

The Text-Based tests in this repository are designed to be used with the tool "TextTest" (http://texttest.org). This tool helps you to organize and run text-based tests. There is more information in the README file in the "texttests" subdirectory.

## Get going quickly using Cyber-Dojo

I've also set this kata up on [cyber-dojo](http://cyber-dojo.org) for several languages, so you can get going really quickly:

- [JUnit, Java](http://cyber-dojo.org/forker/fork/751DD02C4C?avatar=snake&tag=4)
- [C#](http://cyber-dojo.org/forker/fork/5C5AC766B0?avatar=koala&tag=1)
- [C++](http://cyber-dojo.org/forker/fork/AA86ECBCC9?avatar=rhino&tag=7)
- [Ruby](http://cyber-dojo.org/forker/fork/A8943EAF92?avatar=hippo&tag=9)
- [RSpec, Ruby](http://cyber-dojo.org/forker/fork/8E58B0AD16?avatar=raccoon&tag=3)
- [Python](http://cyber-dojo.org/forker/fork/297041AA7A?avatar=lion&tag=4)
- [Cucumber, Java](http://cyber-dojo.org/forker/fork/0F82D4BA89?avatar=gorilla&tag=45) - for this one I've also written some step definitions for you
