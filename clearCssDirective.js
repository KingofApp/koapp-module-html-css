angular.directive('koastyles', function () {
    return {
        scope: { code: '=' },
        template: "{{styleCode}}",
        link: function (scope, element, attrs) {
            scope.$watch('code', function (newVal) {
                if (newVal) {
                    //minify the code
                    newVal = newVal.replace(/\/\*((?!\*\/).)*\*\//g, ""); //delete comments
                    newVal = newVal.replace(/\s{2,}/g, " ");//delete all whitespace
                    newVal = newVal.replace(/\s*([:;{}])\s*/g, "$1"); //delete whitespace before and after of the special characters
                    newVal = newVal.replace(/;}/g, "}");//erase semicolon of the last property of the block
                    
                    //encapsulate the code
                    newVal = "." + attrs.setclass + " " + newVal;//put encapsulation class in front of the first css selector
                    newVal = newVal.replace(/[}](?!$)/g, "} ." + attrs.setclass + " ");//put encapsulation class in front of the rest css selectors

                    scope.styleCode = newVal; //assigning the minded CSS to the "styleCode" variable
                }
            });
        }
    };
});