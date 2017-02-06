/**
 * Created by e1400482 on 31.1.2017.
 */
angular.module("app").controller("listCtrl", function(listFactory, cardFactory) {
    this.removeList = function (list) {
        listFactory.removeList(list);
    };

    this.getCards = function (list) {
        return cardFactory.getCards(list);
    };

    this.createCard = function (list) {
        cardFactory.createCard(list, this.cardDescription);
        this.cardDescription = '';
    }
});