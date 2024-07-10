var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Administrative_Boundaries_Magetan_1 = new ol.format.GeoJSON();
var features_Administrative_Boundaries_Magetan_1 = format_Administrative_Boundaries_Magetan_1.readFeatures(json_Administrative_Boundaries_Magetan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrative_Boundaries_Magetan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrative_Boundaries_Magetan_1.addFeatures(features_Administrative_Boundaries_Magetan_1);
var lyr_Administrative_Boundaries_Magetan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administrative_Boundaries_Magetan_1, 
                style: style_Administrative_Boundaries_Magetan_1,
                popuplayertitle: "Administrative_Boundaries_Magetan",
                interactive: true,
                title: '<img src="styles/legend/Administrative_Boundaries_Magetan_1.png" /> Administrative_Boundaries_Magetan'
            });
var format_JALAN_LN_25K_2 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_2 = format_JALAN_LN_25K_2.readFeatures(json_JALAN_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_2.addFeatures(features_JALAN_LN_25K_2);
var lyr_JALAN_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_2, 
                style: style_JALAN_LN_25K_2,
                popuplayertitle: "JALAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_2.png" /> JALAN_LN_25K'
            });
var format_Export_Output_4_3 = new ol.format.GeoJSON();
var features_Export_Output_4_3 = format_Export_Output_4_3.readFeatures(json_Export_Output_4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_4_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_4_3.addFeatures(features_Export_Output_4_3);
var lyr_Export_Output_4_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Export_Output_4_3, 
                style: style_Export_Output_4_3,
                popuplayertitle: "Export_Output_4",
                interactive: true,
                title: '<img src="styles/legend/Export_Output_4_3.png" /> Export_Output_4'
            });
var format_RUMAHSAKIT_PT_25K_4 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_25K_4 = format_RUMAHSAKIT_PT_25K_4.readFeatures(json_RUMAHSAKIT_PT_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_25K_4.addFeatures(features_RUMAHSAKIT_PT_25K_4);
var lyr_RUMAHSAKIT_PT_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_25K_4, 
                style: style_RUMAHSAKIT_PT_25K_4,
                popuplayertitle: "RUMAHSAKIT_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_25K_4.png" /> RUMAHSAKIT_PT_25K'
            });
var format_Export_Output_2_5 = new ol.format.GeoJSON();
var features_Export_Output_2_5 = format_Export_Output_2_5.readFeatures(json_Export_Output_2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_2_5.addFeatures(features_Export_Output_2_5);
var lyr_Export_Output_2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Export_Output_2_5, 
                style: style_Export_Output_2_5,
                popuplayertitle: "Export_Output_2",
                interactive: true,
                title: '<img src="styles/legend/Export_Output_2_5.png" /> Export_Output_2'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Administrative_Boundaries_Magetan_1.setVisible(true);lyr_JALAN_LN_25K_2.setVisible(true);lyr_Export_Output_4_3.setVisible(true);lyr_RUMAHSAKIT_PT_25K_4.setVisible(true);lyr_Export_Output_2_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Administrative_Boundaries_Magetan_1,lyr_JALAN_LN_25K_2,lyr_Export_Output_4_3,lyr_RUMAHSAKIT_PT_25K_4,lyr_Export_Output_2_5];
lyr_Administrative_Boundaries_Magetan_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'STATUS': 'STATUS', 'ADM1_CODE': 'ADM1_CODE', 'ADM0_NAME': 'ADM0_NAME', 'STR2_YEAR': 'STR2_YEAR', 'ADM2_NAME': 'ADM2_NAME', 'ADM0_CODE': 'ADM0_CODE', 'EXP2_YEAR': 'EXP2_YEAR', 'Shape_Area': 'Shape_Area', 'ADM2_CODE': 'ADM2_CODE', 'DISP_AREA': 'DISP_AREA', 'ADM1_NAME': 'ADM1_NAME', });
lyr_JALAN_LN_25K_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Export_Output_4_3.set('fieldAliases', {'ObjectID': 'ObjectID', 'FacilityID': 'FacilityID', 'Name': 'Name', 'FromBreak': 'FromBreak', 'ToBreak': 'ToBreak', });
lyr_RUMAHSAKIT_PT_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_Export_Output_2_5.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Name', 'SourceID': 'SourceID', 'SourceOID': 'SourceOID', 'PosAlong': 'PosAlong', 'SideOfEdge': 'SideOfEdge', 'CurbApproa': 'CurbApproa', 'Status': 'Status', 'Attr_Lengt': 'Attr_Lengt', 'Breaks_Len': 'Breaks_Len', });
lyr_Administrative_Boundaries_Magetan_1.set('fieldImages', {'Shape_Leng': '', 'STATUS': '', 'ADM1_CODE': '', 'ADM0_NAME': '', 'STR2_YEAR': '', 'ADM2_NAME': '', 'ADM0_CODE': '', 'EXP2_YEAR': '', 'Shape_Area': '', 'ADM2_CODE': '', 'DISP_AREA': '', 'ADM1_NAME': '', });
lyr_JALAN_LN_25K_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_Export_Output_4_3.set('fieldImages', {'ObjectID': '', 'FacilityID': '', 'Name': '', 'FromBreak': '', 'ToBreak': '', });
lyr_RUMAHSAKIT_PT_25K_4.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'TIPRST': '', 'JPLYRS': '', 'ALAMAT': '', });
lyr_Export_Output_2_5.set('fieldImages', {'ObjectID': '', 'Name': '', 'SourceID': '', 'SourceOID': '', 'PosAlong': '', 'SideOfEdge': '', 'CurbApproa': '', 'Status': '', 'Attr_Lengt': '', 'Breaks_Len': '', });
lyr_Administrative_Boundaries_Magetan_1.set('fieldLabels', {'Shape_Leng': 'no label', 'STATUS': 'no label', 'ADM1_CODE': 'no label', 'ADM0_NAME': 'no label', 'STR2_YEAR': 'no label', 'ADM2_NAME': 'no label', 'ADM0_CODE': 'no label', 'EXP2_YEAR': 'no label', 'Shape_Area': 'no label', 'ADM2_CODE': 'no label', 'DISP_AREA': 'no label', 'ADM1_NAME': 'no label', });
lyr_JALAN_LN_25K_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Export_Output_4_3.set('fieldLabels', {'ObjectID': 'no label', 'FacilityID': 'no label', 'Name': 'no label', 'FromBreak': 'inline label - always visible', 'ToBreak': 'inline label - always visible', });
lyr_RUMAHSAKIT_PT_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'inline label - visible with data', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_Export_Output_2_5.set('fieldLabels', {'ObjectID': 'no label', 'Name': 'no label', 'SourceID': 'no label', 'SourceOID': 'no label', 'PosAlong': 'no label', 'SideOfEdge': 'no label', 'CurbApproa': 'no label', 'Status': 'no label', 'Attr_Lengt': 'no label', 'Breaks_Len': 'inline label - visible with data', });
lyr_Export_Output_2_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});