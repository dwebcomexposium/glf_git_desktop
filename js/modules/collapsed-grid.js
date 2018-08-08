function collapseGrid ($el, childSelector, numberOfColumns) {
	var getRowGreatestBlock = function(row){
		var max = null;
		for(var i = 0, imax = row.length;i<imax;i++){
			var block = row[i];
			var height = block.height();
			max = (max === null || height >=  max.height()) ? block : max;
		}

		return max;
	};

	var children = $el.find(childSelector);
	var row = null; var rowList = [];
	children.each(function (i, e) {
		if (i % 4 === 0) {
			if (row !== null) {
				rowList.push(row);
			};
			row = [];
		};

		row.push($(e));
	});
	rowList.push(row);

	var colTopOffset = [], colHeight = [];

	for(var blockIndex = 0, numberOfBlockPerRow = numberOfColumns;blockIndex<numberOfBlockPerRow;blockIndex++){
		$.each(rowList, function (rowIndex, row) {
			var block = row[blockIndex];

			if (rowIndex === 0) {
				colHeight[blockIndex] = 0;
				colTopOffset[blockIndex] = 0;
			}

			colHeight[blockIndex] += (block ? block.height() : 0);

			if (rowIndex > 0) {
				var rowAbove = rowList[rowIndex-1],
					rowAboveGreastestBlock = getRowGreatestBlock(rowAbove),
					blockAbove = rowAbove[blockIndex];

				if (block && blockAbove) {
					var offset = rowAboveGreastestBlock.height() - blockAbove.height();
					colTopOffset[blockIndex] += offset;

					block.css({
						position: 'relative',
						top: (-colTopOffset[blockIndex])+'px'
					});
				}
			}
		});
	}
}

$(document).ready(function () {
	var collapse = function () {
		$('body.article_list #zone2 .la-list .la-column').each(function (i, e) {
			collapseGrid($(e), '.la-item', 4);
		});
	};

	collapse();
	window.setInterval(collapse, 2500);
});