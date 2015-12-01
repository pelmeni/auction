/**
 * Created by w10 on 01.12.2015.
 */
(
    function(){
     'use strict;'
        var NavBarDirectiveFactory=function() {
        return {
          templateUrl:'views/partial/NavbarDirective.html',
            restrict:'E'
        };
        };

        angular.module('auction').directive('auctionNavbar',NavBarDirectiveFactory);
    }
)();
