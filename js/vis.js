 
 let input_display = {
 	'valid': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 	'zero': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 	'circular': [['a', 'b', 'c'], ['h', '...', 'd'], ['g', 'f', 'e']],
 	'symmetric': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 	'reflect': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 	'replicate': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 	'partial_conv': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 },

demo_display = {
 	'valid': [['a', 'b', 'c', '...', '...', ], ['d', 'e', 'f', '...', '...'], ['g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...']],
 	'zero': [['0', '0', '0', '0','...', '...',], ['0', 'a', 'b', 'c', '...', '...', ], ['0', 'd', 'e', 'f', '...', '...'], ['0', 'g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...', '...']],
 	'circular': [['e', 'g', 'f', 'e', 'g'], ['c', 'a', 'b', 'c', 'a'], ['d', 'h', '...', 'd', 'h'], ['e', 'g', 'f', 'e', 'g'], ['c', 'a', 'b', 'c', 'a']],
 	'symmetric': [['a', 'a', 'b', 'c','...', '...',], ['a', 'a', 'b', 'c', '...', '...', ], ['d', 'd', 'e', 'f', '...', '...'], ['g', 'g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...', '...']],
 	'reflect': [['e', 'd', 'e', 'f','...', '...',], ['b', 'a', 'b', 'c', '...', '...', ], ['e', 'd', 'e', 'f', '...', '...'], ['h', 'g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...', '...'], ['...', '...', '...', '...', '...', '...']],
 	'replicate': [['a', 'a', 'a', 'b', 'c', '...', '...',], ['a', 'a', 'a', 'b', 'c', '...', '...',], ['a', 'a', 'a', 'b', 'c', '...', '...', ], ['d', 'd', 'd', 'e', 'f', '...', '...'], ['g', 'g', 'g', 'h', 'i', '...', '...'], ['...', '...', '...', '...', '...', '...', '...'], ['...','...', '...', '...', '...', '...', '...']],
 	'partial_conv': [['', '', '', '','', '',], ['', 'a', 'b', 'c', '...', '...', ], ['', 'd', 'e', 'f', '...', '...'], ['', 'g', 'h', 'i', '...', '...'], ['', '...', '...', '...', '...', '...'], ['', '...', '...', '...', '...', '...']],
 };

 let tot_conv_involved = {
 	'valid': [[1, 2, 3], [2, 4, 6], [3, 6, 9]],
 	'zero': [[4, 6, 6], [6, 9, 9], [6, 9, 9]],
 	'circular': [[9, 9, 9], [9, 9, 9], [9, 9, 9]],
 	'symmetric': [[9, 9, 9], [9, 9, 9], [9, 9, 9]],
 	'reflect': [[4, 8, 6, 6], [8, 16, 12, 12], [6, 12, 9, 9], [6, 12,9,9]],
 	'replicate': [[36, 24, 30, 30], [24, 16, 20, 20], [30, 20, 25, 20], [30, 20, 25, 20]],
 	'partial_conv': [[6.25, 8.75, 7.5, 7.5 ], [8.75, 12.25, 10.5, 10.5], [7.5, 10.5, 9, 9], [7.5, 10.5, 9, 9]],
 }

 let used_display = {
 	'valid': [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]],
 	'zero': [["", "", ""], ["", "", ""], ["", "", ""]],
 	'circular': [["", "", ""], ["", "", ""], ["", "", ""]],
 	'symmetric': [["", "", ""], ["", "", ""], ["", "", ""]],
 	'reflect': [["", "", ""], ["", "", ""], ["", "", ""]],
 	'replicate': [["", "", ""], ["", "", ""], ["", "", ""]],
 	'partial_conv': [["", "", ""], ["", "", ""], ["", "", ""]],
 }

 let display_size = {
 	'valid': 3,
 	'zero': 3,
 	'circular': 3,
 	'symmetric': 3,
 	'reflect': 3,
 	'replicate': 5,
 	'partial_conv': 3
 }, pad_size = {
 	'valid': 0,
 	'zero': 1,
 	'circular': 1,
 	'symmetric': 1,
 	'reflect': 1,
 	'replicate': 2,
 	'partial_conv': 1,
 }

 let rendered = {}

 let select_pixel = {}, timer;
 let kernal_size = 3, rendered_conv = 0, st_x, st_y, select_x, select_y, select_val;

 let last_x, last_y;

 function render_convolution(opt) {
 	// clear
 	// d3.selectAll(`#${opt}_input tbody *`).remove();
 	// d3.selectAll(`#${opt}_totops tbody *`).remove();
 	// d3.selectAll(`#${opt}_demo tbody *`).remove();

 	// initialize
 	if (rendered[opt] == undefined) {
 		initialize_static_table(opt);
 		rendered[opt] = true;
 	}
 }


