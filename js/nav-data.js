angular.module('app')
.constant('NAV', [
  {
    "name": "app.common.router",
    "url": "/api/app.common.router",
    "submenus": [
      {
        "title": "provider",
        "children": [
          {
            "name": "statehelperConfig",
            "url": "/api/app.common.router/provider/statehelperConfig"
          }
        ]
      },
      {
        "title": "service",
        "children": [
          {
            "name": "statehelper",
            "url": "/api/app.common.router/service/statehelper"
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
            "name": "viewRegistry",
            "url": "/api/app.core/service/viewRegistry"
          },
          {
            "name": "templateRegistry",
            "url": "/api/app.core/service/templateRegistry"
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
            "name": "geoService",
            "url": "/api/app.geo/service/geoService"
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
        "title": "function",
        "children": [
          {
            "name": "FiltersPanelPlugController",
            "url": "/api/app.layout/function/FiltersPanelPlugController"
          },
          {
            "name": "MainPanelPlugController",
            "url": "/api/app.layout/function/MainPanelPlugController"
          },
          {
            "name": "ShellController",
            "url": "/api/app.layout/function/ShellController"
          },
          {
            "name": "SidePanelPlugController",
            "url": "/api/app.layout/function/SidePanelPlugController"
          }
        ]
      },
      {
        "title": "service",
        "children": [
          {
            "name": "layoutService",
            "url": "/api/app.layout/service/layoutService"
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
        "title": "function",
        "children": [
          {
            "name": "AppbarController",
            "url": "/api/app.ui.appbar/function/AppbarController"
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
            "name": "rvMorph",
            "url": "/api/app.ui.common/directive/rvMorph"
          }
        ]
      },
      {
        "title": "service",
        "children": [
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
    "name": "app.ui.filters",
    "url": "/api/app.ui.filters",
    "submenus": [
      {
        "title": "directive",
        "children": [
          {
            "name": "rvFiltersDefault",
            "url": "/api/app.ui.filters/directive/rvFiltersDefault"
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
          }
        ]
      },
      {
        "title": "function",
        "children": [
          {
            "name": "MapNavigationController",
            "url": "/api/app.ui.mapnav/function/MapNavigationController"
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
        "title": "function",
        "children": [
          {
            "name": "MetadataController",
            "url": "/api/app.ui.metadata/function/MetadataController"
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
          },
          {
            "name": "rvMainPanel",
            "url": "/api/app.ui.panels/directive/rvMainPanel"
          },
          {
            "name": "rvSidePanel",
            "url": "/api/app.ui.panels/directive/rvSidePanel"
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
        "title": "function",
        "children": [
          {
            "name": "SettingsController",
            "url": "/api/app.ui.settings/function/SettingsController"
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
            "name": "rvLayerGroupToggle",
            "url": "/api/app.ui.toc/directive/rvLayerGroupToggle"
          },
          {
            "name": "rvLayerItem",
            "url": "/api/app.ui.toc/directive/rvLayerItem"
          }
        ]
      },
      {
        "title": "function",
        "children": [
          {
            "name": "TocController",
            "url": "/api/app.ui.toc/function/TocController"
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
        "title": "function",
        "children": [
          {
            "name": "ToolboxController",
            "url": "/api/app.ui.toolbox/function/ToolboxController"
          }
        ]
      }
    ]
  }
]);
