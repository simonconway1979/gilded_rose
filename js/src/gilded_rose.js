function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];
var nonStandardItems = ["Aged brie", "Backstage passes to a TAFKAL80ETC concert", "Sulfuras, Hand of Ragnaros", "Conjured item"];

var Update = function() {

  Update.prototype.runUpdate = function() {
    this.brie();
    this.backstagePass();
    this.conjuredItem();
    this.standardItem();
    this.updateQuality();
  };

  Update.prototype.updateSell_in = function() {
    for (var i = 0; i < items.length; i++) {
        items[i].sell_in = items[i].sell_in - 1;
      }
    };

  // Update.prototype.isNonStandardItem = function() {
  //   items
  // };

  Update.prototype.brie = function() {
    for (var i = 0; i < items.length; i++) {
      if(items[i].name === "Aged brie") {
        if(items[i].sell_in >= 0) {
          items[i].quality = items[i].quality + 1;
        } else {
          items[i].quality = items[i].quality + 2;
        }
      this.updateSell_in();
      }
    }
  };

  Update.prototype.backstagePass = function() {
    for (var i = 0; i < items.length; i++) {
      if(items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
        if(items[i].sell_in > 10) {
          items[i].quality = items[i].quality + 1;
        } else if(items[i].sell_in > 4) {
          items[i].quality = items[i].quality + 2;
        } else if(items[i].sell_in > 0){
          items[i].quality = items[i].quality + 3;
        } else {
          items[i].quality = items[i].quality = 0;
        }
        this.updateSell_in();
      }
    }
  };

  Update.prototype.conjuredItem = function() {
    for (var i = 0; i < items.length; i++) {
      if(items[i].name === "Conjured item") {
        if(items[i].sell_in >= 0) {
          items[i].quality = items[i].quality - 2;
        } else {
          items[i].quality = items[i].quality - 4;
        }
        this.updateSell_in();
      }
    }
  };

  Update.prototype.standardItem = function() {
    for (var i = 0; i < items.length; i++) {
      if($.inArray(items[i].name, nonStandardItems) === -1) {
        if(items[i].sell_in >= 0) {
          items[i].quality = items[i].quality - 1;
        } else {
          items[i].quality = items[i].quality - 2;
        }
        this.updateSell_in();
      }
    }
  };

  Update.prototype.updateQuality = function() {
    for (var i = 0; i < items.length; i++) {
      if(items[i].name != "Sulfuras, Hand of Ragnaros") {
        if (items[i].quality < 0) {
          items[i].quality = 0;
        }
        if (items[i].quality > 50) {
          items[i].quality = 50;
        }
      }
    }
  };
};