function initialize_static_table(opt,) {
	// render input table 
	let input_table = d3.select(`#${opt}_input tbody`);

	input_display[opt].forEach((row, i) => {
		input_table.append('tr')
			.selectAll('td')
			.data(row).enter()
			.append('td')
			.attr('id', (d, j) => `${opt}-input-${i}-${j}`)
			.html(d => d)
			.on('click', function(d) {
				let id = this.id.split('-');
				let opt = id[0], ii = +id[2], jj = +id[3];
				if (ii > 2 || jj > 2) {
					return;
				}

				// reset 
				if (select_pixel[opt]) {
					d3.select(`#${opt}-input-${select_pixel[opt][1]}-${select_pixel[opt][2]}`)
						.style('background-color', 'white');
					d3.select(`#${opt}-totops-${select_pixel[opt][1]}-${select_pixel[opt][2]}`)
						.style('background-color', 'white');
					d3.select(`#${opt}-demo-${select_pixel[opt][1]+pad_size[opt]}-${select_pixel[opt][2]+pad_size[opt]}`)
						.style('font-weight', 'normal')
				}

				// highlight
				this.style.backgroundColor = highlight_background;
				d3.select(`#${opt}-totops-${ii}-${jj}`)
					.style('background-color', highlight_background);
				select_pixel[opt] = [d, ii, jj];

				d3.select(`#${opt}_select`).html(d);

				d3.select(`#${opt}-demo-${ii+pad_size[opt]}-${jj+pad_size[opt]}`)
					.style('font-weight', 'bold')

				// update summary overview
				update_used_table(opt);

				// render animation 
				rendered_conv = 0;
				select_x = ii, select_y = jj, select_val = this.innerHTML;
				st_x = Math.max(0, ii+pad_size[opt]-kernal_size+1);
				st_y = Math.max(0, jj+pad_size[opt]-kernal_size+1);

				if (opt !== 'valid' && opt !== 'zero') {
					last_x = 0, last_y = 0;
				}

				window.clearInterval(timer);
				timer = window.setInterval(() => update_demo(opt), 500); 
			})
			.on('mouseover', function(d) {
				let id = this.id.split('-');
				let opt = id[0], ii = +id[2], jj = +id[3];
				if (ii > 2 || jj > 2) {
					return;
				}

				if (!select_pixel[opt] || select_pixel[opt][0] != d) {
					this.style.backgroundColor = 'lightgrey'
					d3.select(`#${opt}-totops-${ii}-${jj}`)
						.style('background-color', 'lightgrey');
				}

			}).on('mouseout', function(d) {
				let id = this.id.split('-'),
				 opt = id[0], ii = +id[2], jj = +id[3];
				if (ii > 2 || jj > 2) {
					return;
				}

				if (!select_pixel[opt] || select_pixel[opt][0] != d) {
					this.style.backgroundColor = 'white';

					d3.select(`#${opt}-totops-${ii}-${jj}`)
						.style('background-color', 'white');
				}
			});
	})
	render_input_border(opt, input_table);

	// render tot cov involved
	let tot_table = d3.select(`#${opt}_totops tbody`);

	tot_conv_involved[opt].forEach((row, i) => {
		tot_table.append('tr')
			.selectAll('td')
			.data(row).enter()
			.append('td')
			.attr('id', (d, j) => `${opt}-totops-${i}-${j}`)
			.html(d => d)
	})

	// render demo base
	let demo_table = d3.select(`#${opt}_demo tbody`);
	demo_display[opt].forEach((row, i) => {
		demo_table.append('tr')
			.selectAll('td')
			.data(row).enter()
			.append('td')
			.attr('id', (d, j) => `${opt}-demo-${i}-${j}`)
			.html(d => d)
	})
	render_demo_border(opt, demo_table);

	// render used base
	let used_table = d3.select(`#${opt}_used tbody`);
	used_display[opt].forEach((row, i) => {
		used_table.append('tr')
			.selectAll('td')
			.data(row).enter()
			.append('td')
			.attr('id', (d, j) => `${opt}-used-${i}-${j}`)
			.html(d => d)
	})

	d3.select(`#${opt}_overview`)
		.style('display', 'none');
}

