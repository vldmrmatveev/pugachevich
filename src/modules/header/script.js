$('.select-full-width').select2({
	minimumResultsForSearch: Infinity,
	width: '100%'
});

$('.form-control[required]').on('input', function(){
	if ($(this).val().length > 0) {
		$(this).next('.form-control-required-label').hide();
	} else {
		$(this).next('.form-control-required-label').show();
	}
});

$(".phone").each(function () {
	var mask = "+7 (999) 999-99-99",
					pl = mask.replace(/9/g, '_');
	$(this).mask(mask)
					.keydown(function (e) {
							if (typeof e.key != "undefined") {
									var phone = $(this).val().replace(/\D/g, ''), value = pl;
									if (e.key.match(/\d/) && phone.length == 11 && phone.charAt(1) == '8') {
											phone = phone.substr(2) + e.key;
											for (var i = 0; i < 10; i++) {
													value = value.replace(/_/, phone.charAt(i));
											}
											$(this).val(value);
											e.stopPropagation();
											return false;
									}
							}
					}).on('paste', function (e) {
			var tel = e.originalEvent.clipboardData.getData('text');
			tel = tel.replace(/^\+?7|8/, '').replace(/\D/g, '');
			var value = pl, pos = 0, len = Math.min(10, tel.length);
			for (var i = 0; i < len; i++) {
					pos = Math.max(pos, value.indexOf('_'));
					value = value.replace(/_/, tel.charAt(i));
			}
			if (++pos < pl.length) {
					value = value.substr(0, pos);
			}
			$(this).val(value);
			return false;
	}).on('focusout', function () {
			var template = mask.replace(/\D/g, ''),
							input = $(this).val().replace(/\D/g, '');
			if (input.length < template.length) {
					$(this).val('');
			}
	});
});

$('.form').each(function() {
	$(this).validate({
			errorPlacement: function(error, element) {},
	});
});

$('.form').each(function() {
	$(this).submit(function (e) {
		e.preventDefault();
		let elements = $(this).find('input, select, textarea, button[type="submit"]');
		let successModal = null;
		let errorModal = null;
		if ($(this).parents('div').is('#formModal')) {
			successModal = $(this).parents('#formModal').next('[data-form-modal="success"]');
			errorModal = $(this).parents('#formModal').next().next('[data-form-modal="error"]');
		} else {
			successModal = $(this).find('[data-form-modal="success"]');
			errorModal = $(this).find('[data-form-modal="error"]');
		}
		if ($(this).valid()) {
			$(this).parents('#formModal').next('[data-form-modal="success"]');
			if ($(this).parents('div').is('#formModal')) {
				$('#formModal').modal('hide');
			}
			$(this).ajaxSubmit({
				success: function (response) {
					if (response.result == 'success') {
						elements.prop('disabled', true);
						successModal.modal();
					} else {
						errorModal.modal();
					}
				}
			})
		}
	});
});