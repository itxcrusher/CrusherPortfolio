// ********** Contact Section **********
$(document).ready(function(){

	const submitModalBtn = document.querySelector("#submit-modal-btn"),
          submitModalHeading = document.querySelector("#submit-modal-heading");

		$('#contact-form').submit(function(event){
			event.preventDefault();

			$.ajax({
				//url: "php/insert.php",
				//method: "Post",
				//data: $(this).serialize(),

				success: function(data){
					submitModalBtn.click();

					$("#contact-form")[0].reset();
					
					}
			});

		});

	});