import * as cheerio from 'cheerio';

class HtmlTableToJson {
	constructor(html, options = {}) {
		if (typeof html !== 'string') {
			throw new TypeError('html input must be a string');
		}

		this.html = html;
		this.opts = options;

		this._$ = cheerio.load(this.html);
		this._results = [];
		this._headers = [];
		this._count = null;

		this._firstRowUsedAsHeaders = [];

		this._process();
	}

	get count() {
		if (Number.isInteger(this._count) === false) {
			this._count = this._$('table').get().length;
		}

		return this._count;
	}

	get results() {
		return this.opts.values === true
			? this._results.map((result) => result.map((r) => Object.values(r)))
			: this._results;
	}

	get headers() {
		return this._headers;
	}

	_process() {
		if (this._results.length > 0) {
			return this._results;
		}

		this._$('table').each((i, element) => this._processTable(i, element));

		return this._results;
	}

	_processTable(tableIndex, table) {
		this._results[tableIndex] = [];
		this._buildHeaders(tableIndex, table);

		this._$(table)
			.find('tr')
			.each((i, element) => this._processRow(tableIndex, i, element));
		this._pruneEmptyRows(tableIndex);
	}

	_processRow(tableIndex, index, row) {
		if (index === 0 && this._firstRowUsedAsHeaders[tableIndex] === true) {
			return;
		}

		this._results[tableIndex][index] = {};

		this._$(row)
			.find('td')
			.each((i, cell) => {
				let cellHtml = '';
				this._$(cell)
					.contents()
					.each((j, node) => {
						if (node.type === 'text') {
							cellHtml += node.data.trim();
						} else if (node.type === 'tag' && node.name === 'a') {
							cellHtml += this._$(node).toString();
						}
					});

				this._results[tableIndex][index][this._headers[tableIndex][i] || i + 1] = cellHtml;
			});
	}

	_buildHeaders(index, table) {
		this._headers[index] = [];

		this._$(table)
			.find('tr')
			.each((i, row) => {
				this._$(row)
					.find('th')
					.each((j, cell) => {
						this._headers[index][j] = this._$(cell).text().trim();
					});
			});

		if (this._headers[index].length > 0) {
			return;
		}

		this._firstRowUsedAsHeaders[index] = true;
		this._$(table)
			.find('tr')
			.first()
			.find('td')
			.each((j, cell) => {
				this._headers[index][j] = this._$(cell).text().trim();
			});
	}

	_pruneEmptyRows(tableIndex) {
		this._results[tableIndex] = this._results[tableIndex].filter((t) => Object.keys(t).length);
	}
}

export function parse(html, options) {
	return new HtmlTableToJson(html, options);
}
