import { Component } from '@angular/core'

export class DropdownComponent {
   colours = [{
    name: "Red",
    hex: "#F21B1B" },
    {
      name: "Blue",
      hex: "#1B66F2"
    },
    {
      name: "Green",
      hex: "#07BA16"
    }];
    colour = "";
    listVisible = false;
    isPlaceholder = false;
    placeholder= "@";
    list = "=";
    selected = "=";
    property = "@";

    select(item) {

        scope.select = function(item) {
          scope.isPlaceholder = false;
          scope.selected = item;
        };
        scope.isSelected = function(item) {
                  return item[scope.property] === scope.selected[scope.property];
                };
                scope.show = function() {
                   scope.listVisible = true;
                 };
                 $rootScope.$on("documentClicked", function(inner, target) {
                   console.log($(target[0]).is(".dropdown-display.clicked") || $(target[0]).parents(".dropdown-display.clicked").length > 0);
                    if (!$(target[0]).is(".dropdown-display.clicked") && !$(target[0]).parents(".dropdown-display.clicked").length > 0) scope.$apply(function() {
                      scope.listVisible = false;
                    });
                  });
                  scope.$watch("selected", function(value) {
                    scope.isPlaceholder = scope.selected[scope.property] === undefined; scope.display = scope.selected[scope.property];
                   });
                  }
                 }
