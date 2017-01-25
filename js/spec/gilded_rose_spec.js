describe("Guilded rose", function() {

  describe("Updating Standard Item", function() {

    it("On update, it should reduce a standard items sell in by 1 and quality by 1", function() {
      items = [ new Item("Standard", 10, 10) ];
      update_quality();
      expect(items[0].name).toEqual("Standard");
      expect(items[0].sell_in).toEqual(9);
      expect(items[0].quality).toEqual(9);
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



});
