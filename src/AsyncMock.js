const products = [{
        id: 1,
        title: 'Mouse Redragon Centrophorus M601 RGB',
        price: '17160',
        category: 'perifericos',
        type: 'Ratones',
        description: 'Mouse Redragon Centrophorus 2, Cuenta con switches Omron y sensor Pixart 3317 óptico que aseguran movimiento fluído y clicks precisos. Todo conectado a la PC mediante una ficha USB recubierta en oro que la hace inoxidable y aporta la mejor conductividad posible.',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_28612_Mouse_Redragon_Centrophorus_M601_RGB_e00743a5-grn.jpg'
    },
    {
        id: 2,
        title: 'Placa de Video Asrock Radeon RX 550',
        price: '78250',
        category: 'componentes',
        type: 'Placa de video',
        description: 'Placa de Video Asrock Radeon RX 550 2GB GDDR5 Phantom Gaming',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_19289_Placa_de_Video_Asrock_Radeon_RX_550_2GB_GDDR5_Phantom_Gaming_99528ce8-grn.jpg'
    },
    {
        id: 3,
        title: 'Monitor Gamer ViewSonic VX2728J-2K 27"',
        price: '385630',
        category: 'pantallas',
        type: 'Monitores',
        description: 'Monitor Gamer ViewSonic VX2728J-2K 27" 1440p IPS 180Hz FreeSync Premium',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_40300_Monitor_Gamer_ViewSonic_VX2728J-2K_27__1440p_IPS_180Hz_FreeSync_Premium_19d7dcd1-grn.jpg'
    },
    {
        id: 4,
        title: 'Teclado Mecanico Redragon Fizz Pro K616',
        price: '49990',
        category: 'perifericos',
        description: 'Teclado Mecanico Redragon Fizz Pro K616-RGB 60% White/Pink Wireless',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_35723_Teclado_Mecanico_Redragon_Fizz_Pro_K616-RGB_60__White_Pink_Wireless_ddd16c00-grn.jpg'
    },
    {
        id: 5,
        title: 'Teclado Mecanico Redragon Kumara K552',
        price: '40990',
        category: 'perifericos',
        type: 'Teclados',
        description: 'Teclado Mecanico Redragon Kumara K552 Rainbow Outemu RED ESP',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_29734_Teclado_Mecanico_Redragon_Kumara_K552_Rainbow_Outemu_RED_ESP_f649d333-grn.jpg'
    },
    {
        id: 6,
        title: 'MicroProcesador Marca AMD Ryzen 7 5700G',
        price: '240000',
        category: 'componentes',
        type: 'Procesadores',
        description: 'Procesador AMD Ryzen 7 5700G 4.6GHz Turbo + Wraith Stealth Cooler',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_27673_Procesador_AMD_Ryzen_7_5700G_4.6GHz_Turbo___Wraith_Stealth_Cooler_cb33e4fa-grn.jpg'
    },
    {
        id: 7,
        title: 'Monitor Gamer LG Ultragear 24GS60F-B 24"',
        price: '247570',
        category: 'pantallas',
        type: 'Monitores',
        description: 'Monitor Gamer LG Ultragear 24GS60F-B 24" IPS FHD 1920*1080 180Hz G-SYNC FreeSync 1ms (GtG)',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_41253_Monitor_Gamer_LG_Ultragear_24GS60F-B_24__IPS_FHD_1920_1080_180Hz_G-SYNC_FreeSync_1ms__GtG__5dfb2200-grn.jpg'
    },
    {
        id: 8,
        title: 'Mother ASUS PRIME B450M-A Salida HDMI',
        price: '105600',
        category: 'componentes',
        type: 'Placas Madre',
        description: 'Mother ASUS PRIME B450M-A II/CSM AM4 HDMI M2 USB 3.2',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39385_Mother_ASUS_PRIME_B450M-A_II_CSM_AM4_HDMI_M2_USB_3.2_ed7e6659-grn.jpg'
    },
    {
        id: 9,
        title: 'Motherboard Marca Asrock B450M-HDV Salida HDMI',
        price: '75830',
        category: 'componentes',
        type: 'Placas Madre',
        description: 'Mother Asrock B450M-HDV 4.0 AM4 HDMI M.2 ',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_13643_Mother_Asrock_B450M-HDV_4.0_AM4_HDMI_M.2__31247782-grn.jpg'
    },
    {
        id: 10,
        title: 'Monitor Curvo Samsung (Essential) 24"',
        price: '217520',
        category: 'pantallas',
        type: 'Monitores',
        description: 'Monitor Curvo Samsung 24" Essential S3 FHD 1800R 75Hz',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_41175_Monitor_Curvo_Samsung_24__Essential_S3_FHD_1800R_75Hz_82c8cf23-grn.jpg'
    },
    {
        id: 11,
        title: 'Monitor LG 20MK400H-B 20" VGA',
        price: '118600',
        category: 'Pantallas',
        type: 'Monitores',
        description: 'Monitor LG 20MK400H-B 20" TN VGA HDMI VGA HDMI',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_13768_Monitor_LG_20MK400H-B_20__TN_VGA_HDMI_VGA_HDMI_bce7a72d-grn.jpg'
    },
    {
        id: 12,
        title: 'WebCam Marca Logitech C922 Pro Full HD',
        price: '109990',
        category: 'perifericos',
        type: 'Web Cams',
        description: 'WebCam Logitech C922 Pro Full HD 1080p Stream C/Trip USB',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_7371_WebCam_Logitech_C922_Pro_Full_HD_1080p_Stream_C_Trip_USB_3724eca0-grn.jpg'
    }, {
        id: 13,
        title: 'Memoria Team DDR5 32GB (2x16GB)',
        price: '143580',
        category: 'componentes',
        type: 'Memorias Ram',
        description: 'Memoria Team DDR5 32GB (2x16GB) 6400MHz T-Force Delta RGB Black CL40 Intel XMP 3.0',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_29474_Memoria_Team_DDR5_32GB__2x16GB__6400MHz_T-Force_Delta_RGB_Black_CL40_Intel_XMP_3.0_884828e7-grn.jpg'
    }, {
        id: 14,
        title: 'Joystick Redragon Saturn G807 Para PC (USB)',
        price: '21900',
        category: 'perifericos',
        type: 'JoyStick',
        description: 'Joystick Redragon Saturn G807 PC, con conexión vía USB',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39122_Joystick_Redragon_Saturn_G807_PC_USB_9daaf187-grn.jpg'
    }, {
        id: 15,
        title: 'Elgato Stream Deck (Mini) 6 botones customizables',
        price: '78990',
        category: 'periferico',
        type: 'Stream Decks',
        description: 'Elgato Stream Deck Mini Con 6 botones Customizables. Con iluminación LCD ',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_41160_Elgato_Stream_Deck_Mini_6_botones_Customizables_LCD__9f46eb68-grn.jpg'
    }, {
        id: 16,
        title: 'Televisor Smart TV LG QNED 55" Ultra HD AI ThinQ',
        price: '1209700',
        category: 'pantallas',
        type: 'Televisores',
        description: 'Televisor Smart TV Marca LG QNED 55" Ultra HD AI ThinQ 55QNED80SRA',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39997_Smart_TV_LG_QNED_55__Ultra_HD_AI_ThinQ_55QNED80SRA_10dc0797-grn.jpg'
    }, {
        id: 17,
        title: 'Monitor Gamer LG Ultragear 27GS75Q-B 27"',
        price: '458520',
        category: 'pantallas',
        type: 'Monitores',
        description: 'Monitor Gamer LG Ultragear 27GS75Q-B 27" QHD IPS 180Hz G-Sync FreeSync',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_41858_Monitor_Gamer_LG_Ultragear_27GS75Q-B_27__QHD_IPS_180Hz_G-Sync_FreeSync_4dc5d612-grn.jpg'
    }, {
        id: 18,
        title: 'Kit Mother Asrock H610M + Intel core I3 12100F',
        price: '247570',
        category: 'componentes',
        type: 'Kit De Actualización',
        description: 'Kit Mother Asrock H610M-HVS + Procesador Intel Core I3 12100F 4.3GHz Turbo (Sin Video Integrado)',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_0_Kit_Mother_Asrock_H610M-HVS___Procesador_Intel_Core_I3_12100F_4.3GHz_Turbo__Sin_Video_Integrado__93db433d-grn.jpg'
    }, {
        id: 19,
        title: 'Disco Solido SSD Marca Adata de 480GB',
        price: '39500',
        category: 'componentes',
        type: 'Almacenamiento',
        description: 'Disco Solido SSD Adata 480GB SU650 520MB/s* Tipo de conexión: SATA',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_29562_Disco_Solido_SSD_Adata_480GB_SU650_520MB_s__8b455937-grn.jpg'
    }, {
        id: 20,
        title: 'Microfono Asus ROG STRIX RGB Black',
        price: '282990',
        category: 'periferico',
        type: 'Micrófono',
        description: 'Microfono Asus ROG STRIX Carnyx RGB AuraSync USB-C Black',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_41443_Microfono_Asus_ROG_STRIX_Carnyx_RGB_AuraSync_USB-C_Black_ace5d37f-grn.jpg'
    }, {
        id: 21,
        title: 'Auriculares Inalambricos Logitech G733',
        price: '220990',
        category: 'perifericos',
        type: 'Auriculares',
        description: 'Auriculares Inalambricos Logitech G733 Lightspeed con iluminación RGB color Lila',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_21894_Auriculares_Inalambricos_Logitech_G733_Lightspeed_RGB_Lila_1dffcd73-grn.jpg'
    }, {
        id: 22,
        title: 'Parlante Thonet & Vander Speaker Sound Bar',
        price: '761090',
        category: 'perifericos',
        type: 'Parlantes',
        description: 'Parlante Thonet & Vander Speaker Sound Bar Rein Bluetooth 5.1 PC Smart TV 200W',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_37988_Parlante_Thonet___Vander_Speaker_Sound_Bar_Rein_Bluetooth_5.1_PC_Smart_TV_200W_10d5f81f-grn.jpg'
    }, {
        id: 23,
        title: 'Televisor Smart TV LG 50" 4K Ultra HD AI ThinQ',
        price: '599000',
        category: 'pantallas',
        type: 'Televisores',
        description: 'Smart TV  LG 50" 4K Ultra HD AI ThinQ 50UR8750PSA',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39985_Smart_TV__LG_50__4K_Ultra_HD_AI_ThinQ_50UR8750PSA_d998ec3d-grn.jpg'
    }, {
        id: 24,
        title: 'Cooler CPU Antec Symphony 240 ARGB',
        price: '109500',
        category: 'componentes',
        type: 'Refrigeración',
        description: 'Cooler CPU Antec Symphony 240 ARGB Water Cooler',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38505_Cooler_CPU_Antec_Symphony_240_ARGB_Water_Cooler_2e228534-grn.jpg'
    }
];

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 2000);
})

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id)
}

export const getCategory = (category) => {
    return products.filter((product) => product.category === category)
}