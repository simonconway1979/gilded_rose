describe("Guilded rose", function() {

  describe("Updating Standard Item", function() {

    it("On update, it should reduce a standard items sell in by 1 and quality by 1", function() {
      items = [ new Item("Standard", 10, 10) ];
      update = new Update()
      update.standardItem();
      expect(items[0].name).toEqual("Standard");
      expect(items[0].sell_in).toEqual(9);
      expect(items[0].quality).toEqual(9);
    });

    it("when sell in date is negative, sell in reduces by -1 and quality remains at -2", function() {
      items = [ new Item("Standard", -1, 10) ];
      update = new Update()
      update.standardItem();
      expect(items[0].name).toEqual("Standard");
      expect(items[0].sell_in).toEqual(-2);
      expect(items[0].quality).toEqual(8);
    });

  });


  describe ('Update quality should set quality to within the allowed range (0-50)', function () {

    it("when quality is negative, the updateQuality method resets to 0", function() {
      items = [ new Item("Standard", 0, -1)];
      update = new Update()
      update.updateQuality();
      expect(items[0].name).toEqual("Standard");
      expect(items[0].sell_in).toEqual(0);
      expect(items[0].quality).toEqual(0);
    });

    it("when quality is over 50, the updateQuality method resets to 50", function() {
      items = [ new Item("Standard", 0, 51)];
      update = new Update()
      update.updateQuality();
      expect(items[0].name).toEqual("Standard");
      expect(items[0].sell_in).toEqual(0);
      expect(items[0].quality).toEqual(50);
    });
  });


  describe("Updating Brie", function() {

    it("Update reduces brie sell in by 1 and increases quality by 1", function() {
      items = [ new Item("Aged brie", 10, 10) ];
      update.brie();
      expect(items[0].name).toEqual("Aged brie");
      expect(items[0].sell_in).toEqual(9);
      expect(items[0].quality).toEqual(11);
    });

    it("when sell in is negative, update reduces sell in by 1 and increases quality by 2", function() {
      items = [ new Item("Aged brie", -1, 10) ];
      update.brie();
      expect(items[0].name).toEqual("Aged brie");
      expect(items[0].sell_in).toEqual(-2);
      expect(items[0].quality).toEqual(12);
    });
  });

  describe("Updating Sulfuras, Hand of Ragnaros", function() {

    it("For Sufuras, update does not change the sell in or quality value", function() {
      items = [ new Item("Sulfuras, Hand of Ragnaros", 10, 10) ];
      update.sulfuras();
      expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
      expect(items[0].sell_in).toEqual(10);
      expect(items[0].quality).toEqual(10);
    });

    it("For Sufuras, update does not change the sell in or quality value, even when negative", function() {
      items = [ new Item("Sulfuras, Hand of Ragnaros", -10, -10) ];
      update.sulfuras();
      expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
      expect(items[0].sell_in).toEqual(-10);
      expect(items[0].quality).toEqual(-10);
    });
  });

  describe("Updating Back Stage Passes", function() {

    it("For Back Stage Passes, when sell in > 10, reduces sell in by 1 and quality value increases by 1", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 12, 10) ];
      update.backstagePass();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sell_in).toEqual(11);
      expect(items[0].quality).toEqual(11);
    });

    it("For Back Stage Passes, when sell in between 5 and 10, reduces sell in by 1 and quality value increases by 2", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 8, 10) ];
      update.backstagePass();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sell_in).toEqual(7);
      expect(items[0].quality).toEqual(12);
    });

    it("For Back Stage Passes, when sell in between 0 and 5, reduces sell in by 1 and quality value increases by 3", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 3, 10) ];
      update.backstagePass();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sell_in).toEqual(2);
      expect(items[0].quality).toEqual(13);
    });

    it("For Back Stage Passes, when sell in hits 0, the quality value is set to 0", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10) ];
      update.backstagePass();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sell_in).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    });

    it("For Back Stage Passes, when sell in is negative, the quality value is set to 0", function() {
      items = [ new Item("Backstage passes to a TAFKAL80ETC concert", -5, 10) ];
      update.backstagePass();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sell_in).toEqual(-6);
      expect(items[0].quality).toEqual(0);
    });

  });

  describe("Updating Standard Item", function() {

    it("On update, it should reduce a standard items sell in by 1 and quality by 1", function() {
      items = [ new Item("Standard", 10, 10) ];
      update = new Update()
      update.runUpdate();
      expect(items[0].name).toEqual("Standard");
      expect(items[0].sell_in).toEqual(9);
      expect(items[0].quality).toEqual(9);

    });

    it("when sell in date is negative, sell in reduces by -1 and quality remains at -2", function() {
      items = [ new Item("Standard", -1, 10) ];
      update = new Update()
      update.runUpdate();
      expect(items[0].name).toEqual("Standard");
      expect(items[0].sell_in).toEqual(-2);
      expect(items[0].quality).toEqual(8);
    });

  });


  describe ('Update quality should set quality to within the allowed range (0-50)', function () {

    it("when quality is negative, the updateQuality method resets to 0", function() {
      items = [ new Item("Standard", 0, -1)];
      update = new Update()
      update.runUpdate();
      expect(items[0].name).toEqual("Standard");
      expect(items[0].sell_in).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    });

    it("when quality is over 50, the updateQuality method resets to 50", function() {
      items = [ new Item("Standard", 1, 51)];
      update = new Update()
      update.runUpdate();
      expect(items[0].name).toEqual("Standard");
      expect(items[0].sell_in).toEqual(0);
      expect(items[0].quality).toEqual(50);
    });
  });


  describe("Updating Brie", function() {

    it("Update reduces brie sell in by 1 and increases quality by 1", function() {
      items = [ new Item("Aged brie", 10, 10) ];
      update.runUpdate();
      expect(items[0].name).toEqual("Aged brie");
      expect(items[0].sell_in).toEqual(9);
      expect(items[0].quality).toEqual(11);
    });

    it("when sell in is negative, update reduces sell in by 1 and increases quality by 2", function() {
      items = [ new Item("Aged brie", -1, 10) ];
      update.runUpdate();
      expect(items[0].name).toEqual("Aged brie");
      expect(items[0].sell_in).toEqual(-2);
      expect(items[0].quality).toEqual(12);
    });
  });

  describe("Updating Sulfuras, Hand of Ragnaros", function() {

    it("For Sufuras, update does not change the sell in or quality value", function() {
      items = [ new Item("Sulfuras, Hand of Ragnaros", 10, 10) ];
      update.runUpdate();
      expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
      expect(items[0].sell_in).toEqual(10);
      expect(items[0].quality).toEqual(10);
    });

    it("For Sufuras, update does not change the sell in or quality value, even when negative", function() {
      items = [ new Item("Sulfuras, Hand of Ragnaros", -10, -10) ];
      update.runUpdate();
      expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
      expect(items[0].sell_in).toEqual(-10);
      expect(items[0].quality).toEqual(-10);
    });
  });





});
