describe("generates a new board", function() {
  beforeEach(function() {
    game = new Game();
    string = "2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0";
    game2 = new Game(string);
    boardArray = [2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  });

  it("board should not be null", function() {
     expect(game).not.toBeNull();
  });

  it("Board should be an array", function() {
     expect(game2.board).toEqual(boardArray);
  });
});


describe("Should be able to swipe right ", function() {
  beforeEach(function() {
    test1 = "2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0";
    array1Solution = [0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0];

    test2 = "0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0";
    array2Solution = [0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0];

    test3 = "2,4,4,2,0,0,0,0,0,0,0,0,0,0,0,0";
    array3Solution = [0,2,8,2,0,0,0,0,0,0,0,0,0,0,0,0];

    test4 = "2,2,4,4,0,0,0,0,0,0,0,0,0,0,0,0";
    array4Solution = [0,0,4,8,0,0,0,0,0,0,0,0,0,0,0,0];

    test5 = "16,2,4,4,0,0,0,0,0,0,0,0,0,0,0,0";
    array5Solution = [0,16,2,8,0,0,0,0,0,0,0,0,0,0,0,0];

    test6  = "2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0";
    array6Solution = [0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0];

  });

  it("board compress to the right 1", function() {
     game = new Game(test1);
     game.swipeRight();
     expect(game.board).toEqual(array1Solution);
  });

  it("board compress to the right 2", function() {
     game = new Game(test2);
     game.swipeRight();
     expect(game.board).toEqual(array2Solution);
  });

  it("board compress to the right 3", function() {
     game = new Game(test3);
     game.swipeRight();
     expect(game.board).toEqual(array3Solution);
  });

  it("board compress to the right 4", function() {
     game = new Game(test4);
     game.swipeRight();
     expect(game.board).toEqual(array4Solution);
  });

  it("board compress to the right 5", function() {
     game = new Game(test5);
     game.swipeRight();
     expect(game.board).toEqual(array5Solution);
  });

  it("board compress to the right 6", function() {
     game = new Game(test6);
     game.swipeRight();
     expect(game.board).toEqual(array6Solution);
  });

});



describe("Should be able to swipe left ", function() {
  beforeEach(function() {
    test1 = "2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0";
    array1Solution = [4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    test2 = "0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0";
    array2Solution = [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    test3 = "2,4,4,2,0,0,0,0,0,0,0,0,0,0,0,0";
    array3Solution = [2,8,2,0,0,0,0,0,0,0,0,0,0,0,0,0];

    test4 = "2,2,4,4,0,0,0,0,0,0,0,0,0,0,0,0";
    array4Solution = [4,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    test5 = "16,2,4,4,0,0,0,0,0,0,0,0,0,0,0,0";
    array5Solution = [16,2,8,0,0,0,0,0,0,0,0,0,0,0,0,0];

    test6 = "2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0";
    array6Solution = [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  });

  it("board compress to the left 1", function() {
     game = new Game(test1);
     game.swipeLeft()
     expect(game.board).toEqual(array1Solution);
  });

  it("board compress to the left 2", function() {
     game = new Game(test2);
     game.swipeLeft()
     expect(game.board).toEqual(array2Solution);
  });

  it("board compress to the left 3", function() {
     game = new Game(test3);
     game.swipeLeft()
     expect(game.board).toEqual(array3Solution);
  });

  it("board compress to the left 4", function() {
     game = new Game(test4);
     game.swipeLeft()
     expect(game.board).toEqual(array4Solution);
  });

  it("board compress to the left 5", function() {
     game = new Game(test5);
     game.swipeLeft()
     expect(game.board).toEqual(array5Solution);
  });

  it("board compress to the left 6", function() {
     game = new Game(test6);
     game.swipeLeft()
     expect(game.board).toEqual(array6Solution);
  });
});




