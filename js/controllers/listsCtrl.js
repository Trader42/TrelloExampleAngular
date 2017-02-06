/**
 * Created by e1400482 on 31.1.2017.
 */

angular.module('app').controller('listsCtrl', function(listFactory) {
   this.lists = listFactory.getLists();

   this.addList = function () {
       listFactory.addList(this.listName);
       this.listName = "";
   };
});