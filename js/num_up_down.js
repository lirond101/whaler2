// JavaScript Document

$(function(){
	$('#select_number_1 .num_up').click(function(){
		current_val = Number($(this).parent().find('.num_val').html());
		current_val+=0.1;
		current_val = Math.round( current_val * 10 ) / 10;
		$(this).parent().find('.num_val').html(current_val);
	});
	$('#select_number_1 .num_down').click(function(){
		current_val = Number($(this).parent().find('.num_val').html());
		current_val-=0.1;
		current_val = Math.round( current_val * 10 ) / 10;
		$(this).parent().find('.num_val').html(current_val);
	});
	
	$('#select_number_2 .num_up').click(function(){
		current_val = Number($(this).parent().find('.num_val').html());
		current_val+=1;
		$(this).parent().find('.num_val').html(current_val);
	});
	$('#select_number_2 .num_down').click(function(){
		current_val = Number($(this).parent().find('.num_val').html());
		current_val-=1;
		$(this).parent().find('.num_val').html(current_val);
	});
})