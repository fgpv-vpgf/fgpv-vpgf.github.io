angular.module('app')
.constant('API', [
  {
    "name": "app",
    "outputPath": "./partials/partials/api/app/index.html",
    "url": "/api/app"
  },
  {
    "name": "app.common.router",
    "outputPath": "./partials/partials/api/app.common.router/index.html",
    "url": "/api/app.common.router"
  },
  {
    "name": "app.core",
    "outputPath": "./partials/partials/api/app.core/index.html",
    "url": "/api/app.core"
  },
  {
    "name": "app.geo",
    "outputPath": "./partials/partials/api/app.geo/index.html",
    "url": "/api/app.geo"
  },
  {
    "name": "app.layout",
    "outputPath": "./partials/partials/api/app.layout/index.html",
    "url": "/api/app.layout"
  },
  {
    "name": "app.ui.appbar",
    "outputPath": "./partials/partials/api/app.ui.appbar/index.html",
    "url": "/api/app.ui.appbar"
  },
  {
    "name": "app.ui.common",
    "outputPath": "./partials/partials/api/app.ui.common/index.html",
    "url": "/api/app.ui.common"
  },
  {
    "name": "app.ui.filters",
    "outputPath": "./partials/partials/api/app.ui.filters/index.html",
    "url": "/api/app.ui.filters"
  },
  {
    "name": "app.ui.mapnav",
    "outputPath": "./partials/partials/api/app.ui.mapnav/index.html",
    "url": "/api/app.ui.mapnav"
  },
  {
    "name": "app.ui.metadata",
    "outputPath": "./partials/partials/api/app.ui.metadata/index.html",
    "url": "/api/app.ui.metadata"
  },
  {
    "name": "app.ui.panels",
    "outputPath": "./partials/partials/api/app.ui.panels/index.html",
    "url": "/api/app.ui.panels"
  },
  {
    "name": "app.ui.settings",
    "outputPath": "./partials/partials/api/app.ui.settings/index.html",
    "url": "/api/app.ui.settings"
  },
  {
    "name": "app.ui.sidenav",
    "outputPath": "./partials/partials/api/app.ui.sidenav/index.html",
    "url": "/api/app.ui.sidenav"
  },
  {
    "name": "app.ui.toc",
    "outputPath": "./partials/partials/api/app.ui.toc/index.html",
    "url": "/api/app.ui.toc"
  },
  {
    "name": "app.ui.toolbox",
    "outputPath": "./partials/partials/api/app.ui.toolbox/index.html",
    "url": "/api/app.ui.toolbox"
  },
  {
    "name": "app.ui",
    "outputPath": "./partials/partials/api/app.ui/index.html",
    "url": "/api/app.ui"
  },
  {
    "name": "statehelperConfig",
    "outputPath": "./partials/partials/api/app.common.router/provider/statehelperConfig.html",
    "url": "/api/app.common.router/provider/statehelperConfig"
  },
  {
    "name": "statehelper",
    "outputPath": "./partials/partials/api/app.common.router/service/statehelper.html",
    "url": "/api/app.common.router/service/statehelper"
  },
  {
    "name": "common",
    "outputPath": "./partials/partials/api/app.core/service/common.html",
    "url": "/api/app.core/service/common"
  },
  {
    "name": "configService",
    "outputPath": "./partials/partials/api/app.core/service/configService.html",
    "url": "/api/app.core/service/configService"
  },
  {
    "name": "configDefaults",
    "outputPath": "./partials/partials/api/app.core/service/configDefaults.html",
    "url": "/api/app.core/service/configDefaults"
  },
  {
    "name": "viewRegistry",
    "outputPath": "./partials/partials/api/app.core/service/viewRegistry.html",
    "url": "/api/app.core/service/viewRegistry"
  },
  {
    "name": "templateRegistry",
    "outputPath": "./partials/partials/api/app.core/service/templateRegistry.html",
    "url": "/api/app.core/service/templateRegistry"
  },
  {
    "name": "configBlock",
    "outputPath": "./partials/partials/api/app.core/function/configBlock.html",
    "url": "/api/app.core/function/configBlock"
  },
  {
    "name": "runBlock",
    "outputPath": "./partials/partials/api/app.core/function/runBlock.html",
    "url": "/api/app.core/function/runBlock"
  },
  {
    "name": "geoService",
    "outputPath": "./partials/partials/api/app.geo/service/geoService.html",
    "url": "/api/app.geo/service/geoService"
  },
  {
    "name": "rvInitMap",
    "outputPath": "./partials/partials/api/app.geo/directive/rvInitMap.html",
    "url": "/api/app.geo/directive/rvInitMap"
  },
  {
    "name": "FiltersPanelPlugController",
    "outputPath": "./partials/partials/api/app.layout/function/FiltersPanelPlugController.html",
    "url": "/api/app.layout/function/FiltersPanelPlugController"
  },
  {
    "name": "layoutService",
    "outputPath": "./partials/partials/api/app.layout/service/layoutService.html",
    "url": "/api/app.layout/service/layoutService"
  },
  {
    "name": "MainPanelPlugController",
    "outputPath": "./partials/partials/api/app.layout/function/MainPanelPlugController.html",
    "url": "/api/app.layout/function/MainPanelPlugController"
  },
  {
    "name": "ShellController",
    "outputPath": "./partials/partials/api/app.layout/function/ShellController.html",
    "url": "/api/app.layout/function/ShellController"
  },
  {
    "name": "SidePanelPlugController",
    "outputPath": "./partials/partials/api/app.layout/function/SidePanelPlugController.html",
    "url": "/api/app.layout/function/SidePanelPlugController"
  },
  {
    "name": "AppbarController",
    "outputPath": "./partials/partials/api/app.ui.appbar/function/AppbarController.html",
    "url": "/api/app.ui.appbar/function/AppbarController"
  },
  {
    "name": "rvMorph",
    "outputPath": "./partials/partials/api/app.ui.common/directive/rvMorph.html",
    "url": "/api/app.ui.common/directive/rvMorph"
  },
  {
    "name": "rvPlugSlide",
    "outputPath": "./partials/partials/api/app.ui.common/service/rvPlugSlide.html",
    "url": "/api/app.ui.common/service/rvPlugSlide"
  },
  {
    "name": "rvToggleSlide",
    "outputPath": "./partials/partials/api/app.ui.common/service/rvToggleSlide.html",
    "url": "/api/app.ui.common/service/rvToggleSlide"
  },
  {
    "name": "rvFiltersDefault",
    "outputPath": "./partials/partials/api/app.ui.filters/directive/rvFiltersDefault.html",
    "url": "/api/app.ui.filters/directive/rvFiltersDefault"
  },
  {
    "name": "rvMapnavButton",
    "outputPath": "./partials/partials/api/app.ui.mapnav/directive/rvMapnavButton.html",
    "url": "/api/app.ui.mapnav/directive/rvMapnavButton"
  },
  {
    "name": "MapNavigationController",
    "outputPath": "./partials/partials/api/app.ui.mapnav/function/MapNavigationController.html",
    "url": "/api/app.ui.mapnav/function/MapNavigationController"
  },
  {
    "name": "mapNavigationService",
    "outputPath": "./partials/partials/api/app.ui.mapnav/service/mapNavigationService.html",
    "url": "/api/app.ui.mapnav/service/mapNavigationService"
  },
  {
    "name": "MetadataController",
    "outputPath": "./partials/partials/api/app.ui.metadata/function/MetadataController.html",
    "url": "/api/app.ui.metadata/function/MetadataController"
  },
  {
    "name": "rvContentPane",
    "outputPath": "./partials/partials/api/app.ui.panels/directive/rvContentPane.html",
    "url": "/api/app.ui.panels/directive/rvContentPane"
  },
  {
    "name": "rvFiltersPanel",
    "outputPath": "./partials/partials/api/app.ui.panels/directive/rvFiltersPanel.html",
    "url": "/api/app.ui.panels/directive/rvFiltersPanel"
  },
  {
    "name": "rvMainPanel",
    "outputPath": "./partials/partials/api/app.ui.panels/directive/rvMainPanel.html",
    "url": "/api/app.ui.panels/directive/rvMainPanel"
  },
  {
    "name": "rvSidePanel",
    "outputPath": "./partials/partials/api/app.ui.panels/directive/rvSidePanel.html",
    "url": "/api/app.ui.panels/directive/rvSidePanel"
  },
  {
    "name": "SettingsController",
    "outputPath": "./partials/partials/api/app.ui.settings/function/SettingsController.html",
    "url": "/api/app.ui.settings/function/SettingsController"
  },
  {
    "name": "rvMenuLink",
    "outputPath": "./partials/partials/api/app.ui.sidenav/directive/rvMenuLink.html",
    "url": "/api/app.ui.sidenav/directive/rvMenuLink"
  },
  {
    "name": "sideNavigationService",
    "outputPath": "./partials/partials/api/app.ui.sidenav/service/sideNavigationService.html",
    "url": "/api/app.ui.sidenav/service/sideNavigationService"
  },
  {
    "name": "rvLayerGroupToggle",
    "outputPath": "./partials/partials/api/app.ui.toc/directive/rvLayerGroupToggle.html",
    "url": "/api/app.ui.toc/directive/rvLayerGroupToggle"
  },
  {
    "name": "rvLayerItem",
    "outputPath": "./partials/partials/api/app.ui.toc/directive/rvLayerItem.html",
    "url": "/api/app.ui.toc/directive/rvLayerItem"
  },
  {
    "name": "TocController",
    "outputPath": "./partials/partials/api/app.ui.toc/function/TocController.html",
    "url": "/api/app.ui.toc/function/TocController"
  },
  {
    "name": "tocService",
    "outputPath": "./partials/partials/api/app.ui.toc/service/tocService.html",
    "url": "/api/app.ui.toc/service/tocService"
  },
  {
    "name": "ToolboxController",
    "outputPath": "./partials/partials/api/app.ui.toolbox/function/ToolboxController.html",
    "url": "/api/app.ui.toolbox/function/ToolboxController"
  }
]);
