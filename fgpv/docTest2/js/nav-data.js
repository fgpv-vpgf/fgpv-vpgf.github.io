angular.module('app')
.constant('NAV', [
  {
    "name": "app.common.router",
    "url": "/api/app.common.router",
    "submenus": [
      {
        "title": "service",
        "children": [
          {
            "name": "displayManager",
            "url": "/api/app.common.router/service/displayManager"
          },
          {
            "name": "initialState",
            "url": "/api/app.common.router/service/initialState"
          },
          {
            "name": "initialDisplay",
            "url": "/api/app.common.router/service/initialDisplay"
          }
        ]
      }
    ]
  },
  {
    "name": "app.core",
    "url": "/api/app.core",
    "submenus": [
      {
        "title": "service",
        "children": [
          {
            "name": "common",
            "url": "/api/app.core/service/common"
          },
          {
            "name": "configService",
            "url": "/api/app.core/service/configService"
          },
          {
            "name": "configDefaults",
            "url": "/api/app.core/service/configDefaults"
          },
          {
            "name": "templateRegistry",
            "url": "/api/app.core/service/templateRegistry"
          },
          {
            "name": "globalRegistry",
            "url": "/api/app.core/service/globalRegistry"
          },
          {
            "name": "version",
            "url": "/api/app.core/service/version"
          }
        ]
      },
      {
        "title": "function",
        "children": [
          {
            "name": "configBlock",
            "url": "/api/app.core/function/configBlock"
          },
          {
            "name": "runBlock",
            "url": "/api/app.core/function/runBlock"
          }
        ]
      }
    ]
  },
  {
    "name": "app.geo",
    "url": "/api/app.geo",
    "submenus": [
      {
        "title": "service",
        "children": [
          {
            "name": "gapi",
            "url": "/api/app.geo/service/gapi"
          },
          {
            "name": "Geo",
            "url": "/api/app.geo/service/Geo"
          },
          {
            "name": "geoService",
            "url": "/api/app.geo/service/geoService"
          },
          {
            "name": "identifyService",
            "url": "/api/app.geo/service/identifyService"
          },
          {
            "name": "LayerBlueprintUserOptions",
            "url": "/api/app.geo/service/LayerBlueprintUserOptions"
          },
          {
            "name": "LayerBlueprint",
            "url": "/api/app.geo/service/LayerBlueprint"
          },
          {
            "name": "layerRegistry",
            "url": "/api/app.geo/service/layerRegistry"
          },
          {
            "name": "legendEntryFactory",
            "url": "/api/app.geo/service/legendEntryFactory"
          },
          {
            "name": "legendService",
            "url": "/api/app.geo/service/legendService"
          },
          {
            "name": "mapService",
            "url": "/api/app.geo/service/mapService"
          },
          {
            "name": "metadataService",
            "url": "/api/app.geo/service/metadataService"
          }
        ]
      },
      {
        "title": "directive",
        "children": [
          {
            "name": "rvInitMap",
            "url": "/api/app.geo/directive/rvInitMap"
          }
        ]
      }
    ]
  },
  {
    "name": "app.layout",
    "url": "/api/app.layout",
    "submenus": [
      {
        "title": "service",
        "children": [
          {
            "name": "layoutService",
            "url": "/api/app.layout/service/layoutService"
          },
          {
            "name": "storageService",
            "url": "/api/app.layout/service/storageService"
          }
        ]
      },
      {
        "title": "directive",
        "children": [
          {
            "name": "rvShell",
            "url": "/api/app.layout/directive/rvShell"
          }
        ]
      }
    ]
  },
  {
    "name": "app.ui.appbar",
    "url": "/api/app.ui.appbar",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rvAppbar",
            "url": "/api/app.ui.appbar/directive/rvAppbar"
          }
        ]
      }
    ]
  },
  {
    "name": "app.ui.basemap",
    "url": "/api/app.ui.basemap",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rvBasemapItem",
            "url": "/api/app.ui.basemap/directive/rvBasemapItem"
          },
          {
            "name": "rvBasemap",
            "url": "/api/app.ui.basemap/directive/rvBasemap"
          }
        ]
      }
    ]
  },
  {
    "name": "app.ui.common",
    "url": "/api/app.ui.common",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rvDetectScrollbar",
            "url": "/api/app.ui.common/directive/rvDetectScrollbar"
          },
          {
            "name": "rvDragula",
            "url": "/api/app.ui.common/directive/rvDragula"
          },
          {
            "name": "rvMorph",
            "url": "/api/app.ui.common/directive/rvMorph"
          },
          {
            "name": "rvTruncate",
            "url": "/api/app.ui.common/directive/rvTruncate"
          }
        ]
      },
      {
        "title": "service",
        "children": [
          {
            "name": "errorService",
            "url": "/api/app.ui.common/service/errorService"
          },
          {
            "name": "fullscreen",
            "url": "/api/app.ui.common/service/fullscreen"
          },
          {
            "name": "rvPlugSlide",
            "url": "/api/app.ui.common/service/rvPlugSlide"
          },
          {
            "name": "rvToggleSlide",
            "url": "/api/app.ui.common/service/rvToggleSlide"
          }
        ]
      }
    ]
  },
  {
    "name": "app.ui.common.stepper",
    "url": "/api/app.ui.common.stepper",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rvStepperItem",
            "url": "/api/app.ui.common.stepper/directive/rvStepperItem"
          }
        ]
      },
      {
        "title": "object",
        "children": [
          {
            "name": "Stepper",
            "url": "/api/app.ui.common.stepper/object/Stepper"
          }
        ]
      }
    ]
  },
  {
    "name": "app.ui.details",
    "url": "/api/app.ui.details",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rvDetailsContent",
            "url": "/api/app.ui.details/directive/rvDetailsContent"
          },
          {
            "name": "rvDetailsExpand",
            "url": "/api/app.ui.details/directive/rvDetailsExpand"
          },
          {
            "name": "rvDetails",
            "url": "/api/app.ui.details/directive/rvDetails"
          }
        ]
      }
    ]
  },
  {
    "name": "app.ui.filters",
    "url": "/api/app.ui.filters",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rvFiltersDefaultMenu",
            "url": "/api/app.ui.filters/directive/rvFiltersDefaultMenu"
          },
          {
            "name": "rvFiltersDefault",
            "url": "/api/app.ui.filters/directive/rvFiltersDefault"
          }
        ]
      }
    ]
  },
  {
    "name": "app.ui.help",
    "url": "/api/app.ui.help",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rvHelpOverlay",
            "url": "/api/app.ui.help/directive/rvHelpOverlay"
          },
          {
            "name": "rvHelp",
            "url": "/api/app.ui.help/directive/rvHelp"
          }
        ]
      },
      {
        "title": "service",
        "children": [
          {
            "name": "helpService",
            "url": "/api/app.ui.help/service/helpService"
          }
        ]
      }
    ]
  },
  {
    "name": "app.ui.loader",
    "url": "/api/app.ui.loader",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rv-loader-file",
            "url": "/api/app.ui.loader/directive/rv-loader-file"
          },
          {
            "name": "rvLoaderMenu",
            "url": "/api/app.ui.loader/directive/rvLoaderMenu"
          },
          {
            "name": "rv-loader-service",
            "url": "/api/app.ui.loader/directive/rv-loader-service"
          }
        ]
      }
    ]
  },
  {
    "name": "app.ui.mapnav",
    "url": "/api/app.ui.mapnav",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rvMapnavButton",
            "url": "/api/app.ui.mapnav/directive/rvMapnavButton"
          },
          {
            "name": "rvMapnav",
            "url": "/api/app.ui.mapnav/directive/rvMapnav"
          }
        ]
      },
      {
        "title": "service",
        "children": [
          {
            "name": "mapNavigationService",
            "url": "/api/app.ui.mapnav/service/mapNavigationService"
          }
        ]
      }
    ]
  },
  {
    "name": "app.ui.metadata",
    "url": "/api/app.ui.metadata",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rvMetadataContent",
            "url": "/api/app.ui.metadata/directive/rvMetadataContent"
          },
          {
            "name": "rvMetadataExpand",
            "url": "/api/app.ui.metadata/directive/rvMetadataExpand"
          },
          {
            "name": "rvMetadataPanel",
            "url": "/api/app.ui.metadata/directive/rvMetadataPanel"
          }
        ]
      }
    ]
  },
  {
    "name": "app.ui.panels",
    "url": "/api/app.ui.panels",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rvContentPane",
            "url": "/api/app.ui.panels/directive/rvContentPane"
          },
          {
            "name": "rvFiltersPanel",
            "url": "/api/app.ui.panels/directive/rvFiltersPanel"
          }
        ]
      }
    ]
  },
  {
    "name": "app.ui.settings",
    "url": "/api/app.ui.settings",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rvSettings",
            "url": "/api/app.ui.settings/directive/rvSettings"
          }
        ]
      }
    ]
  },
  {
    "name": "app.ui.sidenav",
    "url": "/api/app.ui.sidenav",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rvMenuLink",
            "url": "/api/app.ui.sidenav/directive/rvMenuLink"
          }
        ]
      },
      {
        "title": "service",
        "children": [
          {
            "name": "sideNavigationService",
            "url": "/api/app.ui.sidenav/service/sideNavigationService"
          }
        ]
      }
    ]
  },
  {
    "name": "app.ui.toc",
    "url": "/api/app.ui.toc",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rvTocEntryFlag",
            "url": "/api/app.ui.toc/directive/rvTocEntryFlag"
          },
          {
            "name": "rvLayerItemSymbology",
            "url": "/api/app.ui.toc/directive/rvLayerItemSymbology"
          },
          {
            "name": "rvTocEntry",
            "url": "/api/app.ui.toc/directive/rvTocEntry"
          },
          {
            "name": "rvToc",
            "url": "/api/app.ui.toc/directive/rvToc"
          }
        ]
      },
      {
        "title": "service",
        "children": [
          {
            "name": "tocService",
            "url": "/api/app.ui.toc/service/tocService"
          }
        ]
      }
    ]
  },
  {
    "name": "app.ui.toolbox",
    "url": "/api/app.ui.toolbox",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rvToolbox",
            "url": "/api/app.ui.toolbox/directive/rvToolbox"
          }
        ]
      }
    ]
  }
]);
