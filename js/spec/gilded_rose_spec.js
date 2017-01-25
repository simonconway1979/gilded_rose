describe("Guilded rose", function() {

  describe("Updating Standard Item", function() {

    it("On update, it should reduce a standard items sell in by 1 and quality by 1", function() {
      items = [ new Item("Standard", 10, 10) ];
      update = new Update()
      update.standardItem();
      expect(items[0].name).toEqual("Standard");
      expect(items[0].sell_in).toEqual(9);
      expect(items[0].quality).toEqual(9);
      debugger;
    });

    it("when quality is updated and quality is 0, sell in reduces by -1 and quality remains at 0", function() {
      items = [ new Item("Standard", 0, 0) ];
      update_quality();
      expect(items[0].name).toEqual("Standard");
      expect(items[0].sell_in).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    });

    it("when sell in date is negative, sell in reduces by -1 and quality remains at -2", function() {
      items = [ new Item("Standard", -1, 10) ];
      update_quality();
      expect(items[0].name).toEqual("Standard");
      expect(items[0].sell_in).toEqual(-2);
      expect(items[0].quality).toEqual(8);
    });

  });


  describe("Updating Brie", function() {

    it("Update reduces brie sell in by 1 and increases quality by 1", function() {
      items = [ new Item("Aged Brie", 10, 10) ];
      update_quality();
      expect(items[0].name).toEqual("Aged Brie");
      expect(items[0].sell_in).toEqual(9);
      expect(items[0].quality).toEqual(11);
    });

    it("when quality is at 50, update will reduce sell in by -1 and quality remains at 50", function() {
      items = [ new Item("Aged Brie", 10, 50) ];
      update_quality();
      expect(items[0].name).toEqual("Aged Brie");
      expect(items[0].sell_in).toEqual(9);
      expect(items[0].quality).toEqual(50);
    });

    it("when sell in is negative, update reduces sell in by 1 and increases quality by 2", function() {
      items = [ new Item("Aged Brie", -1, 10) ];
      update_quality();
      expect(items[0].name).toEqual("Aged Brie");
      expect(items[0].sell_in).toEqual(-2);
      expect(items[0].quality).toEqual(12);
    });
  });

  describe("Updating Sulfuras, Hand of Ragnaros", function() {

    it("For Sufuras, update does not change the sell in or quality value", function() {
      items = [ new Item("Sulfuras, Hand of Ragnaros", 10, 10) ];
      update_quality();
      expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
      expect(items[0].sell_in).toEqual(10);
      expect(items[0].quality).toEqual(10);
    });

    it("For Sufuras, update does not change the sell in or quality value, even when negative", function() {
      items = [ new Item("Sulfuras, Hand of Ragnaros", -10, -10) ];
      update_quality();
      expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
      expect(items[0].sell_in).toEqual(-10);
      expect(items[0].quality).toEqual(-10);
    });
  });

  describe("Updating Back Stage Passes", function() {

    it("For Back Stage Passes, when sell in > 10, reduces sell in by 1 and quality value increases by 1", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 12, 10) ];
      update_quality();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sell_in).toEqual(11);
      expect(items[0].quality).toEqual(11);
    });

    it("For Back Stage Passes, when sell in between 5 and 10, reduces sell in by 1 and quality value increases by 2", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 8, 10) ];
      update_quality();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sell_in).toEqual(7);
      expect(items[0].quality).toEqual(12);
    });


    it("For Back Stage Passes, the quality cannot go beyond 50", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 8, 49) ];
      update_quality();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sell_in).toEqual(7);
      expect(items[0].quality).toEqual(50);
    });

    it("For Back Stage Passes, when sell in between 0 and 5, reduces sell in by 1 and quality value increases by 3", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 3, 10) ];
      update_quality();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sell_in).toEqual(2);
      expect(items[0].quality).toEqual(13);
    });

    it("For Back Stage Passes, when sell in hits 0, the quality value is set to 0", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10) ];
      update_quality();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sell_in).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    });

    it("For Back Stage Passes, when sell in is negative, the quality value is set to 0", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", -5, 10) ];
      update_quality();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sell_in).toEqual(-6);
      expect(items[0].quality).toEqual(0);
    });

  });


});
