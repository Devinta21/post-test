var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_kecamatan_genteng_ar_1 = new ol.format.GeoJSON();
var features_kecamatan_genteng_ar_1 = format_kecamatan_genteng_ar_1.readFeatures(json_kecamatan_genteng_ar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_genteng_ar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kecamatan_genteng_ar_1.addFeatures(features_kecamatan_genteng_ar_1);
var lyr_kecamatan_genteng_ar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kecamatan_genteng_ar_1, 
                style: style_kecamatan_genteng_ar_1,
                popuplayertitle: 'kecamatan_genteng_ar',
                interactive: true,
    title: 'kecamatan_genteng_ar<br />\
    <img src="styles/legend/kecamatan_genteng_ar_1_0.png" /> Embong Kaliasin<br />\
    <img src="styles/legend/kecamatan_genteng_ar_1_1.png" /> Genteng<br />\
    <img src="styles/legend/kecamatan_genteng_ar_1_2.png" /> Kapasari<br />\
    <img src="styles/legend/kecamatan_genteng_ar_1_3.png" /> Ketabang<br />\
    <img src="styles/legend/kecamatan_genteng_ar_1_4.png" /> Peneleh<br />\
    <img src="styles/legend/kecamatan_genteng_ar_1_5.png" /> <br />' });
var format_jalan_clean_2 = new ol.format.GeoJSON();
var features_jalan_clean_2 = format_jalan_clean_2.readFeatures(json_jalan_clean_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_clean_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_clean_2.addFeatures(features_jalan_clean_2);
var lyr_jalan_clean_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_clean_2, 
                style: style_jalan_clean_2,
                popuplayertitle: 'jalan_clean',
                interactive: true,
                title: '<img src="styles/legend/jalan_clean_2.png" /> jalan_clean'
            });
var format_Servicearealines_3 = new ol.format.GeoJSON();
var features_Servicearealines_3 = format_Servicearealines_3.readFeatures(json_Servicearealines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_3.addFeatures(features_Servicearealines_3);
var lyr_Servicearealines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearealines_3, 
                style: style_Servicearealines_3,
                popuplayertitle: 'Service area (lines)',
                interactive: true,
                title: '<img src="styles/legend/Servicearealines_3.png" /> Service area (lines)'
            });
var format_Buffered_4 = new ol.format.GeoJSON();
var features_Buffered_4 = format_Buffered_4.readFeatures(json_Buffered_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_4.addFeatures(features_Buffered_4);
var lyr_Buffered_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_4, 
                style: style_Buffered_4,
                popuplayertitle: 'Buffered',
                interactive: true,
                title: '<img src="styles/legend/Buffered_4.png" /> Buffered'
            });
var format_Intersection_5 = new ol.format.GeoJSON();
var features_Intersection_5 = format_Intersection_5.readFeatures(json_Intersection_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersection_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersection_5.addFeatures(features_Intersection_5);
var lyr_Intersection_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intersection_5, 
                style: style_Intersection_5,
                popuplayertitle: 'Intersection',
                interactive: true,
                title: '<img src="styles/legend/Intersection_5.png" /> Intersection'
            });
var format_halte_pt_6 = new ol.format.GeoJSON();
var features_halte_pt_6 = format_halte_pt_6.readFeatures(json_halte_pt_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_halte_pt_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_halte_pt_6.addFeatures(features_halte_pt_6);
var lyr_halte_pt_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_halte_pt_6, 
                style: style_halte_pt_6,
                popuplayertitle: 'halte_pt',
                interactive: true,
                title: '<img src="styles/legend/halte_pt_6.png" /> halte_pt'
            });

lyr_Positron_0.setVisible(true);lyr_kecamatan_genteng_ar_1.setVisible(true);lyr_jalan_clean_2.setVisible(true);lyr_Servicearealines_3.setVisible(true);lyr_Buffered_4.setVisible(true);lyr_Intersection_5.setVisible(true);lyr_halte_pt_6.setVisible(true);
var layersList = [lyr_Positron_0,lyr_kecamatan_genteng_ar_1,lyr_jalan_clean_2,lyr_Servicearealines_3,lyr_Buffered_4,lyr_Intersection_5,lyr_halte_pt_6];
lyr_kecamatan_genteng_ar_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas_Total': 'Luas_Total', });
lyr_jalan_clean_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_Servicearealines_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_Buffered_4.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_Intersection_5.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'Luas_Terjangkau': 'Luas_Terjangkau', });
lyr_halte_pt_6.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Foto': 'Foto', });
lyr_kecamatan_genteng_ar_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Luas_Total': 'TextEdit', });
lyr_jalan_clean_2.set('fieldImages', {'fid': '', 'osm_id': '', 'bridge': '', 'tunnel': '', 'width': '', 'highway': '', 'surface': '', 'railway': '', 'layer': '', 'oneway': '', 'name': '', 'smoothness': '', });
lyr_Servicearealines_3.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', });
lyr_Buffered_4.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', });
lyr_Intersection_5.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas_Terjangkau': 'TextEdit', });
lyr_halte_pt_6.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'Foto': '', });
lyr_kecamatan_genteng_ar_1.set('fieldLabels', {'full_id': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'Kelurahan': 'inline label - visible with data', 'Luas_Total': 'inline label - visible with data', });
lyr_jalan_clean_2.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', 'width': 'hidden field', 'highway': 'hidden field', 'surface': 'hidden field', 'railway': 'hidden field', 'layer': 'hidden field', 'oneway': 'hidden field', 'name': 'hidden field', 'smoothness': 'hidden field', });
lyr_Servicearealines_3.set('fieldLabels', {'Nama_Halte': 'inline label - visible with data', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', });
lyr_Buffered_4.set('fieldLabels', {'Nama_Halte': 'inline label - visible with data', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', });
lyr_Intersection_5.set('fieldLabels', {'full_id': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'Kelurahan': 'inline label - visible with data', 'Nama_Halte': 'inline label - visible with data', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'Luas_Terjangkau': 'inline label - visible with data', });
lyr_halte_pt_6.set('fieldLabels', {'Nama_Halte': 'inline label - visible with data', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'Foto': 'header label - visible with data', });
lyr_halte_pt_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});