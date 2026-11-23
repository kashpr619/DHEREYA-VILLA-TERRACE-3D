var APP_DATA = {
  "scenes": [
    {
      "id": "0-view-1",
      "name": "VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0088834749298545,
          "pitch": 0.2474237841580873,
          "rotation": 0,
          "target": "1-view-2"
        },
        {
          "yaw": -2.5031962479332854,
          "pitch": 0.10966615199979657,
          "rotation": 0,
          "target": "3-view-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-view-2",
      "name": "VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2679376775034221,
          "pitch": 0.2487218992744804,
          "rotation": 0,
          "target": "0-view-1"
        },
        {
          "yaw": -1.1243745929931155,
          "pitch": 0.13462096474311025,
          "rotation": 0,
          "target": "3-view-4"
        },
        {
          "yaw": -2.679416303257714,
          "pitch": 0.1594582911124256,
          "rotation": 0,
          "target": "2-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-view-3",
      "name": "VIEW 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5021356975532107,
          "pitch": 0.16479392614792232,
          "rotation": 0,
          "target": "0-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-view-4",
      "name": "VIEW 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2566084229567434,
          "pitch": 0.23090236819992427,
          "rotation": 0,
          "target": "1-view-2"
        },
        {
          "yaw": 2.781145215688303,
          "pitch": 0.11046625514335418,
          "rotation": 0,
          "target": "2-view-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
