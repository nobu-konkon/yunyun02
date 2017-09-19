ons.bootstrap();
ons.disableAutoStatusBarFill();  // (Monaca enables StatusBar plugin by default)
var map;
ons.ready(function() {
    myModal.show();
    // 高精度の位置情報を要求する(衛星による測位)

	
	
	
	
	
    $(document).on('click', '.put-marker', function(){
		putMarker();
	});
});

function createMap(position) {
	console.log(2);
	/* createMap()関数の記述 */ 

	// 地図のズーム値、センター位置、タイプを指定

	
	
	// 地図を作成



};

function putMarker() {
	/* putMarker()関数の記述 */
	if (map) {

	
	
	
	} 
};

function onError(positionError) {
	/* onError()関数の記述 */
	var code = positionError.code;
	switch(code) {

	
	
	
	
	
	}
	ons.notification.alert({ message: errorMessage });
};
