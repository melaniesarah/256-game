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
    array5Solution = [0,16,4,8,0,0,0,0,0,0,0,0,0,0,0,0];

    test6  = "2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0";
    array6Solution = [0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0];
    
  });

  it("board compress to the right 1", function() {
  	 game = new Game(test1);
     expect(game.swipeRight()).toEqual(array1Solution);
  });

  it("board compress to the right 2", function() {
  	 game = new Game(test2);
     expect(game.swipeRight()).toEqual(array2Solution);
  });

  it("board compress to the right 3", function() {
  	 game = new Game(test3);
     expect(game.swipeRight()).toEqual(array3Solution);
  });

  it("board compress to the right 4", function() {
  	 game = new Game(test4);
     expect(game.swipeRight()).toEqual(array4Solution);
  });

  it("board compress to the right 5", function() {
  	 game = new Game(test5);
     expect(game.swipeRight()).toEqual(array5Solution);
  });

  it("board compress to the right 6", function() {
  	 game = new Game(test6);
     expect(game.swipeRight()).toEqual(array6Solution);
  });

});


describe("Should be reverse an array ", function() {
  beforeEach(function() {
    test1 = "2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0";
    array1Solution = [2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0];

    test2 = "0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0";
    array1Solution = [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0];

    test3 = "2,4,4,2,0,0,0,0,0,0,0,0,0,0,0,0";
    array1Solution = [2,4,4,2,0,0,0,0,0,0,0,0,0,0,0,0];

    test4 = "2,2,4,4,0,0,0,0,0,0,0,0,0,0,0,0";
    array1Solution = [4,4,2,2,0,0,0,0,0,0,0,0,0,0,0,0];
    
  	});

	it("board can reverse the array 1", function() {
		game = new Game(test1);
		expect(game.reverse()).toEqual(array1Solution);
	});


	it("board can reverse the array 2", function() {
		game = new Game(test2);
		expect(game.reverse()).toEqual(array2Solution);
	});

	it("board can reverse the array 3", function() {
		game = new Game(test3);
		expect(game.reverse()).toEqual(array3Solution);
	});

	it("board can reverse the array 4", function() {
		game = new Game(test4);
		expect(game.reverse()).toEqual(array4Solution);
	});

});



describe("Should be able to swipe left ", function() {
  beforeEach(function() {
    test1 = "2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0";
    array1Solution = [4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    test2 = "0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0";
    array2Solution = [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0];

    test3 = "2,4,4,2,0,0,0,0,0,0,0,0,0,0,0,0";
    array3Solution = [2,8,2,0,0,0,0,0,0,0,0,0,0,0,0,0];

    test4 = "2,2,4,4,0,0,0,0,0,0,0,0,0,0,0,0";
    array4Solution = [8,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    test5 = "16,2,4,4,0,0,0,0,0,0,0,0,0,0,0,0";
    array5Solution = [8,5,16,0,0,0,0,0,0,0,0,0,0,0,0,0];

    test6 = "2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0";
    array6Solution = [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  });

  it("board compress to the right 1", function() {
  	 game = new Game(test1);
     expect(game.swipeRight()).toEqual(array1Solution);
  });

  it("board compress to the right 2", function() {
  	 game = new Game(test2);
     expect(game.swipeRight()).toEqual(array2Solution);
  });

  it("board compress to the right 3", function() {
  	 game = new Game(test3);
     expect(game.swipeRight()).toEqual(array3Solution);
  });

  it("board compress to the right 4", function() {
  	 game = new Game(test4);
     expect(game.swipeRight()).toEqual(array4Solution);
  });

  it("board compress to the right 5", function() {
  	 game = new Game(test5);
     expect(game.swipeRight()).toEqual(array5Solution);
  });

  it("board compress to the right 6", function() {
  	 game = new Game(test6);
     expect(game.swipeRight()).toEqual(array6Solution);
  });
});




