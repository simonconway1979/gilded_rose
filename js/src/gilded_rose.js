function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

var Update = function() {

  Update.prototype.runUpdate = function() {
    this.brie();
    this.sulfuras();
    this.backstagePass();
    this.standardItem();
    this.updateQuality();
  };

  Update.prototype.updateSell_in = function() {
    for (var i = 0; i < items.length; i++) {
        items[i].sell_in = items[i].sell_in - 1;
      }
    };


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
  }

  Update.prototype.sulfuras = function() {
    for (var i = 0; i < items.length; i++) {
      if(items[i].name === "Sulfuras, Hand of Ragnaros") {
      }
    }
  }

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

  Update.prototype.standardItem = function() {
    for (var i = 0; i < items.length; i++) {
      if(items[i].name != "Aged brie") {
        if(items[i].name != "Sulfuras, Hand of Ragnaros") {
          if(items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            if(items[i].sell_in >= 0) {
              items[i].quality = items[i].quality - 1;
            } else {
              items[i].quality = items[i].quality - 2;
            }
            this.updateSell_in();
          }
        }
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

// function update_quality() {
//   for (var i = 0; i < items.length; i++) {
//     if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//       if (items[i].quality > 0) {
//         if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
//           items[i].quality = items[i].quality - 1
//         }
//       }
//     } else {
//       if (items[i].quality < 50) {
//         items[i].quality = items[i].quality + 1
//         if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//           if (items[i].sell_in < 11) {
//             if (items[i].quality < 50) {
//               items[i].quality = items[i].quality + 1
//             }
//           }
//           if (items[i].sell_in < 6) {
//             if (items[i].quality < 50) {
//               items[i].quality = items[i].quality + 1
//             }
//           }
//         }
//       }
//     }
//     if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
//       items[i].sell_in = items[i].sell_in - 1;
//     }
//     if (items[i].sell_in < 0) {
//       if (items[i].name != 'Aged Brie') {
//         if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//           if (items[i].quality > 0) {
//             if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
//               items[i].quality = items[i].quality - 1
//             }
//           }
//         } else {
//           items[i].quality = items[i].quality - items[i].quality
//         }
//       } else {
//         if (items[i].quality < 50) {
//           items[i].quality = items[i].quality + 1
//         }
//       }
//     }
//   }
// }
