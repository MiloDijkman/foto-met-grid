const linknaarfotos = [
  'https://wallpaperaccess.com/full/54908.jpg',
  'https://images8.alphacoders.com/814/814218.jpg',
  'https://wallpaperaccess.com/full/35646.jpg',
  'https://a-static.besthdwallpaper.com/turkije-istanbul-uskudar-maiden-s-tower-behang-1440x2560-19769_181.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQo28lW4o_KO6fL9J2Ueb2MceMEFOdMkEA_mRm1izs23WNBBp_6',
  'https://www.wallpaperflare.com/static/61/861/213/turkey-ankara-mosque-city-wallpaper.jpg',
  'https://img3.goodfon.com/wallpaper/big/6/b1/stambul-turciya-flag-istanbul.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNhxbgdWg0ofmuahGipOChvkl_fB-yy2O7sE3eHh9lVlNJGo_X',
  'https://free4kwallpapers.com/uploads/originals/2019/08/04/wild-horses-in-cappadocia-turkey-wallpaper.jpg',
  'https://i.pinimg.com/originals/23/ba/d5/23bad5fa2bbe9b1a109a89316a63a923.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWjrUmfszXqJBfVv0gt2wRSs_QYwt6onWDlNnq_913uGepQxqY',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjMXkytfHlwW0S5nHun5ahrQSd4UpqgiES3vSEqWCbIUmHjnwa',
  'https://www.mapofjoy.nl/wp-content/uploads/2017/07/marmaris-turkije2.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfhMc-Qn2RX2F4jYiufC5_VATvzdQrf5vOUr72BxaGAaNymYRN',
  'https://wallpaperfx.com/uploads/wallpapers/2013/04/28/12539/preview_turkey-resort.jpeg',
  'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&w=1000&q=80',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVzKdFHWT2-40CntYr-tKl9VYUzaZaUX2MiLLVxKsbYMBmOYnL',
  'https://allhdwallpapers.com/wp-content/uploads/2019/01/Blue-Mosque-Istanbul-Turkey-4K-Wallpapers2.jpg',
  'https://wallpaperaccess.com/full/54911.jpg',
  'https://images.unsplash.com/photo-1564665759044-959473395029?ixlib=rb-1.2.1&w=1000&q=80'
];

const houder = document.getElementById('container');

function plaatsEenFoto(url) {
  let item = document.createElement('div');
  item.className = 'item';
  let deFoto = document.createElement('img');
  deFoto.src = url;
  deFoto.alt = 'Turkijë';
  item.append(deFoto);
  houder.append(item);
}


for (let i=linknaarfotos.length; i>0; i--) {
  let getalletje = Math.floor(Math.random()*linknaarfotos.length);
  plaatsEenFoto( linknaarfotos[getalletje]);
  linknaarfotos.splice(getalletje,1);
}
