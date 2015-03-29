(function (doc, $, undefined) {
  var headBlock = new BLock();
  var selectedBlocks = [];

  doc.addBlock = function (type) {
    view.addRow();
    headBlock.succ = new Block(type);
  }

  doc.removeBlock = function (blockIds) {
    // remove block ids from blocks
  }

  doc.clearBlock = function () {
    // remove all blocks in one shot
  }

  doc.moveBlockTo = function (blockId, to) {
    // move block to a certain place
  }

  doc.selectBlock = function (blockIds) {
    // add the list of block id into selected block list
  }

  doc.clearSelect = function () {
    selectedBlocks = [];
  }

  doc.deselectBlock = function (blockIds) {
    // remove the list of block id from selected block list
  }

  doc.groupBlocks = function () {
    // group up selected blocks
  }

  doc.ungroupBlocks = function () {
    // ungroup selected blocks
  }

  doc.generate = function () {
    // generate data for current document
  }
}) (window.doc = window.doc || {}, jQuery);