function update_used_table(opt) {
	// display overview of used cells
	d3.select(`#${opt}_overview`)
		.style('display', 'flex');

	// calculate the used cells
	let count = 0;
	updated_used_display = Array.from(used_display[opt]);

	// rendering
	updated_used_display.forEach((row, i) => {
		row.forEach((val, j) => {
			d3.select(`${opt}-used-${i}-${j}`)
				.html(val);
		});
	});

	// sum
	d3.select(`${opt}_used_sum`)
		.html(count)
}

function update_demo(opt) {
	if (opt !== 'valid' && opt!=='zero') {
		update_demo_complex(opt);
		return;
	}
	let max_y = Math.min(select_y, demo_display[opt].length - kernal_size)+pad_size[opt];

	let step = max_y - st_y + 1;

	let ii = st_x + Math.floor(rendered_conv / step), jj = st_y + (rendered_conv % step);

	d3.selectAll(`#${opt}_demo td`)
		.style('background-color', 'white');

	for (let x = ii; x < ii+display_size[opt]; x++) {
		for (let y = jj; y < jj+display_size[opt]; y++) {
			if (d3.select(`#${opt}-demo-${x}-${y}`).html() !== select_val) {
				d3.select(`#${opt}-demo-${x}-${y}`)
					.style('background-color', demo_background);
			} else {
				d3.select(`#${opt}-demo-${x}-${y}`)
					.style('background-color', highlight_background);
			}
		}
	}

	rendered_conv++;
	d3.select(`#${opt}_turn`)
		.html(rendered_conv);

	if (rendered_conv == tot_conv_involved[opt][select_x][select_y]) {
		rendered_conv = 0;
	}
}

function find_the_next_conv(opt) {
	let contain = false;
	if (rendered_conv == 0) {
		last_y = 0, last_x = 0;
	}
	while (last_x < demo_display[opt].length && last_y < demo_display[opt][0].length) {
		for (let x = last_x; x < last_x+display_size[opt]; x++) {
			for (let y = last_y; y < last_y+display_size[opt]; y++) 
				if (d3.select(`#${opt}-demo-${x}-${y}`).html() == select_val) {
					contain = true;
					break;
				}
			if (contain) break;
		}
		if (contain) break;
		last_y++;
		if (last_y + display_size[opt] > demo_display[opt][0].length) {
			last_y = 0;
			last_x ++;
		}
	}
}

function update_demo_complex(opt) {
	// find the next involved conv
	find_the_next_conv(opt);

	d3.selectAll(`#${opt}_demo td`)
		.style('background-color', 'white');

	if (opt == 'partial_conv') {
		update_demo_partial(opt);
		return;
	}

	count = 0;
	for (let x = last_x; x < last_x+display_size[opt]; x++) {
		for (let y = last_y; y < last_y+display_size[opt]; y++) {
			if (d3.select(`#${opt}-demo-${x}-${y}`).html() !== select_val) {
				d3.select(`#${opt}-demo-${x}-${y}`)
					.style('background-color', demo_background);
			} else {
				d3.select(`#${opt}-demo-${x}-${y}`)
					.style('background-color', highlight_background);
				count++;
			}
		}
	}

	rendered_conv++;
	d3.select(`#${opt}_turn`)
		.html(count > 1 ? `${rendered_conv} to ${rendered_conv+count-1}` : rendered_conv);
	rendered_conv += count - 1;

	if (rendered_conv == tot_conv_involved[opt][select_x][select_y]) {
		rendered_conv = 0;
	}
	last_y++;
	if (last_y + display_size[opt] > demo_display[opt][0].length) {
		last_y = 0;
		last_x ++;
	}
}

