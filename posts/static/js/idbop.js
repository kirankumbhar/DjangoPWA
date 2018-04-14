var dbPromise = idb.open('feeds-db', 5, function(upgradeDb) {
	upgradeDb.createObjectStore('feeds',{keyPath:'pk'});
});
if(navigator.onLine){
	//collect latest post from jsondata and store in idb
	dbPromise.then(function(db){
		var tx = db.transaction('feeds', 'readwrite');
	  	var feedsStore = tx.objectStore('feeds');
		var data = JSON.parse(jsondata);
		console.log(data);
		data.forEach(function(message){
			feedsStore.put(message);
		});
});
}
else{
	//retrive data from idb and display on page
	console.log('you are offline');
	dbPromise.then(function(db){
		var tx = db.transaction('feeds');
	  	var feedsStore = tx.objectStore('feeds');
	  	
		
		

}