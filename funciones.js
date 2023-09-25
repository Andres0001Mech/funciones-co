////FUNCION CONSULTAR ASOCIADO ESTE CODIGO SE INSERTA EN FUCTIONS.PHP DEL TEMA WPLMS
function isAsociado(){
    header('Content-Type: application/json');
   $url = 
   "https://servicioweb.canaprooc.com.co/TestService/API/asociados/".$_POST["documento"];
   $result = file_get_contents($url);
   if ($result != null){
    echo $result;
   }else{
    echo "Error al consultar la informacion...";
   }
   exit;
   }
   add_action('wp_ajax_isAsociado', 'isAsociado');
   add_action('wp_ajax_nopriv_isAsociado', 'isAsociado'); 


////FUNCION CONSULTAR SEMINARIO ESTE CODIGO SE INSERTA EN FUCTIONS.PHP DEL TEMA WPLMS
   function checkSeminario(){
    header('Content-Type: application/json');
   $url = 
   "https://servicioweb.canaprooc.com.co/TestService/API/asociadoSeminario/".$_POST["document
   o"];
   echo file_get_contents($url);
   exit;
   }
   add_action('wp_ajax_checkSeminario', 'checkSeminario');
   add_action('wp_ajax_nopriv_checkSeminario', 'checkSeminario');


 ////CODIGO APARTADO LINEA 496 A 519 DEL ARCHIVO REGISTER.PHP DEL TEMA WPLMS

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jqueryconfirm.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jqueryconfirm.min.js"></script>
<script type="text/javascript">
jQuery(document).ready( function() {
if ( jQuery('div#blog-details').length && !jQuery('div#blogdetails').hasClass('show') )
jQuery('div#blog-details').toggle();
jQuery( 'input#signup_with_blog' ).click( function() {
jQuery('div#blog-details').fadeOut().toggle();
});
 var buttonSend = jQuery(' <input id=\'btnConsultar\' name=\'btnConsultar\' 
onclick="consultarAsociado()" type="button" value="Comprobar"/>');
 jQuery( buttonSend ).insertAfter( "input[id='field_17']" );
jQuery('input[type="submit"]').attr('disabled','disabled');
jQuery("#field-visibility-settings-toggle-17").html("");
});
function consultarAsociado(){
 
 if (jQuery("#field_17").val() != ""){
 jQuery.ajax({
 type:"POST",
 url: "<?php echo admin_url('admin-ajax.php'); ?>",
 data: {
 action: 'isAsociado',
 "documento": jQuery("#field_17").val()
 },
 success:function(data){
 console.log(data);
 if (data != "Error al consultar la informacion..."){
 if(data != false){
 jQuery( "#field_1" ).val( data.nombreintegrado );
 jQuery( "#signup_email" ).val(data.email);
 jQuery("#field_18").val(data.nombreagencia);
 jQuery("#field_19").val(data.direccion);
 jQuery("#field_20").val(data.celular);
 jQuery('input[type="submit"]').removeAttr('disabled');
 jQuery("#field-visibility-settings-toggle-17").html("El numero de 
documento pertenece a un asociado...");
 }else{
 jQuery( "#field_1" ).val("");
 jQuery( "#signup_email" ).val("");
 jQuery("#field_18").val("");
 jQuery("#field_19").val("");
 jQuery("#field_20").val("");
 jQuery('input[type="submit"]').attr('disabled','disabled');
 jQuery.alert({
 title: 'Se ha encontrado un error!',
 content: 'El número de documento NO pertenece a un a asociado. Verifique su 
documento o comuníquese con el soporte técnico.',
 type: 'red',
 typeAnimated: true,
 buttons: {
 close: function () {
 }
 }
 });
 jQuery("#field-visibility-settings-toggle-17").html("El numero de 
documento NO pertenece a un a asociado...");
 }
 }else{
 jQuery.alert({
 title: 'Disculpa las molestias!',
 content: 'En este momento no encontramos en mantenimiento y no podemos 
procesar tu solicitud. Intentalo mas tarde.',
 type: 'yellow',
 typeAnimated: true,
 buttons: {
 close: function () {
 }
 }
 });
 }
 
 
 }
 });
 }else{
 jQuery( "#field_1" ).val("");
 jQuery( "#signup_email" ).val("");
 jQuery('input[type="submit"]').attr('disabled','disabled');
 jQuery("#field-visibility-settings-toggle-17").html("Debe ingresar un numero de 
documento");
 }
 
}
</script>