function update_demo_partial(opt) {
	// find the next involved conv
	count = 0;
	for (let x = last_x; x < last_x+display_size[opt]; x++) {
		for (let y = last_y; y < last_y+display_size[opt]; y++) {
			if (d3.select(`#${opt}-demo-${x}-${y}`).html() !== '') {
				d3.select(`#${opt}-demo-${x}-${y}`)
					.style('background-color', highlight_background);
				count++;
			} else {
				d3.select(`#${opt}-demo-${x}-${y}`)
					.style('background-color', demo_background);
			}
		}
	}

	d3.select(`#${opt}_turn`)
		.html(`9/${count} = ${(9/count).toFixed(2)}`);
	rendered_conv += 9/count;

	if (Math.abs(rendered_conv - tot_conv_involved[opt][select_x][select_y]) < 1e-7) {
		rendered_conv = 0;
	}
	last_y++;
	if (last_y + display_size[opt] > demo_display[opt][0].length) {
		last_y = 0;
		last_x ++;
	}
}



function render_demo_border(opt, demo_table) {
	if (opt == 'valid') return;

	if (opt == 'circular') {
		// upper border
		d3.range(1,4).forEach(ix => {
			demo_table.select(`#${opt}-demo-0-${ix}`)
				.style('border-bottom', '1px solid black');
		})
		// left border
		d3.range(1,4).forEach(ix => {
			demo_table.select(`#${opt}-demo-${ix}-0`)
				.style('border-right', '1px solid black');
		})
		// bottom border
		d3.range(1,4).forEach(ix => {
			demo_table.select(`#${opt}-demo-3-${ix}`)
				.style('border-bottom', '1px solid black');
		})
		// right border
		d3.range(1,4).forEach(ix => {
			demo_table.select(`#${opt}-demo-${ix}-3`)
				.style('border-right', '1px solid black');
		})
	} else {
		// upper border
		d3.range(1,6).forEach(ix => {
			demo_table.select(`#${opt}-demo-0-${ix}`)
				.style('border-bottom', '1px solid black');
		})
		// left border
		d3.range(1,6).forEach(ix => {
			demo_table.select(`#${opt}-demo-${ix}-0`)
				.style('border-right', '1px solid black');
		})
	}
}

function render_input_border(opt, input_table) {
	if (opt == 'circular') {
		// upper border
		d3.range(0,3).forEach(ix => {
			input_table.select(`#${opt}-input-0-${ix}`)
				.style('border-top', '1px solid black');
		})
		// left border
		d3.range(0,3).forEach(ix => {
			input_table.select(`#${opt}-input-${ix}-0`)
				.style('border-left', '1px solid black');
		})
		// bottom border
		d3.range(0,3).forEach(ix => {
			input_table.select(`#${opt}-input-2-${ix}`)
				.style('border-bottom', '1px solid black');
		})
		// right border
		d3.range(0,3).forEach(ix => {
			input_table.select(`#${opt}-input-${ix}-2`)
				.style('border-right', '1px solid black');
		})
	} else {
		// upper border
		d3.range(0,5).forEach(ix => {
			input_table.select(`#${opt}-input-0-${ix}`)
				.style('border-top', '1px solid black');
		})
		// left border
		d3.range(0,5).forEach(ix => {
			input_table.select(`#${opt}-input-${ix}-0`)
				.style('border-left', '1px solid black');
		})
	}
}
