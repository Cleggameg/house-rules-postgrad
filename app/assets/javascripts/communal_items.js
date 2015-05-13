$(document).ready(function(){

	$(document).on("click", "img.issue-mark", function(e){
		e.preventDefault();
		var form = $(this).parent().parent().find("form.item_issue");
		if (form.css("display")=="none"){
			form.css("display", "block");
		} else {
			form.css("display", "none");
		}
	});

	$("form.item_issue").submit(function(e){
		e.preventDefault();
		var form = $(this);
		var list = form.parent().parent().find(".issue-body");
		$.ajax({
	      url: form.attr("action"),
	      method: form.attr("method"),
	      data: form.serialize(),
	      success: function(response){
	        list.append(response);
	        list.children().show();
        	form[0].reset();
        	form.css("display","none");
      	  }
    	});
	}),

	$(".new_communal_item").on("ajax:success", function(e, data, status, xhr) {
		debugger;
		var highHtml = "<span class='item-name' id="out">Yay For Things!</span>
<br>
<div class="item-info">
<b>Brand: </b>Stuff <b>Qty: </b>12<br>
<a href="/houses/1/communal_items/28/edit">Edit</a> /
<a rel="nofollow" data-method="delete" href="/houses/1/communal_items/28">Delete</a>
</div>
<br>
<span class="item-stock-level"></span>


  <div class="stock-status">Change Stock Status:<br>
    <form class="stock-level-form" action="/houses/1/communal_items/28/low" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="LMvYEeZ3zp6lgq5mS3ViBncJQneKWfbntNgGDd3o0hNZCJ6nMr3fZqnid5HPi8tCtMimwq46oWIBv1R+ljyJfw==" />
        <input type="submit" name="commit" value="low" class="submit-promise" />
</form>    <form class="stock-level-form" action="/houses/1/communal_items/28/out" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Ldkhg1mbVbd3eIV1IKz7n69SFIKtsYi6Td+u0sb8ALVYGmc1jVFET3sYXIKkUlLbbJPwN4nS3z/4uPyhjShb2Q==" />
        <input type="submit" name="commit" value="out" class="submit-promise" />
</form>  </div>

  <div class="issue_box">
    <div class="issue_form">
  <form class="item_issue" action="/houses/1/communal_items/28/issue" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="6bTLzdC9fgywRXOJUL3ikOg/UgyIX2MwUdenEfbTFJucd417BHdv9Lwlqn7UQ0vUK/62uaw8NLXksPVivQdP9w==" />
    <textarea placeholder="Reason" name="issue[reason]" id="issue_reason">
</textarea>
    <input type="submit" name="commit" value="Submit Issue" class="button tiny" />
</form>  </div>

  <div class="issue-body">
      <div id="issue-intro"></div>
      <div class="issue-content">
      </div>
    </div>

  </div>
<br>"

    $(".item-high").append(xhr.responseText);
    $(".item-high").find(".header-empty").hide();
    $(".item-high").find(".rule-table:last").hide();
    $(".item-high").find(".rule-table:last").show(1000);
    $(".rule-fields").val("")
    $(".rule-length").css("display", "none")
  }).on("ajax:error", function(e, xhr, status, error) {
    return $("#new_rule").prepend("<p class='rule-length'>Must be a length of 6 or greater.</p>");
    e.stopPropagation();
  });
})
