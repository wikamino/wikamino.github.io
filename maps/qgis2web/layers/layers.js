var wms_layers = [];

var lyr_AmericanoSerieB19561957_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms/pnoa-historico",
                              attributions: ' ',
                              params: {
                                "LAYERS": "AMS_1956-1957",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Americano (Serie B, 1956-1957)',
                            popuplayertitle: 'Americano (Serie B, 1956-1957)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AmericanoSerieB19561957_0, 0]);
var lyr_MapaAlemndeAndaluca19401944_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ideandalucia.es/wms/mta50r_aleman_1944",
                              attributions: ' ',
                              params: {
                                "LAYERS": "maa50_1940",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Mapa Alemán de Andalucía 1940-1944',
                            popuplayertitle: 'Mapa Alemán de Andalucía 1940-1944',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MapaAlemndeAndaluca19401944_1, 0]);
var lyr_PNOAMximaActualidad_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'PNOA Máxima Actualidad',
                            popuplayertitle: 'PNOA Máxima Actualidad',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PNOAMximaActualidad_2, 0]);
var lyr_CartografaCatastral_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ovc.catastro.meh.es/cartografia/wms/servidorwms.aspx",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Cartografía Catastral',
                            popuplayertitle: 'Cartografía Catastral',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CartografaCatastral_3, 0]);
var format_MunicipioPradodelRey_4 = new ol.format.GeoJSON();
var features_MunicipioPradodelRey_4 = format_MunicipioPradodelRey_4.readFeatures(json_MunicipioPradodelRey_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipioPradodelRey_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipioPradodelRey_4.addFeatures(features_MunicipioPradodelRey_4);
var lyr_MunicipioPradodelRey_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipioPradodelRey_4, 
                style: style_MunicipioPradodelRey_4,
                popuplayertitle: 'Municipio Prado del Rey',
                interactive: false,
                title: '<img src="styles/legend/MunicipioPradodelRey_4.png" /> Municipio Prado del Rey'
            });
var format_CaminosPblicosdePradodelRey_5 = new ol.format.GeoJSON();
var features_CaminosPblicosdePradodelRey_5 = format_CaminosPblicosdePradodelRey_5.readFeatures(json_CaminosPblicosdePradodelRey_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaminosPblicosdePradodelRey_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminosPblicosdePradodelRey_5.addFeatures(features_CaminosPblicosdePradodelRey_5);
var lyr_CaminosPblicosdePradodelRey_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaminosPblicosdePradodelRey_5, 
                style: style_CaminosPblicosdePradodelRey_5,
                popuplayertitle: 'Caminos Públicos de Prado del Rey',
                interactive: true,
    title: 'Caminos Públicos de Prado del Rey<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_0.png" /> Camino a la Salina<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_1.png" /> Camino a Villamartín y Montellano<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_2.png" /> Camino de Arcos por la Granja a Prado del Rey<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_3.png" /> Camino de la Boca del Madroñal<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_4.png" /> Camino de la Loma de las Encinas<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_5.png" /> Camino de las Lomas<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_6.png" /> Camino de las Palomas<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_7.png" /> Camino de las Pilas<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_8.png" /> Camino de las Vegas<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_9.png" /> Camino de los Granujales<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_10.png" /> Camino de Servidumbre<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_11.png" /> Camino de Taramilla<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_12.png" /> Camino de Villamartín a Grazalema<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_13.png" /> Camino de Villamartín a Grazalema y El Bosque<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_14.png" /> Camino de Villamartín a Prado del Rey<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_15.png" /> Camino del Callejón<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_16.png" /> Camino del Canuto<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_17.png" /> Camino del Caracol<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_18.png" /> Camino del Cerro<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_19.png" /> Camino del Pilar<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_20.png" /> Camino del Pozo Anca<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_21.png" /> Camino Fundacional I<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_22.png" /> Camino Fundacional II<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_23.png" /> Camino Fundacional III o de Prado del Rey a Arcos<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_24.png" /> Camino Fundacional IV o de Servidumbre<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_25.png" /> Camino Fundacional V o a la Salina<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_26.png" /> Cañada Real de Sevilla a Ubrique<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_27.png" /> Carretera de Arcos de la Frontera a El Bosque<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_28.png" /> Carretera de Las Cabezas de San Juan a Ubrique<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_29.png" /> Carretera de Prado del Rey<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_30.png" /> Carretera de Prado del Rey al Cruce<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_31.png" /> Carretera del Puerto del Alguacil<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_32.png" /> Colada de Arcos a Ubrique<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_33.png" /> Colada de Prado del Rey a Bornos<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_34.png" /> Colada de Villamartín a Grazalema<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_35.png" /> Colada del Camino Alto de El Bosque<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_36.png" /> Colada del Camino Bajo del Bosque<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_37.png" /> Trocha de la Cuesta<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_38.png" /> Vereda de Algar a Prado del Rey<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_39.png" /> Vereda de Arcos a Zahara<br />\
    <img src="styles/legend/CaminosPblicosdePradodelRey_5_40.png" /> <br />' });
var group_Basescartogrficas = new ol.layer.Group({
                                layers: [lyr_AmericanoSerieB19561957_0,lyr_MapaAlemndeAndaluca19401944_1,lyr_PNOAMximaActualidad_2,lyr_CartografaCatastral_3,],
                                fold: 'open',
                                title: 'Bases cartográficas'});

lyr_AmericanoSerieB19561957_0.setVisible(false);lyr_MapaAlemndeAndaluca19401944_1.setVisible(false);lyr_PNOAMximaActualidad_2.setVisible(true);lyr_CartografaCatastral_3.setVisible(false);lyr_MunicipioPradodelRey_4.setVisible(true);lyr_CaminosPblicosdePradodelRey_5.setVisible(true);
var layersList = [group_Basescartogrficas,lyr_MunicipioPradodelRey_4,lyr_CaminosPblicosdePradodelRey_5];
lyr_MunicipioPradodelRey_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id_dera': 'id_dera', 'cod_mun': 'cod_mun', 'nombre': 'nombre', 'provincia': 'provincia', });
lyr_CaminosPblicosdePradodelRey_5.set('fieldAliases', {'id': 'id', 'nom_propuesto': 'nom_propuesto', 'longitud': 'longitud', 'titularidad': 'titularidad', 'via_pecuaria': 'via_pecuaria', 'fotointerpretacion': 'fotointerpretacion', 'municipio': 'municipio', });
lyr_MunicipioPradodelRey_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'id_dera': 'TextEdit', 'cod_mun': 'TextEdit', 'nombre': 'TextEdit', 'provincia': 'TextEdit', });
lyr_CaminosPblicosdePradodelRey_5.set('fieldImages', {'id': 'TextEdit', 'nom_propuesto': 'TextEdit', 'longitud': 'TextEdit', 'titularidad': 'TextEdit', 'via_pecuaria': 'TextEdit', 'fotointerpretacion': 'TextEdit', 'municipio': 'TextEdit', });
lyr_MunicipioPradodelRey_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'id_dera': 'hidden field', 'cod_mun': 'hidden field', 'nombre': 'hidden field', 'provincia': 'hidden field', });
lyr_CaminosPblicosdePradodelRey_5.set('fieldLabels', {'id': 'hidden field', 'nom_propuesto': 'inline label - visible with data', 'longitud': 'inline label - visible with data', 'titularidad': 'inline label - visible with data', 'via_pecuaria': 'inline label - visible with data', 'fotointerpretacion': 'inline label - visible with data', 'municipio': 'hidden field', });
lyr_CaminosPblicosdePradodelRey_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});