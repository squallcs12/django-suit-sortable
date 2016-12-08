django.jQuery(function sortableTabularInline() {

	// restrain jQuery context to `SortableTabularInline` elements
	var $context = window.$('.suit-sortable-tabular');
	var $ = $context.find.bind($context);

	// hide the position column
	$('th:contains("Position"), td.field-position').hide();

	if($('.inline-related input[name$=-INITIAL_FORMS]').val() <= 1){
		return;
	}

	$('.inline-related .form-row.has_original').css('cursor', 'move');

	$('.inline-related h2').append('<span class="description">Note: Drag &amp; drop rows to reorder. Save new inline row first</span>')

	$('.inline-related').sortable({
		axis: 'y',
		items: '.form-row.has_original',
		cursor: 'move',
		update: function (event, ui) {
			$('.inline-related .form-row.has_original').each(function (i) {
				window.$('input[id$=position]', this).val(i + 1);
			});
		},
	});
});

