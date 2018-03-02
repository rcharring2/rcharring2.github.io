 var userFeed = new Instafeed({
 get: 'user',
 userId: 2372896667,
 accessToken: '2372896667.bad5cea.097f9cf8b78945038b0f2d4c7e61a10a',
 resolution: 'standard_resolution',
 limit: 3,
 template: '<div><img src="{{image}}" /><a href="{{link}}"><div class="post"><div class="cover"></div><div class="post-text"><p>{{caption}}</p></div></div></a></div>'
 });
 userFeed.run();
/*<a href="{{link}}"></a>*/

